import './navbarabout.css';
import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import Language from '../Language';


class DotMenu extends Component {

    render(){
        return (
                    <>
                        <div className="dot-menu-about">
                            <div className="about-title">
                                <p>biografia</p>
                            </div> 
                            <div className="second-button">
                                <Link to='/expos'>
                                    <button>EXPOSIÇÕES</button>
                                </Link>    
                            </div>
                            <Language />
                        </div>
                    </>
                )
    }
}

export default DotMenu
