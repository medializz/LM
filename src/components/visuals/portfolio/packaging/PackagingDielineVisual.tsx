import React from 'react';
import { Box, Scissors, Sparkles, Layers, QrCode } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingDielineVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingDielineVisual: React.FC<PackagingDielineVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[300px] bg-gradient-to-br from-[#180a22] via-[#0d0416] to-[#06010b] overflow-hidden flex items-center justify-center p-4 sm:p-6 select-none ${className}`}
    >
      {/* Background glow and subtle blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5a93c10_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#e5a93c]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container: Split 2D Dieline Net & 3D Box Mockup (Inspired by References 6 & 7) */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: 2D Unfolded Dieline Net Template (md:col-span-7) */}
        <div className="md:col-span-7 rounded-2xl bg-[#12061e]/90 border border-purple-500/40 p-4 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 text-[9px] sm:text-[10px] font-mono text-purple-300">
            <span className="flex items-center gap-1.5 text-[#e5a93c] font-bold">
              <Scissors className="w-3.5 h-3.5" /> 2D DIELINE NET // TUCK-END BOX
            </span>
            <span className="bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
              SCALE 1:1 // 350GSM
            </span>
          </div>

          {/* Dieline Blueprint vector layout */}
          <div className="relative w-full h-[180px] sm:h-[200px] mt-2 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Outer Cut lines (Solid) */}
              <polygon
                points="40,60 70,60 70,25 150,25 150,60 310,60 310,25 390,25 390,60 400,60 400,140 390,140 390,175 310,175 310,140 150,140 150,175 70,175 70,140 40,140 20,110 20,90"
                fill="#1f0933"
                stroke="#c084fc"
                strokeWidth="1.2"
              />

              {/* Fold lines (Dashed Gold) */}
              <line x1="70" y1="60" x2="70" y2="140" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="150" y1="60" x2="150" y2="140" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="230" y1="60" x2="230" y2="140" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="310" y1="60" x2="310" y2="140" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="70" y1="60" x2="390" y2="60" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />
              <line x1="70" y1="140" x2="390" y2="140" stroke="#e5a93c" strokeWidth="1.2" strokeDasharray="3,3" />

              {/* Front Panel (150 to 230) Artwork */}
              <rect x="155" y="65" width="70" height="70" rx="3" fill="#2d0f48" />
              <circle cx="190" cy="95" r="14" fill="#170626" stroke="#e5a93c" strokeWidth="1" />
              <text x="190" y="120" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontFamily="Outfit" fontWeight="bold">
                LIZZDO
              </text>
              <text x="190" y="128" textAnchor="middle" fill="#c084fc" fontSize="5" fontFamily="monospace">
                GOLDEN BLEND
              </text>

              {/* Back Panel (310 to 390) Nutrition Table & Barcode */}
              <rect x="315" y="65" width="70" height="70" rx="3" fill="#240b3b" />
              <text x="320" y="75" fill="#e5a93c" fontSize="5.5" fontFamily="monospace" fontWeight="bold">
                NUTRITION FACTS
              </text>
              <line x1="320" y1="78" x2="380" y2="78" stroke="#a855f7" strokeWidth="0.5" />
              <text x="320" y="85" fill="#e9d5ff" fontSize="4.5" fontFamily="monospace">
                Serving Size: 1 Box
              </text>
              <text x="320" y="93" fill="#e9d5ff" fontSize="4.5" fontFamily="monospace">
                Energy: 100% Purity
              </text>
              {/* Barcode Mock */}
              <rect x="320" y="108" width="40" height="18" fill="#ffffff" rx="1" />
              <line x1="324" y1="110" x2="324" y2="124" stroke="#000000" strokeWidth="1" />
              <line x1="327" y1="110" x2="327" y2="124" stroke="#000000" strokeWidth="1.5" />
              <line x1="331" y1="110" x2="331" y2="124" stroke="#000000" strokeWidth="0.8" />
              <line x1="334" y1="110" x2="334" y2="124" stroke="#000000" strokeWidth="2" />
              <line x1="339" y1="110" x2="339" y2="124" stroke="#000000" strokeWidth="1" />
              <line x1="343" y1="110" x2="343" y2="124" stroke="#000000" strokeWidth="1.8" />
              <line x1="348" y1="110" x2="348" y2="124" stroke="#000000" strokeWidth="1" />
              <line x1="353" y1="110" x2="353" y2="124" stroke="#000000" strokeWidth="2.2" />

              {/* Side Panels */}
              <text x="110" y="100" textAnchor="middle" fill="#a855f7" fontSize="5.5" fontFamily="monospace">
                LEFT FLAP
              </text>
              <text x="270" y="100" textAnchor="middle" fill="#a855f7" fontSize="5.5" fontFamily="monospace">
                RIGHT FLAP
              </text>
            </svg>

            {/* Floating Dieline Legend */}
            <div className="absolute bottom-1 right-2 flex items-center gap-3 text-[7px] font-mono text-purple-200 bg-black/70 px-2 py-1 rounded-md border border-purple-500/30">
              <span className="flex items-center gap-1">
                <span className="w-2 h-0.5 bg-[#c084fc]" /> Cut Line
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-0.5 bg-[#e5a93c] border-dashed" /> Crease / Fold
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Folded Luxury Box Mockup (md:col-span-5) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="w-[180px] sm:w-[210px] h-[210px] sm:h-[240px] rounded-2xl bg-gradient-to-br from-[#3b1260] via-[#22093a] to-[#110320] border-2 border-purple-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.98),0_0_35px_rgba(168,85,247,0.35)] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            
            {/* Top Gold Bevel */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-purple-400/40 via-[#e5a93c]/30 to-purple-400/40 border-b border-purple-300/40" />

            <div className="flex items-center justify-between pt-3">
              <span className="text-[8px] font-mono text-[#e5a93c] font-bold bg-[#e5a93c]/15 px-2 py-0.5 rounded-full border border-[#e5a93c]/30">
                FOLDED 3D
              </span>
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            {/* Center Foil Floral / Geometric Insignia */}
            <div className="my-auto text-center space-y-1.5 py-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#e5a93c] to-amber-600 p-0.5 shadow-[0_0_20px_rgba(229,169,60,0.4)] flex items-center justify-center">
                <div className="w-full h-full bg-[#1e0730] rounded-[14px] flex items-center justify-center">
                  <LizzdoLogo variant="mark-only" size="sm" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                </div>
              </div>
              <div className="text-white font-extrabold text-[12px] font-['Outfit'] tracking-wider uppercase">
                GOLDEN TEA
              </div>
              <div className="text-purple-300 text-[8px] font-mono">
                HERBAL CRAFT SELECTION
              </div>
            </div>

            {/* Bottom Spec */}
            <div className="pt-2 border-t border-purple-400/30 flex items-center justify-between text-[7.5px] font-mono text-purple-200">
              <span>HOT STAMP FOIL</span>
              <span className="text-[#e5a93c] font-bold">24K FINISH</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
