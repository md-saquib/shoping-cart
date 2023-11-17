// import { createStore } from 'redux'
export const buyshirt = (price) => {
    return { type: 'buy-a-shirt', paylod: price }
}

export const buypant = (price) => {
    return { type: 'buy-a-pant', paylod: price }
}

export const returnshirt = (price) => {
    return { type: 'return-shirt',paylod: price }
}

export const returnpant = (price) => {
    return { type: 'return-pant',paylod: price }
}

const initialState = {
    shirt: 50,
    pant: 50,
    totalSell: 0,
}
export const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'buy-a-shirt':
            return { ...state, shirt: state.shirt - 1,totalSell: state.totalSell + action.paylod }

        case 'buy-a-pant':
            return { ...state, pant: state.pant - 1,totalSell: state.totalSell + action.paylod }

        case 'return-shirt':
            return { ...state, shirt: state.shirt + 1 ,totalSell: state.totalSell - action.paylod}

        case 'return-pant':
            return { ...state, pant: state.pant + 1 ,totalSell: state.totalSell - action.paylod }

        default:
            break;
    }
    return state

}

// export const store = createStore(Reducer)