import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const DataContextUse = () => {
    const data=useContext(DataContext);
    
  return (
    <div>
        Hello, my name is {data.name} and my age is {data.age}.
    </div>
  )
}

export default DataContextUse