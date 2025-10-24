const axios = require("axios")
const dbServer = require("../constants/constants")

async function getProducts(_, response) {

    try {

        const responseData = await axios.get(dbServer)

        let products = await responseData.data
        
        if (products.length < 1) {
            return response.status(404).json({
                message: "products unavailable."
            })
        }

        return response.status(200).json({
            data: products
        })
    } catch(error) {
        return response.status(500).json({
            error: "request unknown."
        })
    }
}

function postProducts(request, response) {

    
}

function getProduct(request, response) {

}

function putProduct(request, response) {

}

function deleteProduct(request, response) {

}

module.exports = {
    getProducts,
    postProducts,
    getProduct,
    putProduct,
    deleteProduct
}