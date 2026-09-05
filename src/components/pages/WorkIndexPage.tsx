import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { WorkFilters } from '../work/WorkFilters';
import { WorkGrid } from '../work/WorkGrid';
import { navigateTo } from '../../utils/router';
import { createWhatsAppUrl } from '../../utils/whatsapp';

interface WorkIndexPageProps {
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const WorkIndexPage: React.FC<WorkIndexPageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const { portfolio = [], siteSettings } = cmsData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Dynamically extract categories or use standard disciplines
  const categories = ['All', 'Branding', 'Graphic Design', 'Web Development', 'Social Media Design', 'Packaging'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(p => 
        p.category?.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        p.shortCategory?.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  const canonicalUrl = "https://media.lizzdo.com/work";
  const seoTitle = "Selected Work & Case Studies | Lizzdo Media Cardiff";
  const seoDescription = "Explore our verified design portfolio and case studies: luxury brand identities, dieline packaging systems, modern SaaS web platforms, and digital campaigns.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Selected Commercial Work & Case Studies",
      "description": seoDescription,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": siteSettings?.siteName || "Lizzdo Media",
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Client Case Studies",
      "itemListElement": portfolio.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "description": item.description,
        "url": `https://media.lizzdo.com/work/${item.slug}`
      }))
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
          "name": "Work",
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="website"
        schemaData={schemaData}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md pt-20">
        <Breadcrumb items={[{ label: 'Work' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL WORK & CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Proven Results For <span className="text-[#ffbe1a]">Ambitious Brands.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every project represents a commercial transformation—engineered with mathematical precision, typographic discipline, and modern vector craft.
          </p>
        </div>

        {/* Modular Category Filter Bar */}
        <WorkFilters
          categories={categories}
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          totalCount={filteredProjects.length}
        />

        {/* Portfolio Projects Grid */}
        <WorkGrid
          items={filteredProjects}
          onNavigate={navigateTo}
        />

        {/* Global Inquiries CTA */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">Ready to Collaborate?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Build Your Next High-Impact Project.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consult directly with our creative directors in Cardiff about your brand identity, launch timelines, and commercial goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {(() => {
                const waUrl = createWhatsAppUrl(
                  siteSettings?.whatsappNumber,
                  `Hello ${siteSettings?.siteName || 'Lizzdo Media'}, I am browsing your work archive and would like to discuss a project.`
                );
                return (
                  <>
                    {waUrl && waUrl !== '#' && (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-base transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20 flex items-center gap-2 cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    )}
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('/contact');
                      }}
                      className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#ffbe1a]/20 cursor-pointer flex items-center gap-2"
                    >
                      <span>Start a Project →</span>
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
