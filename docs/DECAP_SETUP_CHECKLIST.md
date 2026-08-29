# Decap CMS + GitHub OAuth Setup Checklist
**Lizzdo Media (`https://media.lizzdo.com/`)**

Use this step-by-step checklist to complete and verify the production authentication setup between Decap CMS, GitHub OAuth, and your Cloudflare Worker.

---

### Phase 1: Cloudflare Worker Preparation
- [x] Worker name identified: `media-lizzdo-auth`
- [x] Worker URL confirmed: `https://media-lizzdo-auth.lets3do.workers.dev/`
- [x] Worker source code implemented in `/worker/src/index.ts`
- [x] `OAUTH_BASE_URL` variable configured to `https://media-lizzdo-auth.lets3do.workers.dev`
- [x] `CMS_ORIGIN` variable configured to `https://media.lizzdo.com`
- [x] Cloudflare routing verified (No wildcard routes intercepting `media.lizzdo.com/*`)

---

### Phase 2: GitHub OAuth App Registration (Manual Step)
- [ ] Navigate to **GitHub** → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
- [ ] Set **Application name**: `Lizzdo Media CMS`
- [ ] Set **Homepage URL**: `https://media.lizzdo.com/`
- [ ] Set **Authorization callback URL**: `https://media-lizzdo-auth.lets3do.workers.dev/callback` (Exact URL)
- [ ] Click **Register application**
- [ ] Copy the generated **Client ID**
- [ ] Click **Generate a new client secret** and copy the **Client Secret**

---

### Phase 3: Cloudflare Variables & Secrets (Manual Step)
- [ ] Generate a secure 64-character random session secret (`openssl rand -hex 32`)
- [ ] Add `GITHUB_CLIENT_ID` to Worker variables in Cloudflare Dashboard (or `wrangler.toml`)
- [ ] Add `GITHUB_CLIENT_SECRET` as an encrypted Secret in Cloudflare Dashboard (or via `npx wrangler secret put GITHUB_CLIENT_SECRET`)
- [ ] Add `SESSION_SECRET` as an encrypted Secret in Cloudflare Dashboard (or via `npx wrangler secret put SESSION_SECRET`)
- [ ] Deploy worker updates: `npx wrangler deploy` (or Save & Deploy in Dashboard)

---

### Phase 4: Decap CMS Configuration in Repository
- [x] `public/admin/config.yml` backend configured:
  ```yaml
  backend:
    name: github
    repo: medializz/LM
    branch: main
    base_url: https://media-lizzdo-auth.lets3do.workers.dev
    auth_endpoint: auth
    site_domain: media.lizzdo.com
  ```
- [x] `public/admin/index.html` updated with clean Decap CMS engine and `robots: noindex, nofollow`
- [x] All 9 existing CMS collections preserved (*settings, hero, services, portfolio, blog, faqs, process, whyChooseUs, statistics, testimonials*)
- [x] `.gitignore` configured to ignore `.dev.vars*` and `.wrangler/`

---

### Phase 5: End-to-End Verification & Testing
- [ ] Visit `https://media-lizzdo-auth.lets3do.workers.dev/health` and verify HTTP 200 `{ "status": "healthy" }`
- [ ] Navigate to `https://media.lizzdo.com/admin/`
- [ ] Click **Login with GitHub**
- [ ] Verify the popup opens `https://media-lizzdo-auth.lets3do.workers.dev/auth`
- [ ] Authorize with your GitHub account (which has write access to `medializz/LM`)
- [ ] Verify redirection through `https://media-lizzdo-auth.lets3do.workers.dev/callback`
- [ ] Verify popup closes automatically and Decap CMS dashboard loads
- [ ] Test editing a content field in Decap CMS and clicking **Publish**
- [ ] Verify the commit appears in `medializz/LM` on branch `main`
- [ ] Verify GitHub Actions workflow runs and deploys to GitHub Pages
- [ ] Verify the updated content appears on `https://media.lizzdo.com/`
- [ ] Confirm no secrets appear in browser source, network headers, or repository logs
