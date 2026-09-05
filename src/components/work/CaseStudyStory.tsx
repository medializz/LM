import React from 'react';
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface CaseStudyStoryProps {
  project: PortfolioItem;
}

export const CaseStudyStory: React.FC<CaseStudyStoryProps> = ({ project }) => {
  const challenge = project.challenge || 
    `The client required a distinctive, mathematically balanced visual identity to cut through saturated market noise and project immediate authority to high-value partners.`;

  const solution = project.solution || project.approach || project.strategy ||
    `Lizzdo engineered a bespoke design system rooted in timeless vector harmony, disciplined typography scales, and a versatile asset suite configured across digital and physical touchpoints.`;

  const outcome = project.result || project.results || 
    `The repositioning established distinct commercial differentiation, accelerating client trust, media visibility, and measurable stakeholder engagement.`;

  return (
    <section 
      id="case-study-narrative" 
      className="space-y-8"
      aria-label="Case Study Narrative"
    >
      <div className="border-b border-white/[0.08] pb-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
          Strategic Execution
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
          Challenge, Strategy & Impact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* The Challenge */}
        <div className="p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3 hover:border-white/20 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffbe1a]">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-['Outfit'] text-white">The Challenge</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
            {challenge}
          </p>
        </div>

        {/* The Solution */}
        <div className="p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3 hover:border-[#ffbe1a]/50 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a]">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-['Outfit'] text-white">The Creative Solution</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
            {solution}
          </p>
        </div>

        {/* The Impact */}
        <div className="p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3 hover:border-emerald-500/50 transition-all shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-['Outfit'] text-white">Commercial Outcome</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
            {outcome}
          </p>
          {(project.result || project.results) && (
            <div className="pt-2 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Delivery</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
