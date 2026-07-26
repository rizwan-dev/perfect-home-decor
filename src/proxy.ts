import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HTTP Basic auth for /admin/*.
 *
 * Kept deliberately self-contained: proxy runs before rendering and may be
 * deployed to the CDN edge, so it must not import shared app modules.
 */
export const config = {
  matcher: "/admin/:path*",
};

const REALM = 'Basic realm="Perfect Home Decor admin", charset="UTF-8"';

/**
 * /admin is reachable on the deployment host (*.vercel.app) and locally, but
 * not on the public domain — a crawler of perfecthomedecor.in never sees that
 * the path exists.
 *
 * This is attack-surface reduction, not a security control. The *.vercel.app
 * hostname is discoverable via certificate transparency logs, so ADMIN_PASSWORD
 * is still the only thing actually guarding this page. Treat it accordingly.
 *
 * Override with ADMIN_ALLOWED_HOSTS (comma-separated) if the admin panel should
 * also answer on a specific hostname, e.g. admin.perfecthomedecor.in.
 */
function isAdminHostAllowed(hostHeader: string | null): boolean {
  const host = (hostHeader ?? "").toLowerCase().split(":")[0];
  if (!host) return false;
  if (host === "localhost" || host === "127.0.0.1") return true;
  if (host === "vercel.app" || host.endsWith(".vercel.app")) return true;
  const extra = (process.env.ADMIN_ALLOWED_HOSTS ?? "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  return extra.includes(host);
}

/** Indistinguishable from a route that was never deployed. */
function notFound(): NextResponse {
  return new NextResponse("This page could not be found.", {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

/** Length-independent comparison, so response time doesn't leak the password. */
function credentialsMatch(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  const n = Math.max(x.length, y.length);
  for (let i = 0; i < n; i++) {
    diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  }
  return diff === 0;
}

function challenge(): NextResponse {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": REALM,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export function proxy(request: NextRequest) {
  // Host gate runs before the auth challenge, so the public domain never even
  // returns a 401 — a 401 would confirm the path exists.
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!isAdminHostAllowed(host)) return notFound();

  const expectedUser = process.env.ADMIN_USER?.trim() || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD?.trim();

  // Fail closed. An unset password must mean "unreachable", never "open" —
  // this page lists customer names and phone numbers.
  if (!expectedPass) {
    console.error("[admin] ADMIN_PASSWORD is not set — refusing access");
    return new NextResponse(
      "Admin access is not configured on this deployment.",
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const header = request.headers.get("authorization") ?? "";
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return challenge();

  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return challenge();
  }

  // Split on the first colon only: passwords may contain colons.
  const sep = decoded.indexOf(":");
  if (sep === -1) return challenge();

  const okUser = credentialsMatch(decoded.slice(0, sep), expectedUser);
  const okPass = credentialsMatch(decoded.slice(sep + 1), expectedPass);
  if (!okUser || !okPass) return challenge();

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store");
  return res;
}
