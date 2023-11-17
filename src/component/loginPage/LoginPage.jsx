import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Loder/Loder'
import Error from '../error/Error'
import LoginForm from '../loginForm/LoginForm'

const LoginPage = () => {
    const logininfo = useSelector((state)=> state.userinfo)
  return (
   <>
    {logininfo.loding ? <Loader/> : logininfo.error ? <Error/> :<LoginForm/>}
    
   </>
  )
}

export default LoginPage