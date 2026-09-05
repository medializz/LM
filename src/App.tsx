/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { ServicesSection } from './components/body/ServicesSection';
import { ProcessSection } from './components/body/ProcessSection';
import { FeaturedWorkSection } from './components/body/FeaturedWorkSection';
import { ClientsSection } from './components/body/ClientsSection';
import { TestimonialsSection } from './components/body/TestimonialsSection';
import { WhyChooseUsSection } from './components/body/WhyChooseUsSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { ServicesIndexPage } from './components/pages/ServicesIndexPage';
import { WorkDetailPage } from './components/pages/WorkDetailPage';
import { WorkIndexPage } from './components/pages/WorkIndexPage';
import { AboutPage } from './components/pages/AboutPage';
import { BlogIndexPage } from './components/pages/BlogIndexPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/pages/TermsOfUsePage';
import { LegalNoticePage } from './components/pages/LegalNoticePage';
import { SiteMapPage } from './components/pages/SiteMapPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { LegalPageRenderer } from './components/pages/LegalPageRenderer';
import { SEOHead } from './components/SEOHead';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CookieBanner } from './components/CookieBanner';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { loadCmsData } from './data/cmsContent';
import { DecapCMSData, ServiceCategory, PortfolioItem } from './types';
import { useAppRoute, navigateTo } from './utils/router';

export default function App() {
  const route = useAppRoute();
  const [cmsData] = useState<DecapCMSData>(() => loadCmsData());
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceCategory | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [preselectedContactService, setPreselectedContactService] = useState<string | null>(null);

  // Handle scroll on route transition
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [route.path]);

  const handleOpenContactModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedContactService(serviceName);
    } else {
      setPreselectedContactService(null);
    }
    setIsContactModalOpen(true);
  };

  const handleSelectService = (service: ServiceCategory) => {
    navigateTo(`/services/${service.slug}`);
  };

  const handleSelectProject = (project: PortfolioItem) => {
    navigateTo(`/work/${project.slug}`);
  };

  // Resolve active detail objects
  const activeService = route.view === 'service-detail' && route.slug 
    ? cmsData.services.find(s => s.slug === route.slug)
    : null;

  const activeProject = route.view === 'work-detail' && route.slug
    ? cmsData.portfolio.find(p => p.slug === route.slug)
    : null;

  const activeArticle = route.view === 'blog-detail' && route.slug
    ? cmsData.blog?.find(b => b.slug === route.slug)
    : null;

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-[#ffbe1a] selection:text-black flex flex-col justify-between overflow-x-hidden">
      
      {/* Analytics Injection (Server / CMS controlled) */}
      <AnalyticsTracker analytics={cmsData.analytics} />

      {/* Default SEO Header for root/home view */}
      {route.view === 'home' && (
        <SEOHead
          title="Lizzdo Media | Creative & Digital Agency - Branding, Packaging & Web"
          description="Lizzdo Media is a premier creative and digital agency crafting high-impact brand identities, packaging design systems, web development, and digital marketing."
          canonicalUrl="https://media.lizzdo.com/"
          type="website"
          schemaData={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": cmsData.siteSettings.siteName,
              "url": "https://media.lizzdo.com/",
              "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg",
              "email": cmsData.siteSettings.contactEmail,
              "description": "Lizzdo Media is a creative & digital agency offering brand identity, packaging design, high-speed web engineering, and performance marketing."
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": cmsData.siteSettings.siteName,
              "url": "https://media.lizzdo.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://media.lizzdo.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]}
        />
      )}

      {/* Skip to main content for screen readers and accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#ffbe1a] text-black font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* HEADER & TOP NAVIGATION */}
      <Header 
        siteSettings={cmsData.siteSettings}
        navigation={cmsData.navigation}
        currentPath={route.path}
        onOpenContactModal={() => handleOpenContactModal()}
        onSelectService={(slug) => navigateTo(`/services/${slug}`)}
      />

      {/* MAIN CONTENT LANDMARK */}
      <main id="main-content" className="flex-1 flex flex-col justify-center">
        
        {/* ========================================================= */}
        {/* VIEW 1: HOME PAGE */}
        {/* ========================================================= */}
        {route.view === 'home' && (
          <>
            <Hero 
              content={cmsData.hero}
              siteSettings={cmsData.siteSettings}
              onExploreWork={() => {
                const el = document.getElementById('work') || document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <FeatureStrip 
              features={cmsData.features}
            />

            <ServicesSection 
              services={cmsData.services}
              onSelectService={handleSelectService}
              onExploreAll={() => navigateTo('/services')}
            />

            <ProcessSection 
              steps={cmsData.processSteps || []}
            />

            <FeaturedWorkSection 
              portfolio={cmsData.portfolio || []}
              siteSettings={cmsData.siteSettings}
              onSelectProject={handleSelectProject}
              onViewAll={() => navigateTo('/work')}
            />

            <ClientsSection 
              clients={cmsData.clients || []}
              content={cmsData.clientsSection}
              siteSettings={cmsData.siteSettings}
              portfolio={cmsData.portfolio || []}
              onSelectProject={handleSelectProject}
            />

            <TestimonialsSection 
              testimonials={cmsData.testimonials || []}
              content={cmsData.testimonialsSection}
              siteSettings={cmsData.siteSettings}
              clients={cmsData.clients || []}
              portfolio={cmsData.portfolio || []}
              onSelectProject={handleSelectProject}
            />

            <WhyChooseUsSection 
              content={cmsData.whyChooseUs || {}}
              statistics={cmsData.statistics || []}
              testimonials={cmsData.testimonials || []}
              onCtaClick={() => handleOpenContactModal()}
            />
          </>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: SERVICES DIRECTORY (/services) */}
        {/* ========================================================= */}
        {route.view === 'services-index' && (
          <ServicesIndexPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 3: SERVICE DETAIL PAGE (/services/:slug) */}
        {/* ========================================================= */}
        {route.view === 'service-detail' && (
          activeService ? (
            <ServiceDetailPage 
              service={activeService}
              cmsData={cmsData}
              onOpenContact={handleOpenContactModal}
            />
          ) : (
            <NotFoundPage attemptedPath={route.path} />
          )
        )}

        {/* ========================================================= */}
        {/* VIEW 4: PORTFOLIO WORK DIRECTORY (/work) */}
        {/* ========================================================= */}
        {route.view === 'work-index' && (
          <WorkIndexPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 5: WORK DETAIL CASE STUDY (/work/:slug) */}
        {/* ========================================================= */}
        {route.view === 'work-detail' && (
          activeProject ? (
            <WorkDetailPage 
              project={activeProject}
              cmsData={cmsData}
              onOpenContact={handleOpenContactModal}
            />
          ) : (
            <NotFoundPage attemptedPath={route.path} />
          )
        )}

        {/* ========================================================= */}
        {/* VIEW 6: ABOUT PAGE (/about) */}
        {/* ========================================================= */}
        {route.view === 'about' && (
          <AboutPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 7: BLOG INDEX (/blog) */}
        {/* ========================================================= */}
        {route.view === 'blog-index' && (
          <BlogIndexPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 8: BLOG DETAIL (/blog/:slug) */}
        {/* ========================================================= */}
        {route.view === 'blog-detail' && (
          activeArticle ? (
            <BlogDetailPage 
              article={activeArticle}
              cmsData={cmsData}
              onOpenContact={handleOpenContactModal}
            />
          ) : (
            <NotFoundPage attemptedPath={route.path} />
          )
        )}

        {/* ========================================================= */}
        {/* VIEW 9: CONTACT PAGE (/contact) */}
        {/* ========================================================= */}
        {route.view === 'contact' && (
          <ContactPage 
            cmsData={cmsData}
            initialService={preselectedContactService || undefined}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 10: PRIVACY POLICY (/privacy or /privacy-policy) */}
        {/* ========================================================= */}
        {route.view === 'privacy' && (
          <LegalPageRenderer 
            slug="privacy-policy"
            fallbackTitle="Privacy Policy"
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 11: TERMS & CONDITIONS (/terms-and-conditions) */}
        {/* ========================================================= */}
        {route.view === 'terms-and-conditions' && (
          <LegalPageRenderer 
            slug="terms-and-conditions"
            fallbackTitle="Terms & Conditions"
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 12: TERMS OF USE (/terms or /terms-of-use) */}
        {/* ========================================================= */}
        {route.view === 'terms' && (
          <LegalPageRenderer 
            slug="terms-of-use"
            fallbackTitle="Terms of Use"
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 13: COOKIE POLICY (/cookie-policy) */}
        {/* ========================================================= */}
        {route.view === 'cookie-policy' && (
          <LegalPageRenderer 
            slug="cookie-policy"
            fallbackTitle="Cookie Policy"
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 14: LEGAL NOTICE (/legal or /legal-notice) */}
        {/* ========================================================= */}
        {route.view === 'legal' && (
          <LegalPageRenderer 
            slug="legal-notice"
            fallbackTitle="Legal Notice & Impressum"
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 15: DYNAMIC LEGAL PAGE (/legal/:slug) */}
        {/* ========================================================= */}
        {route.view === 'legal-page' && route.slug && (
          <LegalPageRenderer 
            slug={route.slug}
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 16: INTERACTIVE SITE MAP (/sitemap) */}
        {/* ========================================================= */}
        {route.view === 'sitemap' && (
          <SiteMapPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 17: 404 NOT FOUND */}
        {/* ========================================================= */}
        {route.view === '404' && (
          <NotFoundPage attemptedPath={route.path} />
        )}

      </main>

      {/* FOOTER */}
      <Footer 
        siteSettings={cmsData.siteSettings}
        social={cmsData.social}
        navigation={cmsData.navigation}
        onOpenContact={() => handleOpenContactModal()}
      />

      {/* COOKIE CONSENT BANNER */}
      <CookieBanner enabled={cmsData.analytics?.cookieConsentEnabled !== false} />

      {/* OPTIONAL QUICK MODAL */}
      <ServiceDetailModal 
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onStartProject={(serviceName) => handleOpenContactModal(serviceName)}
      />

      {/* INTERACTIVE CONTACT / INQUIRY MODAL */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        siteSettings={cmsData.siteSettings}
        preselectedService={preselectedContactService}
      />

      {/* MOBILE QUICK ACTION BOTTOM BAR */}
      <MobileQuickBar 
        siteSettings={cmsData.siteSettings}
        onOpenContact={() => handleOpenContactModal()}
        isModalOpen={isContactModalOpen || !!selectedServiceForModal}
      />

    </div>
  );
}
