import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
    home
    <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/activity">React</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Home