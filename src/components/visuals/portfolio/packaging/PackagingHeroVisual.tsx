import React from 'react';
import { Box, Sparkles, Droplets, Shield, Layers, Tag, Scissors } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingHeroVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingHeroVisual: React.FC<PackagingHeroVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[360px] sm:min-h-[460px] bg-gradient-to-br from-[#12071f] via-[#090312] to-[#040108] overflow-hidden flex items-center justify-center p-4 sm:p-8 select-none ${className}`}
    >
      {/* 1. Atmospheric Studio Lighting & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5a93c12_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e5a93c]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-purple-950/20 rounded-full blur-2xl pointer-events-none" />

      {/* 2. Soft Reflective Floor Plane */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 via-[#10061c]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 inset-x-12 h-1 bg-gradient-to-r from-transparent via-[#e5a93c]/20 to-transparent blur-sm pointer-events-none" />

      {/* 3. Main Multi-Product Packaging Family Stage */}
      <div className="relative w-full max-w-4xl h-[320px] sm:h-[400px] flex items-center justify-center">

        {/* --- 1. BACKGROUND (LEFT): Unfolded Dieline Blueprint Template (Inspired by Ref 6 & 7) --- */}
        <div className="absolute left-0 sm:left-4 top-2 sm:top-6 w-[180px] sm:w-[260px] md:w-[300px] h-[130px] sm:h-[180px] md:h-[200px] rounded-2xl bg-gradient-to-br from-[#1c0c2e]/90 to-[#0c0416]/95 border border-purple-500/30 p-3 sm:p-4 shadow-2xl rotate-[-6deg] transform transition-transform duration-700 group-hover:rotate-[-3deg] z-10">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-1.5 text-[8px] sm:text-[10px] font-mono text-purple-300">
            <span className="flex items-center gap-1.5">
              <Scissors className="w-3 h-3 text-[#e5a93c]" /> DIELINE NET SPEC
            </span>
            <span className="text-[#e5a93c] font-bold">140 × 90 × 45 MM</span>
          </div>

          {/* Dieline Blueprint SVG vector lines */}
          <div className="relative w-full h-[80px] sm:h-[120px] mt-2 flex items-center justify-center">
            <svg className="w-full h-full opacity-70" viewBox="0 0 280 130">
              {/* Outer cut boundary */}
              <rect x="25" y="20" width="230" height="90" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" />
              {/* Score / Crease lines (dashed) */}
              <line x1="75" y1="20" x2="75" y2="110" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="140" y1="20" x2="140" y2="110" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="205" y1="20" x2="205" y2="110" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="25" y1="50" x2="255" y2="50" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="25" y1="80" x2="255" y2="80" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2" />
              {/* Glue tab */}
              <polygon points="10,35 25,20 25,110 10,95" fill="none" stroke="#a855f7" strokeWidth="0.8" strokeDasharray="2,2" />
              {/* Center Emblem circle */}
              <circle cx="107" cy="65" r="16" fill="none" stroke="#e5a93c" strokeWidth="1" />
            </svg>
            <div className="absolute text-[7px] sm:text-[8px] font-mono text-neutral-300 bg-black/75 px-2 py-0.5 rounded-full border border-purple-500/40 flex items-center gap-1.5 backdrop-blur-sm">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span>FSC Certified 350GSM Paperboard</span>
            </div>
          </div>
        </div>

        {/* --- 2. BACKGROUND (RIGHT): Swing Hangtag with Twine String (Inspired by Ref 1) --- */}
        <div className="absolute right-2 sm:right-10 top-0 sm:top-4 w-[110px] sm:w-[150px] md:w-[170px] h-[150px] sm:h-[200px] md:h-[230px] z-15 rotate-[8deg] transform transition-transform duration-700 group-hover:rotate-[5deg]">
          {/* Fine Hanging Twine String */}
          <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-amber-200/60 to-amber-600 mx-auto" />
          <div className="w-3 h-3 rounded-full border border-amber-400 bg-neutral-900 mx-auto -mt-1.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
          </div>

          {/* Shield/Arch Die-Cut Hang Tag */}
          <div className="w-full h-[120px] sm:h-[160px] md:h-[185px] rounded-b-2xl rounded-t-lg bg-gradient-to-br from-[#0e2a2c] via-[#091a1c] to-[#040e0f] border-2 border-emerald-500/30 p-2.5 sm:p-3.5 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Gold foil edge line */}
            <div className="absolute inset-1.5 rounded-b-xl border border-[#e5a93c]/40 pointer-events-none" />
            
            <div className="text-center pt-2">
              <span className="text-[6.5px] sm:text-[8px] font-mono text-[#e5a93c] tracking-widest uppercase">
                AUTHENTIC
              </span>
            </div>

            <div className="my-auto flex flex-col items-center justify-center">
              <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gradient-to-br from-[#e5a93c] to-amber-600 p-0.5 shadow-[0_0_15px_rgba(229,169,60,0.4)] flex items-center justify-center">
                <div className="w-full h-full bg-[#071718] rounded-full flex items-center justify-center">
                  <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>
              <span className="text-[7.5px] sm:text-[9px] font-bold text-white font-['Outfit'] mt-1.5 tracking-wider">
                LIZZDO MEDIA
              </span>
            </div>

            <div className="text-center pb-1">
              <span className="text-[6px] sm:text-[7px] font-mono text-emerald-300">
                SERIES 2026 • LUXE
              </span>
            </div>
          </div>
        </div>

        {/* --- 3. MIDGROUND (LEFT-CENTER): Stand-Up Matte Zipper Pouch (Inspired by Ref 5 & 9) --- */}
        <div className="absolute left-[15%] sm:left-[22%] bottom-3 sm:bottom-6 w-[120px] sm:w-[160px] md:w-[190px] h-[170px] sm:h-[230px] md:h-[270px] z-25 transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1">
          {/* Top Sealed Ridge & Tear Notch */}
          <div className="w-full h-4 sm:h-6 rounded-t-lg bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950 border-t border-x border-emerald-500/40 flex items-center justify-between px-2 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-black/60 border border-emerald-400/40" />
            <div className="h-0.5 w-12 sm:w-16 bg-emerald-400/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/60 border border-emerald-400/40" />
          </div>

          {/* Stand-Up Barrier Pouch Body */}
          <div className="w-full h-[150px] sm:h-[205px] md:h-[240px] rounded-b-2xl bg-gradient-to-b from-[#0b241c] via-[#061510] to-[#030a08] border-x border-b-2 border-emerald-500/40 shadow-[0_25px_50px_rgba(0,0,0,0.95)] p-2.5 sm:p-3.5 flex flex-col justify-between relative overflow-hidden">
            {/* Matte surface specular highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Top Organic Seal */}
            <div className="flex items-center justify-between">
              <span className="text-[6.5px] sm:text-[8px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                BARRIER MATTE
              </span>
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            {/* Center Botanical Artwork & Gold Stamp */}
            <div className="my-auto text-center space-y-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-600/30 to-[#e5a93c]/20 border border-[#e5a93c]/40 flex items-center justify-center p-1 shadow-lg">
                <LizzdoLogo variant="mark-only" size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <div className="text-[9px] sm:text-[12px] font-black text-white font-['Outfit'] tracking-wider uppercase">
                BOTANICAL ELIXIR
              </div>
              <div className="text-[6.5px] sm:text-[8px] text-emerald-300 font-mono">
                100% RECYCLABLE POUCH
              </div>
            </div>

            {/* Bottom Stand-Up Gusset Shadow Spec */}
            <div className="pt-1.5 border-t border-emerald-500/30 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-emerald-200">
              <span>NET WT 250G</span>
              <span className="text-[#e5a93c] font-bold">HERMETIC SEAL</span>
            </div>
          </div>
        </div>

        {/* --- 4. CENTER FOREGROUND: Flagship 3D Rigid Luxury Gift Box (Inspired by Ref 6 & 7) --- */}
        <div className="absolute left-[50%] sm:left-[52%] top-1/2 -translate-x-1/2 -translate-y-[45%] w-[150px] sm:w-[205px] md:w-[245px] h-[175px] sm:h-[235px] md:h-[275px] z-35 transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-[48%]">
          {/* Main 3D Box Body (Obsidian & Deep Plum with 24K Hot Stamped Foil) */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2f104e] via-[#1a082b] to-[#0c0314] border-2 border-purple-400/60 shadow-[0_30px_70px_rgba(0,0,0,0.98),0_0_40px_rgba(168,85,247,0.35)] p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Magnetic Bevel */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-purple-400/40 via-[#e5a93c]/30 to-purple-400/40 border-b border-purple-300/40" />

            {/* Top Brand Pill */}
            <div className="flex items-center justify-between pt-3">
              <span className="text-[7.5px] sm:text-[9.5px] font-mono font-black text-[#e5a93c] tracking-widest uppercase bg-[#e5a93c]/15 px-2.5 py-0.5 rounded-full border border-[#e5a93c]/40 shadow-[0_0_12px_rgba(229,169,60,0.35)]">
                LIZZDO MEDIA
              </span>
              <div className="scale-90">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            {/* Central Embossed Foil Emblem */}
            <div className="my-auto text-center py-1">
              <div className="w-14 sm:w-20 h-14 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#e5a93c] via-amber-500 to-amber-700 p-0.5 shadow-[0_0_25px_rgba(229,169,60,0.45)] mb-2.5 transform -rotate-2 group-hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-[#180526] rounded-[14px] flex flex-col items-center justify-center p-1.5">
                  <LizzdoLogo variant="mark-only" size="md" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>
              <div className="text-white font-extrabold text-[11px] sm:text-[15px] font-['Outfit'] tracking-widest uppercase drop-shadow-md">
                PACKAGING DESIGN
              </div>
              <div className="text-purple-300 text-[7px] sm:text-[9px] font-mono tracking-wider mt-0.5">
                LUXURY STRUCTURAL SYSTEM
              </div>
            </div>

            {/* Bottom Gold Foil Bar */}
            <div className="pt-2 border-t border-purple-400/30 flex items-center justify-between text-[7px] sm:text-[8.5px] font-mono text-purple-200">
              <span>PREMIUM UNBOXING</span>
              <span className="text-[#e5a93c] font-bold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> 24K GOLD FOIL
              </span>
            </div>
          </div>
        </div>

        {/* --- 5. FOREGROUND (RIGHT): Cylindrical Glass Dropper Bottle --- */}
        <div className="absolute right-1 sm:right-6 bottom-2 sm:bottom-5 w-[75px] sm:w-[100px] md:w-[115px] h-[155px] sm:h-[200px] md:h-[235px] z-40 transform transition-transform duration-700 group-hover:scale-108 group-hover:rotate-[-2deg]">
          {/* Gold Dropper Cap */}
          <div className="w-8 sm:w-11 h-7 sm:h-9 mx-auto rounded-t-xl bg-gradient-to-b from-[#ffe066] via-[#e5a93c] to-[#b3770e] border border-amber-200 shadow-[0_0_15px_rgba(229,169,60,0.5)] relative flex items-center justify-center">
            <div className="w-4 sm:w-5 h-3 sm:h-4 bg-black rounded-t-full -mt-2 border-t border-amber-300" />
          </div>

          {/* Frosted Glass Body */}
          <div className="w-full h-[120px] sm:h-[160px] md:h-[188px] rounded-2xl bg-gradient-to-b from-purple-900/60 via-[#1d0530]/85 to-[#0b0114]/95 border-2 border-purple-300/40 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(168,85,247,0.3)] p-2 sm:p-2.5 flex flex-col justify-between relative overflow-hidden">
            {/* Specular sheen stripe */}
            <div className="absolute top-0 left-2.5 w-2.5 h-full bg-white/20 skew-x-[-15deg] blur-[1px] pointer-events-none" />

            <div className="w-6 h-6 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c]/60 mx-auto flex items-center justify-center p-0.5">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
            </div>

            {/* Foiled Label */}
            <div className="bg-[#12031f]/90 border border-[#e5a93c]/60 rounded-xl p-1.5 sm:p-2 text-center shadow-lg my-auto flex flex-col items-center">
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="text-[7.5px] sm:text-[9px] font-black text-[#e5a93c] tracking-widest block font-['Outfit'] mt-0.5">
                LIZZDO
              </span>
              <span className="text-[6px] sm:text-[7px] text-purple-200 font-mono block">
                NIGHT REPAIR
              </span>
              <div className="w-7 h-0.5 bg-[#e5a93c] mx-auto mt-1 rounded" />
            </div>

            <div className="text-center text-[6.5px] sm:text-[7.5px] font-mono text-[#e5a93c] tracking-wider">
              50 ML // 1.7 FL. OZ.
            </div>
          </div>
        </div>

        {/* --- 6. FLOATING DOCK (BOTTOM-LEFT): Branded Packaging Tape & Materials (Inspired by Ref 2) --- */}
        <div className="absolute left-2 sm:left-6 bottom-1 sm:bottom-2 z-40 bg-[#140624]/90 backdrop-blur-md border border-purple-500/40 p-2 sm:p-3 rounded-2xl shadow-2xl space-y-1.5 text-[8px] sm:text-[9px] font-mono hidden sm:block">
          <div className="text-white font-bold text-[9px] sm:text-[10px] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#e5a93c]" /> Packaging Finishes
          </div>
          <div className="flex items-center gap-2 text-purple-200">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
            <span>Soft-Touch Matte 350GSM</span>
          </div>
          <div className="flex items-center gap-2 text-[#e5a93c]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c] shadow-[0_0_8px_#e5a93c]" />
            <span>24K Hot Stamped Gold Foil</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Spot UV Embossed Textures</span>
          </div>
        </div>

      </div>

      {/* Detailed Footer */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-400 border-t border-purple-500/20 pt-2 z-40 font-mono">
          <span className="text-[#e5a93c] flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5" /> 3D Structural Box, Barrier Pouch & Dropper Suite
          </span>
          <span className="hidden sm:inline">Dieline Engineering • Foil Stamping • Sustainable Substrates</span>
        </div>
      )}
    </div>
  );
};
