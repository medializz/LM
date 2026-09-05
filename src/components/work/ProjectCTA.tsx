import React from 'react';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface ProjectCTAProps {
  project: PortfolioItem;
  onStartProject: () => void;
  onWhatsApp: () => void;
  onContactForm: () => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({
  project,
  onStartProject,
  onWhatsApp,
  onContactForm,
}) => {
  return (
    <section 
      id="project-inquiry-cta"
      aria-label="Initiate Creative Inquiry"
      className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ffbe1a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
          Ready for Your Transformation?
        </span>
        <h2 className="text-2xl sm:text-4xl font-['Outfit'] font-black text-white tracking-tight leading-tight">
          Let's Engineer a Results-Driven Identity for Your Brand.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-['Plus_Jakarta_Sans'] leading-relaxed max-w-xl mx-auto">
          Every project begins with a focused consultation with our creative directors in Cardiff. No sales reps, no fluff—just disciplined design strategy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <button
            id="project-cta-start-btn"
            onClick={onStartProject}
            className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="project-cta-whatsapp-btn"
            onClick={onWhatsApp}
            className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-base font-['Outfit'] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Direct</span>
          </button>

          <button
            id="project-cta-contact-btn"
            onClick={onContactForm}
            className="px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 font-medium text-base font-['Outfit'] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Form</span>
          </button>
        </div>
      </div>
    </section>
  );
};
