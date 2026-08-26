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
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (serviceId: string) => {
    setFailedImages(prev => ({ ...prev, [serviceId]: true }));
  };

  const categories = ['All', 'Branding', 'Design', 'Engineering', 'Social', 'Marketing', 'AI & Innovation'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category?.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === 'Branding' && s.category === 'Branding'));

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title="Lizzdo Media | Creative & Digital Services"
        description="Explore our full spectrum of creative services: Brand Identity, Logo Design, Web Development, Social Media, Digital Marketing, and AI Content."
        canonicalUrl="https://media.lizzdo.com/services"
        type="website"
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
            Creative Solutions For <span className="text-[#ffbe1a]">Every Need.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
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
                  ? 'bg-[#ffbe1a] text-black font-bold shadow-lg shadow-[#ffbe1a]/20'
                  : 'bg-[#10131d] text-slate-300 hover:text-white hover:bg-[#161a26] border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const imageSrc = service.previewImage || service.image;
            const hasValidImage = Boolean(imageSrc && !failedImages[service.id]);

            return (
              <div
                key={service.id}
                onClick={() => navigateTo(`/services/${service.slug}`)}
                className="group bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Service Image / Visual Preview Thumbnail (Optional, Transparent-safe) */}
                  {hasValidImage && (
                    <div className="relative w-full h-36 sm:h-40 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] overflow-hidden flex items-center justify-center p-2.5 group-hover:border-[#ffbe1a]/30 transition-all">
                      <img
                        src={imageSrc}
                        alt={service.previewImageAlt || `${service.title} visual preview and mockup`}
                        loading="lazy"
                        decoding="async"
                        onError={() => handleImageError(service.id)}
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#ffbe1a]/40 flex items-center justify-center text-[#ffbe1a] group-hover:bg-[#ffbe1a] group-hover:text-black transition-all shadow-md">
                      <ServiceIcon iconKey={service.iconKey} size={22} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-[#07090e] px-2.5 py-0.5 rounded border border-white/[0.08]">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#ffbe1a] font-semibold">
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box */}
        <section className="bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Ready to Start?</span>
            <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-black text-white">
              Let's Create Something Remarkable Together.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tell us what you need and we will tailor the right creative solution for your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#ffbe1a]/20 cursor-pointer"
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
