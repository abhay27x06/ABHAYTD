import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((pre)=>pre+1);
        }, 1000);
        // return ()=>{
        //     clearInterval(timer);
        // }
    }, []);
  return (
    <div>Count : {count}</div>
  )
}

export default Timer