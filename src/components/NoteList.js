import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import './NoteList.css'


//this is note
function NoteList( {id, text, date} ) {
  return (
    <div className='notes-list'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
        
    </div>
  )
}

export default NoteList