import { getStaticImageByCategory } from "@/lib/staticImages";
import { notFound, redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import PageRenderer from "@/components/PageRenderer";
import type { Locale } from "@/i18n/request";
import {
  getPageMetadata,
  VALID_CATEGORIES,
  ValidCategory,
} from "@/lib/i18n-utils";
import { ZorgaanbodProvider } from "@/contexts/ZorgaanbodContext";

// Valid categories imported from utilities

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ZorgaanbodPageProps {
  params: Promise<{
    category: string;
    locale: string;
  }>;
}

export default async function ZorgaanbodPage({ params }: ZorgaanbodPageProps) {
  console.log("🚀 ZorgaanbodPage called with params:", await params);

  const { category, locale } = await params;

  console.log(
    `🔍 DEBUG: category=${category}, locale=${locale}, valid=${VALID_CATEGORIES.includes(
      category as ValidCategory
    )}`
  );

  // Validate category
  if (!VALID_CATEGORIES.includes(category as ValidCategory)) {
    console.log(`❌ Invalid category: ${category}`);
    notFound();
  }

  // Validate locale - if it's not supported, redirect to default locale
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/zorgaanbod/${category}`);
  }

  console.log(`🎯 Dynamic route: /${locale}/zorgaanbod/${category}`);

  // Load data server-side
  const heroImage = getStaticImageByCategory(category);
  const messages = await getMessages({ locale });

  // Prepare data for context
  const zorgaanbodData = {
    category,
    locale: locale as Locale,
    heroImage,
    messages,
  };

  return (
    <div className="min-h-screen">
      <ZorgaanbodProvider data={zorgaanbodData}>
        <PageRenderer pageType="category" page={category} />
      </ZorgaanbodProvider>
    </div>
  );
}

// Generate static params for all valid categories and locales
export async function generateStaticParams() {
  const params = [];

  for (const category of VALID_CATEGORIES) {
    for (const locale of ["nl", "en"]) {
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

  // Use centralized message loading
  const messages = await getMessages({ locale });

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

  const { title, description } = getPageMetadata(
    messages,
    category,
    category,
    locale as Locale,
    categoryTitles
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/zorgaanbod/${category}`,
      languages: {
        nl: `/nl/zorgaanbod/${category}`,
        en: `/en/zorgaanbod/${category}`,
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
