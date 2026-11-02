import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, X } from 'lucide-react';
import { profileData } from '../../data/profile';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ id: string; labelKey: string }>;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-slate-900 light:bg-white border-l border-slate-800 light:border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-50"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200 mb-6">
                <span className="font-mono font-bold text-lg text-white light:text-slate-900">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={onClose}
                      className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-brand-blue/15 text-brand-electric font-semibold border border-brand-blue/30'
                          : 'text-slate-300 light:text-slate-700 hover:bg-slate-800/50 light:hover:bg-slate-100'
                      }`}
                    >
                      <span>{t(item.labelKey)}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CV Action */}
            <div className="pt-6 border-t border-slate-800 light:border-slate-200">
              <a
                href={profileData.cvUrl}
                download="CV_Maulana_Muhammad_Adityawarman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-mono font-semibold bg-brand-blue hover:bg-blue-600 text-white shadow-lg shadow-brand-blue/30 transition-all text-center"
              >
                <FileDown className="w-4 h-4" />
                <span>{t('nav.download_cv')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
