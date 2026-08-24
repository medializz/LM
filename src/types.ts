export interface NavDropdownItem {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
}

export interface HeroContent {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineHighlightedWord: string;
  description: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
}

export interface ServiceProcessStep {
  stepNumber: string; // e.g. "01"
  title: string;
  description: string;
  iconKey?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption?: string;
  image?: string;
  alt?: string;
  visualType?: string;
  layout?: 'large' | 'half' | 'third' | 'full';
  aspect?: string;
}

export interface MaterialSpec {
  name: string;
  spec: string;
  finish: string;
  color: string;
}

export interface DielineSpecs {
  dimensions: string;
  stock: string;
  finish: string;
  closure: string;
  flute?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  iconKey: string;
  shortDescription: string;
  category: string;
  order: number;
  // Rich Service Page Extensions
  heroHeadline?: string;
  heroHighlight?: string;
  heroDescription?: string;
  overview?: string;
  visualType?: string;
  deliverables?: string[];
  processSteps?: ServiceProcessStep[];
  gallery?: GalleryItem[];
  benefits?: string[];
  faqs?: FAQItem[];
  relatedServices?: string[]; // array of slugs
  relatedProjects?: string[]; // array of project slugs
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string; // e.g. "01"
  title: string;
  iconKey: string;
  description: string;
  order: number;
}

export interface WorkProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortCategory: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  featuredImage?: string;
  visualType?: 'brand-identity' | 'packaging' | 'saas-dashboard' | 'social-campaign' | 'ecommerce' | string;
  featured?: boolean;
  order: number;
  published?: boolean;
  // Rich Case Study Extensions
  client?: string;
  year?: string;
  services?: string[];
  tools?: string[];
  challenge?: string;
  approach?: string;
  strategy?: string;
  design?: string;
  execution?: string;
  solution?: string;
  result?: string;
  materials?: MaterialSpec[];
  dielineSpecs?: DielineSpecs;
  processSteps?: WorkProcessStep[];
  gallery?: GalleryItem[];
  faqs?: FAQItem[];
  relatedServices?: string[];
  relatedProjects?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
}

export interface AuthorInfo {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: AuthorInfo;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  heroImage?: string;
  visualType?: string;
  tags?: string[];
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  relatedServices?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconKey: string;
  order: number;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface WhyChooseUsContent {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface BodyCtaContent {
  heading: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  logoText: string;
  logo?: string;
  logoDark?: string;
  logoLight?: string;
  logoMark?: string;
  favicon?: string;
  contactEmail: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  parentCompanyUrl: string;
  currentDomain: string;
  whatsappNumber?: string;
}

export interface DecapCMSData {
  siteSettings: SiteSettings;
  navigation: NavigationItem[];
  hero: HeroContent;
  services: ServiceCategory[];
  processSteps: ProcessStep[];
  portfolio: PortfolioItem[];
  blog: BlogArticle[];
  whyChooseUs: WhyChooseUsContent;
  statistics: StatItem[];
  testimonials: TestimonialItem[];
  bodyCta: BodyCtaContent;
  features: FeatureItem[];
}

export type AppRoute = 
  | { view: 'home'; path: string; slug?: undefined }
  | { view: 'services-index'; path: string; slug?: undefined }
  | { view: 'service-detail'; path: string; slug: string }
  | { view: 'work-index'; path: string; slug?: undefined }
  | { view: 'work-detail'; path: string; slug: string }
  | { view: 'about'; path: string; slug?: undefined }
  | { view: 'blog-index'; path: string; slug?: undefined }
  | { view: 'blog-detail'; path: string; slug: string }
  | { view: 'contact'; path: string; slug?: undefined }
  | { view: 'privacy'; path: string; slug?: undefined }
  | { view: 'terms'; path: string; slug?: undefined }
  | { view: 'legal'; path: string; slug?: undefined }
  | { view: 'sitemap'; path: string; slug?: undefined }
  | { view: '404'; path: string; slug?: undefined };
