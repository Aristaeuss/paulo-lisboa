import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';
import ImageAbout1 from './img/image-about1.png';
import ImageAbout2 from './img/image-about2.png';

function AboutBody() {

    const { t, i18n } = useTranslation();
    
    return (
        <>
            <div className="row">
                <div className="images">
                    <div className="img-about1">
                        <img src={ImageAbout1} />
                    </div>
                    <div className="img-about2">
                        <img src={ImageAbout2} />
                    </div>
                    {/*<span>"{t('Texto_Sobre.1')}"</span>
                    <span>"{t('Texto_Sobre.2')}"</span>*/}
                </div>
            </div>    
            {/* <div className="text-about-wrapper">
                <p>"{t('Texto_Sobre.3')}"</p>
            </div>
            <div className="text-about-wrapper">
                <p>"{t('Texto_Sobre.4')}"</p>
            </div>
            <div className="text-about-wrapper">
                <p>"{t('Texto_Sobre.5')}"</p>
            </div>
            <div className="text-about-wrapper">
                <p>"{t('Texto_Sobre.6')}"</p>
            </div>
            <div className="text-about-wrapper">
                <p>"{t('Texto_Sobre.7')}"</p>
            </div>
            <div className="text-about-wrapper">
                <p><i>{t('Texto_Sobre.titulo')}</i></p>
            </div>
            <div className="text-about-wrapper">
                <p><b>{t('Texto_Sobre.autor')}</b></p>
            </div> */}
        </>
    )

}

export default AboutBody