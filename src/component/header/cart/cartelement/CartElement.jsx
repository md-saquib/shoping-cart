import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../../redux/ActionCreater/cartAction/CartAction'
import './cartelement.css'

const CartElement = ({prod}) => {

    const dispatch = useDispatch();

  return (
    <>
    <div >
        <img src={prod.image} className="img" alt="" />
    </div>
    <div className="name-price">
        <div className="name">{prod.name.length > 15 ? prod.name.slice(0,15)  : prod.name}</div>
        <div className="price">$ &nbsp;{prod.price}</div>
    </div>
    <div >
        <AiFillDelete className="delete" onClick={()=>dispatch(removeFromCart(prod.userId))}/>
    </div>
    </>
  )
}

export default CartElement