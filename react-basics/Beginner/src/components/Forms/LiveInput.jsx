//  Input + show live value.

import React,{useState} from 'react'

export default function LiveInput() {

const [input,setInput]=useState("")
  return (
  <>
  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

  <h2>{input}</h2>
  </>
  )
}
