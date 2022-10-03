import React from 'react';
import './Contact.css'
import ContactLinks from './ContactLinks'

function Contact() {
  return (
    <div className="contact">
        <a href="/" className="backHomeButton">BACK</a>
        
        <div className="contact--container">
            <div className="my--info contact--page--info">
                <p className="freelance--blurb">Currently available for freelance work <span className="freelance--blurb_ampersand">&</span> collaboration</p>
                <p className='country'><span className="country_asterisk">*</span>Working out of Victoria, BC, Canada</p>
            </div>
            <div className='contact--blurb'>
                <h1 className='contact--title'>Get in touch</h1>
                <h3>and we can build something great together.</h3>
            </div>
            <ContactLinks/>
        </div>
        
    </div>
  )
}

export default Contact