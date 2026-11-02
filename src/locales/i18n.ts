import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationID from './id/translation.json';
import translationEN from './en/translation.json';

const resources = {
  id: {
    translation: translationID,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    lng: localStorage.getItem('i18nextLng') || 'id',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Keep document html lang attribute in sync
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
