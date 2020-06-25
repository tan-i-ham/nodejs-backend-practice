const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err };

    error.message = err.message;
    console.log(err.name);

    // mongoose bad objectId
    if (err.name === 'CastError') {
        const message = `Bootcamp not found with ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    res.status(error.statusCode || 500).json({
        sucess: false,
        error: error.message || 'Server error',
    });
    // res.render('error', { error: err });
};

module.exports = errorHandler;