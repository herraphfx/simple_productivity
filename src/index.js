import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <BrowserRouter>
   
  <App/>
 
  </BrowserRouter>
 
 
    
  
);

reportWebVitals();
