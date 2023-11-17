

let initialValue = { cart: [] }
export const CartReducer = (state = initialValue, action) => {

    switch (action.type) {
        case 'addToCart':
            return { ...state, cart:[...state.cart,{...action.paylod , qty : 1}]}
        case 'removeFromCart':
            return {...state, cart: state.cart.filter((el) => el.userId !== action.paylod) }
        case 'updateCartQuantity':
            return {...state,cart: state.cart.filter((el)=> el.userId === action.paylod.id ? (el.qty = action.paylod.qty) : el.qty)}

        default :
            
           
    }

    return state
}