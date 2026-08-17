import React from 'react';
import { PortfolioItem } from '../../types';
import { PortfolioVisual } from './PortfolioVisuals';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FeaturedWorkSectionProps {
  portfolio: PortfolioItem[];
  onSelectProject?: (item: PortfolioItem) => void;
  onViewAll?: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  portfolio,
  onSelectProject,
  onViewAll
}) => {
  const sortedProjects = [...portfolio].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section 
      id="work" 
      className="relative z-20 py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] overflow-hidden"
      aria-label="Featured Work and Portfolio"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Split Layout (Left headline + action, right grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Title, Subtitle, and View All Button */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 font-['Plus_Jakarta_Sans']"
            >
              <span>OUR WORK</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white font-['Outfit'] tracking-tight leading-[1.1] mb-4"
            >
              Featured <span className="text-[#ffbe1a] drop-shadow-[0_0_25px_rgba(255,190,26,0.35)]">Work</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-slate-400 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6 sm:mb-8"
            >
              A glimpse of our recent projects that define our creativity and dedication.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              onClick={onViewAll}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#ffbe1a] bg-transparent hover:bg-[#ffbe1a] text-white hover:text-black font-bold text-xs sm:text-sm font-['Outfit'] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,190,26,0.3)]"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Right Column: 5 Featured Projects Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {sortedProjects.map((item, index) => {
                // Determine if this item should span larger on wide displays (e.g., first item or 5th item)
                const isWide = index === 0 || index === 3;
                
                return (
                  <motion.div
                    key={item.id}
                    id={`work-card-${item.slug}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    onClick={() => onSelectProject && onSelectProject(item)}
                    className={`group relative flex flex-col rounded-2xl bg-[#0e1017] border border-white/[0.08] hover:border-[#ffbe1a]/60 overflow-hidden hover:shadow-[0_12px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(255,190,26,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                      isWide ? 'sm:col-span-2 lg:col-span-2' : 'sm:col-span-1 lg:col-span-1'
                    }`}
                  >
                    {/* Visual Container */}
                    <div className={`relative w-full ${isWide ? 'h-[230px] sm:h-[260px] md:h-[280px]' : 'h-[210px] sm:h-[230px] md:h-[250px]'} overflow-hidden bg-black/50 border-b border-white/[0.06]`}>
                      <PortfolioVisual type={item.visualType} className="transition-transform duration-700 group-hover:scale-103" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[#ffbe1a] text-[10px] font-bold uppercase tracking-wider font-['Plus_Jakarta_Sans'] shadow-md">
                          {item.shortCategory || item.category}
                        </span>
                      </div>

                      {/* Top Right Arrow Indicator */}
                      <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#ffbe1a] group-hover:border-[#ffbe1a] transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content Footer */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit'] mb-1 group-hover:text-[#ffbe1a] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 group-hover:text-slate-300 font-['Plus_Jakarta_Sans'] line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <span className="text-slate-400 group-hover:text-[#ffbe1a] transition-colors">Explore Showcase</span>
                        <span className="text-[#ffbe1a] font-bold">→</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
