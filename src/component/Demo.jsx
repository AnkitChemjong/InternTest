import React,{useState} from 'react'



const Demo = ({data,setData}) => {
    const [inputVal,setInputVal]=useState(null);
    const updateData=()=>{
        if(inputVal!=null){

            return  setData(inputVal)
        }
        alert("First put some value...")
    }
return (
    <div>
        <input type="text" className='bg-amber-500' onChange={(e)=>setInputVal(e.target.value)}/>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default Demo
