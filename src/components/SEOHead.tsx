import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'service';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  schemaData?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Lizzdo Media | Branding, Graphic Design, Web Development & Digital Marketing",
  description = "Lizzdo Media provides branding, graphic design, social media content, digital marketing and website development for businesses looking to build a stronger digital presence.",
  canonicalUrl = "https://media.lizzdo.com/",
  ogImage = "https://media.lizzdo.com/uploads/og-cover.png",
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  authorName,
  schemaData
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper: update or create meta tag by attribute name & value
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const removeMetaTag = (attrName: string, attrVal: string) => {
      const element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (element) {
        element.remove();
      }
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    
    // Meta Robots
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, follow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // 3. Open Graph Tags
    setMetaTag('property', 'og:site_name', 'Lizzdo Media');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type === 'service' ? 'website' : type);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_GB');

    // Geo Meta Tags for Cardiff, South Wales, UK
    setMetaTag('name', 'geo.region', 'GB-CRF');
    setMetaTag('name', 'geo.placename', 'Cardiff');
    setMetaTag('name', 'geo.position', '51.4816;-3.1791');
    setMetaTag('name', 'ICBM', '51.4816, -3.1791');

    if (type === 'article') {
      if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
      if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);
      if (authorName) setMetaTag('property', 'article:author', authorName);
    } else {
      removeMetaTag('property', 'article:published_time');
      removeMetaTag('property', 'article:modified_time');
      removeMetaTag('property', 'article:author');
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data Injection
    let jsonLdScript = document.getElementById('page-structured-data');
    if (schemaData) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'page-structured-data';
        jsonLdScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(schemaData);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }
  }, [title, description, canonicalUrl, ogImage, type, noindex, publishedTime, modifiedTime, authorName, schemaData]);

  return null;
};
