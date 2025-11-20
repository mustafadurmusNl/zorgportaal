import { redirect } from "next/navigation";
import type { Locale } from "@/i18n/request";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface OverOnsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function OverOnsPage({ params }: OverOnsPageProps) {
  const { locale } = await params;

  // Validate locale
  if (!LOCALES.includes(locale as Locale)) {
    redirect("/nl/over-ons");
  }

  // Redirect to locations page as default
  redirect(`/${locale}/over-ons/locaties`);
}

export async function generateMetadata({ params }: OverOnsPageProps) {
  const { locale } = await params;

  // Import messages dynamically based on locale
  let messages;
  try {
    messages = (await import(`../../../../messages/${locale}.json`)).default;
  } catch (e) {
    messages = (await import(`../../../../messages/nl.json`)).default;
  }

  const aboutData = messages["over-ons"];
  const siteData = messages.site;

  return {
    title: `${aboutData?.title || "Over ons"} | Groeipunt`,
    description: aboutData?.description || siteData.description,
    alternates: {
      canonical: `/${locale}/over-ons`,
      languages: {
        nl: `/nl/over-ons`,
        en: `/en/over-ons`,
      },
    },
  };
}
