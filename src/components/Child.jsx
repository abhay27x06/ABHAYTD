import React from 'react'

const Child = (props) => {
    const handleGreetings=(event)=>{
        alert('Welcome User...');
    }
  return (
    <>
    <button onClick={props.onClick}>Click</button>
    <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
    <button onClick={handleGreetings}>Greetings</button>
    </>
  )
}

export default Child