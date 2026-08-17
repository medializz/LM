import React from 'react';
import { Box, Sparkles, Check, Droplets, Layers, Shield } from 'lucide-react';
import { LizzdoLogo } from '../../LizzdoLogo';

interface PackagingDesignCompositionProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingDesignComposition: React.FC<PackagingDesignCompositionProps> = ({
  className = '',
  isDetailed = false,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#12061f] via-[#0b0314] to-[#05010a] overflow-hidden flex items-center justify-center p-3 sm:p-5 select-none ${className}`}
    >
      {/* 1. Volumetric Violet & Gold Lighting */}
      <div className="absolute inset-0 bg-purple-500/[0.02] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full ambient-glow-purple pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full ambient-glow-gold pointer-events-none" />

      {/* 2. Main 3D Composition Stage */}
      <div className="relative w-full max-w-[540px] h-[210px] sm:h-[250px] md:h-[280px] flex items-center justify-center">

        {/* --- OBJECT 1 (BACKGROUND-LEFT): Unfolded Structural Packaging Dieline Blueprint --- */}
        <div className="absolute left-2 sm:left-4 top-2 sm:top-3 w-[150px] sm:w-[190px] md:w-[220px] h-[100px] sm:h-[130px] md:h-[145px] rounded-xl bg-[#130722] border border-purple-500/30 p-2.5 shadow-xl rotate-[-8deg] transform transition-transform duration-700 group-hover:rotate-[-5deg] z-10">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-1 text-[7px] sm:text-[8px] font-mono text-purple-300">
            <span className="flex items-center gap-1">
              <Box className="w-2.5 h-2.5 text-[#ffbe1a]" /> DIELINE SPEC #08
            </span>
            <span className="text-[#ffbe1a]">140×90×45MM</span>
          </div>

          {/* Blueprint vector fold lines */}
          <div className="relative w-full h-[60px] sm:h-[85px] mt-1.5 flex items-center justify-center">
            <svg className="w-full h-full opacity-60" viewBox="0 0 200 100">
              <rect x="20" y="20" width="160" height="60" fill="none" stroke="#a855f7" strokeWidth="1" />
              <rect x="50" y="20" width="100" height="60" fill="none" stroke="#ffbe1a" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="150" y1="0" x2="150" y2="100" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="100" cy="50" r="14" fill="none" stroke="#ffbe1a" strokeWidth="1" />
            </svg>
            <div className="absolute text-[6px] sm:text-[7px] font-mono text-slate-300 bg-black/80 px-1.5 py-0.5 rounded border border-purple-500/40 flex items-center gap-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span>Magnetic Flap + Soft-Close</span>
            </div>
          </div>
        </div>

        {/* --- OBJECT 2 (CENTER): 3D Luxury Structural Rigid Gift Box --- */}
        <div className="absolute left-[30%] sm:left-[35%] top-1/2 -translate-x-1/2 -translate-y-[45%] w-[130px] sm:w-[165px] md:w-[195px] h-[150px] sm:h-[185px] md:h-[215px] z-30 transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-[48%]">
          
          {/* Main 3D Box Body (Rich Textured Matte Purple & Obsidian) */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2a0c47] via-[#1a062c] to-[#0f021b] border-2 border-purple-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.98)] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Magnetic Lid Bevel & Reflection */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-purple-400/40 via-[#ffbe1a]/30 to-purple-400/40 border-b border-purple-300/40" />
            
            {/* Geometric Gold Foil Pattern Stamp */}
            <div className="flex items-center justify-between pt-3">
              <span className="text-[7px] sm:text-[8.5px] font-mono font-black text-[#ffbe1a] tracking-widest uppercase bg-[#ffbe1a]/15 px-2 py-0.5 rounded-full border border-[#ffbe1a]/40 shadow-[0_0_10px_rgba(255,190,26,0.3)]">
                LIZZDO LUXE
              </span>
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            {/* Central Embossed Foil Medallion */}
            <div className="my-auto text-center py-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#ffbe1a] to-amber-600 p-0.5 shadow-[0_0_20px_rgba(255,190,26,0.4)] mb-2 transform -rotate-3 group-hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-[#1e0730] rounded-[14px] flex flex-col items-center justify-center p-1">
                  <LizzdoLogo variant="mark-only" size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>
              <div className="text-white font-extrabold text-[9px] sm:text-[12px] font-['Outfit'] tracking-widest uppercase drop-shadow-md">
                LIZZDO BOTANICALS
              </div>
              <div className="text-purple-300 text-[6.5px] sm:text-[8px] font-mono tracking-wider mt-0.5">
                50 ML // LUXURY ELIXIR
              </div>
            </div>

            {/* Bottom Gold Foil Edge Line */}
            <div className="pt-2 border-t border-purple-400/30 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-purple-200">
              <span>PREMIUM FINISH</span>
              <span className="text-[#ffbe1a] font-bold">24K FOIL</span>
            </div>
          </div>
        </div>

        {/* --- OBJECT 3 (FRONT-RIGHT): Cylindrical Frosted Glass Elixir Dropper Bottle --- */}
        <div className="absolute right-6 sm:right-10 bottom-1 sm:bottom-2 w-[65px] sm:w-[85px] md:w-[98px] h-[135px] sm:h-[170px] md:h-[195px] z-40 transform transition-transform duration-700 group-hover:scale-108 group-hover:rotate-[-2deg]">
          
          {/* Gold Dropper Cap */}
          <div className="w-7 sm:w-9 h-6 sm:h-8 mx-auto rounded-t-lg bg-gradient-to-b from-[#ffe066] via-[#ffbe1a] to-[#d48806] border border-amber-200 shadow-[0_0_12px_rgba(255,190,26,0.5)] relative flex items-center justify-center">
            <div className="w-3.5 sm:w-4.5 h-2.5 sm:h-3 bg-black rounded-t-full -mt-2 border-t border-amber-300" />
          </div>
          
          {/* Frosted Glass Bottle Body */}
          <div className="w-full h-[105px] sm:h-[135px] md:h-[155px] rounded-2xl bg-gradient-to-b from-purple-900/60 via-[#1f0633]/80 to-[#0d0117]/95 border-2 border-purple-300/40 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(168,85,247,0.3)] p-2 flex flex-col justify-between relative overflow-hidden">
            
            {/* Glass Specular Sheen Reflection Stripe */}
            <div className="absolute top-0 left-2 w-2 h-full bg-white/20 skew-x-[-15deg] blur-[1px] pointer-events-none" />
            
            <div className="w-5 h-5 rounded-full bg-[#ffbe1a]/20 border border-[#ffbe1a]/60 mx-auto flex items-center justify-center p-0.5">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
            </div>

            {/* Gold Foiled Bottle Label */}
            <div className="bg-[#12031f]/90 border border-[#ffbe1a]/60 rounded-lg p-1.5 text-center shadow-lg my-auto flex flex-col items-center">
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="text-[6.5px] sm:text-[7.5px] font-black text-[#ffbe1a] tracking-widest block font-['Outfit'] mt-0.5">
                LIZZDO
              </span>
              <span className="text-[5.5px] sm:text-[6.5px] text-purple-200 font-mono block">
                NIGHT ELIXIR
              </span>
              <div className="w-6 h-0.5 bg-[#ffbe1a] mx-auto mt-1 rounded" />
            </div>

            <div className="text-center text-[6px] sm:text-[7px] font-mono text-[#ffbe1a] tracking-wider">
              1.7 FL. OZ.
            </div>
          </div>
        </div>

        {/* --- OBJECT 4 (BOTTOM-LEFT / FLOATING): Material Swatches Dock --- */}
        <div className="absolute left-3 sm:left-6 bottom-2 sm:bottom-3 z-40 bg-[#160726]/90 backdrop-blur-md border border-purple-500/40 p-2 sm:p-2.5 rounded-xl shadow-xl space-y-1.5 text-[7px] sm:text-[8px] font-mono">
          <div className="text-white font-bold text-[8px] sm:text-[9px] flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#ffbe1a]" /> Tactile Finishes
          </div>
          <div className="flex items-center gap-1.5 text-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Soft-Touch Matte 350G</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#ffbe1a]">
            <span className="w-2 h-2 rounded-full bg-[#ffbe1a] shadow-[0_0_6px_#ffbe1a]" />
            <span>Hot Stamped 24K Foil</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Spot UV Embossed Core</span>
          </div>
        </div>

      </div>

      {/* Detailed Footer */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 border-t border-purple-500/20 pt-2 z-40 font-mono">
          <span className="text-[#ffbe1a] flex items-center gap-1">
            <Box className="w-3.5 h-3.5" /> 3D Structural Box & Bottle Prototype
          </span>
          <span>Dieline Engineering • Foil Stamping • Sustainable Substrates</span>
        </div>
      )}
    </div>
  );
};
