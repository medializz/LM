# Lizzdo Media Website

Production website for **Lizzdo Media** — Creative & Digital Agency (`https://media.lizzdo.com/`).

---

## 🧠 Project Documentation & Memory

For complete technical architecture, Decap CMS field mappings, data flow diagrams, route maps, historical bug fixes, and AI agent operational guidelines, refer to:

- **[BRAIN.md](./BRAIN.md)**: Master persistent engineering knowledge base and source of truth.
- **[CHANGELOG.md](./CHANGELOG.md)**: Full project version history and change records.
- **[docs/](./docs/)**: Detailed setup and security guides for Cloudflare OAuth Worker and Decap CMS.

---

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Automated via GitHub Actions)

1. Go to your repository on GitHub: `https://github.com/medializz/lmedia` (or your repo name).
2. Click **Settings** (gear icon at the top).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Change from `Deploy from a branch` to **`GitHub Actions`**.
5. Under **Custom domain**:
   - Enter: `media.lizzdo.com`
   - Click **Save**.
   - Check **Enforce HTTPS** (once DNS is active).
6. Go to the **Actions** tab in your repository and verify that the `Deploy to GitHub Pages` workflow completes with a green checkmark.

---

### 🌐 DNS Configuration for `media.lizzdo.com`

At your domain registrar / DNS manager (e.g. Cloudflare, GoDaddy, Namecheap, Google Domains):

| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `media` | `medializz.github.io` | Automatic / 1 Hour |

*(Note: Replace `medializz.github.io` with your GitHub username/organization `.github.io`)*

---

### Option 2: 1-Click Deploy to Vercel / Netlify / Cloudflare Pages

If you prefer Vercel or Cloudflare Pages:
1. Import repository `medializz/lmedia`.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add domain: `media.lizzdo.com`.
