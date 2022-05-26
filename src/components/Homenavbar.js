import React, { useState } from 'react'
import '../components/Homepage.css'
import logo from '../images/logoP.png'

function Homenavbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  return (
    <nav id='nav_1' className={nav ? 'nav active' : 'nav'}>
        <a href='#' className='logo'>
            <img src={logo} />
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
            
        </ul>
        
    </nav>
  )
}

export default Homenavbar