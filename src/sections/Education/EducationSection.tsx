import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';

interface CertItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export const EducationSection: React.FC = () => {
  const { t } = useTranslation();
  const certItems = t('certifications.items', { returnObjects: true }) as CertItem[];
  const eduHighlights = t('education.highlights', { returnObjects: true }) as string[] || [];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('education.section_badge')}
          title={t('education.title')}
          subtitle={t('education.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Education Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-brand-blue/50 transition-all space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-electric">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 mb-1">
                    {t('education.status')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                    {t('education.degree')}
                  </h3>
                  <p className="text-sm font-semibold text-brand-cyan mt-0.5">
                    {t('education.institution')}
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5" />
                {t('education.period')}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed">
              {t('education.description')}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-800/80 light:border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Fokus Akademis &amp; Capaian:
              </h4>
              <div className="space-y-2">
                {eduHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Certifications Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white light:text-slate-900">
                {t('certifications.title')}
              </h3>
            </div>

            <div className="space-y-3">
              {certItems.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-amber-400/40 transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <BookmarkCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white light:text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 light:text-slate-600">
                      {cert.issuer} &bull; <span className="font-mono text-amber-400/90">{cert.year}</span>
                    </p>
                    {cert.credentialId && (
                      <span className="inline-block text-[10px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
