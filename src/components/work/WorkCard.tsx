import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface WorkCardProps {
  item: PortfolioItem;
  onNavigate: (href: string) => void;
  featured?: boolean;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  item,
  onNavigate,
  featured = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/work/${item.slug || item.id}`);
  };

  return (
    <div
      id={`work-card-${item.slug || item.id}`}
      onClick={handleClick}
      role="article"
      aria-label={`${item.title} Case Study`}
      className={`group relative rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* High-Resolution Visual Aspect Ratio */}
      <div className={`relative w-full overflow-hidden bg-black/60 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges Row */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#07090e]/90 px-2.5 py-1 rounded-md border border-[#ffbe1a]/30 shadow backdrop-blur-md font-bold">
            {item.category}
          </span>

          {(item.result || item.results) ? (
            <span className="text-[10px] font-mono text-emerald-400 bg-black/80 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1 shadow backdrop-blur-md max-w-[140px] truncate">
              <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{item.result || item.results}</span>
            </span>
          ) : item.featured ? (
            <span className="text-[10px] font-mono text-[#ffbe1a] bg-black/80 px-2 py-1 rounded-md border border-[#ffbe1a]/30 flex items-center gap-1 shadow backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#ffbe1a]" />
              Featured
            </span>
          ) : null}
        </div>
      </div>

      {/* Content Meta */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>{item.client || item.brand || 'Client Project'}</span>
            <span>{item.year || '2025'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-tight">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] line-clamp-2 leading-relaxed pt-1">
            {item.description}
          </p>
        </div>

        {/* Deliverables tags */}
        {(item.services || item.tools) && (item.services || item.tools)!.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(item.services || item.tools)!.slice(0, 3).map((deliv, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]"
              >
                {deliv}
              </span>
            ))}
            {(item.services || item.tools)!.length > 3 && (
              <span className="text-[10px] font-mono text-slate-500 py-0.5">
                +{(item.services || item.tools)!.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer CTA */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#ffbe1a] font-semibold">
          <span className="group-hover:underline underline-offset-4">View Full Case Study</span>
          <div className="w-6 h-6 rounded-full bg-white/[0.05] group-hover:bg-[#ffbe1a] flex items-center justify-center text-slate-300 group-hover:text-black transition-all">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
