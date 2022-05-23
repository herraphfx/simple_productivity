import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>The most efficient way to live reasonably is every morning to make a plan of one’s day and every night to examine the results obtained.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About