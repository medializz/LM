import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ShieldAlert, Globe, Building2, Mail, ExternalLink, ChevronRight, Stamp } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface LegalNoticePageProps {
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
}

export const LegalNoticePage: React.FC<LegalNoticePageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const siteSettings = cmsData.siteSettings;
  const currentYear = new Date().getFullYear();

  const canonicalUrl = "https://media.lizzdo.com/legal";
  const seoTitle = `Legal Notice & Disclaimers | ${siteSettings.siteName}`;
  const seoDescription = `Legal disclosure, company identification, copyright policies, and intellectual property notices for ${siteSettings.siteName}.`;

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Legal Notice & Disclaimers",
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
          "name": "Legal Notice",
          "item": canonicalUrl
        }
      ]
    }
  ];

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
        <Breadcrumb items={[{ label: 'Legal Notice', active: true }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <Stamp className="w-3.5 h-3.5" />
            <span>DISCLOSURE & REGISTRATION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Legal <span className="text-[#ffbe1a]">Notice</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Statutory provider information, intellectual property disclosures, and parent entity affiliation for {siteSettings.siteName}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Section 1: Entity Information */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#10131d] border border-white/[0.08] shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#ffbe1a]" />
              <h2 className="text-xl font-bold text-white font-['Outfit']">
                Agency & Provider Information
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Operating Agency</span>
                <span className="font-semibold text-white text-base">{siteSettings.siteName}</span>
                <span className="block text-slate-400 mt-1">{siteSettings.tagline}</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Corporate Network</span>
                <a 
                  href={siteSettings.parentCompanyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ffbe1a] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Lizzdo Group (lizzdo.com)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-slate-400 mt-1">Creative, Media & Technology Holdings</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Direct Inquiries & Legal Contact</span>
                <a 
                  href={`mailto:${siteSettings.contactEmail}`}
                  className="font-mono text-slate-200 hover:text-[#ffbe1a] transition-colors"
                >
                  {siteSettings.contactEmail}
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Official Domain</span>
                <span className="font-mono text-slate-200">{siteSettings.currentDomain}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Trademark & Brand Identity Notice */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Trademark & Brand Notice
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              "Lizzdo", "Lizzdo Media", the Lizzdo geometric brandmark, logotypes, color palettes, and website design compositions are proprietary trademarks and intellectual property of the Lizzdo network. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed pl-11">
              Client logos, product packaging mockups, and referenced brand names showcased in our portfolio belong to their respective trademark holders and are displayed solely for artistic demonstration and case study purposes.
            </p>
          </div>

          {/* Section 3: Copyright Notice */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Copyright Protection
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              All visual assets, 3D renderings, dieline engineering illustrations, vector systems, UI design layouts, and authored editorial copy on this site are protected under international copyright treaties. Unauthorized duplication, framing, scraping, or redistribution without prior written consent is strictly prohibited.
            </p>
          </div>

          {/* Section 4: External Links & Liability Disclaimer */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                External Links Disclaimer
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              Our website may contain links to external third-party websites (e.g. social platforms, partner networks). {siteSettings.siteName} has no control over the content, terms, or privacy policies of third-party domains and assumes no responsibility for third-party practices.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom Cross Navigation */}
      <section className="py-12 border-t border-white/[0.06] bg-[#0c0e15]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => navigateTo('/privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('/terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('/sitemap')} className="hover:text-white transition-colors cursor-pointer">
              Site Map
            </button>
          </div>

          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-1.5 text-[#ffbe1a] hover:underline font-['Outfit'] font-bold cursor-pointer"
          >
            <span>Back to Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
