
import React, { createContext, useState } from 'react'

export const dataprovider = createContext({})

const Provider = ({children}) => {

    const [filter,setFilter] = useState({ type : 'start'})
    const [filterButton,setFilterButton] = useState(false);
  return (
    <>
    <dataprovider.Provider value={{filter ,setFilter ,filterButton,setFilterButton}}>
        {children}
    </dataprovider.Provider>
    </>
  )
}

export default Provider