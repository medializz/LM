import React, { useState } from 'react';
import { TestimonialItem, ClientItem } from '../../types';
import { Quote, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  clientInfo?: ClientItem;
  onSelectRelatedWork?: (slug: string) => void;
}

// Map service names/slugs to valid service detail slugs
function getServiceSlug(serviceIdentifier?: string): string | null {
  if (!serviceIdentifier) return null;
  const normalized = serviceIdentifier.toLowerCase().replace(/[\s_]+/g, '-');
  if (normalized.includes('brand') || normalized.includes('identity')) return 'brand-identity';
  if (normalized.includes('logo')) return 'logo-design';
  if (normalized.includes('packag')) return 'packaging-design';
  if (normalized.includes('social') && normalized.includes('design')) return 'social-media-design';
  if (normalized.includes('social') && normalized.includes('content')) return 'social-media-content';
  if (normalized.includes('social') && normalized.includes('manage')) return 'social-media-management';
  if (normalized.includes('posting') || normalized.includes('content-post')) return 'content-posting';
  if (normalized.includes('market') || normalized.includes('digital-market')) return 'digital-marketing';
  if (normalized.includes('advertis') || normalized.includes('ad-creative')) return 'advertising-creatives';
  if (normalized.includes('ai-visual') || normalized.includes('ai-content')) return 'ai-visuals-content';
  if (normalized.includes('web-dev') || normalized.includes('website-dev')) return 'website-development';
  if (normalized.includes('graphic')) return 'graphic-design';
  return normalized;
}

function formatServiceLabel(serviceIdentifier?: string): string {
  if (!serviceIdentifier) return '';
  // Convert slug or key to Title Case label
  return serviceIdentifier
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  clientInfo,
  onSelectRelatedWork
}) => {
  const [logoError, setLogoError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const reviewText = testimonial.reviewText || testimonial.quote || '';
  const reviewerName = testimonial.reviewerName || testimonial.author || '';
  const reviewerPosition = testimonial.reviewerPosition || testimonial.role || '';
  const companyName = testimonial.companyName || testimonial.company || clientInfo?.name || '';
  const companyLogo = testimonial.companyLogo || clientInfo?.logo || '';
  const reviewerPhoto = testimonial.reviewerPhoto || testimonial.avatar || '';
  const rating = typeof testimonial.rating === 'number' && testimonial.rating > 0 ? testimonial.rating : null;
  const relatedService = testimonial.relatedService;
  const relatedWorkSlug = testimonial.relatedWork || clientInfo?.relatedWork;
  const relatedWorkTitle = testimonial.relatedWorkTitle || clientInfo?.relatedWorkTitle;

  const handleRelatedWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (relatedWorkSlug) {
      if (onSelectRelatedWork) {
        onSelectRelatedWork(relatedWorkSlug);
      } else {
        navigateTo(`/work/${relatedWorkSlug}`);
      }
    }
  };

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const slug = getServiceSlug(relatedService);
    if (slug) {
      navigateTo(`/services/${slug}`);
    } else {
      navigateTo('/services');
    }
  };

  return (
    <article
      id={`testimonial-${testimonial.id}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
      aria-label={`Testimonial from ${reviewerName}${companyName ? ` at ${companyName}` : ''}`}
    >
      <div className="space-y-4">
        
        {/* Top Row: Company Logo / Name & Optional Rating */}
        <div className="flex items-start justify-between gap-3 min-h-[36px]">
          {/* Company Brand Logo or Initials */}
          <div className="flex items-center h-8 max-w-[160px]">
            {!logoError && companyLogo ? (
              <img
                src={companyLogo}
                alt={companyName ? `${companyName} logo` : "Client logo"}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="max-h-7 max-w-full object-contain filter drop-shadow-sm group-hover:brightness-110 transition-all duration-300"
              />
            ) : companyName ? (
              <span className="font-['Outfit'] font-bold text-slate-300 text-xs sm:text-sm tracking-tight truncate">
                {companyName}
              </span>
            ) : (
              <Quote className="w-5 h-5 text-[#ffbe1a]/60" />
            )}
          </div>

          {/* Genuine Rating (Rendered ONLY if provided) */}
          {rating !== null && (
            <div 
              className="flex items-center gap-1 shrink-0 bg-white/[0.03] px-2 py-1 rounded-md border border-white/[0.05]"
              aria-label={`Rating: ${rating} out of 5 stars`}
            >
              {Array.from({ length: Math.min(5, Math.max(1, rating)) }).map((_, rIdx) => (
                <Star key={rIdx} className="w-3 h-3 fill-[#ffbe1a] text-[#ffbe1a]" />
              ))}
            </div>
          )}
        </div>

        {/* Review Statement Quote */}
        {reviewText && (
          <div className="relative pt-1">
            <p className="text-sm sm:text-[14px] text-slate-300 leading-relaxed italic">
              "{reviewText}"
            </p>
          </div>
        )}

        {/* Optional Tag: Related Service reference */}
        {relatedService && (
          <div className="pt-1">
            <button
              onClick={handleServiceClick}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#ffbe1a]/90 hover:text-[#ffbe1a] bg-[#ffbe1a]/10 hover:bg-[#ffbe1a]/20 border border-[#ffbe1a]/20 px-2.5 py-1 rounded-md transition-all cursor-pointer"
              title={`View ${formatServiceLabel(relatedService)} service`}
            >
              <span>Service:</span>
              <span className="font-semibold">{formatServiceLabel(relatedService)}</span>
            </button>
          </div>
        )}
      </div>

      {/* Card Footer: Reviewer Info + Optional Work Link */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
        {/* Reviewer Details */}
        <div className="flex items-center gap-3 min-w-0">
          {!photoError && reviewerPhoto ? (
            <img
              src={reviewerPhoto}
              alt={reviewerName ? `${reviewerName}, ${reviewerPosition} at ${companyName}` : "Client reviewer"}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setPhotoError(true)}
              className="w-9 h-9 rounded-full object-cover border border-white/20 shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center font-['Outfit'] font-bold text-xs text-[#ffbe1a] shrink-0">
              {(reviewerName || companyName || "C").charAt(0)}
            </div>
          )}

          <div className="min-w-0">
            {reviewerName && (
              <h3 className="text-xs sm:text-[13px] font-bold text-white font-['Outfit'] truncate">
                {reviewerName}
              </h3>
            )}
            <p className="text-[11px] text-slate-400 font-mono truncate">
              {reviewerPosition}
              {reviewerPosition && companyName ? ` • ${companyName}` : companyName}
            </p>
          </div>
        </div>

        {/* Optional Related Work Case Study Link */}
        {relatedWorkSlug && (
          <a
            href={`/work/${relatedWorkSlug}`}
            onClick={handleRelatedWorkClick}
            className="inline-flex items-center gap-1 text-[11px] text-[#ffbe1a] hover:text-yellow-300 font-bold font-['Outfit'] transition-all cursor-pointer shrink-0 group/link"
            title={relatedWorkTitle ? `View ${relatedWorkTitle}` : "View case study project"}
            aria-label={`View ${relatedWorkTitle || `${companyName} case study`}`}
          >
            <span>Project</span>
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>
    </article>
  );
};
