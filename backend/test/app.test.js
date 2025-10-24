const supertest = require("supertest")
const app = require("../app.js")
const api = supertest(app)

describe("there is data in the '/api/products'", () => {
    
    test("request to /api/products is successful", async () => {
        await api.get("/api/products").expect(200)

    }, 10000)
})