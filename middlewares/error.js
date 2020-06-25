const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err };
    console.log(err);
    error.message = err.message;
    console.log(err.name);

    // mongoose bad objectId
    if (err.name === 'CastError') {
        const message = `Bootcamp not found with ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    // mongoose duplicate key
    if (err.code === 11000) {
        const message = `duplicate field entered`;
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        sucess: false,
        error: error.message || 'Server error',
    });
    // res.render('error', { error: err });
};

module.exports = errorHandler;