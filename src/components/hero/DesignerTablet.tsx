import React from 'react';
import { LizzdoLogo } from '../LizzdoLogo';
import { SiteSettings } from '../../types';

interface DesignerTabletProps {
  siteSettings?: SiteSettings;
  className?: string;
}

export const DesignerTablet: React.FC<DesignerTabletProps> = ({ 
  siteSettings, 
  className = '' 
}) => {
  return (
    <div 
      id="hero-designer-tablet"
      className={`relative aspect-[1.32/1] rounded-2xl bg-[#141722] p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 gpu-layer ${className}`}
      aria-label="Lizzdo Media Graphic Design Tablet Interface"
    >
      {/* Tablet Bezel & Camera */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-600 ring-1 ring-slate-800" />
      
      {/* Inner Design Canvas */}
      <div className="relative w-full h-full rounded-xl bg-[#0b0d14] p-2.5 sm:p-3.5 overflow-hidden flex flex-col justify-between border border-white/5">
        
        {/* Left Software Toolbar */}
        <div className="absolute top-2.5 left-2 w-5 sm:w-6 bg-[#161a26] rounded-md p-1 flex flex-col items-center gap-1.5 border border-white/10 z-20 shadow-md">
          {/* Active Selection Tool */}
          <div className="w-3.5 h-3.5 rounded bg-[#ffbe1a] text-black flex items-center justify-center shadow-[0_0_6px_#ffbe1a]">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2 L18 10 L11 12 L8 19 Z" />
            </svg>
          </div>
          {/* Pen Tool */}
          <div className="w-3.5 h-3.5 text-slate-400 flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            </svg>
          </div>
          {/* Text Tool */}
          <span className="text-[9px] font-black text-slate-400 font-serif">T</span>
          {/* Vector Shape */}
          <div className="w-2.5 h-2.5 border border-slate-400 rounded-[1px]" />
          {/* Eyedropper */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a]" />
        </div>

        {/* Main Tablet Canvas Artwork */}
        <div className="ml-7 flex flex-col justify-between h-full relative z-10">
          
          {/* Top Label & Brand Tagline */}
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[12px] sm:text-[15px] md:text-[17px] font-black text-white tracking-tight font-['Outfit'] block leading-none">
                BRAND
              </span>
              <span className="text-[12px] sm:text-[15px] md:text-[17px] font-black text-white tracking-tight font-['Outfit'] block leading-tight">
                IDENTITY
              </span>
              <div className="inline-flex items-center gap-1 mt-1">
                <span className="text-[7px] sm:text-[8px] font-bold text-[#ffbe1a] bg-[#ffbe1a]/15 px-2 py-0.5 rounded-full border border-[#ffbe1a]/30">
                  Design That Defines You.
                </span>
              </div>
            </div>

            {/* Master Brand Mark */}
            <div className="bg-white/5 p-1 rounded-lg border border-white/5">
              <LizzdoLogo 
                size="xs" 
                variant="mark-only" 
                logoSrc={siteSettings?.logo} 
                markSrc={siteSettings?.logoMark} 
                decorative={true} 
              />
            </div>
          </div>

          {/* Vector Path Construction Guides & Bezier Handles with Pen Tool Nib */}
          <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-auto">
            <svg className="w-full h-full" viewBox="0 0 160 70" fill="none">
              {/* Bounding Box Guides */}
              <rect x="15" y="10" width="130" height="48" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" />
              <rect x="13" y="8" width="4" height="4" fill="#ffbe1a" />
              <rect x="143" y="8" width="4" height="4" fill="#ffbe1a" />
              <rect x="13" y="56" width="4" height="4" fill="#ffbe1a" />
              <rect x="143" y="56" width="4" height="4" fill="#ffbe1a" />

              {/* Tangent Guide Handles */}
              <line x1="25" y1="52" x2="55" y2="20" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="135" y1="52" x2="105" y2="20" stroke="#ffbe1a" strokeWidth="1" strokeDasharray="2 2" />

              {/* Tangent Bar Across Active Anchor Vertex */}
              <line x1="60" y1="21" x2="100" y2="21" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 2" />
              <circle cx="60" cy="21" r="2.5" fill="#38bdf8" />
              <circle cx="100" cy="21" r="2.5" fill="#38bdf8" />

              {/* Vector Bezier Curve */}
              <path d="M25 52 C55 14, 105 14, 135 52" stroke="#ffbe1a" strokeWidth="2.5" strokeLinecap="round" />

              {/* Endpoint Anchor Nodes */}
              <circle cx="25" cy="52" r="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1" />
              <circle cx="135" cy="52" r="3" fill="#ffbe1a" stroke="#ffffff" strokeWidth="1" />
              <circle cx="55" cy="20" r="3" fill="#a855f7" />
              <circle cx="105" cy="20" r="3" fill="#ffbe1a" />

              {/* Active Center Anchor Node */}
              <rect x="78" y="19" width="4" height="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />

              {/* VECTOR PEN TOOL NIB CURSOR (Active Drawing Instrument) */}
              <g transform="translate(80, 21) rotate(-35) scale(0.65)">
                {/* Pen Nib Body (Metallic Chrome / Gold Tip) */}
                <path 
                  d="M 0 0 L -8 18 L -6 28 L 6 28 L 8 18 Z" 
                  fill="url(#penNibGrad)" 
                  stroke="#1e293b" 
                  strokeWidth="0.8"
                />
                {/* Nib Shaft / Collar */}
                <path d="M -6 28 L -5 36 L 5 36 L 6 28 Z" fill="#0f172a" />
                <rect x="-6" y="27" width="12" height="2" fill="#ffbe1a" />
                
                {/* Nib Slit & Center Breather Hole */}
                <line x1="0" y1="0" x2="0" y2="15" stroke="#0f172a" strokeWidth="0.8" />
                <circle cx="0" cy="15" r="1.5" fill="#0f172a" />
                
                {/* Specular Highlight on Nib Blade */}
                <path d="M 0 0 L -7 17 L -1 17 Z" fill="#ffffff" opacity="0.35" />
              </g>

              {/* Linear Gradient definition for Pen Nib */}
              <defs>
                <linearGradient id="penNibGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffbe1a" />
                  <stop offset="30%" stopColor="#f8fafc" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom Status Bar */}
          <div className="flex items-center justify-between text-[6px] sm:text-[7px] text-slate-400 font-mono pt-1 border-t border-white/5">
            <span className="text-[#ffbe1a] font-semibold">100% Vector Path</span>
            <span>LIZZDO STUDIO</span>
          </div>

        </div>
      </div>
    </div>
  );
};
