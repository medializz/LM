import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, CheckCircle2, Award, Users } from 'lucide-react';
import { AboutContent, SiteSettings } from '../../types';

interface AboutStoryProps {
  content?: AboutContent;
  siteSettings?: SiteSettings;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ content, siteSettings }) => {
  const storyTitle = content?.storyTitle || "Built on Strategy, Craft & Speed in Cardiff, Wales";
  const storyDescription = content?.storyDescription || "Founded with a relentless dedication to craftsmanship in Cardiff, South Wales, Lizzdo Media bridges the gap between high-level brand strategy and agile production execution.";
  
  const defaultParagraphs = [
    "Founded with a relentless dedication to craftsmanship in Cardiff, South Wales, Lizzdo Media was created to challenge agency stagnation. For years, ambitious brands were forced to choose between slow, bureaucratic corporate agencies with inflated overheads, or fragmented freelancers lacking technical infrastructure.",
    "We assembled a cohesive, multidisciplinary team of brand directors, mathematical vector designers, full-stack software engineers, and growth strategists under one roof. By operating as an integrated creative studio, we translate foundational strategy directly into finished, production-grade assets without loss of fidelity.",
    "Today, we partner with category-defining companies across Cardiff, throughout South Wales, across the United Kingdom, and internationally. Whether crafting tactile packaging finishes or engineering sub-100ms web applications, we focus on compounding commercial value."
  ];

  const paragraphs = content?.storyParagraphs && content.storyParagraphs.length > 0 
    ? content.storyParagraphs 
    : defaultParagraphs;

  return (
    <section 
      id="our-story"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#07090e] overflow-hidden"
      aria-label="Our Story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>OUR STORY & HERITAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
          >
            {storyTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            {storyDescription}
          </motion.p>
        </div>

        {/* Visual Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Narrative Paragraphs (Divided into digestible narrative blocks) */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((p, idx) => (
              <motion.div
                key={`story-p-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative pl-6 border-l-2 border-[#ffbe1a]/30 space-y-1"
              >
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#07090e] border-2 border-[#ffbe1a] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a]" />
                </span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              </motion.div>
            ))}

            {/* Quick Proof Points */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <MapPin className="w-5 h-5 text-[#ffbe1a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Cardiff Creative Studio</h4>
                  <p className="text-xs text-slate-400 mt-1">Grounded in Welsh design heritage, serving businesses across the UK and worldwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Award className="w-5 h-5 text-[#ffbe1a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Bespoke Vector & Code</h4>
                  <p className="text-xs text-slate-400 mt-1">100% original identity systems, print dielines, and clean headless code.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Rich Visual Showcase Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl bg-gradient-to-br from-[#121622] via-[#0d101a] to-[#07090e] border border-white/[0.1] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">Operational Studio Status</span>
                </div>
                <span className="text-xs font-mono text-[#ffbe1a] font-bold">Active Sprint</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-['Outfit'] text-white">
                  Why Our Agency Model Succeeds
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Traditional agencies divide work into isolated silos: strategy writes a brief, design interprets it, and engineers struggle to build it. At Lizzdo Media, our designers and developers work in continuous collaboration from day one.
                </p>
              </div>

              {/* Pillars list */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                  <span>Direct contact with senior creative directors (no middlemen)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                  <span>Transparent fixed-price tiers or tailored enterprise scopes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                  <span>100% intellectual property ownership upon completion</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                  <span>Decap CMS integration for zero-developer content management</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Studio Location</span>
                <span className="text-white font-bold">Cardiff, South Wales, UK</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
