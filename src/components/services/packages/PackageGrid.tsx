import React from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { ServicePackage, ServiceCategory, SiteSettings } from '../../../types';
import { PackageCard } from './PackageCard';

interface PackageGridProps {
  service: ServiceCategory;
  packages: ServicePackage[];
  siteSettings?: SiteSettings;
  selectedPackageId?: string;
  onSelectPackage?: (pkg: ServicePackage) => void;
  onRequestInquiry?: (pkg: ServicePackage) => void;
}

export const PackageGrid: React.FC<PackageGridProps> = ({
  service,
  packages,
  siteSettings,
  selectedPackageId,
  onSelectPackage,
  onRequestInquiry
}) => {
  if (!packages || packages.length === 0) {
    return null;
  }

  // Sort packages by sortOrder if available
  const sortedPackages = [...packages].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

  return (
    <section id="service-packages-section" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Productized Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Outfit'] text-white tracking-tight">
            Transparent Investment & Scope
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the package that aligns with your brand's growth velocity. Every tier is delivered with full master source files and zero hidden charges.
          </p>
        </div>

        {/* Agency Trust Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffbe1a]" />
            <span>No Locked Contracts</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#ffbe1a]" />
            <span>Cardiff & UK Studio</span>
          </div>
        </div>
      </div>

      {/* 3-Column Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-2">
        {sortedPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            service={service}
            siteSettings={siteSettings}
            isSelected={selectedPackageId === pkg.id}
            onSelect={onSelectPackage}
            onRequestInquiry={onRequestInquiry}
          />
        ))}
      </div>
    </section>
  );
};
