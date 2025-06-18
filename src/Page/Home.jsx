import React,{useState,useReducer, useEffect} from 'react'
import Demo from '../component/demo';
import axios from 'axios';
import SearchandFi from '../component/SearchandFi';

const Home = () => {

    const [data,setData]=useState(6);
    const [inputData,setInputData]=useState([]);

    const [count,setCount]=useState({data:0});


    const [todos,setTodo]=useState([]);

 const getUserData=async()=>{
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
        if(response?.status==200){
            setTodo(response?.data);
          
        }  
    }
    catch(e){
       console.log(e);
    }
 }
    useEffect(()=>{
       getUserData();
       },[]);
    
    const counterUpdate=(state,action)=>{
        if(action.payload=="INCREAMENT"){
            return state?.data+1;
        }
        if(action.payload=="DECREAMENT"){
            return state?.data-1;
        }
        if(action.payload=="RESET"){
            return setCount({data:0});
        }
    }

    const {state,dispatch}=useReducer(counterUpdate,count);

    const callApi=()=>{
            setTimeout(async ()=>{
              const response=await axios.get("https://jsonplaceholder.typicode.com/users");
              console.log(response);
               setInputData(response?.data);
            },500);
    }
  return (
    <>
   <Demo data={data} setData={setData}/>
   <h1>{data}</h1>
   <input className='bg-amber-500' type="text" onChange={callApi}/>
   <div>
    {
        inputData?.length>0 ? 
        <div>
           {
            inputData?.map((data,index)=>{
                return (
                    <div key={index}>{data?.name}</div>
                )
            })
           }
        </div>
        :<div>No Data</div>
    }

    <h1>3</h1>
    {/* <div>
        <h1>Data:= {count?.data}</h1>

        <button onClick={dispatch("INCREAMENT")}>Increament</button>
        <button onClick={dispatch("DECREAMENT")}>Decreament</button>
        <button onClick={dispatch("RESET")}>Reset</button>
    </div> */}
   </div>
   <div>
    <h1>4</h1>
    <table>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>userId</th>
        <th>Completed</th>
      </tr>
        {todos?.length>0 ? 
        <>
           {
            todos?.map((data,index)=>{
                return (
                    <tr key={index}>
                        <td >{data?.id}</td>
                        <td >{data?.title}</td>
                        <td >{data?.userId}</td>
                        <td  className={`${data?.completed? "bg-red-700":"bg-green-700"}`}>{data?.completed?.toString()}</td>
                    </tr>
                )
            })
           }
        </>
       
        :<div>No Data</div>
        }
    </table>
   </div>
   <SearchandFi/>
    </>
  )
}

export default Home
