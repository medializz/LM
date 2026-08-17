import React from 'react';
import { Sparkles, Tag, Shield, Scissors, Award } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingHangTagsVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingHangTagsVisual: React.FC<PackagingHangTagsVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] bg-gradient-to-br from-[#0c2427] via-[#061618] to-[#020b0c] overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none ${className}`}
    >
      {/* Deep Teal & Gold Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf15_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#e5a93c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container: Suite of 3 Die-Cut Hangtags (Inspired by Ref 1) */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        
        {/* TAG 1: Shield Die-Cut Hang Tag with Gold Foil & Twine Cord */}
        <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
          {/* String Cord */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-amber-200/60 to-amber-600" />
          <div className="w-3.5 h-3.5 rounded-full border border-amber-400 bg-neutral-950 flex items-center justify-center -mt-1 shadow">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
          </div>

          {/* Shield Tag Body */}
          <div className="w-full max-w-[200px] h-[210px] rounded-b-3xl rounded-t-xl bg-gradient-to-br from-[#133c3f] via-[#0a2325] to-[#041011] border-2 border-teal-500/40 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.95)] flex flex-col justify-between relative overflow-hidden">
            {/* Gold foil border line */}
            <div className="absolute inset-2 rounded-b-2xl border border-[#e5a93c]/50 pointer-events-none" />

            <div className="text-center pt-2">
              <span className="text-[7.5px] font-mono text-[#e5a93c] tracking-widest uppercase">
                HERITAGE ARCHIVE
              </span>
            </div>

            <div className="my-auto flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e5a93c] to-amber-600 p-0.5 shadow-[0_0_15px_rgba(229,169,60,0.4)] flex items-center justify-center">
                <div className="w-full h-full bg-[#07191b] rounded-full flex items-center justify-center">
                  <LizzdoLogo variant="mark-only" size="xs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>
              <div className="text-[10px] font-bold text-white font-['Outfit'] tracking-wider">
                LIZZDO MEDIA
              </div>
            </div>

            <div className="text-center pb-2">
              <span className="text-[7px] font-mono text-teal-300">
                COTTON DUPLEX 600G
              </span>
            </div>
          </div>
        </div>

        {/* TAG 2: Circular Embossed Seal Coaster / Tag */}
        <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
          {/* String Cord */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-amber-200/60 to-amber-600" />
          <div className="w-3.5 h-3.5 rounded-full border border-amber-400 bg-neutral-950 flex items-center justify-center -mt-1 shadow">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
          </div>

          {/* Round Coaster Tag Body */}
          <div className="w-[190px] h-[190px] rounded-full bg-gradient-to-br from-[#194c50] via-[#0d2a2d] to-[#041213] border-2 border-teal-400/50 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Concentric Gold Circles */}
            <div className="absolute inset-3 rounded-full border border-[#e5a93c]/50 pointer-events-none" />
            <div className="absolute inset-5 rounded-full border border-[#e5a93c]/20 border-dashed pointer-events-none" />

            <div className="scale-90 mb-1">
              <LizzdoLogo variant="mark-only" size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
            </div>
            <div className="text-[11px] font-black text-white font-['Outfit'] tracking-widest uppercase text-center mt-1">
              AUTHENTIC
            </div>
            <div className="text-[7px] font-mono text-[#e5a93c] tracking-widest mt-0.5">
              EST. 2026
            </div>
          </div>
        </div>

        {/* TAG 3: Vertical Rectangular Hang Tag with Eyelet & Specs */}
        <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
          {/* String Cord */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-amber-200/60 to-amber-600" />
          <div className="w-3.5 h-3.5 rounded-full border border-amber-400 bg-neutral-950 flex items-center justify-center -mt-1 shadow">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e5a93c]" />
          </div>

          {/* Rectangular Tag Body */}
          <div className="w-full max-w-[200px] h-[210px] rounded-2xl bg-gradient-to-br from-[#123638] via-[#091f20] to-[#030e0f] border-2 border-teal-500/40 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.95)] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-teal-500/20 pb-2">
              <span className="text-[7px] font-mono text-[#e5a93c] uppercase font-bold">
                NO. 0826
              </span>
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            <div className="space-y-1 my-auto">
              <div className="text-xs font-bold text-white font-['Outfit']">
                Bespoke Swing Tag
              </div>
              <p className="text-[8px] text-teal-300 font-mono leading-relaxed">
                Brass metal eyelet, blind deboss crest, and matte velvet coating.
              </p>
            </div>

            <div className="flex items-center justify-between text-[7px] font-mono text-teal-200 pt-2 border-t border-teal-500/20">
              <span>HOT FOIL</span>
              <span className="text-[#e5a93c] font-bold">100% RECYCLED</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
