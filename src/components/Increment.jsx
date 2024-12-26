import React, { useState } from 'react'
import './Increment.css';
const Increment = () => {
    const [val, setval] = useState(0);
    const handleClick=(e)=>{
        setval(val=>val+1);
    }
  return (
    <div className='div'>
        <button onClick={handleClick} className='button'>{val}</button>
    </div>
  )
}

export default Increment