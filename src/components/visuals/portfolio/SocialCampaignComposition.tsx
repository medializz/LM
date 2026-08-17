import React from 'react';
import { Smartphone, Sparkles, TrendingUp, Volume2, Radio, Heart, Share2, Play } from 'lucide-react';
import { LizzdoLogo } from '../../LizzdoLogo';

interface SocialCampaignCompositionProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const SocialCampaignComposition: React.FC<SocialCampaignCompositionProps> = ({
  className = '',
  isDetailed = false,
  logoSrc,
  markSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#1c1404] via-[#100c02] to-[#050401] overflow-hidden flex items-center justify-center p-3 sm:p-5 select-none ${className}`}
    >
      {/* 1. Radiant Gold Studio Energy & Clean Overlay */}
      <div className="absolute inset-0 bg-[#ffbe1a]/[0.02] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full ambient-glow-gold pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full ambient-glow-gold pointer-events-none" />

      {/* 2. Main 3D Composition Stage */}
      <div className="relative w-full max-w-[540px] h-[210px] sm:h-[250px] md:h-[280px] flex items-center justify-center">

        {/* --- OBJECT 1 (LEFT-BACK): 4:5 Portrait Carousel Ad Card --- */}
        <div className="absolute left-2 sm:left-4 top-2 sm:top-3 w-[120px] sm:w-[155px] md:w-[175px] h-[140px] sm:h-[180px] md:h-[205px] rounded-2xl bg-gradient-to-br from-[#241a05] via-[#151003] to-[#0a0802] border border-[#ffbe1a]/40 shadow-2xl rotate-[-10deg] transform transition-transform duration-700 group-hover:rotate-[-6deg] p-2.5 sm:p-3 flex flex-col justify-between z-10">
          <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-[#ffbe1a]">
            <div className="flex items-center gap-1">
              <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              <span>CAROUSEL 02/05</span>
            </div>
            <span className="bg-[#ffbe1a]/20 px-1 py-0.5 rounded font-bold">SWIPE →</span>
          </div>

          <div className="space-y-1 my-auto text-center py-1">
            <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto rounded-xl bg-[#ffbe1a]/15 border border-[#ffbe1a]/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,190,26,0.3)]">
              <Radio className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffbe1a]" />
            </div>
            <div className="text-[9px] sm:text-[11px] font-black text-white font-['Outfit'] leading-tight">
              TITANIUM 40MM
            </div>
            <div className="text-[6.5px] sm:text-[7.5px] text-amber-200 font-mono">
              Pure High-Res Acoustic Precision
            </div>
          </div>

          <div className="flex items-center justify-between text-[6.5px] sm:text-[7px] font-mono border-t border-white/10 pt-1 text-slate-400">
            <span>40H BATTERY</span>
            <span className="text-[#ffbe1a]">ANC ACTIVE</span>
          </div>
        </div>

        {/* --- OBJECT 2 (CENTER-HERO): 1:1 Bold Typographic Feed Creative --- */}
        <div className="absolute left-[44%] sm:left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[155px] sm:w-[205px] md:w-[235px] h-[155px] sm:h-[205px] md:h-[235px] rounded-2xl bg-gradient-to-br from-[#ffbe1a] via-[#e5a600] to-[#b37e00] border-2 border-amber-200 shadow-[0_20px_50px_rgba(0,0,0,0.95)] rotate-[2deg] transform transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 p-3 sm:p-4 flex flex-col justify-between z-20 overflow-hidden">
          
          {/* Top Brand Banner */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded">
              <LizzdoLogo variant="mark-only" size="xxs" theme="dark" logoSrc={logoSrc} markSrc={markSrc} />
              <span className="text-[8px] sm:text-[10px] font-black text-black tracking-widest uppercase font-['Outfit']">
                LIZZDO SOUND
              </span>
            </div>
            <span className="text-[7px] sm:text-[8px] bg-black text-[#ffbe1a] px-2 py-0.5 rounded-full font-extrabold shadow-md">
              NEW DROP
            </span>
          </div>

          {/* 3D Headphones Vector Artwork */}
          <div className="relative my-auto flex flex-col items-center justify-center z-10 py-1">
            <div className="w-16 sm:w-22 h-16 sm:h-22 rounded-full border-4 border-black/90 bg-black/80 flex items-center justify-center relative shadow-[0_0_25px_rgba(0,0,0,0.5)] transform -rotate-6 group-hover:rotate-0 transition-transform">
              <div className="absolute -top-1.5 w-10 sm:w-14 h-3 bg-black rounded-t-full" />
              <div className="w-4 sm:w-5 h-6 sm:h-8 bg-[#ffbe1a] rounded-r-lg absolute -left-2.5 shadow-md flex items-center justify-center">
                <span className="text-[5px] font-black text-black">L</span>
              </div>
              <div className="w-4 sm:w-5 h-6 sm:h-8 bg-[#ffbe1a] rounded-l-lg absolute -right-2.5 shadow-md flex items-center justify-center">
                <span className="text-[5px] font-black text-black">R</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
                <span className="text-[#ffbe1a] text-[8px] sm:text-[10px] font-black block font-['Outfit'] mt-0.5">ANC</span>
              </div>
            </div>

            <div className="text-center mt-1.5">
              <div className="text-black font-black text-[11px] sm:text-[14px] font-['Outfit'] tracking-tight leading-none uppercase">
                PURE SOUNDSCAPE
              </div>
              <div className="text-[6.5px] sm:text-[8px] font-mono text-black/80 font-bold mt-0.5">
                HYPER-DYNAMIC WIRELESS AUDIO
              </div>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="flex items-center justify-between bg-black text-white px-2.5 py-1 sm:py-1.5 rounded-xl z-10 shadow-lg text-[7px] sm:text-[8.5px] font-mono">
            <span className="font-bold text-[#ffbe1a]">40% OFF LAUNCH</span>
            <span className="font-black flex items-center gap-1">
              SHOP NOW →
            </span>
          </div>
        </div>

        {/* --- OBJECT 3 (FRONT-RIGHT SMARTPHONE): 9:16 Instagram Story / Reel Ad --- */}
        <div className="absolute right-2 sm:right-5 bottom-1 sm:bottom-2 w-[75px] sm:w-[95px] md:w-[110px] h-[135px] sm:h-[170px] md:h-[195px] rounded-2xl bg-black border-2 border-slate-700 shadow-[0_20px_45px_rgba(0,0,0,0.95)] rotate-[8deg] transform transition-transform duration-700 group-hover:rotate-[4deg] group-hover:scale-108 p-1.5 flex flex-col justify-between z-30 overflow-hidden">
          
          {/* Top Story Segments */}
          <div className="flex gap-1 mb-1">
            <div className="flex-1 h-0.5 bg-[#ffbe1a] rounded" />
            <div className="flex-1 h-0.5 bg-white/40 rounded" />
            <div className="flex-1 h-0.5 bg-white/40 rounded" />
          </div>

          {/* Story Header */}
          <div className="flex items-center justify-between text-[6px] text-white">
            <div className="flex items-center gap-1">
              <div className="p-0.5 rounded-full bg-[#ffbe1a]/20 border border-[#ffbe1a]/60 flex items-center justify-center">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
              <span className="font-bold">lizzdo_media</span>
            </div>
            <span className="text-slate-400">Sponsored</span>
          </div>

          {/* Center Story Visual */}
          <div className="my-auto text-center py-1">
            <div className="w-7 sm:w-9 h-7 sm:h-9 mx-auto rounded-full bg-[#ffbe1a] flex items-center justify-center shadow-[0_0_15px_rgba(255,190,26,0.6)]">
              <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-black fill-black ml-0.5" />
            </div>
            <div className="text-[7.5px] sm:text-[9px] font-black text-white font-['Outfit'] mt-1 leading-tight">
              SOUND REDEFINED
            </div>
          </div>

          {/* Swipe Up CTA */}
          <div className="bg-[#ffbe1a] text-black text-[6.5px] sm:text-[7.5px] font-bold text-center py-1 rounded-lg">
            Swipe Up to Shop ↑
          </div>
        </div>

        {/* --- OBJECT 4 (TOP-LEFT FLOATING ROI BADGE): Verified Social Metric --- */}
        <div className="absolute left-2 sm:left-5 top-1 sm:top-2 z-40 bg-[#0e0c05] border border-[#ffbe1a]/60 px-2.5 py-1 rounded-full shadow-2xl flex items-center gap-1.5 transform -rotate-4">
          <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
          <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold tracking-wider">
            4.2X ROAS • 1.8M REACH
          </span>
        </div>

      </div>

      {/* Detailed Footer */}
      {isDetailed && (
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 border-t border-[#ffbe1a]/20 pt-2 z-40 font-mono">
          <span className="text-[#ffbe1a] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> High-Converting Multi-Platform Campaign
          </span>
          <span>Instagram Feed & Stories • TikTok Ads • LinkedIn B2B Assets</span>
        </div>
      )}
    </div>
  );
};
