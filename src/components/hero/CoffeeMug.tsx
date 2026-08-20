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
      className={`relative select-none gpu-layer ${className}`}
      aria-label="Lizzdo Media Branded Ceramic Mug"
    >
      <div className="relative w-full aspect-[1/1.08]">
        <svg viewBox="0 0 110 120" className="w-full h-full" fill="none">
          <defs>
            {/* Ground Contact Soft Shadow */}
            <radialGradient id="mugGroundShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#000000" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="mugBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#252a3a" />
              <stop offset="30%" stopColor="#151824" />
              <stop offset="70%" stopColor="#0d0f16" />
              <stop offset="90%" stopColor="#08090d" />
              <stop offset="100%" stopColor="#1e2330" />
            </linearGradient>
            <linearGradient id="mugHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f374c" />
              <stop offset="60%" stopColor="#1a1f2c" />
              <stop offset="100%" stopColor="#0d0f17" />
            </linearGradient>
            <radialGradient id="coffeeSurface" cx="45%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#3d220f" />
              <stop offset="70%" stopColor="#1a0c04" />
              <stop offset="100%" stopColor="#0a0502" />
            </radialGradient>
          </defs>

          {/* Ground Contact Shadow beneath Mug */}
          <ellipse cx="50" cy="112" rx="42" ry="7" fill="url(#mugGroundShadow)" />

          {/* Mug Handle */}
          <path 
            d="M72 32 C100 32, 102 80, 70 86" 
            stroke="url(#mugHandleGrad)" 
            strokeWidth="9" 
            strokeLinecap="round" 
          />
          <path 
            d="M72 34 C94 34, 96 76, 72 82" 
            stroke="#0a0c12" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />

          {/* Mug Main Body */}
          <path 
            d="M18 20 C18 20, 14 96, 23 106 C32 116, 68 116, 77 106 C86 96, 82 20, 82 20 Z" 
            fill="url(#mugBodyGrad)" 
            stroke="#2e3547" 
            strokeWidth="1.5" 
          />

          {/* Mug Inner Rim & Dark Espresso Surface */}
          <ellipse cx="50" cy="20" rx="32" ry="8.5" fill="#282f42" stroke="#3b445c" strokeWidth="1.2" />
          <ellipse cx="50" cy="21" rx="29" ry="6.5" fill="#08090d" />
          <ellipse cx="48" cy="22" rx="25" ry="5" fill="url(#coffeeSurface)" />
          
          {/* Subtle Crema Swirl */}
          <path d="M40 22 C44 20.5, 52 20.5, 56 22" stroke="#663c1a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

          {/* Subtle Specular Highlights */}
          <path d="M24 32 C22 55, 24 88, 28 98" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 30 C28 50, 30 75, 33 88" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Master Lizzdo Media Logo on Mug Front */}
        <div className="absolute top-[45%] left-[23%] w-[48%] flex flex-col items-center justify-center transform -rotate-1 pointer-events-none">
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
          <span className="text-[3.5px] sm:text-[4px] font-bold text-[#ffbe1a] font-mono tracking-[0.25em] -mt-0.5 uppercase">
            MEDIA
          </span>
        </div>
      </div>
    </div>
  );
};
