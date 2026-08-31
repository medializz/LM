import React from 'react';
import { DecapCMSData, LegalPage } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ShieldCheck, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { navigateTo } from '../../utils/router';
import { getWhatsAppUrl } from '../../data/cmsContent';

interface LegalPageRendererProps {
  slug: string;
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
  fallbackTitle?: string;
}

export const LegalPageRenderer: React.FC<LegalPageRendererProps> = ({
  slug,
  cmsData,
  onOpenContact,
  fallbackTitle
}) => {
  const { siteSettings, legalPages = [] } = cmsData;

  // Find matching legal page from CMS
  const normalizedSlug = slug.toLowerCase().replace(/^\//, '');
  const matchedPage = legalPages.find(p => 
    p.slug.toLowerCase() === normalizedSlug ||
    p.id.toLowerCase() === normalizedSlug ||
    (normalizedSlug === 'privacy' && p.slug.includes('privacy')) ||
    (normalizedSlug === 'terms' && (p.slug.includes('terms') || p.slug.includes('use'))) ||
    (normalizedSlug === 'legal' && p.slug.includes('legal')) ||
    (normalizedSlug === 'cookies' && p.slug.includes('cookie'))
  );

  const pageTitle = matchedPage?.title || fallbackTitle || "Legal & Policy Information";
  const lastUpdated = matchedPage?.lastUpdated || "March 1, 2026";
  const canonicalUrl = matchedPage?.canonicalUrl || `https://media.lizzdo.com/${normalizedSlug}`;
  const seoTitle = matchedPage?.seoTitle || `${pageTitle} | ${siteSettings.siteName}`;
  const seoDescription = matchedPage?.metaDescription || `Read the official ${pageTitle} for ${siteSettings.siteName}.`;

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageTitle,
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
          "name": pageTitle,
          "item": canonicalUrl
        }
      ]
    }
  ];

  const handleWhatsApp = () => {
    const message = `Hi ${siteSettings.siteName || 'Lizzdo Media'}, I have a question regarding your ${pageTitle}.`;
    const url = getWhatsAppUrl(siteSettings.whatsappNumber, message);
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-['Plus_Jakarta_Sans'] selection:bg-[#ffbe1a]/30 selection:text-white">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="website"
        schemaData={schemaData}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md">
        <Breadcrumb items={[{ label: pageTitle, active: true }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & POLICIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            {pageTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Official guidelines, standards, and legal policies of {siteSettings.siteName}.
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-[#ffbe1a]" />
            <span>Last Updated: <strong className="text-slate-300 font-semibold">{lastUpdated}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#10131d] border border-white/[0.08] p-6 sm:p-10 md:p-12 shadow-xl">
          {matchedPage?.content ? (
            <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              {matchedPage.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={pIdx} className="text-lg sm:text-xl font-bold font-['Outfit'] text-white pt-4 border-t border-white/[0.06] first:border-0 first:pt-0">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={pIdx} className="space-y-2 pl-4 list-disc marker:text-[#ffbe1a]">
                      {paragraph.split('\n').map((item, iIdx) => (
                        <li key={iIdx} className="text-slate-300">
                          {item.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={pIdx} className="text-slate-300">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4 text-slate-300">
              <p>For questions or formal inquiries regarding our {pageTitle}, please contact our legal compliance team at <a href={`mailto:${siteSettings.contactEmail}`} className="text-[#ffbe1a] underline">{siteSettings.contactEmail}</a>.</p>
            </div>
          )}

          {/* Quick Legal Switcher */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Explore other policies:
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigateTo('/privacy-policy'); }} className="text-slate-300 hover:text-[#ffbe1a] transition-colors">Privacy Policy</a>
              <span className="text-white/20">•</span>
              <a href="/terms-and-conditions" onClick={(e) => { e.preventDefault(); navigateTo('/terms-and-conditions'); }} className="text-slate-300 hover:text-[#ffbe1a] transition-colors">Terms & Conditions</a>
              <span className="text-white/20">•</span>
              <a href="/terms-of-use" onClick={(e) => { e.preventDefault(); navigateTo('/terms-of-use'); }} className="text-slate-300 hover:text-[#ffbe1a] transition-colors">Terms of Use</a>
              <span className="text-white/20">•</span>
              <a href="/cookie-policy" onClick={(e) => { e.preventDefault(); navigateTo('/cookie-policy'); }} className="text-slate-300 hover:text-[#ffbe1a] transition-colors">Cookie Policy</a>
              <span className="text-white/20">•</span>
              <a href="/legal-notice" onClick={(e) => { e.preventDefault(); navigateTo('/legal-notice'); }} className="text-slate-300 hover:text-[#ffbe1a] transition-colors">Legal Notice</a>
            </div>
          </div>
        </div>

        {/* Contact Support Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white font-['Outfit']">Need further clarification?</div>
            <div className="text-xs text-slate-400 mt-0.5">Our support and compliance team is available to assist you.</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteSettings.contactEmail}`}
              className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-all"
            >
              Email Us
            </a>
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2 rounded-full bg-[#ffbe1a] hover:bg-yellow-400 text-black text-xs font-extrabold font-['Outfit'] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
