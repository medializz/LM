import React, { useEffect } from 'react';
import { ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onStartProject: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const deliverablesMap: Record<string, string[]> = {
    'brand-identity': ['Brand Guidelines & Style Guide', 'Color Palette & Typographic Hierarchy', 'Stationery & Packaging Assets', 'Vector Master Assets (AI, SVG, EPS)'],
    'logo-design': ['Primary & Secondary Logo Marks', 'Faceted Geometric Vector Construction', 'Monochrome & Dark Mode Variations', 'High-Res & Scalable Vector Exports'],
    'graphic-design': ['Marketing Visuals & Pitch Decks', 'Custom Vector Illustrations', 'Print & Digital Collateral', 'Social Banners & Display Graphics'],
    'web-development': ['Modern Responsive Architecture', 'High Performance Web Solutions', 'Decap CMS / Headless Content Integrations', 'SEO & Analytics Optimization'],
    'social-media-design': ['Curated Social Grid Systems', 'Story & Reel Templates', 'High-Engagement Carousel Posts', 'Custom Branded Vector Icons'],
    'content-posting': ['Editorial Scheduling & Calendar', 'High-Impact Copy & Captions', 'Cross-Platform Formatting', 'Hashtag & Audience Research'],
    'digital-marketing': ['Performance Ad Campaigns', 'Conversion Funnel Strategy', 'Analytics & KPI Tracking', 'A/B Testing & Optimization'],
    'social-media-management': ['Community Engagement & Growth', 'Daily Monitoring & Responses', 'Brand Voice Consistency', 'Monthly Performance Reporting'],
    'advertising-creatives': ['High-Converting Banner Ads', 'Static & Animated Ad Creatives', 'Targeted Audience Variations', 'Omnichannel Format Sizing'],
    'ai-visuals-content': ['Generative Visual Art Direction', 'Custom AI Image Synthesis', 'Prompt Engineering & Refinement', 'High-Resolution Upscaling & Retouching'],
    'website-development': ['Enterprise Web Architecture', 'Custom Web Applications', 'Cloudflare & GitHub Pages Pipelines', 'Fast Loading & Accessibility Standards']
  };

  const deliverables = deliverablesMap[service.slug] || [
    'Custom tailored creative execution',
    'Dedicated art direction and design sprints',
    'Comprehensive production deliverables',
    'Direct collaboration with senior designers'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#11131c] border border-white/15 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (44px touch target) */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Category */}
        <div className="flex items-center gap-3.5 sm:gap-4 mb-4 pr-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#181b26] border border-[#ffbe1a]/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,190,26,0.2)] shrink-0">
            <ServiceIcon name={service.iconKey || service.slug} size={30} className="text-[#ffbe1a]" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffbe1a]">
              {service.category}
            </span>
            <h2 id="service-modal-title" className="text-xl sm:text-2xl font-black text-white font-['Outfit'] leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Optional Visual Thumbnail Preview */}
        {(service.previewImage || service.image) && (
          <div className="relative w-full h-36 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] overflow-hidden flex items-center justify-center p-2.5 mb-4">
            <img
              src={service.previewImage || service.image}
              alt={service.previewImageAlt || `${service.title} visual preview`}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
          {service.shortDescription} — engineered to help your brand establish an iconic market presence and drive measurable customer engagement.
        </p>

        {/* Key Deliverables */}
        <div className="mb-5 sm:mb-6">
          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Key Scope & Deliverables:
          </h3>
          <div className="space-y-2">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons (Stacked on mobile for easier tapping) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onStartProject(service.title);
            }}
            className="flex-1 min-h-[46px] py-3 px-5 rounded-full bg-[#ffbe1a] text-black font-bold text-xs sm:text-sm hover:bg-yellow-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,190,26,0.4)] cursor-pointer"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="min-h-[44px] py-2.5 px-5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 text-slate-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
