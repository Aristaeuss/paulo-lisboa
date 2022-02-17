import React, {useEffect, useState} from 'react';
import './about.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import ImageAbout1 from './img/image-about1.png';
import ImageAbout2 from './img/image-about2.png';
import ImageAbout3 from './img/image-about3.png';
import ImageAbout3_1 from './img/image-about3-1.png';
import ImageAbout3_2 from './img/image-about3+1.png';

function AboutBody() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        Aos.init({duration: 1000});

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const { t } = useTranslation();
    
    return (
        <>
            <div className="box">
                <div className="images">
                    <div className="img-about1" data-aos='fade-up' data-aos-delay="1000"
                        style={{transform: `translateY(${offsetY * 0.3}px)`}}>
                        <img className='img1' src={ImageAbout1} />
                    </div>
                    <div className="img-about2" data-aos='fade-up' data-aos-delay="500"
                        style={{transform: `translateY(${offsetY * 0.4}px)`}}>
                        <img className='img2' src={ImageAbout2} />
                    </div>
                </div>
                <div data-aos='fade-up' className="text1">
                    <p>"{t('Texto_Sobre.1')} {t('Texto_Sobre.2')}"</p>
                </div>
            </div> 
            <div className="box2">
                <div className="box2-content-wrapper" data-aos='fade-up' data-aos-delay="1000">
                    <div className="img-about3">
                        <img className='img3-1' src={ImageAbout3_1} />
                        <img className='img3' src={ImageAbout3} />
                        <img className='img3-2' src={ImageAbout3_2} />
                    </div>
                    <div className="text3_4">
                        <p>"{t('Texto_Sobre.3')} {t('Texto_Sobre.4')}"</p>
                    </div>
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