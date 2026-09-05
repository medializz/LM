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

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  recommended?: boolean;
  description: string;
  idealCustomer?: string; // "Best for..."
  price: number;
  pricePrefix?: string; // e.g. "From "
  currency?: string; // e.g. "£"
  duration: string; // e.g. "4 weeks", "project", "8 weeks", "12 weeks"
  pricingModel?: 'recurring' | 'project';
  pricingLabel?: string; // e.g. "From £400 / 4 weeks"
  revisionCount?: string; // e.g. "2 revision rounds"
  turnaroundTime?: string; // e.g. "7–10 business days"
  features: string[]; // Key card bullets
  deliverables?: string[]; // Itemized deliverables
  notIncluded?: string[]; // Transparent scope boundaries
  ctaText?: string;
  sortOrder?: number;
}

export interface ServiceAddon {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency?: string;
  unit?: string; // e.g. "per video", "per page", "one-time", "per 4 weeks"
  priceType?: 'fixed' | 'recurring' | 'per_unit';
  availableForPackages?: string[];
  sortOrder?: number;
}

export interface ServiceComparisonRow {
  feature: string;
  category?: string;
  starter: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
  tooltip?: string;
}

export interface ServiceBundle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  services: string[];
  startingPrice: number;
  currency?: string;
  duration?: string;
  discountNote?: string;
  badge?: string;
  features: string[];
  sortOrder?: number;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  iconKey: string;
  shortDescription: string;
  category: string;
  order: number;
  // Pricing & Packages
  pricingModel?: 'recurring' | 'project';
  startingPrice?: number;
  currency?: string;
  duration?: string;
  packages?: ServicePackage[];
  addOns?: ServiceAddon[];
  comparisonRows?: ServiceComparisonRow[];
  whoIsThisFor?: {
    starter?: string;
    professional?: string;
    premium?: string;
  };
  bundleSuggestions?: ServiceBundle[];
  // Service Preview Image / Visual Thumbnail (Decap CMS editable)
  previewImage?: string;
  image?: string;
  previewImageAlt?: string;
  // Rich Service Page Extensions
  heroImage?: string;
  heroImageAlt?: string;
  heroHeadline?: string;
  heroHighlight?: string;
  heroDescription?: string;
  overview?: string;
  visualType?: string;
  capabilities?: string[];
  whatWeOffer?: string[];
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
  ctaLabel?: string;
  whatsappMessage?: string;
  thumbnail?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  canonicalUrl?: string;
  seoImage?: string;
  ogImage?: string;
  published?: boolean;
}

export interface ProcessStep {
  id: string;
  stepNumber: string; // e.g. "01"
  title: string;
  iconKey?: string;
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
  discipline?: string;
  status?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroMockup?: string;
  headerImage?: string;
  headerMockup?: string;
  featuredImage?: string;
  visualType?: 'brand-identity' | 'packaging' | 'saas-dashboard' | 'social-campaign' | 'ecommerce' | string;
  featured?: boolean;
  order: number;
  published?: boolean;
  date?: string;
  // Rich Case Study Extensions
  client?: string;
  brand?: string;
  industry?: string;
  location?: string;
  projectType?: string;
  tags?: string[];
  year?: string;
  duration?: string;
  hours?: string;
  services?: string[];
  tools?: string[];
  challenge?: string;
  objectives?: string;
  approach?: string;
  strategy?: string;
  design?: string;
  execution?: string;
  solution?: string;
  process?: string;
  creativeDirection?: string;
  result?: string;
  results?: string;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialCompany?: string;
  whatsappMessage?: string;
  ctaLabel?: string;
  projectUrl?: string;
  externalUrl?: string;
  materials?: MaterialSpec[];
  dielineSpecs?: DielineSpecs;
  processSteps?: WorkProcessStep[];
  gallery?: GalleryItem[];
  faqs?: FAQItem[];
  relatedService?: string;
  relatedServices?: string[];
  relatedProjects?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  canonicalUrl?: string;
  seoImage?: string;
  ogImage?: string;
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
  image?: string;
  imageAlt?: string;
  visualType?: string;
  published?: boolean;
  featured?: boolean;
  canonicalUrl?: string;
  tags?: string[];
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  relatedServices?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  ogImage?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  description?: string;
  iconKey?: string;
  order: number;
}

export interface TestimonialItem {
  id: string;
  slug?: string;
  reviewText?: string;
  quote?: string;
  reviewerName?: string;
  author?: string;
  reviewerPosition?: string;
  role?: string;
  companyName?: string;
  company?: string;
  companyLogo?: string;
  reviewerPhoto?: string;
  avatar?: string;
  rating?: number;
  relatedCompany?: string;
  relatedService?: string;
  relatedWork?: string;
  relatedWorkTitle?: string;
  featured?: boolean;
  published?: boolean;
  order: number;
}

export interface TestimonialsSectionContent {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description?: string;
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

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
  icon?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  slug?: string;
  logo: string;
  logoAlt?: string;
  websiteUrl?: string;
  services?: string[];
  shortDescription?: string;
  relatedWork?: string;
  relatedWorkTitle?: string;
  reviewEnabled?: boolean;
  reviewText?: string;
  reviewerName?: string;
  reviewerPosition?: string;
  reviewerPhoto?: string;
  rating?: number;
  featured?: boolean;
  published?: boolean;
  order: number;
}

export interface ClientsSectionContent {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description?: string;
}

export interface SocialPlatformItem {
  name: string;
  url: string;
  enabled: boolean;
  handle?: string;
  icon?: string;
}

export interface SocialSettings {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  pinterest?: string;
  behance?: string;
  dribbble?: string;
  github?: string;
  platforms?: SocialPlatformItem[];
}

export interface AnalyticsSettings {
  googleAnalyticsEnabled: boolean;
  measurementId: string; // e.g. "G-XXXXXXXXXX"
  googleTagManagerId?: string;
  cookieConsentEnabled: boolean;
}

export interface TeamSocialItem {
  platform: 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok' | 'github' | 'behance' | 'dribbble' | 'website' | string;
  url: string;
  enabled?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  slug?: string;
  jobTitle?: string;
  position?: string; // backward-compatibility alias
  role?: string; // backward-compatibility alias
  shortDescription?: string;
  shortBio?: string; // backward-compatibility alias
  bio?: string; // backward-compatibility alias
  fullBio?: string;
  profilePhoto?: string;
  avatar?: string; // backward-compatibility alias
  photo?: string; // backward-compatibility alias
  photoAlt?: string;
  avatarAlt?: string; // backward-compatibility alias
  skills?: string[];
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  x?: string;
  youtube?: string;
  tiktok?: string;
  github?: string;
  behance?: string;
  dribbble?: string;
  website?: string;
  portfolioUrl?: string;
  socialLinks?: TeamSocialItem[];
  published?: boolean;
  featured?: boolean;
  order: number;
}

export interface LegalPage {
  id: string;
  title: string;
  slug: string;
  lastUpdated: string;
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  published: boolean;
  content: string; // Markdown or rich text
}

export interface AboutValueItem {
  id?: string;
  title: string;
  description: string;
  iconKey?: string;
  badge?: string;
}

export interface AboutContent {
  eyebrow: string;
  headlineLine1: string;
  headlineHighlight: string;
  introDescription: string;
  missionTitle: string;
  missionDescription: string;
  missionPoints?: string[];
  visionTitle: string;
  visionDescription: string;
  visionPoints?: string[];
  storyTitle: string;
  storyDescription: string;
  storyParagraphs?: string[];
  storyImage?: string;
  storyBadge?: string;
  valuesTitle?: string;
  valuesDescription?: string;
  values?: AboutValueItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

export interface ContactContent {
  heading: string;
  title?: string;
  headline?: string;
  eyebrow?: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  contactEmail: string;
  supportEmail?: string;
  businessEmail?: string;
  phone?: string;
  whatsappNumber?: string;
  whatsappDescription?: string;
  whatsappPrefilledMessage?: string;
  whatsappCtaText?: string;
  emailCtaText?: string;
  address?: string;
  location?: string;
  availability?: string;
  ctaHeading?: string;
  ctaText?: string;
  contactFormEnabled?: boolean;
  contactFormType?: 'native' | 'embed';
  contactFormUrl?: string;
  contactFormTitle?: string;
  formType?: string;
  formActionUrl?: string;
  formEmbedUrl?: string;
  formTitle?: string;
  formSubtitle?: string;
  formSubmitText?: string;
  metaTitle?: string;
  metaDescription?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
}

export interface NotFoundContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
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
  supportEmail?: string;
  businessEmail?: string;
  phone?: string;
  whatsappNumber?: string;
  whatsappDescription?: string;
  whatsappPrefilledMessage?: string;
  whatsappCtaText?: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  parentCompanyUrl: string;
  currentDomain: string;
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  pinterestUrl?: string;
  behanceUrl?: string;
  dribbbleUrl?: string;
  githubUrl?: string;
  location?: string;
  address?: string;
  formEndpoint?: string;
  footerText?: string;
  copyrightText?: string;
  socialLinks?: SocialLink[];
}

export interface ProjectInquiryData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  projectType: string;
  budget?: string;
  timeline: string;
  preferredContact: 'Email' | 'WhatsApp' | 'Either';
  findUs?: string;
  description: string;
  referencedWork?: string;
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
  about?: AboutContent;
  contact?: ContactContent;
  social?: SocialSettings;
  analytics?: AnalyticsSettings;
  teamMembers?: TeamMember[];
  legalPages?: LegalPage[];
  clients?: ClientItem[];
  clientsSection?: ClientsSectionContent;
  testimonialsSection?: TestimonialsSectionContent;
  bundles?: ServiceBundle[];
  notFound?: NotFoundContent;
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
  | { view: 'terms-and-conditions'; path: string; slug?: undefined }
  | { view: 'legal'; path: string; slug?: undefined }
  | { view: 'cookie-policy'; path: string; slug?: undefined }
  | { view: 'legal-page'; path: string; slug: string }
  | { view: 'sitemap'; path: string; slug?: undefined }
  | { view: '404'; path: string; slug?: undefined };
