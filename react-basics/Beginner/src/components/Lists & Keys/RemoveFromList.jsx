// Remove item from list.

import React,{useState} from 'react'

export default function RemoveFromList() {

    

    const [student,setStudent]=useState(
        [
                {id:1,name:"Ayush",age:20},
                {id:2,name:"Himanshu",age:21},
                {id:3,name:"Prince",age:25}  
        ]
    )
    const [id,setId]=useState(0);
    
    const handleDelete=(id)=>{
      const updated= student.filter((stud)=>stud.id!==Number(id));
      setStudent(updated);
      
    }
  return (
    <>
     {
        student.map((stud)=><div key={stud.id}>
            <p>Id:{stud.id}</p>
            <h1>Name:{stud.name}</h1>
            <h3>Age:{stud.age}</h3>
        </div>)
     }
      <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder='Enter Id to delete' />
     <button onClick={()=>{
        handleDelete(id);
   
     }}>delete</button>
     
    </>
  )
}



