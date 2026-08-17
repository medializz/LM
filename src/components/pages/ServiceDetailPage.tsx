import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, MessageCircle, Sparkles, Layers, 
  ChevronRight, ExternalLink, ShieldCheck, Zap
} from 'lucide-react';
import { ServiceCategory, DecapCMSData, GalleryItem } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { ServiceHeroVisual } from '../visuals/ServiceHeroVisual';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';
import { ImageLightbox } from '../ImageLightbox';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { ServiceIcon } from '../ServiceIcons';

interface ServiceDetailPageProps {
  service: ServiceCategory;
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  cmsData,
  onOpenContact
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const { siteSettings, services = [], portfolio = [] } = cmsData;

  // Fallback defaults for rich fields if not in basic CMS
  const heroHeadline = service.heroHeadline || service.title;
  const heroHighlight = service.heroHighlight || "That Defines You";
  const heroDesc = service.heroDescription || service.shortDescription;
  const ctaBtnText = service.ctaButtonText || (
    service.slug === 'brand-identity' ? 'Build My Brand →' :
    service.slug === 'logo-design' ? 'Start a Logo Project →' :
    service.slug === 'web-development' || service.slug === 'website-development' ? 'Build My Website →' :
    "Start a Project →"
  );

  // Dynamic process steps (6 stages)
  const defaultProcess = [
    { stepNumber: "01", title: "Discovery", description: "In-depth research into your business goals, competitors, and target audience." },
    { stepNumber: "02", title: "Strategy", description: "Formulating a tailored visual direction and architectural roadmap." },
    { stepNumber: "03", title: "Design", description: "Crafting bespoke design systems and iterative aesthetic concepts." },
    { stepNumber: "04", title: "Refinement", description: "Polishing details, typography, responsive states, and client feedback." },
    { stepNumber: "05", title: "Execution", description: "Building production-ready assets and engineering scalable solutions." },
    { stepNumber: "06", title: "Final Delivery", description: "Deploying final packages, guidelines, source vectors, and documentation." }
  ];

  const processSteps = service.processSteps && service.processSteps.length > 0
    ? service.processSteps
    : defaultProcess;

  // Dynamic Deliverables
  const deliverables = service.deliverables || [
    "Full Vector Source Files (AI, SVG, PDF)",
    "Comprehensive Brand & Design Guidelines",
    "High-Resolution Digital & Print Formats",
    "Tailored Commercial License Rights",
    "Responsive Multi-Device Production Assets",
    "Dedicated Creative Director Support"
  ];

  // Gallery items for this service
  const galleryItems: GalleryItem[] = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [
        { id: `${service.slug}-g1`, title: `${service.title} - Showcase 01`, caption: "Vector precision & aesthetic hierarchy", visualType: service.slug === 'brand-identity' ? 'brand-identity' : service.slug === 'web-development' ? 'saas-dashboard' : 'packaging', layout: 'large' },
        { id: `${service.slug}-g2`, title: `${service.title} - System Details`, caption: "Typography and color specifications", visualType: 'brand-identity', layout: 'half' },
        { id: `${service.slug}-g3`, title: `${service.title} - Digital Application`, caption: "Responsive multi-platform asset", visualType: 'saas-dashboard', layout: 'half' },
      ];

  // Related services
  const relatedServicesList = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  // Related work projects
  const relatedWorkList = portfolio
    .filter(p => (service.relatedProjects && service.relatedProjects.includes(p.slug)) || p.category === service.category || p.category === 'Branding')
    .slice(0, 2);

  const openLightboxAt = (idx: number) => {
    setActiveGalleryIndex(idx);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hi Lizzdo Media, I am interested in your ${service.title} service.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = `https://media.lizzdo.com/services/${service.slug}`;
  const seoTitle = service.seoTitle || `Lizzdo Media | ${service.title}`;
  const seoDescription = service.seoDescription || service.shortDescription;

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white selection:bg-[#e5a93c] selection:text-black">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="service"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "provider": {
            "@type": "Organization",
            "name": siteSettings.siteName,
            "url": "https://media.lizzdo.com/"
          },
          "description": service.shortDescription,
          "serviceType": service.category
        }}
      />

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryItems}
        currentIndex={activeGalleryIndex}
        onIndexChange={setActiveGalleryIndex}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md sticky top-16 z-30">
        <Breadcrumb 
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title }
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5a93c]/10 border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category || "CREATIVE SERVICE"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-black text-white tracking-tight leading-[1.1]">
              {service.title} <br className="hidden sm:inline" />
              <span className="text-[#e5a93c]">{heroHighlight}</span>
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {heroDesc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact(service.title)}
                className="px-6 py-3 rounded-xl bg-[#e5a93c] hover:bg-amber-400 text-neutral-950 font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#e5a93c]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>{ctaBtnText}</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-medium text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-6">
            <ServiceHeroVisual slug={service.slug} />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OVERVIEW & DELIVERABLES */}
        {/* ========================================================================= */}
        <section className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">What is Included</span>
            <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white tracking-tight">
              Designed for Measurable Impact & Scalability
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Every deliverable is crafted to fit seamlessly into your broader brand architecture, ensuring visual consistency across all customer touchpoints.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800/60"
              >
                <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SIX-STEP SERVICE PROCESS */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Structured Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white">
              Our 6-Step Execution Method
            </h2>
            <p className="text-neutral-400 text-sm">
              Transparent, disciplined, and focused on creative perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-neutral-950 border border-neutral-800/80 hover:border-[#e5a93c]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black font-['Outfit'] text-neutral-600 group-hover:text-[#e5a93c] transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VISUAL SHOWCASE GALLERY */}
        {/* ========================================================================= */}
        {galleryItems.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Visual Portfolio</span>
                <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white">
                  {service.title} in Action
                </h2>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                Click any asset to expand
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id || idx}
                  onClick={() => openLightboxAt(idx)}
                  className={`group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-[#e5a93c]/60 transition-all cursor-pointer shadow-xl ${
                    item.layout === 'large' ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="h-64 sm:h-72 w-full overflow-hidden">
                    <ProjectGalleryVisual visualType={item.visualType || 'brand-identity'} title={item.title} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-[#e5a93c] transition-colors">{item.title}</h4>
                        {item.caption && <p className="text-xs text-neutral-400 mt-0.5">{item.caption}</p>}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-neutral-900/90 text-white border border-neutral-700 flex items-center justify-center group-hover:bg-[#e5a93c] group-hover:text-black transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 5. RELATED WORK / CASE STUDIES */}
        {/* ========================================================================= */}
        {relatedWorkList.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Case Studies</span>
                <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white">
                  Related Projects
                </h2>
              </div>
              <button
                onClick={() => navigateTo('/work')}
                className="text-xs sm:text-sm text-neutral-400 hover:text-[#e5a93c] flex items-center gap-1 font-mono transition-colors"
              >
                View All Work <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedWorkList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigateTo(`/work/${project.slug}`)}
                  className="group bg-neutral-950 border border-neutral-800 hover:border-[#e5a93c]/60 rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#e5a93c] bg-[#e5a93c]/10 px-2 py-0.5 rounded border border-[#e5a93c]/30">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e5a93c] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#e5a93c] font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. RELATED SERVICES DIRECTORY */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-neutral-800/80">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-500">Explore Other Services</span>
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
                <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-[#e5a93c] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. FINAL SERVICE PAGE CTA */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-[#e5a93c]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(#e5a93c15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Have a Project in Mind?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Something That Represents Your Brand.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Contact us to discuss requirements and receive an estimated timeline and tailored creative plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact(service.title)}
                className="px-8 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#e5a93c]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Talk →</span>
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
