# Middleware Functions

## isautherize Middleware

The `isautherize` middleware function is responsible for checking if the user has the required authorization role. It ensures that only users with the 'admin' role can access certain routes.

### Parameters:
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

### Usage:
```javascript
const { ErrorHandler } = require('./error');

exports.isautherize = async (req, res, next) => {
    try {
        const { role } = req.body;
        const user = await User.findOne({ role });
        if (!role == 'admin') {
            return next(new ErrorHandler('Unauthorize role', 500));
        }
        next();
    } catch (error) {
        return next(error);
    }
}
Error Handler Middleware
The error handler middleware function catches errors that occur during the execution of other middleware functions or route handlers. It formats the error message and sends an appropriate response to the client.

Parameters:
err: The error object.
req: The request object.
res: The response object.
next: The next middleware function.

###usage:

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const errormiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server error";
    err.statusCode = err.statusCode || 500;
    if (err.name === "CastError") {
        const message = `Invalid: Resource not found: ${err.path}`;
        err = new ErrorHandler(message, 404);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
    next();
}

module.exports = { ErrorHandler, errormiddleware };
