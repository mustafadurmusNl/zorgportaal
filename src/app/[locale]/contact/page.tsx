import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import type { Locale } from "@/i18n/request";
import { ContactPage } from "@/components/pages";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Contact({ params }: ContactPageProps) {
  const { locale } = await params;

  // Validate locale
  if (!LOCALES.includes(locale as Locale)) {
    redirect("/nl/contact");
  }

  console.log(`🎯 Route: /${locale}/contact`);

  return (
    <div className="min-h-screen">
      <ContactPage />
    </div>
  );
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;

  // Use standard getMessages pattern
  const messages = await getMessages({ locale });

  const contactData = messages.contact;
  const siteData = messages.site;

  return {
    title: `${contactData?.title || "Contact"} | Groeipunt`,
    description: contactData?.description || siteData.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        nl: `/nl/contact`,
        en: `/en/contact`,
      },
    },
    openGraph: {
      title: `${contactData?.title || "Contact"} | Groeipunt`,
      description: contactData?.description || siteData.description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}
