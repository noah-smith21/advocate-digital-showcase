import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';
import ta from './locales/ta.json';
import te from './locales/te.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  mr: { translation: mr },
  ta: { translation: ta },
  te: { translation: te },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      // order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // keys or params to lookup language from
      caches: ['localStorage'],
    },
  });

const setDocLang = (lng: string) => {
  try {
    document.documentElement.lang = lng;
    const rtlLangs = ['ar', 'he', 'fa', 'ur'];
    document.documentElement.dir = rtlLangs.includes(lng) ? 'rtl' : 'ltr';
  } catch (e) {
    // ignore when running in non-browser env
  }
};

setDocLang(i18n.language || 'en');
i18n.on('languageChanged', setDocLang);

export default i18n;
