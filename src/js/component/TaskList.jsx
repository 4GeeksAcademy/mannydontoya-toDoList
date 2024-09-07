import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const handleChange = (event) => {
    let inptvalue = event.target.value
    setNewTask(inptvalue) 
  }
  const handleKeyDown = (event) => {
    let keyName = event.key
  if(keyName === 'Enter' && newTask.trim() !== ''){
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }
  const handleDelete = (indexToBeDeleted) => {   
    setTasks(tasks.filter(  (_, index ) =>  index != indexToBeDeleted )) // [56, 34, 43, 53] => [56] => [56]
  }
  return <div className="container">
    <h1>To Do List </h1>
    <input type="text" value={newTask} onChange={handleChange} onKeyDown={handleKeyDown}/>
    {/* task.length ? is asking a question if tasks.length is true or false, 0 is false anything > 0 is true */}
    <p>{tasks.length ? `${tasks.length} item(s) left`:'No tasks, add a task'}</p> 
    <ul>
      {tasks.map(   (value, index) => (<li key={index}>
        {value}
        <span onClick={() => handleDelete(index)}> x</span>
      </li>)  ) } 
    </ul>
  </div>  
} 

// (task, idx) => { 
//   let val = 2

//   val = val + index

//   return (<li>{val}</li>)

// } 

// function (task, idx){
//   return <li></li>
// }

export default TaskList;