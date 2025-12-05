import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// Clean and simple middleware - let Next.js handle routing
const intlMiddleware = createMiddleware({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  // Handle redirect for old wachttijden route
  const { pathname } = request.nextUrl;
  
  // Check if it's the old standalone wachttijden route
  if (pathname === '/nl/wachttijden' || pathname === '/en/wachttijden') {
    const locale = pathname.startsWith('/nl') ? 'nl' : 'en';
    const url = new URL(`/${locale}/clienten/wachttijden`, request.url);
    return NextResponse.redirect(url);
  }
  
  // Only handle internationalization - let Next.js handle all routing
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/((?!_next|_vercel|api|favicon|.*\\..*).*)"],
};
