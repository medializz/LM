import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, CheckCircle, Sparkles, TrendingUp, ShieldCheck, Compass } from 'lucide-react';
import { AboutContent } from '../../types';

interface AboutMissionVisionProps {
  content?: AboutContent;
}

export const AboutMissionVision: React.FC<AboutMissionVisionProps> = ({ content }) => {
  const missionTitle = content?.missionTitle || "Our Mission";
  const missionDescription = content?.missionDescription || "To empower ambitious businesses with uncompromising design craft and high-performance digital engineering that turn casual visitors into loyal brand advocates.";
  
  const defaultMissionPoints = [
    "Uncompromising design craft with mathematical balance and optical alignment",
    "High-speed, conversion-focused digital engineering built for sub-100ms load times",
    "Data-backed strategic positioning that commands premium market pricing"
  ];
  const missionPoints = content?.missionPoints && content.missionPoints.length > 0 
    ? content.missionPoints 
    : defaultMissionPoints;

  const visionTitle = content?.visionTitle || "Our Vision";
  const visionDescription = content?.visionDescription || "To set the standard for modern brand design systems, packaging dielines, and web performance where mathematical precision meets pure creative expression.";
  
  const defaultVisionPoints = [
    "Establishing globally enduring visual identities that scale across print and digital",
    "Pioneering tactile packaging finishes that disrupt retail shelves and unboxing experiences",
    "Fostering long-term strategic partnerships that yield compounding business growth"
  ];
  const visionPoints = content?.visionPoints && content.visionPoints.length > 0 
    ? content.visionPoints 
    : defaultVisionPoints;

  return (
    <section 
      id="mission-and-vision"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#090c14] overflow-hidden"
      aria-label="Our Mission and Vision"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>PURPOSE & DIRECTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
          >
            Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            The dual compass driving our day-to-day studio craft and our long-term client engagements.
          </motion.p>
        </div>

        {/* Distinct 2-Card Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARD 1: DEDICATED MISSION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative rounded-2xl bg-[#0f121d] border border-white/[0.08] hover:border-[#ffbe1a]/40 p-7 sm:p-10 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] shadow-inner group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#ffbe1a] uppercase tracking-widest bg-[#ffbe1a]/10 px-3 py-1 rounded-full border border-[#ffbe1a]/20">
                  What We Do Daily
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white tracking-tight">
                  {missionTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {missionDescription}
                </p>
              </div>

              {/* Supporting Pillars */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Core Execution Commitments:
                </span>
                {missionPoints.map((pt, idx) => (
                  <div key={`m-pt-${idx}`} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Execution Focus</span>
              <span className="text-white font-semibold">Immediate Commercial Impact</span>
            </div>
          </motion.div>

          {/* CARD 2: DEDICATED VISION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative rounded-2xl bg-gradient-to-br from-[#101422] to-[#0d101a] border border-white/[0.08] hover:border-blue-500/40 p-7 sm:p-10 transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  Where We Are Heading
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white tracking-tight">
                  {visionTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {visionDescription}
                </p>
              </div>

              {/* Supporting Pillars */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Future-Facing Objectives:
                </span>
                {visionPoints.map((pt, idx) => (
                  <div key={`v-pt-${idx}`} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <TrendingUp className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Strategic Horizon</span>
              <span className="text-white font-semibold">Decade-Long Brand Authority</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
