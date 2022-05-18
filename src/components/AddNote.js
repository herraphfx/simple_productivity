import React, { useState } from 'react'


function AddNote({handleAddNote}) {
    const [noteText, setNotesText] = useState(' ')

    const characterLimit = 200;

    
//TAKE THE VALUE TYPED AND PUT A LIMIT FOR ENTRY
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNotesText(event.target.value);
        }
        
    }

    //REMOVE SPACE AND SAVE WHEN CLICKED 
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNotesText('');
        }
        
    }

  return (
    <div className='notes-list new'>
        <textarea cols="10" rows="8" placeholder='Type to add a note ...' value={noteText} onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} Remaining</small>
            
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    
  )
}

export default AddNote