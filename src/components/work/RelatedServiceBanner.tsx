import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceCategory } from '../../types';
import { ServiceIcon } from '../ServiceIcons';
import { safeFormatPrice } from '../../utils/format';

interface RelatedServiceBannerProps {
  service: ServiceCategory;
  onNavigate: (href: string) => void;
}

export const RelatedServiceBanner: React.FC<RelatedServiceBannerProps> = ({
  service,
  onNavigate,
}) => {
  const startingPrice = service.startingPrice
    ? safeFormatPrice(service.startingPrice)
    : service.packages && service.packages.length > 0
    ? safeFormatPrice(Math.min(...service.packages.map(p => Number(p.price) || 9999).filter(p => p > 0)))
    : null;

  return (
    <div 
      id="related-service-banner"
      className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#10131d] via-[#121622] to-[#10131d] border border-[#ffbe1a]/30 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] shrink-0 mt-1">
          <ServiceIcon iconKey={service.iconKey || service.slug} size={24} />
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-[#ffbe1a] uppercase tracking-wider font-bold block">
            Integrated Service Discipline
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
            Need Similar Results for Your Brand?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] max-w-xl leading-relaxed">
            Discover our tailored packages, milestones, and full deliverable specifications for <strong className="text-white">{service.title}</strong>.
          </p>

          {startingPrice && (
            <div className="text-xs font-mono text-slate-400 pt-1">
              Packages starting from <strong className="text-[#ffbe1a]">{startingPrice}</strong>
            </div>
          )}
        </div>
      </div>

      <button
        id="related-service-banner-btn"
        onClick={() => onNavigate(`/services/${service.slug}`)}
        className="px-6 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
      >
        <span>Explore {service.title}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
