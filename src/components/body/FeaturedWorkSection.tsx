import React, { useState, useMemo } from 'react';
import { PortfolioItem, SiteSettings } from '../../types';
import { PortfolioVisual } from './PortfolioVisuals';
import { LizzdoLogo } from '../LizzdoLogo';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, Layers, Tag, ExternalLink } from 'lucide-react';

interface FeaturedWorkSectionProps {
  portfolio: PortfolioItem[];
  siteSettings?: SiteSettings;
  onSelectProject?: (item: PortfolioItem) => void;
  onViewAll?: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  portfolio,
  siteSettings,
  onSelectProject,
  onViewAll
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const sortedProjects = useMemo(() => {
    return [...portfolio].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [portfolio]);

  // Extract unique category filters
  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'All Projects', count: sortedProjects.length },
      { id: 'branding', label: 'Branding', count: sortedProjects.filter(p => (p.category || '').toLowerCase().includes('brand') || (p.shortCategory || '').toLowerCase().includes('brand')).length },
      { id: 'packaging', label: 'Packaging', count: sortedProjects.filter(p => (p.category || '').toLowerCase().includes('packag') || (p.shortCategory || '').toLowerCase().includes('packag')).length },
      { id: 'digital', label: 'Web & SaaS', count: sortedProjects.filter(p => (p.category || '').toLowerCase().includes('web') || (p.category || '').toLowerCase().includes('saas')).length },
      { id: 'marketing', label: 'Marketing', count: sortedProjects.filter(p => (p.category || '').toLowerCase().includes('social') || (p.category || '').toLowerCase().includes('market')).length },
    ];
  }, [sortedProjects]);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return sortedProjects;
    if (activeCategory === 'branding') {
      return sortedProjects.filter(p => (p.category || '').toLowerCase().includes('brand') || (p.shortCategory || '').toLowerCase().includes('brand'));
    }
    if (activeCategory === 'packaging') {
      return sortedProjects.filter(p => (p.category || '').toLowerCase().includes('packag') || (p.shortCategory || '').toLowerCase().includes('packag'));
    }
    if (activeCategory === 'digital') {
      return sortedProjects.filter(p => (p.category || '').toLowerCase().includes('web') || (p.category || '').toLowerCase().includes('saas'));
    }
    if (activeCategory === 'marketing') {
      return sortedProjects.filter(p => (p.category || '').toLowerCase().includes('social') || (p.category || '').toLowerCase().includes('market'));
    }
    return sortedProjects;
  }, [sortedProjects, activeCategory]);

  // When "all" is selected, split into 1 Flagship Hero Project + 4 Balanced Grid Projects
  const flagshipProject = activeCategory === 'all' && sortedProjects.length >= 5 ? sortedProjects[0] : null;
  const gridProjects = activeCategory === 'all' && sortedProjects.length >= 5 ? sortedProjects.slice(1) : filteredProjects;

  return (
    <section 
      id="work" 
      className="relative z-20 py-16 sm:py-20 lg:py-28 border-t border-white/[0.06] overflow-hidden bg-[#07090e]"
      aria-label="Featured Work and Portfolio"
    >
      {/* Studio Ambient Backlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#ffbe1a]/[0.03] via-purple-600/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & FILTER BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              <LizzdoLogo 
                variant="mark-only" 
                size="xxs" 
                theme="gold" 
                logoSrc={siteSettings?.logo || siteSettings?.logoLight} 
                markSrc={siteSettings?.logoMark} 
              />
              <span>FEATURED WORK</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight leading-[1.1]"
            >
              Engineered for <span className="text-[#ffbe1a] drop-shadow-[0_0_30px_rgba(255,190,26,0.35)]">Impact</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-400 font-['Plus_Jakarta_Sans'] leading-relaxed"
            >
              A showcase of luxury brand identities, structural packaging systems, and high-performance digital platforms built for forward-thinking businesses.
            </motion.p>
          </div>

          {/* Right Top Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              onClick={onViewAll}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#ffbe1a] bg-[#0e1017] hover:bg-[#ffbe1a] text-white hover:text-black font-bold text-xs sm:text-sm font-['Outfit'] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,190,26,0.25)]"
            >
              <span>View All Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-['Outfit'] font-semibold transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#ffbe1a] text-black shadow-[0_0_15px_rgba(255,190,26,0.3)] font-bold'
                    : 'bg-[#10131d] text-slate-400 hover:text-white hover:bg-[#161a27] border border-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-black/20 text-black' : 'bg-black/40 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. FLAGSHIP HERO PROJECT (When "All" is active) */}
        {/* ========================================================================= */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => onSelectProject && onSelectProject(flagshipProject)}
            className="group relative rounded-3xl bg-gradient-to-br from-[#121520] via-[#0c0e15] to-[#07080c] border border-white/[0.1] hover:border-[#ffbe1a]/60 p-5 sm:p-7 md:p-8 mb-8 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(255,190,26,0.15)] transition-all duration-500 cursor-pointer"
          >
            {/* Top Substrate Spec Line */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#ffbe1a]/30 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Visual Stage (lg:col-span-7) */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/60 relative h-[260px] sm:h-[340px] md:h-[380px] shadow-2xl">
                <PortfolioVisual 
                  type={flagshipProject.visualType} 
                  siteSettings={siteSettings}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#ffbe1a]/40 text-[#ffbe1a] text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#ffbe1a]" />
                    <span>FLAGSHIP CASE STUDY</span>
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#ffbe1a] group-hover:border-[#ffbe1a] transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Right Column: Case Study Narrative (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#ffbe1a] uppercase tracking-wider font-bold">
                      {flagshipProject.shortCategory || flagshipProject.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {flagshipProject.year || '2026'}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] group-hover:text-[#ffbe1a] transition-colors leading-tight">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Core Deliverable Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(flagshipProject.services && flagshipProject.services.length > 0 
                      ? flagshipProject.services.slice(0, 4) 
                      : ['Brand Guidelines', 'Typography System', 'Foil Stamping', 'Visual Identity']
                    ).map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client / Action Bar */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Client</span>
                    <span className="text-xs font-semibold text-white">{flagshipProject.client || 'Vesper Luxe'}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#ffbe1a] font-['Outfit'] group-hover:translate-x-1 transition-transform">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 3. BALANCED 2x2 GRID FOR REMAINING PROJECTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  id={`work-card-${item.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  onClick={() => onSelectProject && onSelectProject(item)}
                  className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-[#10131d] via-[#0b0d14] to-[#06070a] border border-white/[0.08] hover:border-[#ffbe1a]/60 overflow-hidden hover:shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(255,190,26,0.12)] hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
                >
                  {/* Visual Stage Container */}
                  <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden bg-black/60 border-b border-white/[0.06]">
                    <PortfolioVisual 
                      type={item.visualType} 
                      siteSettings={siteSettings}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                    />

                    {/* Floating Category Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[#ffbe1a] text-[10px] font-bold uppercase tracking-wider font-['Plus_Jakarta_Sans'] shadow-md">
                        <LizzdoLogo 
                          variant="mark-only" 
                          size="xxs" 
                          theme="gold" 
                          logoSrc={siteSettings?.logo || siteSettings?.logoLight} 
                          markSrc={siteSettings?.logoMark} 
                        />
                        <span>{item.shortCategory || item.category}</span>
                      </span>
                    </div>

                    {/* Top Right Arrow Indicator */}
                    <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#ffbe1a] group-hover:border-[#ffbe1a] transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">{item.client || 'Client Project'}</span>
                        <span className="text-[#ffbe1a]">{item.year || '2026'}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] group-hover:text-[#ffbe1a] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Services Chips & Action */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {(item.services && item.services.length > 0 ? item.services.slice(0, 2) : ['Design', 'Development']).map((s, idx) => (
                          <span key={idx} className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                            {s}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-[#ffbe1a] font-['Outfit'] transition-colors">
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
