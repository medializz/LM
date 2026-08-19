import React from 'react';
import { LizzdoLogo } from '../LizzdoLogo';
import { SiteSettings } from '../../types';

interface BrandCardProps {
  siteSettings?: SiteSettings;
  className?: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ siteSettings, className = '' }) => {
  return (
    <div 
      id="hero-brand-card"
      className={`relative rounded-xl bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9] p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-slate-200/80 overflow-hidden transform rotate-0 sm:rotate-[8deg] transition-all duration-300 gpu-layer ${className}`}
      aria-label="Lizzdo Media Brand Card Mockup"
    >
      {/* Subtle Foil Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none opacity-60" />
      <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full ambient-glow-gold pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top: Master Lizzdo Media Logo in Light Theme */}
        <div className="flex items-center justify-between">
          <LizzdoLogo 
            size="xs" 
            theme="light" 
            logoSrc={siteSettings?.logoLight || siteSettings?.logo}
            markSrc={siteSettings?.logoMark}
            decorative={true}
          />
          <span className="text-[6px] sm:text-[7px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            HQ / 2026
          </span>
        </div>

        {/* Bottom Details */}
        <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-end justify-between">
          <div>
            <span className="text-[7px] sm:text-[8px] font-bold text-slate-900 block font-['Outfit']">
              Creative & Digital Studio
            </span>
            <span className="text-[5px] sm:text-[6px] text-slate-500 font-medium font-mono">
              {siteSettings?.currentDomain ? siteSettings.currentDomain.replace('https://', '').replace('/', '') : 'media.lizzdo.com'}
            </span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbe1a] shadow-[0_0_8px_#ffbe1a]" />
        </div>
      </div>
    </div>
  );
};
