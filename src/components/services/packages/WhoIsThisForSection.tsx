import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { ServicePackage } from '../../../types';

interface WhoIsThisForSectionProps {
  whoIsThisFor?: {
    starter?: string;
    professional?: string;
    premium?: string;
  };
  packages?: ServicePackage[];
}

export const WhoIsThisForSection: React.FC<WhoIsThisForSectionProps> = ({
  whoIsThisFor,
  packages = []
}) => {
  if (!whoIsThisFor) {
    return null;
  }

  const starterPkg = packages.find((p) => p.id === 'starter');
  const proPkg = packages.find((p) => p.id === 'professional');
  const premiumPkg = packages.find((p) => p.id === 'premium');

  const cards = [
    {
      tierId: 'starter',
      title: starterPkg?.name || 'Starter Tier',
      price: starterPkg?.pricingLabel || (starterPkg?.price ? `From £${starterPkg.price}` : ''),
      desc: whoIsThisFor.starter,
      badge: 'Best For New Ventures'
    },
    {
      tierId: 'professional',
      title: proPkg?.name || 'Professional Tier',
      price: proPkg?.pricingLabel || (proPkg?.price ? `From £${proPkg.price}` : ''),
      desc: whoIsThisFor.professional,
      badge: 'Best For Scaling Brands',
      isPro: true
    },
    {
      tierId: 'premium',
      title: premiumPkg?.name || 'Premium Tier',
      price: premiumPkg?.pricingLabel || (premiumPkg?.price ? `From £${premiumPkg.price}` : ''),
      desc: whoIsThisFor.premium,
      badge: 'Best For Market Leaders'
    }
  ].filter((c) => Boolean(c.desc));

  if (cards.length === 0) {
    return null;
  }

  return (
    <section id="who-is-this-for-section" className="space-y-6 pt-4">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ffbe1a] uppercase">
          <Target className="w-3.5 h-3.5" />
          <span>Decision Guide</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
          Which Package Is Right For You?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Match your current operational stage and growth targets with the right creative investment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.tierId}
            className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-4 transition-all ${
              card.isPro
                ? 'bg-gradient-to-b from-[#181c28] to-[#10131d] border-[#ffbe1a]/50 shadow-lg'
                : 'bg-[#10131d] border-white/[0.08]'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 px-2.5 py-0.5 rounded-full border border-[#ffbe1a]/20">
                  {card.badge}
                </span>
                {card.price && (
                  <span className="text-xs font-mono text-slate-400">
                    {card.price}
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold font-['Outfit'] text-white">
                {card.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#ffbe1a] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Tailored deliverables & dedicated creative lead</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
