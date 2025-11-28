"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Fallback content for when translations are not available
const FALLBACK_CONTENT = {
  nl: {
    title: "Oops, deze pagina is niet gevonden",
    subtitle: "Waar ben je naar op zoek?",
    suggestions: {
      zorg: { text: "Passende GGZ-zorg? Bekijk ons", link: "zorgaanbod" },
      wachttijden: {
        text: "Actuele wachttijden? Je vindt ze op de",
        link: "wachttijdenpagina",
      },
      locaties: { text: "Locatiegegevens? Bekijk onze", link: "locaties" },
    },
    contact: {
      text: "Kom je er niet uit? Neem gerust",
      link: "contact",
      suffix: " met ons op!",
    },
    buttons: { goBack: "Ga terug", goHome: "Naar homepage" },
  },
  en: {
    title: "Oops, this page was not found",
    subtitle: "What are you looking for?",
    suggestions: {
      zorg: {
        text: "Appropriate mental health care? Check our",
        link: "care programs",
      },
      wachttijden: {
        text: "Current waiting times? You can find them on the",
        link: "waiting times page",
      },
      locaties: { text: "Location information? Check our", link: "locations" },
    },
    contact: {
      text: "Can't figure it out? Feel free to",
      link: "contact",
      suffix: " us!",
    },
    buttons: { goBack: "Go back", goHome: "Go to homepage" },
  },
};

type TranslationFunction = (key: string) => string;

export default function NotFoundPage() {
  const router = useRouter();

  // Always call hooks at the top level
  let t: TranslationFunction;
  let currentLocale = "nl";

  try {
    const translations = useTranslations("notFound");
    t = (key: string) => translations(key);
    // Use router to get current locale to avoid hydration mismatch
    // Default to 'nl' to prevent hydration issues
    currentLocale = "nl";
  } catch {
    // Fallback to hardcoded content
    t = (key: string) => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any =
        FALLBACK_CONTENT[currentLocale as keyof typeof FALLBACK_CONTENT];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    };
  }

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full font-bold text-xl mb-8 shadow-lg">
          404
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {t("title")}
        </h1>

        {/* Subheading */}
        <h2 className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          {t("subtitle")}
        </h2>

        {/* Navigation suggestions */}
        <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">
              {t("suggestions.zorg.text")}{" "}
              <Link
                href="/nl/zorgaanbod/angst"
                className="text-pink-500 hover:text-pink-600 font-medium"
              >
                {t("suggestions.zorg.link")}
              </Link>
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">
              {t("suggestions.wachttijden.text")}{" "}
              <Link
                href="/nl/clienten/wachttijden"
                className="text-pink-500 hover:text-pink-600 font-medium"
              >
                {t("suggestions.wachttijden.link")}
              </Link>
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">
              {t("suggestions.locaties.text")}{" "}
              <Link
                href="/#locaties"
                className="text-pink-500 hover:text-pink-600 font-medium"
              >
                {t("suggestions.locaties.link")}
              </Link>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            {t("contact.text")}{" "}
            <a
              href="mailto:info@groeipunt.nl"
              className="text-pink-500 hover:text-pink-600 font-medium"
            >
              {t("contact.link")}
            </a>
            {t("contact.suffix")}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleGoBack}
            variant="outline"
            className="px-8 py-3 border-pink-500 text-pink-500 hover:bg-pink-50"
          >
            {t("buttons.goBack")}
          </Button>

          <Button
            onClick={handleGoHome}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white"
          >
            {t("buttons.goHome")}
          </Button>
        </div>
      </div>
    </div>
  );
}
