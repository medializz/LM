import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';
import { ServiceCategory, SiteSettings } from '../../types';
import { ServiceHeroVisual } from '../visuals/ServiceHeroVisual';
import { safeFormatPrice } from '../../utils/format';

interface ServiceHeroProps {
  service: ServiceCategory;
  siteSettings?: SiteSettings;
  onStartProject: () => void;
  onWhatsApp: () => void;
  onScrollToPackages: () => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  service,
  siteSettings,
  onStartProject,
  onWhatsApp,
  onScrollToPackages,
}) => {
  const startingPrice = service.startingPrice
    ? safeFormatPrice(service.startingPrice)
    : service.packages && service.packages.length > 0
    ? safeFormatPrice(Math.min(...service.packages.map(p => Number(p.price) || 9999).filter(p => p > 0)))
    : null;

  return (
    <section 
      id="service-hero"
      aria-label={`${service.title} Hero Section`}
      className="relative rounded-3xl bg-[#0a0d16] border border-white/[0.08] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ffbe1a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Typography, Value Proposition, Action CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow badge row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 px-3 py-1 rounded-full font-bold">
              {service.category || 'Creative Discipline'}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full">
              Cardiff, UK • Worldwide
            </span>
            {startingPrice && (
              <span className="text-xs font-mono font-bold text-white bg-white/[0.06] border border-white/15 px-3 py-1 rounded-full">
                From {startingPrice}
              </span>
            )}
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.08]">
              {service.heroHeadline || service.title}{' '}
              <span className="text-[#ffbe1a] block sm:inline">
                {service.heroHighlight || 'Engineered to Captivate.'}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-2 max-w-xl">
              {service.heroDescription || service.shortDescription || service.ctaDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              id="service-hero-start-project-btn"
              onClick={onStartProject}
              className="px-6 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm sm:text-base font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>{service.ctaButtonText || 'Start a Project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {service.packages && service.packages.length > 0 && (
              <button
                id="service-hero-view-packages-btn"
                onClick={onScrollToPackages}
                className="px-5 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 font-semibold text-sm sm:text-base font-['Outfit'] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Packages</span>
              </button>
            )}

            <button
              id="service-hero-whatsapp-btn"
              onClick={onWhatsApp}
              className="px-4 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 font-medium text-sm font-mono transition-all flex items-center gap-2 cursor-pointer"
              aria-label="Direct WhatsApp Inquiry"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>

          {/* Studio Guarantees strip */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-slate-300">
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
              <span>100% Vector Ownership</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <Award className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
              <span>Zero AI Templates</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
              <span>Fixed Milestones</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Visual Representation */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08] bg-black/40">
            {service.previewImage || service.image ? (
              <div className="relative">
                <img
                  src={service.previewImage || service.image}
                  alt={service.previewImageAlt || `${service.title} Agency Execution`}
                  className="w-full h-auto max-h-[440px] object-cover filter contrast-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              <ServiceHeroVisual slug={service.slug} className="!border-none !shadow-none" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
