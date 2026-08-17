import React from 'react';
import { FeatureItem } from '../types';
import { motion } from 'motion/react';

interface FeatureStripProps {
  features: FeatureItem[];
}

export const FeatureStrip: React.FC<FeatureStripProps> = ({ features }) => {
  const sortedFeatures = [...features].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section 
      id="feature-trust-strip"
      className="relative z-20 pt-2 pb-8 sm:pb-12 border-t border-white/5 mt-1"
      aria-label="Why Choose Lizzdo Media"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 sm:gap-6 lg:gap-8">
          {sortedFeatures.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="flex items-start gap-3.5 group"
            >
              {/* Golden circled checkmark icon */}
              <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full border-2 border-[#ffbe1a] bg-[#ffbe1a]/10 flex items-center justify-center shadow-[0_0_12px_rgba(255,190,26,0.25)] group-hover:shadow-[0_0_18px_rgba(255,190,26,0.5)] group-hover:bg-[#ffbe1a]/20 transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-[#ffbe1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col">
                <h2 className="text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug font-['Outfit'] group-hover:text-[#ffbe1a] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed mt-0.5 font-['Plus_Jakarta_Sans']">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
