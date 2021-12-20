import React from 'react';
import NavBarExpos from './NavBarExpos.js';
import ExposBody from './ExposBody';
import './expos.css';

function Expos() {
    
    return (
        <>
            <div className="nav-bar-expos-main">
                <NavBarExpos />
            </div>  
            <div className="expos-body">  
                <ExposBody />
            </div>
        </>
    )
    
}

export default Expos