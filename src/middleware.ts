import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

// Clean and simple middleware - let Next.js handle routing
const intlMiddleware = createMiddleware({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  // Only handle internationalization - let Next.js handle all routing
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/((?!_next|_vercel|api|favicon|.*\\..*).*)"],
};
