import React from 'react'
import './navbarabout.css'
import DotMenuAbout from './DotMenuAbout'
import TitleAbout from './TitleAbout'

function NavBarAbout() {
    
    return (
        <>
            <nav className="nav-bar-about">
                <DotMenuAbout />
                <div className="title-about">
                    <TitleAbout />
                </div>
            </nav>
        </>
    )
    
}

export default NavBarAbout