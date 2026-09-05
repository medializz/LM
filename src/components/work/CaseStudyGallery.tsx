import React from 'react';
import { ZoomIn, Eye } from 'lucide-react';
import { PortfolioItem, GalleryItem, SiteSettings } from '../../types';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';

interface CaseStudyGalleryProps {
  project?: PortfolioItem;
  items?: GalleryItem[];
  projectTitle?: string;
  siteSettings?: SiteSettings;
  onOpenLightbox: (idx: number) => void;
}

export const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({
  project,
  items,
  projectTitle = project?.title || 'Portfolio Project',
  siteSettings,
  onOpenLightbox,
}) => {
  const galleryItems: GalleryItem[] = items && items.length > 0
    ? items
    : project?.gallery && project.gallery.length > 0
    ? project.gallery
    : [
        {
          id: `${project?.slug || 'case'}-main`,
          title: `${projectTitle} - Primary Artifact`,
          caption: "High-resolution vector execution",
          image: project?.image,
          visualType: project?.visualType || 'brand-identity',
          layout: 'large',
        }
      ];

  return (
    <section 
      id="case-study-gallery" 
      className="space-y-6"
      aria-label="Visual Exhibition & Artifacts"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Visual Artifacts & Deliverables
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
            Production & Design System Assets
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Click any artifact to inspect in high-resolution master fidelity.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5 text-[#ffbe1a]" />
          <span>Interactive Lightbox Enabled</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {galleryItems.map((item, idx) => {
          const isLarge = item.layout === 'large' || (idx === 0 && galleryItems.length % 2 !== 0);
          return (
            <div
              key={item.id || idx}
              onClick={() => onOpenLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-[#ffbe1a]/60 shadow-2xl cursor-zoom-in transition-all duration-300 ${
                isLarge ? 'md:col-span-2 aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || `${projectTitle} Asset ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <ProjectGalleryVisual
                  visualType={item.visualType || project?.visualType || 'brand-identity'}
                  title={item.title || projectTitle}
                  siteSettings={siteSettings}
                />
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="px-4 py-2 rounded-full bg-black/85 border border-[#ffbe1a]/50 text-[#ffbe1a] font-mono text-xs flex items-center gap-2 shadow-2xl">
                  <Eye className="w-4 h-4" />
                  <span>Inspect Artifact #{idx + 1}</span>
                </div>
              </div>

              {item.title && (
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                  <span className="font-semibold text-white truncate mr-2">{item.title}</span>
                  {item.caption && <span className="text-[10px] text-slate-400 hidden sm:inline">{item.caption}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
