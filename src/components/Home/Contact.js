import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h3>Send An Email</h3>
        <div className='contact-input'>
        <form action="https://formsubmit.co/herraph@gmail.com" method="POST" />
            <input type='email' placeholder='Enter your email'/>
            <input type="hidden" name="_autoresponse" value="We have received your message we will communicate to you soon"/>
            <a type='submit' href='#'>Contact</a>
        </div>
        </div>
  )
}

export default Contact