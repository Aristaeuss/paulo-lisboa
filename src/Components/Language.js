import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../translate/i18n';

function Language() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = React.useState('pt');

    function clickHandler() {
        if (lang === 'pt') {
            setLang(lang => 'en')
        } else {
            setLang(lang => 'pt') 
        }
        i18n.changeLanguage(lang);
    }
    
    return (
        <>
            <div className="third-button">
                <button onClick={() => clickHandler()}>{t('pt.1')}</button>
            </div>
        </>
    )
}

export default Language
