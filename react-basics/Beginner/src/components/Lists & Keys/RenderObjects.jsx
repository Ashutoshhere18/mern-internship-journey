// Render list of objects `{name, id}`.

import React from 'react'

export default function RenderObjects({id}) {

const students=[
    {id:1,name:"Ayush",age:20},
    {id:2,name:"Himanshu",age:21},
    {id:3,name:"Prince",age:25}
]
  return (
    <>
    {
        students.map((stud)=><div key={stud.id}>
            <h1>{stud.name}</h1>
            <h4>{stud.age}</h4>
        </div>)
    }
    </>
  )
}
