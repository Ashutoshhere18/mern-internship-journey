// 1.Create increment & decrement buttons.
    
// 2. Reset button → sets count to 0.
    
// 3. Toggle text (ON/OFF).


import React from 'react'
import {useState} from 'react'

export default function InteractiveDemo() {

  const [count,setCount]=useState(0);  
  const [isOn,setIsOn]=useState(true);

  return (
    <div>
        <h1 id="counter">Count :{count}</h1>
      <button onClick={()=>setCount(count+1)}>
        ++
      </button>
      <button onClick={()=>setCount(count-1)}>
        --
      </button>

      <div>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setIsOn(!isOn)} >Toggle</button>
        <h2>{isOn?"ON":"Off"}</h2>
      </div>
    </div>
  )
}
