import React from 'react';
import { ServiceCategory } from '../../types';
import { WorkflowIcon } from '../visuals/WorkflowIcons';

interface ServiceProcessProps {
  service: ServiceCategory;
}

const DEFAULT_PROCESS_STEPS = [
  {
    stepNumber: '01',
    title: 'Discovery & Research',
    description: 'Deep audit of your brand positioning, target audience demographics, competitive landscape, and strategic objectives.'
  },
  {
    stepNumber: '02',
    title: 'Strategy & Conceptualization',
    description: 'Establishing creative moodboards, architectural parameters, and high-level visual directions aligned with your commercial goals.'
  },
  {
    stepNumber: '03',
    title: 'Design & Prototyping',
    description: 'Iterative craftsmanship, mathematical vector construction, color harmonization, and realistic contextual mockups.'
  },
  {
    stepNumber: '04',
    title: 'Engineering & Production',
    description: 'Developing high-fidelity production files, digital code assets, dieline specifications, and responsive layouts.'
  },
  {
    stepNumber: '05',
    title: 'Refinement & Testing',
    description: 'Rigorous cross-medium quality audits, color calibration, accessibility compliance, and stakeholder feedback refinement.'
  },
  {
    stepNumber: '06',
    title: 'Launch & Deployment',
    description: 'Packaging complete source vectors, master guidelines manuals, and live production deployment with full commercial ownership.'
  }
];

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ service }) => {
  // Use CMS processSteps if available and matching 6 steps, or use default agency pipeline
  const steps = service.processSteps && service.processSteps.length >= 4
    ? service.processSteps
    : DEFAULT_PROCESS_STEPS;

  return (
    <section 
      id="service-process" 
      className="space-y-8"
      aria-label="Our 6-Phase Creative Pipeline"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Workflow & Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Our 6-Phase Creative Pipeline
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Structured for transparency, rigorous craft, and predictable delivery without scope ambiguity.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 shrink-0">
          6 Iterative Milestones
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const stepNum = step.stepNumber || `0${idx + 1}`;
          return (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all space-y-4 group shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-colors">
                    <WorkflowIcon stepNumber={String(idx + 1)} size={22} className="currentColor" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">Phase</span>
                    <span className="text-2xl font-black font-['Outfit'] text-[#ffbe1a]/60 group-hover:text-[#ffbe1a] transition-colors">
                      {stepNum}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a]/60" />
                <span>Client Review Gate</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
