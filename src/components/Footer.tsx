import React from 'react';
import { SiteSettings, NavigationItem } from '../types';
import { LizzdoLogo } from './LizzdoLogo';
import { Mail, Globe, ArrowUp } from 'lucide-react';
import { navigateTo } from '../utils/router';

interface FooterProps {
  siteSettings: SiteSettings;
  navigation: NavigationItem[];
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  siteSettings,
  navigation,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        e.preventDefault();
        navigateTo(`/${href}`);
      }
      return;
    }
    if (href.startsWith('/')) {
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <footer className="relative z-20 bg-[#07080c] border-t border-white/[0.08] text-slate-400 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <LizzdoLogo 
                size="sm" 
                logoSrc={siteSettings.logo} 
                markSrc={siteSettings.logoMark} 
              />
              <div className="flex flex-col">
                <span className="font-['Outfit'] font-black text-white text-base tracking-wider leading-none">
                  {siteSettings.siteName.toUpperCase()}
                </span>
                <span className="text-[10px] text-[#ffbe1a] uppercase tracking-widest font-semibold mt-0.5">
                  {siteSettings.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              We design and build distinctive brand identities, high-converting digital websites, and impactful visual media that propel ambitious brands forward.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <a 
                href={`mailto:${siteSettings.contactEmail}`}
                className="inline-flex items-center gap-1.5 hover:text-[#ffbe1a] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ffbe1a]" />
                <span>{siteSettings.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-slate-400 hover:text-[#ffbe1a] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigateTo('/services/brand-identity')} 
                  className="text-slate-400 hover:text-[#ffbe1a] transition-colors text-left cursor-pointer"
                >
                  Brand Identity
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/services/logo-design')} 
                  className="text-slate-400 hover:text-[#ffbe1a] transition-colors text-left cursor-pointer"
                >
                  Logo Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/services/web-development')} 
                  className="text-slate-400 hover:text-[#ffbe1a] transition-colors text-left cursor-pointer"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/services/digital-marketing')} 
                  className="text-slate-400 hover:text-[#ffbe1a] transition-colors text-left cursor-pointer"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/services/advertising-creatives')} 
                  className="text-slate-400 hover:text-[#ffbe1a] transition-colors text-left cursor-pointer"
                >
                  Advertising Creatives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/services')} 
                  className="text-[#ffbe1a] hover:underline transition-colors text-left font-semibold cursor-pointer pt-1"
                >
                  View All 11 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Agency & Parent Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] mb-3">
              Lizzdo Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={siteSettings.parentCompanyUrl || "https://lizzdo.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#ffbe1a] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>Lizzdo.com</span>
                </a>
              </li>
              <li>
                <a 
                  href={siteSettings.currentDomain || "https://media.lizzdo.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ffbe1a] hover:underline"
                >
                  <Globe className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Lizzdo Media</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="inline-block px-3 py-1.5 rounded-full bg-[#ffbe1a]/15 text-[#ffbe1a] hover:bg-[#ffbe1a] hover:text-black font-bold text-[11px] transition-all cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} {siteSettings.siteName}. All rights reserved. Part of the <a href="https://lizzdo.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#ffbe1a] underline">Lizzdo</a> network.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ffbe1a]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

