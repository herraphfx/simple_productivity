import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Activity from './pages/Activity';
import Home from './pages/Home';
import Note from './pages/Note';
import Workspace from './pages/Workspace';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/workspace' element={<Workspace/>}/>
      <Route path='/notes' element={<Note/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
