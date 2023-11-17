import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import './cart.css'
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import CartElement from './cartelement/CartElement';
import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const cartCount = useSelector((state) => state.cartData.cart)

  const navigate =useNavigate()

  return (
    <>
      <Dropdown alignright='true' className='dropdown'>


        <Dropdown.Toggle variant="success" id="dropdown-split-basic" >
          <BsFillCartFill color='white' fontSize='25px' />
          <Badge className='bg-success'>{cartCount.length}</Badge>
       

        {cartCount.length > 0 &&
          <Dropdown.Menu style={{ minWidth: 310 }} >
            {cartCount.map((el) => {
              return <div key={el.userId} className='cartelement-container' style={{ padding: '0.5rem 1rem' }}><CartElement prod={el} /></div>
            })}
          <button onClick={()=> navigate('/cartPage')} className='btn btn-primary  go-to-cart-button'>Go To Cart</button>
          </Dropdown.Menu>}
          </Dropdown.Toggle>
      </Dropdown>

    </>
  )
}

export default Cart