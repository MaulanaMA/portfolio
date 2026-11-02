import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTranslation } from 'react-i18next';

export const BackToTop: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isVisible = scrollY > 400;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl border border-slate-700/60 light:border-slate-300 bg-slate-900/90 light:bg-white/90 text-slate-200 light:text-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:border-brand-blue hover:text-brand-electric focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label={t('footer.back_to_top')}
      title={t('footer.back_to_top')}
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
