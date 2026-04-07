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
 
  const [tasks,setTasks]=useState([]);
  const [filter,setFilter]=useState("all");

  const addTask=(title)=>{
     const newTask={
      id:Date.now(),
      title:title,
      completed:false,
      createdAt: new Date(),
     }

     setTasks((prevTask)=>[...prevTask,newTask]);
  }

 const deleteTask=(id)=>{
    
    const newTask=tasks.filter((t)=>t.id!==id);
  
    setTasks(newTask);
 }

const toggleTask=(id)=>{

 const updatedTask= tasks.map((t)=>{
  if(t.id===id){
      return{...t,completed:!t.completed}
  }
  return t;
 });

 setTasks(updatedTask);
}


const changeFilter=(type)=>{
setFilter(type);
}

const filteredTask= tasks.filter((t)=>{
  if(filter=="completed") return t.completed;
  if(filter=="pending") return !t.completed;
  return true;
})
  return (
    <>
      <TaskInput addTask={addTask}/>
      <TaskList tasks={filteredTask} deleteTask={deleteTask} toggleTask={toggleTask}/>
      <FilterBar changeFilter={changeFilter}/>
    </>
  )
}

export default App
