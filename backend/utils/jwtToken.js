const jwt = require("jsonwebtoken");

const sendToken = async (user, statusCode, res) => {
  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });
  const option = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
