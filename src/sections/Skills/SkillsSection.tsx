import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Terminal, Layout, Database, Network, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { skillGroups } from '../../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Layout,
  Database,
  Network,
  Wrench,
};

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('skills.section_badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => {
            const Icon = iconMap[group.icon] || Terminal;
            return (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-brand-blue/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-electric">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white light:text-slate-900">
                      {t(group.categoryKey)}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-950/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800 hover:border-brand-cyan/50 hover:text-brand-cyan transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{group.skills.length} Technologies</span>
                  <span className="text-brand-electric">Hands-on Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
