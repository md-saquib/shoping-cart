import React from 'react'
import { useSelector } from 'react-redux'
import './error.css'

const Error = () => {

    const logininfo = useSelector((state)=> state.userinfo.error)
  return (
    <div className="error-container">
    <div className="error-message">
      {logininfo}
    </div>
  </div>
  )
}

export default Error