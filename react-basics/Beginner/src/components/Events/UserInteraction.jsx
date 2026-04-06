// Disable button after one click.

import React from 'react'
import {useState} from 'react'
export default function UserInteraction() {

    const [visible,setVisibility]=useState(true);

  return (
    <div>
      {visible && <button onClick={()=>setVisibility(prev=>!prev)}>Disable</button>}
    </div>
  )
}
