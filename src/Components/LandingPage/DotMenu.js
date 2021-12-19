import './styles.css';
import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import Language from '../Language';


class DotMenu extends Component {
    
    render(){
        return (
                    <>
                        <div className="dot-menu">
                            <div className="first-button">
                                <Link to='/about'>
                                    <button>biografia</button>
                                </Link>
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
