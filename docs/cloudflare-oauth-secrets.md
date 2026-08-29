# Cloudflare Worker Secrets & Variables Setup
**Worker**: `media-lizzdo-auth`  
**Worker URL**: `https://media-lizzdo-auth.lets3do.workers.dev/`  
**Website**: `https://media.lizzdo.com/`  
**GitHub Repository**: `medializz/LM`

---

## 1. Cloudflare Dashboard Location

To configure variables and secrets:
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** in the left sidebar.
3. Click on your worker: **media-lizzdo-auth**.
4. Go to **Settings** → **Variables and Secrets**.

---

## 2. Environment Variables & Secrets Reference

| Name | Type | Description | Example / Recommended Value |
| :--- | :--- | :--- | :--- |
| `OAUTH_BASE_URL` | **Variable** (Plaintext) | The public base URL of the OAuth Worker | `https://media-lizzdo-auth.lets3do.workers.dev` |
| `CMS_ORIGIN` | **Variable** (Plaintext) | The allowed Decap CMS origin (used for origin-restricted `postMessage`) | `https://media.lizzdo.com` |
| `GITHUB_CLIENT_ID` | **Variable** (Plaintext) | Public Client ID from your GitHub OAuth App | `Iv1.xxxxxxxxxxxx` or `Ov23xxxxxxxxxxxx` |
| `ALLOWED_USERS` | **Variable** (Plaintext, Optional) | Comma-separated GitHub usernames allowed to edit the CMS | *(Leave empty to allow all collaborators with repository write access)* |
| `GITHUB_CLIENT_SECRET` | **SECRET** (Encrypted) | Private Client Secret generated in your GitHub OAuth App | **NEVER COMMIT TO GIT** |
| `SESSION_SECRET` | **SECRET** (Encrypted) | 64-character random hex string for HMAC-SHA256 CSRF state signing | **NEVER COMMIT TO GIT** |

---

## 3. How to Generate `SESSION_SECRET`

Run this command on your local terminal to create a cryptographically secure 256-bit random key:

```bash
openssl rand -hex 32
```

Example output format:
`e4a8b71d92305c6ef... (64 hex characters)`

> **SECURITY MANDATE**: Never use a predictable string, word, or commit this value to Git.

---

## 4. How to Add Secrets

### Method A: Via Cloudflare Web Dashboard (Recommended)
1. In **Settings** → **Variables and Secrets**:
2. Scroll to **Secrets** and click **Add**.
3. Name: `GITHUB_CLIENT_SECRET` → Value: *[Paste your GitHub Client Secret]* → Click **Encrypt / Save**.
4. Click **Add** again.
5. Name: `SESSION_SECRET` → Value: *[Paste your 64-character random hex string]* → Click **Encrypt / Save**.
6. Under **Environment Variables**, verify `OAUTH_BASE_URL`, `CMS_ORIGIN`, and `GITHUB_CLIENT_ID` are present.
7. Click **Deploy**.

### Method B: Via Wrangler CLI
```bash
cd worker

# Add GitHub Client Secret
npx wrangler secret put GITHUB_CLIENT_SECRET
# (Prompt will ask for value — paste secret securely)

# Add Session Secret
npx wrangler secret put SESSION_SECRET
# (Prompt will ask for value — paste generated 64-char hex string)
```

---

## 5. Security Rules

- `GITHUB_CLIENT_SECRET` and `SESSION_SECRET` are strictly kept server-side inside Cloudflare's encrypted environment.
- They are **NEVER** returned in any HTTP response, logged in console output, or exposed to the client browser.
