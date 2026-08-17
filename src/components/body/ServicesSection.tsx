import React from 'react';
import { ServiceCategory } from '../../types';
import { ServiceIcon } from '../ServiceIcons';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

        {/* 11 Services Grid (matching the horizontal card aesthetic in the reference) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2.5 sm:gap-3 lg:gap-2.5 mb-10">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={`services-grid-card-${service.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              onClick={() => onSelectService(service)}
              className="group relative flex flex-col items-center text-center p-3 sm:p-3.5 lg:p-3 rounded-2xl bg-[#0f1118]/90 hover:bg-[#151824] border border-white/[0.08] hover:border-[#ffbe1a]/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,190,26,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
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
              {/* Gold Icon */}
              <div className="mb-2.5 p-1 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <ServiceIcon 
                  name={service.iconKey || service.slug} 
                  size={32} 
                  className="text-[#ffbe1a] drop-shadow-[0_2px_10px_rgba(255,190,26,0.3)] transition-colors duration-300 group-hover:text-[#ffe066]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-xs font-bold text-white font-['Outfit'] mb-1.5 leading-snug group-hover:text-[#ffbe1a] transition-colors">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-[10px] sm:text-[11px] text-slate-400 group-hover:text-slate-300 font-['Plus_Jakarta_Sans'] leading-tight line-clamp-3">
                {service.shortDescription}
              </p>

              {/* Subtle bottom indicator */}
              <div className="mt-2 w-4 h-0.5 rounded-full bg-transparent group-hover:bg-[#ffbe1a] transition-all duration-300" />
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
