import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buypant, buyshirt, returnpant, returnshirt } from '../../redux/ActionCreater/redux';

const SimplePage = () => {
    const shopState =useSelector((state)=> state);
    const dispatch = useDispatch()
    console.log(shopState)
  return (
    <>
        <div className="product-container">
            <p>Shirt : {shopState.shirt}</p>
            <p>Pant  : {shopState.pant}</p>
            <p>Total-Sell : {shopState.totalSell} </p>
        </div>
        <div className="button-container">
            <button onClick={()=> dispatch(buyshirt(1500))}>Buy-Shirt</button>
            <button disabled={shopState.shirt >= 50} onClick={()=> dispatch(returnshirt(1500))}>Return-Shirt</button>
            <button onClick={()=> dispatch(buypant(2100))}>Buy-Pant</button>
            <button disabled={shopState.pant >= 50} onClick={()=> dispatch(returnpant(2100))}>Return-Shirt</button>
        </div>
    </>
  )
}

export default SimplePage