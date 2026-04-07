import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import FilterBar from './components/FilterBar'

function App() {
 
  const [task,setTask]=useState([]);
  const [filter,setFilter]=useState("all");

  const addTask=(title)=>{
     const newTask={
      id:Date.now(),
      title:title,
      completed:false,
      createdAt: new Date(),
     }

     setTask((prevTask)=>[...prevTask,newTask]);
  }

 const deleteTask=(id)=>{
    
    const newTask=task.filter((t)=>t.id!==id);
  
    setTask(newTask);
 }

const toggleTask=(id)=>{

 const updatedTask= task.map((t)=>{
  if(t.id===id){
      return{...t,completed:!t.completed}
  }
  return t;
 });

 setTask(updatedTask);
}


  return (
    <>
      <TaskInput addTask={addTask}/>
      <TaskList tasks={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
      <FilterBar/>
    </>
  )
}

export default App
