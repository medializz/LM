import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Compass, ShieldCheck, Zap, Code2, 
  HeartHandshake, Layers, Award, CheckCircle2 
} from 'lucide-react';
import { AboutContent, AboutValueItem } from '../../types';

interface AboutValuesProps {
  content?: AboutContent;
}

// Icon resolver for values
const getIconForValue = (iconKey?: string, index: number = 0) => {
  const iconMap: Record<string, React.ReactNode> = {
    sparkles: <Sparkles className="w-5 h-5" />,
    compass: <Compass className="w-5 h-5" />,
    shield: <ShieldCheck className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    code: <Code2 className="w-5 h-5" />,
    handshake: <HeartHandshake className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    award: <Award className="w-5 h-5" />
  };

  if (iconKey && iconMap[iconKey.toLowerCase()]) {
    return iconMap[iconKey.toLowerCase()];
  }

  // Fallback cyclic selection
  const fallbacks = [
    <Sparkles className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Code2 className="w-5 h-5" />,
    <HeartHandshake className="w-5 h-5" />
  ];

  return fallbacks[index % fallbacks.length];
};

export const AboutValues: React.FC<AboutValuesProps> = ({ content }) => {
  const defaultValues: AboutValueItem[] = [
    {
      id: "val-creative",
      title: "Creative-First Thinking",
      description: "We reject generic corporate templates. Every mark, color harmony, and digital layout is custom crafted to forge memorable emotional resonance.",
      iconKey: "sparkles",
      badge: "01"
    },
    {
      id: "val-strategy",
      title: "Strategic Rigor",
      description: "Visual design without commercial rationale is vanity. Every typographic hierarchy and spatial composition is anchored in competitive market reality.",
      iconKey: "compass",
      badge: "02"
    },
    {
      id: "val-craft",
      title: "Uncompromising Craft",
      description: "From micro-radius vector curves to tactile foil print dielines, we obsess over the microscopic details that elevate good design to great design.",
      iconKey: "shield",
      badge: "03"
    },
    {
      id: "val-speed",
      title: "Production Speed",
      description: "Fast-moving brands cannot afford endless agency delays. We maintain lean sprint cycles, responsive reviews, and dependable delivery deadlines.",
      iconKey: "zap",
      badge: "04"
    },
    {
      id: "val-engineering",
      title: "Modern Engineering",
      description: "Clean, scalable TypeScript architectures, headless Decap CMS control, and sub-second performance ensure your digital platform scales effortlessly.",
      iconKey: "code",
      badge: "05"
    },
    {
      id: "val-partnership",
      title: "Long-Term Partnership",
      description: "We do not disappear after project launch. We act as your ongoing design director and digital development partner as your brand expands.",
      iconKey: "handshake",
      badge: "06"
    }
  ];

  const valuesList = content?.values && content.values.length > 0
    ? content.values
    : defaultValues;

  const sectionTitle = content?.valuesTitle || "The Principles That Define Our Work";
  const sectionDesc = content?.valuesDescription || "Every project we accept is guided by six foundational commitments to craft, speed, and commercial integrity.";

  return (
    <section 
      id="our-values"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#07090e] overflow-hidden"
      aria-label="Our Core Agency Values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06] mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Award className="w-3.5 h-3.5" />
              <span>STUDIO ETHOS & STANDARDS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
            >
              {sectionTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
            >
              {sectionDesc}
            </motion.p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.06]">
            <CheckCircle2 className="w-4 h-4 text-[#ffbe1a]" />
            <span>Non-Negotiable Standards</span>
          </div>
        </div>

        {/* 6-Card Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valuesList.map((val, idx) => (
            <motion.div
              key={val.id || `val-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-[#ffbe1a]/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-all">
                    {getIconForValue(val.iconKey, idx)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold group-hover:text-[#ffbe1a] transition-colors">
                    {val.badge || `0${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Value {val.badge || `0${idx + 1}`}</span>
                <span className="text-emerald-400">Enforced in Sprints</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
