import React from 'react'
import {  Link} from 'react-router-dom'
import Homenavbar from './Homenavbar'
function Homeheader() {
  return (
    <div id='main'>
        <Homenavbar/>
        <div className='name'>
            <h1><p>Manage your Day</p>Stay Focused & Stay Productive</h1>
            <p className='details'>If you spend too much time thinking about a thing, you’ll never get it done</p>
           
            <a className='cv-btn'><Link to='/activity'>Get Started</Link> </a>
            
        </div>
        </div>
  )
}

export default Homeheader