
import React, { createContext, useState } from 'react'

export const dataprovider = createContext({})

const Provider = ({children}) => {

    const [filter,setFilter] = useState({ type : 'start'})
  return (
    <>
    <dataprovider.Provider value={{filter ,setFilter}}>
        {children}
    </dataprovider.Provider>
    </>
  )
}

export default Provider