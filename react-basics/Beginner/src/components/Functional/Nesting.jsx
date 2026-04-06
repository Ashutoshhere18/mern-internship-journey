// Nest one component inside another.

import React from 'react'


function Child(){
   return <h5> Child Component</h5>
}
export default function Nesting() {
  return (
   <>
   <h4>Parent Component</h4>
   <Child/>
   </>
  )
}
