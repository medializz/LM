import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function readJsonFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));
  return files.map(file => {
    try {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      return null;
    }
  }).filter(Boolean);
}

function getAllRoutes() {
  const routes = [
    'services',
    'work',
    'about',
    'blog',
    'contact',
    'sitemap'
  ];

  // 1. Services
  const services = readJsonFiles(path.join(rootDir, 'src/content/services'));
  services
    .filter(s => s.published !== false && s.slug)
    .forEach(s => routes.push(`services/${s.slug}`));

  // 2. Portfolio
  const portfolio = readJsonFiles(path.join(rootDir, 'src/content/portfolio'));
  portfolio
    .filter(p => p.published !== false && p.slug)
    .forEach(p => routes.push(`work/${p.slug}`));

  // 3. Blog
  const blog = readJsonFiles(path.join(rootDir, 'src/content/blog'));
  blog
    .filter(b => b.published !== false && b.slug)
    .forEach(b => routes.push(`blog/${b.slug}`));

  // 4. Legal
  const legal = readJsonFiles(path.join(rootDir, 'src/content/legal'));
  legal
    .filter(l => l.slug)
    .forEach(l => routes.push(l.slug));

  return routes;
}

function generateStaticRouteSnapshots() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('[SSG Prerender] dist/index.html does not exist. Run vite build first.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  const routes = getAllRoutes();

  console.log(`[SSG Prerender] Generating static directory entrypoints for ${routes.length} routes...`);

  let count = 0;
  for (const route of routes) {
    const targetDir = path.join(distDir, route);
    fs.mkdirSync(targetDir, { recursive: true });

    // Customized canonical URL in the static HTML for this route
    const canonicalUrl = `https://media.lizzdo.com/${route}`;
    const routeHtml = baseHtml
      .replace(
        /<link rel="canonical" href="https:\/\/media\.lizzdo\.com\/" \/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
      .replace(
        /<meta property="og:url" content="https:\/\/media\.lizzdo\.com\/" \/>/,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );

    fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf-8');
    count++;
  }

  console.log(`[SSG Prerender] Successfully created ${count} static HTML index files in dist/!`);
}

generateStaticRouteSnapshots();
