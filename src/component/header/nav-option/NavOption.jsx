import React from 'react'
import {NavLink} from 'react-router-dom'

const NavOption = () => {
  return (
    <>

    <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Detail'>Detail</NavLink>
            <NavLink to='/Profile'>Profile</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
    </nav>
    </>
  )
}

export default NavOption