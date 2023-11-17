
export const addToCart =(prod)=>{
    return{
        type:'addToCart',
        paylod:prod
    }
}

export const removeFromCart = (id)=>{
    return{
        type:'removeFromCart',
        paylod:id
    }
}

export const cartQuantity = (qty)=>{
    return{
        type :'updateCartQuantity',
        paylod : qty
    }
}