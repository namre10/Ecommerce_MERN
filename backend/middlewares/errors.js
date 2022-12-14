const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODCUTION") {
    let error = { ...err };
    err.message = err.message;
    res.status(error.statusCode).json({
      success: false,
      message: error.message || "INTERNAL SERVER ERROR",
    });
  }
};
