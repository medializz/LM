import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, MessageCircle, Sparkles, Layers, 
  ChevronRight, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, Zap
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { siteSettings, services = [], portfolio = [] } = cmsData;

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

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

  // Dynamic capabilities
  const capabilities = service.capabilities && service.capabilities.length > 0
    ? service.capabilities
    : [
        "Strategic Concept & Visual Direction",
        "High-Fidelity Production Assets",
        "Brand Consistency & System Architecture",
        "Responsive Digital & Print Formats",
        "Dedicated Creative Director Support",
        "Master Source Files with Full Commercial Ownership"
      ];

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
    .filter(p => 
      (service.relatedProjects && service.relatedProjects.includes(p.slug)) ||
      (p.relatedServices && p.relatedServices.includes(service.slug)) ||
      (p.relatedService && p.relatedService === service.slug) ||
      p.category.toLowerCase().includes(service.category.toLowerCase()) ||
      (p.services && p.services.some(s => s.toLowerCase().includes(service.title.toLowerCase())))
    )
    .slice(0, 2);

  const openLightboxAt = (idx: number) => {
    setActiveGalleryIndex(idx);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hello Lizzdo Media, I'm interested in your ${service.title} service and would like to discuss a project.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = `https://media.lizzdo.com/services/${service.slug}`;
  const seoTitle = service.seoTitle || `${service.title} Services | Lizzdo Media`;
  const seoDescription = service.seoDescription || service.shortDescription;

  const schemaData: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "serviceType": service.category,
      "description": service.shortDescription,
      "url": canonicalUrl,
      "provider": {
        "@type": "Organization",
        "name": siteSettings.siteName,
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg"
      },
      "areaServed": "Worldwide"
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
          "name": "Services",
          "item": "https://media.lizzdo.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": canonicalUrl
        }
      ]
    }
  ];

  if (service.faqs && service.faqs.length > 0) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="service"
        schemaData={schemaData}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md pt-20">
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold tracking-wider uppercase">
              <ServiceIcon iconKey={service.iconKey} size={14} />
              <span>{service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.1]">
              {heroHeadline}{' '}
              <span className="text-[#ffbe1a]">{heroHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {heroDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact(service.title);
                }}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-[0_0_20px_rgba(255,190,26,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>{ctaBtnText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-sm font-['Outfit'] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Quick Guarantees Pill Bar */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffbe1a]" />
                <span>100% Vector Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffbe1a]" />
                <span>Zero AI Templates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffbe1a]" />
                <span>Dedicated Director</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#10131d] p-6 sm:p-8 shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffbe1a]/10 rounded-full blur-3xl pointer-events-none" />
              {service.previewImage ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] p-4 sm:p-6 flex items-center justify-center min-h-[220px]">
                    <img 
                      src={service.previewImage} 
                      alt={service.previewImageAlt || `${service.title} visual preview`}
                      className="w-auto max-h-48 sm:max-h-56 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffbe1a]" />
                    <span>{service.previewImageAlt || `${service.title} Visual Specification`}</span>
                  </div>
                </div>
              ) : (
                <ServiceHeroVisual visualType={service.slug} title={service.title} />
              )}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT WE OFFER / KEY CAPABILITIES */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Core Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
              What We Offer in {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-7 h-7 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#ffbe1a] transition-colors">{item}</h3>
                  <p className="text-xs text-slate-400 mt-1">Bespoke execution tailored to your specific brand goals.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. DELIVERABLES & WHAT'S INCLUDED */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Deliverables & Scope</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
              Tangible Assets You Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 transition-all flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#ffbe1a]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. STEP-BY-STEP PRODUCTION PROCESS */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Workflow</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
              Our 6-Phase Creative Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-['Outfit'] text-[#ffbe1a]/60 group-hover:text-[#ffbe1a] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-500">Stage {idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SERVICE GALLERY */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Visual Gallery</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
                Execution Artifacts
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Click to expand</span>
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
        {/* 5. SERVICE FAQS ACCORDION */}
        {/* ========================================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/[0.08]">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Service FAQs</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Frequently Asked Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-xl bg-[#10131d] border border-white/[0.08] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-[#ffbe1a] transition-colors"
                    >
                      <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. RELATED WORK / CASE STUDIES */}
        {/* ========================================================================= */}
        {relatedWorkList.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Case Studies</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                  Related Projects
                </h2>
              </div>
              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/work');
                }}
                className="text-xs sm:text-sm text-slate-400 hover:text-[#ffbe1a] flex items-center gap-1 font-mono transition-colors"
              >
                View All Work <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedWorkList.map((project) => (
                <a
                  key={project.id}
                  href={`/work/${project.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/work/${project.slug}`);
                  }}
                  className="group bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 block flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe1a] bg-[#ffbe1a]/10 px-2 py-0.5 rounded border border-[#ffbe1a]/30">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#ffbe1a] font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 7. RELATED SERVICES DIRECTORY */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-white/[0.08]">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Explore Other Disciplines</span>
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
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FINAL SERVICE PAGE CTA */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Have a Project in Mind?</span>
            <h2 className="text-2xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Something Exceptional for Your Brand.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact us to discuss your requirements and receive a comprehensive timeline and tailored creative plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact(service.title);
                }}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Talk →</span>
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
