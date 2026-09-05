import React from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PortfolioItem, ServiceCategory } from '../../types';

interface ServiceRelatedWorkProps {
  service: ServiceCategory;
  relatedProjects: PortfolioItem[];
  onNavigate: (href: string) => void;
}

export const ServiceRelatedWork: React.FC<ServiceRelatedWorkProps> = ({
  service,
  relatedProjects,
  onNavigate,
}) => {
  if (!relatedProjects || relatedProjects.length === 0) {
    return null;
  }

  return (
    <section 
      id="service-related-work" 
      className="space-y-6 pt-4 border-t border-white/[0.08]"
      aria-label={`Selected ${service.title} Case Studies`}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Selected Work in {service.title}
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Real client transformations delivered with creative precision and commercial return.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/work')}
          className="text-xs font-mono text-[#ffbe1a] hover:underline flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <span>Explore All Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProjects.slice(0, 3).map((item) => (
          <div
            key={item.id}
            id={`related-project-${item.slug || item.id}`}
            onClick={() => onNavigate(`/work/${item.slug || item.id}`)}
            className="group rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 overflow-hidden shadow-xl hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Header Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#07090e]/90 px-2.5 py-1 rounded-md border border-[#ffbe1a]/30 shadow backdrop-blur-md">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{item.client || 'Client Project'}</span>
                <span className="text-[#ffbe1a] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
