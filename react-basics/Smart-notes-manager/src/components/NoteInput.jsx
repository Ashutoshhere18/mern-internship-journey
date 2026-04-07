import React from 'react'
import { useState } from 'react'

export default function NoteInput({addNotes}) {

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [category,selectCategory]=useState("");
const [priority,setPriority]=useState("");

const handleSubmit=(e)=>{
  e.preventDefault();
addNotes({title,description,category,priority})
};
  return (
    <>
    <form onSubmit={handleSubmit}>
        
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 ">
  <button type="button"  className="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={() => selectCategory("education")} href="#">Education</a></li>
    <li><a className="dropdown-item" onClick={() => selectCategory("personal")} href="#">Personal</a></li>
    <li><a className="dropdown-item" onClick={() => selectCategory("medical")} href="#">Medical</a></li>
   
  
  </ul>
</div>
 <div className=" mb-3 ">
  <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Priority
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={() => setPriority("high")} href="#">High</a></li>
    <li><a className="dropdown-item" onClick={() => setPriority("medium")}  href="#">Medium</a></li>
    <li><a className="dropdown-item" onClick={() => setPriority("low")}  href="#">low</a></li>

  </ul>
</div>
 <div className="mb-3">

  <button type="submit" className="btn btn-primary">Add Notes</button>
 </div>
</form>
    </>
  )
}
