import React from 'react';
import { SocialSettings, SiteSettings } from '../types';
import { getValidSocialLinks } from '../data/cmsContent';

interface SocialLinksProps {
  social?: SocialSettings;
  siteSettings?: SiteSettings;
  variant?: 'circles' | 'pills' | 'cards' | 'minimal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Crisp, lightweight inline brand SVG icons
const BrandIcons: Record<string, React.FC<{ className?: string }>> = {
  instagram: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  facebook: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.229.117-1.574.351-.482.327-.723.948-.723 1.864v1.765h4.414l-.59 3.667h-3.824v7.98H9.101z" />
    </svg>
  ),
  youtube: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  ),
  pinterest: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55l1.07-4.54s-.27-.55-.27-1.37c0-1.28.74-2.24 1.67-2.24.78 0 1.16.59 1.16 1.3 0 .79-.5 1.97-.77 3.07-.22.92.46 1.67 1.37 1.67 1.64 0 2.9-1.73 2.9-4.23 0-2.21-1.59-3.76-3.86-3.76-2.63 0-4.17 1.97-4.17 4.01 0 .79.31 1.64.69 2.1a.34.34 0 0 1 .08.33l-.26 1.05c-.04.17-.14.21-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.97-4.99 5.97-.97 0-1.89-.51-2.2-.11l-.6 2.28c-.22.84-.81 1.9-1.21 2.54A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  ),
  behance: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.971 3-3.419 0-5.755-2.3-5.755-5.908 0-3.743 2.49-6.092 5.603-6.092 3.498 0 5.176 2.484 4.887 6.136h-7.792c.088 2.019 1.492 3.125 3.328 3.125 1.545 0 2.477-.73 2.969-1.758l1.731 1.497zm-5.02-6.196c-1.579 0-2.454 1.077-2.62 2.417h5.17c-.035-1.34-1.01-2.417-2.55-2.417zm-11.706-7.804h5.275c1.884 0 3.25.422 4.102 1.268.79.784 1.196 1.865 1.196 3.197 0 1.258-.401 2.278-1.189 3.013-.418.39-1.002.696-1.752.92 1.042.276 1.828.775 2.355 1.498.536.736.809 1.688.809 2.853 0 1.472-.477 2.684-1.42 3.593-.948.914-2.392 1.378-4.331 1.378h-6.276v-17.72h1.231zm2.766 6.887h2.443c1.025 0 1.777-.205 2.257-.615.48-.41.72-1.025.72-1.846 0-.82-.24-1.435-.72-1.845-.48-.41-1.232-.615-2.257-.615h-2.443v4.921zm0 8.053h2.646c1.157 0 2.008-.239 2.554-.717.546-.478.819-1.194.819-2.148 0-.955-.273-1.67-.819-2.148-.546-.478-1.397-.717-2.554-.717h-2.646v5.73z" />
    </svg>
  ),
  dribbble: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  ),
  github: ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  social,
  siteSettings,
  variant = 'circles',
  className = '',
  size = 'md'
}) => {
  const links = getValidSocialLinks(social, siteSettings);
  const brandName = siteSettings?.siteName || "Lizzdo Media";

  if (!links || links.length === 0) {
    return null;
  }

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const circleSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11"
  };

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}>
        {links.map((link) => {
          const IconComp = BrandIcons[link.id] || BrandIcons.instagram;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${brandName} on ${link.name}`}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#ffbe1a]/40 text-slate-300 hover:text-white transition-all flex items-center gap-3 group shadow-sm hover:scale-[1.02]"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 group-hover:text-[#ffbe1a] group-hover:bg-[#ffbe1a]/10 flex items-center justify-center shrink-0 transition-colors">
                <IconComp className={iconSizes[size]} />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors truncate">
                  {link.name}
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate">Follow</div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {links.map((link) => {
          const IconComp = BrandIcons[link.id] || BrandIcons.instagram;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${brandName} on ${link.name}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#ffbe1a] border border-white/[0.1] hover:border-[#ffbe1a] text-slate-300 hover:text-black text-xs font-bold font-['Outfit'] transition-all hover:scale-105 shadow-sm"
            >
              <IconComp className={iconSizes[size]} />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {links.map((link) => {
          const IconComp = BrandIcons[link.id] || BrandIcons.instagram;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${brandName} on ${link.name}`}
              className="text-slate-400 hover:text-[#ffbe1a] transition-colors hover:scale-110 p-1"
            >
              <IconComp className={iconSizes[size]} />
            </a>
          );
        })}
      </div>
    );
  }

  // Default: circles
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const IconComp = BrandIcons[link.id] || BrandIcons.instagram;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brandName} on ${link.name}`}
            className={`${circleSizes[size]} rounded-xl bg-white/[0.04] hover:bg-[#ffbe1a] border border-white/[0.08] hover:border-[#ffbe1a] text-slate-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm`}
          >
            <IconComp className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
};
