import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';
import { navigateTo } from '../../utils/router';

interface WorkIndexPageProps {
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const WorkIndexPage: React.FC<WorkIndexPageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const { portfolio = [], siteSettings } = cmsData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Branding', 'Graphic Design', 'Web Development', 'Social Media Design', 'Packaging'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(p => p.category?.toLowerCase().includes(selectedCategory.toLowerCase()) || p.shortCategory?.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title="Lizzdo Media | Featured Work & Case Studies"
        description="Explore our curated portfolio of brand identity systems, custom packaging, modern SaaS dashboards, and e-commerce platforms."
        canonicalUrl="https://media.lizzdo.com/work"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md pt-20">
        <Breadcrumb items={[{ label: 'Work' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Our Featured <span className="text-[#ffbe1a]">Work.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse of our recent projects that define our creativity, precision, and dedication to helping brands stand out.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ffbe1a] text-black font-bold shadow-lg shadow-[#ffbe1a]/20'
                  : 'bg-[#10131d] text-slate-300 hover:text-white hover:bg-[#161a26] border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo(`/work/${project.slug}`)}
              className="group bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Visual Presentation Frame */}
              <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-black/40">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <ProjectGalleryVisual 
                    visualType={project.visualType || 'brand-identity'} 
                    title={project.title} 
                    siteSettings={siteSettings}
                  />
                )}

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#07090e]/90 px-3 py-1 rounded-full border border-[#ffbe1a]/30 shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#ffbe1a] font-semibold">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Box */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Ready to Collaborate?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Your Next High-Impact Project.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Speak directly with our team about your brand, timelines, and goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#ffbe1a]/20 cursor-pointer"
              >
                Let's Talk →
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
