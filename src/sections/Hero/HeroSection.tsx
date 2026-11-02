import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown, Mail, ArrowRight, MessageCircle, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/common/Icons';
import { profileData } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation
  useEffect(() => {
    const roles = t('hero.roles', { returnObjects: true }) as string[];
    const currentRole = roles[roleIndex] || roles[0];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, t, i18n.language]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] light:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 light:text-emerald-600 text-xs font-mono font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{t('hero.badge_available')}</span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-brand-cyan font-mono text-sm sm:text-base font-semibold tracking-wider uppercase">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.1]">
                Maulana Muhammad{' '}
                <span className="text-gradient block sm:inline">Adityawarman</span>
              </h1>
            </motion.div>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-lg sm:text-2xl font-bold text-slate-300 light:text-slate-700 min-h-[2.5rem]"
            >
              <span className="text-brand-electric">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2.5 h-6 bg-brand-cyan animate-pulse inline-block" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base bg-brand-blue hover:bg-blue-600 text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>{t('hero.cta_contact')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.cvUrl}
                download="CV_Maulana_Muhammad_Adityawarman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base border border-slate-700 light:border-slate-300 bg-slate-900/60 light:bg-white text-slate-200 light:text-slate-800 hover:border-brand-blue hover:text-brand-electric transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-brand-cyan" />
                <span>{t('hero.cta_cv')}</span>
              </a>
            </motion.div>

            {/* Social Icons Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-800/80 light:border-slate-200 max-w-md"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-950 transition-colors p-1"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-electric light:text-slate-600 light:hover:text-brand-blue transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 light:text-slate-600 light:hover:text-emerald-600 transition-colors p-1"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Modern Tech Card Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-cyan to-indigo-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

              {/* Main Visual Terminal / Profile Card */}
              <div className="relative rounded-2xl glass-card p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-700/60 light:border-slate-200">
                {/* Card Header Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                    developer@perbanas-2026:~$
                  </span>
                </div>

                {/* Profile Identity Snippet */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue via-blue-600 to-brand-cyan flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-brand-blue/30">
                      MA
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-white light:text-slate-900 leading-snug">
                        Maulana M. Adityawarman
                      </h2>
                      <p className="text-xs font-mono text-brand-cyan">
                        S1 Informatika UHW Perbanas
                      </p>
                      <p className="text-xs text-slate-400 light:text-slate-600 mt-0.5">
                        Surabaya / Balikpapan
                      </p>
                    </div>
                  </div>

                  {/* Code-like Highlight block */}
                  <div className="p-4 rounded-xl bg-slate-950/60 light:bg-slate-100 border border-slate-800/60 light:border-slate-200 font-mono text-xs space-y-1.5 text-slate-300 light:text-slate-800">
                    <p className="text-brand-electric">
                      <span className="text-slate-500">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-400 light:text-emerald-600">"{profileData.name}"</span>,
                    </p>
                    <p className="pl-4">
                      degree: <span className="text-emerald-400 light:text-emerald-600">"S1 Informatika (2026)"</span>,
                    </p>
                    <p className="pl-4">
                      skills: [<span className="text-amber-400 light:text-amber-600">"Backend"</span>, <span className="text-amber-400 light:text-amber-600">"Networking"</span>, <span className="text-amber-400 light:text-amber-600">"Education"</span>],
                    </p>
                    <p className="pl-4">
                      openToWork: <span className="text-brand-cyan">true</span>
                    </p>
                    <p className="text-brand-electric">&#125;;</p>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-800/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-left">
                      <span className="text-xs text-slate-400 light:text-slate-500 block">Fokus Utama</span>
                      <span className="text-xs font-semibold text-white light:text-slate-900">Backend &amp; Network</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-left">
                      <span className="text-xs text-slate-400 light:text-slate-500 block">Status Lulusan</span>
                      <span className="text-xs font-semibold text-white light:text-slate-900">Fresh Graduate 2026</span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive card footer */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                    Ready to build
                  </span>
                  <span>100% Client-Centric</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
