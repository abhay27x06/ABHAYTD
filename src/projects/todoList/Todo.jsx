import React, { useState } from 'react'
import { MdDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import './Todo.css'
let nextId=0;
const Todo = () => {
    const [tasks, setTasks]=useState(()=>{
        const rawTodo=localStorage.getItem("Todo");
        console.log(rawTodo);
        if (rawTodo!=null) {
            return JSON.parse(rawTodo) || [];
        }
        return [];
    });
    const [task, setTask]=useState('');
    const handleClick=(e)=>{
        let temp=task.trim();
        if (temp.length==0) {
            alert("Task name cannot be empty!");
            return;
        }
        let found=0;
        tasks.map((t)=>{
            console.log(t.task);
            if (t.task==temp) {
                found=1;
            }
        });
        if (found) {
            setTask('');
            e.target.value='';
            return;
        }
        setTasks([...tasks, {"task": temp, "id": nextId, "done": false}]);
        setTask('')
        nextId++;
    }
    localStorage.setItem("Todo", JSON.stringify(tasks));
    const handleClearAll=(e)=>{
        console.log(tasks);
        setTask('');
        setTasks([]);
    }
    const handleChange=(e)=>{
        if (e.key=='Enter') {
            handleClick(e);
            return;
        }
    }
  return (
    <div className='todoDivPar'>
        <div className='todoDiv'>
            <h3 className='h3'>Todo List</h3>
            <div className='inputDiv'>
                <input className='inputTag' placeholder='Enter the new task' onKeyDown={handleChange} onChange={(e)=>setTask(e.target.value)} value={task}/>
                <button className='inputButton' onClick={handleClick}>Add Task</button>
            </div>
            <div className='displayTasks'>
                {tasks.map((ele)=>{
                    return <div className='taskDiv' key={ele.id}>
                        <div className={`taskNameDiv ${ele.done==true && "doneTask"}`}>{ele.task}</div>
                        <div className='iconDiv'>
                        <MdDone className={`doneIcon`} onClick={(event)=>{
                            setTasks(tasks.map((t)=>{
                                if (t.id==ele.id) {
                                    if (t.done==true) {
                                        return {...t, "done": false}; 
                                    }else{
                                        return {...t, "done": true};
                                    }
                                }else{
                                    return t;
                                }
                            }))
                        }}/>
                        <MdDeleteForever className='deleteIcon' onClick={(event)=>{setTasks(tasks.filter((t)=> t.id!=ele.id))}}/>
                        </div>
                    </div>
                })}
            </div>
            {tasks.length>0 && <button className='todoDivButton' onClick={handleClearAll}>Clear All</button>}
        </div>
    </div>
  )
}

export default Todo