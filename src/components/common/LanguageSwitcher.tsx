import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('id') ? 'id' : 'en';

  const switchLanguage = (lng: 'id' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
  };

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-slate-800/80 light:bg-slate-200/90 border border-slate-700/60 light:border-slate-300 text-xs font-mono font-medium transition-all duration-200 shadow-inner ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <Languages className="w-3.5 h-3.5 ml-1.5 mr-1 text-brand-electric light:text-brand-blue" />
      <button
        type="button"
        onClick={() => switchLanguage('id')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          currentLang === 'id'
            ? 'bg-brand-blue text-white shadow-md font-semibold'
            : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
        }`}
        aria-pressed={currentLang === 'id'}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-brand-blue text-white shadow-md font-semibold'
            : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
        }`}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </button>
    </div>
  );
};
