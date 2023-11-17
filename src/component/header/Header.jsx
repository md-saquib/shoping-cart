import React from 'react'
import Brand from './brand/Brand'
// import Cart from './cart/Cart'
import Login from './login/Login'
import NavOption from './nav-option/NavOption'
import './header.css'

const Header = () => {
  return (
    <>
        
        <header className='nav-body'>
            <Brand/>
            <NavOption/>
            <Login/>
        </header>
    </>
  )
}

export default Header