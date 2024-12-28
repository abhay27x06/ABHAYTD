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
import Pikachu from './components/Pikachu'
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
    <Pikachu />
  )
}

export default App
