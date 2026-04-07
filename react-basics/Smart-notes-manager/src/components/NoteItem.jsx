import React from 'react'

export default function NoteItem({note,deleteNotes,togglePinned}) {
  return (
   <>
     <div className="card h-100 shadow-sm">
       <div className="card-body">
         <h5 className="card-title">{note.title}</h5>
         <h6 className="card-subtitle mb-2 text-muted">{note.description}</h6>
         <p className="card-text">
           <strong>Category:</strong> {note.category}
         </p>
         <p className="card-text">
           <strong>Priority:</strong> <span className={`badge bg-${note.priority === 'high' ? 'danger' : note.priority === 'medium' ? 'warning' : 'success'}`}>{note.priority}</span>
         </p>
         <button onClick={()=>deleteNotes(note.id)} className='btn btn-danger btn-sm mt-3'>Delete</button>
         <button onClick={()=>togglePinned(note.id)} className='btn btn-info btn-sm mt-3'>pinned</button>
       </div>
     </div>
   </>
  )
}
