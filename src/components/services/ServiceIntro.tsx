import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceCategory } from '../../types';

interface ServiceIntroProps {
  service: ServiceCategory;
}

export const ServiceIntro: React.FC<ServiceIntroProps> = ({ service }) => {
  const capabilities = service.capabilities && service.capabilities.length > 0
    ? service.capabilities
    : [
        'Strategic Creative Direction & Persona Audit',
        'Bespoke Visual Vector Craftsmanship',
        'Multi-Medium File Specifications & Handoff',
        'Comprehensive Usage & Hierarchy Rules'
      ];

  return (
    <section 
      id="service-overview" 
      className="space-y-6"
      aria-label={`About ${service.title}`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            What We Deliver in {service.title}
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Precision design tailored specifically to elevate your commercial perception and market authority.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 shrink-0">
          {capabilities.length} Specialisms
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((item, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-3.5 group shadow-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white group-hover:text-[#ffbe1a] transition-colors font-['Outfit']">
                {item}
              </h3>
              <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] leading-relaxed">
                Engineered with mathematical precision and aligned to your target audience.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
