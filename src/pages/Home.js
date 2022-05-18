import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className='home'>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              
                Tutorials
             
            </li>
            <li className="nav-item">
              
                Add
              
            </li>
          </div>
        </nav>  
    </div>
  )
}

export default Home