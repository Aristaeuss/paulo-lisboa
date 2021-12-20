import './navbarexpos.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Language from '../Language';


function DotMenuExpos() {

    const { t, i18n } = useTranslation();

    return (
                <>
                    <div className="dot-menu-expos">
                        <div className="first-button">
                            <Link to='/about'>
                                <button>{t('Biografia.1')}</button>
                            </Link>  
                        </div> 
                        <div className="expos-title">
                            <p>{t('Exposicoes.1')}</p>
                        </div>
                        <Language />
                    </div>
                </>
            )
}

export default DotMenuExpos