import { redirect } from "next/navigation";
import type { Locale } from "@/i18n/request";
import { ClientPageRenderer } from "@/components";
import { NotFoundPage } from "@/components/sections";

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

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - NO CONFIG NEEDED */}
      <ClientPageRenderer page={page} />
    </div>
  );
}

// Temporarily disable static params to test dynamic routing
// export async function generateStaticParams() {
//   const params = [];

//   for (const page of VALID_CLIENT_PAGES) {
//     for (const locale of LOCALES) {
//       params.push({
//         page,
//         locale,
//       });
//     }
//   }

//   return params;
// }

// Generate metadata with i18n support
export async function generateMetadata({ params }: ClientPageProps) {
  const { page, locale } = await params;

  // Import messages dynamically based on locale
  let messages;
  try {
    messages = (await import(`../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../../messages/nl.json`)).default;
  }

  // Get page-specific translations
  const pageData = messages.clienten?.[page as ValidClientPage];
  const siteData = messages.site;

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

  const title = pageData?.title || pageTitles[page]?.[locale as Locale];
  const description = pageData?.subtitle || pageData?.description;

  return {
    title: `${title} | Zorgportaal`,
    description: description || siteData.description,
    alternates: {
      canonical: `/${locale}/clienten/${page}`,
      languages: {
        nl: `/nl/clienten/${page}`,
        en: `/en/clienten/${page}`,
      },
    },
    openGraph: {
      title: `${title} | Zorgportaal`,
      description: description || siteData.description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}
