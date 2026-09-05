import React from 'react';
import { 
  Sparkles, Layers, PenTool, Layout, Smartphone, Calendar, 
  TrendingUp, Users, Target, Cpu, Globe, CheckCircle2, Code2, 
  Palette, MousePointer2, Zap, Box, Package, FileText, Monitor, 
  Laptop, Tablet, Video, Camera, Compass
} from 'lucide-react';
import { LizzdoLogo } from '../LizzdoLogo';

interface ServiceHeroVisualProps {
  slug?: string;
  visualType?: string;
  title?: string;
  className?: string;
}

export const ServiceHeroVisual: React.FC<ServiceHeroVisualProps> = ({ slug, visualType, className = '' }) => {
  const activeSlug = slug || visualType || '';
  switch (activeSlug) {
    case 'brand-identity':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e5a93c]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 relative z-10">
            {/* Brand Card Mockup */}
            <div className="w-64 h-40 bg-neutral-900/90 border border-[#e5a93c]/50 rounded-xl p-5 shadow-2xl flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between">
                <LizzdoLogo size="sm" theme="gold" />
                <span className="text-[9px] font-mono text-[#e5a93c] uppercase px-2 py-0.5 bg-[#e5a93c]/10 rounded border border-[#e5a93c]/30">Identity</span>
              </div>
              <div>
                <div className="h-1.5 w-32 bg-gradient-to-r from-[#e5a93c] to-amber-200 rounded-full" />
                <div className="h-1 w-20 bg-neutral-700 rounded-full mt-2" />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400">
                <span>Corporate Guidelines</span>
                <span>v3.4 Global</span>
              </div>
            </div>

            {/* Brand Color Guide & Swatches */}
            <div className="w-56 bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 space-y-3 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-[10px] font-bold text-white uppercase font-['Outfit'] flex items-center justify-between">
                <span>Palette Matrix</span>
                <Palette className="w-3.5 h-3.5 text-[#e5a93c]" />
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <div className="h-8 rounded bg-neutral-950 border border-neutral-800 flex items-end p-1">
                  <span className="text-[6px] font-mono text-neutral-500">01</span>
                </div>
                <div className="h-8 rounded bg-neutral-900 border border-neutral-800 flex items-end p-1">
                  <span className="text-[6px] font-mono text-neutral-500">02</span>
                </div>
                <div className="h-8 rounded bg-[#e5a93c] border border-amber-300 flex items-end p-1">
                  <span className="text-[6px] font-mono text-neutral-950 font-bold">03</span>
                </div>
                <div className="h-8 rounded bg-purple-600 border border-purple-400 flex items-end p-1">
                  <span className="text-[6px] font-mono text-white">04</span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-neutral-400">
                Primary: #0B0B0C • Accent: #E5A93C
              </div>
            </div>
          </div>
        </div>
      );

    case 'logo-design':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#e5a93c15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 relative z-10">
            {/* Vector Construction Grid */}
            <div className="w-60 h-44 bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between relative shadow-2xl">
              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 border-b border-neutral-800 pb-2">
                <span>Vector Grid Construction</span>
                <PenTool className="w-3.5 h-3.5 text-[#e5a93c]" />
              </div>
              <div className="my-auto flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full border border-dashed border-[#e5a93c]/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-neutral-700 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e5a93c] to-amber-600 rotate-45 flex items-center justify-center shadow-lg">
                      <span className="text-black font-black text-xs font-['Outfit'] -rotate-45">L</span>
                    </div>
                  </div>
                </div>
                <span className="absolute top-2 left-16 w-1.5 h-1.5 bg-[#e5a93c] border border-black" />
                <span className="absolute bottom-2 right-16 w-1.5 h-1.5 bg-[#e5a93c] border border-black" />
              </div>
              <div className="text-[8px] font-mono text-neutral-500 text-center">Golden Ratio Vector Precision</div>
            </div>

            {/* Logo Variants Column */}
            <div className="space-y-2 w-48">
              <div className="bg-black border border-neutral-800 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-400">Dark Mode</span>
                <LizzdoLogo size="xxs" theme="gold" variant="mark-only" />
              </div>
              <div className="bg-white border border-neutral-300 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-900 font-medium">Light Mono</span>
                <LizzdoLogo size="xxs" theme="dark" variant="mark-only" />
              </div>
              <div className="bg-gradient-to-r from-purple-950 to-neutral-900 border border-purple-800/40 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-purple-300">Monogram Mark</span>
                <Sparkles className="w-3.5 h-3.5 text-[#e5a93c]" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'packaging-design':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e5a93c]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 relative z-10">
            {/* 3D Box Mockup Frame */}
            <div className="w-56 h-48 bg-gradient-to-b from-neutral-900 to-black border border-[#e5a93c]/50 rounded-2xl p-4 flex flex-col justify-between shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-[9px] font-mono text-[#e5a93c] flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5" /> 3D Dieline Spec
                </span>
                <span className="text-[8px] font-mono bg-[#e5a93c]/20 text-[#e5a93c] px-2 py-0.5 rounded">Foil Embossed</span>
              </div>
              <div className="my-auto flex flex-col items-center justify-center py-2 space-y-2">
                <div className="w-24 h-16 rounded-lg bg-neutral-950 border-2 border-[#e5a93c] flex items-center justify-center shadow-lg relative">
                  <LizzdoLogo size="xxs" theme="gold" variant="mark-only" />
                  <span className="absolute -bottom-2 px-2 py-0.5 bg-[#e5a93c] text-black text-[7px] font-mono font-bold rounded">
                    600 GSM
                  </span>
                </div>
                <div className="text-[8px] font-mono text-neutral-400">Tactile Matte Obsidian Unboxing</div>
              </div>
              <div className="flex justify-between items-center text-[8px] font-mono text-neutral-500 border-t border-neutral-800 pt-2">
                <span>Pantone 871 C</span>
                <span>CMYK + Spot UV</span>
              </div>
            </div>

            {/* Packaging Assets Column */}
            <div className="w-52 space-y-2.5">
              <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#e5a93c]" />
                  <div>
                    <div className="text-[10px] font-bold text-white font-['Outfit']">Luxury Rigid Box</div>
                    <div className="text-[8px] font-mono text-neutral-400">Magnetic Flap & Foam Insert</div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#e5a93c]" />
                  <div>
                    <div className="text-[10px] font-bold text-white font-['Outfit']">Custom Bottle & Label</div>
                    <div className="text-[8px] font-mono text-neutral-400">Waterproof Metallic Substrate</div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#e5a93c]" />
                  <div>
                    <div className="text-[10px] font-bold text-white font-['Outfit']">Production Dieline</div>
                    <div className="text-[8px] font-mono text-neutral-400">Direct Factory Ready PDF/AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'web-development':
    case 'website-development':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            {/* Desktop Browser Window */}
            <div className="bg-neutral-900/95 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="px-4 py-2 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 ml-2 bg-neutral-900 px-3 py-0.5 rounded border border-neutral-800">
                    https://brand.lizzdo.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 100 Perf
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400 hidden sm:inline-flex items-center gap-1">
                    <Zap className="w-3 h-3" /> &lt;0.8s LCP
                  </span>
                </div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-2">
                  <div className="h-3 w-32 bg-[#e5a93c] rounded" />
                  <div className="h-2 w-48 bg-neutral-700 rounded" />
                  <div className="h-16 w-full bg-neutral-950 rounded-lg border border-neutral-800 p-2 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-[#e5a93c]">Next.js / Vite SPA</div>
                      <div className="text-[8px] font-mono text-neutral-400">Decap CMS + Tailwind CSS</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Monitor className="w-4 h-4 text-[#e5a93c]" />
                      <Tablet className="w-3.5 h-3.5" />
                      <Smartphone className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 flex flex-col justify-between">
                  <div className="text-[8px] font-mono text-neutral-400">Responsive Engine:</div>
                  <div className="text-[9px] font-mono text-white font-medium">Fluid Breakpoints</div>
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#e5a93c] to-emerald-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'graphic-design':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 relative z-10">
            {/* Poster 1 */}
            <div className="w-36 h-48 bg-gradient-to-b from-neutral-900 to-black border border-[#e5a93c]/40 rounded-lg p-3 flex flex-col justify-between shadow-2xl transform -rotate-3">
              <span className="text-[8px] font-mono text-[#e5a93c]">EDITORIAL 01</span>
              <div className="font-['Outfit'] font-black text-white text-xs leading-tight">
                VISUAL HARMONY
              </div>
              <div className="w-full h-12 bg-neutral-800 rounded overflow-hidden flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#e5a93c]" />
              </div>
            </div>
            {/* Poster 2 (Center Hero) */}
            <div className="w-40 h-52 bg-gradient-to-br from-[#e5a93c] via-amber-500 to-amber-600 border border-amber-300 rounded-xl p-3.5 flex flex-col justify-between shadow-2xl text-neutral-950 transform scale-105 z-10">
              <div className="flex justify-between items-center text-[8px] font-mono font-bold">
                <span>EXHIBITION</span>
                <span>2026</span>
              </div>
              <div className="font-['Outfit'] font-black text-sm leading-none tracking-tight">
                GRAPHIC TYPOGRAPHY POSTER
              </div>
              <div className="bg-neutral-950 text-white text-[8px] font-mono text-center py-1 rounded">
                PRINT & VECTOR SPEC
              </div>
            </div>
            {/* Poster 3 */}
            <div className="w-36 h-48 bg-gradient-to-b from-purple-950 to-neutral-950 border border-purple-700/40 rounded-lg p-3 flex flex-col justify-between shadow-2xl transform rotate-3">
              <span className="text-[8px] font-mono text-purple-300">BROCHURE 03</span>
              <div className="font-['Outfit'] font-black text-white text-xs leading-tight">
                MARKETING CRAFT
              </div>
              <div className="w-full h-1 bg-purple-500 rounded" />
            </div>
          </div>
        </div>
      );

    case 'social-media-design':
    case 'social-media-management':
    case 'content-posting':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2 relative z-10">
            {/* Phone Feed Mockup */}
            <div className="w-52 h-64 bg-black border-2 border-neutral-800 rounded-2xl p-3 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[9px] font-mono text-neutral-400">
                <span>@lizzdo_media</span>
                <span className="text-[#e5a93c] font-bold">14.2k</span>
              </div>
              <div className="grid grid-cols-3 gap-1 my-auto">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-square rounded border border-neutral-800 flex items-center justify-center ${
                      idx === 1 ? 'bg-[#e5a93c] text-black font-bold text-[8px]' : 
                      idx === 3 ? 'bg-purple-900/60' : 'bg-neutral-900'
                    }`}
                  >
                    <span className="text-[7px] font-mono">{idx === 1 ? 'HERO' : `#${idx}`}</span>
                  </div>
                ))}
              </div>
              <div className="text-[8px] font-mono text-emerald-400 text-center bg-emerald-500/10 py-1 rounded border border-emerald-500/20">
                +38.5% Monthly Reach
              </div>
            </div>

            {/* Scheduling & Content Pipeline Card */}
            <div className="w-56 bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-bold text-white font-['Outfit']">
                <span>Publishing Matrix</span>
                <Calendar className="w-3.5 h-3.5 text-[#e5a93c]" />
              </div>
              <div className="space-y-1.5 text-[8px] font-mono">
                <div className="flex items-center justify-between p-1.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <span>Mon: Carousel Drop</span>
                  <span className="text-[#e5a93c]">Scheduled</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <span>Wed: Video Reel</span>
                  <span className="text-emerald-400">Live</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <span>Fri: Engagement Post</span>
                  <span className="text-purple-400">Queued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'digital-marketing':
    case 'advertising-creatives':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2 relative z-10">
            {/* ROI Metric Card */}
            <div className="w-56 bg-neutral-900/90 border border-[#e5a93c]/40 rounded-xl p-4 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-400 uppercase">Performance ROI</span>
                <Target className="w-4 h-4 text-[#e5a93c]" />
              </div>
              <div>
                <div className="text-2xl font-black text-white font-['Outfit']">4.82x</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">Average Client Ad ROAS</div>
              </div>
              <div className="flex gap-1 h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden">
                <div className="bg-[#e5a93c] w-3/4 rounded-full" />
                <div className="bg-purple-500 w-1/4 rounded-full" />
              </div>
            </div>

            {/* A/B Test Creative Badge */}
            <div className="w-56 space-y-2">
              <div className="bg-gradient-to-r from-neutral-900 to-black border border-emerald-500/40 rounded-lg p-2.5 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-bold text-white">Variant A (Winner)</div>
                  <div className="text-[8px] font-mono text-neutral-400">CTR 5.8% • $0.42 CPC</div>
                </div>
                <span className="text-[8px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">+140%</span>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-bold text-neutral-400">Variant B (Control)</div>
                  <div className="text-[8px] font-mono text-neutral-500">CTR 2.4% • $0.98 CPC</div>
                </div>
                <span className="text-[8px] font-mono text-neutral-500">Baseline</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ai-visual-content':
    case 'ai-visuals-content':
      return (
        <div className={`w-full bg-gradient-to-br from-purple-950/40 via-neutral-950 to-black border border-purple-800/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2 relative z-10">
            <div className="w-64 bg-neutral-900/90 border border-purple-500/50 rounded-xl p-4 shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-[9px] font-mono text-purple-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#e5a93c]" /> Neural Studio
                </span>
                <span className="text-[8px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">8K Render</span>
              </div>
              <div className="text-[9px] font-mono text-neutral-300 bg-neutral-950 p-2.5 rounded border border-neutral-800/80 italic">
                "Hyper-realistic cinematic obsidian bottle with gold leaf accents on black volcanic sand, 8k resolution..."
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400">
                <span>Output: Multi-angle Assets</span>
                <span className="text-[#e5a93c] font-bold">100% Vector & 8K</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'flyer-design':
    case 'flyer-and-leaflet-design':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="flex items-center justify-center gap-4 py-4 relative z-10">
            {/* Tri-fold Flyer Mockup */}
            <div className="w-56 h-48 bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-[#e5a93c]/50 rounded-xl p-4 flex flex-col justify-between shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="text-[9px] font-mono text-[#e5a93c] flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> High-Spec Print
                </span>
                <span className="text-[8px] font-mono text-slate-400">A5 / DL Leaflet</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 my-auto">
                <div className="h-16 bg-neutral-900 border border-neutral-800 rounded p-1 flex flex-col justify-between">
                  <div className="h-1 w-6 bg-[#e5a93c] rounded" />
                  <div className="h-0.5 w-full bg-neutral-700 rounded" />
                  <span className="text-[6px] font-mono text-neutral-500">Fold 01</span>
                </div>
                <div className="h-16 bg-neutral-950 border border-[#e5a93c]/40 rounded p-1 flex flex-col justify-between">
                  <div className="h-1 w-8 bg-amber-400 rounded" />
                  <div className="h-0.5 w-full bg-neutral-700 rounded" />
                  <span className="text-[6px] font-mono text-[#e5a93c]">Hero</span>
                </div>
                <div className="h-16 bg-neutral-900 border border-neutral-800 rounded p-1 flex flex-col justify-between">
                  <div className="h-1 w-5 bg-neutral-600 rounded" />
                  <div className="h-0.5 w-full bg-neutral-700 rounded" />
                  <span className="text-[6px] font-mono text-neutral-500">Fold 03</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 border-t border-neutral-800 pt-2">
                <span>350gsm Silk Finish</span>
                <span>Crop Marks & Bleed</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'content-creation':
      return (
        <div className={`w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl ${className}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2 relative z-10">
            <div className="w-56 bg-neutral-900/90 border border-[#e5a93c]/50 rounded-xl p-4 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-[9px] font-mono text-[#e5a93c] flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" /> Media Production
                </span>
                <span className="text-[8px] font-mono bg-[#e5a93c]/20 text-[#e5a93c] px-2 py-0.5 rounded">4K 60fps</span>
              </div>
              <div className="space-y-1.5 text-[8px] font-mono">
                <div className="flex items-center justify-between p-1.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[#e5a93c]" /> Photography</span>
                  <span className="text-emerald-400">Mastered</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <span className="flex items-center gap-1"><Video className="w-3 h-3 text-[#e5a93c]" /> Short-form Reels</span>
                  <span className="text-emerald-400">Color-Graded</span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-neutral-400 text-center">Multi-platform hooks & storytelling</div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex items-center justify-center ${className}`}>
          <LizzdoLogo size="md" theme="gold" />
        </div>
      );
  }
};
