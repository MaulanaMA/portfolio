import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import { profileData } from '../../data/profile';
import { MobileNav } from './MobileNav';

const navItems = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-white light:text-slate-900 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white shadow-md shadow-brand-blue/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="flex items-center">
              Maulana<span className="text-brand-cyan">MA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan ml-1 animate-pulse" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white light:text-slate-950 font-semibold'
                      : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/40 light:hover:bg-slate-100'
                  }`}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={profileData.cvUrl}
              download="CV_Maulana_Muhammad_Adityawarman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wide bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-4 h-4" />
              <span>{t('nav.download_cv')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-700/60 light:border-slate-300 bg-slate-800/80 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
};
