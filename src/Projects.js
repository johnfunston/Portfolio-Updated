import React from 'react';
import './Projects.css';
import {useRef} from 'react'


function Projects() {
 
    const projectsBackground = useRef()

   function changeBackgroundColor(e) {
    if(e.target.classList.contains('project1')) {
        projectsBackground.current.style.backgroundColor = 'lightcoral'
    } else if (e.target.classList.contains('project2')) {
        projectsBackground.current.style.backgroundColor = '#a8e6ce'
   } else if (e.target.classList.contains('project3')) {
        projectsBackground.current.style.backgroundColor = 'lightblue' 
   }
    }
    function revertBackgroundColor() {
    projectsBackground.current.style.backgroundColor = '#fff'
    }
    


  return (
    <div ref={projectsBackground} className="projects">
        <a href="/" className="backHomeButton">BACK</a>
        <div className="projects--container">
            <a onMouseEnter={changeBackgroundColor} onMouseLeave={revertBackgroundColor} href="/project1" className="project project1">  
            </a>
            <a onMouseEnter={changeBackgroundColor} onMouseLeave={revertBackgroundColor} href="/project2" className="project project2">   
            </a>
            <a onMouseEnter={changeBackgroundColor} onMouseLeave={revertBackgroundColor}  href='project 3' className="project project3">   
            </a>     
        </div>
    </div>
    )

}

export default Projects