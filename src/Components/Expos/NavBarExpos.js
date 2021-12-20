import React from 'react'
import './navbarexpos.css'
import DotMenuExpos from './DotMenuExpos'
import TitleExpos from './TitleExpos'

function NavBarExpos() {
    
    return (
        <>
            <nav className="nav-bar-expos">
                <DotMenuExpos />
                <div className="title-expos">
                    <TitleExpos />
                </div>
            </nav>
        </>
    )
    
}

export default NavBarExpos