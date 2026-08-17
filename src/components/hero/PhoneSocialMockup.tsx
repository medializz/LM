import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import { LizzdoLogo } from '../LizzdoLogo';
import { SiteSettings } from '../../types';

interface PhoneSocialMockupProps {
  siteSettings?: SiteSettings;
  className?: string;
}

export const PhoneSocialMockup: React.FC<PhoneSocialMockupProps> = ({ 
  siteSettings, 
  className = '' 
}) => {
  return (
    <motion.div 
      id="phone-social-mockup"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`relative select-none ${className}`}
      aria-label="Lizzdo Media Smartphone Social Media & Food Creative Presentation"
    >
      {/* Smartphone Outer Chassis & Metallic Edge */}
      <div className="w-full aspect-[9/18.5] rounded-[24px] sm:rounded-[28px] bg-[#1a1d28] p-1.5 sm:p-2 border-[2px] sm:border-[2.5px] border-slate-600/80 shadow-[0_30px_70px_rgba(0,0,0,0.98)] relative overflow-hidden flex flex-col justify-between">
        
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-2.5 sm:h-3 bg-black rounded-full z-30 flex items-center justify-between px-1.5 border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#11131a] ring-1 ring-slate-800" />
          <div className="w-1 h-1 rounded-full bg-blue-500/80" />
        </div>

        {/* Screen Display */}
        <div className="relative w-full h-full rounded-[18px] sm:rounded-[22px] bg-[#07090e] p-1.5 sm:p-2 overflow-hidden flex flex-col justify-between border border-white/5 pt-5 sm:pt-6">
          
          {/* Top Social Profile Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1 z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#ffbe1a] to-amber-400 p-[1.5px] flex items-center justify-center shadow-[0_1px_6px_rgba(255,190,26,0.4)] overflow-hidden">
                <div className="w-full h-full rounded-full bg-[#0a0c13] flex items-center justify-center p-0.5">
                  <LizzdoLogo 
                    size="xxs" 
                    variant="mark-only" 
                    logoSrc={siteSettings?.logo} 
                    markSrc={siteSettings?.logoMark} 
                    decorative={true} 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white leading-none">lizzdo.media</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 text-[3.5px] text-white flex items-center justify-center font-bold">✓</span>
                </div>
                <span className="text-[4px] sm:text-[5px] text-slate-400">Creative Agency</span>
              </div>
            </div>
            <span className="text-[5px] sm:text-[6px] text-black font-bold bg-[#ffbe1a] px-1.5 py-0.5 rounded-full shadow-[0_1px_4px_rgba(255,190,26,0.5)]">
              Follow
            </span>
          </div>

          {/* Social Story Highlight Rings */}
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            {[
              { label: "Branding", color: "from-[#ffbe1a] to-amber-500" },
              { label: "Food Ad", color: "from-rose-500 to-orange-500" },
              { label: "Web", color: "from-purple-500 to-indigo-500" },
              { label: "Motion", color: "from-cyan-400 to-blue-500" }
            ].map((story, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full p-[1px] bg-gradient-to-tr ${story.color}`}>
                  <div className="w-full h-full rounded-full bg-[#07090e] flex items-center justify-center text-[4px] font-bold text-white">
                    ★
                  </div>
                </div>
                <span className="text-[3.5px] sm:text-[4px] text-slate-400 mt-0.5">{story.label}</span>
              </div>
            ))}
          </div>

          {/* 2x2 Creative Feed Visual Grid (Featuring Food / Product Ad Visuals) */}
          <div className="grid grid-cols-2 gap-1 my-auto flex-1 py-1">
            
            {/* Post 1: GOURMET FOOD & RESTAURANT ADVERTISING VISUAL */}
            <div className="aspect-square rounded-md bg-gradient-to-b from-[#24130a] to-[#0f0905] border border-amber-500/30 p-1 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden group">
              {/* Warm Food Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-black/60 pointer-events-none" />
              
              <div className="w-full flex justify-between items-center z-10">
                <span className="text-[3.5px] font-mono text-[#ffbe1a] font-bold bg-black/60 px-1 rounded">HOT PROMO</span>
                <span className="text-[3.5px] text-white/90 font-mono font-bold">$12.99</span>
              </div>

              {/* Graphic Food/Burger Icon + Delicious Illustration */}
              <div className="my-auto z-10 flex flex-col items-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_4px_8px_rgba(255,190,26,0.4)]" viewBox="0 0 48 48" fill="none">
                  {/* Sesame Bun Top */}
                  <path d="M8 22 C8 12, 40 12, 40 22 Z" fill="#f59e0b" />
                  <ellipse cx="18" cy="16" rx="1" ry="0.5" fill="#fef3c7" />
                  <ellipse cx="28" cy="15" rx="1" ry="0.5" fill="#fef3c7" />
                  <ellipse cx="24" cy="18" rx="1" ry="0.5" fill="#fef3c7" />
                  {/* Melted Cheese */}
                  <polygon points="10 22, 38 22, 34 26, 26 24, 20 27, 14 24" fill="#fbbf24" />
                  {/* Juicy Patty */}
                  <rect x="9" y="24" width="30" height="5" rx="2.5" fill="#78350f" />
                  {/* Crispy Lettuce */}
                  <path d="M7 29 Q12 32 17 29 Q22 32 27 29 Q32 32 37 29 Q41 32 41 29" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  {/* Bun Bottom */}
                  <path d="M10 31 C10 36, 38 36, 38 31 Z" fill="#d97706" />
                </svg>
                <span className="text-[6.5px] sm:text-[7.5px] font-black text-white font-['Outfit'] tracking-tight leading-none mt-0.5">
                  ARTISAN BURGER
                </span>
                <span className="text-[3.5px] text-amber-300 font-mono">#FoodCreative</span>
              </div>
            </div>

            {/* Post 2: BIG BRAND IDENTITY POST */}
            <div className="aspect-square rounded-md bg-[#ffbe1a] p-1 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
              <span className="text-[3.5px] font-mono text-black font-semibold">BRANDING</span>
              <div className="flex flex-col items-center">
                <span className="text-[9px] sm:text-[11px] font-black text-black font-['Outfit'] leading-none">BIG</span>
                <span className="text-[4px] font-bold text-black/80 font-mono tracking-wider">CREATIVE</span>
              </div>
              <span className="text-[3.5px] text-black/70 font-mono">#Identity</span>
            </div>

            {/* Post 3: COFFEE & BEVERAGE PRODUCT CAMPAIGN */}
            <div className="aspect-square rounded-md bg-gradient-to-tr from-[#1b120c] to-[#2c1d12] border border-amber-600/30 p-1 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
              <span className="text-[3.5px] text-amber-400 font-mono">BEVERAGE AD</span>
              <div className="flex flex-col items-center my-auto">
                <span className="text-[7.5px] sm:text-[8.5px] font-black text-white font-['Outfit'] leading-none">
                  COLD BREW
                </span>
                <span className="text-[4px] text-amber-300 font-serif italic mt-0.5">100% Arabica</span>
              </div>
              <span className="text-[3px] text-slate-400 font-mono">Commercial Ad</span>
            </div>

            {/* Post 4: 10X GROWTH & DIGITAL MARKETING POST */}
            <div className="aspect-square rounded-md bg-gradient-to-tr from-purple-950 via-slate-900 to-amber-900 border border-purple-500/20 p-1 flex flex-col justify-between items-center text-center shadow-md">
              <span className="text-[3.5px] text-purple-300 font-mono">SCALE BRAND</span>
              <div className="flex flex-col items-center my-auto">
                <span className="text-[8px] sm:text-[9.5px] font-black text-[#ffbe1a] font-['Outfit'] leading-none">10X</span>
                <span className="text-[3.5px] text-white font-mono">Growth</span>
              </div>
              <span className="text-[3px] text-slate-400 font-mono">Marketing</span>
            </div>

          </div>

          {/* Post Action Bar */}
          <div className="pt-1 border-t border-white/10 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />
              <MessageCircle className="w-2.5 h-2.5 text-slate-300" />
            </div>
            <Bookmark className="w-2.5 h-2.5 text-slate-300" />
          </div>

        </div>

      </div>
    </motion.div>
  );
};
