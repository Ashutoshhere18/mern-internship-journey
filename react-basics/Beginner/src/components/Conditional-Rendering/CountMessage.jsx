// Show message if count > 5.

import React from 'react'
import {useState} from 'react'


export default function CountMessage() {

    const [count,setCount]=useState(0);
    const[isMatched,setIsMatched]=useState(false);
    
    const checkCount=()=>{
        setCount(count+1);
        if(count>5){
        setIsMatched(true);
        }
    }
  return (
  <>
     <button onClick={checkCount}>++</button>

  {isMatched && <h5> Finally received the message</h5>}
  </>
      
  
  )
}
