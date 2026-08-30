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

// Helper to normalize phone numbers (especially Pakistani mobile numbers)
export function normalizeWhatsAppNumber(rawPhone?: string): string {
  if (!rawPhone || typeof rawPhone !== 'string') return '';
  // Strip everything except digits
  let digits = rawPhone.replace(/\D/g, '');
  if (!digits) return '';

  // If it starts with 00 (e.g. 00923001234567), strip leading 00
  if (digits.startsWith('00')) {
    digits = digits.substring(2);
  }
  // If it starts with single 0 and is 11 digits (e.g. 03001234567), replace leading 0 with 92
  if (digits.startsWith('0') && digits.length === 11) {
    digits = '92' + digits.substring(1);
  }
  return digits;
}

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
    contactEmail: contactData.contactEmail || settingsData.contactEmail || "",
    businessEmail: contactData.businessEmail || (settingsData as any).businessEmail || "",
    supportEmail: contactData.supportEmail || (settingsData as any).supportEmail || "",
    phone: contactData.phone || settingsData.phone || "",
    whatsappNumber: contactData.whatsappNumber || settingsData.whatsappNumber || "",
    whatsappDescription: contactData.whatsappDescription || (settingsData as any).whatsappDescription || "",
    whatsappPrefilledMessage: contactData.whatsappPrefilledMessage || settingsData.whatsappPrefilledMessage || "",
    whatsappCtaText: contactData.whatsappCtaText || (settingsData as any).whatsappCtaText || "",
    primaryCtaText: settingsData.primaryCtaText ?? "",
    primaryCtaUrl: settingsData.primaryCtaUrl ?? "",
    parentCompanyUrl: settingsData.parentCompanyUrl ?? "",
    currentDomain: settingsData.currentDomain ?? "",
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
    location: contactData.location || settingsData.location || "",
    address: contactData.address || settingsData.address || "",
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
  contact: contactData as ContactContent,
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
  defaultMsg: string = "Hello, I would like to discuss a project with your team."
): string {
  const phone = rawPhone || 
    DEFAULT_CMS_DATA.contact?.whatsappNumber || 
    DEFAULT_CMS_DATA.siteSettings?.whatsappNumber || 
    "";
  const cleanNumber = normalizeWhatsAppNumber(phone);
  if (!cleanNumber) {
    return '#';
  }
  const finalMsg = message || 
    DEFAULT_CMS_DATA.contact?.whatsappPrefilledMessage || 
    DEFAULT_CMS_DATA.siteSettings?.whatsappPrefilledMessage || 
    defaultMsg;
  const encoded = encodeURIComponent(finalMsg);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
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
