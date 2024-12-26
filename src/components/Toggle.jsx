import React, { useState } from 'react'
import './Toggle.css'
const Toggle = () => {
    const [val, setVal]=useState(false);
    const handleClick=(e)=>{
        setVal(!val);
    }
  return (
    <div className='grandDiv' onClick={handleClick}>
        <div className={`parentDiv ${val?"ON":"OFF"}`}>
            <div className={`childDiv ${val?"on":"off"}`}>{val?"On":"Off"}</div>
        </div>
    </div>
  )
}

export default Toggle