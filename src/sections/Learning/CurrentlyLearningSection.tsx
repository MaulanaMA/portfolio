import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';

interface LearningItem {
  name: string;
  description: string;
}

export const CurrentlyLearningSection: React.FC = () => {
  const { t } = useTranslation();
  const items = t('learning.items', { returnObjects: true }) as LearningItem[];

  return (
    <section className="py-16 md:py-20 relative bg-slate-950/40 light:bg-slate-50/50 border-y border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('learning.section_badge')}
          title={t('learning.title')}
          subtitle={t('learning.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Sparkles className="w-3 h-3" />
                    In Progress
                  </span>
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>R&amp;D Horizon</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
