const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [28, "Name cannot exceed 28 characterr"],
    minLength: [3, "Name should have more  then 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter your valid Email"],
  },
  bio: {
    type: String,
    maxLength: [100, "bio cannot exceed 100 character"],
  },
  address: {
    type: String,
    maxLength: [50, "address cannot exceed 28 character"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password cannot have more then 8 character"],
  },
  avatar: {
    publicId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

userSchema.methods.getResetPassword = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
