import React from 'react';
import { LizzdoLogo } from '../../LizzdoLogo';
import { Sparkles, Check, Bookmark, Layers } from 'lucide-react';

interface BrandIdentityCompositionProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const BrandIdentityComposition: React.FC<BrandIdentityCompositionProps> = ({
  className = '',
  isDetailed = false,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#08090d] via-[#10121a] to-[#050608] overflow-hidden flex items-center justify-center p-3 sm:p-5 select-none ${className}`}
    >
      {/* 1. Futuristic Studio Lighting & Isometric Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a14_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#ffbe1a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ffbe1a]/[0.03] rounded-full blur-2xl pointer-events-none" />

      {/* 2. Main 3D Composition Stage */}
      <div className="relative w-full max-w-[540px] h-[210px] sm:h-[250px] md:h-[280px] flex items-center justify-center">

        {/* --- OBJECT 1 (BACKGROUND): Luxury Textured Shopping Bag --- */}
        <div className="absolute -right-2 sm:right-2 top-1 sm:top-2 w-[110px] sm:w-[130px] md:w-[150px] h-[130px] sm:h-[155px] md:h-[175px] rounded-xl bg-gradient-to-b from-[#181a24] via-[#12141c] to-[#0c0d12] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rotate-[12deg] transform transition-transform duration-700 group-hover:rotate-[15deg] group-hover:scale-105 p-3 flex flex-col justify-between z-10">
          {/* Twisted Rope Handles */}
          <div className="w-12 h-6 mx-auto -mt-6 border-2 border-[#ffbe1a]/70 rounded-t-full shadow-[0_0_8px_rgba(255,190,26,0.3)]" />
          <div className="text-center pt-2">
            <div className="w-9 h-9 mx-auto rounded-lg bg-[#ffbe1a]/10 border border-[#ffbe1a]/40 flex items-center justify-center shadow-inner p-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
            </div>
            <div className="text-[7px] sm:text-[8px] font-mono tracking-widest text-[#ffbe1a] mt-1 uppercase font-bold">
              LIZZDO LUXE
            </div>
          </div>
          <div className="border-t border-white/10 pt-1 flex justify-between items-center text-[6px] text-slate-500 font-mono">
            <span>600 GSM</span>
            <span className="text-[#ffbe1a]">GOLD FOIL</span>
          </div>
        </div>

        {/* --- OBJECT 2 (CENTER-BACK): Large Master Brand Presentation Board / Laptop Screen --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-[52%] w-[240px] sm:w-[310px] md:w-[360px] h-[145px] sm:h-[185px] md:h-[210px] rounded-2xl bg-gradient-to-br from-[#151722] via-[#0d0f16] to-[#08090d] border-2 border-white/15 shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255,190,26,0.15)] rotate-[-4deg] transform transition-transform duration-700 group-hover:rotate-[-2deg] p-3 sm:p-4 flex flex-col justify-between z-20 overflow-hidden">
          {/* Subtle Vector Construction Guide Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 240">
              <circle cx="200" cy="120" r="70" fill="none" stroke="#ffbe1a" strokeDasharray="3,3" />
              <circle cx="200" cy="120" r="100" fill="none" stroke="#ffbe1a" strokeDasharray="4,4" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#ffbe1a" strokeDasharray="2,2" />
              <line x1="200" y1="0" x2="200" y2="240" stroke="#ffbe1a" strokeDasharray="2,2" />
              <line x1="50" y1="20" x2="350" y2="220" stroke="#ffbe1a" strokeDasharray="2,2" />
            </svg>
          </div>

          {/* Presentation Header */}
          <div className="flex items-center justify-between z-10 border-b border-white/[0.08] pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400/80" />
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              <span className="text-[7.5px] sm:text-[9px] font-mono text-slate-400 ml-1.5 tracking-wider">
                BRAND SYSTEM v2.6 // MASTER
              </span>
            </div>
            <span className="text-[7px] sm:text-[8px] font-mono text-[#ffbe1a] bg-[#ffbe1a]/10 px-1.5 py-0.5 rounded border border-[#ffbe1a]/30">
              VECTOR SPEC
            </span>
          </div>

          {/* Center Brand Identity Artwork */}
          <div className="flex items-center justify-center my-auto z-10 py-1">
            <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <LizzdoLogo size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <div className="h-6 w-px bg-white/15" />
              <div className="text-left">
                <div className="text-[9px] sm:text-[11px] font-extrabold text-white font-['Outfit'] tracking-wider">
                  VISUAL IDENTITY
                </div>
                <div className="text-[6.5px] sm:text-[7.5px] font-mono text-[#ffbe1a] tracking-widest uppercase">
                  Golden Ratio System
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Palette Chips & Typography Spec */}
          <div className="flex items-center justify-between z-10 pt-1.5 border-t border-white/[0.08] text-[7px] sm:text-[8px] font-mono">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded bg-[#090a0f] border border-white/20 shadow-sm" title="Obsidian" />
              <div className="w-3.5 h-3.5 rounded bg-[#ffbe1a] border border-amber-300 shadow-sm" title="Gold Foil" />
              <div className="w-3.5 h-3.5 rounded bg-[#7c3aed] border border-purple-300 shadow-sm" title="Royal Violet" />
              <div className="w-3.5 h-3.5 rounded bg-white border border-slate-300 shadow-sm" title="Pure White" />
            </div>
            <span className="text-slate-400 font-medium">Outfit + Plus Jakarta Sans</span>
          </div>
        </div>

        {/* --- OBJECT 3 (FRONT-LEFT): Dual Luxury Foil Business Cards --- */}
        <div className="absolute -left-2 sm:left-1 bottom-1 sm:bottom-2 z-30 flex flex-col gap-1.5 transform transition-transform duration-500 group-hover:scale-105">
          {/* Card 1: Obsidian Matte with Embossed Gold */}
          <div className="w-[125px] sm:w-[155px] md:w-[175px] h-[75px] sm:h-[92px] md:h-[105px] rounded-xl bg-gradient-to-br from-[#1a1c26] via-[#10121a] to-[#08090d] border border-[#ffbe1a]/60 shadow-[0_20px_35px_rgba(0,0,0,0.9),0_0_15px_rgba(255,190,26,0.25)] rotate-[-12deg] transform transition-transform duration-700 group-hover:rotate-[-8deg] p-2.5 sm:p-3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#ffbe1a]/20 to-transparent pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="p-0.5 rounded-md bg-[#ffbe1a]/15 border border-[#ffbe1a]/60">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="text-[6.5px] sm:text-[7.5px] font-mono text-[#ffbe1a] font-bold tracking-widest uppercase">
                LUXE 600G
              </span>
            </div>
            <div>
              <div className="text-white font-extrabold text-[8px] sm:text-[10px] font-['Outfit'] tracking-wider flex items-center gap-1">
                LIZZDO MEDIA
              </div>
              <div className="text-slate-400 text-[6px] sm:text-[7px] font-mono">
                Brand Architecture & Visual Craft
              </div>
            </div>
          </div>
        </div>

        {/* --- OBJECT 4 (FRONT-RIGHT): Sleek Bezel-less Smartphone (iPhone Mockup) --- */}
        <div className="absolute right-3 sm:right-6 bottom-0 sm:bottom-1 w-[75px] sm:w-[95px] md:w-[110px] h-[130px] sm:h-[160px] md:h-[185px] rounded-2xl bg-black border-2 border-slate-700 shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_20px_rgba(255,190,26,0.2)] rotate-[8deg] transform transition-transform duration-700 group-hover:rotate-[4deg] group-hover:scale-105 p-1.5 flex flex-col justify-between z-30 overflow-hidden">
          {/* Dynamic Island Notch */}
          <div className="w-7 sm:w-9 h-2 bg-slate-900 mx-auto rounded-full mb-1 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-slate-800" />
          </div>

          {/* Mobile Screen Content */}
          <div className="flex-1 rounded-xl bg-gradient-to-b from-[#12141d] to-[#090a0f] p-1.5 sm:p-2 flex flex-col justify-between border border-white/5">
            <div className="flex items-center justify-between">
              <div className="scale-75 origin-left">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="text-[6px] text-emerald-400 font-mono flex items-center gap-0.5">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
            </div>

            <div className="space-y-1 my-auto text-center py-1 flex flex-col items-center">
              <div className="p-1 rounded-lg bg-[#ffbe1a]/15 border border-[#ffbe1a]/50 flex items-center justify-center shadow-inner">
                <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="text-[7px] sm:text-[8px] font-bold text-white block font-['Outfit'] mt-0.5">
                Lizzdo Studio
              </span>
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-[#ffbe1a] to-amber-500 rounded-full" />
          </div>

          {/* Home Bar */}
          <div className="w-8 h-0.5 bg-slate-700 mx-auto mt-1 rounded-full" />
        </div>

        {/* --- OBJECT 5 (CENTER-BOTTOM): Tactile Brand Mug / Ceramic Tumbler --- */}
        <div className="absolute left-[38%] sm:left-[42%] bottom-0 sm:bottom-1 w-[45px] sm:w-[55px] md:w-[65px] h-[50px] sm:h-[62px] md:h-[72px] rounded-lg bg-gradient-to-b from-[#222533] via-[#141620] to-[#090a0e] border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.9)] rotate-[2deg] transform transition-transform duration-500 group-hover:scale-110 p-1.5 flex flex-col justify-between z-40">
          {/* Mug Handle */}
          <div className="absolute -right-2 top-2 w-3 sm:w-3.5 h-7 sm:h-9 border-2 border-slate-600 rounded-r-lg" />
          <div className="w-full h-1 bg-white/20 rounded-full" />
          <div className="text-center my-auto flex items-center justify-center">
            <div className="p-0.5 rounded-full bg-[#ffbe1a]/20 border border-[#ffbe1a] flex items-center justify-center">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#ffbe1a] rounded" />
        </div>

        {/* --- OBJECT 6 (FLOATING ACCENT): Brand Guideline Swatch Pill --- */}
        <div className="absolute left-1/4 top-1 sm:top-2 z-40 bg-black/80 backdrop-blur-md border border-[#ffbe1a]/40 px-2 sm:px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 transform -rotate-6">
          <div className="w-2 h-2 rounded-full bg-[#ffbe1a] shadow-[0_0_6px_#ffbe1a]" />
          <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold tracking-wider">
            PANTONE 116C • FOIL STAMP
          </span>
        </div>

      </div>

      {/* Detail Footer when expanded in single view or Lightbox */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2 z-40 font-mono">
          <span className="text-[#ffbe1a] flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> 6-Object Master Brand System
          </span>
          <span>Stationery • Digital • Packaging • Merch</span>
        </div>
      )}
    </div>
  );
};
