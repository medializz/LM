import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const HOST = 'media.lizzdo.com';
const INDEXNOW_KEY = '82492AADF58A96682EBFE83F8BA0FA32';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Read URLs from sitemap.xml
function getSitemapUrls() {
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('sitemap.xml not found at', sitemapPath);
    return [];
  }
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const regex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submitToIndexNow() {
  const urls = getSitemapUrls();
  if (urls.length === 0) {
    console.warn('[IndexNow] No URLs found in sitemap.xml to submit.');
    return;
  }

  console.log(`[IndexNow] Preparing submission of ${urls.length} URLs for ${HOST}...`);
  console.log(`[IndexNow] Key verification file: ${KEY_LOCATION}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] Pinging endpoint: ${endpoint}`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      console.log(`[IndexNow] ${endpoint} responded with status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`[IndexNow] Successfully submitted to ${endpoint}!`);
      } else {
        const text = await response.text();
        console.warn(`[IndexNow] Note: Search engine returned response: ${text}`);
      }
    } catch (err) {
      console.error(`[IndexNow] Error connecting to ${endpoint}:`, err.message);
    }
  }
}

submitToIndexNow();
