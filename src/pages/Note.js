import React, { useState } from 'react'
import AddNote from '../components/AddNote'
import NoteList from '../components/NoteList'
import Search from '../components/Search'





//This is notelist
function Note({ notes, handleAddNote, handleDeleteNote }) {
  
  return (
    <>
   
    <div className='note'>
       
      {notes.map((note)=> <NoteList 
                                  id={note.id} 
                                  text={note.text} 
                                  date={note.date} 
                                  handleDeleteNote={handleDeleteNote}
                                  
                                  />)}
      <AddNote handleAddNote={handleAddNote}/>
      </div>
      </>
  )
}

export default Note