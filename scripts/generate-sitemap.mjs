import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://media.lizzdo.com';
const TODAY = new Date().toISOString().split('T')[0];

function readJsonFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));
  return files.map(file => {
    try {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.warn(`Could not parse JSON file: ${file}`, e.message);
      return null;
    }
  }).filter(Boolean);
}

function generateSitemapXml() {
  const urls = [];

  // Core Static Pages
  const corePages = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${BASE_URL}/services`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${BASE_URL}/work`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${BASE_URL}/about`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/blog`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${BASE_URL}/contact`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/sitemap`, priority: '0.5', changefreq: 'weekly' },
  ];

  urls.push(...corePages);

  // 1. Services
  const services = readJsonFiles(path.join(rootDir, 'src/content/services'));
  services
    .filter(s => s.published !== false && s.slug)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .forEach(service => {
      urls.push({
        loc: `${BASE_URL}/services/${service.slug}`,
        priority: '0.85',
        changefreq: 'monthly'
      });
    });

  // 2. Portfolio / Case Studies
  const portfolio = readJsonFiles(path.join(rootDir, 'src/content/portfolio'));
  portfolio
    .filter(p => p.published !== false && p.slug)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .forEach(project => {
      urls.push({
        loc: `${BASE_URL}/work/${project.slug}`,
        priority: '0.8',
        changefreq: 'monthly'
      });
    });

  // 3. Blog Articles
  const blog = readJsonFiles(path.join(rootDir, 'src/content/blog'));
  blog
    .filter(b => b.published !== false && b.slug)
    .sort((a, b) => new Date(b.publishedDate || 0).getTime() - new Date(a.publishedDate || 0).getTime())
    .forEach(article => {
      urls.push({
        loc: `${BASE_URL}/blog/${article.slug}`,
        priority: '0.75',
        changefreq: 'monthly',
        lastmod: article.updatedDate || article.publishedDate || TODAY
      });
    });

  // 4. Legal Pages
  const legal = readJsonFiles(path.join(rootDir, 'src/content/legal'));
  legal
    .filter(l => l.slug)
    .forEach(page => {
      urls.push({
        loc: `${BASE_URL}/${page.slug}`,
        priority: '0.4',
        changefreq: 'yearly'
      });
    });

  // Format XML
  const xmlEntries = urls.map(item => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod || TODAY}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>
`;

  const outputPath = path.join(rootDir, 'public/sitemap.xml');
  fs.writeFileSync(outputPath, xmlContent, 'utf-8');
  console.log(`[SEO] Generated sitemap.xml with ${urls.length} indexable URLs at ${outputPath}`);
}

generateSitemapXml();
