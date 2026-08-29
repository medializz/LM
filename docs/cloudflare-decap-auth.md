# Cloudflare Worker Configuration for Decap CMS Authentication
**Worker Service**: `media-lizzdo-auth.lets3do.workers.dev`  
**Target Website**: `https://media.lizzdo.com/`  
**GitHub Repository**: `medializz/LM`

---

## 1. Overview & Service Details

- **Worker Name**: `media-lizzdo-auth`
- **Worker Primary URL**: `https://media-lizzdo-auth.lets3do.workers.dev/`
- **Target CMS URL**: `https://media.lizzdo.com/admin/`
- **OAuth Endpoints**:
  - `GET /health` — Diagnostic and health verification
  - `GET /auth` — Generates HMAC-signed CSRF state, stores temporary cookie, and redirects user to GitHub
  - `GET /callback` — Validates state, exchanges code with GitHub API for Access Token server-side, and communicates token back to Decap CMS via origin-restricted `postMessage`

---

## 2. Environment Variables & Secrets Reference

### A. Non-Sensitive Environment Variables
Configure these in the Cloudflare Dashboard under **Workers & Pages** → **media-lizzdo-auth** → **Settings** → **Variables and Secrets** (or in `wrangler.toml`):

| Variable | Value | Description |
| :--- | :--- | :--- |
| `OAUTH_BASE_URL` | `https://media-lizzdo-auth.lets3do.workers.dev` | Public URL of the auth Worker |
| `CMS_ORIGIN` | `https://media.lizzdo.com` | Expected Decap CMS origin (used for postMessage targetOrigin security) |
| `GITHUB_CLIENT_ID` | *[Your GitHub OAuth Client ID]* | GitHub OAuth App Public Client ID |
| `ALLOWED_USERS` | *[Optional]* | Comma-separated GitHub usernames allowed to access CMS (leave empty to allow any user with repo write access) |

### B. Encrypted Cloudflare Secrets (NEVER in Git or plaintext)
Add these as **Secret** type variables in Cloudflare:

| Secret Name | Value Description | How to Set |
| :--- | :--- | :--- |
| `GITHUB_CLIENT_SECRET` | The secret key generated in your GitHub OAuth App | `npx wrangler secret put GITHUB_CLIENT_SECRET` or via Cloudflare UI |
| `SESSION_SECRET` | 64-char random hex string (`openssl rand -hex 32`) | `npx wrangler secret put SESSION_SECRET` or via Cloudflare UI |

---

## 3. Step-by-Step Cloudflare Setup

### Option 1: Via Cloudflare Web Dashboard
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** → **media-lizzdo-auth**.
3. Go to **Settings** → **Variables and Secrets**.
4. Under **Environment Variables**, add:
   - `OAUTH_BASE_URL` = `https://media-lizzdo-auth.lets3do.workers.dev`
   - `CMS_ORIGIN` = `https://media.lizzdo.com`
   - `GITHUB_CLIENT_ID` = *your_client_id*
5. Under **Secrets**, click **Add** and add:
   - `GITHUB_CLIENT_SECRET` (paste your GitHub OAuth Client Secret)
   - `SESSION_SECRET` (generate with `openssl rand -hex 32` and paste)
6. Click **Deploy / Save**.

### Option 2: Via Wrangler CLI
```bash
cd worker
npm install

# Authenticate with your Cloudflare account
npx wrangler login

# Set Secrets
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put SESSION_SECRET

# Deploy Worker code
npx wrangler deploy
```

---

## 4. Testing Endpoints

### 1. Test `/health`
Visit: `https://media-lizzdo-auth.lets3do.workers.dev/health`  
Expected response: HTTP 200 OK
```json
{
  "status": "healthy",
  "service": "Lizzdo Media OAuth Worker",
  "timestamp": "..."
}
```

### 2. Test `/auth`
Visit: `https://media-lizzdo-auth.lets3do.workers.dev/auth?scope=repo`  
Expected behavior:
- Immediately returns a 302 redirect to `https://github.com/login/oauth/authorize` with `client_id`, `redirect_uri`, and a cryptographic `state` token.

### 3. Test `/callback`
- When opening from Decap CMS (`https://media.lizzdo.com/admin/`), clicking "Login with GitHub" launches the popup which hits `/auth` and completes at `/callback`.
- If accessed directly without valid parameters, it cleanly displays an error page ("Missing required authorization code or state parameters") without exposing server errors.

---

## 5. Cloudflare Routing Safety

> **IMPORTANT WARNING ON ROUTES**:
> - **DO NOT** attach a wildcard route like `media.lizzdo.com/*` to this Worker.
> - `media.lizzdo.com` is hosted on GitHub Pages with Cloudflare DNS. Attaching a worker route for the main site would intercept public website traffic and break website loading.
> - The worker operates independently at `https://media-lizzdo-auth.lets3do.workers.dev/` as a dedicated authentication proxy.

---

## 6. Real-Time Logs & Debugging

To monitor worker activity safely without leaking access tokens:
1. In Cloudflare Dashboard, navigate to **Workers & Pages** → **media-lizzdo-auth** → **Logs** → **Begin log stream**.
2. Trigger the login flow on `https://media.lizzdo.com/admin/`.
3. The worker code is designed to **never** output access tokens or client secrets in logs.

---

## 7. Troubleshooting Common OAuth Errors

| Error | Root Cause | Solution |
| :--- | :--- | :--- |
| `redirect_uri_mismatch` | GitHub OAuth App callback URL does not match worker | Set GitHub Authorization callback URL to `https://media-lizzdo-auth.lets3do.workers.dev/callback` |
| `Invalid or expired authentication session state` | State was modified or expired (10 min timeout) | Retry login in a fresh popup. Verify `SESSION_SECRET` is identical across requests. |
| `GitHub rejected the token exchange request` | Invalid `GITHUB_CLIENT_ID` or `GITHUB_CLIENT_SECRET` | Check Client ID and re-enter Client Secret in Cloudflare Secrets. |
| `Popup closed / Nothing happens` | Origin mismatch in `CMS_ORIGIN` | Ensure `CMS_ORIGIN` in Worker is set to `https://media.lizzdo.com`. |
| `Not authorized to edit this CMS` | User not in `ALLOWED_USERS` | Check `ALLOWED_USERS` variable or clear it to allow any collaborator with repo write access. |
| `Decap CMS cannot load repository` | User account does not have write access to `medializz/LM` | Grant Collaborator write/admin access on GitHub repository settings. |
