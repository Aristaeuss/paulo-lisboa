import React, { Component } from 'react';
import NavBarAbout from './NavBarAbout';
import AboutBody from './AboutBody';
import './about.css';

export class About extends Component {
    render() {
        return (
            <>
                <div className="nav-bar-about-main">
                    <NavBarAbout />
                </div>    
                <AboutBody />
            </>
        )
    }
}

export default About