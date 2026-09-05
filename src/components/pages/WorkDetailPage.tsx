import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PortfolioItem, DecapCMSData, GalleryItem } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ImageLightbox } from '../ImageLightbox';
import { ProjectInquiryChoiceModal } from '../ProjectInquiryChoiceModal';
import { navigateTo } from '../../utils/router';
import { createWorkWhatsAppUrl } from '../../utils/whatsapp';
import { getServicesForWork, getRelatedProjects } from '../../data/cmsContent';

// Modular Case Study Components
import { CaseStudyHero } from '../work/CaseStudyHero';
import { CaseStudyMeta } from '../work/CaseStudyMeta';
import { CaseStudyStory } from '../work/CaseStudyStory';
import { CaseStudyGallery } from '../work/CaseStudyGallery';
import { CaseStudyTestimonial } from '../work/CaseStudyTestimonial';
import { RelatedServiceBanner } from '../work/RelatedServiceBanner';
import { RelatedProjects } from '../work/RelatedProjects';
import { ProjectCTA } from '../work/ProjectCTA';

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
  const [inquiryChoiceOpen, setInquiryChoiceOpen] = useState(false);

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

  // Primary Related Service (using centralized bidirectional helper)
  const servicesUsed = getServicesForWork(project, services, portfolio);
  const primaryService = servicesUsed.length > 0 ? servicesUsed[0] : services.find(s => s.category?.toLowerCase() === project.category?.toLowerCase()) || null;

  // Related Projects (excluding current, resolved via relationship helper)
  const relatedProjectsList = getRelatedProjects(project, portfolio, 2);

  const openLightboxAt = (idx: number) => {
    setActiveGalleryIndex(idx);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const url = createWorkWhatsAppUrl(
      siteSettings.whatsappNumber,
      project.title,
      project.client,
      siteSettings.siteName
    );
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
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
        
        {/* 1. VISUAL CASE STUDY HERO */}
        <CaseStudyHero
          project={project}
          siteSettings={siteSettings}
          onStartSimilarProject={() => setInquiryChoiceOpen(true)}
          onOpenHeroGallery={() => openLightboxAt(0)}
          galleryCount={galleryItems.length}
        />

        {/* 2. STORY NARRATIVE & METADATA GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-10">
            <CaseStudyStory project={project} />

            {/* Testimonial if available */}
            {project.testimonial && (
              <CaseStudyTestimonial
                project={project}
                quote={project.testimonial}
                author={project.testimonialAuthor}
                role={project.testimonialCompany}
              />
            )}
          </div>

          {/* Project Details Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28">
            <CaseStudyMeta
              project={project}
              services={services}
              onRequestSimilar={() => setInquiryChoiceOpen(true)}
              onWhatsApp={handleWhatsApp}
            />
          </div>

        </section>

        {/* 3. CASE STUDY GALLERY */}
        <CaseStudyGallery
          items={galleryItems}
          projectTitle={project.title}
          siteSettings={siteSettings}
          onOpenLightbox={openLightboxAt}
        />

        {/* 4. PROMINENT RELATED SERVICE BANNER (Service to Work linkage) */}
        {primaryService && (
          <RelatedServiceBanner
            service={primaryService}
            onNavigate={navigateTo}
          />
        )}

        {/* 5. PREVIOUS / NEXT CASE STUDY NAVIGATION */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
          {prevProject && (
            <div
              onClick={() => navigateTo(`/work/${prevProject.slug}`)}
              className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 text-left transition-all group flex items-center gap-4 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-[#ffbe1a] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Previous Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors">{prevProject.title}</span>
              </div>
            </div>
          )}

          {nextProject && (
            <div
              onClick={() => navigateTo(`/work/${nextProject.slug}`)}
              className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 text-right transition-all group flex items-center justify-end gap-4 cursor-pointer sm:ml-auto w-full"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Next Case Study</span>
                <span className="text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#ffbe1a] group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          )}
        </section>

        {/* 6. RELATED CASE STUDIES */}
        <RelatedProjects
          projects={relatedProjectsList}
          currentSlug={project.slug}
          onNavigate={navigateTo}
        />

        {/* 7. PROJECT INQUIRY CTA */}
        <ProjectCTA
          project={project}
          onStartProject={() => setInquiryChoiceOpen(true)}
          onWhatsApp={handleWhatsApp}
          onContactForm={() => navigateTo(`/contact?project=${encodeURIComponent(project.slug)}&service=${encodeURIComponent(project.category)}`)}
        />

      </div>

      {lightboxOpen && (
        <ImageLightbox
          items={galleryItems}
          initialIndex={activeGalleryIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Start Similar Project Modal (WhatsApp vs Contact Form clean choice) */}
      <ProjectInquiryChoiceModal
        isOpen={inquiryChoiceOpen}
        onClose={() => setInquiryChoiceOpen(false)}
        title={project.title}
        category={project.category}
        client={project.client || project.brand}
        slug={project.slug}
        type="work"
        siteSettings={siteSettings}
        customWhatsAppMessage={project.whatsappMessage}
      />
    </div>
  );
};
