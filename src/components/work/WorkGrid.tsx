import React from 'react';
import { PortfolioItem } from '../../types';
import { WorkCard } from './WorkCard';
import { Sparkles } from 'lucide-react';

interface WorkGridProps {
  items: PortfolioItem[];
  onNavigate: (href: string) => void;
  featuredSlug?: string;
}

export const WorkGrid: React.FC<WorkGridProps> = ({
  items,
  onNavigate,
  featuredSlug,
}) => {
  if (!items || items.length === 0) {
    return (
      <div className="py-20 text-center rounded-3xl bg-[#10131d] border border-white/[0.08] p-8 space-y-4">
        <Sparkles className="w-8 h-8 text-[#ffbe1a] mx-auto opacity-80" />
        <h3 className="text-xl font-bold font-['Outfit'] text-white">No Case Studies Found</h3>
        <p className="text-sm text-slate-400 font-['Plus_Jakarta_Sans'] max-w-md mx-auto">
          We are regularly updating our archives. Select another category or browse all client transformations.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, idx) => (
        <WorkCard
          key={item.id}
          item={item}
          onNavigate={onNavigate}
          featured={item.slug === featuredSlug || (idx === 0 && item.featured)}
        />
      ))}
    </div>
  );
};
