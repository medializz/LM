import React from 'react';
import { Sparkles, Shield, Droplets, CheckCircle2, Leaf } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingPouchVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingPouchVisual: React.FC<PackagingPouchVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] bg-gradient-to-br from-[#0c1f17] via-[#06140f] to-[#030906] overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none ${className}`}
    >
      {/* Background sage glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#e5a93c]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Main Split Container: 2D Flat Graphic Layout (Left) + 3D Stand-Up Pouch (Right) (Inspired by Ref 9) */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: 2D Flat Packaging Graphic Artwork Layout (md:col-span-6) */}
        <div className="md:col-span-6 rounded-2xl bg-[#0f281e]/90 border border-emerald-500/40 p-4 sm:p-5 shadow-2xl space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-[9px] sm:text-[10px] font-mono text-emerald-300">
            <span className="flex items-center gap-1.5 text-[#e5a93c] font-bold">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" /> 2D SURFACE ARTWORK
            </span>
            <span className="bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-200">
              MATTE POUCH // 250G
            </span>
          </div>

          {/* Graphic Artwork Canvas */}
          <div className="rounded-xl bg-gradient-to-b from-[#143629] to-[#0a1e16] border border-emerald-500/30 p-4 space-y-3 relative overflow-hidden">
            {/* Top Brand Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <div>
                  <div className="text-[10px] font-black text-white font-['Outfit'] tracking-wider">
                    LIZZDO HARVEST
                  </div>
                  <div className="text-[7px] text-emerald-300 font-mono">
                    ORGANIC BOTANICAL SERIES
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c] flex items-center justify-center p-1 text-[7px] font-bold text-[#e5a93c] font-mono text-center leading-none shadow-[0_0_8px_#e5a93c]">
                100% PURE
              </div>
            </div>

            {/* Middle Illustration / Graphic Feature Area */}
            <div className="h-24 rounded-lg bg-emerald-950/70 border border-emerald-500/20 p-2 flex items-center justify-between relative overflow-hidden">
              <div className="space-y-1 z-10">
                <span className="text-[7px] font-mono uppercase text-[#e5a93c] bg-[#e5a93c]/10 px-1.5 py-0.5 rounded border border-[#e5a93c]/30 inline-block">
                  PREMIUM GRADE A
                </span>
                <div className="text-white font-bold text-xs font-['Outfit']">
                  Raw Pistachio & Botanical Seeds
                </div>
                <div className="text-[7.5px] text-emerald-300/90 font-mono">
                  Naturally Sun-Dried • Gluten Free
                </div>
              </div>

              {/* Vector Botanical Graphic */}
              <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-400/40 flex items-center justify-center relative shrink-0">
                <Leaf className="w-8 h-8 text-emerald-400 opacity-90" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#e5a93c] text-black font-bold text-[6px] flex items-center justify-center font-mono shadow-md">
                  FSC
                </div>
              </div>
            </div>

            {/* Bottom Bar: Net Wt & Certification Seals */}
            <div className="flex items-center justify-between text-[8px] font-mono text-emerald-200 pt-1 border-t border-emerald-500/20">
              <span>NET WT 250G (8.8 OZ)</span>
              <span className="text-[#e5a93c] font-bold">RECYCLABLE FOIL</span>
            </div>
          </div>
        </div>

        {/* Right Side: Realistic 3D Stand-Up Pouch Mockup with ground reflection (md:col-span-6) */}
        <div className="md:col-span-6 flex flex-col items-center justify-center relative">
          
          {/* 3D Pouch Container */}
          <div className="w-[170px] sm:w-[200px] h-[240px] sm:h-[270px] relative z-20 group-hover:scale-105 transition-transform duration-500">
            {/* Top Zipper Seal Ridge & Tear Notch */}
            <div className="w-full h-5 rounded-t-lg bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950 border-t border-x border-emerald-400/50 flex items-center justify-between px-2.5 shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60 border border-emerald-300" />
              <div className="h-0.5 w-16 bg-emerald-300/50 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-black/60 border border-emerald-300" />
            </div>

            {/* Pouch Main Body */}
            <div className="w-full h-[215px] sm:h-[245px] rounded-b-2xl bg-gradient-to-b from-[#133a2c] via-[#091f16] to-[#040f0a] border-x border-b-2 border-emerald-400/50 shadow-[0_30px_60px_rgba(0,0,0,0.95)] p-3.5 flex flex-col justify-between relative overflow-hidden">
              {/* Soft Surface Light Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Pouch Header */}
              <div className="flex items-center justify-between">
                <span className="text-[7.5px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                  SEALED FOR FRESHNESS
                </span>
                <div className="scale-75">
                  <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>

              {/* Pouch Center Motif */}
              <div className="my-auto text-center space-y-1.5">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/30 to-[#e5a93c]/30 border border-[#e5a93c]/50 flex items-center justify-center p-1 shadow-lg">
                  <LizzdoLogo variant="mark-only" size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
                <div className="text-[11px] font-black text-white font-['Outfit'] tracking-wider uppercase drop-shadow">
                  LIZZDO HARVEST
                </div>
                <div className="text-[7.5px] text-emerald-300 font-mono">
                  BARRIER ZIPPER POUCH
                </div>
              </div>

              {/* Pouch Bottom Spec */}
              <div className="pt-2 border-t border-emerald-500/30 flex items-center justify-between text-[7.5px] font-mono text-emerald-200">
                <span>NET WT 250G</span>
                <span className="text-[#e5a93c] font-bold">100% AIRTIGHT</span>
              </div>
            </div>
          </div>

          {/* Soft Ground Floor Reflection */}
          <div className="w-48 h-6 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent blur-md rounded-full mt-[-10px] z-10" />
        </div>

      </div>
    </div>
  );
};
