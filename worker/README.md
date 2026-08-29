# Lizzdo Media — Decap CMS GitHub OAuth Cloudflare Worker

This directory contains the production-grade, stateless Cloudflare Worker that proxies GitHub OAuth handshakes for **Decap CMS** on `https://media.lizzdo.com/admin/`.

## Architecture Overview
- **Public Site**: `https://media.lizzdo.com/`
- **CMS Admin**: `https://media.lizzdo.com/admin/`
- **Existing OAuth Worker**: `https://media-lizzdo-auth.lets3do.workers.dev/`
- **Endpoints**:
  - `GET /health` — Status & diagnostic verification
  - `GET /auth` — Generates HMAC-signed CSRF state and redirects to GitHub
  - `GET /callback` — Validates state, exchanges code for GitHub Access Token, and transmits token via secure `postMessage` to Decap CMS

---

## 1. Local Development
```bash
# Navigate to worker folder
cd worker

# Install dependencies
npm install

# Copy environment variables template
cp .dev.vars.example .dev.vars

# Fill in your GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, and SESSION_SECRET in .dev.vars
# Start local development server
npm run dev
```

---

## 2. Production Deployment & Secrets Setup
```bash
# Log in to Cloudflare
npx wrangler login

# Set your secrets in Cloudflare (Workers & Pages -> media-lizzdo-auth)
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put SESSION_SECRET

# Deploy to Cloudflare Workers
npx wrangler deploy
```
