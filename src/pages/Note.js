import React from 'react'
import AddNote from '../components/AddNote'
import NoteList from '../components/NoteList'



//This is notelist
function Note({ notes, handleAddNote }) {
  return (
    <div className='note'>
      {notes.map((note)=> <NoteList id={note.id} text={note.text} date={note.date} />)}
      <AddNote handleAddNote={handleAddNote}/>
      </div>
      
  )
}

export default Note