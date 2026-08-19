import React from 'react';
import { Activity, TrendingUp, Users, Cpu, Shield, Zap, Sparkles, Layers } from 'lucide-react';
import { LizzdoLogo } from '../../LizzdoLogo';

interface SaaSWebsiteCompositionProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const SaaSWebsiteComposition: React.FC<SaaSWebsiteCompositionProps> = ({
  className = '',
  isDetailed = false,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#06080f] via-[#090d18] to-[#04060a] overflow-hidden flex items-center justify-center p-3 sm:p-5 select-none ${className}`}
    >
      {/* 1. Cybernetic Grid & Neon Glow */}
      <div className="absolute inset-0 bg-cyan-500/[0.02] pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full ambient-glow-cyan pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full ambient-glow-gold pointer-events-none" />

      {/* 2. Main 3D Floating Composition Stage */}
      <div className="relative w-full max-w-[540px] h-[210px] sm:h-[250px] md:h-[280px] flex items-center justify-center">

        {/* --- OBJECT 1 (MAIN 3D DASHBOARD WINDOW): Dark SaaS Interface in Perspective --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-x-[56%] sm:-translate-y-[52%] w-[260px] sm:w-[330px] md:w-[380px] h-[155px] sm:h-[195px] md:h-[220px] rounded-2xl bg-[#090d18] border-2 border-cyan-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.95)] rotate-0 sm:rotate-[-4deg] transform transition-transform duration-500 p-2.5 sm:p-3.5 flex flex-col justify-between z-20 overflow-hidden gpu-layer">
          
          {/* Top Browser Bar & URL */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/90" />
              <span className="w-2 h-2 rounded-full bg-amber-500/90" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
              <div className="bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[7px] sm:text-[8px] font-mono text-cyan-300 ml-1.5 flex items-center gap-1.5">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <span className="text-white/80">cloud.lizzdo.io/metrics</span>
              </div>
            </div>
            <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 99.9% LIVE
            </span>
          </div>

          {/* Metric Telemetry Cards Grid */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-1 z-10">
            <div className="bg-[#121829]/90 border border-white/[0.08] rounded-xl p-1.5 sm:p-2 shadow-sm">
              <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-slate-400 uppercase">
                <span>ARR</span>
                <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
              </div>
              <div className="text-[10px] sm:text-xs font-black text-white font-['Outfit'] mt-0.5">
                $148.2k
              </div>
              <div className="text-[6px] sm:text-[7px] text-emerald-400 font-mono mt-0.5">
                +24.8%
              </div>
            </div>

            <div className="bg-[#121829]/90 border border-white/[0.08] rounded-xl p-1.5 sm:p-2 shadow-sm">
              <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-slate-400 uppercase">
                <span>Active Users</span>
                <Users className="w-2.5 h-2.5 text-[#ffbe1a]" />
              </div>
              <div className="text-[10px] sm:text-xs font-black text-[#ffbe1a] font-['Outfit'] mt-0.5">
                42,890
              </div>
              <div className="text-[6px] sm:text-[7px] text-slate-400 font-mono mt-0.5">
                Global Edge
              </div>
            </div>

            <div className="bg-[#121829]/90 border border-white/[0.08] rounded-xl p-1.5 sm:p-2 shadow-sm">
              <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-slate-400 uppercase">
                <span>Latency</span>
                <Zap className="w-2.5 h-2.5 text-cyan-400" />
              </div>
              <div className="text-[10px] sm:text-xs font-black text-cyan-300 font-['Outfit'] mt-0.5">
                24ms
              </div>
              <div className="text-[6px] sm:text-[7px] text-cyan-400 font-mono mt-0.5">
                Edge Cache
              </div>
            </div>
          </div>

          {/* Futuristic Glowing Neon Area Graph */}
          <div className="w-full h-12 sm:h-16 bg-[#0c101d] rounded-xl p-1.5 relative flex flex-col justify-end border border-white/5 z-10 overflow-hidden">
            <svg viewBox="0 0 200 45" className="w-full h-full text-[#ffbe1a]" preserveAspectRatio="none">
              <defs>
                <linearGradient id="saasAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffbe1a" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 Q30,15 60,25 T120,10 T170,5 L200,8 L200,45 L0,45 Z" fill="url(#saasAreaGrad)" />
              <path d="M0,35 Q30,15 60,25 T120,10 T170,5 L200,8" fill="none" stroke="#ffbe1a" strokeWidth="2" />
              <circle cx="170" cy="5" r="2.5" fill="#ffffff" />
            </svg>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-1.5 text-[6.5px] sm:text-[7.5px] font-mono text-slate-400 z-10">
            <span className="flex items-center gap-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span>React 18 • Vite SPA</span>
            </span>
            <span className="text-[#ffbe1a]">Sub-100ms Transitions</span>
          </div>
        </div>

        {/* --- OBJECT 2 (ELEVATED FLOATING METRIC CARD - TOP RIGHT): Real-time Telemetry Widget --- */}
        <div className="hidden sm:block absolute right-1 sm:right-3 top-1 sm:top-2 w-[110px] sm:w-[135px] md:w-[150px] bg-[#11172a] border border-cyan-400/50 p-2 sm:p-2.5 rounded-2xl shadow-xl rotate-0 sm:rotate-[4deg] transform transition-transform duration-500 z-30 gpu-layer">
          <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono font-bold text-cyan-300">
            <span className="flex items-center gap-1">
              <Activity className="w-2.5 h-2.5 text-cyan-400" /> AI ANOMALY
            </span>
            <span className="text-emerald-400 font-black">0 ERR</span>
          </div>
          <div className="mt-1 text-[8px] sm:text-[9.5px] font-bold text-white font-['Outfit'] flex items-center justify-between">
            <span>Growth Velocity</span>
            <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs sm:text-sm font-black text-emerald-400 font-mono">+142%</span>
            <span className="text-[6.5px] text-slate-400 font-mono">Conversion</span>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-[#ffbe1a] rounded-full mt-1.5" />
        </div>

        {/* --- OBJECT 3 (BOTTOM-LEFT FLOATING PILL): AI Insight Beacon --- */}
        <div className="hidden sm:flex absolute left-2 sm:left-4 bottom-2 sm:bottom-3 z-30 bg-black/90 border border-[#ffbe1a]/50 px-2.5 py-1 rounded-full shadow-xl items-center gap-2 transform -rotate-2 gpu-layer">
          <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
          <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold tracking-wider">
            LIZZDO ENGINE: <span className="text-[#ffbe1a]">99.4% EFFICIENCY</span>
          </span>
        </div>

        {/* --- OBJECT 4 (FRONT-RIGHT SMARTPHONE): Synced Mobile Telemetry Companion --- */}
        <div className="absolute right-4 sm:right-6 bottom-0 sm:bottom-1 w-[65px] sm:w-[80px] md:w-[92px] h-[115px] sm:h-[145px] md:h-[165px] rounded-2xl bg-black border-2 border-slate-700 shadow-[0_15px_35px_rgba(0,0,0,0.95)] rotate-0 sm:rotate-[6deg] transform transition-transform duration-500 p-1 flex flex-col justify-between z-40 overflow-hidden gpu-layer">
          <div className="w-6 h-1.5 bg-slate-900 mx-auto rounded-full mb-0.5" />
          <div className="flex-1 rounded-xl bg-[#0e1322] p-1.5 flex flex-col justify-between border border-white/5 text-[6px] font-mono">
            <div className="flex justify-between items-center text-cyan-300">
              <div className="flex items-center gap-1">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <span className="text-white font-bold">LIZZDO</span>
              </div>
              <span className="text-emerald-400">● LIVE</span>
            </div>
            <div className="bg-black/50 p-1 rounded border border-white/5 my-auto text-center">
              <span className="text-slate-400 block text-[5.5px]">REVENUE</span>
              <span className="text-[8px] font-bold text-[#ffbe1a]">$148.2k</span>
            </div>
            <div className="w-full h-0.5 bg-cyan-400 rounded-full" />
          </div>
          <div className="w-6 h-0.5 bg-slate-700 mx-auto mt-0.5 rounded-full" />
        </div>

      </div>

      {/* Detailed Footer */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 border-t border-cyan-500/20 pt-2 z-40 font-mono">
          <span className="text-[#ffbe1a] flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5" /> High-Performance SaaS Application UI
          </span>
          <span>Telemetry Dashboards • Design Systems • React 18 Architecture</span>
        </div>
      )}
    </div>
  );
};
