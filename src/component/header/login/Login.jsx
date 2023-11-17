import React from 'react'
import { MdLogin } from 'react-icons/md'
import Cart from '../cart/Cart'
import './login.css'

const Login = () => {
    return (
        <>
            <div className="contianer">
                <Cart />
                <MdLogin className='login' />
            </div>
        </>
    )
}

export default Login