import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950/80 light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 font-mono text-lg font-bold text-white light:text-slate-900 mb-2">
              <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span>Maulana Muhammad Adityawarman</span>
            </div>
            <p className="text-sm text-slate-400 light:text-slate-600 max-w-sm">
              {profileData.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-center items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 light:border-slate-300 bg-slate-900/60 light:bg-white text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-950 hover:border-brand-blue transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 light:border-slate-300 bg-slate-900/60 light:bg-white text-slate-400 hover:text-brand-electric light:text-slate-600 light:hover:text-brand-blue hover:border-brand-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 light:border-slate-300 bg-slate-900/60 light:bg-white text-slate-400 hover:text-emerald-400 light:text-slate-600 light:hover:text-emerald-600 hover:border-emerald-500 transition-colors"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.socials.email}`}
              className="p-2.5 rounded-xl border border-slate-800 light:border-slate-300 bg-slate-900/60 light:bg-white text-slate-400 hover:text-brand-cyan light:text-slate-600 light:hover:text-brand-blue hover:border-brand-cyan transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Tech */}
          <div className="text-left md:text-right text-xs text-slate-500 light:text-slate-500 space-y-1">
            <p>
              &copy; {currentYear} {profileData.name}. {t('footer.rights')}
            </p>
            <p className="flex items-center md:justify-end gap-1">
              <span>{t('footer.built_with')}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
