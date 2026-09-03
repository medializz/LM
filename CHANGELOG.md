# Changelog — Lizzdo Media

All notable changes to the Lizzdo Media website and CMS infrastructure are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-09-03

### Fixed
- **In-App Browser & Insecure Connection Warning Fix (BUG-018)**:
  - Discovered root cause: `http://media.lizzdo.com/` was responding with `200 OK` without redirecting, causing Instagram's in-app Android browser (Chromium WebView) to flag the unencrypted page with interactive form inputs as "This website is not using a secure connection".
  - Implemented synchronous pre-render protocol upgrade script in `<head>` of `index.html` and `public/admin/index.html` to instantly replace location before HTML parsing, form creation, or React hydration.
  - Upgraded GitHub Pages SPA router fallback script in `public/404.html` to enforce `https://` on all deep links.
  - Added `Content-Security-Policy: upgrade-insecure-requests` directive to ensure all browser network calls are upgraded to HTTPS.
  - Added `public/_headers` defining strict HSTS (`max-age=31536000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict Referrer Policy.
  - Added `public/_redirects` to establish explicit HTTP to HTTPS 301 edge redirects.
  - Fully documented the required Cloudflare Edge settings (**Always Use HTTPS**, **Automatic HTTPS Rewrites**, and **HSTS**) in `BRAIN.md`.

---

## [1.1.0] - 2026-09-03

### Added
- **Productized Service & Pricing Package System**: Complete conversion-focused agency tiering architecture across all service offerings:
  - 3-tier packages per service (Starter, Professional, and Premium) with highlighted "Recommended" tier badges.
  - Transparent itemized pricing, turnaround estimations, revision policies, deliverable checklists, and clear inclusions/exclusions.
  - Interactive Add-on Configurator & Real-time Total Calculator (`AddonSelector.tsx`) with instant WhatsApp scope bundling.
  - Side-by-side Feature Comparison Matrix (`PackageComparisonTable.tsx`) with category grouping and tooltips.
  - Persona & Use-Case Decision Guide (`WhoIsThisForSection.tsx`) assisting clients in identifying their ideal tier.
  - Cross-Disciplinary Service Bundles (`src/content/bundles.json`, `BundleCard.tsx`) for multi-service offerings.
  - Contextual WhatsApp Deep-Linking (`createPackageWhatsAppUrl`) with prefilled tier scope, deliverables, and selected add-ons.
- **Service Catalog Expansion**: Added dedicated services for `Flyer & Leaflet Design` and `Content Creation` with full packages and metadata.

### Changed
- **Services Index Page Filtering**: Re-engineered category filtering in `ServicesIndexPage.tsx` to handle multi-word, case variations, and title keywords across Branding, Design, Engineering, Social, Marketing, and AI.
- **Header Dropdown & HTML Noscript Sync**: Synchronized `src/content/navigation.json` and `index.html` to reflect all 14 active agency services.
- **Contact Page Pricing Guidance**: Updated pricing FAQ to reflect transparent 3-tier productized service packages.

### Fixed
- **Cross-Service Bundle Matching**: Enhanced `getBundlesForService()` to support alias normalization for related service slugs.
- **Service Categories Normalization**: Aligned category taxonomy across all service JSON files to maintain consistent display.

---

## [1.0.0] - 2026-08-30

### Added
- **Persistent Engineering Brain (`BRAIN.md`)**: Comprehensive project memory, architecture diagrams, CMS field maps, bug tracker, and AI agent operating instructions.
- **Dynamic Social Media Component (`SocialLinks.tsx`)**: Unified social channel renderer supporting 10 platforms with multiple layout styles (pills, minimal icons, and cards).
- **Pakistani & International Phone Normalizer (`normalizeWhatsAppNumber`)**: Auto-converts local numbers (e.g. `0300 1234567` → `923001234567`) for reliable WhatsApp API deep links.
- **Dedicated Inquiries Page (`/contact`)**: Centralized contact hub with direct email channels, studio phone, office availability, WhatsApp fast-track, and inquiry form.
- **Decap CMS 11-Collection Architecture**: Site Settings, Clients, Services, Work, Blog, Team, Legal, FAQs, Process, Statistics, and Testimonials.
- **Cloudflare OAuth Worker (`worker/src/index.ts`)**: Serverless GitHub OAuth exchange proxy for secure Decap CMS administration.

### Changed
- **Strict CMS-Driven State Initialization**: Removed hard-coded fallback strings from `DEFAULT_CMS_DATA` in `src/data/cmsContent.ts`. All site identity, WhatsApp numbers, descriptions, emails, and social links are now strictly bound to CMS JSON content.
- **Centralized WhatsApp Deep Links**: Replaced ad-hoc regex handling and dummy fallback numbers (`+1234567890`) across `ContactModal`, `AboutPage`, `ServiceDetailPage`, `WorkDetailPage`, `BlogDetailPage`, `LegalPageRenderer`, and `BodyCtaSection` with the unified `getWhatsAppUrl` helper.
- **Zero-Stale CMS Content Pipeline**: Switched data loader in `src/data/cmsContent.ts` to direct bundled JSON imports via Vite (`import.meta.glob`), eliminating outdated `localStorage` caches.
- **Header & Mobile Drawer Navigation**: Updated all "Let's Talk" and Contact triggers to navigate seamlessly to `/contact` instead of opening popup modals.
- **Sitemap XML & Robots**: Synchronized `/public/sitemap.xml` and `/public/robots.txt` with all 30+ production routes.

### Fixed
- **Deep Link Navigation on GitHub Pages**: Configured `/public/404.html` SPA parameter forwarding and `src/utils/router.ts` URL restoration.
- **TypeScript Strict Compliance**: Resolved missing `SiteSettings` import in `cmsContent.ts` for clean build and linting.
- **Empty Social Link Filtering**: Prevented blank badges from rendering when CMS social URLs are empty.
