import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["nl", "en"],

  // Used when no locale matches
  defaultLocale: "nl",

  // Always show default locale in URL
  localePrefix: "always",
});

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
