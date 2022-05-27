import React, {useState} from 'react';

import { Link } from 'react-router-dom';
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
    {/* <Link to="#" className="menu-bars">
        <FaBars onClick={showSideBar}/>
    </Link>     */}
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
          
            {Sidebar.map((item, index) =>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        <hr/>
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