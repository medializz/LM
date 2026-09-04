import React, { useState } from 'react';
import { Check, X, ArrowRight, MessageCircle, Clock, RotateCcw, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { ServicePackage, ServiceCategory, SiteSettings } from '../../../types';
import { createPackageWhatsAppUrl } from '../../../utils/whatsapp';
import { safeFormatPrice } from '../../../utils/format';

interface PackageCardProps {
  pkg: ServicePackage;
  service: ServiceCategory;
  siteSettings?: SiteSettings;
  isSelected?: boolean;
  onSelect?: (pkg: ServicePackage) => void;
  onRequestInquiry?: (pkg: ServicePackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  service,
  siteSettings,
  isSelected = false,
  onSelect,
  onRequestInquiry
}) => {
  const [showNotIncluded, setShowNotIncluded] = useState(false);

  const isRecommended = Boolean(pkg.recommended);
  const whatsappUrl = createPackageWhatsAppUrl({
    rawPhone: siteSettings?.whatsappNumber,
    siteName: siteSettings?.siteName,
    serviceTitle: service.title,
    packageName: pkg.name,
    duration: pkg.duration,
    estimatedTotal: `${pkg.currency || '£'}${safeFormatPrice(pkg.price)}`
  });

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRequestInquiry) {
      onRequestInquiry(pkg);
    }
  };

  return (
    <div
      id={`package-card-${pkg.id}`}
      onClick={() => onSelect && onSelect(pkg)}
      className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isRecommended
          ? 'bg-gradient-to-b from-[#181c28] to-[#10131d] border-2 border-[#ffbe1a] shadow-[0_0_35px_rgba(255,190,26,0.15)] md:-translate-y-2'
          : 'bg-[#10131d] border border-white/[0.08] hover:border-white/20 shadow-xl'
      } ${isSelected && !isRecommended ? 'ring-2 ring-white/30' : ''}`}
    >
      {/* Top Highlight Badge */}
      {pkg.badge && (
        <div className="absolute top-0 right-0">
          <span
            className={`inline-flex items-center gap-1 px-4 py-1 text-[11px] font-mono font-bold tracking-wider uppercase rounded-bl-2xl ${
              isRecommended
                ? 'bg-[#ffbe1a] text-black shadow-md'
                : 'bg-white/[0.08] text-slate-300 border-l border-b border-white/10'
            }`}
          >
            {isRecommended && <Sparkles className="w-3 h-3 fill-black" />}
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-6 sm:p-8 space-y-6 flex-1">
        {/* Package Title & Description */}
        <div className="space-y-2 pr-12">
          <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[38px]">
            {pkg.description}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="pt-2 pb-4 border-b border-white/[0.08]">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
              {pkg.pricePrefix || 'From '}
            </span>
            <span className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white tracking-tight">
              {pkg.currency || '£'}{safeFormatPrice(pkg.price)}
            </span>
            {pkg.duration && (
              <span className="text-xs font-mono text-slate-400">
                / {pkg.duration}
              </span>
            )}
          </div>
          {pkg.idealCustomer && (
            <p className="text-[11px] text-slate-400 font-mono mt-2 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#ffbe1a]" />
              <span className="text-slate-300 font-medium">Best for:</span> {pkg.idealCustomer}
            </p>
          )}
        </div>

        {/* Timeline & Revisions Pill Spec */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Clock className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
            <span className="truncate text-[11px]">{pkg.turnaroundTime || '5–7 business days'}</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <RotateCcw className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
            <span className="truncate text-[11px]">{pkg.revisionCount || '2 revision rounds'}</span>
          </div>
        </div>

        {/* Deliverables / Features Checklist */}
        <div className="space-y-3">
          <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#ffbe1a]">
            What's Included:
          </span>
          <ul className="space-y-2.5">
            {(pkg.features || []).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-[#ffbe1a]/15 border border-[#ffbe1a]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#ffbe1a]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed Deliverables (if present) */}
        {pkg.deliverables && pkg.deliverables.length > 0 && (
          <div className="pt-3 border-t border-white/[0.06] space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
              Tangible File Hand-Off:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {pkg.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* What's Not Included Accordion (Setting clear expectations) */}
        {pkg.notIncluded && pkg.notIncluded.length > 0 && (
          <div className="pt-3 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowNotIncluded(!showNotIncluded);
              }}
              className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors py-1"
            >
              <span>Scope Exclusions ({pkg.notIncluded.length})</span>
              {showNotIncluded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            {showNotIncluded && (
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400 bg-black/20 p-3 rounded-xl border border-white/[0.04]">
                {pkg.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px]">
                    <X className="w-3 h-3 text-slate-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 sm:p-8 pt-0 space-y-2.5">
        <button
          id={`package-cta-btn-${pkg.id}`}
          onClick={handleInquiry}
          className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 cursor-pointer ${
            isRecommended
              ? 'bg-[#ffbe1a] hover:bg-amber-400 text-black shadow-lg shadow-[#ffbe1a]/20 hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <span>{pkg.ctaText || 'Request This Package'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Enquire via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
