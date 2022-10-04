import React from 'react'
import './About.css';
import Header from './Header';

function About() {
  return (
    <div className="about">
      <Header/>
        <div className="about--container">
            <img className="about--image" src='https://res.cloudinary.com/dhc0ncbyq/image/upload/v1664915145/aboutpic_dtuta2.jpg' alt=''/>
            <div className="about--blurb">
              <h1 className='about--blurb_title'><span className="titleNumber">02 / </span>ABOUT</h1>
              <p className='about--blurb_text'>
                I'm John, a full-stack developer based in beautiful British Columbia, Canada. I have a passion for creating websites and applications that emphasize dynamic design, user-experience, and client services as primary principles.
              </p>
            </div>
        </div>
  </div>
  
  )
}

export default About