// 1. Log "Hello" on button click.
    
// 2. Show input value on button click.
    
// 3. Disable button after one click.


import React from 'react'
import {useState} from 'react'

export default function EventHandlingDemo() {

const [isDisplay,setIsDisplay]=useState(true);
const [input,setInput]=useState("");


 const handleClick=()=>{
    console.log("Hello!");  // Log

    setIsDisplay(prev=>!prev) // Toggle

 }

  return (
    <>
     {isDisplay && <h1>Hello</h1>}

    <button onClick={handleClick}>
        Click here!
    </button>

  
    </>
  )
}
