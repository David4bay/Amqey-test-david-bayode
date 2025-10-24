
export interface Product {
    id: number 
    name: string 
    price: number 
    category: string 
    imageUrl: string  
    inStock: boolean 
    createdAt: string | Date
}

const API_URL = "http://localhost:3000/api"

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`)
    const data = await response.json()

    return data
}

export async function getProduct(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`)
    const data = await response.json()

    return data
}

export async function postProducts(payload: Product): Promise<any> {
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(payload)
    })

    const data = await response.json()

    return data
}

export async function putProducts(id: string, payload: Product): Promise<any> {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })
    const data = await response.json()

    return data
}

export async function deleteProducts(id: string): Promise<any> {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "delete"
    })
    const data = await response.json()

    return data
}
