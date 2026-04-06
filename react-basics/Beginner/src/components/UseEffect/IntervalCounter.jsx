// Add interval counter.

import React,{useEffect,useState} from 'react'

export default function IntervalCounter() {
  
    useEffect(()=>{
      
        const interval= setInterval(()=>{setCount((prev)=>prev+1)},[1000]);

        return()=> clearInterval(interval);
    },[]);

    const [count,setCount]=useState(0);
    
  return (
    <div>
      <h2>count: {count}</h2>
    </div>
  )
}
