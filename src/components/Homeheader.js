import React from 'react'
import { BrowserRouter, Link, Router, Routes } from 'react-router-dom'
import Activity from '../pages/Activity'
import Homenavbar from './Homenavbar'

function Homeheader() {
  return (
    <div id='main'>
        <Homenavbar/>
        <div className='name'>
            <h1><span>Manage your Day</span>Stay Focused & Stay Productive</h1>
            <p className='details'>If you spend too much time thinking about a thing, you’ll never get it done</p>
           
            <a href='#'className='cv-btn'><Link to='/activity'>Get Started</Link> </a>
        </div>
        </div>
  )
}

export default Homeheader