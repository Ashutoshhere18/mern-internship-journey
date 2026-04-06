// Show input value on button click.


import React from 'react'
import {useState} from 'react'

export default function InputHandler() {

    const [isShow,setIsShow]=useState(false);
    const [input,setInput]=useState("");


    const handleInput=()=>{
        setIsShow(prev=>!prev);
    }

  return (
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={handleInput}>Show Input</button>
    <button onClick={()=>setIsShow(false)}>Hide Input</button>
    {isShow && <p>{input}</p>}
    </>
  )
}
