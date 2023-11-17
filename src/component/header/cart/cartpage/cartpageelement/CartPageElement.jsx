import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { cartQuantity, removeFromCart } from '../../../../../redux/ActionCreater/cartAction/CartAction';
import '../../cart.css'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';

const CartPageElement = ({ prod }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-element-container" >
            <div>
                <img src={prod.image} className='image' alt="" />
            </div>
            <div className="name">{prod.name.length > 15 ? prod.name.slice(0, 15) : prod.name}</div>

            <div className="price">$ &nbsp;{prod.price}</div>

            <div>
                {[...Array(5)].map((el, i) => <span key={i}>{prod.rating > i ? <FaStar /> : <CiStar />}</span>)}
            </div>
            <div>
                <select name="" id="" className='qty' onChange={(e)=> dispatch(cartQuantity({
                    id : prod.userId,
                    qty : e.target.value
                }))}>
                    {[...Array(prod.instock).keys()].map((x, i) => (<option key={i + 1} >{i + 1}</option>))}
                </select>
            </div>
            <div >
                <AiFillDelete className="delete" onClick={() => dispatch(removeFromCart(prod.userId))} />
            </div>


        </div>
    )
}

export default CartPageElement