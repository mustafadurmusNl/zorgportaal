import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import type { Locale } from "@/i18n/request";
import PageRenderer from "@/components/PageRenderer";
import { NotFoundPage } from "@/components/sections";
import { getPageMetadata } from "@/lib/i18n-utils";
import { UnifiedPageProvider } from "@/contexts/UnifiedPageContext";

// Define valid client pages
const VALID_CLIENT_PAGES = [
  "voor-wie",
  "intake-behandelplan",
  "wachttijden",
  "vergoeding",
] as const;
type ValidClientPage = (typeof VALID_CLIENT_PAGES)[number];

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ClientPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function ClientPage({ params }: ClientPageProps) {
  const { slug, locale } = await params;

  // Validate locale first
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/clienten/${slug}`);
  }

  // If slug is not valid, show custom NotFound page instead of generic 404
  if (!VALID_CLIENT_PAGES.includes(slug as ValidClientPage)) {
    return <NotFoundPage />;
  }

  console.log(`🎯 Route: /${locale}/clienten/${slug}`);

  // Load messages for unified context
  const messages = await getMessages({ locale });

  // Prepare unified page data with consistent naming
  const pageData = {
    section: "clienten" as const,
    slug,
    locale: locale as Locale,
    messages,
  };

  return (
    <div className="min-h-screen">
      <UnifiedPageProvider data={pageData}>
        <PageRenderer section="clienten" slug={slug} />
      </UnifiedPageProvider>
    </div>
  );
}

// Generate static params for known client pages and locales
export async function generateStaticParams() {
  const params = [];

  for (const slug of VALID_CLIENT_PAGES) {
    for (const locale of LOCALES) {
      params.push({
        slug,
        locale,
      });
    }
  }

  return params;
}

// Generate metadata with i18n support
export async function generateMetadata({ params }: ClientPageProps) {
  const { slug, locale } = await params;

  // Use centralized message loading with correct Next.js function
  const messages = await getMessages({ locale });

  // Fallback titles if page data is not available
  const fallbackTitles: Record<string, { nl: string; en: string }> = {
    "voor-wie": { nl: "Voor wie", en: "For Whom" },
    "intake-behandelplan": {
      nl: "Intake & Behandelplan",
      en: "Intake & Treatment Plan",
    },
    wachttijden: { nl: "Actuele wachttijden", en: "Current Waiting Times" },
    vergoeding: { nl: "Vergoeding", en: "Reimbursement" },
  };

  const { title, description } = getPageMetadata(
    messages,
    "clienten",
    slug as ValidClientPage,
    locale as Locale,
    fallbackTitles
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/clienten/${slug}`,
      languages: {
        nl: `/nl/clienten/${slug}`,
        en: `/en/clienten/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}
