import { getStaticImageByCategory } from "@/lib/staticImages";
import { notFound, redirect } from "next/navigation";
import CategoryPageRenderer from "@/components/CategoryPageRenderer";
import type { Locale } from "@/i18n/request";

// Define valid categories with language mapping
const VALID_CATEGORIES = {
  // Dutch categories
  angst: "angst",
  depressie: "depressie",
  adhd: "adhd",
  trauma: "trauma",
  burnout: "burnout",
  somatiek: "somatiek",
  zelfbeeld: "zelfbeeld",
  persoonlijkheid: "persoonlijkheid",
  // English categories (mapped to Dutch keys for component rendering)
  anxiety: "angst",
  depression: "depressie",
  somatic: "somatiek",
  "self-image": "zelfbeeld",
  personality: "persoonlijkheid",
} as const;

type ValidCategoryKey = keyof typeof VALID_CATEGORIES;
type ValidCategory = (typeof VALID_CATEGORIES)[ValidCategoryKey];

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

  // Validate category and map to internal category name
  const mappedCategory = VALID_CATEGORIES[category as ValidCategoryKey];

  // If category is not valid, show 404
  if (!mappedCategory) {
    notFound();
  }

  // Validate locale - if it's not supported, redirect to default locale
  if (!LOCALES.includes(locale as Locale)) {
    // Redirect to default locale (nl)
    redirect(`/nl/zorgaanbod/${category}`);
  }

  console.log(
    `🎯 Dynamic route: /${locale}/services/${category} → mapped to: ${mappedCategory}`
  );

  // Get static image for mapped category
  const heroImage = getStaticImageByCategory(mappedCategory);

  return (
    <div className="min-h-screen">
      {/* 🚀 PURE COMPONENT MAPPING - Use mapped category for component rendering */}
      <CategoryPageRenderer category={mappedCategory} heroImage={heroImage} />
    </div>
  );
}

// Generate static params for known categories and locales
export async function generateStaticParams() {
  const params = [];

  // Generate params for all valid category keys (both Dutch and English URLs)
  for (const category of Object.keys(VALID_CATEGORIES) as ValidCategoryKey[]) {
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
