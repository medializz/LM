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
import { WhyChooseUsSection } from './components/body/WhyChooseUsSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { ServicesIndexPage } from './components/pages/ServicesIndexPage';
import { WorkDetailPage } from './components/pages/WorkDetailPage';
import { WorkIndexPage } from './components/pages/WorkIndexPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/pages/TermsOfUsePage';
import { LegalNoticePage } from './components/pages/LegalNoticePage';
import { SiteMapPage } from './components/pages/SiteMapPage';
import { SEOHead } from './components/SEOHead';
import { loadCmsData } from './data/cmsContent';
import { DecapCMSData, ServiceCategory, PortfolioItem } from './types';
import { useAppRoute, navigateTo } from './utils/router';
import { ArrowLeft, Sparkles } from 'lucide-react';

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
    // Navigate directly to the dedicated service page
    navigateTo(`/services/${service.slug}`);
  };

  const handleSelectProject = (project: PortfolioItem) => {
    // Navigate directly to the dedicated project case study page
    navigateTo(`/work/${project.slug}`);
  };

  // Resolve active detail objects
  const activeService = route.view === 'service-detail' && route.slug 
    ? cmsData.services.find(s => s.slug === route.slug)
    : null;

  const activeProject = route.view === 'work-detail' && route.slug
    ? cmsData.portfolio.find(p => p.slug === route.slug)
    : null;

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-[#ffbe1a] selection:text-black flex flex-col justify-between overflow-x-hidden">
      
      {/* Default SEO Header for root/home view */}
      {route.view === 'home' && (
        <SEOHead
          title="Lizzdo Media | Let's Build Your Brand Together"
          description="We help brands stand out and grow with creative design, powerful websites, and result-driven digital solutions. High-impact brand identities, web apps, and campaigns."
          canonicalUrl="https://media.lizzdo.com/"
          type="website"
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
      <main id="main-content" className="flex-1 flex flex-col justify-center pt-16">
        
        {/* ========================================================= */}
        {/* VIEW 1: HOME PAGE (PHASE 1 HERO + PHASE 2 BODY) */}
        {/* ========================================================= */}
        {route.view === 'home' && (
          <>
            {/* HERO SECTION (PHASE 1) */}
            <Hero 
              content={cmsData.hero}
              siteSettings={cmsData.siteSettings}
              onExploreWork={() => {
                const el = document.getElementById('work') || document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* FEATURE / VALUE STRIP (PHASE 1) */}
            <FeatureStrip 
              features={cmsData.features}
            />

            {/* SECTION A: WHAT WE DO / 11 SERVICES GRID */}
            <ServicesSection 
              services={cmsData.services}
              onSelectService={handleSelectService}
              onExploreAll={() => navigateTo('/services')}
            />

            {/* SECTION B: OUR PROCESS (6-STEP TIMELINE) */}
            <ProcessSection 
              steps={cmsData.processSteps || []}
            />

            {/* SECTION C: FEATURED WORK / PORTFOLIO */}
            <FeaturedWorkSection 
              portfolio={cmsData.portfolio || []}
              siteSettings={cmsData.siteSettings}
              onSelectProject={handleSelectProject}
              onViewAll={() => navigateTo('/work')}
            />

            {/* SECTION D: WHY CHOOSE US (STATS + TESTIMONIAL) */}
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
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
              <h2 className="text-3xl font-bold text-white font-['Outfit']">Service Not Found</h2>
              <p className="text-slate-400 text-sm max-w-md">
                The requested service could not be located in our directory.
              </p>
              <button
                onClick={() => navigateTo('/services')}
                className="px-6 py-2.5 rounded-xl bg-[#ffbe1a] text-black font-semibold text-sm flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Services Directory
              </button>
            </div>
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
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
              <h2 className="text-3xl font-bold text-white font-['Outfit']">Case Study Not Found</h2>
              <p className="text-slate-400 text-sm max-w-md">
                The requested project case study could not be located.
              </p>
              <button
                onClick={() => navigateTo('/work')}
                className="px-6 py-2.5 rounded-xl bg-[#ffbe1a] text-black font-semibold text-sm flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Portfolio
              </button>
            </div>
          )
        )}

        {/* ========================================================= */}
        {/* VIEW 6: PRIVACY POLICY (/privacy) */}
        {/* ========================================================= */}
        {route.view === 'privacy' && (
          <PrivacyPolicyPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 7: TERMS OF USE (/terms) */}
        {/* ========================================================= */}
        {route.view === 'terms' && (
          <TermsOfUsePage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 8: LEGAL NOTICE (/legal) */}
        {/* ========================================================= */}
        {route.view === 'legal' && (
          <LegalNoticePage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 9: INTERACTIVE SITE MAP (/sitemap) */}
        {/* ========================================================= */}
        {route.view === 'sitemap' && (
          <SiteMapPage 
            cmsData={cmsData}
            onOpenContact={handleOpenContactModal}
          />
        )}

        {/* ========================================================= */}
        {/* VIEW 10: 404 NOT FOUND */}
        {/* ========================================================= */}
        {route.view === '404' && (
          <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>404 ERROR</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white font-['Outfit']">Page Not Found</h1>
            <p className="text-slate-400 text-base max-w-md">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => navigateTo('/')}
                className="px-6 py-3 rounded-xl bg-[#ffbe1a] text-black font-bold text-sm cursor-pointer shadow-lg shadow-[#ffbe1a]/20"
              >
                Go to Homepage
              </button>
              <button
                onClick={() => navigateTo('/services')}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <Footer 
        siteSettings={cmsData.siteSettings}
        navigation={cmsData.navigation}
        onOpenContact={() => handleOpenContactModal()}
      />

      {/* OPTIONAL QUICK MODAL (when triggered specifically) */}
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

    </div>
  );
}



