import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { NetflixSeries } from './components/netflixSeries'
import Parent from './components/Parent'
import Increment from './components/Increment'
import InputValue from './components/InputValue'
import DisplayValue from './components/DisplayValue'
import Toggle from './components/Toggle'
import Todo from './projects/todoList/Todo'
function App() {
  const [name, setName]=useState('');
  return (
    // <div className='App'>
    // <section className='section'>Best Of Netflix...!</section>
    // <NetflixSeries />
    // </div>
    // <Parent />
    // <Increment />
    // <div className='parApp'>
    // <InputValue name={name} setName={setName}/>
    // <DisplayValue name={name}/>
    // </div>
    // <Toggle />
    <Todo />
  )
}

export default App
