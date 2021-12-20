import React from 'react';
import NavBarAbout from './NavBarAbout';
import AboutBody from './AboutBody';
import './about.css';

function About() {
    
    return (
        <>
            <div className="nav-bar-about-main">
                <NavBarAbout />
            </div>  
            <div className="about-body">  
                <AboutBody />
            </div>
        </>
    )
    
}

export default About