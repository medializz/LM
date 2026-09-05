import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../../types';
import { WorkCard } from './WorkCard';

interface RelatedProjectsProps {
  projects: PortfolioItem[];
  onNavigate: (href: string) => void;
  currentSlug?: string;
}

export const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  projects,
  onNavigate,
  currentSlug,
}) => {
  const filtered = projects.filter(p => p.slug !== currentSlug && p.id !== currentSlug).slice(0, 3);

  if (filtered.length === 0) {
    return null;
  }

  return (
    <section 
      id="related-case-studies" 
      className="space-y-6 pt-6 border-t border-white/[0.08]"
      aria-label="More Case Studies"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Explore More Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
            Related Client Transformations
          </h2>
        </div>

        <button
          onClick={() => onNavigate('/work')}
          className="text-xs font-mono text-[#ffbe1a] hover:underline flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <span>View Full Archive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <WorkCard key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
};
