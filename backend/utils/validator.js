
function validator(payload) {
// rmember to refactor this to use express-validator
console.log("payload", payload)
    switch(true) {
        case typeof payload.name !== "string":
            return false 
        case typeof payload.description !== "string":
            return false 
        case typeof payload.price !== "number":
            return false 
        case typeof payload.category !== "string":
            return false 
        case typeof payload.imageUrl !== "string":
            return false 
        case typeof payload.inStock !== "boolean":
            return false
        case typeof payload.createdAt !== "string":
            return false
        default:
            break
    }
    return true
}

module.exports = validator