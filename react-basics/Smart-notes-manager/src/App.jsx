import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'




function App() {

  const [notes,setNotes]=useState([]);
 

  const addNotes=({title,description,category,priority})=>{
   
    const newNote={
      id:Date.now(),
      title:title,
      description:description,
      category:category,
      priority:priority,
      createdAt:new Date(),
      pinned:false
    };

    setNotes((prev)=>[...prev,newNote]);
    
  }


  const deleteNotes=(id)=>{
    const updated=notes.filter((n)=>n.id!==id);

    setNotes(updated);
  }


  const togglePinned=(id)=>{

    // First way to do :-

    // const updatedNote=notes.map((note)=>{
    //   if(note.id===id){
    //    return {...note,pinned:!note.pinned}
    //   }
    //   return note;
    // });
    // setNotes(updatedNote);

    //Another way to do (Best Approach) :-

    setNotes((prevNotes)=>{
      prevNotes.map((note)=>{
        note.id===id?{...note,pinned:!note.pinned}:note
      })
    })
  };

  return (
    <>
      <NoteInput addNotes={addNotes} />
      <NoteList notes={notes} deleteNotes={deleteNotes} toggl />
     
      
    </>
  )
}

export default App
