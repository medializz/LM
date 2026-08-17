import React from 'react';
import { BrandIdentityComposition } from './portfolio/BrandIdentityComposition';
import { PackagingDesignComposition } from './portfolio/PackagingDesignComposition';
import { PackagingHeroVisual } from './portfolio/packaging/PackagingHeroVisual';
import { PackagingDielineVisual } from './portfolio/packaging/PackagingDielineVisual';
import { PackagingPouchVisual } from './portfolio/packaging/PackagingPouchVisual';
import { PackagingDeliveryVisual } from './portfolio/packaging/PackagingDeliveryVisual';
import { PackagingHangTagsVisual } from './portfolio/packaging/PackagingHangTagsVisual';
import { PackagingFormatsGridVisual } from './portfolio/packaging/PackagingFormatsGridVisual';
import { SaaSWebsiteComposition } from './portfolio/SaaSWebsiteComposition';
import { SocialCampaignComposition } from './portfolio/SocialCampaignComposition';
import { WebDevelopmentComposition } from './portfolio/WebDevelopmentComposition';

import { SiteSettings } from '../../types';

interface ProjectGalleryVisualProps {
  visualType?: string;
  title?: string;
  className?: string;
  isDetailed?: boolean;
  siteSettings?: SiteSettings;
  logoSrc?: string;
  markSrc?: string;
}

export const ProjectGalleryVisual: React.FC<ProjectGalleryVisualProps> = ({
  visualType = 'brand-identity',
  title = '',
  className = '',
  isDetailed = true,
  siteSettings,
  logoSrc,
  markSrc
}) => {
  const normalizedType = (visualType || '').toLowerCase();
  const effectiveLogoSrc = logoSrc || siteSettings?.logo || siteSettings?.logoLight;
  const effectiveMarkSrc = markSrc || siteSettings?.logoMark || effectiveLogoSrc;

  switch (normalizedType) {
    case 'brand-identity':
    case 'branding':
    case 'brand-guidelines':
    case 'stationery':
    case 'logo-design':
      return (
        <BrandIdentityComposition
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-hero':
    case 'packaging-suite':
      return (
        <PackagingHeroVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-dieline':
    case 'packaging-dieline-tea':
    case 'packaging-tea':
    case 'packaging-box-dieline':
      return (
        <PackagingDielineVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-pouch':
    case 'packaging-pouch-split':
    case 'pouch-mockup':
      return (
        <PackagingPouchVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-delivery':
    case 'packaging-delivery-suite':
    case 'delivery-box':
      return (
        <PackagingDeliveryVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-hangtags':
    case 'packaging-tags':
    case 'packaging-side':
    case 'hangtag':
      return (
        <PackagingHangTagsVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging-formats':
    case 'packaging-grid':
    case 'packaging-grid-collage':
    case 'packaging-collage':
      return (
        <PackagingFormatsGridVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'packaging':
    case 'packaging-box':
    case 'packaging-design':
    case '3d-packaging':
      return (
        <PackagingHeroVisual
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'saas-dashboard':
    case 'saas-analytics':
    case 'saas-mobile':
    case 'saas':
    case 'saas-website-design':
      return (
        <SaaSWebsiteComposition
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'social-campaign':
    case 'social-grid':
    case 'social-stories':
    case 'social':
    case 'social-media-design':
      return (
        <SocialCampaignComposition
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );

    case 'web-development':
    case 'web':
    case 'website':
    case 'website-development':
    case 'ecommerce':
    case 'ecommerce-website':
    case 'ecommerce-product':
    case 'ecommerce-checkout':
    default:
      return (
        <WebDevelopmentComposition
          className={className}
          isDetailed={isDetailed}
          logoSrc={effectiveLogoSrc}
          markSrc={effectiveMarkSrc}
        />
      );
  }
};
