import React,{useState} from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchandFi = () => {
    const urlData=useSearchParams();
    const {data,setData}=useState({
        search:"",
        color:""
    })

  
  return (
    <div className='w-full h-fit p-20'>
        <h1>he</h1>
      <input type="text"   className=' bg-amber-200' />
      <select className='dropdown' name="color" id="">
      </select>
      <button >Search</button>
    </div>
  )
}

export default SearchandFi
