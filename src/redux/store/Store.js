import {createStore,combineReducers ,applyMiddleware} from 'redux'
import { productReducer } from '../Reducer/DataReducer'
import thunk  from 'redux-thunk'
import { CartReducer } from '../Reducer/CartReducer'



const combineReducer = combineReducers({
   
    data: productReducer,
    cartData:CartReducer
})

export const store = createStore(combineReducer,applyMiddleware(thunk))