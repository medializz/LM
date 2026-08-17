import React, { useState } from 'react';
import { SiteSettings, NavigationItem } from '../types';
import { LizzdoLogo } from './LizzdoLogo';
import { SuccessStoryIllustration3D } from './visuals/SuccessStoryIllustration3D';
import { Phone, Mail, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { navigateTo } from '../utils/router';

interface FooterProps {
  siteSettings: SiteSettings;
  navigation?: NavigationItem[];
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  siteSettings,
  navigation = [],
  onOpenContact
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigateTo(`/${href}`);
      } else {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }
    if (href.startsWith('/')) {
      navigateTo(href);
    }
  };

  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <footer className="relative z-20 overflow-hidden bg-[#07090e] pt-12 sm:pt-16 pb-12 sm:pb-16 text-slate-300 font-['Plus_Jakarta_Sans']">
      
      {/* Ambient Lighting & Soft Glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#ffbe1a]/[0.025] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 1. OVERLAPPING 2.5D CTA BANNER (Exact Composition & Hierarchy of Reference Image) */}
        {/* ========================================================================= */}
        <div className="relative z-20 max-w-5xl mx-auto mb-[-50px] sm:mb-[-80px] lg:mb-[-100px] px-2 sm:px-4">
          <div 
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            className="relative rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#171a24] via-[#12151e] to-[#0d0f16] text-white p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(255,190,26,0.12)] border border-white/[0.1] overflow-hidden group/cta transition-all duration-300 hover:border-white/[0.18]"
          >
            
            {/* Subtle top golden light rim highlight */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/70 to-transparent pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#ffbe1a]/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-center">
              
              {/* Left Column: 2.5D Soft 3D Envelope with Lizzdo Document + Gold Championship Trophy */}
              <div className="md:col-span-5 flex items-center justify-center -my-3 xs:-my-5 sm:-my-8 md:-my-10">
                <div className="w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[360px] md:max-w-[380px] h-[190px] xs:h-[215px] sm:h-[240px] md:h-[260px] flex items-center justify-center">
                  <SuccessStoryIllustration3D 
                    companyName={siteSettings.siteName || "Lizzdo Media"} 
                    forceOpen={isCtaHovered || undefined}
                  />
                </div>
              </div>

              {/* Right Column: Branded CTA Copy & Action Buttons */}
              <div className="md:col-span-7 space-y-3.5 sm:space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                
                {/* Headline */}
                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-black font-['Outfit'] text-white leading-tight tracking-tight drop-shadow-sm">
                  Let’s Begin Your Success Story Together.
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans'] max-w-xl">
                  Discover how {siteSettings.siteName} can accelerate your professional growth, elevate your brand presence, and help you thrive. Share your goals with us and let's explore the possibilities.
                </p>

                {/* Primary and Secondary Pill Buttons (Optimized for 44px+ touch targets on mobile) */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center md:justify-start gap-3 pt-2 w-full xs:w-auto">
                  
                  {/* Primary Button: Explore Opportunities (Gold Glowing Pill) */}
                  <button
                    onClick={() => navigateTo('/work')}
                    className="min-h-[44px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#ffbe1a] to-[#f5b318] hover:from-[#ffc83b] hover:to-[#e5a20e] text-black font-extrabold text-xs sm:text-sm font-['Outfit'] transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(255,190,26,0.45)] hover:shadow-[0_0_35px_rgba(255,190,26,0.6)] active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-4 h-4 text-black shrink-0" />
                  </button>

                  {/* Secondary Button: WhatsApp Us (Pill with WhatsApp/Message Icon) */}
                  <a
                    href={siteSettings.whatsappNumber ? `https://wa.me/${siteSettings.whatsappNumber.replace(/[^0-9]/g, '')}` : '#contact'}
                    onClick={(e) => {
                      if (!siteSettings.whatsappNumber) {
                        e.preventDefault();
                        onOpenContact?.();
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-[#25D366]/60 text-white font-bold text-xs sm:text-sm font-['Outfit'] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 backdrop-blur-sm group"
                  >
                    {/* WhatsApp / Message Icon */}
                    <div className="w-5 h-5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <span>WhatsApp us</span>
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN FOOTER DARK CONTAINER */}
        {/* ========================================================================= */}
        <div className="relative rounded-[28px] xs:rounded-[32px] sm:rounded-[40px] bg-[#10131d] border border-white/[0.08] pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 px-5 sm:px-10 lg:px-14 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* Subtle container top border accent */}
          <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
            
            {/* ========================================================================= */}
            {/* BRAND & SOCIAL COLUMN (lg:col-span-4) */}
            {/* ========================================================================= */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Logo & Company Name */}
              <div className="flex items-center gap-3">
                <LizzdoLogo 
                  size="sm" 
                  logoSrc={siteSettings.logo || siteSettings.logoLight} 
                  markSrc={siteSettings.logoMark} 
                />
                <span className="font-['Outfit'] font-extrabold text-white text-xl tracking-tight">
                  {siteSettings.siteName}
                </span>
              </div>

              {/* Real Description of Services & Agency Mission */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-['Plus_Jakarta_Sans']">
                {siteSettings.siteName} is a premier creative and digital agency crafting high-impact brand identities, bespoke packaging systems, modern web development, and result-driven digital marketing solutions.
              </p>

              {/* Social Media Circular Buttons */}
              <div className="flex items-center gap-2.5 pt-1">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#e1306c] text-slate-300 hover:text-white border border-white/[0.08] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-black text-slate-300 hover:text-white border border-white/[0.08] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                  aria-label="X / Twitter"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#0077b5] text-slate-300 hover:text-white border border-white/[0.08] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Parent Company Network */}
                <a 
                  href={siteSettings.parentCompanyUrl || "https://lizzdo.com"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#ffbe1a] text-slate-300 hover:text-black border border-white/[0.08] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                  aria-label="Lizzdo Corporate Network"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 4-COLUMN LINK LAYOUT: ONLY REAL PAGES ON LIZZDO MEDIA */}
            {/* ========================================================================= */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              
              {/* Column 1: Navigation */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Navigation
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <button 
                      onClick={() => navigateTo('/')}
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Home Overview
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      All Services
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/work')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Featured Work
                    </button>
                  </li>
                  <li>
                    <a 
                      href="/#process" 
                      onClick={(e) => handleLinkClick(e, '#process')}
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer block"
                    >
                      Our Process
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#why-choose-us" 
                      onClick={(e) => handleLinkClick(e, '#why-choose-us')}
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer block"
                    >
                      Why Choose Us
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/#testimonials" 
                      onClick={(e) => handleLinkClick(e, '#testimonials')}
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer block"
                    >
                      Client Reviews
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Core Services */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Services
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/brand-identity')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Brand Identity
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/graphic-design')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Packaging & Print
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/web-development')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Web Development
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/saas-website')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      SaaS & UI/UX Design
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/social-media-design')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Social Media & Ads
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/services/ai-visuals-content')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      AI Visuals & Content
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Case Studies */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Case Studies
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <button 
                      onClick={() => navigateTo('/work/brand-identity-design')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Brand Identity System
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/work/packaging-design')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Packaging Design Suite
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/work/saas-website-design')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      SaaS Web Platform
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/work/social-media-campaign')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Social Media Campaign
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigateTo('/work/web-development')} 
                      className="hover:text-[#ffbe1a] transition-colors cursor-pointer text-left block"
                    >
                      Web Application
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact & Inquiries */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Connect
                </h4>
                <ul className="space-y-3 text-xs text-slate-300 font-medium">
                  <li>
                    <a 
                      href={`mailto:${siteSettings.contactEmail || 'contact@media.lizzdo.com'}`}
                      className="flex items-center gap-2 hover:text-[#ffbe1a] transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/[0.06] group-hover:bg-[#ffbe1a] group-hover:text-black text-[#ffbe1a] flex items-center justify-center shrink-0 transition-colors">
                        <Mail className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] sm:text-xs truncate">{siteSettings.contactEmail || "contact@media.lizzdo.com"}</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`tel:${siteSettings.whatsappNumber || '+1234567890'}`}
                      className="flex items-center gap-2 hover:text-[#ffbe1a] transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/[0.06] group-hover:bg-[#ffbe1a] group-hover:text-black text-[#ffbe1a] flex items-center justify-center shrink-0 transition-colors">
                        <Phone className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] sm:text-xs">{siteSettings.whatsappNumber || "+123 456 7890"}</span>
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={onOpenContact}
                      className="w-full mt-2 py-2 px-3 rounded-lg bg-[#ffbe1a]/10 hover:bg-[#ffbe1a] text-[#ffbe1a] hover:text-black border border-[#ffbe1a]/30 font-bold text-[11px] font-['Outfit'] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Start a Project</span>
                    </button>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. LEGAL ROW: COPYRIGHT & TERMS / PRIVACY / SITEMAP */}
          {/* ========================================================================= */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-400 font-normal">
            
            {/* Copyright */}
            <div>
              © {currentYear} {siteSettings.siteName}. All rights reserved.
            </div>

            {/* Legal Links to Actual Pages */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-400">
              <button 
                onClick={() => navigateTo('/privacy')}
                className="hover:text-[#ffbe1a] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20 hidden sm:inline">•</span>
              <button 
                onClick={() => navigateTo('/terms')}
                className="hover:text-[#ffbe1a] transition-colors cursor-pointer"
              >
                Terms of Use
              </button>
              <span className="text-white/20 hidden sm:inline">•</span>
              <button 
                onClick={() => navigateTo('/legal')}
                className="hover:text-[#ffbe1a] transition-colors cursor-pointer"
              >
                Legal Notice
              </button>
              <span className="text-white/20 hidden sm:inline">•</span>
              <button 
                onClick={() => navigateTo('/sitemap')}
                className="hover:text-[#ffbe1a] transition-colors cursor-pointer"
              >
                Site Map
              </button>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};
