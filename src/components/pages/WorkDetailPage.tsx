import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Sparkles, Layers, ExternalLink, 
  Calendar, User, Wrench, Shield, CheckCircle2, MessageCircle, ChevronRight 
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
    { id: `${project.slug}-g1`, title: `${project.title} - Primary Identity`, caption: "Vector balance and typography alignment", visualType: project.visualType || 'brand-identity', layout: 'large' },
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
    const message = encodeURIComponent(`Hi ${siteSettings.siteName}, I saw your work on "${project.title}" and would like to discuss a project.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = `https://media.lizzdo.com/work/${project.slug}`;
  const seoTitle = project.seoTitle || `${project.title} Case Study | Lizzdo Media`;
  const seoDescription = project.seoDescription || project.description || "Explore this featured case study by Lizzdo Media.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "headline": project.title,
      "description": project.description,
      "genre": project.category,
      "url": canonicalUrl,
      "creator": {
        "@type": "Organization",
        "name": siteSettings.siteName,
        "url": "https://media.lizzdo.com/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://media.lizzdo.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Work",
          "item": "https://media.lizzdo.com/work"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": project.title,
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="article"
        schemaData={schemaData}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md pt-20">
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
            <span className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 px-3 py-1 rounded-full border border-[#ffbe1a]/30 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-['Outfit'] font-black text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.description || "A complete visual identity and architectural case study created to establish a distinctive and consistent market presence."}
            </p>
          </div>

          {/* Large Hero Showcase Asset */}
          <div 
            onClick={() => openLightboxAt(0)}
            className="w-full h-80 sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] bg-[#10131d] hover:border-[#ffbe1a]/50 transition-all cursor-pointer shadow-2xl relative group"
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
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-xs text-[#ffbe1a] font-mono flex items-center gap-1.5">
                <span>Click image to open high-resolution gallery preview</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CASE STUDY NARRATIVE & METRICS */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* The Challenge */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ffbe1a] font-bold">The Challenge</span>
              <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Context & Market Opportunity
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {challengeText}
              </p>
            </div>

            {/* Strategic Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ffbe1a] font-bold">The Strategic Solution</span>
              <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Bespoke Design & Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {solutionText || approachText}
              </p>
            </div>

            {/* Business Outcome */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffbe1a]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffbe1a] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Outcome & Impact</span>
              </div>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Measurable Value & Recognition
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {resultText}
              </p>
            </div>

          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-5">
              <h3 className="text-base font-bold font-['Outfit'] text-white pb-3 border-b border-white/[0.08]">
                Project Metadata
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 font-mono block text-xs">Discipline / Category</span>
                  <span className="text-white font-semibold mt-0.5 block">{project.category}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-mono block text-xs">Client Type</span>
                  <span className="text-white font-semibold mt-0.5 block">{project.client || 'Commercial Enterprise'}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-mono block text-xs">Year & Status</span>
                  <span className="text-white font-semibold mt-0.5 block">{project.year || '2024'} • Completed</span>
                </div>

                {((project.tools && project.tools.length > 0) || (project.services && project.services.length > 0)) && (
                  <div>
                    <span className="text-slate-400 font-mono block text-xs mb-1.5">Deliverables & Tools</span>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tools || project.services || []).map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[11px] text-slate-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact(project.title);
                  }}
                  className="w-full py-3 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-xs font-['Outfit'] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. CASE STUDY GALLERY */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Deliverables</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
                Project Gallery
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Click to view full</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={item.id || idx}
                onClick={() => openLightboxAt(idx)}
                className="group relative rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 p-4 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="h-48 sm:h-56 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                  <ProjectGalleryVisual visualType={item.visualType} title={item.title} />
                </div>
                <div className="mt-3 space-y-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#ffbe1a] transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PREV / NEXT NAVIGATION */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
          {prevProject && (
            <a
              href={`/work/${prevProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(`/work/${prevProject.slug}`);
              }}
              className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 text-left transition-all group flex items-center gap-4 cursor-pointer block"
            >
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-[#ffbe1a] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Previous Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors">{prevProject.title}</span>
              </div>
            </a>
          )}

          {nextProject && (
            <a
              href={`/work/${nextProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(`/work/${nextProject.slug}`);
              }}
              className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 text-right transition-all group flex items-center justify-end gap-4 cursor-pointer sm:ml-auto w-full block"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Next Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#ffbe1a] group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 5. RELATED SERVICES */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-white/[0.08]">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Related Capabilities</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServicesList.map((relService) => (
              <a
                key={relService.id}
                href={`/services/${relService.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/services/${relService.slug}`);
                }}
                className="text-left p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group flex items-center justify-between block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#ffbe1a]">
                    <ServiceIcon iconKey={relService.iconKey} size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#ffbe1a] transition-colors">{relService.title}</h4>
                    <span className="text-[10px] text-slate-400 font-mono">{relService.category}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FINAL CTA */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Inspired By This Project?</span>
            <h2 className="text-2xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Something Exceptional for Your Brand.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect directly with our creative team to plan, design, and launch your next high-impact release.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact(project.title);
                }}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Project →</span>
              </a>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-base font-['Outfit'] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp →</span>
              </button>
            </div>
          </div>
        </section>

      </div>

      {lightboxOpen && (
        <ImageLightbox
          items={galleryItems}
          initialIndex={activeGalleryIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};
