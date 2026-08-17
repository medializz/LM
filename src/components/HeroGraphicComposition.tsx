import React from 'react';
import { motion } from 'motion/react';
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
      className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] h-[340px] xs:h-[390px] sm:h-[460px] md:h-[500px] lg:h-[530px] mx-auto select-none overflow-visible"
      role="img"
      aria-label="Lizzdo Media Creative Design Ecosystem showing brand identity presentation, full laptop mockup, smartphone social feed, designer tablet, coffee mug, and brand assets"
    >
      {/* 1. AMBIENT BACKDROP GLOW & GOLD SPLASH TEXTURE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gold Radial Glow */}
        <div className="absolute top-[8%] right-[15%] w-[320px] h-[280px] rounded-full bg-[#ffbe1a]/18 blur-[70px]" />
        {/* Deep Violet / Purple Ambient Glow */}
        <div className="absolute bottom-[10%] right-[10%] w-[260px] h-[260px] rounded-full bg-purple-600/15 blur-[70px]" />
        
        {/* Dynamic Golden Paint/Brush Splash Graphic */}
        <svg 
          className="absolute top-[2%] left-[10%] w-[82%] h-[68%] opacity-95 filter drop-shadow-[0_0_22px_rgba(255,190,26,0.35)] pointer-events-none"
          viewBox="0 0 500 300" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M45 140 C95 75, 175 115, 235 55 C295 5, 375 35, 455 65 C485 75, 475 115, 435 135 C395 155, 445 205, 385 225 C315 245, 265 195, 195 225 C125 255, 75 215, 45 140 Z" 
            fill="#ffbe1a" 
            fillOpacity="0.9"
          />
          {/* Splash Droplets & Paint Spatters */}
          <circle cx="115" cy="45" r="7" fill="#ffbe1a" />
          <circle cx="85" cy="70" r="4" fill="#ffbe1a" />
          <circle cx="425" cy="30" r="8" fill="#ffbe1a" />
          <circle cx="465" cy="175" r="5.5" fill="#ffbe1a" />
          <circle cx="335" cy="255" r="6" fill="#ffbe1a" />
          <circle cx="155" cy="265" r="5" fill="#ffbe1a" />
          {/* Subtle distress texture lines */}
          <path d="M65 115 L35 125 M145 35 L165 25 M445 45 L465 40" stroke="#ffbe1a" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>

        {/* Vector orbital curves & Halftone dots */}
        <svg className="absolute top-[0%] right-[0%] w-[48%] h-[60%] opacity-45 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 C80 60, 160 80, 190 20" stroke="#ffbe1a" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="190" cy="20" r="3" fill="#ffbe1a" />
          <path d="M140 160 C180 140, 190 100, 180 60" stroke="#a855f7" strokeWidth="1.5" />
          {/* Halftone Dot Grid */}
          <circle cx="160" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="170" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="180" cy="80" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="160" cy="90" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="170" cy="90" r="1.5" fill="#ffbe1a" opacity="0.6" />
          <circle cx="180" cy="90" r="1.5" fill="#ffbe1a" opacity="0.6" />
        </svg>
      </div>

      {/* 2. REFINED VECTOR DESIGN ARROW (Communicating Creative Direction & Vector Craft) */}
      <VectorArrowGuide className="absolute top-[4%] left-[6%] w-[42%] h-[32%] z-15 pointer-events-none" />

      {/* 3. TOP FLOATING 3D GOLD SPHERE */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[0%] left-[40%] w-7 h-7 sm:w-8 sm:h-8 rounded-full z-20 shadow-[0_6px_16px_rgba(0,0,0,0.6)] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, #fff5a6 0%, #ffbe1a 45%, #b47400 85%, #4a2e00 100%)"
        }}
      />

      {/* 4. FLOATING 3D PURPLE SPHERE (Balanced mid-right) */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-[8%] right-[24%] w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full z-22 shadow-[0_8px_18px_rgba(0,0,0,0.7)] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, #d8b4fe 0%, #a855f7 50%, #6b21a8 85%, #3b0764 100%)"
        }}
      />

      {/* 5. LUXURY BRANDED PRESENTATION BOX (Standing back center-left) */}
      <div 
        className="absolute top-[1%] left-[26%] w-[33%] h-[52%] z-10 rounded-lg shadow-[0_20px_45px_-10px_rgba(0,0,0,0.95)] overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500"
        style={{
          background: "linear-gradient(145deg, #1e2029 0%, #111217 60%, #0a0b0e 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        {/* Subtle top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Box side fold depth */}
        <div className="absolute top-0 right-0 w-[12%] h-full bg-black/40 border-l border-white/5" />
        
        {/* Master Brand Logo foiled prominently in upper box */}
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

      {/* 6. COLOR SWATCH FAN (Pantone style cards fanning out) */}
      <div className="absolute top-[16%] left-[14%] z-14 flex -space-x-3 sm:-space-x-3.5 transform -rotate-12 hover:rotate-[-8deg] transition-transform duration-300 pointer-events-none">
        {[
          { name: "Magenta", color: "#e11d48", shade: "Pantone 219C" },
          { name: "Cyan", color: "#06b6d4", shade: "Pantone 312C" },
          { name: "Cobalt", color: "#2563eb", shade: "Pantone 286C" },
          { name: "Lizzdo Gold", color: "#ffbe1a", shade: "Core Accent" },
          { name: "Purple", color: "#9333ea", shade: "Pantone 266C" }
        ].map((swatch, idx) => (
          <div 
            key={idx}
            className="w-5.5 sm:w-7 h-15 sm:h-20 rounded-md bg-white p-0.5 sm:p-1 flex flex-col justify-between shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-slate-200/20 transform"
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

      {/* 7. DIGITAL MARKETING ANALYTICS BADGE (Far Right Background) */}
      <div 
        className="absolute top-[6%] right-[1%] w-[24%] sm:w-[22%] aspect-[1.3/1] z-12 rounded-lg bg-[#12141c] p-1.5 sm:p-2 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
      >
        <span className="text-[5.5px] sm:text-[7px] font-bold text-white block font-['Outfit'] leading-tight">Grow Your Brand</span>
        <span className="text-[3.5px] sm:text-[4.5px] text-slate-400 block mb-0.5 font-mono">Digital Marketing</span>

        {/* Rising Golden Bar Chart */}
        <div className="flex items-end justify-between gap-0.5 sm:gap-1 h-7 sm:h-9 pt-0.5 border-b border-white/10">
          <div className="w-1.5 h-[25%] bg-[#ffbe1a]/30 rounded-t-sm" />
          <div className="w-1.5 h-[45%] bg-[#ffbe1a]/50 rounded-t-sm" />
          <div className="w-1.5 h-[65%] bg-[#ffbe1a]/70 rounded-t-sm" />
          <div className="w-1.5 h-[85%] bg-[#ffbe1a]/90 rounded-t-sm" />
          <div className="w-1.5 h-[100%] bg-[#ffbe1a] rounded-t-sm shadow-[0_0_6px_#ffbe1a]" />
        </div>
      </div>

      {/* 8. SMARTPHONE MOCKUP - SOCIAL MEDIA FEED & GOURMET FOOD AD CREATIVE (Upper Right) */}
      <div className="absolute top-[0%] right-[11%] sm:right-[13%] w-[22%] sm:w-[20%] z-23 transform rotate-4">
        <PhoneSocialMockup 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 9. DESIGNER TABLET - BRAND IDENTITY CANVAS (Mid-Left Foreground) */}
      <div className="absolute top-[26%] left-[1%] sm:left-[2%] w-[48%] sm:w-[46%] z-24">
        <DesignerTablet 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 10. LIZZDO MEDIA BRAND CARD MOCKUP (Resting between tablet & laptop) */}
      <div className="absolute top-[36%] left-[37%] w-[20%] sm:w-[19%] z-26">
        <BrandCard 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 11. REFINED GRAPHIC DESIGN STYLUS PEN (Resting with Tablet Canvas) */}
      <StylusPen 
        className="absolute top-[37%] left-[18%] sm:left-[20%] w-[22%] h-4 sm:h-5 z-28 transform -rotate-[35deg]"
      />

      {/* 12. FULL LAPTOP MOCKUP - CREATIVE DIGITAL SOLUTIONS & WAVE ARTWORK (Mid-Right Foreground) */}
      <div className="absolute top-[22%] right-[0%] w-[58%] sm:w-[56%] z-22">
        <LaptopBrandPresentation 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

      {/* 13. BRANDED MATTE BLACK CERAMIC MUG (Bottom-Right Foreground) */}
      <div className="absolute bottom-[2%] right-[0%] w-[16%] sm:w-[14%] z-28">
        <CoffeeMug 
          siteSettings={siteSettings}
          className="w-full"
        />
      </div>

    </div>
  );
};
