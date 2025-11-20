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

  // FIRST: Check for invalid locale patterns like /nlxxx, /enxxx etc
  // This must be done BEFORE intlMiddleware to prevent auto-redirects
  const localeMatch = pathname.match(/^\/([a-zA-Z]{2,})/);
  if (localeMatch) {
    const potentialLocale = localeMatch[1];
    const validLocales = ["nl", "en"];

    // If the path looks like a locale but isn't valid, trigger not-found
    if (!validLocales.includes(potentialLocale)) {
      console.log(
        `🚫 Invalid locale detected: ${potentialLocale} for path: ${pathname}`
      );
      // Return styled 404 page immediately, don't let intlMiddleware handle it
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }
  }

  // For valid locales, check if path exists by defining valid routes
  const validRoutes = [
    "/",
    // Dutch routes (will be rewritten to English folders)
    "/zorgaanbod",
    "/zorgaanbod/angst",
    "/zorgaanbod/depressie",
    "/zorgaanbod/adhd",
    "/zorgaanbod/trauma",
    "/zorgaanbod/burnout",
    "/zorgaanbod/somatiek",
    "/zorgaanbod/zelfbeeld",
    "/zorgaanbod/persoonlijkheid",
    "/over-ons",
    "/over-ons/locaties",
    "/over-ons/team",
    "/over-ons/kwaliteit",
    // English routes (direct to folders)
    "/about",
    "/about/locations",
    "/about/team",
    "/about/quality",
    "/services",
    "/services/anxiety",
    "/services/depression",
    "/services/adhd",
    "/services/trauma",
    "/services/burnout",
    "/services/somatic",
    "/services/self-image",
    "/services/personality",
    // Universal routes
    "/clienten",
    "/clienten/voor-wie",
    "/clienten/wachttijden",
    "/contact",
  ];

  // Extract the path after locale
  const localePathMatch = pathname.match(/^\/(nl|en)(\/.*)?$/);
  if (localePathMatch) {
    const locale = localePathMatch[1];
    const pathAfterLocale = localePathMatch[2] || "/";

    // Check if this is a valid route
    const isValidRoute = validRoutes.some(
      (route) =>
        pathAfterLocale === route || pathAfterLocale.startsWith(route + "/")
    );

    if (!isValidRoute && pathAfterLocale !== "/") {
      console.log(`🚫 Invalid route detected: ${locale}${pathAfterLocale}`);
      // Rewrite to locale-specific not-found
      return NextResponse.rewrite(
        new URL(`/${locale}/not-found-internal`, request.url)
      );
    }
  }

  // Apply internationalization middleware for valid paths only
  return intlMiddleware(request);
}

export const config = {
  // Match all paths except static files and API routes
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Match all paths that could be locale-like (including invalid ones like /nlxxx)
    "/((?!_next|_vercel|api|favicon|.*\\..*).*)",
  ],
};
