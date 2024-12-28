import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NetflixSeries } from './components/netflixSeries'
import Parent from './components/Parent'
import Increment from './components/Increment'
import InputValue from './components/InputValue'
import DisplayValue from './components/DisplayValue'
import Toggle from './components/Toggle'
import Todo from './projects/todoList/Todo'
import Counter from './components/Counter'
import Register from './components/Register'
import Timer from './components/Timer'
import FetchApi from './components/FetchApi'
function App() {
  // const [name, setName]=useState('');
  const [date, setDate]=useState('');
  useEffect(()=>{
    const interval=setInterval(()=>{
      const updatedDate=new Date();
      setDate(updatedDate.toLocaleTimeString());
      console.log(updatedDate.toLocaleTimeString());
      
    }, 1000);

    return ()=>{
      clearInterval(interval);
    }
  }, []);
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
    // <Todo />
    // <Counter />
    // <Register />
    // <h3 style={{textAlign: 'center'}}>Time : {date}</h3>
    // <Timer />
    <FetchApi />
  )
}

export default App
