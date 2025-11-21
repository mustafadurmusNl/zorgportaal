import { redirect } from "next/navigation";
import type { Locale } from "@/i18n/request";
import { AboutUsPageRenderer } from "@/components";
import { NotFoundPage } from "@/components/sections";

// Define valid about us pages (Dutch URLs only)
const VALID_ABOUT_PAGES = ["locaties", "team", "kwaliteit"] as const;

type ValidAboutPage = (typeof VALID_ABOUT_PAGES)[number];

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface AboutUsPageProps {
  params: Promise<{
    page: string;
    locale: string;
  }>;
}

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  const { page, locale } = await params;

  // Validate locale first
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/over-ons/${page}`);
  }

  // Validate page parameter
  if (!VALID_ABOUT_PAGES.includes(page as ValidAboutPage)) {
    return <NotFoundPage />;
  }

  console.log(`🎯 Dynamic route: /${locale}/over-ons/${page}`);

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - Use page directly */}
      <AboutUsPageRenderer page={page} />
    </div>
  );
}

// Temporarily disable static params to test dynamic routing
// export async function generateStaticParams() {
//   const params = [];

//   // Generate params for all valid pages (Dutch URLs only)
//   for (const page of VALID_ABOUT_PAGES) {
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
export async function generateMetadata({ params }: AboutUsPageProps) {
  const { page, locale } = await params;

  // Import messages dynamically based on locale
  let messages;
  try {
    messages = (await import(`../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../../messages/nl.json`)).default;
  }

  // Get page-specific translations
  const pageData = messages["over-ons"]?.[page as ValidAboutPage];
  const siteData = messages.site;

  // Fallback titles if page data is not available
  const pageTitles: Record<string, { nl: string; en: string }> = {
    locaties: { nl: "Onze locaties", en: "Our Locations" },
    team: { nl: "Ons team", en: "Our Team" },
    kwaliteit: { nl: "Kwaliteit", en: "Quality" },
  };

  const title = pageData?.title || pageTitles[page]?.[locale as Locale];
  const description = pageData?.subtitle || pageData?.description;

  return {
    title: `${title} | Groeipunt`,
    description: description || siteData.description,
    alternates: {
      canonical: `/${locale}/over-ons/${page}`,
      languages: {
        nl: `/nl/over-ons/${page}`,
        en: `/en/over-ons/${page}`,
      },
    },
    openGraph: {
      title: `${title} | Groeipunt`,
      description: description || siteData.description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}
