import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { Sidebar } from './Sidebar';
import './Navigation.css'
import { IconContext } from 'react-icons'



function Navigation() {
    const { sidebar, setSidebar } = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

  return (
  <div>
  <IconContext.Provider value={{color: '#2196f3'}}> 
    <div className='navbar'>
    <Link to="#" className="menu-bars">
        <FaBars onClick={showSideBar}/>
    </Link>    
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <AiOutlineClose/>
                </Link>
            </li>
            {Sidebar.map((item, index) =>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </div>
    
  )
}

export default Navigation