# LIZZDO MEDIA — MASTER SEARCH VISIBILITY OPTIMIZATION
## Comprehensive Technical Audit, Search-Intent Matrix & Optimization Blueprint
### GEO + SEO + SXO + AEO Across Cardiff, South Wales, the UK & Worldwide

---

## EXECUTIVE SUMMARY & AUDIT BASELINE

- **Entity Name:** Lizzdo Media
- **Corporate Network:** Subsidiary of Lizzdo ecosystem (`https://lizzdo.com/`)
- **Primary Domain:** `https://media.lizzdo.com/`
- **Hosting & Infrastructure:** GitHub Pages (`medializz/LM`) behind Cloudflare Global Edge CDN
- **Architecture:** React 19 + TypeScript 5.8 + Vite 6 Single Page Application with History API routing & pre-rendered noscript index
- **CMS:** Decap CMS (Git-backed content model)
- **Geographic Primary Relevance:** Cardiff, South Wales, Wales, United Kingdom (`GB-CRF`, Coordinates: `51.4816, -3.1791`)
- **Geographic Secondary Relevance:** Worldwide / International clients seeking UK-grade creative & digital craftsmanship
- **Core Optimization Pillars:**
  1. **SEO (Search Engine Optimization):** Crawlability, indexability, pristine canonicalization, semantic HTML, and Core Web Vitals.
  2. **GEO (Generative Engine Optimization):** Citation clarity, entity disambiguation, verifiable brand claims, and extractable data points for OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Perplexity, and Microsoft Copilot.
  3. **SXO (Search Experience Optimization):** Sub-100ms client transitions, clear conversion funnels, zero CLS (Cumulative Layout Shift), and thumb-friendly mobile ergonomics.
  4. **AEO (Answer Engine Optimization):** Concise FAQ structured data, Q&A question-matched headings, bulleted schema lists, and voice-search readouts.

---

## PART 1 — FULL SEARCH AUDIT: STRENGTHS, WEAKNESSES, MISSING, BROKEN & OPPORTUNITIES

### 1. Current Strengths
1. **Dynamic Open Graph & Schema Injection:** `src/components/SEOHead.tsx` dynamically populates `<title>`, `<meta name="description">`, Open Graph, Twitter Cards, canonical tags, and JSON-LD structured data scripts (`BreadcrumbList`, `Service`, `FAQPage`, `BlogPosting`, `ContactPage`).
2. **Sub-Second Static Performance:** Asset delivery from Cloudflare Edge + Vite rollup with code-splitting yields sub-100ms TTFB and rapid Largest Contentful Paint (LCP).
3. **Structured Local Signals:** Cardiff, South Wales, and UK geographic coordinates (`geo.region: GB-CRF`, `geo.placename: Cardiff`, `geo.position: 51.4816;-3.1791`, `ICBM: 51.4816, -3.1791`) are actively injected into the document head.
4. **E-E-A-T Realism:** Zero fake claims or artificial team personas; verified real projects (Aura Luxe, Savoria, PulseMetrics, Acoustix, Nexus Core) with transparent, itemized deliverables.
5. **Clean Semantic Architecture:** Well-organized semantic `<main>`, `<header>`, `<footer>`, `<article>`, `<nav>`, and `<section>` landmarks across all page templates.

### 2. Current Weaknesses & Gaps
1. **Near-Duplicate Service URLs:** Both `/services/web-development` and `/services/website-development` existed in the content directory and sitemap, risking internal keyword competition and link equity splitting.
2. **Relative Open Graph Images:** In certain pages, `ogImage` URLs were relative paths (`/uploads/services/...`), which can cause preview failures on platforms requiring absolute HTTPS URLs (WhatsApp, LinkedIn, Twitter/X, Facebook).
3. **Missing Collection Schema on Indexes:** `/services` and `/work` index pages lacked structured `ItemList` or `CollectionPage` schema, missing an opportunity for Google rich carousel results.
4. **AI Crawler Directives:** `public/robots.txt` had standard `User-agent: *` rules but lacked explicit directives welcoming AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`) while protecting `/admin/`.
5. **URL Inconsistency:** Service file `ai-visual-content.json` held the slug `ai-visuals-content` while architectural guidelines specify `/services/ai-visual-content`.

### 3. Missing Items Identified & Scheduled for Resolution
1. Comprehensive Search-Intent Matrix (Part 49) mapping query archetypes, primary intent, secondary intent, target personas, schema types, and conversion CTAs for every route.
2. ItemList Schema on `/services` and `/work` index views.
3. Twitter `@lizzdomedia` handle tags (`twitter:site` and `twitter:creator`) in `SEOHead.tsx`.
4. URL alias normalizer in `router.ts` for clean 301-equivalent client redirects (`/services/website-development` -> `/services/web-development`, `/services/ai-visuals-content` -> `/services/ai-visual-content`, `/privacy` -> `/privacy-policy`).
5. Open Graph dimensions (`og:image:width: 1200`, `og:image:height: 630`) and alt attributes.

### 4. Broken or Risky Items
- Duplicate URL entries in `sitemap.xml` for `website-development` vs `web-development`. Resolved by canonicalizing to `web-development`.

### 5. High-Impact Strategic Opportunities
- **AEO Featured Snippets:** By structuring service and FAQ questions into atomic 45–55 word direct answer blocks, Lizzdo Media can capture Google "People Also Ask" (PAA) boxes and voice-search responses.
- **GEO Knowledge Synthesis:** Providing plain-text verifiable entity summaries in the HTML and schema enables LLM web agents to cite Lizzdo Media as the authoritative agency for brand identity, packaging, and web development in Cardiff and South Wales.

---

## PART 49 — MASTER SEARCH-INTENT MATRIX

| Route / Page | Target Query Archetype | Primary Intent | Secondary Intent | Target Audience | Primary Conversion Goal | Primary CTA | Required Schema Types | Key Internal Links Out |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`/` (Home)** | "creative agency cardiff", "lizzdo media", "branding and web agency south wales" | Commercial / Navigational | Informational | UK & global founders, CMOs, SMEs | Book discovery call or start WhatsApp brief | "Start a Project" / "Chat on WhatsApp" | `Organization`, `WebSite`, `LocalBusiness`, `SiteNavigationElement` | `/services`, `/work`, `/about`, `/contact`, `/services/brand-identity`, `/services/web-development` |
| **`/about`** | "lizzdo media about", "design studio cardiff team", "creative directors south wales" | Informational | Commercial | Prospective clients assessing agency credibility | Establish E-E-A-T trust & trigger contact | "Work With Us" / "View Open Availability" | `AboutPage`, `Organization`, `LocalBusiness`, `BreadcrumbList`, `Person` | `/work`, `/services`, `/contact`, `/blog` |
| **`/services`** | "creative design services uk", "digital agency capabilities", "branding packages cardiff" | Commercial Investigation | Navigational | Business owners exploring scope & capabilities | Filter to specific service detail | "Explore Service" / "Get Instant Estimate" | `CollectionPage`, `ItemList`, `BreadcrumbList` | All 12 individual `/services/:slug` pages |
| **`/services/brand-identity`** | "brand identity design cardiff", "corporate branding agency south wales", "brand guidelines design" | Commercial / Transactional | Informational | New startups, rebranding enterprises | Request brand proposal / select package | "Start My Brand Identity" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/work/brand-identity-design`, `/services/logo-design`, `/contact` |
| **`/services/logo-design`** | "logo design cardiff", "bespoke company logo design uk", "vector logo designer" | Transactional / Commercial | Informational | Small businesses, retail shops, tech startups | Commission logo project | "Design My Logo" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/brand-identity`, `/work/brand-identity-design`, `/contact` |
| **`/services/graphic-design`** | "graphic design agency cardiff", "print and digital design wales", "marketing collateral design" | Commercial | Transactional | Corporate marketing teams, retail brands | Request design retainer or one-off collateral | "Request Graphic Design" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/flyer-design`, `/services/packaging-design`, `/contact` |
| **`/services/flyer-design`** | "flyer design cardiff", "leaflet design services uk", "event promotional print design" | Transactional | Commercial | Event organizers, local hospitality, SMEs | Order print-ready flyer design | "Design My Flyer" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/graphic-design`, `/contact` |
| **`/services/packaging-design`** | "packaging design agency uk", "luxury box dielines cardiff", "cosmetic packaging design" | Commercial / Transactional | Informational | D2C brands, FMCG producers, luxury cosmetics | Request packaging specification quote | "Design My Packaging" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/work/packaging-design`, `/blog/why-packaging-design-matters`, `/contact` |
| **`/services/web-development`** | "web development agency cardiff", "fast react vite developer wales", "decap cms website builder" | Commercial / Transactional | Informational | Tech companies, professional services, eCommerce | Commission custom website build | "Build My Website" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/work/saas-website-design`, `/work/web-development`, `/blog/modern-web-development-performance-conversion`, `/contact` |
| **`/services/social-media-design`** | "social media graphic design", "instagram carousel templates uk", "linkedin banner designer" | Commercial | Transactional | Influencers, brands, social managers | Commission monthly visual kits | "Upgrade My Socials" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/content-creation`, `/work/social-media-campaign`, `/contact` |
| **`/services/content-posting`** | "social media posting service uk", "automated content publishing cardiff", "social scheduling" | Commercial | Transactional | Busy business owners needing automated social channels | Book automated posting retainer | "Automate My Content" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/social-media-management`, `/services/content-creation`, `/contact` |
| **`/services/digital-marketing`** | "digital marketing agency cardiff", "paid ads management wales", "ppc meta campaign agency" | Commercial / Transactional | Informational | E-commerce brands, B2B lead generation | Book marketing audit & strategy session | "Scale My Marketing" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/advertising-creatives`, `/contact` |
| **`/services/social-media-management`**| "social media management cardiff", "full service social agency south wales" | Commercial / Transactional | Informational | Brands needing turnkey social community management | Schedule social strategy consultation | "Manage My Socials" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/content-posting`, `/work/social-media-campaign`, `/contact` |
| **`/services/advertising-creatives`**| "high ctr ad creatives", "meta ad graphic design uk", "facebook ad visual agency" | Commercial / Transactional | Informational | Growth marketers, media buyers, DTC stores | Order high-converting ad pack | "Create My Ads" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/digital-marketing`, `/contact` |
| **`/services/ai-visual-content`** | "ai visual production agency", "neural image synthesis commercial", "ai concept art cardiff" | Commercial / Informational | Navigational | Innovative brands, creative directors, game/film | Request generative concept sprint | "Explore AI Visuals" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/blog/how-ai-visual-content-is-transforming-creative-production`, `/services/graphic-design`, `/contact` |
| **`/services/content-creation`** | "creative content creation cardiff", "short-form video reels studio uk", "brand copywriting" | Commercial / Transactional | Informational | Brands seeking multichannel content production | Commission bespoke content batch | "Create My Content" | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` | `/services/content-posting`, `/services/social-media-design`, `/contact` |
| **`/work`** | "creative agency portfolio", "design case studies cardiff", "branding examples wales" | Commercial Investigation | Navigational | Prospective clients seeking proof of quality | Click through to deep case study | "View Case Study" / "Start Project" | `CollectionPage`, `ItemList`, `BreadcrumbList` | All 5 `/work/:slug` case studies |
| **`/work/brand-identity-design`** | "luxury brand identity case study", "aura luxe cosmetics branding" | Commercial Investigation | Informational | Luxury fashion & cosmetic brand managers | Inquire for similar brand transformation | "Start Similar Project" | `CreativeWork`, `BreadcrumbList` | `/services/brand-identity`, `/contact` |
| **`/work/packaging-design`** | "artisan packaging case study", "savoria olive oil dieline design" | Commercial Investigation | Informational | Food & beverage producers, packaging buyers | Request packaging brief review | "Start Similar Project" | `CreativeWork`, `BreadcrumbList` | `/services/packaging-design`, `/contact` |
| **`/work/saas-website-design`** | "saas web design case study", "pulsemetrics dark mode dashboard" | Commercial Investigation | Informational | B2B SaaS founders, software product teams | Commission web application design | "Start Similar Project" | `CreativeWork`, `BreadcrumbList` | `/services/web-development`, `/contact` |
| **`/work/social-media-campaign`** | "audio brand social campaign", "acoustix wireless earbud launch" | Commercial Investigation | Informational | Consumer tech marketers, eCommerce growth teams | Commission multi-channel campaign | "Start Similar Project" | `CreativeWork`, `BreadcrumbList` | `/services/social-media-design`, `/contact` |
| **`/work/web-development`** | "high performance web engineering case study", "nexus core react vite site" | Commercial Investigation | Informational | CTOs, technical founders, agencies | Commission custom web engineering | "Start Similar Project" | `CreativeWork`, `BreadcrumbList` | `/services/web-development`, `/contact` |
| **`/blog`** | "design insights cardiff", "branding blog uk", "packaging design tips wales" | Informational | Navigational | Founders, marketing managers, design students | Read articles, subscribe, link back | "Read Guide" / "Browse Topic" | `Blog`, `BreadcrumbList` | All 6 `/blog/:slug` articles |
| **`/blog/how-to-build-a-powerful-brand-identity`** | "how to build brand identity 2026", "brand identity guide" | Informational | Commercial | Early-stage founders, marketing leads | Learn principles, hire Lizzdo for execution | "Consult Our Brand Team" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/brand-identity`, `/contact` |
| **`/blog/why-packaging-design-matters`** | "why packaging design matters", "packaging design sales impact" | Informational | Commercial | FMCG founders, retail brand managers | Understand ROI, commission packaging | "Start Packaging Project" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/packaging-design`, `/contact` |
| **`/blog/what-makes-a-good-business-logo`** | "what makes a good business logo", "logo design principles" | Informational | Commercial | SMEs, new entrepreneurs | Understand logo craft, commission logo | "Design Your Logo" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/logo-design`, `/contact` |
| **`/blog/how-to-create-high-converting-social-media-creatives`** | "high converting social media creatives", "ad visual tips" | Informational | Commercial | Growth marketers, eCom founders | Learn design psychology, hire design team | "Get Custom Social Creatives" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/social-media-design`, `/contact` |
| **`/blog/modern-web-development-performance-conversion`** | "website speed conversion rate", "modern web development performance" | Informational | Commercial | CTOs, product managers, business owners | Audit website speed, commission rebuild | "Engineer Fast Website" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/web-development`, `/contact` |
| **`/blog/how-ai-visual-content-is-transforming-creative-production`** | "ai visual content creative production", "generative ai branding" | Informational | Commercial | Creative directors, brand strategists | Explore AI workflow, commission project | "Explore AI Production" | `BlogPosting`, `FAQPage`, `BreadcrumbList` | `/services/ai-visual-content`, `/contact` |
| **`/contact`** | "contact lizzdo media", "design agency cardiff phone number", "quote creative project wales" | Transactional / Navigational | Commercial | Ready-to-buy clients with established budgets | Submit inquiry form or WhatsApp chat | "Submit Project Brief" / "Chat on WhatsApp" | `ContactPage`, `Organization`, `FAQPage`, `BreadcrumbList` | `/services`, `/work` |
| **`/sitemap`** | "lizzdo media sitemap", "site directory lizzdo" | Navigational | Informational | Users and search engine web spiders | Direct traversal to any target page | Direct navigation links | `WebPage`, `BreadcrumbList` | Every indexable route on the site |

---

## CANNIBALIZATION PREVENTION RULES (PART 33 & 48)

To ensure zero keyword cannibalization across the 12 services and 6 blog articles:
1. **Logo Design vs. Brand Identity:**
   - `/services/logo-design` strictly targets mark craft, typography geometry, vector responsiveness, and standalone logo marks.
   - `/services/brand-identity` strictly targets full strategic identity systems: archetype strategy, color psychology, typographic hierarchy, design tokens, and comprehensive brand guidelines.
2. **Content Creation vs. Content Posting:**
   - `/services/content-creation` strictly targets creative asset production (video reels, carousel graphics, motion infographics, and strategic copy).
   - `/services/content-posting` strictly targets editorial calendar management, multi-platform publishing schedules, optimal distribution timing, and audience engagement consistency.
3. **Web Development vs. Case Studies:**
   - `/services/web-development` is the commercial capabilities hub targeting "web development services".
   - `/work/web-development` is the technical case study demonstrating real-world deliverables, code performance, and results for Nexus Core Technologies.
4. **URL Normalization & Redirects:**
   - Inbound requests for `/services/website-development` seamlessly resolve to `/services/web-development`.
   - Inbound requests for `/services/ai-visuals-content` seamlessly resolve to `/services/ai-visual-content`.

---

## NEXT-STEP IMPLEMENTATION ROADMAP (PARTS 2–54)

1. **SEO Foundation & Metadata (Parts 2–5):** Update `SEOHead.tsx` with absolute Open Graph URLs, Twitter creator tags, and image dimension properties.
2. **URL Canonicalization (Part 3 & 5):** Align `router.ts` with clean alias handling and update `ai-visual-content.json` slug to `ai-visual-content`.
3. **Indexing & Sitemap Optimization (Part 6, 38 & 40):** Update `public/sitemap.xml` to include only clean canonical URLs and enrich `public/robots.txt` with AI crawler authorizations.
4. **Structured Data Enhancements (Part 7, 26, 27, 29, 30):** Add `ItemList` schema on `/services` and `/work` indexes, and enrich `WorkDetailPage.tsx` and `AboutPage.tsx` with complete Schema.org payloads.
5. **AEO & GEO Optimization (Parts 8 & 9):** Ensure atomic 45-55 word direct answer blocks are present for all FAQ schemas.
