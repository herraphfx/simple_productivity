import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Activity from './pages/Activity';
import Home from './pages/Home';
import Note from './pages/Note';
import Workspace from './pages/Workspace';
import { nanoid } from 'nanoid'

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
     
  }

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/workspace' element={<Workspace/>}/>
      <Route path='/notes' element={<Note notes={notes} handleAddNote={addNote}/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
