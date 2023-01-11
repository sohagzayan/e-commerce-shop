const tryCatch = require("../middleware/tryCatch");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const userModel = require("../models/userModel");
const cloudinary = require("cloudinary");

// create a new user
exports.registerUser = tryCatch(async (req, res, next) => {
  const userData = req.body;
  const { avatar, name, email, password } = userData;
  const myCloud = await cloudinary.v2.uploader.upload(avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });
  // const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    avatar: {
      publicId: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  /** Get jwt token and store token on cookie */
  sendToken(user, 200, res);
});

// login user

exports.loginUser = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;
  /**  Check is user  given email and password  */
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password"));
  }
  /** if user not finding on database  */
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("Invalid user email or password"));
  }
  /** Check user password is isValid */
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return next(new ErrorHandler("Invalid user email or password"));
  }
  /** Get jwt token and store token on cookie */
  sendToken(user, 201, res);
});

/** Logout User */
exports.logOutUser = tryCatch(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
});

/** Reset password */
exports.forgotPassword = tryCatch(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User Not Found", 404));
  }
  const resetToken = user.getResetPassword();
  await user.save({ validateBeforeSave: false });
  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
  const message = `your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you are not requested this email then please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce password recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email send to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.resetPassword = tryCatch(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(
      new ErrorHandler(
        "Reset password token is invalid or has been expired",
        400
      )
    );
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  user.password = hashPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  sendToken(user, 200, res);
});

/** Get User Details */
exports.getUserDetails = tryCatch(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

/** update user password */
exports.updateUserPassword = tryCatch(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const isPasswordValid = await bcrypt.compare(
    req.body.oldPassword,
    user.password
  );
  if (!isPasswordValid) {
    return next(new ErrorHandler("Old password is incorrect"));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match"));
  }

  const newhashPassword = await bcrypt.hash(req.body.newPassword, 10);

  user.password = newhashPassword;
  await user.save();
  sendToken(user, 200, res);
});

/** Update User Profile */
exports.updateUserProfile = tryCatch(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    bio: req.body.bio,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);
    const imageId = user.avatar.publicId;
    await cloudinary.v2.uploader.destroy(imageId);
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });
    newUserData.avatar = {
      publicId: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

/** Get all user > admin */
exports.getAllUser = tryCatch(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

/** Get single User > admin */
exports.getSingleUser = tryCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});

/** Update user role > admin */
exports.updateUserRole = tryCatch(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindModify: false,
  });
  res.status(200).json({
    success: true,
  });
});

/** Delete user > admin */

exports.deleteUser = tryCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id: ${req.params.id}`)
    );
  }
  await user.remove();
  res.status(200).json({
    success: true,
    message: "Delete User successfully",
  });
});
