import React from 'react';
import { Box, Sparkles, Layers, Shield, Coffee, Droplets, Leaf } from 'lucide-react';
import { LizzdoLogo } from '../../../LizzdoLogo';

interface PackagingFormatsGridVisualProps {
  className?: string;
  isDetailed?: boolean;
  logoSrc?: string;
  markSrc?: string;
}

export const PackagingFormatsGridVisual: React.FC<PackagingFormatsGridVisualProps> = ({
  className = '',
  isDetailed = true,
  logoSrc,
  markSrc,
}) => {
  const formats = [
    {
      id: 'f1',
      title: 'Luxury Chocolate Foil Wrap',
      subtitle: '80g Tablet • Embossed Foil',
      tag: 'CONFECTIONERY',
      bg: 'from-[#2e1308] to-[#120602]',
      border: 'border-amber-600/40',
      accent: 'text-amber-400',
    },
    {
      id: 'f2',
      title: 'Die-Cut Ribbon Treat Box',
      subtitle: 'Handle Carton • 300GSM',
      tag: 'GIFTING',
      bg: 'from-[#2b0e2b] to-[#100410]',
      border: 'border-purple-500/40',
      accent: 'text-purple-300',
    },
    {
      id: 'f3',
      title: 'Stand-Up Coffee Bean Pouch',
      subtitle: 'Degassing Valve • 500g',
      tag: 'COFFEE / BEVERAGE',
      bg: 'from-[#1e140b] to-[#0d0703]',
      border: 'border-amber-500/40',
      accent: 'text-[#e5a93c]',
    },
    {
      id: 'f4',
      title: 'Botanical Sea Moss Foil Pouch',
      subtitle: 'Metallic Pouch on Stone Plinth',
      tag: 'WELLNESS',
      bg: 'from-[#0e272a] to-[#041012]',
      border: 'border-teal-500/40',
      accent: 'text-teal-300',
    },
    {
      id: 'f5',
      title: 'Organic Plant Nutrition Carton',
      subtitle: 'Micro-Flute Kraft Box',
      tag: 'AGRICULTURE',
      bg: 'from-[#132c14] to-[#051306]',
      border: 'border-emerald-500/40',
      accent: 'text-emerald-400',
    },
    {
      id: 'f6',
      title: 'Matte Obsidian Cardamom Tea Pouch',
      subtitle: '24K Gold Stamp Crest',
      tag: 'HERBAL TEA',
      bg: 'from-[#1a1726] to-[#08070d]',
      border: 'border-purple-400/40',
      accent: 'text-[#e5a93c]',
    },
    {
      id: 'f7',
      title: 'Tall Dairy & Milkshake Gable Top',
      subtitle: 'Barrier Coated Liquid Carton',
      tag: 'DAIRY & LIQUID',
      bg: 'from-[#2d121c] to-[#11050a]',
      border: 'border-pink-500/40',
      accent: 'text-pink-300',
    },
    {
      id: 'f8',
      title: 'Cylindrical Rigid Tube',
      subtitle: 'Gold Bevel Cap • Spirit / Fragrance',
      tag: 'LUXURY TUBE',
      bg: 'from-[#20170a] to-[#0c0803]',
      border: 'border-amber-400/40',
      accent: 'text-[#e5a93c]',
    },
  ];

  return (
    <div
      className={`relative w-full h-full min-h-[360px] bg-gradient-to-br from-[#10081c] via-[#090310] to-[#030106] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 select-none ${className}`}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5a93c10_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      
      {/* Header bar */}
      <div className="w-full max-w-5xl flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20 text-xs font-mono">
        <span className="text-[#e5a93c] flex items-center gap-1.5 font-bold">
          <Layers className="w-3.5 h-3.5" /> PACKAGING FORMATS & SUBSTRATES
        </span>
        <span className="text-purple-300">8 BESPOKE PACKAGING ARCHETYPES</span>
      </div>

      {/* Grid of 8 formats (Inspired by Ref 4) */}
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
        {formats.map((fmt) => (
          <div
            key={fmt.id}
            className={`rounded-xl bg-gradient-to-br ${fmt.bg} border ${fmt.border} p-3 shadow-lg flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 group`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[7px] font-mono font-bold tracking-wider ${fmt.accent}`}>
                {fmt.tag}
              </span>
              <div className="scale-75">
                <LizzdoLogo variant="mark-only" size="xxs" theme="gold" logoSrc={logoSrc} markSrc={markSrc} />
              </div>
            </div>

            <div className="my-3 text-center space-y-1">
              <div className="w-9 h-9 mx-auto rounded-lg bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-[#e5a93c]/50 transition-colors">
                <Box className={`w-4 h-4 ${fmt.accent}`} />
              </div>
              <div className="text-[10px] font-bold text-white font-['Outfit'] leading-tight">
                {fmt.title}
              </div>
              <div className="text-[7.5px] text-neutral-400 font-mono">
                {fmt.subtitle}
              </div>
            </div>

            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[6.5px] font-mono text-neutral-400">
              <span>LIZZDO SPEC</span>
              <span className="text-[#e5a93c] font-bold">PRODUCTION</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
