const ErrorHandler = require("../utils/errorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";
  // cast error handling or mongodb id error
  if (error.name === "CastError") {
    const message = `Resource not found Invalid: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  /** Mongoose duplicate key error */
  if (error.code === 11000) {
    const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
    error = new ErrorHandler(message, 400);
  }

  // JWT error
  if (error.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, Try again Please `;
    error = new ErrorHandler(message, 400);
  }
  // JWT Expire error
  if (error.name === "TokenExpiredError") {
    const message = `Json web token is Expired, Try again Please `;
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
