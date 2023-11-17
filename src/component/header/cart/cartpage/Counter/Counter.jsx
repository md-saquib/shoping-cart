import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../cart.css'

const Counter = () => {

    const data = useSelector((state)=>state.cartData.cart)
    
    const [price,setPrice]=useState();

    useEffect(()=>{
        setPrice(data.reduce((acc,el)=> acc + Number(el.price)*el.qty , 0))
    },[data])
  return (
    <>
    
    <div className="counter-body" >
        <div>Total Products({data.length})</div>
        <div className="price">Total : {price}</div>
        <button className='btn btn-primary '>Continue Shoping</button>
    </div>
    </>
  )
}

export default Counter