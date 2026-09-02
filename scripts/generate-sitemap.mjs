import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read base URL dynamically from settings or SEO configuration
function getBaseUrl() {
  const seoConfigPath = path.join(rootDir, 'src/content/seo.json');
  if (fs.existsSync(seoConfigPath)) {
    try {
      const seo = JSON.parse(fs.readFileSync(seoConfigPath, 'utf-8'));
      if (seo.canonicalUrl) {
        return seo.canonicalUrl.replace(/\/+$/, '');
      }
    } catch {
      // Fallback below
    }
  }
  return 'https://media.lizzdo.com';
}

const BASE_URL = getBaseUrl();
const TODAY = new Date().toISOString().split('T')[0];

/**
 * Safely cleans and normalizes URLs:
 * 1. Strips hash fragments/anchors (#section, #contact, etc.)
 * 2. Strips query parameters (?p=..., etc.)
 * 3. Strips trailing slashes (except root)
 * 4. Ensures well-formed absolute URL string
 */
function cleanUrl(rawPath) {
  if (!rawPath) return null;

  // If path contains a hash anchor, remove it
  const noHash = String(rawPath).split('#')[0].split('?')[0].trim();
  if (!noHash) return null;

  // Clean slashes
  const cleanSegment = noHash.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!cleanSegment) {
    return `${BASE_URL}/`;
  }
  return `${BASE_URL}/${cleanSegment}`;
}

/**
 * Reads all JSON files from a given directory
 */
function readJsonDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.json')) {
      try {
        const filePath = path.join(dirPath, entry.name);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(fileContent);
        results.push(parsed);
      } catch (err) {
        console.warn(`[Sitemap] Warning: Could not parse JSON in ${entry.name}:`, err.message);
      }
    }
  }

  return results;
}

/**
 * Generates the clean dynamic sitemap.xml
 */
function generateDynamicSitemap() {
  const urlMap = new Map();

  function addUrl(rawPath, options = {}) {
    const canonical = cleanUrl(rawPath);
    if (!canonical) return;

    // Disallow hash anchors, admin routes, or API endpoints
    if (canonical.includes('#') || canonical.includes('/admin') || canonical.includes('/api/')) {
      return;
    }

    if (!urlMap.has(canonical)) {
      urlMap.set(canonical, {
        loc: canonical,
        priority: options.priority || '0.7',
        changefreq: options.changefreq || 'monthly',
        lastmod: options.lastmod || TODAY
      });
    }
  }

  // 1. Core Primary Static Pages (Highest Priority)
  addUrl('/', { priority: '1.0', changefreq: 'weekly', lastmod: TODAY });
  addUrl('/services', { priority: '0.9', changefreq: 'weekly', lastmod: TODAY });
  addUrl('/work', { priority: '0.9', changefreq: 'weekly', lastmod: TODAY });
  addUrl('/about', { priority: '0.85', changefreq: 'monthly', lastmod: TODAY });
  addUrl('/blog', { priority: '0.85', changefreq: 'weekly', lastmod: TODAY });
  addUrl('/contact', { priority: '0.85', changefreq: 'monthly', lastmod: TODAY });
  addUrl('/sitemap', { priority: '0.5', changefreq: 'weekly', lastmod: TODAY });

  // 2. Dynamic Service Slugs from CMS
  const servicesDir = path.join(rootDir, 'src/content/services');
  const services = readJsonDirectory(servicesDir);
  console.log(`[Sitemap] Discovered ${services.length} service records in CMS`);

  services
    .filter(item => item.published !== false && item.slug)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .forEach(service => {
      // Clean slug to ensure no anchors or unwanted characters
      const cleanSlug = service.slug.split('#')[0].replace(/^\/+|\/+$/g, '');
      addUrl(`/services/${cleanSlug}`, {
        priority: '0.85',
        changefreq: 'weekly',
        lastmod: TODAY
      });
    });

  // 3. Dynamic Portfolio / Case Studies Slugs from CMS
  const portfolioDir = path.join(rootDir, 'src/content/portfolio');
  const portfolio = readJsonDirectory(portfolioDir);
  console.log(`[Sitemap] Discovered ${portfolio.length} portfolio records in CMS`);

  portfolio
    .filter(item => item.published !== false && item.slug)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .forEach(project => {
      const cleanSlug = project.slug.split('#')[0].replace(/^\/+|\/+$/g, '');
      addUrl(`/work/${cleanSlug}`, {
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: project.year ? `${project.year}-01-01` : TODAY
      });
    });

  // 4. Dynamic Blog Article Slugs from CMS
  const blogDir = path.join(rootDir, 'src/content/blog');
  const blog = readJsonDirectory(blogDir);
  console.log(`[Sitemap] Discovered ${blog.length} blog records in CMS`);

  blog
    .filter(item => item.published !== false && item.slug)
    .sort((a, b) => new Date(b.publishedDate || 0).getTime() - new Date(a.publishedDate || 0).getTime())
    .forEach(post => {
      const cleanSlug = post.slug.split('#')[0].replace(/^\/+|\/+$/g, '');
      const lastModifiedDate = post.updatedDate || post.publishedDate || TODAY;
      addUrl(`/blog/${cleanSlug}`, {
        priority: '0.75',
        changefreq: 'monthly',
        lastmod: lastModifiedDate
      });
    });

  // 5. Dynamic Legal / Compliance Pages from CMS
  const legalDir = path.join(rootDir, 'src/content/legal');
  const legal = readJsonDirectory(legalDir);
  console.log(`[Sitemap] Discovered ${legal.length} legal records in CMS`);

  legal
    .filter(item => item.published !== false && item.slug)
    .forEach(page => {
      const cleanSlug = page.slug.split('#')[0].replace(/^\/+|\/+$/g, '');
      addUrl(`/${cleanSlug}`, {
        priority: '0.4',
        changefreq: 'yearly',
        lastmod: TODAY
      });
    });

  // Convert entries to sorted array
  const finalUrls = Array.from(urlMap.values());

  // Generate clean, standard XML
  const xmlItems = finalUrls.map(item => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlItems}
</urlset>
`;

  // Write to public/ directory (and to dist/ if dist exists)
  const publicOutPath = path.join(rootDir, 'public/sitemap.xml');
  fs.writeFileSync(publicOutPath, sitemapXml, 'utf-8');
  console.log(`[Sitemap] Successfully wrote ${finalUrls.length} clean crawlable URLs to ${publicOutPath}`);

  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const distOutPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distOutPath, sitemapXml, 'utf-8');
    console.log(`[Sitemap] Synchronized sitemap.xml directly into build output: ${distOutPath}`);
  }

  // Quick verification: verify zero hash anchors exist in output
  if (sitemapXml.includes('#')) {
    throw new Error('[Sitemap Error] Detected hash fragment in sitemap.xml! Hash anchors must be excluded.');
  }

  return finalUrls.length;
}

generateDynamicSitemap();
