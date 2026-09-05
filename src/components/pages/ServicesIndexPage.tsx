import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter, ChevronRight, MessageCircle } from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ServiceCard } from '../services/ServiceCard';
import { navigateTo } from '../../utils/router';
import { createWhatsAppUrl } from '../../utils/whatsapp';

interface ServicesIndexPageProps {
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const { services = [], siteSettings } = cmsData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Branding', 'Design', 'Engineering', 'Social', 'Marketing', 'AI & Innovation'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => {
        const cat = (s.category || '').toLowerCase();
        const title = (s.title || '').toLowerCase();
        switch (selectedCategory) {
          case 'Branding':
            return cat.includes('brand') || cat.includes('logo') || title.includes('brand') || title.includes('logo');
          case 'Design':
            return cat.includes('design') || cat.includes('graphic') || cat.includes('packaging') || cat.includes('flyer') || title.includes('flyer');
          case 'Engineering':
            return cat.includes('web') || title.includes('web') || title.includes('development');
          case 'Social':
            return cat.includes('social') || cat.includes('posting') || cat.includes('content') || title.includes('social');
          case 'Marketing':
            return cat.includes('market') || cat.includes('advertis') || title.includes('marketing') || title.includes('advertising');
          case 'AI & Innovation':
            return cat.includes('ai') || title.includes('ai');
          default:
            return cat.includes(selectedCategory.toLowerCase());
        }
      });

  const canonicalUrl = "https://media.lizzdo.com/services";
  const seoTitle = "Creative & Digital Services Cardiff & UK | Lizzdo Media";
  const seoDescription = "Explore full-spectrum creative capabilities: Brand Identity, Logo Design, Packaging Systems, High-Performance Web Development, Social Media Management, and AI Visuals from Cardiff, UK.";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Creative & Digital Services",
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
      "name": "Lizzdo Media Service Capabilities",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "description": service.shortDescription,
        "url": `https://media.lizzdo.com/services/${service.slug}`
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
          "name": "Services",
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
        <Breadcrumb items={[{ label: 'Services' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL CREATIVE CAPABILITIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Creative Disciplines For <span className="text-[#ffbe1a]">Commercial Growth.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From strategic brand identity to scalable web architecture and high-conversion social campaigns, explore our full spectrum of design and digital services.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ffbe1a] text-black font-bold shadow-lg shadow-[#ffbe1a]/20'
                  : 'bg-[#10131d] text-slate-300 hover:text-white hover:bg-[#161a26] border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid with new ServiceCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <ServiceCard
              key={service.id || service.slug}
              service={service}
              onNavigate={navigateTo}
              featured={idx === 0 && selectedCategory === 'All'}
            />
          ))}
        </div>

        {/* Global CTA Box */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Create Something Remarkable Together.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tell us what you need and our Cardiff studio will tailor the ideal creative solution for your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {(() => {
                const waUrl = createWhatsAppUrl(
                  siteSettings?.whatsappNumber,
                  `Hello ${siteSettings?.siteName || 'Lizzdo Media'}, I am browsing your services and would like to discuss a project.`
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
                      <span>Contact Studio →</span>
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
