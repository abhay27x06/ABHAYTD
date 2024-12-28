import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((res)=>setData(res)).catch((e)=>console.log(e));
    }, []);
  return (
    <ul>
        {data.map((ele)=>{
            return <li key={ele.id}>{ele.title}</li>
        })}
    </ul>
  )
}

export default FetchApi