const cors = require("cors")
const express = require("express")
const productsRoute = require("./routes/productRoute")

const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use("/api", productsRoute)

app.listen(3000,function() {
    console.log(`Running on port ${PORT}`)
})