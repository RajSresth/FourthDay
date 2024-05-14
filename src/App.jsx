import axios from 'axios'
import React,{ useEffect, useState } from 'react'

const App = () => {
  // const fetching=async ()=>{
  //   const response=await fetch('https://api.github.com/users')
  //   const data=await response.json()
  //   console.log(data)
  // }

  const [data,setData]=useState([])
  useEffect(() => {
    axios.get('https://api.github.com/users')
    .then(response=>setData(response.data))    
  }, []) 
  

  return (
    <div className='py-[6rem] flex flex-wrap gap-[5rem]  justify-center items-center'>
     {
      data.length>0 && data.map((val,i)=>{
          return(
            <div key={i} className='mr-11 shadow-2xl shadow-slate-950'>
                  <img src={val.avatar_url} width="200px"/>
                  <h2 className='my-3 font-semibold text-[1.5rem] text-center'>{val.login}</h2>
            </div>
          )
      })
     }
    </div>
  )
}
export default App