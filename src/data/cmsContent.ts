import { 
  DecapCMSData, 
  SiteSettings,
  ServiceCategory, 
  PortfolioItem, 
  BlogArticle, 
  ProcessStep, 
  StatItem, 
  TestimonialItem,
  NavigationItem,
  LegalPage,
  TeamMember,
  ClientItem,
  ClientsSectionContent,
  TestimonialsSectionContent,
  AboutContent,
  ContactContent,
  SocialSettings,
  AnalyticsSettings,
  NotFoundContent
} from '../types';

import settingsData from '../content/settings.json';
import heroData from '../content/hero.json';
import navigationData from '../content/navigation.json';
import whyChooseUsData from '../content/why-choose-us.json';
import footerData from '../content/footer.json';
import seoData from '../content/seo.json';
import aboutData from '../content/about.json';
import contactData from '../content/contact.json';
import socialData from '../content/social.json';
import analyticsData from '../content/analytics.json';
import notFoundData from '../content/not-found.json';
import clientsSectionData from '../content/clients-section.json';
import testimonialsSectionData from '../content/testimonials-section.json';

// Eagerly glob all collection JSON files from src/content/
const serviceFiles = import.meta.glob('../content/services/*.json', { eager: true }) as Record<string, { default?: ServiceCategory } | ServiceCategory>;
const portfolioFiles = import.meta.glob('../content/portfolio/*.json', { eager: true }) as Record<string, { default?: PortfolioItem } | PortfolioItem>;
const blogFiles = import.meta.glob('../content/blog/*.json', { eager: true }) as Record<string, { default?: BlogArticle } | BlogArticle>;
const statFiles = import.meta.glob('../content/statistics/*.json', { eager: true }) as Record<string, { default?: StatItem } | StatItem>;
const testimonialFiles = import.meta.glob('../content/testimonials/*.json', { eager: true }) as Record<string, { default?: TestimonialItem } | TestimonialItem>;
const processFiles = import.meta.glob('../content/process/*.json', { eager: true }) as Record<string, { default?: ProcessStep } | ProcessStep>;
const teamFiles = import.meta.glob('../content/team/*.json', { eager: true }) as Record<string, { default?: TeamMember } | TeamMember>;
const legalFiles = import.meta.glob('../content/legal/*.json', { eager: true }) as Record<string, { default?: LegalPage } | LegalPage>;
const clientFiles = import.meta.glob('../content/clients/*.json', { eager: true }) as Record<string, { default?: ClientItem } | ClientItem>;

// Extract and sort collections
const loadedServices: ServiceCategory[] = Object.values(serviceFiles)
  .map((m: any) => (m.default ? m.default : m) as ServiceCategory)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedPortfolio: PortfolioItem[] = Object.values(portfolioFiles)
  .map((m: any) => (m.default ? m.default : m) as PortfolioItem)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedBlog: BlogArticle[] = Object.values(blogFiles)
  .map((m: any) => (m.default ? m.default : m) as BlogArticle)
  .sort((a, b) => new Date(b.publishedDate || 0).getTime() - new Date(a.publishedDate || 0).getTime());

const loadedStats: StatItem[] = Object.values(statFiles)
  .map((m: any) => (m.default ? m.default : m) as StatItem)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedClients: ClientItem[] = Object.values(clientFiles)
  .map((m: any) => (m.default ? m.default : m) as ClientItem)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedTestimonials: TestimonialItem[] = Object.values(testimonialFiles)
  .map((m: any) => (m.default ? m.default : m) as TestimonialItem)
  .map((t: TestimonialItem) => {
    // If relatedCompany is set, automatically populate company details if missing
    if (t.relatedCompany) {
      const matchedClient = loadedClients.find(c => c.slug === t.relatedCompany || c.id === t.relatedCompany);
      if (matchedClient) {
        return {
          ...t,
          companyName: t.companyName || t.company || matchedClient.name,
          company: t.company || t.companyName || matchedClient.name,
          companyLogo: t.companyLogo || matchedClient.logo,
          relatedWork: t.relatedWork || matchedClient.relatedWork,
          relatedWorkTitle: t.relatedWorkTitle || matchedClient.relatedWorkTitle
        };
      }
    }
    return t;
  })
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedProcess: ProcessStep[] = Object.values(processFiles)
  .map((m: any) => (m.default ? m.default : m) as ProcessStep)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedTeam: TeamMember[] = Object.values(teamFiles)
  .map((m: any) => (m.default ? m.default : m) as TeamMember)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedLegal: LegalPage[] = Object.values(legalFiles)
  .map((m: any) => (m.default ? m.default : m) as LegalPage);

/**
 * Central CMS Data Management & Static Pipeline
 * 
 * Source of Truth: Static JSON files written by Decap CMS in `src/content/`.
 * All data is loaded directly from bundled JSON modules without stale localStorage caching.
 */

import { 
  normalizeWhatsAppNumber, 
  createWhatsAppUrl, 
  createServiceWhatsAppUrl, 
  createWorkWhatsAppUrl,
  createTelUrl,
  createMailtoUrl
} from '../utils/whatsapp';

export { 
  normalizeWhatsAppNumber, 
  createWhatsAppUrl, 
  createServiceWhatsAppUrl, 
  createWorkWhatsAppUrl,
  createTelUrl,
  createMailtoUrl
};

export interface ValidatedSocialLink {
  id: string;
  name: string;
  url: string;
  handle?: string;
}

export function getValidSocialLinks(social?: SocialSettings, siteSettings?: SiteSettings): ValidatedSocialLink[] {
  const links: ValidatedSocialLink[] = [];
  const s = social || DEFAULT_CMS_DATA.social;
  const set = siteSettings || DEFAULT_CMS_DATA.siteSettings;

  const candidateMap: { id: string; name: string; url?: string }[] = [
    { id: 'instagram', name: 'Instagram', url: s?.instagram || set?.instagramUrl },
    { id: 'linkedin', name: 'LinkedIn', url: s?.linkedin || set?.linkedinUrl },
    { id: 'twitter', name: 'Twitter / X', url: s?.twitter || set?.twitterUrl },
    { id: 'facebook', name: 'Facebook', url: s?.facebook || set?.facebookUrl },
    { id: 'youtube', name: 'YouTube', url: s?.youtube || set?.youtubeUrl },
    { id: 'tiktok', name: 'TikTok', url: s?.tiktok || set?.tiktokUrl },
    { id: 'pinterest', name: 'Pinterest', url: s?.pinterest || set?.pinterestUrl },
    { id: 'behance', name: 'Behance', url: s?.behance || set?.behanceUrl },
    { id: 'dribbble', name: 'Dribbble', url: s?.dribbble || set?.dribbbleUrl },
    { id: 'github', name: 'GitHub', url: s?.github || set?.githubUrl },
  ];

  for (const item of candidateMap) {
    if (item.url && typeof item.url === 'string') {
      const trimmed = item.url.trim();
      if (trimmed !== '' && trimmed !== '#' && (trimmed.startsWith('https://') || trimmed.startsWith('http://'))) {
        links.push({
          id: item.id,
          name: item.name,
          url: trimmed
        });
      }
    }
  }

  return links;
}

export const DEFAULT_CMS_DATA: DecapCMSData = {
  siteSettings: {
    siteName: settingsData.siteName ?? "",
    tagline: settingsData.tagline ?? "",
    logoText: settingsData.logoText ?? "",
    logo: settingsData.logo ?? "",
    logoDark: settingsData.logoDark ?? "",
    logoLight: settingsData.logoLight ?? "",
    logoMark: settingsData.logoMark ?? "",
    favicon: settingsData.favicon ?? "",
    contactEmail: settingsData.contactEmail || "contact@media.lizzdo.com",
    businessEmail: settingsData.businessEmail || "",
    supportEmail: settingsData.supportEmail || "",
    phone: settingsData.phone || "",
    whatsappNumber: settingsData.whatsappNumber || "",
    whatsappDescription: settingsData.whatsappDescription || "Chat directly with our creative team on WhatsApp for expedited project scoping and immediate consultations.",
    whatsappPrefilledMessage: settingsData.whatsappPrefilledMessage || "Hello Lizzdo Media, I would like to discuss a project with your team.",
    whatsappCtaText: settingsData.whatsappCtaText || "Chat on WhatsApp Now",
    primaryCtaText: settingsData.primaryCtaText ?? "Let's Talk",
    primaryCtaUrl: settingsData.primaryCtaUrl ?? "/contact",
    parentCompanyUrl: settingsData.parentCompanyUrl ?? "https://lizzdo.com/",
    currentDomain: settingsData.currentDomain ?? "https://media.lizzdo.com/",
    instagramUrl: socialData.instagram || settingsData.instagramUrl || "",
    facebookUrl: socialData.facebook || settingsData.facebookUrl || "",
    linkedinUrl: socialData.linkedin || settingsData.linkedinUrl || "",
    twitterUrl: socialData.twitter || settingsData.twitterUrl || "",
    youtubeUrl: socialData.youtube || (settingsData as any).youtubeUrl || "",
    tiktokUrl: socialData.tiktok || (settingsData as any).tiktokUrl || "",
    pinterestUrl: socialData.pinterest || (settingsData as any).pinterestUrl || "",
    behanceUrl: socialData.behance || settingsData.behanceUrl || "",
    dribbbleUrl: socialData.dribbble || settingsData.dribbbleUrl || "",
    githubUrl: socialData.github || settingsData.githubUrl || "",
    location: settingsData.location || "Global Digital Agency",
    address: settingsData.address || "Global Creative Studio & Digital Innovation Hub",
    formEndpoint: settingsData.formEndpoint || "",
    footerText: settingsData.footerText || footerData.footerDescription || "",
    copyrightText: settingsData.copyrightText || footerData.copyrightText || ""
  },
  navigation: navigationData as NavigationItem[],
  hero: {
    eyebrow: heroData.eyebrow || "Creative & Digital Agency",
    headlineLine1: heroData.headlineLine1 || "Design. Build.",
    headlineLine2Prefix: heroData.headlineLine2Prefix || "Grow. ",
    headlineHighlightedWord: heroData.headlineHighlightedWord || "Together.",
    description: heroData.description || "We help brands stand out and grow with creative design, powerful websites, and result-driven digital solutions.",
    primaryCtaText: heroData.primaryCtaText || "Explore Our Work",
    primaryCtaUrl: heroData.primaryCtaUrl || "/work"
  },
  services: loadedServices,
  processSteps: loadedProcess,
  portfolio: loadedPortfolio,
  blog: loadedBlog,
  whyChooseUs: {
    eyebrow: whyChooseUsData.eyebrow || "WHY CHOOSE US",
    headingPrefix: whyChooseUsData.headingPrefix || "Why Brands Choose ",
    headingHighlight: whyChooseUsData.headingHighlight || "Lizzdo Media",
    description: whyChooseUsData.description || "We combine creativity, strategy, and technology to deliver exceptional results that help brands grow faster and stronger.",
    ctaText: whyChooseUsData.ctaText || "Let's Work Together",
    ctaUrl: whyChooseUsData.ctaUrl || "/contact"
  },
  statistics: loadedStats,
  testimonials: loadedTestimonials,
  bodyCta: {
    heading: footerData.ctaHeadline || "Let's Begin Your Success Story Together.",
    description: footerData.ctaDescription || "Discover how Lizzdo Media can accelerate your professional growth, elevate your brand presence, and help you thrive.",
    ctaText: footerData.ctaPrimaryText || "Let's Talk",
    ctaUrl: footerData.ctaPrimaryUrl || "/contact"
  },
  features: [
    {
      id: "feat-1",
      title: "Creative & Unique Designs",
      description: "Designs that represent your brand perfectly",
      order: 1
    },
    {
      id: "feat-2",
      title: "Strategy-Driven Approach",
      description: "Data-backed strategy for real results",
      order: 2
    },
    {
      id: "feat-3",
      title: "On-Time Delivery",
      description: "We respect your time & deadlines",
      order: 3
    },
    {
      id: "feat-4",
      title: "Long-Term Partnership",
      description: "We grow when you grow",
      order: 4
    }
  ],
  about: aboutData as AboutContent,
  contact: {
    ...contactData,
    contactEmail: settingsData.contactEmail || "contact@media.lizzdo.com",
    businessEmail: settingsData.businessEmail || "",
    supportEmail: settingsData.supportEmail || "",
    phone: settingsData.phone || "",
    whatsappNumber: settingsData.whatsappNumber || "",
    whatsappDescription: settingsData.whatsappDescription || "Chat directly with our creative team on WhatsApp for expedited project scoping and immediate consultations.",
    whatsappPrefilledMessage: settingsData.whatsappPrefilledMessage || "Hello Lizzdo Media, I would like to discuss a project with your team.",
    whatsappCtaText: settingsData.whatsappCtaText || "Chat on WhatsApp Now",
    location: settingsData.location || "Global Digital Agency",
    address: settingsData.address || "Global Creative Studio & Digital Innovation Hub",
  } as ContactContent,
  social: socialData as SocialSettings,
  analytics: analyticsData as AnalyticsSettings,
  teamMembers: loadedTeam,
  legalPages: loadedLegal,
  clients: loadedClients,
  clientsSection: clientsSectionData as ClientsSectionContent,
  testimonialsSection: testimonialsSectionData as TestimonialsSectionContent,
  notFound: notFoundData as NotFoundContent
};

export { seoData, footerData, aboutData, contactData, socialData, analyticsData, notFoundData, clientsSectionData, testimonialsSectionData };

/**
 * Generates a clean, standardized WhatsApp direct message URL with Pakistan & international number formatting
 */
export function getWhatsAppUrl(
  rawPhone?: string, 
  message?: string, 
  defaultMsg?: string
): string {
  const phone = rawPhone || 
    DEFAULT_CMS_DATA.contact?.whatsappNumber || 
    DEFAULT_CMS_DATA.siteSettings?.whatsappNumber || 
    "";
  const finalDefault = defaultMsg || 
    DEFAULT_CMS_DATA.contact?.whatsappPrefilledMessage || 
    DEFAULT_CMS_DATA.siteSettings?.whatsappPrefilledMessage || 
    "Hello Lizzdo, I would like to discuss a project.";
  return createWhatsAppUrl(phone, message, finalDefault);
}

/**
 * Loads CMS data directly from the bundled content.
 * Cleans up any stale local storage cache from previous sessions so that all git/CMS updates render instantly.
 */
export function loadCmsData(): DecapCMSData {
  try {
    // Clear any obsolete localStorage cache that might shadow fresh CMS deployments
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('lizzdo_media_cms_data_v1');
    }
  } catch (e) {
    // Silent fail for storage access in restricted iframes
  }
  return DEFAULT_CMS_DATA;
}

export function saveCmsData(_data: DecapCMSData): void {
  // No-op for static Decap CMS site; commits write to Git
}

/**
 * Resolves related portfolio projects for a given service.
 * Supports explicit CMS `relatedProjects` array, inverse `relatedServices` references,
 * service tag matches, and intelligent category fallbacks.
 */
export function getWorksForService(
  serviceInput: ServiceCategory | string,
  allPortfolio?: PortfolioItem[],
  allServices?: ServiceCategory[]
): PortfolioItem[] {
  const portfolioList = allPortfolio || DEFAULT_CMS_DATA.portfolio || [];
  const servicesList = allServices || DEFAULT_CMS_DATA.services || [];
  
  const serviceObj = typeof serviceInput === 'string'
    ? servicesList.find(s => s.slug === serviceInput || s.id === serviceInput)
    : serviceInput;
  
  const serviceSlug = typeof serviceInput === 'string' ? serviceInput : serviceInput.slug;
  const serviceId = serviceObj?.id || serviceSlug;
  const serviceTitle = serviceObj?.title || '';
  const serviceCat = serviceObj?.category || '';
  const explicitProjectSlugs = serviceObj?.relatedProjects || [];

  const matchedProjects: PortfolioItem[] = [];
  const seenSlugs = new Set<string>();

  // 1. Explicitly configured relatedProjects in CMS
  for (const pSlug of explicitProjectSlugs) {
    const proj = portfolioList.find(p => p.slug === pSlug || p.id === pSlug);
    if (proj && !seenSlugs.has(proj.slug)) {
      matchedProjects.push(proj);
      seenSlugs.add(proj.slug);
    }
  }

  // 2. Portfolio items referencing this service via relatedServices or relatedService
  for (const proj of portfolioList) {
    if (seenSlugs.has(proj.slug)) continue;

    const hasInverseRef = (proj.relatedServices && proj.relatedServices.some(s => s === serviceSlug || s === serviceId)) ||
      (proj.relatedService && (proj.relatedService === serviceSlug || proj.relatedService === serviceId));

    if (hasInverseRef) {
      matchedProjects.push(proj);
      seenSlugs.add(proj.slug);
    }
  }

  // 3. Match by services list string keywords
  for (const proj of portfolioList) {
    if (seenSlugs.has(proj.slug)) continue;

    const hasServiceKeyword = proj.services && proj.services.some(str => {
      const lower = str.toLowerCase();
      return lower === serviceTitle.toLowerCase() ||
        lower === serviceSlug.toLowerCase() ||
        (serviceTitle && lower.includes(serviceTitle.toLowerCase())) ||
        (serviceCat && lower.includes(serviceCat.toLowerCase()));
    });

    if (hasServiceKeyword) {
      matchedProjects.push(proj);
      seenSlugs.add(proj.slug);
    }
  }

  // 4. Match by category / shortCategory similarity
  for (const proj of portfolioList) {
    if (seenSlugs.has(proj.slug)) continue;

    const catMatch = (serviceCat && (
      proj.category?.toLowerCase().includes(serviceCat.toLowerCase()) ||
      proj.shortCategory?.toLowerCase().includes(serviceCat.toLowerCase()) ||
      serviceCat.toLowerCase().includes(proj.category?.toLowerCase() || '')
    ));

    if (catMatch) {
      matchedProjects.push(proj);
      seenSlugs.add(proj.slug);
    }
  }

  // 5. Fallback fill if fewer than 2 items to ensure rich visual layout
  if (matchedProjects.length < 2) {
    for (const proj of portfolioList) {
      if (!seenSlugs.has(proj.slug)) {
        matchedProjects.push(proj);
        seenSlugs.add(proj.slug);
        if (matchedProjects.length >= 2) break;
      }
    }
  }

  return matchedProjects;
}

/**
 * Resolves services used or related to a portfolio project.
 * Supports explicit CMS `relatedServices`, inverse `relatedProjects` references,
 * service title matches, and category fallbacks.
 */
export function getServicesForWork(
  workInput: PortfolioItem | string,
  allServices?: ServiceCategory[],
  allPortfolio?: PortfolioItem[]
): ServiceCategory[] {
  const servicesList = allServices || DEFAULT_CMS_DATA.services || [];
  const portfolioList = allPortfolio || DEFAULT_CMS_DATA.portfolio || [];

  const workObj = typeof workInput === 'string'
    ? portfolioList.find(p => p.slug === workInput || p.id === workInput)
    : workInput;

  const workSlug = typeof workInput === 'string' ? workInput : workInput.slug;
  const workId = workObj?.id || workSlug;
  const workCat = workObj?.category || '';
  const workShortCat = workObj?.shortCategory || '';
  const explicitServiceSlugs = workObj?.relatedServices || (workObj?.relatedService ? [workObj.relatedService] : []);

  const matchedServices: ServiceCategory[] = [];
  const seenSlugs = new Set<string>();

  // 1. Explicitly configured relatedServices in CMS
  for (const sSlug of explicitServiceSlugs) {
    const srv = servicesList.find(s => s.slug === sSlug || s.id === sSlug);
    if (srv && !seenSlugs.has(srv.slug)) {
      matchedServices.push(srv);
      seenSlugs.add(srv.slug);
    }
  }

  // 2. Services that reference this project in their relatedProjects
  for (const srv of servicesList) {
    if (seenSlugs.has(srv.slug)) continue;

    const hasInverseRef = srv.relatedProjects && srv.relatedProjects.some(p => p === workSlug || p === workId);
    if (hasInverseRef) {
      matchedServices.push(srv);
      seenSlugs.add(srv.slug);
    }
  }

  // 3. Match from work.services string tags
  if (workObj?.services && workObj.services.length > 0) {
    for (const tag of workObj.services) {
      const tagLower = tag.toLowerCase();
      for (const srv of servicesList) {
        if (seenSlugs.has(srv.slug)) continue;
        if (
          srv.title.toLowerCase() === tagLower ||
          srv.slug.toLowerCase() === tagLower ||
          srv.title.toLowerCase().includes(tagLower) ||
          tagLower.includes(srv.title.toLowerCase())
        ) {
          matchedServices.push(srv);
          seenSlugs.add(srv.slug);
        }
      }
    }
  }

  // 4. Match by category similarity
  for (const srv of servicesList) {
    if (seenSlugs.has(srv.slug)) continue;

    const catMatch = (workCat && (
      srv.category?.toLowerCase().includes(workCat.toLowerCase()) ||
      workCat.toLowerCase().includes(srv.category?.toLowerCase() || '') ||
      (workShortCat && srv.category?.toLowerCase().includes(workShortCat.toLowerCase()))
    ));

    if (catMatch) {
      matchedServices.push(srv);
      seenSlugs.add(srv.slug);
    }
  }

  // 5. Fallback fill if fewer than 3 items
  if (matchedServices.length < 3) {
    for (const srv of servicesList) {
      if (!seenSlugs.has(srv.slug)) {
        matchedServices.push(srv);
        seenSlugs.add(srv.slug);
        if (matchedServices.length >= 3) break;
      }
    }
  }

  return matchedServices;
}

/**
 * Resolves other related services for a given service (excluding itself)
 */
export function getRelatedServices(
  serviceInput: ServiceCategory | string,
  allServices?: ServiceCategory[],
  limit: number = 3
): ServiceCategory[] {
  const servicesList = allServices || DEFAULT_CMS_DATA.services || [];
  const currentSlug = typeof serviceInput === 'string' ? serviceInput : serviceInput.slug;
  const currentObj = typeof serviceInput === 'string'
    ? servicesList.find(s => s.slug === serviceInput)
    : serviceInput;

  const matched: ServiceCategory[] = [];
  const seen = new Set<string>([currentSlug]);

  // 1. Explicit related services
  if (currentObj?.relatedServices && currentObj.relatedServices.length > 0) {
    for (const slug of currentObj.relatedServices) {
      const srv = servicesList.find(s => s.slug === slug && !seen.has(s.slug));
      if (srv) {
        matched.push(srv);
        seen.add(srv.slug);
      }
    }
  }

  // 2. Same or related category services
  for (const srv of servicesList) {
    if (!seen.has(srv.slug) && currentObj?.category && srv.category === currentObj.category) {
      matched.push(srv);
      seen.add(srv.slug);
    }
  }

  // 3. Fallback fill up to limit services
  for (const srv of servicesList) {
    if (!seen.has(srv.slug)) {
      matched.push(srv);
      seen.add(srv.slug);
      if (matched.length >= limit) break;
    }
  }

  return matched.slice(0, limit);
}

/**
 * Resolves other related projects for a given project (excluding itself)
 */
export function getRelatedProjects(
  workInput: PortfolioItem | string,
  allPortfolio?: PortfolioItem[],
  limit: number = 2
): PortfolioItem[] {
  const portfolioList = allPortfolio || DEFAULT_CMS_DATA.portfolio || [];
  const currentSlug = typeof workInput === 'string' ? workInput : workInput.slug;
  const currentObj = typeof workInput === 'string'
    ? portfolioList.find(p => p.slug === workInput)
    : workInput;

  const matched: PortfolioItem[] = [];
  const seen = new Set<string>([currentSlug]);

  // 1. Explicit related projects
  if (currentObj?.relatedProjects && currentObj.relatedProjects.length > 0) {
    for (const slug of currentObj.relatedProjects) {
      const proj = portfolioList.find(p => p.slug === slug && !seen.has(p.slug));
      if (proj) {
        matched.push(proj);
        seen.add(proj.slug);
      }
    }
  }

  // 2. Same or related category projects
  for (const proj of portfolioList) {
    if (!seen.has(proj.slug) && currentObj?.category && proj.category === currentObj.category) {
      matched.push(proj);
      seen.add(proj.slug);
    }
  }

  // 3. Fallback fill up to limit projects
  for (const proj of portfolioList) {
    if (!seen.has(proj.slug)) {
      matched.push(proj);
      seen.add(proj.slug);
      if (matched.length >= limit) break;
    }
  }

  return matched.slice(0, limit);
}

