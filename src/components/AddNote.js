import React, { useState } from 'react'


function AddNote({handleAddNote}) {
    const [noteText, setNotesText] = useState(' ')

    const handleChange = (event) => {
        setNotesText(event.target.value);
    }

    //save to database
    const handleSaveClick = () => {
        handleAddNote(noteText)
    }

  return (
    <div className='notes-list new'>
        <textarea cols="10" rows="8" placeholder='Type to add a note ...' value={noteText} onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>200 Remaining</small>
            
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    
  )
}

export default AddNote