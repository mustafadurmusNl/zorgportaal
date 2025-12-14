import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import type { Locale } from "@/i18n/request";
import PageRenderer from "@/components/PageRenderer";
import { NotFoundPage } from "@/components/sections";
import { UnifiedPageProvider } from "@/contexts/UnifiedPageContext";

// Define valid about us pages (Dutch URLs only)
const VALID_ABOUT_PAGES = ["locaties", "team", "kwaliteit"] as const;

type ValidAboutPage = (typeof VALID_ABOUT_PAGES)[number];

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface AboutUsPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  const { slug, locale } = await params;

  // Validate locale first
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/over-ons/${slug}`);
  }

  // Validate slug parameter
  if (!VALID_ABOUT_PAGES.includes(slug as ValidAboutPage)) {
    return <NotFoundPage />;
  }

  console.log(`🎯 Route: /${locale}/over-ons/${slug}`);

  // Load messages for unified context
  const messages = await getMessages({ locale });

  // Prepare unified page data with consistent naming
  const pageData = {
    section: "over-ons" as const,
    slug,
    locale: locale as Locale,
    messages,
  };

  return (
    <div className="min-h-screen">
      <UnifiedPageProvider data={pageData}>
        <PageRenderer section="over-ons" slug={slug} />
      </UnifiedPageProvider>
    </div>
  );
}

// Temporarily disable static params to test dynamic routing
// export async function generateStaticParams() {
//   const params = [];

//   // Generate params for all valid pages (Dutch URLs only)
//   for (const slug of VALID_ABOUT_PAGES) {
//     for (const locale of LOCALES) {
//       params.push({
//         slug,
//         locale,
//       });
//     }
//   }

//   return params;
// }

// Generate metadata with i18n support
export async function generateMetadata({ params }: AboutUsPageProps) {
  const { slug, locale } = await params;

  // Use standard getMessages pattern
  const messages = await getMessages({ locale });

  // Get page-specific translations
  const pageData = messages["over-ons"]?.[slug as ValidAboutPage];
  const siteData = messages.site;

  // Fallback titles if page data is not available
  const fallbackTitles: Record<string, { nl: string; en: string }> = {
    locaties: { nl: "Onze locaties", en: "Our Locations" },
    team: { nl: "Ons team", en: "Our Team" },
    kwaliteit: { nl: "Kwaliteit", en: "Quality" },
  };

  const title = pageData?.title || fallbackTitles[slug]?.[locale as Locale];
  const description = pageData?.subtitle || pageData?.description;

  return {
    title: `${title} | Groeipunt`,
    description: description || siteData.description,
    alternates: {
      canonical: `/${locale}/over-ons/${slug}`,
      languages: {
        nl: `/nl/over-ons/${slug}`,
        en: `/en/over-ons/${slug}`,
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
