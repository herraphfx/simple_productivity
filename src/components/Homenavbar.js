import React, { useState } from 'react'
import logo from '../images/logo.png'
import '../components/Homepage.css'

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
        {/* <a href='#' className='logo'>
            <img src={logo} alt=''/>
        </a> */}
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Homenavbar