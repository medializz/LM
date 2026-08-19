import React from 'react';
import { LizzdoLogo } from '../LizzdoLogo';
import { SiteSettings } from '../../types';

interface LaptopBrandPresentationProps {
  siteSettings?: SiteSettings;
  className?: string;
}

export const LaptopBrandPresentation: React.FC<LaptopBrandPresentationProps> = ({ 
  siteSettings, 
  className = '' 
}) => {
  return (
    <div 
      id="laptop-brand-mockup"
      className={`relative select-none gpu-layer ${className}`}
      aria-label="Lizzdo Media Creative Digital Solutions Laptop Mockup"
    >
      {/* 1. LAPTOP SCREEN (Upright Display) */}
      <div className="w-full aspect-[16/10] rounded-t-xl sm:rounded-t-2xl bg-[#090b11] p-1.5 sm:p-2.5 border-[2px] sm:border-[2.5px] border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between relative">
        
        {/* Top Bezel Camera & Mic Sensor */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-600 ring-1 ring-slate-800" />
          <div className="w-0.5 h-0.5 rounded-full bg-green-500/80" />
        </div>

        {/* Screen Workspace - Creative Digital Solutions UI */}
        <div className="w-full h-full rounded-lg bg-[#0a0c13] border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between overflow-hidden relative">
          
          {/* Ambient Glows inside Screen using lightweight radial gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full ambient-glow-purple pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full ambient-glow-gold pointer-events-none" />

          {/* Main Content Layout (Sidebar + Headline + Colorful Abstract Ribbon Waves) */}
          <div className="w-full h-full grid grid-cols-12 gap-1.5 sm:gap-2 items-center relative z-10">
            
            {/* Left Sidebar Mini Navigation */}
            <div className="col-span-3 h-full flex flex-col justify-between border-r border-white/5 pr-1 py-0.5">
              <div>
                <div className="mb-1 sm:mb-1.5">
                  <LizzdoLogo 
                    size="xs" 
                    variant="mark-only"
                    logoSrc={siteSettings?.logo} 
                    markSrc={siteSettings?.logoMark} 
                    decorative={true}
                  />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1 text-[5.5px] sm:text-[7px] font-medium text-slate-400">
                  <span className="text-[#ffbe1a] font-semibold">Home</span>
                  <span className="hover:text-white transition-colors">About</span>
                  <span className="hover:text-white transition-colors">Services</span>
                  <span className="hover:text-white transition-colors">Projects</span>
                  <span className="hover:text-white transition-colors">Contact</span>
                </div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a]/40" />
            </div>

            {/* Center Area: Creative Digital Solutions Headline & CTA */}
            <div className="col-span-5 flex flex-col justify-center pl-0.5 sm:pl-1 py-0.5">
              <h2 className="text-[11px] sm:text-[14px] md:text-[16px] font-black text-white font-['Outfit'] leading-[1.08] tracking-tight">
                Creative<br />
                Digital<br />
                <span className="text-[#ffbe1a]">Solutions</span>
              </h2>
              <p className="text-[5.5px] sm:text-[7px] text-slate-300 font-['Plus_Jakarta_Sans'] mt-0.5 sm:mt-1 leading-snug">
                Building Brands. Driving Growth.
              </p>
              <div className="mt-1.5 sm:mt-2">
                <span className="inline-block px-1.5 sm:px-2.5 py-0.5 sm:py-0.8 rounded-full bg-[#ffbe1a] text-black font-bold text-[5.5px] sm:text-[7px] shadow-[0_2px_8px_rgba(255,190,26,0.4)]">
                  Start a Project
                </span>
              </div>
            </div>

            {/* Right Area: Dynamic Fluid Wave Abstract Graphic */}
            <div className="col-span-4 h-full relative flex items-center justify-end overflow-hidden">
              <svg className="w-[140%] h-[130%] -mr-[20%]" viewBox="0 0 160 160" fill="none">
                <defs>
                  <linearGradient id="laptopWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="45%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="laptopWave2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffbe1a" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path 
                  d="M160 25 C115 35, 75 75, 65 115 C55 155, 95 165, 160 155 Z" 
                  fill="url(#laptopWave1)" 
                  opacity="0.9"
                />
                <path 
                  d="M160 55 C125 65, 95 95, 90 125 C85 155, 115 155, 160 145 Z" 
                  fill="url(#laptopWave2)" 
                  opacity="0.85"
                />
                <path 
                  d="M160 80 C135 85, 115 110, 110 130 C105 150, 130 150, 160 140 Z" 
                  fill="#ffbe1a" 
                  opacity="0.8"
                />
              </svg>
            </div>

          </div>

        </div>
      </div>

      {/* 2. LAPTOP KEYBOARD BASE & TRACKPAD (Sleek, Proportional CNC Aluminum Base with Realistic Keycaps) */}
      <div className="relative w-[102%] -ml-[1%] pt-1 sm:pt-1.5 pb-2 sm:pb-2.5 px-3 sm:px-4 rounded-b-xl bg-gradient-to-b from-[#242938] via-[#161922] to-[#0d0f15] border-t border-slate-400/40 shadow-[0_18px_38px_rgba(0,0,0,0.95)] flex flex-col items-center">
        
        {/* Recessed Screen Hinge Strip */}
        <div className="w-full flex items-center justify-between px-3 mb-1">
          <div className="w-10 sm:w-14 h-[2px] bg-slate-500/30 rounded-full" />
          <div className="w-16 sm:w-24 h-[3px] bg-[#050608] rounded-full border-t border-white/10 shadow-inner" />
          <div className="w-10 sm:w-14 h-[2px] bg-slate-500/30 rounded-full" />
        </div>

        {/* Keyboard Well (Recessed Aluminum Bed) */}
        <div className="w-[90%] bg-[#08090e] rounded-[3px] p-1 border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] flex flex-col gap-0.5">
          
          {/* Row 1: Function Key Row (Esc, F1-F12, Power) */}
          <div className="flex items-center gap-[2px] h-1 sm:h-1.5">
            <div className="w-2.5 bg-[#171b26] rounded-[1px] border-t border-white/20 shadow-xs" />
            <div className="flex-1 flex gap-[1.5px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 bg-[#171b26] rounded-[1px] border-t border-white/15 shadow-xs" />
              ))}
            </div>
            <div className="w-2 bg-[#ffbe1a]/30 rounded-[1px] border-t border-[#ffbe1a]/60 shadow-xs" />
          </div>

          {/* Row 2: Number Row (1-0, -, =, Delete) */}
          <div className="flex items-center gap-[2px] h-1.5 sm:h-2">
            <div className="w-2.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            ))}
            <div className="w-3.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
          </div>

          {/* Row 3: QWERTY Row */}
          <div className="flex items-center gap-[2px] h-1.5 sm:h-2">
            <div className="w-3.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            ))}
            <div className="w-3 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
          </div>

          {/* Row 4: Home Row (Caps, ASDF, Return) */}
          <div className="flex items-center gap-[2px] h-1.5 sm:h-2">
            <div className="w-4 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs flex items-center justify-start pl-0.5">
              <div className="w-0.5 h-0.5 rounded-full bg-[#ffbe1a]/60" />
            </div>
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="flex-1 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            ))}
            <div className="w-4 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
          </div>

          {/* Row 5: Modifier & Spacebar Row */}
          <div className="flex items-center gap-[2px] h-1.5 sm:h-2">
            <div className="w-3 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            <div className="w-2.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            <div className="w-2.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            {/* Spacebar */}
            <div className="flex-1 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/25 shadow-xs" />
            <div className="w-2.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            <div className="w-2.5 bg-[#1a1f2c] rounded-[1.5px] border-t border-white/20 shadow-xs" />
            {/* Arrow Keys Cluster */}
            <div className="w-4 flex gap-[1px]">
              <div className="flex-1 bg-[#1a1f2c] rounded-[1px] border-t border-white/20" />
              <div className="flex-1 flex flex-col gap-[1px]">
                <div className="flex-1 bg-[#1a1f2c] rounded-[1px] border-t border-white/20" />
                <div className="flex-1 bg-[#1a1f2c] rounded-[1px]" />
              </div>
              <div className="flex-1 bg-[#1a1f2c] rounded-[1px] border-t border-white/20" />
            </div>
          </div>

        </div>

        {/* Precision Glass Trackpad */}
        <div className="w-16 sm:w-22 h-3.5 sm:h-4.5 mt-1 rounded-[3px] bg-[#141722] border border-white/15 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] relative">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
        </div>

        {/* Bottom Display Opening Thumb Notch */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 bg-[#090b10] rounded-t-sm border-t border-white/10" />
      </div>
    </div>
  );
};
