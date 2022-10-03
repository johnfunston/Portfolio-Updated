import React from 'react'
import {useRef} from 'react';
import './NavigationMenu.css'



function NavigationMenu() {

    const videoRef = useRef();
    const setPlayback = () => {
        videoRef.current.playbackRate =0.8;
    };

  return (
    <div className='navigationMenu'>
        <div className="videoBackground">
            <video ref={videoRef} className='videoTag' autoPlay loop muted onCanPlay={setPlayback}>
                <source src='https://res.cloudinary.com/dhc0ncbyq/video/upload/v1664752603/background2_fksfvu.mp4' type='video/mp4' />
            </video>
        </div>
        <div className='navigationMenu--container'>
            <a href="/" className="exitMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></a>
            <div className='navigationMenu--links'>
            <span className="linkNumber">01 /  </span><a href="/">HOME</a>
                <span className="linkNumber">02 / </span><a href="/about">ABOUT</a>
                <span className="linkNumber">03 / </span><a href="/">SERVICES</a>
                <span className="linkNumber">04 / </span><a href="/projects">PROJECTS</a>
                <span className="linkNumber">05 / </span><a href="/contact">CONTACT</a>
            </div>
        </div>
    </div>
  )
}

export default NavigationMenu