import { 
  DecapCMSData, 
  ServiceCategory, 
  PortfolioItem, 
  BlogArticle, 
  ProcessStep, 
  StatItem, 
  TestimonialItem,
  NavigationItem,
  LegalPage,
  TeamMember,
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

// Eagerly glob all collection JSON files from src/content/
const serviceFiles = import.meta.glob('../content/services/*.json', { eager: true }) as Record<string, { default?: ServiceCategory } | ServiceCategory>;
const portfolioFiles = import.meta.glob('../content/portfolio/*.json', { eager: true }) as Record<string, { default?: PortfolioItem } | PortfolioItem>;
const blogFiles = import.meta.glob('../content/blog/*.json', { eager: true }) as Record<string, { default?: BlogArticle } | BlogArticle>;
const statFiles = import.meta.glob('../content/statistics/*.json', { eager: true }) as Record<string, { default?: StatItem } | StatItem>;
const testimonialFiles = import.meta.glob('../content/testimonials/*.json', { eager: true }) as Record<string, { default?: TestimonialItem } | TestimonialItem>;
const processFiles = import.meta.glob('../content/process/*.json', { eager: true }) as Record<string, { default?: ProcessStep } | ProcessStep>;
const teamFiles = import.meta.glob('../content/team/*.json', { eager: true }) as Record<string, { default?: TeamMember } | TeamMember>;
const legalFiles = import.meta.glob('../content/legal/*.json', { eager: true }) as Record<string, { default?: LegalPage } | LegalPage>;

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

const loadedTestimonials: TestimonialItem[] = Object.values(testimonialFiles)
  .map((m: any) => (m.default ? m.default : m) as TestimonialItem)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedProcess: ProcessStep[] = Object.values(processFiles)
  .map((m: any) => (m.default ? m.default : m) as ProcessStep)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedTeam: TeamMember[] = Object.values(teamFiles)
  .map((m: any) => (m.default ? m.default : m) as TeamMember)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const loadedLegal: LegalPage[] = Object.values(legalFiles)
  .map((m: any) => (m.default ? m.default : m) as LegalPage);

export const DEFAULT_CMS_DATA: DecapCMSData = {
  siteSettings: {
    siteName: settingsData.siteName || "Lizzdo Media",
    tagline: settingsData.tagline || "Creative & Digital Agency",
    logoText: settingsData.logoText || "LIZZDO MEDIA",
    logo: settingsData.logo || "/uploads/lizzdo-media-logo.svg",
    logoDark: settingsData.logoDark || "/uploads/lizzdo-media-logo.svg",
    logoLight: settingsData.logoLight || "/uploads/lizzdo-media-logo-light.svg",
    logoMark: settingsData.logoMark || "/uploads/lizzdo-media-mark.svg",
    favicon: settingsData.favicon || "/uploads/lizzdo-media-mark.svg",
    contactEmail: contactData.contactEmail || settingsData.contactEmail || "contact@media.lizzdo.com",
    supportEmail: contactData.supportEmail || "support@media.lizzdo.com",
    businessEmail: contactData.businessEmail || "business@media.lizzdo.com",
    phone: contactData.phone || "+1234567890",
    whatsappNumber: contactData.whatsappNumber || settingsData.whatsappNumber || "+1234567890",
    whatsappPrefilledMessage: contactData.whatsappPrefilledMessage || "Hello Lizzdo, I would like to discuss a project.",
    primaryCtaText: settingsData.primaryCtaText || "Let's Talk",
    primaryCtaUrl: settingsData.primaryCtaUrl || "/contact",
    parentCompanyUrl: settingsData.parentCompanyUrl || "https://lizzdo.com/",
    currentDomain: settingsData.currentDomain || "https://media.lizzdo.com/",
    instagramUrl: socialData.instagram || settingsData.instagramUrl || "https://instagram.com/lizzdomedia",
    facebookUrl: socialData.facebook || settingsData.facebookUrl || "https://facebook.com/lizzdomedia",
    linkedinUrl: socialData.linkedin || settingsData.linkedinUrl || "https://linkedin.com/company/lizzdo-media",
    twitterUrl: socialData.twitter || settingsData.twitterUrl || "https://twitter.com/lizzdomedia",
    behanceUrl: socialData.behance || "https://behance.net/lizzdomedia",
    dribbbleUrl: socialData.dribbble || "https://dribbble.com/lizzdomedia",
    githubUrl: socialData.github || "https://github.com/medializz",
    location: contactData.location || settingsData.location || "Global Digital Agency",
    address: contactData.address || "Global Creative Studio & Digital Innovation Hub",
    footerText: settingsData.footerText || footerData.footerDescription || "We help ambitious brands stand out, captivate audiences, and scale through strategic brand identity, packaging design systems, high-speed web engineering, and digital growth.",
    copyrightText: settingsData.copyrightText || footerData.copyrightText || "© 2026 Lizzdo Media. All rights reserved."
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
  notFound: notFoundData as NotFoundContent
};

export { seoData, footerData, aboutData, contactData, socialData, analyticsData, notFoundData };

/**
 * Utility to generate a clean, secure WhatsApp URL without spaces, +, brackets, or dashes
 */
export function getWhatsAppUrl(rawPhone?: string, message?: string, defaultMsg: string = "Hello Lizzdo, I would like to discuss a project."): string {
  const numberToClean = rawPhone || DEFAULT_CMS_DATA.siteSettings.whatsappNumber || "+1234567890";
  const cleanNumber = numberToClean.replace(/[^0-9]/g, '');
  const finalMsg = message || DEFAULT_CMS_DATA.siteSettings.whatsappPrefilledMessage || defaultMsg;
  const encoded = encodeURIComponent(finalMsg);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

const STORAGE_KEY = 'lizzdo_media_cms_data_v1';

export function loadCmsData(): DecapCMSData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CMS_DATA,
        ...parsed,
        siteSettings: { ...DEFAULT_CMS_DATA.siteSettings, ...parsed.siteSettings },
        hero: { ...DEFAULT_CMS_DATA.hero, ...parsed.hero },
        navigation: DEFAULT_CMS_DATA.navigation,
        services: parsed.services?.length ? parsed.services : DEFAULT_CMS_DATA.services,
        processSteps: parsed.processSteps?.length ? parsed.processSteps : DEFAULT_CMS_DATA.processSteps,
        portfolio: parsed.portfolio?.length ? parsed.portfolio : DEFAULT_CMS_DATA.portfolio,
        blog: parsed.blog?.length ? parsed.blog : DEFAULT_CMS_DATA.blog,
        whyChooseUs: { ...DEFAULT_CMS_DATA.whyChooseUs, ...parsed.whyChooseUs },
        statistics: parsed.statistics?.length ? parsed.statistics : DEFAULT_CMS_DATA.statistics,
        testimonials: parsed.testimonials?.length ? parsed.testimonials : DEFAULT_CMS_DATA.testimonials,
        bodyCta: { ...DEFAULT_CMS_DATA.bodyCta, ...parsed.bodyCta },
        features: parsed.features || DEFAULT_CMS_DATA.features,
        about: parsed.about || DEFAULT_CMS_DATA.about,
        contact: parsed.contact || DEFAULT_CMS_DATA.contact,
        social: parsed.social || DEFAULT_CMS_DATA.social,
        analytics: parsed.analytics || DEFAULT_CMS_DATA.analytics,
        teamMembers: parsed.teamMembers?.length ? parsed.teamMembers : DEFAULT_CMS_DATA.teamMembers,
        legalPages: parsed.legalPages?.length ? parsed.legalPages : DEFAULT_CMS_DATA.legalPages,
        notFound: parsed.notFound || DEFAULT_CMS_DATA.notFound
      };
    }
  } catch (e) {
    console.warn("Could not load stored CMS data, using default", e);
  }
  return DEFAULT_CMS_DATA;
}

export function saveCmsData(data: DecapCMSData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save CMS data to localStorage", e);
  }
}
