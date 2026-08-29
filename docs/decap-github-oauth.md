# Decap CMS + GitHub OAuth + Cloudflare Worker Authentication Guide
**Lizzdo Media (`https://media.lizzdo.com/`)**

This document details the configuration, credentials setup, and operational procedures for authenticating Decap CMS editors on `https://media.lizzdo.com/admin/` via GitHub OAuth and your existing Cloudflare Worker.

---

## 1. System Architecture

```text
Visitor / Content Editor
        │
        ▼
https://media.lizzdo.com/
        │
        ▼
https://media.lizzdo.com/admin/  (Decap CMS UI on GitHub Pages)
        │
        ▼ (Click "Login with GitHub")
Popup Opens: https://media-lizzdo-auth.lets3do.workers.dev/auth?provider=github&scope=repo
        │
        ▼ (Worker generates HMAC-SHA256 signed CSRF state with 10m timestamp expiry)
https://github.com/login/oauth/authorize
        │
        ▼ (User Authorizes via your GitHub Account)
https://media-lizzdo-auth.lets3do.workers.dev/callback?code=...&state=...
        │
        ▼ (Worker Exchanges Code for Access Token via Server-Side POST — Secret NEVER exposed)
POST https://github.com/login/oauth/access_token
        │
        ▼ (Worker Returns HTML with Restricted postMessage to https://media.lizzdo.com)
Decap CMS Authenticated Session
        │
        ▼ (Direct Git Commits to Repository via GitHub API)
GitHub Repository: medializz/LM (branch: main)
        │
        ▼ (Triggers GitHub Pages Action Workflow)
Updated Production Site at https://media.lizzdo.com/
```

---

## 2. GitHub OAuth Application Setup

Create the OAuth App manually in GitHub:

1. Log in to GitHub and navigate to:
   **GitHub** → **Settings** (Account Settings) → **Developer settings** → **OAuth Apps** → **New OAuth App**  
   *(Direct URL: `https://github.com/settings/applications/new`)*
2. Fill out the exact parameters:
   - **Application name**: `Lizzdo Media CMS`
   - **Homepage URL**: `https://media.lizzdo.com/`
   - **Application description**: `Decap CMS GitHub Authentication for Lizzdo Media`
   - **Authorization callback URL**: `https://media-lizzdo-auth.lets3do.workers.dev/callback`
3. Click **Register application**.
4. Copy the **Client ID** (e.g. `Iv1.xxxxxxxxxxxx` or `Ov23xxxxxxxxxxxx`).
5. Click **Generate a new client secret**.
6. Copy the generated **Client Secret** immediately.

> **CRITICAL SECURITY MANDATE**:
> - Never commit the **Client Secret** to GitHub, HTML, JavaScript, or public configuration files.
> - The Client Secret goes ONLY into your Cloudflare Worker Secret store (`GITHUB_CLIENT_SECRET`).

---

## 3. Decap CMS Configuration (`/public/admin/config.yml`)

The repository is configured to connect to your GitHub repository and existing Worker:

```yaml
backend:
  name: github
  repo: medializz/LM
  branch: main
  base_url: https://media-lizzdo-auth.lets3do.workers.dev
  auth_endpoint: auth
  site_domain: media.lizzdo.com

media_folder: "public/uploads"
public_folder: "/uploads"
```

All existing content collections (*Site Settings, Services, Work Portfolio, Blog, FAQs, Process, Why Choose Us, Statistics, Testimonials*) remain 100% intact.

---

## 4. Cloudflare Worker Variables & Secrets Configuration

Worker Name: `media-lizzdo-auth`  
Worker URL: `https://media-lizzdo-auth.lets3do.workers.dev`

### Non-Secret Variables (Dashboard → Workers & Pages → media-lizzdo-auth → Settings → Variables and Secrets)
- `OAUTH_BASE_URL` = `https://media-lizzdo-auth.lets3do.workers.dev`
- `CMS_ORIGIN` = `https://media.lizzdo.com`
- `GITHUB_CLIENT_ID` = `[YOUR_GITHUB_CLIENT_ID]`
- `ALLOWED_USERS` = `[OPTIONAL: comma-separated GitHub logins]`

### Encrypted Secrets (Must be added as Secrets, NEVER plaintext variables or committed code)
1. **`GITHUB_CLIENT_SECRET`**:
   The GitHub OAuth Client Secret copied from Step 2.
2. **`SESSION_SECRET`**:
   A cryptographically strong 64-character random hex string for HMAC-SHA256 CSRF protection.
   Generate on your terminal with:
   ```bash
   openssl rand -hex 32
   ```

You can set these via the Cloudflare Web Dashboard under **Variables and Secrets** (click *Add* → select type **Secret**), or using Wrangler CLI:
```bash
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put SESSION_SECRET
```

---

## 5. Testing & Verification

1. **Test Worker Health**:
   Open in your browser: `https://media-lizzdo-auth.lets3do.workers.dev/health`  
   Expected output:
   ```json
   {
     "status": "healthy",
     "service": "Lizzdo Media OAuth Worker"
   }
   ```
2. **Access CMS**:
   Navigate to `https://media.lizzdo.com/admin/`.
3. **Log in**:
   Click **Login with GitHub**. A popup opens to `https://media-lizzdo-auth.lets3do.workers.dev/auth`.
4. **Authorize**:
   Authorize the GitHub application using an account with write permissions to `medializz/LM`.
5. **CMS Access**:
   The popup closes, and Decap CMS loads all collections with edit and publish permissions.
