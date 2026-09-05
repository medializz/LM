import React from 'react';
import { CheckCircle2, FileCheck, Layers } from 'lucide-react';
import { ServiceCategory } from '../../types';

interface ServiceDeliverablesProps {
  service: ServiceCategory;
}

export const ServiceDeliverables: React.FC<ServiceDeliverablesProps> = ({ service }) => {
  const deliverables = service.deliverables && service.deliverables.length > 0
    ? service.deliverables
    : service.capabilities && service.capabilities.length > 0
    ? service.capabilities
    : [
        'Master Vector Source Files (.AI, .EPS, .SVG)',
        'High-Resolution Print Files (CMYK, 300+ DPI)',
        'Optimized Digital Display Assets (.PNG, .WebP)',
        'Comprehensive Guidelines & Specification Manual'
      ];

  return (
    <section 
      id="service-deliverables" 
      className="space-y-6"
      aria-label={`${service.title} Tangible Deliverables`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Deliverables & Scope
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Tangible Assets You Receive
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Every project handoff is production-ready, thoroughly inspected, and backed by complete commercial copyright.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-3 py-1.5 rounded-lg border border-[#ffbe1a]/30 shrink-0">
          <FileCheck className="w-4 h-4" />
          <span>Full Commercial Copyright</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {deliverables.map((item, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 transition-all flex items-start gap-3.5 shadow-md group"
          >
            <div className="w-7 h-7 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-colors">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors block font-['Outfit']">
                {item}
              </span>
              <span className="text-[11px] text-slate-400 font-mono block">
                Production Tested • Master Spec
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
