import React, { useState } from 'react';
import { Check, Minus, Layers, Sparkles } from 'lucide-react';
import { ServiceComparisonRow, ServicePackage } from '../../../types';

interface PackageComparisonTableProps {
  comparisonRows?: ServiceComparisonRow[];
  packages?: ServicePackage[];
}

export const PackageComparisonTable: React.FC<PackageComparisonTableProps> = ({
  comparisonRows = [],
  packages = []
}) => {
  const [activeMobileTab, setActiveMobileTab] = useState<'starter' | 'professional' | 'premium'>('professional');

  if (!comparisonRows || comparisonRows.length === 0) {
    return null;
  }

  // Group rows by category if available, otherwise flat
  const categories = Array.from(new Set(comparisonRows.map((r) => r.category || 'Features & Scope')));

  const renderCellContent = (value: string, isHighlighted: boolean = false) => {
    const trimmed = (value || '').trim();
    const lower = trimmed.toLowerCase();

    if (lower === 'yes' || lower === 'true' || lower === 'included') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ffbe1a]/15 text-[#ffbe1a]">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </span>
      );
    }

    if (lower === 'no' || lower === 'false' || lower === '-' || lower === 'none' || lower === 'n/a') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.04] text-slate-500">
          <Minus className="w-3 h-3" />
        </span>
      );
    }

    return (
      <span
        className={`text-xs sm:text-sm font-medium ${
          isHighlighted ? 'text-white font-semibold' : 'text-slate-300'
        }`}
      >
        {trimmed}
      </span>
    );
  };

  const starterPkg = packages.find((p) => p.id === 'starter');
  const proPkg = packages.find((p) => p.id === 'professional');
  const premiumPkg = packages.find((p) => p.id === 'premium');

  return (
    <section id="package-comparison-section" className="space-y-6 pt-4">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ffbe1a] uppercase">
          <Layers className="w-3.5 h-3.5" />
          <span>Side-by-Side Matrix</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
          Detailed Package Comparison
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          A comprehensive breakdown of deliverables, technical provisions, and turnaround commitments across all tiers.
        </p>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex rounded-2xl bg-black/40 p-1 border border-white/[0.08]">
        <button
          onClick={() => setActiveMobileTab('starter')}
          className={`flex-1 py-2 text-xs font-mono font-bold rounded-xl transition-all ${
            activeMobileTab === 'starter' ? 'bg-white/[0.1] text-white' : 'text-slate-400'
          }`}
        >
          Starter
        </button>
        <button
          onClick={() => setActiveMobileTab('professional')}
          className={`flex-1 py-2 text-xs font-mono font-bold rounded-xl transition-all ${
            activeMobileTab === 'professional' ? 'bg-[#ffbe1a] text-black shadow' : 'text-slate-400'
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveMobileTab('premium')}
          className={`flex-1 py-2 text-xs font-mono font-bold rounded-xl transition-all ${
            activeMobileTab === 'premium' ? 'bg-white/[0.1] text-white' : 'text-slate-400'
          }`}
        >
          Premium
        </button>
      </div>

      {/* Desktop Comparison Table */}
      <div className="hidden md:block rounded-3xl bg-[#10131d] border border-white/[0.08] overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.08] bg-black/40">
              <th className="p-6 text-sm font-mono uppercase tracking-wider text-slate-400 w-2/5">
                Feature / Deliverable
              </th>
              <th className="p-6 text-center w-1/5">
                <div className="space-y-1">
                  <span className="text-base font-bold text-white font-['Outfit'] block">
                    {starterPkg?.name || 'Starter'}
                  </span>
                  <span className="text-xs font-mono text-[#ffbe1a] font-semibold">
                    {starterPkg?.pricingLabel || (starterPkg?.price ? `From £${starterPkg.price}` : 'Entry Tier')}
                  </span>
                </div>
              </th>
              <th className="p-6 text-center w-1/5 bg-[#ffbe1a]/[0.06] border-x border-[#ffbe1a]/20 relative">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#ffbe1a] text-black text-[9px] font-mono font-black uppercase px-3 py-0.5 rounded-b-md">
                  Recommended
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-base font-bold text-white font-['Outfit'] block">
                    {proPkg?.name || 'Professional'}
                  </span>
                  <span className="text-xs font-mono text-[#ffbe1a] font-semibold">
                    {proPkg?.pricingLabel || (proPkg?.price ? `From £${proPkg.price}` : 'Growth Tier')}
                  </span>
                </div>
              </th>
              <th className="p-6 text-center w-1/5">
                <div className="space-y-1">
                  <span className="text-base font-bold text-white font-['Outfit'] block">
                    {premiumPkg?.name || 'Premium'}
                  </span>
                  <span className="text-xs font-mono text-[#ffbe1a] font-semibold">
                    {premiumPkg?.pricingLabel || (premiumPkg?.price ? `From £${premiumPkg.price}` : 'Scale Tier')}
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/[0.04]">
            {categories.map((category) => {
              const rowsInCategory = comparisonRows.filter(
                (r) => (r.category || 'Features & Scope') === category
              );

              return (
                <React.Fragment key={category}>
                  {categories.length > 1 && (
                    <tr className="bg-white/[0.02]">
                      <td
                        colSpan={4}
                        className="py-3 px-6 text-xs font-mono font-bold tracking-widest text-[#ffbe1a] uppercase"
                      >
                        {category}
                      </td>
                    </tr>
                  )}

                  {rowsInCategory.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6 text-sm text-slate-200 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCellContent(row.starter, false)}
                      </td>
                      <td className="py-4 px-6 text-center bg-[#ffbe1a]/[0.03] border-x border-[#ffbe1a]/15">
                        {renderCellContent(row.professional, true)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderCellContent(row.premium, false)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Rows */}
      <div className="md:hidden space-y-3">
        {comparisonRows.map((row, idx) => {
          const value = row[activeMobileTab] || '-';
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] flex items-center justify-between gap-4"
            >
              <div className="space-y-0.5">
                {row.category && (
                  <span className="text-[10px] font-mono uppercase text-[#ffbe1a] tracking-wider block">
                    {row.category}
                  </span>
                )}
                <span className="text-xs font-medium text-white block">
                  {row.feature}
                </span>
              </div>
              <div className="shrink-0 text-right">
                {renderCellContent(value, activeMobileTab === 'professional')}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
