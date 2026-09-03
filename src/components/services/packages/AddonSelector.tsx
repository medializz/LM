import React, { useState, useMemo } from 'react';
import { Plus, Check, MessageCircle, ArrowRight, Calculator, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ServicePackage, ServiceAddon, ServiceCategory, SiteSettings } from '../../../types';
import { createPackageWhatsAppUrl } from '../../../utils/whatsapp';
import { navigateTo } from '../../../utils/router';

interface AddonSelectorProps {
  service: ServiceCategory;
  packages: ServicePackage[];
  addOns?: ServiceAddon[];
  siteSettings?: SiteSettings;
  initialPackageId?: string;
  onOpenContact?: (serviceWithAddons: string) => void;
}

export const AddonSelector: React.FC<AddonSelectorProps> = ({
  service,
  packages,
  addOns = [],
  siteSettings,
  initialPackageId,
  onOpenContact
}) => {
  if (!addOns || addOns.length === 0) {
    return null;
  }

  const defaultPkgId = initialPackageId || packages.find((p) => p.recommended)?.id || packages[0]?.id;
  const [selectedPkgId, setSelectedPkgId] = useState<string>(defaultPkgId);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  const selectedPkg = useMemo(
    () => packages.find((p) => p.id === selectedPkgId) || packages[0],
    [packages, selectedPkgId]
  );

  const currency = selectedPkg?.currency || service.currency || '£';

  const selectedAddons = useMemo(
    () => addOns.filter((a) => selectedAddonIds.includes(a.id)),
    [addOns, selectedAddonIds]
  );

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedTotal = useMemo(() => {
    const basePrice = selectedPkg?.price || 0;
    const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
    return basePrice + addonsTotal;
  }, [selectedPkg, selectedAddons]);

  const whatsappUrl = useMemo(() => {
    return createPackageWhatsAppUrl({
      rawPhone: siteSettings?.whatsappNumber,
      siteName: siteSettings?.siteName,
      serviceTitle: service.title,
      packageName: selectedPkg?.name || 'Custom Package',
      duration: selectedPkg?.duration,
      selectedAddons: selectedAddons.map((a) => a.name),
      estimatedTotal: `${currency}${calculatedTotal.toLocaleString()}`
    });
  }, [service, selectedPkg, selectedAddons, siteSettings, calculatedTotal, currency]);

  const handleWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactForm = () => {
    const addonNames = selectedAddons.map((a) => a.name).join(', ');
    const customSummary = `${service.title} - ${selectedPkg?.name || 'Custom Package'}${
      addonNames ? ` with Add-ons: [${addonNames}]` : ''
    } (Estimated: £${calculatedTotal})`;

    if (onOpenContact) {
      onOpenContact(customSummary);
    } else {
      navigateTo(`/contact?service=${encodeURIComponent(service.slug)}&package=${encodeURIComponent(selectedPkg?.id || '')}`);
    }
  };

  return (
    <section id="build-your-package" className="rounded-3xl bg-[#10131d] border border-white/[0.08] p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ffbe1a] uppercase">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-black font-['Outfit'] text-white">
            Build Your Tailored Scope
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Select a baseline tier and combine optional add-ons to customize deliverables to your exact specifications.
          </p>
        </div>

        {/* Tier Selector Chips */}
        <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/[0.08]">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPkgId(pkg.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedPkgId === pkg.id
                  ? 'bg-[#ffbe1a] text-black shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left Column (Add-ons List) & Right Column (Dynamic Calculation Summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Add-ons List */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400">
            Available Modular Add-ons:
          </span>

          <div className="space-y-2.5">
            {addOns.map((addon) => {
              const isChecked = selectedAddonIds.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleAddon(addon.id);
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isChecked
                      ? 'bg-[#ffbe1a]/10 border-[#ffbe1a]/60 shadow-[0_0_15px_rgba(255,190,26,0.1)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-[#ffbe1a] text-black'
                          : 'border border-white/20 bg-transparent'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white font-['Outfit']">
                        {addon.name}
                      </h4>
                      {addon.description && (
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {addon.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold font-mono text-[#ffbe1a]">
                      +{addon.currency || '£'}{addon.price.toLocaleString()}
                    </span>
                    {addon.unit && (
                      <span className="block text-[10px] font-mono text-slate-500">
                        / {addon.unit}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Dynamic Summary Card */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="rounded-2xl bg-black/50 border border-white/[0.1] p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                Live Configuration
              </span>
              <span className="text-xs font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-2 py-0.5 rounded border border-[#ffbe1a]/20">
                {selectedPkg?.duration ? `${selectedPkg.duration}` : 'Project Scope'}
              </span>
            </div>

            {/* Base Tier Line Item */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300 font-medium">Base: {selectedPkg?.name}</span>
                <span className="font-mono text-white font-bold">
                  £{selectedPkg?.price.toLocaleString()}
                </span>
              </div>

              {/* Selected Add-ons Line Items */}
              {selectedAddons.length > 0 ? (
                <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Selected Add-ons ({selectedAddons.length}):</span>
                  {selectedAddons.map((addon) => (
                    <div key={addon.id} className="flex items-center justify-between text-xs text-slate-300 pl-2">
                      <span className="truncate pr-2">• {addon.name}</span>
                      <span className="font-mono text-[#ffbe1a] shrink-0">+£{addon.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-mono italic pt-1">
                  No additional add-ons selected.
                </p>
              )}
            </div>

            {/* Total Calculation Row */}
            <div className="pt-4 border-t border-white/[0.08] space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono uppercase font-bold text-slate-400">Estimated Total:</span>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
                    £{calculatedTotal.toLocaleString()}
                  </span>
                  {selectedPkg?.duration && (
                    <span className="text-xs font-mono text-slate-400 block">
                      / {selectedPkg.duration}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">
                *Subject to brief review. Transparent quotation guaranteed.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ffbe1a]/20 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Enquire Config on WhatsApp</span>
              </button>

              <button
                onClick={handleContactForm}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Specification via Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
