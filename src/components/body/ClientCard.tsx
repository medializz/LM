import React, { useState } from 'react';
import { ClientItem } from '../../types';
import { ExternalLink, ArrowRight, Quote, Star } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface ClientCardProps {
  client: ClientItem;
  onSelectRelatedWork?: (slug: string) => void;
}

// Map service names to existing service slugs
function getServiceSlug(serviceName: string): string | null {
  const normalized = serviceName.toLowerCase();
  if (normalized.includes('brand') || normalized.includes('identity')) return 'brand-identity';
  if (normalized.includes('logo')) return 'logo-design';
  if (normalized.includes('packag')) return 'packaging-design';
  if (normalized.includes('social') && normalized.includes('design')) return 'social-media-design';
  if (normalized.includes('social') && normalized.includes('content')) return 'social-media-content';
  if (normalized.includes('social') && normalized.includes('manage')) return 'social-media-management';
  if (normalized.includes('posting') || normalized.includes('content post')) return 'content-posting';
  if (normalized.includes('market') || normalized.includes('digital market')) return 'digital-marketing';
  if (normalized.includes('advertis') || normalized.includes('ad creative')) return 'advertising-creatives';
  if (normalized.includes('ai visual') || normalized.includes('ai content')) return 'ai-visuals-content';
  if (normalized.includes('web dev') || normalized.includes('website dev')) return 'website-development';
  if (normalized.includes('graphic')) return 'graphic-design';
  return null;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  client,
  onSelectRelatedWork
}) => {
  const [logoError, setLogoError] = useState(false);
  const logoAlt = client.logoAlt || `${client.name} logo`;

  const handleRelatedWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (client.relatedWork) {
      if (onSelectRelatedWork) {
        onSelectRelatedWork(client.relatedWork);
      } else {
        navigateTo(`/work/${client.relatedWork}`);
      }
    }
  };

  const handleServiceClick = (e: React.MouseEvent, serviceName: string) => {
    e.preventDefault();
    const slug = getServiceSlug(serviceName);
    if (slug) {
      navigateTo(`/services/${slug}`);
    } else {
      navigateTo('/services');
    }
  };

  return (
    <article
      id={`client-${client.id}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
      aria-label={`${client.name} partnership details`}
    >
      {/* Top Bar: Logo & Featured Badge */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3 min-h-[44px]">
          {/* Logo container with preserved transparency */}
          <div className="flex items-center h-10 max-w-[170px]">
            {!logoError && client.logo ? (
              <img
                src={client.logo}
                alt={logoAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="max-h-9 max-w-full object-contain filter drop-shadow-sm group-hover:brightness-110 transition-all duration-300"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center font-['Outfit'] font-black text-sm text-[#ffbe1a]">
                  {client.name.charAt(0)}
                </div>
                <span className="font-['Outfit'] font-bold text-white text-sm tracking-tight">
                  {client.name}
                </span>
              </div>
            )}
          </div>

          {/* Featured pill badge */}
          {client.featured && (
            <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#ffbe1a]/10 text-[#ffbe1a] border border-[#ffbe1a]/20">
              Featured
            </span>
          )}
        </div>

        {/* Company Name */}
        <div>
          <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors tracking-tight">
            {client.name}
          </h3>
        </div>

        {/* Services Provided Tags */}
        {client.services && client.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Services provided to client">
            {client.services.map((service, sIdx) => {
              const slug = getServiceSlug(service);
              return (
                <button
                  key={sIdx}
                  onClick={(e) => handleServiceClick(e, service)}
                  title={slug ? `View ${service} details` : service}
                  className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] hover:bg-[#ffbe1a]/15 text-slate-300 hover:text-[#ffbe1a] border border-white/[0.06] hover:border-[#ffbe1a]/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  {service}
                </button>
              );
            })}
          </div>
        )}

        {/* Short Project Description */}
        {client.shortDescription && (
          <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed pt-1">
            {client.shortDescription}
          </p>
        )}

        {/* Client Review (Optional & Genuine Only) */}
        {client.reviewEnabled && client.reviewText && (
          <div className="mt-4 pt-3.5 border-t border-white/[0.06] space-y-2.5 bg-white/[0.02] -mx-2 px-3 py-3 rounded-xl border">
            {/* Optional Rating Stars */}
            {typeof client.rating === 'number' && client.rating > 0 && (
              <div className="flex items-center gap-1" aria-label={`Rating: ${client.rating} out of 5 stars`}>
                {Array.from({ length: Math.min(5, Math.max(1, client.rating)) }).map((_, rIdx) => (
                  <Star key={rIdx} className="w-3 h-3 fill-[#ffbe1a] text-[#ffbe1a]" />
                ))}
              </div>
            )}

            <div className="relative pl-4">
              <Quote className="w-3 h-3 text-[#ffbe1a]/50 absolute top-0.5 left-0" />
              <p className="text-[12px] text-slate-300 italic leading-relaxed">
                "{client.reviewText}"
              </p>
            </div>

            {(client.reviewerName || client.reviewerPosition) && (
              <div className="flex items-center gap-2.5 pt-1 pl-4">
                {client.reviewerPhoto ? (
                  <img
                    src={client.reviewerPhoto}
                    alt={client.reviewerName || "Client reviewer"}
                    className="w-6 h-6 rounded-full object-cover border border-white/20"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-300">
                    {(client.reviewerName || client.name).charAt(0)}
                  </div>
                )}
                <div className="text-[11px] leading-tight">
                  {client.reviewerName && (
                    <span className="font-semibold text-white block">
                      {client.reviewerName}
                    </span>
                  )}
                  {client.reviewerPosition && (
                    <span className="text-slate-500 font-mono text-[10px] block">
                      {client.reviewerPosition}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Actions: Visit Website & Related Work */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 text-xs">
        {/* Optional Website Link */}
        {client.websiteUrl ? (
          <a
            href={client.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#ffbe1a] font-medium transition-colors cursor-pointer group/link"
            aria-label={`Visit ${client.name} official website`}
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <div />
        )}

        {/* Optional Related Work Project Link */}
        {client.relatedWork && (
          <a
            href={`/work/${client.relatedWork}`}
            onClick={handleRelatedWorkClick}
            className="inline-flex items-center gap-1 text-[#ffbe1a] hover:text-yellow-300 font-bold font-['Outfit'] transition-all cursor-pointer group/btn"
            title={`View ${client.relatedWorkTitle || 'case study'}`}
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </article>
  );
};
