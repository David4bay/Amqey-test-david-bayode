const logger = require("./logger")

function requestLogger(request, _, next) {
    logger.info("Method: ", request.method)
    logger.info("Path: ", request.path)
    logger.info("Body: ", request.body)
    next()
}

function unknownEndpoint(_, response) {
    return response.status(404).json({
        error: "unknown endpoint"
    })
}

function errorHandler(_, response, next) {
    logger.error(error.message)

    error.name = error.name.toLowerCase()
// remember to add json login to mobile end 
    switch(error.name) {
        case "tokenexpirederror":
            return response.status(401).json({
                error: "token expired"
            })
    }

    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}