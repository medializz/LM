import React from 'react';
import {
  DiscoveryIcon,
  StrategyIcon,
  DesignIcon,
  EngineeringIcon,
  TestingIcon,
  LaunchIcon
} from './visuals/WorkflowIcons';
import {
  BrandIdentityIcon,
  LogoDesignIcon,
  GraphicDesignIcon,
  FlyerDesignIcon,
  PackagingDesignIcon,
  WebDevelopmentIcon,
  WebsiteDevelopmentIcon,
  SocialMediaDesignIcon,
  ContentPostingIcon,
  ContentCreationIcon,
  DigitalMarketingIcon,
  SocialMediaManagementIcon,
  AdvertisingCreativesIcon,
  AiVisualsContentIcon,
  ServiceVisualIcon
} from './visuals/ServiceVisualIcons';

// Re-export visual icons for flexible imports across the app
export {
  BrandIdentityIcon,
  LogoDesignIcon,
  GraphicDesignIcon,
  FlyerDesignIcon,
  PackagingDesignIcon,
  WebDevelopmentIcon,
  WebsiteDevelopmentIcon,
  SocialMediaDesignIcon,
  ContentPostingIcon,
  ContentCreationIcon,
  DigitalMarketingIcon,
  SocialMediaManagementIcon,
  AdvertisingCreativesIcon,
  AiVisualsContentIcon,
  ServiceVisualIcon
};

export interface ServiceIconProps {
  name?: string;
  iconKey?: string;
  size?: number;
  className?: string;
  title?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  iconKey,
  size = 36,
  className = "text-[#ffbe1a]",
  title
}) => {
  const rawKey = (name || iconKey || '').toLowerCase().trim();
  const normalizedKey = rawKey.replace(/[_\s]+/g, '-');

  // Service Icons (Bespoke Minimalist Vector System)
  switch (normalizedKey) {
    case 'brand-identity':
    case 'brand':
    case 'identity':
      return <BrandIdentityIcon size={size} className={className} title={title || "Brand Identity"} />;

    case 'logo-design':
    case 'logo':
      return <LogoDesignIcon size={size} className={className} title={title || "Logo Design"} />;

    case 'graphic-design':
    case 'graphic':
      return <GraphicDesignIcon size={size} className={className} title={title || "Graphic Design"} />;

    case 'flyer-design':
    case 'flyer':
    case 'leaflet':
    case 'flyer-leaflet-design':
      return <FlyerDesignIcon size={size} className={className} title={title || "Flyer & Leaflet Design"} />;

    case 'packaging-design':
    case 'packaging':
    case 'package':
      return <PackagingDesignIcon size={size} className={className} title={title || "Packaging Design"} />;

    case 'web-development':
    case 'web-dev':
    case 'web':
      return <WebDevelopmentIcon size={size} className={className} title={title || "Web Development"} />;

    case 'website-development':
    case 'website':
    case 'web-design':
      return <WebsiteDevelopmentIcon size={size} className={className} title={title || "Website Development"} />;

    case 'social-media-design':
    case 'social-design':
      return <SocialMediaDesignIcon size={size} className={className} title={title || "Social Media Design"} />;

    case 'content-posting':
    case 'posting':
    case 'schedule':
      return <ContentPostingIcon size={size} className={className} title={title || "Content Posting"} />;

    case 'content-creation':
    case 'creation':
      return <ContentCreationIcon size={size} className={className} title={title || "Content Creation"} />;

    case 'digital-marketing':
    case 'marketing':
    case 'digital':
      return <DigitalMarketingIcon size={size} className={className} title={title || "Digital Marketing"} />;

    case 'social-media-management':
    case 'social-management':
    case 'social-media':
      return <SocialMediaManagementIcon size={size} className={className} title={title || "Social Media Management"} />;

    case 'advertising-creatives':
    case 'advertising':
    case 'ad-creatives':
      return <AdvertisingCreativesIcon size={size} className={className} title={title || "Advertising Creatives"} />;

    case 'ai-visuals-content':
    case 'ai-visual-content':
    case 'ai-visuals':
    case 'ai-content':
    case 'ai':
      return <AiVisualsContentIcon size={size} className={className} title={title || "AI Visuals Content"} />;

    /* Process Icons */
    case 'discover':
    case 'discovery':
    case 'research':
      return <DiscoveryIcon size={size} className={className} title={title || "Discovery"} />;

    case 'plan':
    case 'strategy':
    case 'conceptualization':
      return <StrategyIcon size={size} className={className} title={title || "Strategy"} />;

    case 'design':
    case 'prototyping':
      return <DesignIcon size={size} className={className} title={title || "Design"} />;

    case 'develop':
    case 'engineering':
    case 'production':
      return <EngineeringIcon size={size} className={className} title={title || "Engineering"} />;

    case 'refinement':
    case 'testing':
    case 'qa':
      return <TestingIcon size={size} className={className} title={title || "Testing"} />;

    case 'launch':
    case 'deployment':
      return <LaunchIcon size={size} className={className} title={title || "Launch"} />;

    case 'grow':
      return <DigitalMarketingIcon size={size} className={className} title={title || "Grow"} />;

    /* Statistics Icons */
    case 'smile':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="18" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
          <path d="M16 27 C18 32 30 32 32 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'box':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M24 7 L39 15 L24 23 L9 15 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M9 15 L9 32 L24 40 L24 23" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M39 15 L39 32 L24 40" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M16 27 L20 31 L32 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'trophy':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M14 10 L34 10 L32 24 C32 29 28 32 24 32 C20 32 16 29 16 24 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M14 14 L8 14 C8 20 12 22 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 14 L40 14 C40 20 36 22 33 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="24" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'team':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M14 34 C14 28 18 26 24 26 C30 26 34 28 34 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M6 34 C6 30 9 28 13 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
          <circle cx="36" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M42 34 C42 30 39 28 35 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        </svg>
      );

    default:
      return <ServiceVisualIcon name={normalizedKey} size={size} className={className} title={title} />;
  }
};

