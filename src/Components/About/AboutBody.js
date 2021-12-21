import React from 'react';
import './about.css';
import ImageAbout1 from './img/image-about1.png';
import ImageAbout2 from './img/image-about2.png';

function AboutBody() {
    
    return (
        <>
            <div className="img-about-wraper">
                <div className="img-about1">
                    <img src={ImageAbout1} />
                </div>
                <div className="img-about1-2">
                    <img src={ImageAbout1} />
                </div>
                <div className="img-about2">
                    <img src={ImageAbout2} />
                </div>
            </div>    
            
        </>
    )

}

export default AboutBody