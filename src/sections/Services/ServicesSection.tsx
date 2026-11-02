import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Rocket, Store, GraduationCap, Cpu, Wrench, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { servicesData } from '../../data/services';
import { profileData } from '../../data/profile';

const serviceIcons: Record<string, React.ElementType> = {
  company_profile: Globe,
  landing_page: Rocket,
  business_web: Store,
  school_system: GraduationCap,
  custom_app: Cpu,
  maintenance: Wrench,
};

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const encodedMessage = encodeURIComponent(
      `Halo Mas Maulana, saya tertarik dengan layanan *${serviceTitle}*. Bisakah kita berdiskusi lebih lanjut mengenai kebutuhan dan estimasi pengerjaannya? Terima kasih.`
    );
    window.open(`${profileData.socials.whatsapp}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('services.section_badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Globe;
            const features = t(service.descriptionKey.replace('.desc', '.features'), { returnObjects: true }) as string[] || [];
            const serviceTitle = t(service.titleKey);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl glass-card border p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/60 ${
                  service.popular
                    ? 'border-brand-blue/40 ring-1 ring-brand-blue/30 shadow-lg shadow-brand-blue/10'
                    : 'border-slate-800/80 light:border-slate-200'
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-blue to-brand-cyan px-3 py-1 rounded-full shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {t('services.popular_badge')}
                  </div>
                )}

                <div>
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-electric">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2.5">
                    {serviceTitle}
                  </h3>

                  <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-6">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Feature deliverables */}
                  <div className="space-y-2.5 pb-6 border-b border-slate-800/80 light:border-slate-200">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp CTA */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(serviceTitle)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-emerald-600 light:bg-slate-900 light:hover:bg-emerald-600 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('services.cta_button')}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 text-xs sm:text-sm text-slate-500 font-mono">
          <p>{t('services.custom_quote')}</p>
        </div>
      </div>
    </section>
  );
};
