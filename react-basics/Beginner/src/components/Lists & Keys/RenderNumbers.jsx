// Render list of numbers.

import React from 'react'

export default function RenderNumbers() {
 const numbers=[1,2,3,4,5,6];
  return (
<>
  {
    numbers.map((num,i)=><div key={i}>
        <h2> {num}</h2>
    </div>)
  }
</>
  )
}
