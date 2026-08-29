/**
 * =============================================================================
 * LIZZDO MEDIA — CLOUDFLARE OAUTH WORKER FOR DECAP CMS
 * =============================================================================
 * Secure, stateless OAuth proxy for Decap CMS GitHub authentication.
 * 
 * Endpoints:
 * - GET /health   -> Health check status (no sensitive info)
 * - GET /auth     -> Initiates GitHub OAuth flow with cryptographically signed state
 * - GET /callback -> Validates state, exchanges code for access token, sends postMessage
 * =============================================================================
 */

export interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  SESSION_SECRET: string;
  OAUTH_BASE_URL?: string;
  CMS_ORIGIN?: string;
  ALLOWED_USERS?: string; // Optional comma-separated GitHub logins
}

export interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const DEFAULT_CMS_ORIGIN = "https://media.lizzdo.com";
const DEFAULT_AUTH_URL = "https://media-lizzdo-auth.lets3do.workers.dev";
const STATE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Standard Security Headers
 */
function getSecurityHeaders(): Headers {
  const headers = new Headers();
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  return headers;
}

/**
 * Convert buffer to Hex string
 */
function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Sign data with HMAC-SHA256 using SESSION_SECRET
 */
async function signState(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return bufferToHex(signature);
}

/**
 * Verify HMAC-SHA256 signature for data
 */
async function verifyStateSignature(data: string, signatureHex: string, secret: string): Promise<boolean> {
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    
    // Parse hex signature to Uint8Array
    const match = signatureHex.match(/.{1,2}/g);
    if (!match) return false;
    const sigBytes = new Uint8Array(match.map(byte => parseInt(byte, 16)));

    return await crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(data));
  } catch {
    return false;
  }
}

/**
 * Generate cryptographically signed state token: `${randomHex}.${timestamp}.${hmacHex}`
 */
async function generateSignedState(secret: string): Promise<string> {
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  const randomHex = bufferToHex(randomBytes.buffer);
  const timestamp = Date.now().toString();
  const payload = `${randomHex}.${timestamp}`;
  const signature = await signState(payload, secret);
  return `${payload}.${signature}`;
}

/**
 * Validate signed state token
 */
async function validateSignedState(stateToken: string, secret: string): Promise<boolean> {
  if (!stateToken || typeof stateToken !== "string") return false;
  const parts = stateToken.split(".");
  if (parts.length !== 3) return false;

  const [randomHex, timestampStr, signature] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Check state expiration
  const now = Date.now();
  if (now - timestamp > STATE_EXPIRY_MS || timestamp > now + 60000) {
    return false;
  }

  // Verify cryptographic HMAC signature
  const payload = `${randomHex}.${timestampStr}`;
  return await verifyStateSignature(payload, signature, secret);
}

/**
 * Render HTML response for Decap CMS popup handshake
 */
function renderPostMessageHtml(
  status: "success" | "error",
  data: { token?: string; error?: string; provider?: string },
  targetOrigin: string
): Response {
  const headers = getSecurityHeaders();
  headers.set("Content-Type", "text/html; charset=utf-8");

  const sanitizedTargetOrigin = targetOrigin || DEFAULT_CMS_ORIGIN;
  const payloadJson = JSON.stringify({
    token: data.token || null,
    error: data.error || null,
    provider: data.provider || "github"
  });

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lizzdo Media CMS Authentication</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #0a0b0f;
      color: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    .card {
      background: #12141c;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 32px 24px;
      max-width: 400px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .badge {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${status === "success" ? "#ffbe1a" : "#ef4444"};
      margin-bottom: 16px;
    }
    h2 {
      margin: 0 0 8px 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      color: #94a3b8;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge"></div>
    <h2>${status === "success" ? "Authorizing Decap CMS..." : "Authentication Failed"}</h2>
    <p>${status === "success" ? "Connecting to your GitHub account and redirecting to the CMS editor." : (data.error || "Could not complete GitHub authentication.")}</p>
  </div>
  <script>
    (function() {
      const status = ${JSON.stringify(status)};
      const payload = ${payloadJson};
      const trustedOrigin = ${JSON.stringify(sanitizedTargetOrigin)};

      function sendToOpener(target) {
        if (!window.opener) return;
        const msg = status === "success"
          ? 'authorization:github:success:' + JSON.stringify(payload)
          : 'authorization:github:error:' + JSON.stringify(payload);
        
        try {
          window.opener.postMessage(msg, target);
        } catch (e) {
          console.error("Failed to postMessage to opener:", e);
        }
      }

      function onMessage(e) {
        // Strict origin check if not matching default
        if (trustedOrigin && trustedOrigin !== "*" && e.origin !== trustedOrigin) {
          return;
        }
        if (e.data === "authorizing:github") {
          sendToOpener(e.origin);
          setTimeout(function() { window.close(); }, 600);
        }
      }

      window.addEventListener("message", onMessage, false);

      // Direct postMessage attempt
      if (window.opener) {
        window.opener.postMessage("authorizing:github", trustedOrigin || "*");
        sendToOpener(trustedOrigin || "*");
        setTimeout(function() { window.close(); }, 1200);
      }
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: status === "success" ? 200 : 400,
    headers
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, "") || "/";
    const cmsOrigin = env.CMS_ORIGIN || DEFAULT_CMS_ORIGIN;
    const oauthBaseUrl = env.OAUTH_BASE_URL || DEFAULT_AUTH_URL;

    // -------------------------------------------------------------------------
    // 1. GET /health
    // -------------------------------------------------------------------------
    if (pathname === "/health") {
      const headers = getSecurityHeaders();
      headers.set("Content-Type", "application/json; charset=utf-8");
      return new Response(
        JSON.stringify({
          status: "healthy",
          service: "Lizzdo Media OAuth Worker",
          timestamp: new Date().toISOString()
        }),
        { status: 200, headers }
      );
    }

    // -------------------------------------------------------------------------
    // 2. GET /auth -> Initiates GitHub OAuth
    // -------------------------------------------------------------------------
    if (pathname === "/auth") {
      if (!env.GITHUB_CLIENT_ID || !env.SESSION_SECRET) {
        return new Response("Server configuration error: Missing GITHUB_CLIENT_ID or SESSION_SECRET", {
          status: 500,
          headers: getSecurityHeaders()
        });
      }

      const scope = url.searchParams.get("scope") || "repo";
      const stateToken = await generateSignedState(env.SESSION_SECRET);

      const redirectUri = `${oauthBaseUrl}/callback`;
      const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
      githubAuthUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
      githubAuthUrl.searchParams.set("scope", scope);
      githubAuthUrl.searchParams.set("state", stateToken);

      const headers = getSecurityHeaders();
      headers.set("Location", githubAuthUrl.toString());
      headers.set(
        "Set-Cookie",
        `oauth_state=${stateToken}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=600`
      );

      return new Response(null, { status: 302, headers });
    }

    // -------------------------------------------------------------------------
    // 3. GET /callback -> GitHub OAuth Callback
    // -------------------------------------------------------------------------
    if (pathname === "/callback") {
      if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET || !env.SESSION_SECRET) {
        return renderPostMessageHtml(
          "error",
          { error: "Server authentication misconfiguration. Please contact the administrator." },
          cmsOrigin
        );
      }

      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const error = url.searchParams.get("error");
      const errorDesc = url.searchParams.get("error_description");

      // Handle user denial or GitHub error
      if (error) {
        return renderPostMessageHtml(
          "error",
          { error: errorDesc || error },
          cmsOrigin
        );
      }

      if (!code || !state) {
        return renderPostMessageHtml(
          "error",
          { error: "Missing required authorization code or state parameters." },
          cmsOrigin
        );
      }

      // Cryptographic state verification
      const isValidState = await validateSignedState(state, env.SESSION_SECRET);
      if (!isValidState) {
        return renderPostMessageHtml(
          "error",
          { error: "Invalid or expired authentication session state. Please try logging in again." },
          cmsOrigin
        );
      }

      // Server-side code exchange with GitHub
      try {
        const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "LizzdoMedia-OAuth-Worker/1.0"
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code: code,
            redirect_uri: `${oauthBaseUrl}/callback`
          })
        });

        if (!tokenResponse.ok) {
          return renderPostMessageHtml(
            "error",
            { error: "Failed to exchange authorization code with GitHub." },
            cmsOrigin
          );
        }

        const tokenData = await tokenResponse.json() as {
          access_token?: string;
          error?: string;
          error_description?: string;
          token_type?: string;
          scope?: string;
        };

        if (tokenData.error || !tokenData.access_token) {
          return renderPostMessageHtml(
            "error",
            { error: tokenData.error_description || tokenData.error || "GitHub rejected the token exchange request." },
            cmsOrigin
          );
        }

        const accessToken = tokenData.access_token;

        // Optional User Allowlist Check
        if (env.ALLOWED_USERS && env.ALLOWED_USERS.trim().length > 0) {
          const allowedList = env.ALLOWED_USERS.split(",").map(u => u.trim().toLowerCase());
          
          const userResponse = await fetch("https://api.github.com/user", {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Accept": "application/vnd.github.v3+json",
              "User-Agent": "LizzdoMedia-OAuth-Worker/1.0"
            }
          });

          if (userResponse.ok) {
            const userData = await userResponse.json() as { login?: string };
            const login = userData.login?.toLowerCase();
            if (!login || !allowedList.includes(login)) {
              return renderPostMessageHtml(
                "error",
                { error: `Access denied. GitHub user @${userData.login || "unknown"} is not authorized to edit this CMS.` },
                cmsOrigin
              );
            }
          }
        }

        // Return the clean handshake to Decap CMS
        return renderPostMessageHtml("success", { token: accessToken, provider: "github" }, cmsOrigin);

      } catch (err) {
        return renderPostMessageHtml(
          "error",
          { error: "An unexpected communication error occurred during token exchange." },
          cmsOrigin
        );
      }
    }

    // -------------------------------------------------------------------------
    // 4. Default / Not Found
    // -------------------------------------------------------------------------
    return new Response(
      JSON.stringify({
        error: "Not Found",
        message: "Lizzdo Media OAuth Proxy Endpoint. Use /auth or /health."
      }),
      {
        status: 404,
        headers: {
          ...Object.fromEntries(getSecurityHeaders().entries()),
          "Content-Type": "application/json"
        }
      }
    );
  }
};
