import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';
import ImageAbout1 from './img/image-about1.png';
import ImageAbout2 from './img/image-about2.png';

function AboutBody() {

    const { t, i18n } = useTranslation();
    
    return (
        <>
            <div className="box">
                <div className="images">
                    <div className="img-about1">
                        <img className='img1' src={ImageAbout1} />
                    </div>
                    <div className="img-about2">
                        <img className='img2' src={ImageAbout2} />
                    </div>
                    {/*<span>"{t('Texto_Sobre.2')}"</span>*/}
                </div>
                <div className="text1">
                    <p>"{t('Texto_Sobre.1')}"</p>
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