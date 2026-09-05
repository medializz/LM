import React, { useState } from 'react';
import { ServiceCategory, DecapCMSData, GalleryItem, ServicePackage } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ImageLightbox } from '../ImageLightbox';
import { ProjectInquiryChoiceModal } from '../ProjectInquiryChoiceModal';
import { navigateTo } from '../../utils/router';
import { createServiceWhatsAppUrl } from '../../utils/whatsapp';
import { getWorksForService, getRelatedServices, getBundlesForService } from '../../data/cmsContent';

// Modular Service Components
import { ServiceHero } from '../services/ServiceHero';
import { ServiceIntro } from '../services/ServiceIntro';
import { ServiceDeliverables } from '../services/ServiceDeliverables';
import { ServiceProcess } from '../services/ServiceProcess';
import { ServiceRelatedWork } from '../services/ServiceRelatedWork';
import { ServiceFAQ } from '../services/ServiceFAQ';
import { ServiceCTA } from '../services/ServiceCTA';
import { ProjectGalleryVisual } from '../visuals/ProjectGalleryVisual';
import { ServiceIcon } from '../ServiceIcons';
import { Sparkles, ChevronRight } from 'lucide-react';

import {
  PackageGrid,
  AddonSelector,
  PackageComparisonTable,
  WhoIsThisForSection,
  BundleCard
} from '../services/packages';

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
  const [inquiryChoiceOpen, setInquiryChoiceOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const { siteSettings, services = [], portfolio = [], bundles = [] } = cmsData;

  // Gallery items for this service
  const galleryItems: GalleryItem[] = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [
        { id: `${service.slug}-g1`, title: `${service.title} - Showcase 01`, caption: "Vector precision & aesthetic hierarchy", visualType: service.slug === 'brand-identity' ? 'brand-identity' : service.slug === 'web-development' ? 'saas-dashboard' : 'packaging', layout: 'large' },
        { id: `${service.slug}-g2`, title: `${service.title} - System Details`, caption: "Typography and color specifications", visualType: 'brand-identity', layout: 'half' },
        { id: `${service.slug}-g3`, title: `${service.title} - Digital Application`, caption: "Responsive multi-platform asset", visualType: 'saas-dashboard', layout: 'half' },
      ];

  // Related services (using centralized helper)
  const relatedServicesList = getRelatedServices(service, services, 3);

  // Related work projects (using centralized bidirectional helper)
  const relatedWorkList = getWorksForService(service, portfolio, services);

  // Applicable cross-service bundles
  const applicableBundles = getBundlesForService(service.slug, bundles);

  const handleRequestPackageInquiry = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
    setInquiryChoiceOpen(true);
  };

  const openLightboxAt = (idx: number) => {
    setActiveGalleryIndex(idx);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const url = createServiceWhatsAppUrl(
      siteSettings.whatsappNumber,
      service.title,
      siteSettings.siteName,
      service.whatsappMessage,
      service.category
    );
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleScrollToPackages = () => {
    const el = document.getElementById('service-packages-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canonicalUrl = service.canonicalUrl || `https://media.lizzdo.com/services/${service.slug}`;
  const seoTitle = service.seoTitle || `${service.title} Services | Lizzdo Media`;
  const seoDescription = service.seoDescription || service.shortDescription || `Professional ${service.title} services by Lizzdo Media.`;

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
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg",
        "telephone": siteSettings.phone || "+44 7930 862315",
        "email": siteSettings.contactEmail || "contact@media.lizzdo.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cardiff",
          "addressRegion": "South Wales",
          "addressCountry": "GB"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Cardiff" },
        { "@type": "AdministrativeArea", "name": "South Wales" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Place", "name": "Worldwide" }
      ]
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

  // Add structured offer catalog schema if packages are defined
  if (service.packages && service.packages.length > 0) {
    (schemaData[0] as any).hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${service.title} Packages`,
      "itemListElement": service.packages.map((pkg) => ({
        "@type": "Offer",
        "name": pkg.name,
        "description": pkg.description,
        "price": pkg.price,
        "priceCurrency": "GBP",
        "url": `${canonicalUrl}#package-card-${pkg.id}`,
        "itemOffered": {
          "@type": "Service",
          "name": `${service.title} - ${pkg.name}`
        }
      }))
    };
  }

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
        keywords={service.seoKeywords}
        ogImage={service.ogImage || service.seoImage || service.heroImage}
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
        
        {/* 1. AGENCY HERO SECTION */}
        <ServiceHero
          service={service}
          siteSettings={siteSettings}
          onStartProject={() => setInquiryChoiceOpen(true)}
          onWhatsApp={handleWhatsApp}
          onScrollToPackages={handleScrollToPackages}
        />

        {/* 2. WHAT WE DO / CAPABILITIES INTRO */}
        <ServiceIntro service={service} />

        {/* 3. DELIVERABLES & INCLUDED ARTIFACTS */}
        <ServiceDeliverables service={service} />

        {/* 4. 6-PHASE CREATIVE WORKFLOW PIPELINE */}
        <ServiceProcess service={service} />

        {/* 5. VISUAL ARTIFACTS / EXECUTION GALLERY */}
        <section id="service-gallery-section" className="space-y-6" aria-label="Visual Gallery">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">Visual Gallery</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
                Execution Artifacts
              </h2>
              <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
                Tangible proof of our mathematical vector craft, layout systems, and production mockups.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 shrink-0">
              {galleryItems.length} Inspection Artifacts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => {
              const isLarge = item.layout === 'large' || item.layout === 'full';
              return (
                <div 
                  key={item.id || `service-gallery-${idx}`}
                  onClick={() => openLightboxAt(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightboxAt(idx); } }}
                  aria-label={`Open lightbox for ${item.title}`}
                  className={`group relative rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 p-4 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_12px_36px_rgba(0,0,0,0.7)] ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="h-52 sm:h-64 rounded-xl overflow-hidden bg-black/50 flex items-center justify-center relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.alt || item.title || `${service.title} artifact ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <ProjectGalleryVisual 
                        visualType={item.visualType || (service.slug === 'brand-identity' ? 'brand-identity' : 'saas-dashboard')} 
                        title={item.title} 
                        siteSettings={siteSettings}
                      />
                    )}

                    {/* Hover Overlay with View Full pill */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-[#ffbe1a] text-black font-extrabold text-xs font-['Outfit'] shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 fill-black" />
                        <span>Inspect Artifact</span>
                      </span>
                    </div>

                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                      {idx + 1} / {galleryItems.length}
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors font-['Outfit']">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-[#ffbe1a] font-mono opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                        Inspect →
                      </span>
                    </div>
                    {item.caption && (
                      <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] line-clamp-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. PACKAGES, ADDONS & COMPARISON TABLE */}
        {service.packages && service.packages.length > 0 && (
          <section id="service-packages-section" className="space-y-12 pt-6 border-t border-white/[0.08]">
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">Transparent Tiers</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
                Investment Packages & Scope
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Clear deliverables, fixed timelines, and full commercial licensing. No hidden charges.
              </p>
            </div>

            <PackageGrid
              service={service}
              packages={service.packages}
              siteSettings={siteSettings}
              onRequestInquiry={handleRequestPackageInquiry}
            />

            {/* Who is this for matrix */}
            {service.whoIsThisFor && (
              <WhoIsThisForSection
                whoIsThisFor={service.whoIsThisFor}
                packages={service.packages}
              />
            )}

            {/* Comprehensive feature comparison */}
            {service.comparisonRows && service.comparisonRows.length > 0 && (
              <PackageComparisonTable
                comparisonRows={service.comparisonRows}
                packages={service.packages}
              />
            )}

            {/* Optional Add-on selector */}
            {service.addOns && service.addOns.length > 0 && (
              <AddonSelector
                service={service}
                packages={service.packages}
                addOns={service.addOns}
                siteSettings={siteSettings}
                onOpenContact={(customService) => onOpenContact(customService)}
              />
            )}
          </section>
        )}

        {/* 7. CROSS-SERVICE BUNDLES (if applicable) */}
        {applicableBundles.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-white/[0.08]">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Recommended Bundles</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Comprehensive Brand Suites
              </h2>
              <p className="text-slate-300 text-sm max-w-xl">
                Combine {service.title} with complementary creative disciplines for integrated impact and package savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applicableBundles.map((bundle) => (
                <BundleCard
                  key={bundle.id}
                  bundle={bundle}
                  siteSettings={siteSettings}
                  services={services}
                  onOpenContact={onOpenContact}
                />
              ))}
            </div>
          </section>
        )}

        {/* 8. RELATED WORK / CASE STUDIES (Bidirectional CMS linked) */}
        <ServiceRelatedWork
          service={service}
          relatedProjects={relatedWorkList}
          onNavigate={navigateTo}
        />

        {/* 9. SERVICE FAQS ACCORDION */}
        <ServiceFAQ service={service} />

        {/* 10. EXPLORE OTHER DISCIPLINES */}
        <section className="space-y-6 pt-4 border-t border-white/[0.08]">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Explore Other Disciplines</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServicesList.map((relService) => (
              <div
                key={relService.id}
                onClick={() => navigateTo(`/services/${relService.slug}`)}
                className="text-left p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group flex items-center justify-between cursor-pointer"
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
              </div>
            ))}
          </div>
        </section>

        {/* 11. FINAL SERVICE CTA */}
        <ServiceCTA
          service={service}
          onStartProject={() => setInquiryChoiceOpen(true)}
          onWhatsApp={handleWhatsApp}
          onContactForm={() => navigateTo(`/contact?service=${encodeURIComponent(service.slug)}`)}
        />

      </div>

      {lightboxOpen && (
        <ImageLightbox
          items={galleryItems}
          initialIndex={activeGalleryIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Start Service Project Modal (WhatsApp vs Contact Form clean choice) */}
      <ProjectInquiryChoiceModal
        isOpen={inquiryChoiceOpen}
        onClose={() => {
          setInquiryChoiceOpen(false);
          setSelectedPackage(null);
        }}
        title={service.title}
        category={service.category}
        slug={service.slug}
        type="service"
        siteSettings={siteSettings}
        customWhatsAppMessage={service.whatsappMessage}
        packageName={selectedPackage?.name}
        estimatedPrice={selectedPackage?.price}
      />
    </div>
  );
};
