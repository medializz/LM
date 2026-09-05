import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceCategory } from '../../types';
import { ServiceIcon } from '../ServiceIcons';
import { ServiceHeroVisual } from '../visuals/ServiceHeroVisual';
import { safeFormatPrice } from '../../utils/format';

interface ServiceCardProps {
  service: ServiceCategory;
  onNavigate: (href: string) => void;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onNavigate,
  featured = false,
}) => {
  // Determine starting price from startingPrice or packages
  const startingPrice = service.startingPrice
    ? safeFormatPrice(service.startingPrice)
    : service.packages && service.packages.length > 0
    ? safeFormatPrice(Math.min(...service.packages.map(p => Number(p.price) || 9999).filter(p => p > 0)))
    : null;

  const deliverableCount = service.deliverables?.length || service.capabilities?.length || 0;
  const packageCount = service.packages?.length || 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/services/${service.slug}`);
  };

  return (
    <div
      id={`service-card-${service.slug}`}
      onClick={handleClick}
      role="article"
      aria-label={`${service.title} service`}
      className={`group relative rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] overflow-hidden ${
        featured ? 'ring-1 ring-[#ffbe1a]/30' : ''
      }`}
    >
      {/* Background radial accent on hover */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffbe1a]/5 rounded-full blur-3xl group-hover:bg-[#ffbe1a]/10 transition-colors pointer-events-none" />

      {/* Top Media / Visual Frame */}
      <div className="space-y-4">
        <div className="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-black/40 relative border border-white/[0.05] group-hover:border-[#ffbe1a]/30 transition-colors">
          {service.previewImage || service.image ? (
            <img
              src={service.previewImage || service.image}
              alt={service.previewImageAlt || `${service.title} visual preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full transform scale-95 origin-center group-hover:scale-100 transition-transform duration-500">
              <ServiceHeroVisual slug={service.slug} className="h-full !p-3 sm:!p-4 border-none shadow-none" />
            </div>
          )}

          {/* Category Tag pill */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#07090e]/90 px-2.5 py-1 rounded-md border border-[#ffbe1a]/30 shadow backdrop-blur-md">
              {service.category || 'Creative Discipline'}
            </span>
          </div>

          {/* Starting Price Pill if available */}
          {startingPrice && (
            <div className="absolute bottom-3 right-3 z-10">
              <span className="text-[11px] font-mono font-bold text-white bg-black/80 px-2.5 py-1 rounded-md border border-white/20 shadow backdrop-blur-md">
                From {startingPrice}
              </span>
            </div>
          )}
        </div>

        {/* Header & Meta */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center shrink-0 text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-colors">
              <ServiceIcon iconKey={service.iconKey || service.slug} size={16} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors tracking-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] line-clamp-2 leading-relaxed">
            {service.shortDescription || service.ctaDescription}
          </p>
        </div>
      </div>

      {/* Highlights / Badges */}
      <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
        {deliverableCount > 0 && (
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ffbe1a]" />
              {deliverableCount} Deliverables Included
            </span>
            {packageCount > 0 && (
              <span className="text-slate-500">• {packageCount} Tiers</span>
            )}
          </div>
        )}

        {/* Bottom CTA Row */}
        <div className="flex items-center justify-between text-xs font-mono text-[#ffbe1a] font-semibold pt-1">
          <span className="group-hover:underline underline-offset-4">Explore Service</span>
          <div className="w-6 h-6 rounded-full bg-white/[0.05] group-hover:bg-[#ffbe1a] flex items-center justify-center text-slate-300 group-hover:text-black transition-all">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
