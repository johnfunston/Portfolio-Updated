import React from 'react'
import Header from './Header';
import './Home.css'


function Home() {
  return (
    <div className="home">
        <Header/>
        <div className="home--container">
            <div className="my--info">
                <p className="freelance--blurb">Currently available for freelance work <span className="freelance--blurb_ampersand">&</span> collaboration</p>
                <p className='country'><span className="country_asterisk">*</span>Working out of Victoria, BC, Canada</p>
            </div>
            <div className="developer--title">
                <h1>I'm your next</h1>
                <div className="developer--title_descriptors">
                    <div className='descriptor final_descriptor'>
                        <p>Full-Stack</p>
                    </div>
                    <div className='descriptor desc_passionate'>
                        <p>Passionate</p>
                    </div>
                    <div className='descriptor desc_creative'>
                        <p>Creative</p>
                    </div>
                    <div className='descriptor desc_bold'>
                        <p>BOLD</p>
                    </div>
                    <div className='descriptor desc_full-stack'>
                        <p>Full-Stack</p>
                    </div>
                </div>
                <h1 className="developer--title_bottom">developer.</h1>
            </div>
            <div className="navigateToProjects--container">
                <a href="/projects" className="buttonToProjects">
                    <img className="yellow_blob" src="assets/yellow-blob.png" alt=""/>
                MY WORK</a>
                <a href="/projects">
                    <img className="arrow--down" src="assets/downarrow-white.png" alt=""/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home