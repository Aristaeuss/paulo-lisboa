import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-xhr-backend';

const Languages = ['pt', 'en']

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(HttpApi)
  .init({
    fallbackLng: 'pt',
    debug: true,
    whitelist: Languages,
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    react: {useSuspense : false},
    interpolation: {
      escapeValue: false,
    }
  });

  export default i18n;
