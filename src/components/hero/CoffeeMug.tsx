import React from 'react';
import { LizzdoLogo } from '../LizzdoLogo';
import { SiteSettings } from '../../types';

interface CoffeeMugProps {
  siteSettings?: SiteSettings;
  className?: string;
}

export const CoffeeMug: React.FC<CoffeeMugProps> = ({ siteSettings, className = '' }) => {
  return (
    <div 
      id="hero-coffee-mug"
      className={`relative select-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] hover:scale-105 transition-transform duration-300 ${className}`}
      aria-label="Lizzdo Media Branded Ceramic Mug"
    >
      <div className="relative w-full aspect-[1/1.05]">
        <svg viewBox="0 0 100 110" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mugBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e2330" />
              <stop offset="40%" stopColor="#12151e" />
              <stop offset="85%" stopColor="#0a0c12" />
              <stop offset="100%" stopColor="#1e2330" />
            </linearGradient>
            <linearGradient id="mugHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252b3b" />
              <stop offset="100%" stopColor="#0d0f17" />
            </linearGradient>
          </defs>

          {/* Mug Handle */}
          <path 
            d="M68 28 C92 28, 94 72, 66 78" 
            stroke="url(#mugHandleGrad)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />

          {/* Mug Main Body */}
          <path 
            d="M16 16 C16 16, 13 86, 21 96 C29 106, 61 106, 69 96 C77 86, 74 16, 74 16 Z" 
            fill="url(#mugBodyGrad)" 
            stroke="#2e3547" 
            strokeWidth="1.5" 
          />

          {/* Mug Inner Rim & Dark Espresso Surface */}
          <ellipse cx="45" cy="16" rx="29" ry="7.5" fill="#282f42" stroke="#3b445c" strokeWidth="1" />
          <ellipse cx="45" cy="17" rx="26" ry="5.5" fill="#08090d" />
          <ellipse cx="43" cy="18" rx="22" ry="4" fill="#170f08" opacity="0.9" />

          {/* Subtle Specular Highlights */}
          <path d="M22 28 C20 50, 22 80, 26 90" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Master Lizzdo Media Logo on Mug Front */}
        <div className="absolute top-[44%] left-[22%] w-[46%] flex flex-col items-center justify-center transform -rotate-1 pointer-events-none">
          <LizzdoLogo 
            size="xxs" 
            variant="mark-only" 
            logoSrc={siteSettings?.logo}
            markSrc={siteSettings?.logoMark}
            decorative={true}
          />
          <span className="text-[5.5px] sm:text-[6.5px] font-black text-white font-['Outfit'] tracking-tight mt-0.5">
            LIZZDO
          </span>
          <span className="text-[3.5px] sm:text-[4px] font-bold text-slate-400 font-mono tracking-[0.25em] -mt-0.5 uppercase">
            MEDIA
          </span>
        </div>
      </div>
    </div>
  );
};
