import Joi from "joi";
const { ValidationError } = Joi

const errorHandler = (err, req, res, next) => {
    let statusCode
    let errorData

    if (err instanceof ValidationError) {
        statusCode = 422
        errorData = {
            mess: err.message
        }
    }
    return res.status(statusCode).json(errorData)
}

export default errorHandler