import React from 'react';
import { ServiceCategory } from '../../types';
import { ServiceIcon } from '../ServiceIcons';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { safeFormatPrice } from '../../utils/format';

interface ServicesSectionProps {
  services: ServiceCategory[];
  onSelectService: (service: ServiceCategory) => void;
  onExploreAll?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onExploreAll
}) => {
  const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section 
      id="services" 
      className="relative z-20 py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] overflow-hidden"
      aria-label="What We Do - Services"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 font-['Plus_Jakarta_Sans']"
          >
            <span>WHAT WE DO</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white font-['Outfit'] tracking-tight leading-tight mb-3 sm:mb-4"
          >
            Creative Solutions for <span className="text-[#ffbe1a] drop-shadow-[0_0_25px_rgba(255,190,26,0.35)]">Every Need</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-slate-400 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-relaxed"
          >
            From branding to digital marketing, we provide end-to-end creative solutions that help your brand grow.
          </motion.p>
        </div>

        {/* Services Grid (Symmetrically balanced 7-column layout for 14 services on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 lg:gap-3 mb-10">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={`services-grid-card-${service.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.025 }}
              onClick={() => onSelectService(service)}
              className="group relative flex flex-col items-center text-center p-3.5 sm:p-4 lg:p-3.5 rounded-2xl bg-[#0f1118]/90 hover:bg-[#151824] border border-white/[0.08] hover:border-[#ffbe1a]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,190,26,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer select-none"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service);
                }
              }}
            >
              {/* Subtle top inner light highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

              {/* Bespoke Icon Frame */}
              <div className="mb-3 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#ffbe1a]/50 group-hover:bg-[#ffbe1a]/10 group-hover:shadow-[0_0_18px_rgba(255,190,26,0.25)] transition-all duration-300 flex items-center justify-center shrink-0">
                <ServiceIcon 
                  name={service.iconKey || service.slug} 
                  iconKey={service.iconKey}
                  size={30} 
                  className="text-[#ffbe1a] transition-all duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(255,190,26,0.3)]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-[13px] font-bold text-white font-['Outfit'] mb-1.5 leading-snug group-hover:text-[#ffbe1a] transition-colors">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-[10px] sm:text-[11px] text-slate-400 group-hover:text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed line-clamp-2">
                {service.shortDescription}
              </p>

              {/* Starting Price Pill */}
              {service.startingPrice && (
                <div className="mt-2.5">
                  <span className="text-[10px] font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 group-hover:bg-[#ffbe1a]/20 px-2 py-0.5 rounded-full border border-[#ffbe1a]/30 transition-colors">
                    From {service.currency || '£'}{safeFormatPrice(service.startingPrice)}
                  </span>
                </div>
              )}

              {/* Subtle bottom indicator */}
              <div className="mt-2 w-4 h-0.5 rounded-full bg-transparent group-hover:bg-[#ffbe1a] group-hover:w-8 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Explore All Services Button */}
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => {
              if (onExploreAll) {
                onExploreAll();
              } else if (sortedServices.length > 0) {
                onSelectService(sortedServices[0]);
              }
            }}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#ffbe1a] text-black font-bold text-xs sm:text-sm font-['Outfit'] hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,190,26,0.35)] cursor-pointer"
            aria-label="Explore all services"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
