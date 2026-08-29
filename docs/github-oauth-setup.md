# GitHub OAuth Application Setup Guide
**Project**: Lizzdo Media (`https://media.lizzdo.com/`)  
**Target Repository**: `medializz/LM`  
**Worker Authentication URL**: `https://media-lizzdo-auth.lets3do.workers.dev/`

---

## 1. Create the GitHub OAuth Application

1. Log into your GitHub account (with Admin / Write access to `medializz/LM`).
2. Navigate to:
   **GitHub** → **Settings** (User Settings) → **Developer settings** → **OAuth Apps** → **New OAuth App**  
   *(Direct URL: `https://github.com/settings/applications/new`)*

---

## 2. Exact Application Form Values

| Form Field | Exact Value to Enter | Notes |
| :--- | :--- | :--- |
| **Application name** | `Lizzdo Media CMS` | Identifies your app on authorization screens |
| **Homepage URL** | `https://media.lizzdo.com/` | Public website homepage |
| **Application description** | `Decap CMS GitHub Authentication for Lizzdo Media` | Optional description |
| **Authorization callback URL** | `https://media-lizzdo-auth.lets3do.workers.dev/callback` | **CRITICAL: Must match this exact URL** |

> **IMPORTANT**:
> - Do **NOT** use `https://auth.media.lizzdo.com/callback`
> - Do **NOT** use `https://media.lizzdo.com/callback`
> - Do **NOT** include any trailing slash on `/callback`
> - Use the exact URL: `https://media-lizzdo-auth.lets3do.workers.dev/callback`

---

## 3. Register & Obtain Credentials

1. Click **Register application**.
2. GitHub displays your **Client ID** (e.g. `Ov23...` or `Iv1...`).
   - Copy the Client ID.
3. Click **Generate a new client secret**.
4. GitHub displays your **Client Secret**.
   - Copy this value immediately (GitHub will only display it once).

---

## 4. Where to Put the Credentials

| Credential | Destination | Storage Method |
| :--- | :--- | :--- |
| **Client ID** | Cloudflare Worker (`media-lizzdo-auth`) | Variable: `GITHUB_CLIENT_ID` |
| **Client Secret** | Cloudflare Worker (`media-lizzdo-auth`) | **Secret**: `GITHUB_CLIENT_SECRET` |

> **NEVER** put the Client Secret into:
> - `admin/config.yml`
> - `index.html`
> - React components or frontend code
> - Git commits or public files
