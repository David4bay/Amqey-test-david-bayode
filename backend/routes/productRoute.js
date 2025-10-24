const express = require("express")
const products = require("../controllers/products")
const productRoute = express.Router()

const { 
    getProduct, 
    getProducts, 
    postProducts,
    putProduct,
    deleteProduct 
} = products

productRoute.get("/products", getProducts)

productRoute.post("products", postProducts)

productRoute.get("/products/:id", getProduct)

productRoute.put("/products/:id", putProduct)

productRoute.delete("/product/:id", deleteProduct)


module.exports = productRoute