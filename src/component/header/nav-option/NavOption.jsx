import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFilterRight } from 'react-icons/bs'
import './navoption.css'
import { dataprovider } from '../../../provider/Provider'

const NavOption = () => {

  // const Home = document.getElementById('home')
  
  // console.log(Home.classList.contains('active'));

  const { filterButton, setFilterButton } = useContext(dataprovider);

  return (
    <>

      <nav className='nav-option'>
      <button onClick={() => setFilterButton(!filterButton)} className='filter-togler-button btn btn-light fw-bold'><BsFilterRight className='fw-bold fs-3' />&nbsp;{filterButton ? 'Cancle' : 'Filter'}</button>
        <NavLink to='/' id='home'>Home</NavLink>
        <NavLink to='/Profile'>Profile</NavLink>
        <NavLink to='/About'>About</NavLink>
      </nav>

    </>
  )
}

export default NavOption