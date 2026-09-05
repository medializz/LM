import React from 'react';
import { Sparkles } from 'lucide-react';

interface WorkFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  totalCount: number;
}

export const WorkFilters: React.FC<WorkFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b border-white/[0.08]">
      {/* Category Pills */}
      <div 
        role="tablist"
        aria-label="Filter case studies by discipline"
        className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-none"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#ffbe1a] text-black font-bold shadow-lg shadow-[#ffbe1a]/20 scale-105'
                  : 'bg-[#10131d] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Result Count Indicator */}
      <div className="text-xs font-mono text-slate-400 shrink-0 hidden md:block">
        Showing <span className="text-white font-bold">{totalCount}</span> Case Studies
      </div>
    </div>
  );
};
