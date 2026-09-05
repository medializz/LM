import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { AboutHero } from '../about/AboutHero';
import { AboutStory } from '../about/AboutStory';
import { AboutMissionVision } from '../about/AboutMissionVision';
import { AboutValues } from '../about/AboutValues';
import { AboutWhyChooseUs } from '../about/AboutWhyChooseUs';
import { AboutStats } from '../about/AboutStats';
import { TeamSection } from '../body/TeamSection';
import { AboutCompanies } from '../about/AboutCompanies';
import { TestimonialsSection } from '../body/TestimonialsSection';
import { AboutCTA } from '../about/AboutCTA';

interface AboutPageProps {
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ cmsData, onOpenContact }) => {
  const { 
    siteSettings, 
    about, 
    whyChooseUs, 
    statistics = [], 
    teamMembers = [], 
    clients = [], 
    clientsSection, 
    testimonials = [], 
    testimonialsSection,
    portfolio = []
  } = cmsData;

  const canonicalUrl = "https://media.lizzdo.com/about";
  const seoTitle = about?.seoTitle || "About Lizzdo Media | Creative & Digital Agency in Cardiff & UK";
  const seoDescription = about?.seoDescription || "Discover Lizzdo Media, our Cardiff creative studio, design philosophy, and how we help ambitious businesses across South Wales, the UK, and worldwide scale through branding, web, and marketing.";

  const publishedTeam = (teamMembers || []).filter(m => m.published !== false);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Lizzdo Media",
      "description": seoDescription,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": siteSettings.siteName || "Lizzdo Media",
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg",
        "email": siteSettings.contactEmail || "contact@media.lizzdo.com",
        "telephone": siteSettings.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cardiff",
          "addressRegion": "South Wales",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.4816",
          "longitude": "-3.1791"
        },
        "areaServed": [
          "Cardiff",
          "South Wales",
          "Wales",
          "United Kingdom",
          "Worldwide"
        ],
        "sameAs": [
          "https://www.instagram.com/lizzdomedia",
          "https://www.linkedin.com/company/lizzdomedia",
          "https://x.com/lizzdomedia"
        ],
        "description": "Lizzdo Media is a premier creative and digital agency crafting high-impact brand identities, packaging systems, web engineering, and digital marketing.",
        ...(publishedTeam.length > 0 ? {
          "member": publishedTeam.map(m => ({
            "@type": "Person",
            "name": m.name,
            "jobTitle": m.jobTitle || m.position || m.role,
            "image": m.profilePhoto || m.photo || m.avatar,
            "description": m.shortDescription || m.shortBio || m.bio
          }))
        } : {})
      }
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
          "name": "About",
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

      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#07090e] pt-20 sm:pt-24 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={[{ label: "About", href: "/about" }]} />
        </div>
      </div>

      {/* 1. Hero Section (Compact, typography & branding focus) */}
      <AboutHero
        content={about}
        siteSettings={siteSettings}
        onOpenContact={() => onOpenContact()}
      />

      {/* 2. Story Section (Cardiff heritage, narrative paragraphs, visual card) */}
      <AboutStory
        content={about}
        siteSettings={siteSettings}
      />

      {/* 3. Mission & Vision Section (Dedicated cards, complementary asymmetric layout) */}
      <AboutMissionVision
        content={about}
      />

      {/* 4. Core Values Section (6 key principles with icons & badges) */}
      <AboutValues
        content={about}
      />

      {/* 5. Why Choose Us Section (6 concise visual points) */}
      <AboutWhyChooseUs
        content={whyChooseUs}
        siteSettings={siteSettings}
        onOpenContact={() => onOpenContact()}
      />

      {/* 6. Statistics Section (Verified CMS entries only) */}
      <AboutStats
        stats={statistics}
      />

      {/* 7. Team Section (Actual CMS entries) */}
      {publishedTeam.length > 0 && (
        <TeamSection
          teamMembers={teamMembers}
          siteSettings={siteSettings}
        />
      )}

      {/* 8. Companies We've Worked With Section (Verified CMS clients) */}
      <AboutCompanies
        clients={clients}
        sectionContent={clientsSection}
      />

      {/* 9. Client Testimonials Section (Verified client feedback) */}
      {testimonials && testimonials.length > 0 && (
        <TestimonialsSection
          testimonials={testimonials}
          content={testimonialsSection}
          siteSettings={siteSettings}
          clients={clients}
          portfolio={portfolio}
        />
      )}

      {/* 10. Final Call to Action */}
      <AboutCTA
        content={about}
        siteSettings={siteSettings}
        onOpenContact={() => onOpenContact()}
      />
    </div>
  );
};
