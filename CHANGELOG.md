# Changelog — Lizzdo Media

All notable changes to the Lizzdo Media website and CMS infrastructure are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- **Zero-Stale CMS Content Pipeline**: Switched data loader in `src/data/cmsContent.ts` to direct bundled JSON imports via Vite (`import.meta.glob`), eliminating outdated `localStorage` caches.
- **Header & Mobile Drawer Navigation**: Updated all "Let's Talk" and Contact triggers to navigate seamlessly to `/contact` instead of opening popup modals.
- **Sitemap XML & Robots**: Synchronized `/public/sitemap.xml` and `/public/robots.txt` with all 30+ production routes.

### Fixed
- **Deep Link Navigation on GitHub Pages**: Configured `/public/404.html` SPA parameter forwarding and `src/utils/router.ts` URL restoration.
- **TypeScript Strict Compliance**: Resolved missing `SiteSettings` import in `cmsContent.ts` for clean build and linting.
- **Empty Social Link Filtering**: Prevented blank badges from rendering when CMS social URLs are empty.
