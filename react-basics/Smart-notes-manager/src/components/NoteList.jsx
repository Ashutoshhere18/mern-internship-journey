import React from 'react'
import NoteItem from './NoteItem'

export default function NoteList({notes,deleteNotes}) {
  return (
    <>
    <div className="container mt-5">
      <div className="row g-3">
        {
          notes.map((note)=>(
            <div key={note.id} className="col-md-4">
              <NoteItem note={note} deleteNotes={deleteNotes}/>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}
