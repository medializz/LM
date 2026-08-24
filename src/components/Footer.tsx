import React, { useState } from 'react';
import { SiteSettings, NavigationItem } from '../types';
import { LizzdoLogo } from './LizzdoLogo';
import { SuccessStoryIllustration3D } from './visuals/SuccessStoryIllustration3D';
import { Phone, Mail, ArrowRight, Sparkles, ExternalLink, MessageCircle } from 'lucide-react';
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
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hello ${siteSettings.siteName}, I'd like to discuss a project with your team.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative z-20 overflow-hidden bg-[#07090e] pt-12 sm:pt-16 pb-12 sm:pb-16 text-slate-300 font-['Plus_Jakarta_Sans']">
      
      {/* Ambient Lighting & Soft Glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#ffbe1a]/[0.025] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 1. OVERLAPPING 2.5D CTA BANNER */}
        {/* ========================================================================= */}
        <div className="relative z-20 max-w-5xl mx-auto mb-[-50px] sm:mb-[-80px] lg:mb-[-100px] px-2 sm:px-4">
          <div 
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            className="relative rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] bg-[#12151f] text-white p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] border border-white/[0.12] overflow-hidden group/cta transition-all duration-300 hover:border-white/[0.2]"
          >
            
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbe1a]/70 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full ambient-glow-gold pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-center">
              
              {/* Left Column: 2.5D Visual */}
              <div className="md:col-span-5 flex items-center justify-center -my-2 xs:-my-3 sm:-my-6 md:-my-8">
                <div className="w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[360px] md:max-w-[380px] h-[190px] xs:h-[215px] sm:h-[240px] md:h-[260px] flex items-center justify-center">
                  <SuccessStoryIllustration3D 
                    companyName={siteSettings.siteName || "Lizzdo Media"} 
                    forceOpen={isCtaHovered || undefined}
                  />
                </div>
              </div>

              {/* Right Column: Branded CTA Copy & Action Buttons */}
              <div className="md:col-span-7 space-y-3.5 sm:space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                
                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-black font-['Outfit'] text-white leading-tight tracking-tight">
                  Let’s Begin Your Success Story Together.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans'] max-w-xl">
                  Discover how {siteSettings.siteName} can accelerate your professional growth, elevate your brand presence, and help you thrive. Share your goals with us and let's explore the possibilities.
                </p>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center md:justify-start gap-3 pt-2 w-full xs:w-auto">
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('/contact');
                    }}
                    className="min-h-[44px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#ffbe1a] hover:bg-yellow-400 text-black font-extrabold text-xs sm:text-sm font-['Outfit'] transition-all duration-200 cursor-pointer shadow-[0_4px_20px_rgba(255,190,26,0.35)] active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 text-black shrink-0" />
                  </a>

                  <button
                    onClick={handleWhatsApp}
                    className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#181d2a] hover:bg-[#202738] border border-white/15 hover:border-[#25D366]/60 text-white font-bold text-xs sm:text-sm font-['Outfit'] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp us</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN FOOTER DARK CONTAINER */}
        {/* ========================================================================= */}
        <div className="relative rounded-[28px] xs:rounded-[32px] sm:rounded-[40px] bg-[#10131d] border border-white/[0.08] pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 px-5 sm:px-10 lg:px-14 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden">
          
          <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
            
            {/* BRAND & SOCIAL COLUMN */}
            <div className="lg:col-span-4 space-y-5">
              
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

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                A premier creative and digital agency crafting high-impact brand identities, structural packaging, web applications, and strategic marketing campaigns.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a 
                  href={siteSettings.parentCompanyUrl || "https://lizzdo.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-[#ffbe1a]" />
                  <span>Part of Lizzdo Network</span>
                </a>
              </div>
            </div>

            {/* LINKS COLUMNS */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              
              {/* Column 1: Navigation */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Navigation
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <a 
                      href="/" 
                      onClick={(e) => handleLinkClick(e, '/')}
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Home Overview
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services" 
                      onClick={(e) => handleLinkClick(e, '/services')}
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      All Services (11)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/work" 
                      onClick={(e) => handleLinkClick(e, '/work')}
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/about" 
                      onClick={(e) => handleLinkClick(e, '/about')}
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      About Agency
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/blog" 
                      onClick={(e) => handleLinkClick(e, '/blog')}
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Blog & Insights
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Core Services */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Disciplines
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <a 
                      href="/services/brand-identity"
                      onClick={(e) => handleLinkClick(e, '/services/brand-identity')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Brand Identity
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/graphic-design"
                      onClick={(e) => handleLinkClick(e, '/services/graphic-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Packaging & Print
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/web-development"
                      onClick={(e) => handleLinkClick(e, '/services/web-development')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Web Engineering
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/logo-design"
                      onClick={(e) => handleLinkClick(e, '/services/logo-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Logo &amp; Brand Systems
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/social-media-design"
                      onClick={(e) => handleLinkClick(e, '/services/social-media-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Social Media & Ads
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Insights & Case Studies */}
              <div>
                <h4 className="text-xs font-bold text-white font-['Outfit'] tracking-wide mb-3 sm:mb-4 uppercase">
                  Featured Work
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <a 
                      href="/work/brand-identity-design"
                      onClick={(e) => handleLinkClick(e, '/work/brand-identity-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Identity System
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/work/packaging-design"
                      onClick={(e) => handleLinkClick(e, '/work/packaging-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Packaging Suite
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/work/saas-website-design"
                      onClick={(e) => handleLinkClick(e, '/work/saas-website-design')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      SaaS Web Platform
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/work/social-media-campaign"
                      onClick={(e) => handleLinkClick(e, '/work/social-media-campaign')} 
                      className="hover:text-[#ffbe1a] transition-colors block"
                    >
                      Ad Campaign
                    </a>
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
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('/contact');
                      }}
                      className="w-full mt-2 py-2 px-3 rounded-lg bg-[#ffbe1a]/10 hover:bg-[#ffbe1a] text-[#ffbe1a] hover:text-black border border-[#ffbe1a]/30 font-bold text-[11px] font-['Outfit'] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm block text-center"
                    >
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      <span>Request Estimate</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* LEGAL ROW */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-400 font-normal">
            
            <div>
              © {currentYear} {siteSettings.siteName}. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-400">
              <a 
                href="/privacy"
                onClick={(e) => handleLinkClick(e, '/privacy')}
                className="hover:text-[#ffbe1a] transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a 
                href="/terms"
                onClick={(e) => handleLinkClick(e, '/terms')}
                className="hover:text-[#ffbe1a] transition-colors"
              >
                Terms of Use
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a 
                href="/legal"
                onClick={(e) => handleLinkClick(e, '/legal')}
                className="hover:text-[#ffbe1a] transition-colors"
              >
                Legal Notice
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a 
                href="/sitemap"
                onClick={(e) => handleLinkClick(e, '/sitemap')}
                className="hover:text-[#ffbe1a] transition-colors"
              >
                Site Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};
