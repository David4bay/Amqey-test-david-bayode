const axios = require("axios")
const dbServer = require("../constants/constants")
const validator = require("../utils/validator")

async function getProducts(_, response) {

    try {

        const responseData = await axios.get(dbServer)

        let products = await responseData.data
        
        if (products.length < 1) {
            return response.status(404).json({
                error: "products unavailable."
            })
        }

        return response.status(200).json({
            data: products
        })

    } catch(error) {

        return response.status(500).json({
            error: "Unable to process request."
        })
    }
}

async function postProducts(request, response) {
    try {
        
        const productInfo = request.body
        // console.log("productInfo", productInfo)

        if (!productInfo || !productInfo.name || typeof productInfo.name !== "string") {
            return response.status(400).json({
                error: "invalid data entry."
            })
        }

        const size = await axios.get(dbServer)

        if (!size.data) {
            return response.status(400).json({
                error: "unable to find product range."
            })
        }

        productInfo.id = String(size.data.length + 1)

        const postData = await axios.post(dbServer, productInfo)

        if (!postData.data) {
            return response.status(400).json({
                error: "unable to save product."
            })
        }

        return response.status(201).json({
            message: `product ${productInfo.name} created successfully.`
        })

    } catch (error) {
        return response.status(500).json({
            error: "server unable to handle this request."
        })
    }
}

async function getProduct(request, response) {

    try {

    const singleProductId = request.params.id
    // console.log("singleProductId", singleProductId)
    

    if (!singleProductId) {
        return response.status(400).json({
            error: "invalid product id."
        })
    }

    const canFindProduct = await axios.get(`${dbServer}/${singleProductId}`)
    // console.log("canFindProduct", canFindProduct)
    if (!canFindProduct.data) {
        return response.status(404).json({
            error: "unable to find product."
        })
    }

    return response.status(200).json(canFindProduct.data)

    } catch (error) {

        return response.status(500).json({
            error: "server unable to handle the request."
        })
    }
}

async function putProduct(request, response) {

    const productId = request.params.id
    const productInfo = request.body

    try {

        if (!productId || !productInfo || isNaN(productId)) {
            return response.status(400).json({
                error: "invalid product information."
            })
        }
        
        if (!validator(productInfo)) {
            return response.status(400).json({
            error: "invalid or missing product information."
        })
        }
        
        // console.log("after validateProductBody")

    const findProduct = await axios.get(`${dbServer}/${productId}`)

    if (!findProduct.data) {
        return response.status(404).json({
            error: "product does not exist."
        })
    }

    let modifiedData = {...findProduct.data, ...productInfo}

    const modifyProduct = await axios.put(`${dbServer}/${productId}`, modifiedData)

    if (!modifyProduct.data) {
        return response.status(400).json({
            error: "unable to modify product."
        })
    }

    // console.log("modifyProduct", modifyProduct.data)
    
    if (!modifyProduct.data) {
        return response.status(400).json({
            error: "unable to modify product."
        })
    }

    return response.status(200).json({
        message: `product ${productInfo.name} has been modified successfully.`
    })

    } catch(error) {
        
        return response.status(500).json({
            error: "server unable to handle request."
        })
    }
}

async function deleteProduct(request, response) {
    
    const productId = request.params.id

    try {
        
        if (isNaN(productId) || !productId) {
            return response.status(400).json({ 
                error: "product id is invalid."
            })
        }
        // console.log("reached here")
        const findProduct = await axios.get(`${dbServer}/${productId}`)

        if (!findProduct.data) {
            return response.status(404).json({
                error: "product does not exist"
            })
        }

        const deleteProduct = await axios.delete(`${dbServer}/${productId}`)

        if (!deleteProduct.data) {
            return response.satus(400).json({
                error: "unable to delete product information."
            })
        }

        return response.status(204).json({
            message: `${findProduct.name} deleted successfully.`
        })

    } catch(error) {
        return response.status(500).json({
            error: "server unable to handle request."
        })
    }

}

module.exports = {
    getProducts,
    postProducts,
    getProduct,
    putProduct,
    deleteProduct
}