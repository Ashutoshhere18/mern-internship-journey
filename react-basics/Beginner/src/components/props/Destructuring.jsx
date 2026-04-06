import React from 'react'

export default function Destructuring({name,age,work}) {
  return (
    <div>
      <h1>User Information Card</h1>

      <h4>Name:{name}</h4>
      <h4>Age:{age}</h4>
      <h4>Work:{work}</h4>
    </div>
  )
}
