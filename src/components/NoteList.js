import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import './NoteList.css'



//this is note
function NoteList( {id, text, date, handleDeleteNote  } ) {
 
  return (
    <div className='notes-list'>
     
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)}/>
        </div>
        
    </div>
    
 
  
  )
}

export default NoteList