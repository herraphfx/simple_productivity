import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Homeheader from '../components/Homeheader';
import Feature from '../components/Home/Feature';
import About from '../components/Home/About';
import aboutImage from '../images/about.png'
import Presentation from '../components/Home/Presentation';
import Contact from '../components/Home/Contact';


function Home() {
  return (
    <div className=''>
   <Homeheader/>
   <Feature/>
   <About image={aboutImage} title='Create and manage your tasks' button='Get Started'/>
   <Presentation/>
   <Contact/>
    </div>
  )
}

export default Home