# Cloudflare Worker Deployment & Operations Guide
**Worker Name**: `media-lizzdo-auth`  
**Worker URL**: `https://media-lizzdo-auth.lets3do.workers.dev/`  
**Target Repository**: `medializz/LM`  
**CMS Origin**: `https://media.lizzdo.com`

---

## 1. Prerequisites

Make sure you have Node.js installed locally.

---

## 2. Install Wrangler & Log In

```bash
# Navigate to the worker directory
cd worker

# Install dependencies
npm install

# Authenticate Wrangler with your Cloudflare account
npx wrangler login
```

---

## 3. Configure Secrets in Cloudflare

Set the two required encrypted secrets:

```bash
# 1. Add GitHub Client Secret
npx wrangler secret put GITHUB_CLIENT_SECRET
# When prompted, paste the GitHub OAuth Client Secret

# 2. Add Session Secret (generate with openssl rand -hex 32)
npx wrangler secret put SESSION_SECRET
# When prompted, paste your 64-character random hex string
```

---

## 4. Deploy the Worker

```bash
npx wrangler deploy
```

This compiles the TypeScript code in `/worker/src/index.ts` and deploys it directly to your existing Cloudflare Worker `media-lizzdo-auth`.

---

## 5. Endpoints Verification

### A. Verify Health (`GET /health`)
Open in your browser:
```
https://media-lizzdo-auth.lets3do.workers.dev/health
```
Expected response:
```json
{
  "status": "healthy",
  "service": "Lizzdo Media OAuth Worker",
  "timestamp": "..."
}
```

### B. Verify Authorization Endpoint (`GET /auth`)
Open in your browser:
```
https://media-lizzdo-auth.lets3do.workers.dev/auth
```
Expected response:
- Automatically issues HTTP 302 Redirect to `https://github.com/login/oauth/authorize?client_id=...&redirect_uri=...&scope=repo&state=...`

### C. Verify Callback Endpoint (`GET /callback`)
When visited directly without query parameters:
```
https://media-lizzdo-auth.lets3do.workers.dev/callback
```
Expected response:
- Clean error page indicating missing authorization code or state parameters (without exposing stack traces or server errors).

---

## 6. Live Log Streaming (Without Leaking Secrets)

To view real-time execution logs while testing authentication:

```bash
npx wrangler tail
```

Or via Cloudflare Dashboard:
1. Go to **Workers & Pages** → **media-lizzdo-auth**.
2. Click **Logs** → **Begin log stream**.

> **Security Note**: The worker code strictly avoids logging any access tokens, client secrets, session secrets, or authorization codes.

---

## 7. Complete End-to-End Testing Procedure

1. Open `https://media.lizzdo.com/admin/`.
2. Click **Login with GitHub**.
3. A popup window opens pointing to `https://media-lizzdo-auth.lets3do.workers.dev/auth`.
4. Sign in and grant authorization to your GitHub account (which has write access to `medializz/LM`).
5. GitHub redirects back to `https://media-lizzdo-auth.lets3do.workers.dev/callback`.
6. The Worker performs the server-side token exchange and sends an origin-restricted `postMessage` (`targetOrigin: https://media.lizzdo.com`).
7. The popup closes automatically.
8. Decap CMS loads all 9 collections (*Site Settings, Hero, Services, Portfolio, Blog, FAQs, Process, Why Choose Us, Statistics, Testimonials*).
9. Make a test change and click **Publish**.
10. Confirm the commit is created on `medializz/LM` on branch `main`, triggering your GitHub Actions deployment.

---

## 8. Troubleshooting Common Issues

| Issue | Cause | Fix |
| :--- | :--- | :--- |
| `redirect_uri_mismatch` | GitHub OAuth callback does not match worker URL | Ensure GitHub OAuth App callback is exactly `https://media-lizzdo-auth.lets3do.workers.dev/callback` |
| `Invalid or expired authentication session state` | State expired (10 min) or `SESSION_SECRET` mismatch | Retry login in a fresh popup. Verify `SESSION_SECRET` is set in Cloudflare Secrets. |
| `GitHub rejected the token exchange request` | Invalid `GITHUB_CLIENT_ID` or `GITHUB_CLIENT_SECRET` | Check `GITHUB_CLIENT_ID` in `wrangler.toml` and re-enter `GITHUB_CLIENT_SECRET` in Cloudflare Secrets. |
| `Popup closed / Decap does not react` | `CMS_ORIGIN` mismatch | Verify `CMS_ORIGIN = "https://media.lizzdo.com"` in `wrangler.toml` or Cloudflare Dashboard. |
| `404 Not Found on repository` | User lacks repository collaborator permissions | Add your GitHub account as a collaborator with Write/Admin access on `medializz/LM`. |
