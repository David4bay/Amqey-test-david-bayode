const supertest = require("supertest")
const assert = require("node:assert")
const app = require("../app.js")
const api = supertest(app)
const dataSize = require("../db/database.json").products.length

describe("data is in '/api/products'", () => {

    test("request to /api/products is successful", async () => {
        await api.get("/api/products").expect(200)

    }, 10000)

    test("request to /api/products returns valid json", async () => {
        await api.get("/api/products").expect("Content-Type", /application\/json/)
    })
})

describe("can fetch a single product in '/api/products/:id", () => {

    test("can fetch 1 product", async () => {
        await api.get("/api/products/1").expect(200)
    })

    test("id of product 1 is 1", async () => {
        const product = await api.get("/api/products/1")
        assert.strictEqual(product.body.id, "1")
    })
})

describe("can add and delete a new product to /api/products", () => {

    let previousSize = dataSize

    const dummyData = {
      
      "name": "Phone",
      "description": "phone 1",
      "price": 18000,
      "category": "Electronics",
      "imageUrl": "https://picsum.photos/seed/product50/400/400",
      "inStock": true,
      "createdAt": "2024-03-04T11:15:00Z"
    }

    test("can add a product", async () => {
        await api.post("/api/products")
        .send(dummyData)
        .expect(201)
    })

    test("a single product can be deleted", async () => {
        await api.delete(`/api/products/${dataSize + 1}`)
        .expect(204)
    })
})

describe("can modify a product", () => {

    const dummyData =  {
      "id": "50",
      "name": "Phone Stand Adjustable",
      "description": "Foldable aluminum phone stand compatible with all smartphones and tablets",
      "price": 18000,
      "category": "Electronics",
      "imageUrl": "https://picsum.photos/seed/product50/400/400",
      "inStock": false,
      "createdAt": "2024-03-04T11:15:00Z"
    }

    const dummyDat2 =  {
      "id": "50",
      "name": "Phone Stand Adjustable",
      "description": "Foldable aluminum phone stand compatible with all smartphones and tablets",
      "price": 18000,
      "category": "Electronics",
      "imageUrl": "https://picsum.photos/seed/product50/400/400",
      "inStock": true,
      "createdAt": "2024-03-04T11:15:00Z"
    }

    test("can modify the last product", async () => {
        await api.put(`/api/products/${dataSize}`).
        send(dummyData)
        .expect(200)
    })

    test("can re-modify the last product", async () => {
        await api.put(`/api/products/${dataSize}`).
        send(dummyData2)
        .expect(200)
    })
})
