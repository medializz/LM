import React from 'react';
import { PackageOpen, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceBundle, SiteSettings, ServiceCategory } from '../../../types';
import { createBundleWhatsAppUrl } from '../../../utils/whatsapp';
import { navigateTo } from '../../../utils/router';

interface BundleCardProps {
  bundle: ServiceBundle;
  siteSettings?: SiteSettings;
  services?: ServiceCategory[];
  onOpenContact?: (customService?: string) => void;
}

export const BundleCard: React.FC<BundleCardProps> = ({
  bundle,
  siteSettings,
  services = [],
  onOpenContact
}) => {
  const currency = bundle.currency || '£';
  const whatsappUrl = createBundleWhatsAppUrl(
    siteSettings?.whatsappNumber,
    siteSettings?.siteName,
    bundle.name,
    `${currency}${bundle.startingPrice.toLocaleString()}`
  );

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenContact) {
      onOpenContact(`Service Bundle: ${bundle.name} (${currency}${bundle.startingPrice.toLocaleString()})`);
    } else {
      navigateTo(`/contact?bundle=${encodeURIComponent(bundle.id)}`);
    }
  };

  // Find service titles for badges
  const serviceSlugs = bundle.services || [];
  const includedServiceNames = serviceSlugs.map((slug) => {
    const matched = services.find((s) => s.slug === slug);
    return matched ? matched.title : slug.replace(/-/g, ' ');
  });

  return (
    <div
      id={`bundle-card-${bundle.id}`}
      className="rounded-3xl bg-gradient-to-b from-[#161a25] to-[#10131d] border border-[#ffbe1a]/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#ffbe1a]/60 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Tagline / Savings Pill */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffbe1a]/15 text-[#ffbe1a] text-xs font-mono font-bold tracking-wider uppercase border border-[#ffbe1a]/30">
            <Sparkles className="w-3 h-3" />
            {bundle.badge || bundle.tagline || 'Cross-Service Upgrade'}
          </span>

          {bundle.discountNote && (
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {bundle.discountNote}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h4 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
            {bundle.name}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {bundle.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="pt-2 pb-3 border-b border-white/[0.08] flex items-baseline gap-3 flex-wrap">
          <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
            {currency}{bundle.startingPrice.toLocaleString()}
          </span>
          <span className="text-xs font-mono text-slate-400">
            / {bundle.duration || 'project package'}
          </span>
        </div>

        {/* Included Disciplines */}
        {includedServiceNames.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
              Included Disciplines:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {includedServiceNames.map((name, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features / Deliverables */}
        {bundle.features && bundle.features.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-[10px] uppercase font-mono font-bold text-[#ffbe1a] tracking-wider">
              Combined Deliverables:
            </span>
            <ul className="space-y-1.5">
              {bundle.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-white/[0.08] space-y-2">
        <button
          onClick={handleContact}
          className="w-full py-3 px-4 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ffbe1a]/20 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Enquire About Bundle</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Quick WhatsApp Enquiry</span>
        </button>
      </div>
    </div>
  );
};
