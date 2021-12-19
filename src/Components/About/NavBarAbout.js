import React, { Component } from 'react'
import './navbarabout.css'
import DotMenuAbout from './DotMenuAbout'
import TitleAbout from './TitleAbout'

export class NavBarGray extends Component {
    render() {
        return (
            <>
                <div className="nav-bar-about">
                    <DotMenuAbout />
                    <div className="title-about">
                        <TitleAbout />
                    </div>
                </div>
            </>
        )
    }
}

export default NavBarGray