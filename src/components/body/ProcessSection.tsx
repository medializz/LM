import React from 'react';
import { ProcessStep } from '../../types';
import { WorkflowIcon } from '../visuals/WorkflowIcons';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  const sortedSteps = [...steps].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section 
      id="process" 
      className="relative z-20 py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] overflow-hidden"
      aria-label="Our Creative Process"
    >
      {/* Background purple glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-900/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with split layout matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 font-['Plus_Jakarta_Sans']"
            >
              <span>OUR PROCESS</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white font-['Outfit'] tracking-tight leading-tight"
            >
              Simple Steps, <span className="text-[#ffbe1a] drop-shadow-[0_0_25px_rgba(255,190,26,0.35)]">Powerful Results</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-xs sm:text-sm text-slate-400 font-['Plus_Jakarta_Sans'] max-w-md leading-relaxed md:text-right"
          >
            Our process is designed to deliver clarity, creativity, and results at every stage of your project.
          </motion.p>
        </div>

        {/* DESKTOP / TABLET HORIZONTAL TIMELINE */}
        <div className="hidden md:block relative pb-4">
          
          {/* Horizontal Golden Connecting Line with node checkpoints */}
          <div className="absolute top-[34px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#ffbe1a]/10 via-[#ffbe1a]/60 to-[#ffbe1a]/10 z-0 pointer-events-none" />

          <div className="grid grid-cols-6 gap-3 lg:gap-4 relative z-10">
            {sortedSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Purple Circular Icon Container with golden accent touch */}
                <div className="relative mb-4">
                  <div className="w-[68px] h-[68px] rounded-full bg-[#120f1e] border-2 border-purple-500/40 group-hover:border-[#ffbe1a] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_25px_rgba(255,190,26,0.35)] transition-all duration-300 group-hover:scale-110">
                    <WorkflowIcon 
                      name={step.iconKey} 
                      stepNumber={step.stepNumber}
                      id={step.id}
                      size={28} 
                      className="text-purple-300 group-hover:text-[#ffbe1a] transition-colors duration-300"
                    />
                  </div>

                  {/* Tiny gold dot on the connecting line */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ffbe1a] shadow-[0_0_8px_#ffbe1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Step Number & Title */}
                <h3 className="text-sm font-bold text-white font-['Outfit'] mb-1.5 group-hover:text-[#ffbe1a] transition-colors">
                  <span className="text-[#ffbe1a] mr-1">{step.stepNumber}.</span> {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[11.5px] text-slate-400 group-hover:text-slate-300 font-['Plus_Jakarta_Sans'] leading-snug px-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="md:hidden relative pl-6 space-y-6">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#ffbe1a] via-[#ffbe1a]/50 to-purple-500/30 z-0" />

          {sortedSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative flex items-start gap-3.5 z-10"
            >
              {/* Purple Circle */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#120f1e] border-2 border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                <WorkflowIcon 
                  name={step.iconKey} 
                  stepNumber={step.stepNumber}
                  id={step.id}
                  size={22} 
                  className="text-purple-300" 
                />
              </div>

              {/* Text Container */}
              <div className="flex-1 bg-[#10121a] border border-white/[0.08] rounded-xl p-3.5 shadow-md">
                <h3 className="text-sm font-bold text-white font-['Outfit'] mb-1">
                  <span className="text-[#ffbe1a] mr-1">{step.stepNumber}.</span> {step.title}
                </h3>
                <p className="text-xs text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
