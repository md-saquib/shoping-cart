import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartPageElement from './cartpageelement/CartPageElement'
import Counter from './Counter/Counter'

const CartPage = () => {
  const data = useSelector((state) => state.cartData.cart)
  const navigate = useNavigate();
  return (
    <>
      {data.length > 0 ?
        <div className="cart-page-container">
          <div className='main-cart-element-container'>{data.map((el) => <CartPageElement prod={el} key={el.userId} /> )}</div> <Counter/>
</div> : navigate('/')
      }

    </>
  )
}

export default CartPage