import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../../../redux/ActionCreater/cartAction/CartAction';
import './eachelement.css'

const EachElement = ({ prod }) => {
 
  const dispatch = useDispatch();
  const data =useSelector((state)=>state.cartData.cart)


  const addData = (prod) => {
    // setcartbutton(!cartbutton);
    dispatch(addToCart(prod))
    
  }

  const removeData = (id) => {
    // setcartbutton(!cartbutton);
    dispatch(removeFromCart(id))
  }

  return (
    <>

      <img src={prod.image} alt="Product" className="card-image" />
      <h2 className="card-name">{prod.name}</h2>

      <p className="card-price fw-bold">${prod.price} </p>

      <p className={`card-instock ${prod.instock > 0 ? 'text-success' : 'text-danger'}`}>{prod.instock > 0 ? 'InStock' : 'Out-Of Stock'}</p>
      <div className="card-rating">
        {/* Assuming rating is a number between 1 and 5 */}
        {Array.from({ length: prod.rating }, (_, index) => (
          <span key={index} className={`star-icon ${prod.rating > 2 ? 'text-success' : 'text-danger'}`}>&#9733;</span>
        ))}
      </div>
          {data.some((el)=> el.userId === prod.userId) ? 
          (<button className='btn btn-danger' onClick={()=> removeData(prod.userId)}>Remove-From-Cart</button>) :
          (<button className='btn btn-success' onClick={()=> addData(prod)}>Add-To-Cart</button>)}
    </>
  )
}

export default memo(EachElement)
