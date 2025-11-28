import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import type { Locale } from "@/i18n/request";
import PageRenderer from "@/components/PageRenderer";
import { NotFoundPage } from "@/components/sections";
import { getPageMetadata } from "@/lib/i18n-utils";

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
    page: string;
    locale: string;
  }>;
}

export default async function ClientPage({ params }: ClientPageProps) {
  const { page, locale } = await params;

  // Validate locale first
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/clienten/${page}`);
  }

  // If page is not valid, show custom NotFound page instead of generic 404
  if (!VALID_CLIENT_PAGES.includes(page as ValidClientPage)) {
    return <NotFoundPage />;
  }

  console.log(`🎯 Dynamic route: /${locale}/clienten/${page}`);

  // Load messages for the specific page
  const messages = await getMessages({ locale });
  const pageMessages = messages?.clienten?.[page]; // Use direct key, not replacing dashes

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - NO CONFIG NEEDED */}
      <PageRenderer
        pageType="client"
        page={page}
        locale={locale}
        messages={pageMessages}
      />
    </div>
  );
}

// Generate static params for known client pages and locales
export async function generateStaticParams() {
  const params = [];

  for (const page of VALID_CLIENT_PAGES) {
    for (const locale of LOCALES) {
      params.push({
        page,
        locale,
      });
    }
  }

  return params;
}

// Generate metadata with i18n support
export async function generateMetadata({ params }: ClientPageProps) {
  const { page, locale } = await params;

  // Use centralized message loading with correct Next.js function
  const messages = await getMessages({ locale });

  // Fallback titles if page data is not available
  const pageTitles: Record<string, { nl: string; en: string }> = {
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
    page as ValidClientPage,
    locale as Locale,
    pageTitles
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/clienten/${page}`,
      languages: {
        nl: `/nl/clienten/${page}`,
        en: `/en/clienten/${page}`,
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
