import React from 'react';
import { BrandIdentityComposition } from '../visuals/portfolio/BrandIdentityComposition';
import { PackagingDesignComposition } from '../visuals/portfolio/PackagingDesignComposition';
import { SaaSWebsiteComposition } from '../visuals/portfolio/SaaSWebsiteComposition';
import { SocialCampaignComposition } from '../visuals/portfolio/SocialCampaignComposition';
import { WebDevelopmentComposition } from '../visuals/portfolio/WebDevelopmentComposition';

interface VisualProps {
  type?: string;
  className?: string;
  isDetailed?: boolean;
}

export const PortfolioVisual: React.FC<VisualProps> = ({ 
  type = 'brand-identity', 
  className = "",
  isDetailed = false 
}) => {
  const normalizedType = (type || '').toLowerCase();

  switch (normalizedType) {
    case 'brand-identity':
    case 'branding':
    case 'brand-guidelines':
    case 'stationery':
    case 'logo-design':
      return <BrandIdentityComposition className={className} isDetailed={isDetailed} />;

    case 'packaging':
    case 'packaging-side':
    case 'packaging-box':
    case 'packaging-design':
    case '3d-packaging':
      return <PackagingDesignComposition className={className} isDetailed={isDetailed} />;

    case 'saas-dashboard':
    case 'saas-analytics':
    case 'saas-mobile':
    case 'saas':
    case 'saas-website-design':
      return <SaaSWebsiteComposition className={className} isDetailed={isDetailed} />;

    case 'social-campaign':
    case 'social-grid':
    case 'social-stories':
    case 'social':
    case 'social-media-design':
      return <SocialCampaignComposition className={className} isDetailed={isDetailed} />;

    case 'web-development':
    case 'web':
    case 'website':
    case 'website-development':
    case 'ecommerce':
    case 'ecommerce-website':
    case 'ecommerce-product':
    case 'ecommerce-checkout':
    default:
      return <WebDevelopmentComposition className={className} isDetailed={isDetailed} />;
  }
};
