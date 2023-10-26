const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message
    // Log to console for dev
    console.log(err)
    // Monoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = new ErrorResponse(message, 500)
    }
    // Monoose bad ObjectId
    if (err.code === 11000) {
        const message = `Duplicate field value added`
        error = new ErrorResponse(message, 400)
    }
    // Monoose Validation
    if (err.name === 'ValidationError') {
        const message = Object.values(err.error).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }



    res.status(error.statusCide || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}
module.exports = errorHandler