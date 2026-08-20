import React from 'react';
import { SiteSettings } from '../types';
import { LizzdoLogo } from './LizzdoLogo';
import { BrandCard } from './hero/BrandCard';
import { LaptopBrandPresentation } from './hero/LaptopBrandPresentation';
import { PhoneSocialMockup } from './hero/PhoneSocialMockup';
import { StylusPen } from './hero/StylusPen';
import { VectorArrowGuide } from './hero/VectorArrowGuide';
import { DesignerTablet } from './hero/DesignerTablet';
import { CoffeeMug } from './hero/CoffeeMug';

interface HeroGraphicCompositionProps {
  siteSettings?: SiteSettings;
}

export const HeroGraphicComposition: React.FC<HeroGraphicCompositionProps> = ({ siteSettings }) => {
  return (
    <div 
      id="hero-creative-composition"
      className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] h-[320px] xs:h-[360px] sm:h-[460px] md:h-[500px] lg:h-[530px] mx-auto select-none overflow-hidden sm:overflow-visible gpu-layer"
      role="img"
      aria-label="Lizzdo Media Creative Design Ecosystem showing brand identity presentation, full laptop mockup, smartphone social feed, designer tablet, coffee cup, and brand assets"
    >
      {/* 1. AMBIENT BACKDROP GLOW & GOLD SPLASH TEXTURE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gold Radial Glow */}
        <div className="absolute top-[8%] right-[15%] w-[260px] sm:w-[300px] h-[220px] sm:h-[260px] rounded-full ambient-glow-gold pointer-events-none" />
        {/* Deep Violet / Purple Ambient Glow */}
        <div className="absolute bottom-[10%] right-[10%] w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] rounded-full ambient-glow-purple pointer-events-none" />
        
        {/* Dynamic Golden Paint/Brush Splash Graphic */}
        <svg 
          className="absolute top-[2%] left-[10%] w-[82%] h-[68%] opacity-90 pointer-events-none"
          viewBox="0 0 500 300" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M45 140 C95 75, 175 115, 235 55 C295 5, 375 35, 455 65 C485 75, 475 115, 435 135 C395 155, 445 205, 385 225 C315 245, 265 195, 195 225 C125 255, 75 215, 45 140 Z" 
            fill="#ffbe1a" 
            fillOpacity="0.85"
          />
          {/* Splash Droplets & Paint Spatters */}
          <circle cx="115" cy="45" r="7" fill="#ffbe1a" />
          <circle cx="85" cy="70" r="4" fill="#ffbe1a" />
          <circle cx="425" cy="30" r="8" fill="#ffbe1a" />
          <circle cx="465" cy="175" r="5.5" fill="#ffbe1a" />
          <circle cx="335" cy="255" r="6" fill="#ffbe1a" />
          <circle cx="155" cy="265" r="5" fill="#ffbe1a" />
        </svg>

        {/* Vector orbital curves & Halftone dots */}
        <svg className="hidden sm:block absolute top-[0%] right-[0%] w-[48%] h-[60%] opacity-40 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 C80 60, 160 80, 190 20" stroke="#ffbe1a" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="190" cy="20" r="3" fill="#ffbe1a" />
          <path d="M140 160 C180 140, 190 100, 180 60" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="160" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="170" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="180" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
        </svg>
      </div>

      {/* 2. REFINED VECTOR DESIGN ARROW */}
      <VectorArrowGuide className="hidden sm:block absolute top-[4%] left-[6%] w-[42%] h-[32%] z-15 pointer-events-none" />

      {/* 3. LUXURY BRANDED PRESENTATION BOX */}
      <div 
        className="absolute top-[1%] left-[26%] w-[33%] h-[52%] z-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.9)] overflow-hidden transform rotate-0 sm:-rotate-2 transition-transform duration-500 gpu-layer"
        style={{
          background: "linear-gradient(145deg, #1e2029 0%, #111217 60%, #0a0b0e 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[12%] h-full bg-black/40 border-l border-white/5" />
        
        <div className="absolute inset-x-0 top-0 pt-3 sm:pt-4 px-3 flex flex-col items-center justify-start z-10">
          <LizzdoLogo 
            size="sm" 
            variant="full" 
            logoSrc={siteSettings?.logo} 
            markSrc={siteSettings?.logoMark} 
            decorative={true} 
          />
          <span className="text-[6px] sm:text-[7.5px] font-mono text-[#ffbe1a] font-bold mt-1 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-full border border-[#ffbe1a]/20">
            Identity Systems
          </span>
        </div>
      </div>

      {/* 4. COLOR SWATCH FAN (Pantone style cards) */}
      <div className="hidden sm:flex absolute top-[16%] left-[14%] z-14 -space-x-3 sm:-space-x-3.5 transform -rotate-12 pointer-events-none gpu-layer">
        {[
          { name: "Magenta", color: "#e11d48", shade: "Pantone 219C" },
          { name: "Cyan", color: "#06b6d4", shade: "Pantone 312C" },
          { name: "Cobalt", color: "#2563eb", shade: "Pantone 286C" },
          { name: "Lizzdo Gold", color: "#ffbe1a", shade: "Core Accent" },
          { name: "Purple", color: "#9333ea", shade: "Pantone 266C" }
        ].map((swatch, idx) => (
          <div 
            key={idx}
            className="w-5.5 sm:w-7 h-15 sm:h-20 rounded-md bg-white p-0.5 sm:p-1 flex flex-col justify-between shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-slate-200/20"
            style={{ transform: `rotate(${idx * 4 - 8}deg)` }}
          >
            <div className="w-full h-[62%] rounded-sm" style={{ backgroundColor: swatch.color }} />
            <div className="h-[34%] flex flex-col justify-end">
              <span className="text-[4px] sm:text-[5px] font-bold text-slate-800 leading-tight font-['Outfit']">LIZZDO</span>
              <span className="text-[3.5px] sm:text-[4px] text-slate-500 font-mono">{swatch.shade}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 5. SMARTPHONE MOCKUP - SOCIAL MEDIA FEED (Upper Right) */}
      <div className="absolute top-[0%] right-[8%] sm:right-[13%] w-[24%] sm:w-[20%] z-23 transform rotate-0 sm:rotate-4 gpu-layer">
        <PhoneSocialMockup 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 6. DESIGNER TABLET - BRAND IDENTITY CANVAS (Mid-Left Foreground) */}
      <div className="absolute top-[24%] left-[1%] sm:left-[2%] w-[50%] sm:w-[46%] z-24 gpu-layer">
        <DesignerTablet 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 7. LIZZDO MEDIA BRAND CARD MOCKUP (Resting between tablet & laptop) */}
      <div className="absolute top-[36%] left-[37%] w-[22%] sm:w-[19%] z-26 gpu-layer">
        <BrandCard 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 8. REFINED GRAPHIC DESIGN STYLUS PEN */}
      <StylusPen 
        className="hidden sm:block absolute top-[37%] left-[18%] sm:left-[20%] w-[22%] h-4 sm:h-5 z-28 transform -rotate-[35deg] gpu-layer"
      />

      {/* 9. FULL LAPTOP MOCKUP - CREATIVE DIGITAL SOLUTIONS (Mid-Right Foreground) */}
      <div className="absolute top-[22%] right-[0%] w-[58%] sm:w-[56%] z-22 gpu-layer">
        <LaptopBrandPresentation 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 10. RESTORED BRANDED COFFEE CUP - PLACED NATURALLY NEAR THE LAPTOP */}
      <div 
        id="hero-coffee-cup-container"
        className="block absolute bottom-[0%] xs:bottom-[1%] sm:bottom-[2%] right-[1%] xs:right-[1.5%] sm:right-[2%] w-[14.5%] xs:w-[14%] sm:w-[13.5%] md:w-[13%] lg:w-[14%] z-28 gpu-layer"
      >
        <CoffeeMug 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

    </div>
  );
};
