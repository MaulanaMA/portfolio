import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cpu, Network, Users, Code, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: '4+',
      label: t('about.stats.projects_completed'),
      icon: Code,
      accent: 'text-brand-electric',
    },
    {
      value: '4+',
      label: t('about.stats.years_passion'),
      icon: GraduationCap,
      accent: 'text-brand-cyan',
    },
    {
      value: '50+',
      label: t('about.stats.students_taught'),
      icon: Users,
      accent: 'text-emerald-400',
    },
    {
      value: '5',
      label: t('about.stats.tech_domains'),
      icon: Cpu,
      accent: 'text-amber-400',
    },
  ];

  const traits = [
    {
      icon: Cpu,
      title: t('about.traits.problem_solver_title'),
      desc: t('about.traits.problem_solver_desc'),
    },
    {
      icon: Network,
      title: t('about.traits.infra_title'),
      desc: t('about.traits.infra_desc'),
    },
    {
      icon: Users,
      title: t('about.traits.communicator_title'),
      desc: t('about.traits.communicator_desc'),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('about.section_badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Narrative Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg"
          >
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 space-y-4">
              <p>
                {t('about.p1').replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
              <p>
                {t('about.p2').replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
              <p>
                {t('about.p3').replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
            </div>
          </motion.div>

          {/* Right: Metric Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 text-center hover:border-brand-blue/50 transition-all group"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-slate-800/60 light:bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1.5 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3 Core Value Traits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traits.map((trait, idx) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-brand-cyan/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">
                  {trait.title}
                </h3>
                <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
