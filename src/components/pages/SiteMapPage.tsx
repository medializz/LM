import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { LizzdoLogo } from '../LizzdoLogo';
import { 
  Network, 
  Layers, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Home, 
  Sparkles,
  Phone,
  Mail,
  FileCode2,
  Palette,
  Package,
  Cpu,
  Share2
} from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface SiteMapPageProps {
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
}

export const SiteMapPage: React.FC<SiteMapPageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const siteSettings = cmsData.siteSettings;
  const services = cmsData.services || [];
  const portfolio = cmsData.portfolio || [];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-['Plus_Jakarta_Sans'] selection:bg-[#ffbe1a]/30 selection:text-white">
      <SEOHead
        title={`Site Map & Architecture | ${siteSettings.siteName}`}
        description={`Explore the complete site map and architecture for ${siteSettings.siteName}. Quickly navigate all services, project case studies, brand identity showcases, and legal resources.`}
        canonicalUrl={`${siteSettings.currentDomain}sitemap`}
        siteSettings={siteSettings}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md">
        <Breadcrumb items={[{ label: 'Site Map', active: true }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            <span>WEBSITE DIRECTORY & ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Site <span className="text-[#ffbe1a]">Map</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive index of all pages, dedicated service capabilities, in-depth portfolio case studies, and corporate policies on {siteSettings.siteName}.
          </p>
        </div>
      </section>

      {/* Grid of Sections */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Column 1: Main Platform & Navigation */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
                <Home className="w-4 h-4" />
                <span>Primary Navigation</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <button 
                    onClick={() => navigateTo('/')}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Home Overview</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('/services')}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Services Directory</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/services</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('/work')}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Featured Work & Portfolio</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/work</span>
                  </button>
                </li>
                <li>
                  <a 
                    href="/#process"
                    onClick={(e) => { e.preventDefault(); navigateTo('/#process'); }}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Our 4-Step Process</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/#process</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#why-choose-us"
                    onClick={(e) => { e.preventDefault(); navigateTo('/#why-choose-us'); }}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Why Choose Lizzdo Media</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/#why-choose-us</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#testimonials"
                    onClick={(e) => { e.preventDefault(); navigateTo('/#testimonials'); }}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span>Client Testimonials</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/#testimonials</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 rounded-xl bg-[#ffbe1a] hover:bg-[#e5a93c] text-black font-bold text-xs font-['Outfit'] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Dedicated Services */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <Layers className="w-4 h-4" />
              <span>Core Services</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => navigateTo(`/services/${s.slug}`)}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span className="truncate pr-2">{s.title}</span>
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-400 shrink-0">
                      /services/{s.slug}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Case Studies & Portfolio */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <Briefcase className="w-4 h-4" />
              <span>Portfolio Case Studies</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {portfolio.map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => navigateTo(`/work/${p.slug}`)}
                    className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                  >
                    <span className="truncate pr-2">{p.title}</span>
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-400 shrink-0">
                      /work/{p.slug}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal & Policies</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('/privacy')}
                  className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                >
                  <span>Privacy Policy</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/privacy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/terms')}
                  className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                >
                  <span>Terms of Use</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/terms</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/legal')}
                  className="flex items-center justify-between w-full text-left text-slate-300 hover:text-[#ffbe1a] transition-colors group cursor-pointer"
                >
                  <span>Legal Notice & Disclaimer</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/legal</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/sitemap')}
                  className="flex items-center justify-between w-full text-left text-[#ffbe1a] font-semibold cursor-pointer"
                >
                  <span>Interactive Site Map</span>
                  <span className="font-mono text-[11px] text-[#ffbe1a]/70">/sitemap</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Network & External Connections */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <Sparkles className="w-4 h-4" />
              <span>Network & Direct Channels</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase block">Direct Inquiries</span>
                <a 
                  href={`mailto:${siteSettings.contactEmail}`} 
                  className="text-white hover:text-[#ffbe1a] font-mono font-medium flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>{siteSettings.contactEmail}</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase block">Parent Company Network</span>
                <a 
                  href={siteSettings.parentCompanyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#ffbe1a] font-mono font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Lizzdo Group (lizzdo.com)</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
