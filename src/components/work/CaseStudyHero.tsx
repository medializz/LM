import React from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Calendar, MapPin, Tag } from 'lucide-react';
import { PortfolioItem, SiteSettings } from '../../types';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';

interface CaseStudyHeroProps {
  project: PortfolioItem;
  siteSettings?: SiteSettings;
  onStartSimilarProject: () => void;
  onOpenHeroGallery?: () => void;
  galleryCount?: number;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  project,
  siteSettings,
  onStartSimilarProject,
  onOpenHeroGallery,
  galleryCount = 1,
}) => {
  const resultHighlight = project.result || project.results;
  const liveUrl = project.projectUrl || project.externalUrl;
  const heroImageSrc = project.heroImage || project.headerImage || project.headerMockup || project.image || project.featuredImage;

  return (
    <section 
      id="case-study-hero"
      aria-label={`${project.title} Case Study`}
      className="space-y-8"
    >
      {/* Top Meta & Titles */}
      <div className="space-y-4">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 px-3 py-1 rounded-full font-bold">
            {project.category}
          </span>
          {project.industry && (
            <span className="text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#ffbe1a]" />
              {project.industry}
            </span>
          )}
          {project.location && (
            <span className="text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {project.location}
            </span>
          )}
          {project.year && (
            <span className="text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {project.year}
            </span>
          )}
        </div>

        {/* Project Title & Client Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-sm font-mono text-slate-400 uppercase tracking-wider block">
              Client: <strong className="text-white">{project.client || project.brand || 'Confidential Client'}</strong>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.08]">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Action Button & Impact Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
            {resultHighlight && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="max-w-xs truncate">{resultHighlight}</span>
              </div>
            )}

            <button
              id="case-study-start-similar-btn"
              onClick={onStartSimilarProject}
              className="px-6 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Visual Image Showcase */}
      <div 
        onClick={() => onOpenHeroGallery && onOpenHeroGallery()}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-black/60 border border-white/[0.08] shadow-2xl group cursor-zoom-in"
      >
        {heroImageSrc ? (
          <img
            src={heroImageSrc}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter contrast-[1.02]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        ) : (
          <ProjectGalleryVisual
            visualType={project.visualType || 'brand-identity'}
            title={project.title}
            siteSettings={siteSettings}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-5 right-5 z-10 px-4 py-2 rounded-full bg-black/80 hover:bg-[#ffbe1a] text-white hover:text-black border border-white/20 font-mono text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg"
          >
            <span>Visit Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        <div className="absolute bottom-5 left-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
          <span>Click to Inspect High-Resolution ({galleryCount} artifacts)</span>
        </div>
      </div>
    </section>
  );
};
