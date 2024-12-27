import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount]=useState(0);
    const [step, setStep]=useState(1);
    const handleIncrement=(e)=>{
        const sum=Number(count)+Number(step);
        if (sum<=100) {
            setCount(sum);
        }
    }
    const handleDecrement=(e)=>{
        const dif=Number(count)-Number(step);
        if (dif>=0) {
            setCount(dif);
        }
    }
  return (
    <div className='countDivGrand'>
    <div className='countDivPar'>
    <h3 className='head3'>
    useState Challenge
    </h3>
    <div className='countDiv'>
        Count : {count}
    </div>
    <div className='stepDiv'>
        Step : <input className='stepInput' value={step} onChange={(e)=>setStep(e.target.value)} type='number'/>
    </div>
    <div className='btnDiv'>
        <button onClick={handleIncrement} className='btn'>Increment</button>
        <button onClick={handleDecrement} className='btn'>Decrement</button>
        <button onClick={(e)=>{setCount(0); setStep(1)}} className='btn'>Reset</button>
    </div>
    </div>
    </div>
  )
}

export default Counter