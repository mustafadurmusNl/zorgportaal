import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import type { Locale } from "@/i18n/request";
import { PageRenderer } from "@/components";
import type { Metadata } from "next";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ZorgaanbodIndexProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ZorgaanbodIndex({
  params,
}: ZorgaanbodIndexProps) {
  const { locale } = await params;

  // Validate locale first
  if (!LOCALES.includes(locale as Locale)) {
    redirect(`/nl/zorgaanbod`);
  }

  console.log(`🎯 Route: /${locale}/zorgaanbod`);

  // Load messages for the page
  const messages = await getMessages({ locale });

  return (
    <div className="min-h-screen">
      <PageRenderer
        pageType="zorgaanbod-overview"
        page="overview"
        locale={locale}
        messages={messages}
      />
    </div>
  );
}

// Generate metadata with i18n support
export async function generateMetadata({
  params,
}: ZorgaanbodIndexProps): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "nl" ? "Zorgaanbod - Groeipunt" : "Our Treatments - Groeipunt";
  const description =
    locale === "nl"
      ? "Ontdek ons behandelaanbod voor verschillende psychische klachten. Professionele zorg door ervaren psychologen."
      : "Discover our treatment options for various mental health concerns. Professional care by experienced psychologists.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/zorgaanbod`,
      languages: {
        nl: `/nl/zorgaanbod`,
        en: `/en/zorgaanbod`,
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

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}
