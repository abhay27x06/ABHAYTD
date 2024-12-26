import React from 'react'
import Child from './Child'

const Parent = () => {
    const handleClick=(name)=>{
        alert(`Welcome ${name}`)
    }
    const handleMouseEnter=(e)=>{
        alert(`Hey, Thanks for hovering me.`)
    }
  return (
    <Child onClick={()=>handleClick("Abhay")} onMouseEnter={handleMouseEnter}/>
  )
}

export default Parent