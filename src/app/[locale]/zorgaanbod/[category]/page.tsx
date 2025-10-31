import { getStaticImageByCategory } from "@/lib/staticImages";
import { notFound, redirect } from "next/navigation";
import CategoryPageRenderer from "@/components/CategoryPageRenderer";
import type { Locale } from "@/i18n/request";

// Define valid categories
const VALID_CATEGORIES = [
  "angst",
  "depressie",
  "adhd",
  "trauma",
  "burnout",
  "somatiek",
  "zelfbeeld",
  "persoonlijkheid",
] as const;
type ValidCategory = (typeof VALID_CATEGORIES)[number];

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ZorgaanbodPageProps {
  params: Promise<{
    category: string;
    locale: string;
  }>;
}

export default async function ZorgaanbodPage({ params }: ZorgaanbodPageProps) {
  const { category, locale } = await params;

  // Validate category
  if (!VALID_CATEGORIES.includes(category as ValidCategory)) {
    notFound();
  }

  // Validate locale - if it's not supported, redirect to default locale
  if (!LOCALES.includes(locale as Locale)) {
    // Redirect to default locale (nl)
    redirect(`/nl/zorgaanbod/${category}`);
  }

  console.log(`🎯 Dynamic route: /${locale}/zorgaanbod/${category}`);

  // Get static image for category
  const heroImage = getStaticImageByCategory(category);

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - NO CONFIG NEEDED */}
      <CategoryPageRenderer category={category} heroImage={heroImage} />
    </div>
  );
}

// Generate static params for known categories and locales
export async function generateStaticParams() {
  const params = [];

  for (const category of VALID_CATEGORIES) {
    for (const locale of LOCALES) {
      params.push({
        category,
        locale,
      });
    }
  }

  return params;
}

// Generate metadata with i18n support
export async function generateMetadata({ params }: ZorgaanbodPageProps) {
  const { category, locale } = await params;

  // Import messages dynamically based on locale. If the locale file is missing
  // fall back to the default Dutch messages to avoid server errors.
  let messages;
  try {
    // Try to load the requested locale
    messages = (await import(`../../../../../messages/${locale}.json`)).default;
  } catch (e) {
    // Fallback to Dutch messages
    messages = (await import(`../../../../../messages/nl.json`)).default;
  }

  // Get category-specific translations
  const categoryData = messages[category as ValidCategory];
  const siteData = messages.site;

  // Fallback titles if category data is not available
  const categoryTitles: Record<string, { nl: string; en: string }> = {
    angst: { nl: "Angst", en: "Anxiety" },
    depressie: { nl: "Depressie", en: "Depression" },
    adhd: { nl: "ADHD", en: "ADHD" },
    trauma: { nl: "Trauma & PTSS", en: "Trauma & PTSD" },
    burnout: { nl: "Burnout", en: "Burnout" },
    somatiek: { nl: "Somatiek & Psyche", en: "Somatic & Psych" },
    zelfbeeld: { nl: "Zelfbeeldproblematiek", en: "Self-image issues" },
    persoonlijkheid: {
      nl: "Persoonlijkheidsproblematiek",
      en: "Personality issues",
    },
  };

  const title =
    categoryData?.title || categoryTitles[category]?.[locale as Locale];
  const description = categoryData?.subtitle || categoryData?.description;

  return {
    title: `${title} | Zorgportaal`,
    description: description || siteData.description,
    alternates: {
      canonical: `/${locale}/zorgaanbod/${category}`,
      languages: {
        nl: `/nl/zorgaanbod/${category}`,
        en: `/en/zorgaanbod/${category}`,
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
