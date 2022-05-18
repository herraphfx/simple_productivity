import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Activity from './pages/Activity';
import Home from './pages/Home';
import Note from './pages/Note';
import Workspace from './pages/Workspace';
import { nanoid } from 'nanoid'
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is my first',
    date: '12/6/2022'
    },
    {
      id: nanoid(),
      text: 'This is my second',
      date: '15/6/2022'
      },
      {
        id: nanoid(),
        text: 'This is my third',
        date: '11/3/2022'
        },
]);



  const [searchText, setSearchText] = useState('')

  //Send files to local storage
  useEffect((() =>{
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }),[notes])

  //Retrieve notes

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    //take the old note and add new notes
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
     //How we pass the addnote component
     //Defined in App.js and passed through NoteList component -> AddNote.js
  }

   //DELETE NOTES

   const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
     setNotes(newNotes)
   }
  return (
    <>
    <div >
    <BrowserRouter>
    
    <Navigation/>
    <Search handleSearchNote={setSearchText}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/workspace' element={<Workspace/>}/>
      <Route path='/notes' element={ <Note 
                                    notes={notes.filter((note)=>
                                    note.text.toLowerCase().includes(searchText)
                                    )} 
                                    handleAddNote={addNote} 
                                    handleDeleteNote={deleteNote}
                                   
                                    
                                    />
                                   
                                    }/>
      
      
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
