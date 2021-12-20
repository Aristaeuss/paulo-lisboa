import './navbarabout.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Language from '../Language';


function DotMenu() {

    const { t, i18n } = useTranslation();

    return (
                <>
                    <div className="dot-menu-about">
                        <div className="about-title">
                            <p>{t('Biografia.1')}</p>
                        </div> 
                        <div className="second-button">
                            <Link to='/expos'>
                                <button>{t('Exposicoes.1')}</button>
                            </Link>    
                        </div>
                        <Language />
                    </div>
                </>
            )
}

export default DotMenu
