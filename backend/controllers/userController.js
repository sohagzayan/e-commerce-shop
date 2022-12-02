const tryCatch = require("../middleware/tryCatch");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
// create a new user
exports.registerUser = tryCatch(async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    avatar: {
      publicId: "test id that",
      url: "user profile image",
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
  const resetPasswordUrl = `${req.protocol}//${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
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
