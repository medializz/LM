# BRAIN.md — Lizzdo Media Persistent Engineering & Architectural Memory

**Document Version:** 1.2.0  
**Project Version:** 1.2.0  
**Project Name:** Lizzdo Media  
**Repository:** `medializz/LM`  
**Production Domain:** `https://media.lizzdo.com/`  
**Last Updated:** 2026-09-03  
**Maintained By:** Lead Software Architect & AI Engineering Agent

---

## 1. PROJECT STATUS DASHBOARD

*Verified live status across all subsystems as of September 2026:*

| Subsystem | Status | Verification & Notes |
| :--- | :--- | :--- |
| **Production Website** | 🟢 **LIVE** | Serving at `https://media.lizzdo.com/` via Cloudflare + GitHub Pages |
| **HTTPS & SSL/TLS Security** | 🟢 **SECURED** | Synchronous pre-render upgrade script, CSP `upgrade-insecure-requests`, HSTS headers, and Cloudflare Edge HTTPS enforcement |
| **Build Pipeline** | 🟢 **PASSING** | Vite 6 + React 19 + TypeScript 5.8 compiles with zero errors |
| **TypeScript / Lint** | 🟢 **PASSING** | `tsc --noEmit` runs 100% clean across all modules |
| **Decap CMS Engine** | 🟢 **WORKING** | Configured in `/public/admin/config.yml` with 11 full collections |
| **CMS Auth Worker** | 🟢 **WORKING** | Cloudflare Worker at `https://media-lizzdo-auth.lets3do.workers.dev` |
| **GitHub OAuth** | 🟢 **WORKING** | Integrated with Cloudflare Worker `/auth` & `/callback` flow |
| **Content Pipeline** | 🟢 **WORKING** | Direct JSON import (`import.meta.glob`), zero stale client caching |
| **Client Routing (SPA)** | 🟢 **WORKING** | Custom zero-dependency History API router with GitHub Pages 404 fallback |
| **Productized Package System** | 🟢 **WORKING** | 3-tier pricing (Starter, Pro, Premium), deliverables, comparison table, add-on estimators, decision guides & bundle cards |
| **Dedicated Contact Page** | 🟢 **WORKING** | `/contact` route active with direct studio channels, form & WhatsApp |
| **Bidirectional Services ↔ Work** | 🟢 **WORKING** | Robust bidirectional linking between Services & Work/Case Studies via centralized helpers |
| **Nested Active Navigation** | 🟢 **WORKING** | Active state persists accurately across nested routes in Header (desktop & mobile) |
| **Dynamic WhatsApp** | 🟢 **WORKING** | Phone normalizer (`0300...` → `92300...`) & contextual prefilled text |
| **Dynamic Social Media** | 🟢 **WORKING** | Universal `SocialLinks` component rendering enabled CMS channels |
| **Service Detail Pages** | 🟢 **WORKING** | 14 dedicated service routes (`/services/:slug`) with rich mockups & package tiers |
| **Work Detail Pages** | 🟢 **WORKING** | 5 comprehensive case studies (`/work/:slug`) with gallery & specs |
| **Blog System** | 🟢 **WORKING** | 6 in-depth articles (`/blog/:slug`) with Markdown body & FAQ schema |
| **Clients Showcase** | 🟢 **WORKING** | 8 real partner brands connected to case studies and reviews |
| **Team Showcase** | 🟢 **WORKING** | 4 studio leaders with full social platforms & CMS controls |
| **SEO & Schema.org** | 🟢 **GOOD** | Dynamic Open Graph, Twitter Cards, Canonical links & JSON-LD |
| **Sitemap XML** | 🟢 **WORKING** | Static XML in `/public/sitemap.xml` listing 30+ production routes |
| **Robots TXT** | 🟢 **WORKING** | Located in `/public/robots.txt`, protects `/admin/` and `/api/` |
| **Mobile Responsiveness** | 🟢 **GOOD** | Fully tested across 320px–768px+ with bottom quick action bar |

---

## 2. PROJECT IDENTITY & SCOPE

- **Brand:** Lizzdo Media (Subsidiary of Lizzdo ecosystem, `https://lizzdo.com/`)
- **Primary Domain:** `https://media.lizzdo.com/`
- **Identity:** High-end creative and digital agency specializing in Brand Identity, Packaging Systems, High-Speed Web Development, Social Media Management, Digital Marketing, and AI Visual Content.
- **Tech Stack:**
  - **Framework:** React 19 + TypeScript (Strict mode)
  - **Bundler:** Vite 6
  - **Styling:** Tailwind CSS v4 + `@tailwindcss/vite`
  - **Animations:** Motion (`motion/react`)
  - **Icons:** Lucide React (`lucide-react`)
  - **CMS:** Decap CMS 3.x (Git-backed content management)
  - **Hosting:** GitHub Pages (`medializz/LM`)
  - **Edge / DNS / CDN:** Cloudflare (SSL/TLS Full Strict, DDoS, Global CDN)
  - **Authentication:** Cloudflare Workers Serverless OAuth proxy

---

## 3. ARCHITECTURE OVERVIEW

### 3.1 Public Visitor Request Flow

```
[ Visitor Browser ]
         │
         ▼
[ Cloudflare Global CDN / DNS ] (media.lizzdo.com)
  ├── SSL/TLS Full (Strict) termination
  ├── Edge Caching & Brotli/Gzip Compression
  └── Custom domain routing
         │
         ▼
[ GitHub Pages Origin ] (medializz.github.io/LM)
  ├── /index.html (Single Page Application Entry)
  ├── /404.html (SPA fallback forwarding to `/?p=path`)
  └── /public/uploads (Optimized static media assets)
         │
         ▼
[ Client-Side React 19 Application ]
  ├── parseRoute() parses path & URL search parameters
  ├── loadCmsData() loads bundled JSON content into memory
  ├── Dynamic SEOHead updates document <head> & Schema.org
  └── Renders selected view (Home, Service, Work, Blog, Contact, Legal)
```

### 3.2 CMS Editor & Content Publication Flow

```
[ Content Editor / Admin ]
         │
         ▼
[ Browser visits /admin/ ]
  └── Decap CMS App loaded from /public/admin/index.html & config.yml
         │
         ▼
[ Click "Login with GitHub" ]
         │
         ▼
[ Cloudflare OAuth Worker ] (https://media-lizzdo-auth.lets3do.workers.dev)
  ├── GET /auth -> Generates state token -> Redirects to GitHub OAuth
  └── GET /callback -> Exchanges code + client_secret -> Returns bearer token
         │
         ▼
[ Authenticated Decap CMS Session ]
  └── Editor updates fields (Services, Work, Settings, Blog, Team, Clients)
         │
         ▼
[ Decap CMS Commits to GitHub ]
  └── Git push to `main` branch on repository `medializz/LM`
         │
         ▼
[ GitHub Actions Workflow ] (.github/workflows/deploy.yml)
  ├── Actions checkout repo + Node.js 22 setup
  ├── Executes `npm run build` (Vite compiles TypeScript + Bundles JSON)
  └── Deploys output `./dist` directory directly to GitHub Pages
         │
         ▼
[ Live Website Updated ] (https://media.lizzdo.com)
```

---

## 4. CONTENT DATA FLOW

Content flows from structured CMS JSON files directly into the client application via static Vite module bundling:

```
[ Decap CMS Editor ]
         │ (Creates / Updates)
         ▼
[ Local JSON Content Files ] (`src/content/**/*.json`)
  ├── src/content/settings.json
  ├── src/content/social.json
  ├── src/content/contact.json
  ├── src/content/services/*.json
  ├── src/content/portfolio/*.json
  ├── src/content/blog/*.json
  ├── src/content/team/*.json
  ├── src/content/clients/*.json
  └── src/content/legal/*.json
         │
         ▼ (Globbed during build & live dev)
[ Static Loader: `src/data/cmsContent.ts` ]
  ├── `import.meta.glob('../content/**/*.json', { eager: true })`
  ├── Sorts collections by `order` or `publishedDate`
  ├── Connects relational references (e.g. Testimonials → Clients → Work)
  └── Normalizes WhatsApp phone formats (`normalizeWhatsAppNumber`)
         │
         ▼
[ Root Application State: `src/App.tsx` ]
  └── `useState<DecapCMSData>(() => loadCmsData())`
         │
         ▼
[ View & Sub-Component Hierarchy ]
  ├── Header & Footer (SiteSettings, Navigation, SocialSettings)
  ├── Pages (ServicesIndex, WorkIndex, BlogDetail, ContactPage, etc.)
  └── Components (SocialLinks, ClientCard, TeamMemberCard, etc.)
```

---

## 5. REPOSITORY STRUCTURE

```
/
├── .env.example                     # Environment variables template
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions build and deploy workflow
├── .gitignore                       # Git ignore list
├── CNAME                            # Custom domain declaration (media.lizzdo.com)
├── README.md                        # Quick developer start & setup guide
├── BRAIN.md                         # Persistent engineering memory & knowledge base
├── CHANGELOG.md                     # Comprehensive version history & change record
├── index.html                       # Primary HTML entry point & font links
├── metadata.json                    # Application metadata, name, description
├── package.json                     # Project scripts and dependencies
├── tsconfig.json                    # TypeScript compiler options
├── vite.config.ts                   # Vite bundler configuration
├── docs/                            # Deep operational documentation
│   ├── DECAP_SETUP_CHECKLIST.md     # Production OAuth deployment checklist
│   ├── cloudflare-decap-auth.md     # Cloudflare Worker architecture
│   ├── cloudflare-oauth-secrets.md  # Secrets provisioning instructions
│   ├── decap-github-oauth.md        # OAuth handshake technical guide
│   ├── deploy-oauth-worker.md       # Worker deployment reference
│   └── github-oauth-setup.md        # GitHub OAuth App registration steps
├── public/
│   ├── 404.html                     # SPA redirection script for GitHub Pages
│   ├── CNAME                        # Public domain copy
│   ├── robots.txt                   # Search engine crawler policies
│   ├── sitemap.xml                  # Canonical XML sitemap with 30+ URLs
│   ├── admin/
│   │   ├── config.yml               # Complete Decap CMS 11-collection schema
│   │   └── index.html               # Decap CMS application loader & styling
│   └── uploads/                     # Static media, SVG logos, mockups, portraits
├── worker/                          # Cloudflare OAuth Worker source code
│   ├── .dev.vars.example            # Worker local development secrets
│   ├── README.md                    # Worker setup and deployment manual
│   ├── package.json                 # Worker dependencies
│   ├── tsconfig.json                # Worker TypeScript configuration
│   ├── wrangler.toml                # Cloudflare Worker deployment manifest
│   └── src/
│       └── index.ts                 # OAuth proxy implementation (GET /auth, /callback)
└── src/
    ├── App.tsx                      # Root component & view router dispatcher
    ├── main.tsx                     # React 19 DOM entry mount
    ├── index.css                    # Tailwind CSS imports & custom keyframes
    ├── types.ts                     # Strict TypeScript interfaces for all data models
    ├── vite-env.d.ts                # Vite client environment declarations
    ├── content/                     # Pure JSON content source of truth
    │   ├── about.json               # About page story, mission, vision, CTA
    │   ├── analytics.json           # GA4 ID, GTM ID, cookie banner settings
    │   ├── clients-section.json     # "Companies We've Worked With" section text
    │   ├── contact.json             # Contact page text, emails, studio details
    │   ├── footer.json              # Footer CTA, copyright, legal disclaimer
    │   ├── hero.json                # Homepage hero copy, headline lines, CTAs
    │   ├── navigation.json          # Main navigation links and dropdown menus
    │   ├── not-found.json           # 404 error page copy and navigation actions
    │   ├── seo.json                 # Global SEO metadata, default OG image
    │   ├── settings.json            # Master site settings, brand logo, WhatsApp, emails
    │   ├── social.json              # 10 official social media platform URLs
    │   ├── testimonials-section.json# Testimonials section header copy
    │   ├── why-choose-us.json       # Why Choose Us section text
    │   ├── blog/                    # 6 Markdown blog articles (JSON format)
    │   ├── clients/                 # 8 Verified partner company profiles
    │   ├── faqs/                    # 5 Global FAQ items
    │   ├── legal/                   # 5 Legal & compliance policy documents
    │   ├── portfolio/               # 5 Rich case study projects
    │   ├── process/                 # 6-step agency workflow definition
    │   ├── services/                # 12 Dedicated service definitions
    │   ├── statistics/              # 4 Agency performance metrics
    │   └── team/                    # 4 Studio leadership profiles
    ├── data/
    │   └── cmsContent.ts            # Dynamic content loader & phone normalizer
    ├── utils/
    │   └── router.ts                # Zero-dependency History API router & hooks
    └── components/
        ├── AnalyticsTracker.tsx     # GA4 / GTM script injector
        ├── Breadcrumb.tsx           # Accessible navigational breadcrumb UI
        ├── ContactModal.tsx         # Quick estimate inquiry modal
        ├── CookieBanner.tsx         # GDPR / CCPA cookie consent banner
        ├── FeatureStrip.tsx         # Feature highlights bar
        ├── Footer.tsx               # Global footer with social links & legal nav
        ├── Header.tsx               # Global sticky header with responsive drawer
        ├── Hero.tsx                 # High-impact hero section
        ├── HeroGraphicComposition.tsx# Vector composition for hero
        ├── ImageLightbox.tsx        # Expandable image preview lightbox
        ├── LizzdoLogo.tsx           # Scalable SVG logo renderer
        ├── MobileQuickBar.tsx       # Floating mobile quick action bar
        ├── SEOHead.tsx              # Dynamic document title & meta tags injector
        ├── ServiceDetailModal.tsx   # Service summary popup modal
        ├── ServiceIcons.tsx         # Lucide icon mapping utility
        ├── ServiceStrip.tsx         # Compact service badges list
        ├── SocialLinks.tsx          # Universal dynamic social media renderer
        ├── body/                    # Homepage section components
        │   ├── BodyCtaSection.tsx
        │   ├── ClientCard.tsx
        │   ├── ClientsSection.tsx
        │   ├── FeaturedWorkSection.tsx
        │   ├── PortfolioVisuals.tsx
        │   ├── ProcessSection.tsx
        │   ├── ServicesSection.tsx
        │   ├── TeamMemberCard.tsx
        │   ├── TeamSection.tsx
        │   ├── TestimonialCard.tsx
        │   ├── TestimonialsSection.tsx
        │   └── WhyChooseUsSection.tsx
        ├── hero/                    # Realistic 3D-styled hero workspace elements
        │   ├── BrandCard.tsx
        │   ├── CoffeeMug.tsx
        │   ├── DesignerTablet.tsx
        │   ├── LaptopBrandPresentation.tsx
        │   ├── PhoneSocialMockup.tsx
        │   ├── StylusPen.tsx
        │   └── VectorArrowGuide.tsx
        ├── pages/                   # Full-page route view components
        │   ├── AboutPage.tsx        # `/about`
        │   ├── BlogDetailPage.tsx   # `/blog/:slug`
        │   ├── BlogIndexPage.tsx    # `/blog`
        │   ├── ContactPage.tsx      # `/contact`
        │   ├── LegalNoticePage.tsx  # `/legal`
        │   ├── LegalPageRenderer.tsx# Dynamic legal markdown renderer
        │   ├── NotFoundPage.tsx     # `/404`
        │   ├── PrivacyPolicyPage.tsx# `/privacy`
        │   ├── ServiceDetailPage.tsx# `/services/:slug`
        │   ├── ServicesIndexPage.tsx# `/services`
        │   ├── SiteMapPage.tsx      # `/sitemap`
        │   ├── TermsOfUsePage.tsx   # `/terms`
        │   ├── WorkDetailPage.tsx   # `/work/:slug`
        │   └── WorkIndexPage.tsx    # `/work`
        └── visuals/                 # Realistic interactive case study mockups
            ├── MailboxIllustration3D.tsx
            ├── ProjectGalleryVisual.tsx
            ├── ServiceHeroVisual.tsx
            ├── SuccessStoryIllustration3D.tsx
            └── portfolio/
```

---

## 6. CMS ARCHITECTURE (DECAP CMS)

The Decap CMS configuration resides at `/public/admin/config.yml`. It uses GitHub as the persistent storage backend, saving all edits as clean JSON or Markdown files in `src/content/`.

### 6.1 Backend Configuration
```yaml
backend:
  name: github
  repo: medializz/LM
  branch: main
  base_url: https://media-lizzdo-auth.lets3do.workers.dev
  auth_endpoint: auth
  site_domain: media.lizzdo.com
media_folder: "public/uploads"
public_folder: "/uploads"
```

### 6.2 All 11 Collections & File Locations

| # | Collection Name | CMS Label | Storage Type | Path | Purpose |
| :- | :--- | :--- | :--- | :--- | :--- |
| **1** | `settings` | Site Settings & Configuration | Multi-File | `src/content/*.json` | Global branding, socials, about, contact, SEO, hero, footer |
| **2** | `clients` | Clients / Companies | Folder | `src/content/clients/*.json` | Verified partner brands, logos, websites, linked case studies |
| **3** | `services` | Services | Folder | `src/content/services/*.json` | 14 agency offerings, packages, add-ons, comparison tables, bundles, FAQs |
| **4** | `portfolio` | Work & Case Studies | Folder | `src/content/portfolio/*.json` | 5 detailed case studies, challenges, strategies, dielines |
| **5** | `blog` | Blog Articles | Folder | `src/content/blog/*.json` | Articles with Markdown body, tags, key takeaways, FAQs |
| **6** | `team` | Team Members | Folder | `src/content/team/*.json` | Studio leadership, roles, bios, profile photos, socials |
| **7** | `legal` | Legal & Policy Pages | Folder | `src/content/legal/*.json` | Privacy, terms of use, terms & conditions, cookie policy |
| **8** | `faqs` | FAQs | Folder | `src/content/faqs/*.json` | Global agency questions and answers |
| **9** | `process` | Our Process | Folder | `src/content/process/*.json` | 6-step collaborative client workflow |
| **10**| `statistics` | Statistics & Milestones | Folder | `src/content/statistics/*.json` | Agency metrics (500+ projects, 99.4% satisfaction, etc.) |
| **11**| `testimonials` | Client Testimonials | Folder | `src/content/testimonials/*.json` | Verified client reviews with ratings and linked clients |

---

## 7. CMS FIELD-TO-FRONTEND MAP

*Rule: Every single CMS field has an active consumer component on the frontend.*

### 7.1 Master Settings (`src/content/settings.json`)
- `siteName` → Document title, Header, Footer, SEOHead Schema.org
- `logoText` → Header logo typography fallback, Footer logo
- `logo` / `logoLight` / `logoDark` → Header `LizzdoLogo`, Footer, Hero Laptop presentation
- `contactEmail` → Header quick info, Footer contact column, Contact page direct link
- `businessEmail` → Contact page business inquiries card
- `supportEmail` → Contact page client support card
- `phone` → Footer phone link, Contact page direct telephone link
- `whatsappNumber` → Dynamic WhatsApp direct link (normalized via `normalizeWhatsAppNumber`)
- `whatsappDescription` → WhatsApp cards across Contact page, Footer, and QuickBar
- `whatsappPrefilledMessage` → URL query parameter `?text=` for direct WhatsApp chats
- `whatsappCtaText` → Button label on WhatsApp CTA buttons
- `address` / `location` → Studio address card on Contact page and Footer
- `primaryCtaText` & `primaryCtaUrl` → Header CTA button ("Let's Talk" → `/contact`)
- `copyrightText` → Footer bottom legal copyright line
- `formEndpoint` → Contact form webhook submission target (Formspree, Getform, etc.)

### 7.2 Social Media (`src/content/social.json`)
- Supported keys: `instagram`, `facebook`, `linkedin`, `twitter`, `youtube`, `tiktok`, `pinterest`, `behance`, `dribbble`, `github`
- Consumed by: `SocialLinks.tsx`, `Header.tsx`, `Footer.tsx`, `ContactPage.tsx`, `AboutPage.tsx`
- Behavior: Non-empty URLs render official brand icons; empty strings are automatically excluded.

### 7.3 Services (`src/content/services/*.json`)
- `title`, `slug`, `category`, `shortDescription` → Services grid cards on Home & `/services`
- `iconKey` → Rendered by `ServiceIcons.tsx`
- `previewImage` / `previewImageAlt` → Card preview thumbnail
- `heroHeadline`, `heroHighlight`, `heroDescription` → Header banner on `/services/:slug`
- `capabilities`, `deliverables` → Interactive checklist tabs on `/services/:slug`
- `processSteps` → 4-step execution flow on `/services/:slug`
- `gallery` → Interactive mockup grid on `/services/:slug`
- `pricingPackages` → 3-tier package cards (`PackageCard.tsx`), recommended badge, deliverables, inclusions, exclusions, and contextual WhatsApp scoping
- `packageComparison` → Side-by-side package comparison matrix (`PackageComparisonTable.tsx`)
- `addons` → Interactive add-on selector & real-time total price calculator (`AddonSelector.tsx`)
- `whoIsThisFor` → Persona and scenario decision guide (`WhoIsThisForSection.tsx`)
- `faqs` → Accordion FAQ component on `/services/:slug` with Schema.org FAQPage injection
- `relatedProjects`, `relatedServices` → Cross-linked recommendations

### 7.4 Cross-Service Bundles (`src/content/bundles.json`)
- Multi-disciplinary service packages: Brand Launch Package, Product Launch Package, Digital Growth Package
- Rendered on service pages via `BundleCard.tsx` and resolved dynamically through `getBundlesForService()`
- Includes package features, duration, discount badge, starting price, and WhatsApp inquiry actions

### 7.5 Portfolio / Work (`src/content/portfolio/*.json`)
- `title`, `slug`, `category`, `shortCategory`, `shortDescription` → Work cards
- `visualType` → Renders specific interactive SVG 3D mockup compositions
- `client`, `year`, `services`, `tools` → Case study metadata bar on `/work/:slug`
- `challenge`, `strategy`, `design`, `execution`, `result` → Deep dive case study breakdown
- `gallery` → Multi-item interactive showcase on `/work/:slug`
- `processSteps` → Step-by-step case study timeline
- `relatedProjects`, `relatedServices` → Case study cross-linking

### 7.5 Clients (`src/content/clients/*.json`)
- `name`, `slug`, `logo`, `logoAlt`, `websiteUrl` → Partner logo marquee on Home & About
- `shortDescription`, `services` → Client summary card in `ClientsSection.tsx`
- `relatedWork`, `relatedWorkTitle` → Direct link to view the case study
- `reviewEnabled`, `reviewText`, `reviewerName`, `rating` → Client testimonial sync

### 7.6 Team Members (`src/content/team/*.json`)
- `name`, `jobTitle`, `shortDescription`, `profilePhoto` → Team cards on `/about`
- `skills` → Highlight tags on team member card
- `linkedin`, `twitter`, `instagram`, `github`, etc. → Dynamic team social pill links

---

## 8. ROUTING SYSTEM & SPA ARCHITECTURE

The application uses a lightweight, zero-dependency History API router implemented in `/src/utils/router.ts`.

### 8.1 Active Routes

| Path | View Identifier | Component | Description |
| :--- | :--- | :--- | :--- |
| `/` | `home` | `Hero`, `ServicesSection`, `FeaturedWork`, etc. | Main agency homepage |
| `/services` | `services-index` | `ServicesIndexPage.tsx` | Complete catalog of 12 services |
| `/services/:slug` | `service-detail` | `ServiceDetailPage.tsx` | Rich service landing page |
| `/work` | `work-index` | `WorkIndexPage.tsx` | Portfolio directory with filter tabs |
| `/work/:slug` | `work-detail` | `WorkDetailPage.tsx` | In-depth project case study |
| `/about` | `about` | `AboutPage.tsx` | Agency philosophy, team, stats |
| `/blog` | `blog-index` | `BlogIndexPage.tsx` | Blog directory with categories |
| `/blog/:slug` | `blog-detail` | `BlogDetailPage.tsx` | Full Markdown article with FAQs |
| `/contact` | `contact` | `ContactPage.tsx` | Dedicated inquiries, WhatsApp & form |
| `/privacy` | `privacy` | `LegalPageRenderer.tsx` | Privacy Policy document |
| `/terms` | `terms` | `LegalPageRenderer.tsx` | Terms of Use document |
| `/terms-and-conditions` | `terms-and-conditions` | `LegalPageRenderer.tsx` | Terms & Conditions document |
| `/cookie-policy` | `cookie-policy` | `LegalPageRenderer.tsx` | Cookie Policy document |
| `/legal` | `legal` | `LegalPageRenderer.tsx` | Legal Notice & Impressum |
| `/sitemap` | `sitemap` | `SiteMapPage.tsx` | Interactive HTML site map |
| *(Any unmapped)* | `404` | `NotFoundPage.tsx` | 404 page with navigation links |

### 8.2 GitHub Pages SPA 404 Fallback
When a visitor accesses a direct deep link (e.g. `https://media.lizzdo.com/services/brand-identity`), GitHub Pages serves `/public/404.html`. This script converts the pathname into a query parameter:
```html
<script>
  var path = window.location.pathname;
  var search = window.location.search;
  var hash = window.location.hash;
  window.location.replace('/' + (path ? '?p=' + encodeURIComponent(path) : '') + (search ? '&' + search.slice(1) : '') + hash);
</script>
```
`parseRoute()` in `src/utils/router.ts` immediately extracts `?p=...`, restores the clean URL via `window.history.replaceState`, and renders the exact view with zero layout flash.

---

## 9. HEADER & NAVIGATION ARCHITECTURE

- **Component:** `/src/components/Header.tsx`
- **Logo:** Renders `LizzdoLogo.tsx` with dynamic fallback to `siteSettings.logoText`. Clicking the logo navigates to `/`.
- **Navigation Links:**
  - **Home:** Navigates to `/`
  - **Services:** Navigates to `/services` (Includes dropdown of 12 services)
  - **Work:** Navigates to `/work`
  - **About:** Navigates to `/about`
  - **Blog:** Navigates to `/blog`
  - **Contact:** Navigates to dedicated `/contact` page
- **"Let's Talk" Primary CTA Button:** Navigates directly to `/contact`.
- **Mobile Drawer:** Full-screen slide-in navigation drawer with animated links, contact emails, and social media pills.

---

## 10. HERO SECTION & WORKSPACE MOCKUPS

- **Component:** `/src/components/Hero.tsx`
- **Dynamic Content:** Headline line 1, highlighted words, and description loaded from `src/content/hero.json`.
- **Realistic Workspace Graphics:**
  - `LaptopBrandPresentation.tsx`: Displays active agency branding presentation on high-resolution laptop screen.
  - `DesignerTablet.tsx`: Vector drawing canvas with precision stylus pen (`StylusPen.tsx`).
  - `PhoneSocialMockup.tsx`: Mobile viewport presenting live social media feed creatives.
  - `CoffeeMug.tsx`: Ceramic studio coffee mug with subtle matte sheen.
  - `BrandCard.tsx`: Tactile business card with embossed metallic foil logo.

---

## 11. DEDICATED CONTACT ARCHITECTURE

- **Route:** `/contact` (`src/components/pages/ContactPage.tsx`)
- **Direct Studio Channels:**
  1. **Primary Studio Email:** `siteSettings.contactEmail` (`contact@media.lizzdo.com`)
  2. **Business / Partnerships:** `siteSettings.businessEmail` (`business@media.lizzdo.com`)
  3. **Technical / Client Support:** `siteSettings.supportEmail` (`support@media.lizzdo.com`)
  4. **Direct Studio Telephone:** `siteSettings.phone`
  5. **Studio Location & Hours:** `siteSettings.address` & `contact.availability`
- **Fast-Track WhatsApp:**
  - Prominent WhatsApp card featuring prefilled project scoping message.
  - Opens direct chat via `https://wa.me/<normalized_number>?text=<prefilled_message>`.
- **Interactive Project Inquiry Form:**
  - Fields: Full Name, Email, Phone, Company, Service Required, Project Type, Budget/Timeline, Preferred Contact Method, Description.
  - Submission: Posts JSON payload to `siteSettings.formEndpoint` (if configured), falling back to a client-side success confirmation state with direct WhatsApp fallback.
  - Anti-Spam: Hidden honeypot field (`website_url`) traps automated spam bots.

---

## 12. WHATSAPP DYNAMIC ARCHITECTURE

- **Normalization Utility:** `normalizeWhatsAppNumber()` in `/src/data/cmsContent.ts`
- **Formatting Rules:**
  - Strips all non-digit characters (`+`, spaces, dashes, parentheses).
  - Normalizes Pakistani local numbers (e.g. `0300 1234567` → `923001234567`).
  - Removes international access prefixes (e.g. `0092...` → `92...`).
- **URL Generation:**
  - Standard format: `https://wa.me/923001234567?text=Hello%20Lizzdo%20Media...`
- **Consumers:**
  - Header WhatsApp fast-link (mobile & desktop)
  - Footer CTA button
  - Floating `MobileQuickBar.tsx`
  - Contact Page (`ContactPage.tsx`)
  - Case Study Consultation buttons

---

## 13. SOCIAL MEDIA SYSTEM

- **Central Configuration:** `/src/content/social.json`
- **Renderer Component:** `/src/components/SocialLinks.tsx`
- **Supported Channels:**
  - Instagram, LinkedIn, X / Twitter, Facebook, YouTube, TikTok, Pinterest, Behance, Dribbble, GitHub
- **Layout Variants:**
  - `variant="pills"`: Compact rounded buttons with icon + brand label
  - `variant="icons"`: Minimal icon buttons with subtle hover glow
  - `variant="cards"`: Rich rectangular cards with handles and description
- **Behavior:**
  - Only channels with valid, non-empty URL strings in `social.json` are rendered.
  - All links open in a new tab with `target="_blank" rel="noopener noreferrer"`.

---

## 14. SEO & STRUCTURED DATA

- **Component:** `/src/components/SEOHead.tsx`
- **Metadata Features:**
  - Dynamic `<title>`: Formatted as `[Page Title] | Lizzdo Media`
  - Canonical URL: `<link rel="canonical" href="https://media.lizzdo.com/..." />`
  - Open Graph tags: `og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:site_name`
  - Twitter Card tags: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- **Schema.org JSON-LD Schemas Injected:**
  - **Home:** `Organization` + `WebSite` with SearchAction
  - **Service Pages:** `Service` + `BreadcrumbList` + `FAQPage`
  - **Work Pages:** `CreativeWork` / `Article` + `BreadcrumbList`
  - **Blog Pages:** `BlogPosting` + `Author` + `FAQPage` + `BreadcrumbList`
  - **Contact Page:** `ContactPage` + `LocalBusiness`

---

## 15. CLOUDFLARE & AUTHENTICATION ARCHITECTURE

### 15.1 Cloudflare Worker (`media-lizzdo-auth`)
- **Location:** `/worker/src/index.ts`
- **Manifest:** `/worker/wrangler.toml`
- **Endpoints:**
  - `GET /`: Health status and usage information
  - `GET /health`: JSON `{ "status": "healthy", "service": "media-lizzdo-auth" }`
  - `GET /auth`: Generates secure crypto state and redirects user to GitHub OAuth authorize page
  - `GET /callback`: Handles GitHub OAuth return, exchanges authorization code for GitHub access token, and dispatches postMessage script to Decap CMS window.

### 15.2 Worker Configuration & Environment
- **Worker Base URL:** `https://media-lizzdo-auth.lets3do.workers.dev`
- **CMS Origin:** `https://media.lizzdo.com`
- **Cloudflare Secrets Required:**
  - `GITHUB_CLIENT_ID` (Stored in Worker vars/secrets)
  - `GITHUB_CLIENT_SECRET` (Stored in Worker encrypted secrets)
  - `SESSION_SECRET` (Stored in Worker encrypted secrets)

---

## 16. GITHUB ACTIONS DEPLOYMENT WORKFLOW

- **File:** `/.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch or manual `workflow_dispatch`
- **Steps:**
  1. Checkout repository (`actions/checkout@v4`)
  2. Setup Node.js 22 (`actions/setup-node@v4`)
  3. Install dependencies (`npm install`)
  4. Run production build (`npm run build` → runs `vite build`)
  5. Upload artifact `./dist` (`actions/upload-pages-artifact@v3`)
  6. Deploy to GitHub Pages (`actions/deploy-pages@v4`)

---

## 17. HTTPS, SSL/TLS, AND EDGE SECURITY ARCHITECTURE

### 17.1 Edge & Origin Architecture
- **Production URL:** `https://media.lizzdo.com/`
- **DNS / Edge CDN:** Cloudflare (Proxied / Orange-Clouded `104.21.33.54`, `172.67.189.12`)
- **Hosting Origin:** GitHub Pages (`medializz/LM`)
- **Edge Certificate:** Universal SSL (Google Trust Services / Let's Encrypt for `*.lizzdo.com`, valid and covering `media.lizzdo.com`)
- **Origin Certificate:** GitHub Pages custom domain TLS or Cloudflare Full SSL encryption

### 17.2 Multi-Layered Defense Against Insecure Connections & In-App Browser Warnings
When mobile users tap links from the Instagram bio or external apps, browsers (especially Android WebView and Chrome Mobile) inspect whether the initial document is requested over insecure HTTP port 80 and whether interactive input forms exist. If served over plain HTTP, Chromium displays:
> *"This website is not using a secure connection. Any sensitive information you enter on this site (for example, passwords or credit cards) could be stolen by attackers."*

To permanently eliminate this vulnerability and protect users:
1. **Layer 1: Synchronous Pre-Render Protocol Upgrade (`index.html`)**
   - Executed as the first synchronous script in `<head>`, before stylesheets, fonts, DOM body, or React hydration.
   - Immediately invokes `window.location.replace('https://' + location.host + ...)` if accessed over `http:`.
   - Aborts insecure page rendering before Chromium triggers form security warnings.
2. **Layer 2: Content Security Policy Upgrade Directive**
   - `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />` in `index.html` and `public/admin/index.html`.
   - Instructs browser engines to automatically upgrade all network requests (images, scripts, styles, APIs) to HTTPS.
3. **Layer 3: Strict HTTPS GitHub Pages Fallback (`public/404.html`)**
   - SPA route redirection script strictly upgrades any insecure protocol to `https://` before redirecting to the query-based SPA route.
4. **Layer 4: Cloudflare Edge Headers & Redirects (`public/_headers`, `public/_redirects`)**
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
5. **Layer 5: Cloudflare Dashboard Configuration Requirements (Manual Verification)**
   - **Always Use HTTPS:** Navigate to **Cloudflare Dashboard** → `lizzdo.com` → **SSL/TLS** → **Edge Certificates** → Toggle **Always Use HTTPS** to **ON**.
   - **HSTS:** Enable HSTS with `max-age=31536000`, include subdomains, and preload.
   - **Automatic HTTPS Rewrites:** Toggle **ON**.
   - **SSL/TLS Mode:** Set to **Full** (or **Full (strict)** if GitHub Pages origin cert is verified).

---

## 18. COMPONENT MAP & RESPONSIBILITY TABLE

| Component | File Path | Safe to Edit? | Key Dependencies & Notes |
| :--- | :--- | :---: | :--- |
| **App Root** | `src/App.tsx` | ⚠️ Careful | Central route dispatcher and layout shell |
| **Router** | `src/utils/router.ts` | ⚠️ Careful | History API navigation and route parser |
| **CMS Loader** | `src/data/cmsContent.ts` | ⚠️ Careful | Glob loaders and data normalizers |
| **Data Types** | `src/types.ts` | ⚠️ Careful | All TypeScript interfaces for data models |
| **Header** | `src/components/Header.tsx` | ✅ Yes | Global navigation bar and mobile drawer |
| **Footer** | `src/components/Footer.tsx` | ✅ Yes | Footer links, contact info, copyright |
| **SEO Head** | `src/components/SEOHead.tsx` | ✅ Yes | Dynamic document title and meta tags |
| **Social Links** | `src/components/SocialLinks.tsx` | ✅ Yes | Universal dynamic social media renderer |
| **Contact Page** | `src/components/pages/ContactPage.tsx` | ✅ Yes | Inquiries, phone, emails, form, WhatsApp |
| **Services Index** | `src/components/pages/ServicesIndexPage.tsx` | ✅ Yes | Service catalog directory |
| **Service Detail** | `src/components/pages/ServiceDetailPage.tsx` | ✅ Yes | Rich service landing page layout |
| **Work Index** | `src/components/pages/WorkIndexPage.tsx` | ✅ Yes | Portfolio showcase directory |
| **Work Detail** | `src/components/pages/WorkDetailPage.tsx` | ✅ Yes | Case study presentation layout |
| **About Page** | `src/components/pages/AboutPage.tsx` | ✅ Yes | Philosophy, team members, statistics |
| **Blog Index** | `src/components/pages/BlogIndexPage.tsx` | ✅ Yes | Article directory with search and categories |
| **Blog Detail** | `src/components/pages/BlogDetailPage.tsx` | ✅ Yes | Full article view with Markdown rendering |
| **Legal Renderer** | `src/components/pages/LegalPageRenderer.tsx` | ✅ Yes | Renders markdown legal policy files |
| **Site Map Page** | `src/components/pages/SiteMapPage.tsx` | ✅ Yes | Interactive HTML sitemap directory |
| **404 Page** | `src/components/pages/NotFoundPage.tsx` | ✅ Yes | Custom 404 error page |
| **Decap Config** | `public/admin/config.yml` | ⚠️ Careful | Must match JSON schema in `src/content/` |
| **Sitemap XML** | `public/sitemap.xml` | ✅ Yes | Static production URL catalog |
| **Robots TXT** | `public/robots.txt` | ✅ Yes | Crawler indexing guidelines |

---

## 19. "WHERE DO I EDIT THIS?" PRACTICAL LOOKUP TABLE

| Task | Primary Location (CMS or Code) | Specific File / Setting |
| :--- | :--- | :--- |
| **Change WhatsApp Number** | Decap CMS → Site Settings → General | `src/content/settings.json` (`whatsappNumber`) |
| **Change Contact Email** | Decap CMS → Site Settings → General | `src/content/settings.json` (`contactEmail`) |
| **Change Business / Support Email**| Decap CMS → Site Settings → General | `src/content/settings.json` (`businessEmail`, `supportEmail`) |
| **Update Social Media Links** | Decap CMS → Site Settings → Social | `src/content/social.json` |
| **Add a New Service** | Decap CMS → Services → New Service | `src/content/services/<slug>.json` |
| **Edit an Existing Service** | Decap CMS → Services → [Select Service] | `src/content/services/<slug>.json` |
| **Add a Portfolio Case Study** | Decap CMS → Work & Case Studies → New | `src/content/portfolio/<slug>.json` |
| **Add / Edit a Partner Client** | Decap CMS → Clients / Companies → New | `src/content/clients/<slug>.json` |
| **Add / Edit a Testimonial** | Decap CMS → Client Testimonials → New | `src/content/testimonials/<slug>.json` |
| **Add / Edit a Team Member** | Decap CMS → Team Members → New Member | `src/content/team/<slug>.json` |
| **Publish a New Blog Article** | Decap CMS → Blog Articles → New Article | `src/content/blog/<slug>.json` |
| **Update Privacy Policy / Terms** | Decap CMS → Legal & Policy Pages | `src/content/legal/<slug>.json` |
| **Update Global SEO Defaults** | Decap CMS → Site Settings → Global SEO | `src/content/seo.json` |
| **Update Hero Headline & Copy** | Decap CMS → Site Settings → Hero | `src/content/hero.json` |
| **Update Footer Copy & Copyright** | Decap CMS → Site Settings → Footer | `src/content/footer.json` |
| **Update Form Submission Webhook** | Decap CMS → Site Settings → General | `src/content/settings.json` (`formEndpoint`) |
| **Add New Route to Client Router** | Code Edit | `src/utils/router.ts` (`parseRoute`) & `src/App.tsx` |

---

## 20. PERMANENT BUG TRACKER

*Historical records of all resolved, investigated, and verified bugs:*

| ID | Bug Summary | Component / File | Severity | Status | Solution & Fix Details |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **BUG-001** | Header "Let's Talk" opened popup modal instead of dedicated `/contact` page | `src/components/Header.tsx` | High | **FIXED** | Updated header CTA button to navigate to `/contact` directly. |
| **BUG-002** | Decap CMS content changes required manual cache clearing due to stale localStorage | `src/data/cmsContent.ts` | High | **FIXED** | Removed client-side caching layer; data now loads directly from bundled JSON. |
| **BUG-003** | Pakistani local phone numbers (`0300...`) failed WhatsApp web API links | `src/data/cmsContent.ts` | Medium | **FIXED** | Implemented `normalizeWhatsAppNumber()` to auto-format `0300...` to `92300...`. |
| **BUG-004** | Missing import `SiteSettings` caused TypeScript build error in `cmsContent.ts` | `src/data/cmsContent.ts` | High | **FIXED** | Added `SiteSettings` to named imports from `../types`. |
| **BUG-005** | Deep links on GitHub Pages resulted in 404 error on page refresh | `public/404.html` | High | **FIXED** | Added SPA redirection script in `404.html` with query string handler in `router.ts`. |
| **BUG-006** | Social media links rendered blank items when CMS fields were empty | `src/components/SocialLinks.tsx` | Low | **FIXED** | Added filter to strip out empty string URLs before rendering. |
| **BUG-007** | Hard-coded fallback strings in `DEFAULT_CMS_DATA` and components shadowed CMS content | `src/data/cmsContent.ts`, page components | Medium | **FIXED** | Removed hardcoded dummy strings; all components now strictly consume dynamic CMS JSON content via unified `getWhatsAppUrl` helper. |
| **BUG-008** | Inconsistent phone number formatting across different page touchpoints broke WhatsApp deep links | `src/utils/whatsapp.ts` | High | **FIXED** | Centralized WhatsApp URL normalization in dedicated utility with support for international dialing, `tel:`, and `mailto:` builders. |
| **BUG-009** | Footer social media links occupied excessive vertical height on mobile viewports | `src/components/SocialMediaDropdown.tsx` | Medium | **FIXED** | Replaced rigid inline list with an interactive popover dropdown modal featuring official brand icons and auto-dismiss. |
| **BUG-010** | Service and Portfolio detail pages lacked contextual prefilled WhatsApp messages | `ServiceDetailPage.tsx`, `WorkDetailPage.tsx` | Medium | **FIXED** | Integrated `createServiceWhatsAppUrl` and `createWorkWhatsAppUrl` to auto-populate the exact service or project name in chats. |
| **BUG-011** | Header navigation lost active visual state when viewing nested routes (e.g. `/services/brand-identity` or `/work/packaging-design`) | `src/components/Header.tsx` | Medium | **FIXED** | Implemented prefix-based path checks (`startsWith`) in desktop and mobile navigation logic to maintain active parent highlighting. |
| **BUG-012** | Services and Work case studies lacked dynamic bidirectional relationships and reciprocal links | `cmsContent.ts`, `ServiceDetailPage.tsx`, `WorkDetailPage.tsx` | High | **FIXED** | Created `getWorksForService`, `getServicesForWork`, `getRelatedServices`, and `getRelatedProjects` helpers to automatically resolve cross-collection connections. |
| **BUG-013** | Hardcoded placeholder WhatsApp/phone number persisted across CMS sync due to default fields in config and duplicated contact file | `public/admin/config.yml`, `src/content/settings.json`, `src/content/contact.json`, `src/data/cmsContent.ts` | Critical | **FIXED** | Removed placeholder defaults from `config.yml`, cleaned JSON files, and unified master settings (`settingsData`) as the single source of truth for all contact and WhatsApp deep-links. |
| **BUG-014** | Category filtering in `ServicesIndexPage.tsx` did not reliably match multi-word and partial category keys for Engineering, AI, Social, and Marketing | `src/components/pages/ServicesIndexPage.tsx` | Medium | **FIXED** | Upgraded filter matching logic to intelligently match subcategory variants and titles (e.g. Design, Web, Social, Marketing, AI). |
| **BUG-015** | Header dropdown menu and `index.html` noscript directory omitted newly created services (`flyer-design`, `content-creation`) | `src/content/navigation.json`, `index.html` | Medium | **FIXED** | Synchronized navigation dropdown items and noscript fallback links to represent all 14 active agency services. |
| **BUG-016** | Cross-service bundle matching in `getBundlesForService()` failed when service slugs used common aliases (`website-development` vs `web-development`) | `src/data/cmsContent.ts`, `src/content/bundles.json` | High | **FIXED** | Enhanced bundle matcher to support slug normalization and reciprocal service aliases across all three productized bundles. |
| **BUG-017** | Contact Page pricing FAQ stated that agency did not provide fixed pricing sheets despite launching productized service packages | `src/components/pages/ContactPage.tsx` | Low | **FIXED** | Updated FAQ to accurately describe the 3-tier transparent service packages alongside custom enterprise scoping. |
| **BUG-018** | Instagram in-app browser & Android WebView triggered "This website is not using a secure connection" warning when opened from Instagram bio | `index.html`, `public/404.html`, `public/admin/index.html`, `public/_headers`, `public/_redirects` | Critical | **FIXED** | Implemented multi-layered defense: synchronous pre-render protocol upgrade in `<head>`, CSP `upgrade-insecure-requests`, strict HTTPS in `404.html`, HSTS edge headers in `_headers`, and edge redirect rules in `_redirects`. Documented required Cloudflare "Always Use HTTPS" toggle. |

---

## 21. ARCHITECTURAL DECISION RECORDS (ADR)

### ADR-001: Git-Backed Decap CMS with Static JSON Bundling
- **Decision:** Use Decap CMS writing directly to `src/content/**/*.json` combined with Vite's `import.meta.glob({ eager: true })`.
- **Reason:** Provides an enterprise-grade CMS editing experience without requiring external hosted database subscriptions (e.g. Contentful, Sanity), keeping all website content version-controlled in Git and statically compiled for blazing-fast edge delivery.

### ADR-002: Cloudflare Worker OAuth Proxy
- **Decision:** Deploy a lightweight Cloudflare Worker (`media-lizzdo-auth`) to handle GitHub OAuth exchanges instead of running a separate Node.js server.
- **Reason:** Zero maintenance, scale-to-zero serverless architecture, fast execution at Cloudflare edge locations, and strict encapsulation of `GITHUB_CLIENT_SECRET`.

### ADR-003: Zero-Dependency Client Router
- **Decision:** Implement a custom History API router in `src/utils/router.ts` instead of importing heavy routing libraries.
- **Reason:** Reduces bundle size, eliminates routing version incompatibilities in React 19, and provides precise control over GitHub Pages SPA redirection.

### ADR-004: Centralized Contact & Deep-Linking Engine
- **Decision:** Implement `src/utils/whatsapp.ts` as the single source of truth for phone number sanitization, WhatsApp wa.me generation, `tel:` normalization, and `mailto:` links.
- **Reason:** Ensures consistent formatting, eliminates broken deep-links across different regions/browsers, and provides context-aware customer messaging for high lead conversion.

### ADR-005: Strict HTTPS Protocol Enforcement & Insecure Form Protection
- **Decision:** Implement synchronous pre-render protocol upgrading in `<head>` and declare `Content-Security-Policy: upgrade-insecure-requests` in document markup alongside Cloudflare edge HSTS headers.
- **Reason:** Guarantees that mobile in-app browsers (such as Instagram WebView and Android Chromium) never parse form inputs under an unencrypted HTTP session, immediately preventing "This website is not using a secure connection" security dialogs.

---

## 22. DO NOT BREAK RULES

1. **DO NOT** hardcode content in React components when a corresponding CMS field exists in `src/content/`.
2. **DO NOT** remove or alter `public/404.html` — it is required for GitHub Pages SPA deep linking.
3. **DO NOT** commit raw secrets (OAuth Client Secrets, API Keys) into git repository files or `BRAIN.md`.
4. **DO NOT** replace the dark Lizzdo Media brand theme (`#07090e`, `#ffbe1a` gold accent) without explicit instruction.
5. **DO NOT** create fake or unverified client reviews/ratings.
6. **DO NOT** create unused CMS fields in `config.yml` without creating a corresponding consumer in React components.
7. **DO NOT** disable TypeScript strict typing (`tsc --noEmit` must always pass with zero errors).
8. **DO NOT** delete historical entries in the Bug Tracker or Changelog.
9. **DO NOT** remove the pre-render HTTPS protocol upgrade script from `index.html` or `public/404.html`.

---

## 23. AI AGENT OPERATING INSTRUCTIONS

*Mandatory guidelines for any AI coding agent working in this repository:*

1. **STEP 1:** Always read `BRAIN.md` before making any code or architectural changes.
2. **STEP 2:** Verify whether components, utilities, or types already exist before creating new ones.
3. **STEP 3:** Keep changes minimal, surgical, and well-tested.
4. **STEP 4:** Run `npm run lint` (`tsc --noEmit`) and `npm run build` after editing to guarantee clean compilation.
5. **STEP 5:** When fixing bugs or adding features, update `BRAIN.md`, `CHANGELOG.md`, and the Bug Tracker in the same turn.

---

**End of BRAIN.md — Lizzdo Media Engineering Knowledge Base**
