import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowUpRight, Compass, ShieldCheck, Zap } from 'lucide-react';
import { AboutContent, SiteSettings } from '../../types';
import { LizzdoLogo } from '../LizzdoLogo';
import { navigateTo } from '../../utils/router';

interface AboutHeroProps {
  content?: AboutContent;
  siteSettings?: SiteSettings;
  onOpenContact?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  content,
  siteSettings,
  onOpenContact
}) => {
  const eyebrowText = content?.eyebrow || "AGENCY OVERVIEW & PHILOSOPHY";
  const siteName = siteSettings?.siteName || "Lizzdo Media";

  return (
    <section 
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 border-b border-white/[0.08] bg-gradient-to-b from-[#07090e] via-[#0b0e17] to-[#07090e] overflow-hidden"
      aria-label="About Lizzdo Media Hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
          >
            <LizzdoLogo 
              variant="mark-only" 
              size="xxs" 
              theme="gold" 
              logoSrc={siteSettings?.logo || siteSettings?.logoLight} 
              markSrc={siteSettings?.logoMark} 
            />
            <span>{eyebrowText}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cardiff, South Wales • UK & Worldwide</span>
          </motion.div>
        </div>

        {/* Main Grid: Headline & Supporting Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Agency Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-3"
            >
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#ffbe1a] font-semibold">
                {siteName}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.1]">
                Creative design, digital experiences and marketing that help brands{' '}
                <span className="text-[#ffbe1a] underline decoration-[#ffbe1a]/30 underline-offset-8">
                  stand out.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {content?.introDescription || "Based in Cardiff, South Wales, Lizzdo Media is an integrated creative and digital studio. We unite brand identity design, structural packaging, high-speed web engineering, and result-driven marketing for ambitious businesses seeking category leadership."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    navigateTo('/contact');
                  }
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ffbe1a] text-black font-bold text-sm sm:text-base font-['Outfit'] hover:bg-amber-400 transition-all shadow-lg hover:shadow-[#ffbe1a]/20 cursor-pointer active:scale-95"
              >
                <span>{content?.ctaButtonText || "Start a Project"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/work');
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] hover:border-white/[0.2] font-semibold text-sm sm:text-base font-['Outfit'] transition-all"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Studio Key Attributes Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 pt-4 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <div className="flex items-center gap-1.5 text-[#ffbe1a] text-xs font-mono font-bold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Strategy</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Data-backed brand positioning</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <div className="flex items-center gap-1.5 text-[#ffbe1a] text-xs font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Craft</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Pixel-perfect vector fidelity</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <div className="flex items-center gap-1.5 text-[#ffbe1a] text-xs font-mono font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Speed</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Sub-100ms web engineering</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Sleek Agency Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl bg-gradient-to-br from-[#121622] via-[#0d101a] to-[#080a10] border border-white/[0.1] p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/60 to-transparent" />

              <div className="space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white font-['Outfit']">Creative & Digital Studio</h2>
                      <p className="text-xs text-slate-400 font-mono">Founded & based in Cardiff, Wales</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-2 py-0.5 rounded border border-[#ffbe1a]/30">
                    2026 Edition
                  </span>
                </div>

                {/* Visual Disciplines Matrix */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-[#ffbe1a]/30 transition-colors">
                    <span className="text-xs text-slate-200 font-medium">Brand Identity & Visual Systems</span>
                    <span className="text-[11px] font-mono text-[#ffbe1a]">01 // Identity</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-[#ffbe1a]/30 transition-colors">
                    <span className="text-xs text-slate-200 font-medium">Packaging Systems & Dieline Craft</span>
                    <span className="text-[11px] font-mono text-[#ffbe1a]">02 // Packaging</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-[#ffbe1a]/30 transition-colors">
                    <span className="text-xs text-slate-200 font-medium">Full-Stack Web & Performance</span>
                    <span className="text-[11px] font-mono text-[#ffbe1a]">03 // Digital</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-[#ffbe1a]/30 transition-colors">
                    <span className="text-xs text-slate-200 font-medium">Omni-Channel Marketing & Creatives</span>
                    <span className="text-[11px] font-mono text-[#ffbe1a]">04 // Growth</span>
                  </div>
                </div>

                {/* Studio Bottom Guarantee */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Client Inquiries Reviewed</span>
                  <span className="text-emerald-400 font-bold">Within 24 Hours</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
