import React from 'react';
import { Code2, Monitor, Smartphone, Gauge, Zap, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { LizzdoLogo } from '../../LizzdoLogo';

interface WebDevelopmentCompositionProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const WebDevelopmentComposition: React.FC<WebDevelopmentCompositionProps> = ({
  className = '',
  isDetailed = false,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#06080d] via-[#0b1018] to-[#040609] overflow-hidden flex items-center justify-center p-3 sm:p-5 select-none ${className}`}
    >
      {/* 1. Cybernetic Tech Lighting & Clean Overlay */}
      <div className="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full ambient-glow-emerald pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full ambient-glow-gold pointer-events-none" />

      {/* 2. Main 3D Composition Stage */}
      <div className="relative w-full max-w-[540px] h-[210px] sm:h-[250px] md:h-[280px] flex items-center justify-center">

        {/* --- OBJECT 1 (CENTER-HERO): Sleek MacBook Pro / Desktop Web Application Frame --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-x-[56%] sm:-translate-y-[52%] w-[250px] sm:w-[320px] md:w-[370px] h-[150px] sm:h-[190px] md:h-[215px] rounded-2xl bg-[#0c101a] border-2 border-emerald-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.9)] rotate-0 sm:rotate-[-4deg] transform transition-transform duration-500 p-2.5 sm:p-3.5 flex flex-col justify-between z-20 overflow-hidden gpu-layer">
          
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400/90" />
              <span className="w-2 h-2 rounded-full bg-amber-400/90" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
              <div className="bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[7px] sm:text-[8px] font-mono text-emerald-300 ml-1.5 flex items-center gap-1.5">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <span className="text-white/80">nexus.lizzdo.dev</span>
              </div>
            </div>
            <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 100/100 SPEED
            </span>
          </div>

          {/* Web App Layout Preview */}
          <div className="grid grid-cols-12 gap-2 my-1 z-10 flex-1 items-center">
            {/* Sidebar */}
            <div className="col-span-3 h-full bg-[#161c2e] rounded-xl p-1.5 border border-white/5 flex flex-col justify-between text-[6px] font-mono text-slate-400">
              <div className="space-y-1">
                <div className="flex items-center gap-1 mb-1">
                  <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                  <span className="text-[6px] text-white font-bold">NEXUS</span>
                </div>
                <div className="h-1 w-14 bg-white/20 rounded" />
                <div className="h-1 w-8 bg-white/20 rounded" />
              </div>
              <div className="h-1.5 w-6 bg-[#ffbe1a] rounded" />
            </div>

            {/* Main Stage Grid */}
            <div className="col-span-9 h-full bg-[#0a0e17] rounded-xl p-2 border border-white/5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-2 w-24 bg-gradient-to-r from-white to-slate-400 rounded" />
                <span className="text-[7px] font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-1 rounded">React + TS</span>
              </div>
              
              <div className="grid grid-cols-3 gap-1.5 my-1">
                <div className="bg-[#141a29] p-1 rounded border border-white/5 text-[6.5px] font-mono text-center">
                  <span className="text-slate-400 block">TTFB</span>
                  <span className="text-emerald-400 font-bold">18ms</span>
                </div>
                <div className="bg-[#141a29] p-1 rounded border border-white/5 text-[6.5px] font-mono text-center">
                  <span className="text-slate-400 block">FCP</span>
                  <span className="text-cyan-300 font-bold">0.4s</span>
                </div>
                <div className="bg-[#141a29] p-1 rounded border border-white/5 text-[6.5px] font-mono text-center">
                  <span className="text-slate-400 block">CLS</span>
                  <span className="text-[#ffbe1a] font-bold">0.00</span>
                </div>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-[#ffbe1a] rounded-full" />
            </div>
          </div>

          {/* Bottom Terminal Bar */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-1.5 text-[6.5px] sm:text-[7.5px] font-mono text-slate-400 z-10">
            <span className="flex items-center gap-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span>Next.js • Vite • Tailwind CSS</span>
            </span>
            <span className="text-[#ffbe1a]">Zero Layout Shift</span>
          </div>
        </div>

        {/* --- OBJECT 2 (TOP-LEFT FLOATING CODE TOKEN CARD): Syntax Highlighted TypeScript --- */}
        <div className="hidden sm:block absolute left-1 sm:left-3 top-1 sm:top-2 w-[125px] sm:w-[155px] md:w-[175px] bg-[#0c101d] border border-emerald-400/40 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.9)] rotate-[-6deg] transform transition-transform duration-500 z-30 gpu-layer">
          <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-emerald-300 border-b border-white/10 pb-1">
            <span className="flex items-center gap-1">
              <Code2 className="w-2.5 h-2.5 text-emerald-400" /> App.tsx
            </span>
            <div className="flex items-center gap-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span className="text-slate-400">TS</span>
            </div>
          </div>
          <div className="mt-1.5 text-[6.5px] sm:text-[7.5px] font-mono space-y-0.5 leading-tight">
            <div><span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-[#ffbe1a]">LizzdoEngine</span> = () =&gt; &#123;</div>
            <div className="pl-2 text-slate-300">speed: <span className="text-emerald-400">"sub-20ms"</span>,</div>
            <div className="pl-2 text-slate-300">lighthouse: <span className="text-[#ffbe1a]">100</span></div>
            <div>&#125;;</div>
          </div>
        </div>

        {/* --- OBJECT 3 (TOP-RIGHT FLOATING LIGHTHOUSE SCORE DOCK): 100/100 Audit --- */}
        <div className="absolute right-1 sm:right-3 top-1 sm:top-2 z-30 bg-[#0d1424] border border-emerald-400/50 p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform rotate-0 sm:rotate-[4deg] gpu-layer">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-emerald-400 bg-emerald-500/15 flex items-center justify-center">
            <span className="text-emerald-400 font-black text-[9px] sm:text-xs font-mono">100</span>
          </div>
          <div className="text-[6.5px] sm:text-[7.5px] font-mono text-slate-300">
            <div className="text-white font-bold font-sans">Core Web Vitals</div>
            <div className="text-emerald-400 flex items-center gap-0.5">
              <CheckCircle2 className="w-2 h-2" /> All Audits Passed
            </div>
          </div>
        </div>

        {/* --- OBJECT 4 (FRONT-RIGHT SMARTPHONE): Synced Mobile Responsive Screen --- */}
        <div className="absolute right-3 sm:right-6 bottom-0 sm:bottom-1 w-[70px] sm:w-[85px] md:w-[98px] h-[125px] sm:h-[155px] md:h-[175px] rounded-2xl bg-black border-2 border-slate-700 shadow-[0_15px_35px_rgba(0,0,0,0.9)] rotate-0 sm:rotate-[6deg] transform transition-transform duration-500 p-1 flex flex-col justify-between z-40 overflow-hidden gpu-layer">
          <div className="w-6 h-1.5 bg-slate-900 mx-auto rounded-full mb-0.5" />
          <div className="flex-1 rounded-xl bg-[#090d17] p-1.5 flex flex-col justify-between border border-white/5 text-[6px] font-mono">
            <div className="flex justify-between items-center text-emerald-300">
              <div className="flex items-center gap-1">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <span className="text-white font-bold">NEXUS</span>
              </div>
              <span className="text-[#ffbe1a]">● MOBILE</span>
            </div>
            <div className="space-y-1 my-auto">
              <div className="h-1.5 w-full bg-white/20 rounded" />
              <div className="h-1.5 w-3/4 bg-white/20 rounded" />
              <div className="h-3 w-full bg-[#ffbe1a] rounded text-black font-bold flex items-center justify-center text-[5.5px]">
                Launch App →
              </div>
            </div>
            <div className="w-full h-0.5 bg-emerald-400 rounded-full" />
          </div>
          <div className="w-6 h-0.5 bg-slate-700 mx-auto mt-0.5 rounded-full" />
        </div>

      </div>

      {/* Detailed Footer */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/20 pt-2 z-40 font-mono">
          <span className="text-[#ffbe1a] flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5" /> Full-Stack Modern Web Engineering
          </span>
          <span>100 Core Web Vitals • Edge CDN • Responsive Design • Decap CMS</span>
        </div>
      )}
    </div>
  );
};
