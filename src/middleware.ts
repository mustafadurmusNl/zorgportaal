import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["nl", "en"],

  // Used when no locale matches
  defaultLocale: "nl",

  // Always show default locale in URL
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect old /angst URLs to new /zorgaanbod/angst
  if (pathname === "/nl/angst" || pathname === "/en/angst") {
    const locale = pathname.startsWith("/nl") ? "nl" : "en";
    const newUrl = new URL(`/${locale}/zorgaanbod/angst`, request.url);
    return NextResponse.redirect(newUrl, 301); // Permanent redirect
  }

  // Apply internationalization middleware
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(nl|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|api|.*\\..*).*))",
  ],
};
