import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, BarChart3, CheckCircle2 } from 'lucide-react';
import { StatItem } from '../../types';

interface AboutStatsProps {
  stats?: StatItem[];
}

export const AboutStats: React.FC<AboutStatsProps> = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return null;
  }

  // Filter only published or valid items
  const validStats = stats.filter(s => s.value && s.label);
  if (validStats.length === 0) return null;

  return (
    <section 
      id="verified-stats"
      className="relative z-20 py-12 sm:py-16 border-b border-white/[0.08] bg-[#07090e]"
      aria-label="Key Agency Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {validStats.map((item, idx) => (
            <motion.div
              key={item.id || `stat-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ffbe1a]/30 transition-colors text-center space-y-2"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-[#ffbe1a] tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
                {item.label}
              </div>
              {item.description && (
                <p className="text-[11px] sm:text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
