import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Network, Wrench, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { experienceData } from '../../data/experience';

const typeIcons: Record<string, React.ElementType> = {
  teaching: BookOpen,
  intern: Network,
  tech: Wrench,
  organization: Users,
};

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('experience.section_badge')}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-indigo-600 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = typeIcons[item.type] || Wrench;
              const responsibilities = t(item.descriptionKey.replace('.desc', '.responsibilities'), { returnObjects: true }) as string[] || [];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Icon */}
                  <div className="hidden sm:flex absolute left-1/2 top-5 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-brand-cyan text-brand-cyan items-center justify-center shadow-lg shadow-brand-cyan/20 z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:pl-0' : 'sm:pr-0'}`}>
                    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-brand-blue/50 transition-all space-y-4">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-slate-500 uppercase">
                          {t(`experience.types.${item.type}`)}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white light:text-slate-900">
                          {t(item.roleKey)}
                        </h3>
                        <p className="text-sm font-medium text-brand-electric light:text-brand-blue mt-0.5">
                          {t(item.companyKey)}
                        </p>
                      </div>

                      <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                        {t(item.descriptionKey)}
                      </p>

                      {/* Responsibilities list */}
                      {Array.isArray(responsibilities) && responsibilities.length > 0 && (
                        <ul className="space-y-2 pt-2 border-t border-slate-800/60 light:border-slate-200 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                          {responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech stack badges */}
                      {item.techStack && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 light:bg-slate-200/80 text-slate-300 light:text-slate-800 border border-slate-700/60 light:border-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
