import React, { Component } from 'react'
import DotMenu from './DotMenu'
import PageTitle from './PageTitle'
import './styles.css'

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="nav-bar">
                    <DotMenu />
                    <PageTitle />
                </div>
            </>
        )
    }
}

export default NavBar
