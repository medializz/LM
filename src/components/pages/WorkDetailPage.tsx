import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Sparkles, Layers, ExternalLink, 
  Calendar, User, Wrench, Shield, CheckCircle2, MessageCircle 
} from 'lucide-react';
import { PortfolioItem, DecapCMSData, GalleryItem } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';
import { ImageLightbox } from '../ImageLightbox';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { ServiceIcon } from '../ServiceIcons';

interface WorkDetailPageProps {
  project: PortfolioItem;
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const WorkDetailPage: React.FC<WorkDetailPageProps> = ({
  project,
  cmsData,
  onOpenContact
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const { siteSettings, portfolio = [], services = [] } = cmsData;

  // Project index and next/prev calculation
  const currentIndex = portfolio.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? portfolio[currentIndex - 1] : portfolio[portfolio.length - 1];
  const nextProject = currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : portfolio[0];

  // Default Gallery items if not in CMS
  const defaultGallery: GalleryItem[] = [
    { id: `${project.slug}-g1`, title: `${project.title} - Primary Identity`, caption: "Luxury aesthetic balance and typography alignment", visualType: project.visualType || 'brand-identity', layout: 'large' },
    { id: `${project.slug}-g2`, title: `${project.title} - Detail Close-Up`, caption: "Material specifications & vector grid", visualType: project.visualType === 'brand-identity' ? 'brand-identity' : 'packaging', layout: 'half' },
    { id: `${project.slug}-g3`, title: `${project.title} - Digital Implementation`, caption: "Cross-platform deployment", visualType: project.visualType === 'saas-dashboard' ? 'saas-dashboard' : 'ecommerce', layout: 'half' },
  ];

  const galleryItems = project.gallery && project.gallery.length > 0 ? project.gallery : defaultGallery;

  // Case study story defaults
  const challengeText = project.challenge || "The client required a distinctive, high-end creative presence to separate their offering from crowded industry competitors while preserving clarity and trust.";
  const approachText = project.approach || project.strategy || "We formulated a structured visual architecture combining refined typography with geometric dielines, tactile substrates, and responsive brand rules.";
  const strategyText = project.strategy || "We formulated an obsidian-and-gold visual architecture, combining ultra-refined typography with structured geometry and responsive cross-device layout principles.";
  const designText = project.design || "Every vector node, color code, and layout hierarchy was tested across digital and physical substrates to ensure uncompromising visual authority.";
  const executionText = project.execution || "Production-ready guidelines, component libraries, high-resolution rendering, and full source assets were packaged and deployed.";
  const solutionText = project.solution;
  const resultText = project.result || "Achieved immediate market recognition, increased customer engagement by over 45%, and established a cohesive brand system across all touchpoints.";

  // Process timeline
  const designSteps = project.processSteps || [
    { stepNumber: "01", title: "Research", description: "Market analysis & aesthetic auditing" },
    { stepNumber: "02", title: "Concept", description: "Exploratory moodboards & sketches" },
    { stepNumber: "03", title: "Design", description: "High-fidelity vector design craft" },
    { stepNumber: "04", title: "Refinement", description: "Substrate testing & precision tuning" },
    { stepNumber: "05", title: "Final", description: "Asset packaging & system handoff" },
  ];

  // Related Services
  const relatedServicesList = services.slice(0, 3);

  // Related Projects (excluding current)
  const relatedProjectsList = portfolio.filter(p => p.slug !== project.slug).slice(0, 2);

  const openLightboxAt = (idx: number) => {
    setActiveGalleryIndex(idx);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hi Lizzdo Media, I saw your work on "${project.title}" and would like to discuss a project.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = `https://media.lizzdo.com/work/${project.slug}`;
  const seoTitle = project.seoTitle || `Lizzdo Media | ${project.title} Case Study`;
  const seoDescription = project.seoDescription || project.description || "Explore this featured case study by Lizzdo Media.";

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white selection:bg-[#e5a93c] selection:text-black">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.title,
          "headline": project.title,
          "creator": {
            "@type": "Organization",
            "name": siteSettings.siteName,
            "url": "https://media.lizzdo.com/"
          },
          "description": project.description,
          "genre": project.category
        }}
      />

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryItems}
        currentIndex={activeGalleryIndex}
        onIndexChange={setActiveGalleryIndex}
        siteSettings={siteSettings}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md sticky top-16 z-30">
        <Breadcrumb
          items={[
            { label: 'Work', href: '/work' },
            { label: project.title }
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. PROJECT HERO */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#e5a93c] bg-[#e5a93c]/10 px-3 py-1 rounded-full border border-[#e5a93c]/30">
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-['Outfit'] font-black text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              {project.description || "A complete visual identity and architectural case study created to establish a distinctive and consistent market presence."}
            </p>
          </div>

          {/* Large Hero Showcase Asset */}
          <div 
            onClick={() => openLightboxAt(0)}
            className="w-full h-80 sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-[#e5a93c]/50 transition-all cursor-pointer shadow-2xl relative group"
          >
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-xs font-mono text-[#e5a93c] bg-neutral-950/90 px-3 py-1.5 rounded-lg border border-[#e5a93c]/40 flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5" /> Click to expand showcase in Lightbox
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. PROJECT META INFORMATION PANEL */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono text-neutral-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#e5a93c]" /> Client
            </span>
            <div className="text-sm font-semibold text-white">{project.client || "Confidential Partner"}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono text-neutral-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#e5a93c]" /> Category
            </span>
            <div className="text-sm font-semibold text-white">{project.category}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono text-neutral-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#e5a93c]" /> Year
            </span>
            <div className="text-sm font-semibold text-white">{project.year || "2026"}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono text-neutral-500 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#e5a93c]" /> Tools
            </span>
            <div className="text-sm font-semibold text-white">
              {project.tools ? project.tools.join(', ') : "Figma, Illustrator, React"}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CASE STUDY STORY SECTIONS */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 sticky top-28 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Case Study Narrative</span>
            <h2 className="text-3xl font-['Outfit'] font-black text-white">
              Strategic Narrative & Execution
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every project is an intersection of disciplined research, high-craft aesthetics, and tangible commercial performance.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {/* 01 Challenge */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#e5a93c]">01 / CHALLENGE</span>
              <h3 className="text-lg font-bold text-white">The Core Challenge</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{challengeText}</p>
            </div>

            {/* 02 Strategy / Approach */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#e5a93c]">02 / STRATEGY & APPROACH</span>
              <h3 className="text-lg font-bold text-white">Strategic Architecture</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{approachText || strategyText}</p>
            </div>

            {/* 03 Design Craft */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#e5a93c]">03 / DESIGN CRAFT</span>
              <h3 className="text-lg font-bold text-white">Visual Design & Dielines</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{designText}</p>
            </div>

            {/* 04 Execution / Solution */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-[#e5a93c]">04 / SYSTEM DEPLOYMENT</span>
              <h3 className="text-lg font-bold text-white">Production & Implementation</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{solutionText || executionText}</p>
            </div>

            {/* 05 Result */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-[#e5a93c]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#e5a93c]">05 / THE RESULT</span>
              <h3 className="text-lg font-bold text-white">Outcome & Key Metrics</h3>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">{resultText}</p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.5. PACKAGING SUBSTRATES & DIELINE SPECIFICATIONS (IF PRESENT) */}
        {/* ========================================================================= */}
        {(project.materials || project.dielineSpecs) && (
          <section className="space-y-6 bg-neutral-950/80 border border-neutral-800/90 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Substrates & Finishes</span>
                <h3 className="text-2xl font-['Outfit'] font-bold text-white">Tactile Materials & Dieline Engineering</h3>
              </div>
              <span className="text-xs text-neutral-400 font-mono">FSC Certified • Production Calibrated</span>
            </div>

            {project.dielineSpecs && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/50 p-4 rounded-2xl border border-neutral-800/80 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Dimensions</span>
                  <span className="text-white font-semibold">{project.dielineSpecs.dimensions}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Paperboard Stock</span>
                  <span className="text-white font-semibold">{project.dielineSpecs.stock}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Finishes</span>
                  <span className="text-[#e5a93c] font-semibold">{project.dielineSpecs.finish}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Closure Mechanism</span>
                  <span className="text-white font-semibold">{project.dielineSpecs.closure}</span>
                </div>
              </div>
            )}

            {project.materials && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.materials.map((mat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: mat.color }} />
                      <span className="text-sm font-bold text-white font-['Outfit']">{mat.name}</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-mono">{mat.spec}</p>
                    <span className="text-[11px] text-[#e5a93c] font-mono block">{mat.finish}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ========================================================================= */}
        {/* 4. DESIGN PROCESS TIMELINE */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Progression</span>
            <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white">Design Journey</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {designSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-2 relative"
              >
                <span className="text-xs font-mono font-bold text-[#e5a93c]">{step.stepNumber}</span>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. EDITORIAL GALLERY */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Asset Gallery</span>
              <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white">Visual Artifacts</h2>
            </div>
            <span className="text-xs text-neutral-500 font-mono">Click to view in lightbox</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => openLightboxAt(idx)}
                className={`group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-[#e5a93c]/60 transition-all cursor-pointer shadow-xl ${
                  item.layout === 'large' ? 'md:col-span-2' : ''
                }`}
              >
                <div className="h-72 sm:h-80 w-full overflow-hidden">
                  <ProjectGalleryVisual 
                    visualType={item.visualType || project.visualType || 'brand-identity'} 
                    title={item.title} 
                    siteSettings={siteSettings}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-base group-hover:text-[#e5a93c] transition-colors">{item.title}</h4>
                      {item.caption && <p className="text-xs text-neutral-400 mt-0.5">{item.caption}</p>}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white border border-neutral-700 flex items-center justify-center group-hover:bg-[#e5a93c] group-hover:text-black transition-all">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PREVIOUS / NEXT PROJECT NAVIGATION */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800">
          {prevProject && (
            <button
              onClick={() => navigateTo(`/work/${prevProject.slug}`)}
              className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#e5a93c]/50 text-left transition-all group flex items-center gap-4 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-500 group-hover:text-[#e5a93c] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Previous Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#e5a93c] transition-colors">{prevProject.title}</span>
              </div>
            </button>
          )}

          {nextProject && (
            <button
              onClick={() => navigateTo(`/work/${nextProject.slug}`)}
              className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#e5a93c]/50 text-right transition-all group flex items-center justify-end gap-4 cursor-pointer sm:ml-auto w-full"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Next Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#e5a93c] transition-colors">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-[#e5a93c] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 7. RELATED SERVICES & WORK */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-neutral-800/80">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-500">Related Capabilities</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServicesList.map((relService) => (
              <button
                key={relService.id}
                onClick={() => navigateTo(`/services/${relService.slug}`)}
                className="text-left p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#e5a93c]/50 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-[#e5a93c]">
                    <ServiceIcon iconKey={relService.iconKey} size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#e5a93c] transition-colors">{relService.title}</h4>
                    <span className="text-[10px] text-neutral-500 font-mono">{relService.category}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#e5a93c] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FINAL CASE STUDY CTA */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-[#e5a93c]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Inspired By This Project?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Something Exceptional for Your Brand.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Connect directly with our creative team to plan, design, and launch your next high-impact release.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact(project.title)}
                className="px-8 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#e5a93c]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Project →</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-base transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp →</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
