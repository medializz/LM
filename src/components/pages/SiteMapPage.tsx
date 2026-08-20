import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { 
  Network, Layers, Briefcase, ShieldCheck, 
  ArrowRight, ExternalLink, Home, Sparkles,
  Mail, BookOpen, Info, Phone
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
  const { siteSettings, services = [], portfolio = [], blog = [] } = cmsData;

  const canonicalUrl = "https://media.lizzdo.com/sitemap";
  const seoTitle = "Site Map & Architecture | Lizzdo Media";
  const seoDescription = "Complete HTML site map and directory for Lizzdo Media. Easily browse all services, case studies, insights articles, and legal documents.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Site Map & Architecture",
      "description": seoDescription,
      "url": canonicalUrl,
      "publisher": {
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
          "name": "Site Map",
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-['Plus_Jakarta_Sans'] selection:bg-[#ffbe1a] selection:text-black">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="website"
        schemaData={schemaData}
      />

      {/* Breadcrumb */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md pt-20">
        <Breadcrumb items={[{ label: 'Site Map', href: '/sitemap' }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-14 sm:py-20 border-b border-white/[0.06] overflow-hidden">
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
            A complete crawlable index of all pages, service capabilities, portfolio case studies, and insights articles on {siteSettings.siteName}.
          </p>
        </div>
      </section>

      {/* Grid of Sections */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Column 1: Main Platform Pages */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
                <Home className="w-4 h-4" />
                <span>Primary Pages</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <a 
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>Home Overview</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/services"
                    onClick={(e) => { e.preventDefault(); navigateTo('/services'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>Services Directory</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/services</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/work"
                    onClick={(e) => { e.preventDefault(); navigateTo('/work'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>Featured Work & Portfolio</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/work</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/about"
                    onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>About Lizzdo Media</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/about</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/blog"
                    onClick={(e) => { e.preventDefault(); navigateTo('/blog'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>Blog & Insights</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/blog</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span>Contact & Estimates</span>
                    <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#ffbe1a] hover:bg-[#e5a93c] text-black font-bold text-xs font-['Outfit'] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project Consultation</span>
              </a>
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
                  <a 
                    href={`/services/${s.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/services/${s.slug}`); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span className="truncate pr-2">{s.title}</span>
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-400 shrink-0">
                      /services/{s.slug}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Case Studies & Portfolio */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <Briefcase className="w-4 h-4" />
              <span>Case Studies</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {portfolio.map((p) => (
                <li key={p.id}>
                  <a 
                    href={`/work/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/work/${p.slug}`); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span className="truncate pr-2">{p.title}</span>
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-400 shrink-0">
                      /work/{p.slug}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Blog Articles & Insights */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <BookOpen className="w-4 h-4" />
              <span>Articles & Insights</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {blog.map((b) => (
                <li key={b.id}>
                  <a 
                    href={`/blog/${b.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                    className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                  >
                    <span className="truncate pr-2">{b.title}</span>
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-400 shrink-0">
                      /blog/{b.slug}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal & Policies */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal & Policies</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a 
                  href="/privacy"
                  onClick={(e) => { e.preventDefault(); navigateTo('/privacy'); }}
                  className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                >
                  <span>Privacy Policy</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/privacy</span>
                </a>
              </li>
              <li>
                <a 
                  href="/terms"
                  onClick={(e) => { e.preventDefault(); navigateTo('/terms'); }}
                  className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                >
                  <span>Terms of Use</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/terms</span>
                </a>
              </li>
              <li>
                <a 
                  href="/legal"
                  onClick={(e) => { e.preventDefault(); navigateTo('/legal'); }}
                  className="flex items-center justify-between w-full text-slate-300 hover:text-[#ffbe1a] transition-colors group"
                >
                  <span>Legal Notice & Disclaimer</span>
                  <span className="font-mono text-[11px] text-slate-600 group-hover:text-slate-400">/legal</span>
                </a>
              </li>
              <li>
                <a 
                  href="/sitemap"
                  onClick={(e) => { e.preventDefault(); navigateTo('/sitemap'); }}
                  className="flex items-center justify-between w-full text-[#ffbe1a] font-semibold"
                >
                  <span>Interactive Site Map</span>
                  <span className="font-mono text-[11px] text-[#ffbe1a]/70">/sitemap</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: Direct Connect */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-base font-['Outfit'] border-b border-white/[0.08] pb-3">
              <Mail className="w-4 h-4" />
              <span>Direct Channels</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href={`mailto:${siteSettings.contactEmail}`} 
                className="text-white hover:text-[#ffbe1a] font-mono font-medium flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <Mail className="w-4 h-4 text-[#ffbe1a]" />
                <span className="truncate">{siteSettings.contactEmail}</span>
              </a>

              <a 
                href={siteSettings.parentCompanyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#ffbe1a] font-mono font-medium flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <ExternalLink className="w-4 h-4 text-[#ffbe1a]" />
                <span>Lizzdo Network (lizzdo.com)</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
