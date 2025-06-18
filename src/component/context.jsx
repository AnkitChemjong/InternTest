import React, { useState } from 'react'
import { createContext } from 'react'
export const contextData=createContext();


const context = () => {
    const [data,setData]=useState(null);

  return (
    <div >
      
    </div>
  )
}

export default context
