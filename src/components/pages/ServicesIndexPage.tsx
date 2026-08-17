import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter, ChevronRight, MessageCircle } from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { ServiceIcon } from '../ServiceIcons';
import { navigateTo } from '../../utils/router';

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
    : services.filter(s => s.category?.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === 'Branding' && s.category === 'Branding'));

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white selection:bg-[#e5a93c] selection:text-black">
      <SEOHead
        title="Lizzdo Media | Creative & Digital Services"
        description="Explore our full spectrum of creative services: Brand Identity, Logo Design, Web Development, Social Media, Digital Marketing, and AI Content."
        canonicalUrl="https://media.lizzdo.com/services"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md sticky top-16 z-30">
        <Breadcrumb items={[{ label: 'Services' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5a93c]/10 border border-[#e5a93c]/30 text-[#e5a93c] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL CREATIVE CAPABILITIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Creative Solutions For <span className="text-[#e5a93c]">Every Need.</span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            From strategic brand identity to scalable web architecture and high-conversion social campaigns, explore our complete array of design and digital services.
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
                  ? 'bg-[#e5a93c] text-neutral-950 font-bold shadow-lg shadow-[#e5a93c]/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => navigateTo(`/services/${service.slug}`)}
              className="group bg-neutral-950 border border-neutral-800/80 hover:border-[#e5a93c]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900/90 border border-neutral-800 group-hover:border-[#e5a93c]/40 flex items-center justify-center text-[#e5a93c] group-hover:bg-[#e5a93c] group-hover:text-black transition-all shadow-md">
                    <ServiceIcon iconKey={service.iconKey} size={22} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e5a93c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-[#e5a93c] font-semibold">
                <span>Explore Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Box */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-[#e5a93c]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#e5a93c]">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Create Something Remarkable Together.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Tell us what you need and we will tailor the right creative solution for your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#e5a93c]/20 cursor-pointer"
              >
                Let's Talk →
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
