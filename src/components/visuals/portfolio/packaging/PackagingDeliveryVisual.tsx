import React from 'react';
import { Box, Sparkles, Shield, Truck, Tag, Layers } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingDeliveryVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingDeliveryVisual: React.FC<PackagingDeliveryVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] bg-gradient-to-br from-[#20140c] via-[#120a05] to-[#070302] overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none ${className}`}
    >
      {/* Kraft Warm Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5a93c12_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#e5a93c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container: Corrugated Delivery Suite (Inspired by Ref 2) */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: 3D Open Corrugated Box with Interior Typography (md:col-span-7) */}
        <div className="md:col-span-7 rounded-2xl bg-gradient-to-br from-[#3b2414] via-[#28170c] to-[#170c06] border-2 border-amber-500/40 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden">
          
          {/* Cardboard Texture Flute Lines Overlay */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_8px)] pointer-events-none opacity-40" />

          {/* Top Edge / Flap Spec */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-2 relative z-10 text-[9px] sm:text-[10px] font-mono text-amber-200">
            <span className="flex items-center gap-1.5 text-[#e5a93c] font-bold">
              <Box className="w-3.5 h-3.5" /> CORRUGATED E-COMMERCE SUITE
            </span>
            <span className="bg-black/60 px-2 py-0.5 rounded border border-amber-500/30 text-amber-300">
              FSC RECYCLED FLUTE
            </span>
          </div>

          {/* Interior Box Lid Graphic Art Message (Inspired by Ref 2 interior message) */}
          <div className="my-4 p-4 rounded-xl bg-[#1c0f07]/90 border border-amber-500/30 space-y-2 relative z-10 text-center">
            <span className="text-[8px] font-mono tracking-widest text-[#e5a93c] uppercase block">
              INNER LID EXPERIENCE
            </span>
            <div className="text-xl sm:text-2xl font-black text-amber-100 font-['Outfit'] tracking-tight">
              "Crafted with Passion & Precision."
            </div>
            <p className="text-[9px] sm:text-[10px] text-amber-300/80 font-mono max-w-sm mx-auto">
              Every detail is engineered for sustainable luxury, safe transit, and an unforgettable unboxing moment.
            </p>
            <div className="flex items-center justify-center gap-2 pt-1">
              <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span className="text-[9px] font-bold text-white tracking-wider font-['Outfit']">
                LIZZDO MEDIA
              </span>
            </div>
          </div>

          {/* Bottom Cardboard Info */}
          <div className="flex items-center justify-between text-[8px] font-mono text-amber-300/90 pt-1 border-t border-amber-500/30 relative z-10">
            <span>WATER-BASED SOY INKS</span>
            <span className="text-[#e5a93c] font-bold">100% BIODEGRADABLE</span>
          </div>
        </div>

        {/* Right Side: Accessories Stage - Tape Roll & Spice/Herb Tins (md:col-span-5) */}
        <div className="md:col-span-5 space-y-4">
          
          {/* 1. Branded Tape Roll (Inspired by Ref 2 round tape roll) */}
          <div className="p-3.5 rounded-2xl bg-[#26160b]/90 border border-amber-500/40 shadow-xl flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e5a93c] via-amber-600 to-amber-900 p-1 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(229,169,60,0.3)]">
              <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center">
                <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-mono uppercase text-[#e5a93c]">Reinforced Paper Tape</span>
              <div className="text-xs font-bold text-white font-['Outfit']">Continuous Pattern Tape</div>
              <div className="text-[8px] text-amber-300/80 font-mono">Gummed Kraft 50mm × 50m</div>
            </div>
          </div>

          {/* 2. Tin Container / Spice Box Pair */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#2a190e] border border-amber-500/30 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-full bg-neutral-900 border border-[#e5a93c] flex items-center justify-center p-0.5">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <div className="text-[9px] font-bold text-white font-['Outfit']">Tartare Spice Tin</div>
              <div className="text-[7px] text-amber-300 font-mono">Aluminum 60g</div>
            </div>

            <div className="p-3 rounded-xl bg-[#2a190e] border border-amber-500/30 text-center space-y-1">
              <div className="w-7 h-7 mx-auto rounded-full bg-neutral-900 border border-[#e5a93c] flex items-center justify-center p-0.5">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <div className="text-[9px] font-bold text-white font-['Outfit']">Herb Infusion Box</div>
              <div className="text-[7px] text-amber-300 font-mono">FSC 300GSM</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
