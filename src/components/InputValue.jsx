import React, { useState } from 'react'
import '../App.css';
const InputValue = ({name, setName}) => {
  return (
    <input placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} className='inputValue'/>
  )
}

export default InputValue