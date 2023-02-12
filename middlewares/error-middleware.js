import ApiError from "../exeptions/apiError.js";

const errorMiddleware = (err, req, res) => {
    console.log(err.message)

    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors })
    }

    if (!!err.path) {
        return res.status(400).json({ message: `${err.path} is extra field`, errors: {} })
    }

    if (err?.name === 'ValidationError') {
        return res.status(400).json({ message: err.message, errors: err.errors })
    }

    return res.status(500).json({ message: 'Unhandled error', errors: {} })
}

export default errorMiddleware