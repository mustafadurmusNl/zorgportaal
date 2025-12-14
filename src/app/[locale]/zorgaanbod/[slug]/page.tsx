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
import { UnifiedPageProvider } from "@/contexts/UnifiedPageContext";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ZorgaanbodPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function ZorgaanbodPage({ params }: ZorgaanbodPageProps) {
  const { slug, locale } = await params;

  console.log(`🎯 Route: /${locale}/zorgaanbod/${slug}`);

  // Validate slug
  if (!VALID_CATEGORIES.includes(slug as ValidCategory)) {
    console.log(`❌ Invalid slug: ${slug}`);
    notFound();
  }

  // Validate locale - if it's not supported, redirect to default locale
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/zorgaanbod/${slug}`);
  }

  // Load data server-side
  const heroImage = getStaticImageByCategory(slug);
  const messages = await getMessages({ locale });

  // Prepare unified page data with consistent naming
  const pageData = {
    section: "zorgaanbod" as const,
    slug,
    locale: locale as Locale,
    messages,
    heroImage,
  };

  return (
    <div className="min-h-screen">
      <UnifiedPageProvider data={pageData}>
        <PageRenderer section="zorgaanbod" slug={slug} />
      </UnifiedPageProvider>
    </div>
  );
}

// Generate static params for all valid slugs and locales
export async function generateStaticParams() {
  const params = [];

  for (const slug of VALID_CATEGORIES) {
    for (const locale of ["nl", "en"]) {
      params.push({
        slug,
        locale,
      });
    }
  }

  return params;
}

// Generate metadata with i18n support
export async function generateMetadata({ params }: ZorgaanbodPageProps) {
  const { slug, locale } = await params;

  // Use centralized message loading
  const messages = await getMessages({ locale });

  // Fallback titles if data is not available
  const fallbackTitles: Record<string, { nl: string; en: string }> = {
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
    slug,
    slug,
    locale as Locale,
    fallbackTitles
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/zorgaanbod/${slug}`,
      languages: {
        nl: `/nl/zorgaanbod/${slug}`,
        en: `/en/zorgaanbod/${slug}`,
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
