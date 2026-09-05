import React from 'react';
import { Layers, Calendar, User, Tag, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { PortfolioItem, ServiceCategory } from '../../types';

interface CaseStudyMetaProps {
  project: PortfolioItem;
  services?: ServiceCategory[];
  onRequestSimilar?: () => void;
  onWhatsApp?: () => void;
}

export const CaseStudyMeta: React.FC<CaseStudyMetaProps> = ({
  project,
  services,
  onRequestSimilar,
  onWhatsApp,
}) => {
  const deliverables = project.services || project.tools || [project.category];

  return (
    <div 
      id="case-study-meta"
      className="p-6 sm:p-7 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-6 shadow-2xl"
    >
      <div className="border-b border-white/[0.08] pb-4">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Project Spec Sheet</span>
        <h3 className="text-xl font-bold font-['Outfit'] text-white">Engagement Details</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Client */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#ffbe1a]" /> Client
          </span>
          <div className="text-sm font-bold text-white font-['Outfit'] truncate">
            {project.client || project.brand || 'Private Client'}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#ffbe1a]" /> Year / Duration
          </span>
          <div className="text-sm font-bold text-white font-['Outfit']">
            {project.year || project.duration || '2025'}
          </div>
        </div>

        {/* Discipline */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#ffbe1a]" /> Discipline
          </span>
          <div className="text-sm font-bold text-white font-['Outfit']">
            {project.category}
          </div>
        </div>

        {/* Industry / Type */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#ffbe1a]" /> Industry
          </span>
          <div className="text-sm font-bold text-white font-['Outfit'] truncate">
            {project.industry || project.projectType || 'Brand Enterprise'}
          </div>
        </div>
      </div>

      {/* Deliverables / Scope Included */}
      {deliverables.length > 0 && (
        <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
          <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffbe1a]" /> Scope & Deliverables
          </span>
          <div className="flex flex-wrap gap-1.5">
            {deliverables.map((deliv, idx) => (
              <span 
                key={idx}
                className="text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-lg"
              >
                {deliv}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons in Sidebar */}
      <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
        {onRequestSimilar && (
          <button
            onClick={onRequestSimilar}
            className="w-full py-3 px-4 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ffbe1a]/15 cursor-pointer"
          >
            <span>Inquire About Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {onWhatsApp && (
          <button
            onClick={onWhatsApp}
            className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </button>
        )}
      </div>
    </div>
  );
};
