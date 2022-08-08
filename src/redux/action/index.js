export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
} 

export const deleteCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
} 

export const adjustItemQty = (product, qty) => {
    return {
        type: "ADJQTY",
        payload: {
            id: product,
            qty,
        }
    }
}