import React, { useRef } from 'react';
import { ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceStripProps {
  services: ServiceCategory[];
  activeServiceSlug?: string | null;
  onSelectService?: (service: ServiceCategory) => void;
}

export const ServiceStrip: React.FC<ServiceStripProps> = ({
  services,
  activeServiceSlug,
  onSelectService,
}) => {
  // Sort services by order
  const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services-strip"
      className="relative z-20 pt-1 pb-4 sm:pb-6"
      aria-label="Core Agency Services"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Mobile Header / Swipe Hint */}
        <div className="flex md:hidden items-center justify-between px-1 mb-1.5">
          <span className="text-[10.5px] uppercase font-bold tracking-wider text-slate-400 font-['Plus_Jakarta_Sans']">
            Our Services & Capabilities
          </span>
          <div className="flex items-center gap-1 text-[11px] text-[#ffbe1a] font-medium">
            <span>Swipe</span>
            <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
          </div>
        </div>

        {/* Strip Container with responsive touch scroll */}
        <div className="relative group/strip">
          {/* Edge fade gradient indicators for horizontal scroll on mobile/tablet */}
          <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none md:hidden" />

          {/* Quick scroll arrows for desktop / tablets */}
          <button 
            onClick={() => scroll('left')}
            className="hidden xl:flex absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#141722] border border-white/15 text-slate-300 hover:text-[#ffbe1a] items-center justify-center z-20 opacity-0 group-hover/strip:opacity-100 transition-opacity shadow-lg cursor-pointer"
            aria-label="Scroll services left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#141722] border border-white/15 text-slate-300 hover:text-[#ffbe1a] items-center justify-center z-20 opacity-0 group-hover/strip:opacity-100 transition-opacity shadow-lg cursor-pointer"
            aria-label="Scroll services right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex items-stretch gap-2 sm:gap-2.5 lg:gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x no-scrollbar py-2 px-1 scroll-smooth"
          >
            {sortedServices.map((service, index) => {
              const isSelected = activeServiceSlug === service.slug;

              return (
                <motion.button
                  key={service.id || service.slug}
                  id={`service-card-${service.slug}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  onClick={() => onSelectService && onSelectService(service)}
                  className={`group relative flex-1 min-w-[100px] xs:min-w-[110px] sm:min-w-[120px] lg:min-w-0 snap-start flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#ffbe1a] text-center select-none ${
                    isSelected
                      ? 'bg-[#181b24] border-2 border-[#ffbe1a] shadow-[0_0_20px_rgba(255,190,26,0.35)] -translate-y-0.5'
                      : 'bg-[#10131c]/90 hover:bg-[#151924] active:bg-[#181b26] border border-white/[0.08] hover:border-[#ffbe1a]/50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.7)] hover:-translate-y-0.5'
                  }`}
                  role="button"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Subtle top inner light highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-xl" />

                  {/* Service Icon Container */}
                  <div className="mb-1.5 sm:mb-2 p-0.5 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <ServiceIcon 
                      name={service.iconKey || service.slug} 
                      size={26} 
                      className="text-[#ffbe1a] drop-shadow-[0_2px_8px_rgba(255,190,26,0.3)] transition-colors duration-300 group-hover:text-[#ffe066]"
                    />
                  </div>

                  {/* Service Title */}
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-200 group-hover:text-white transition-colors leading-tight font-['Plus_Jakarta_Sans'] line-clamp-2">
                    {service.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
