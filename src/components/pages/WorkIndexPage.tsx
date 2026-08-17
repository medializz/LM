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

  const categories = ['All', 'Branding', 'Graphic Design', 'Web Development', 'Social Media Design'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white selection:bg-[#e5a93c] selection:text-black">
      <SEOHead
        title="Lizzdo Media | Featured Work & Case Studies"
        description="Explore our curated portfolio of brand identity systems, custom packaging, modern SaaS dashboards, and e-commerce platforms."
        canonicalUrl="https://media.lizzdo.com/work"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md sticky top-16 z-30">
        <Breadcrumb items={[{ label: 'Work' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5a93c]/10 border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Our Featured <span className="text-[#e5a93c]">Work.</span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
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
                  ? 'bg-[#e5a93c] text-neutral-950 font-bold shadow-lg shadow-[#e5a93c]/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
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
              className="group bg-neutral-950 border border-neutral-800/80 hover:border-[#e5a93c]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Visual Presentation Frame */}
              <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <ProjectGalleryVisual visualType={project.visualType || 'brand-identity'} title={project.title} />
                )}

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#e5a93c] bg-neutral-950/90 px-3 py-1 rounded-full border border-[#e5a93c]/30 shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#e5a93c] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-[#e5a93c] font-semibold">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Box */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-[#e5a93c]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Ready to Collaborate?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Your Next High-Impact Project.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Speak directly with our team about your brand, timelines, and goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#e5a93c]/20 cursor-pointer"
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
