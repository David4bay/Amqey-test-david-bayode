const cors = require("cors")
const express = require("express")
const productsRoute = require("./routes/productRoute")
const {unknownEndpoint, requestLogger, errorHandler} = require("./middleware/middleware")

const app = express()
app.use(cors())
app.use(express.json())

app.use(requestLogger)
app.use("/api", productsRoute)
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app