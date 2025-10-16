"use client";

import { useTranslations } from "next-intl";
import { Button, Badge } from "@/components/ui";
import Image from "next/image";

// Theme colors for different categories
const CATEGORY_THEMES = {
  anxiety: {
    gradient: "from-blue-50 via-white to-cyan-50",
    badgeVariant: "anxiety" as const,
    buttonGradient:
      "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
    outlineBorder: "border-cyan-500 text-cyan-600",
    fallbackGradient: "from-blue-100 via-cyan-50 to-blue-200",
    particleColors: ["bg-blue-300", "bg-cyan-300", "bg-blue-200"],
    silhouetteColors: [
      "from-blue-200 to-cyan-200",
      "from-blue-100 to-cyan-100",
      "from-cyan-100 to-blue-100",
    ],
  },
  depression: {
    gradient: "from-purple-50 via-white to-indigo-50",
    badgeVariant: "depression" as const,
    buttonGradient:
      "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    outlineBorder: "border-purple-500 text-purple-600",
    fallbackGradient: "from-purple-100 via-indigo-50 to-purple-200",
    particleColors: ["bg-purple-300", "bg-indigo-300", "bg-purple-200"],
    silhouetteColors: [
      "from-purple-200 to-indigo-200",
      "from-purple-100 to-indigo-100",
      "from-indigo-100 to-purple-100",
    ],
  },
  adhd: {
    gradient: "from-green-50 via-white to-emerald-50",
    badgeVariant: "healthcare" as const,
    buttonGradient:
      "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    outlineBorder: "border-green-500 text-green-600",
    fallbackGradient: "from-green-100 via-emerald-50 to-green-200",
    particleColors: ["bg-green-300", "bg-emerald-300", "bg-green-200"],
    silhouetteColors: [
      "from-green-200 to-emerald-200",
      "from-green-100 to-emerald-100",
      "from-emerald-100 to-green-100",
    ],
  },
  trauma: {
    gradient: "from-orange-50 via-white to-amber-50",
    badgeVariant: "healthcare" as const,
    buttonGradient:
      "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
    outlineBorder: "border-orange-500 text-orange-600",
    fallbackGradient: "from-orange-100 via-amber-50 to-orange-200",
    particleColors: ["bg-orange-300", "bg-amber-300", "bg-orange-200"],
    silhouetteColors: [
      "from-orange-200 to-amber-200",
      "from-orange-100 to-amber-100",
      "from-amber-100 to-orange-100",
    ],
  },
  burnout: {
    gradient: "from-red-50 via-white to-rose-50",
    badgeVariant: "healthcare" as const,
    buttonGradient:
      "from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600",
    outlineBorder: "border-red-500 text-red-600",
    fallbackGradient: "from-red-100 via-rose-50 to-red-200",
    particleColors: ["bg-red-300", "bg-rose-300", "bg-red-200"],
    silhouetteColors: [
      "from-red-200 to-rose-200",
      "from-red-100 to-rose-100",
      "from-rose-100 to-red-100",
    ],
  },
} as const;

type CategoryType = keyof typeof CATEGORY_THEMES;

// Category to translation key mapping
const CATEGORY_TO_TRANSLATION_KEY = {
  anxiety: "angst",
  depression: "depressie",
  adhd: "adhd",
  trauma: "trauma",
  burnout: "burnout",
} as const;

// Category to breadcrumb key mapping (for breadcrumb.{key})
const CATEGORY_TO_BREADCRUMB_KEY = {
  anxiety: "anxiety",
  depression: "depression",
  adhd: "adhd",
  trauma: "trauma",
  burnout: "burnout",
} as const;

interface ZorgHeroProps {
  category: CategoryType;
  imageUrl?: string;
  altText?: string;
}

const ZorgHero = ({ category, imageUrl, altText }: ZorgHeroProps) => {
  const translationKey = CATEGORY_TO_TRANSLATION_KEY[category];
  const breadcrumbKey = CATEGORY_TO_BREADCRUMB_KEY[category];
  const t = useTranslations(translationKey);
  const breadcrumbT = useTranslations(`${translationKey}.breadcrumb`);

  const theme = CATEGORY_THEMES[category];

  return (
    <>
      {/* Spacing div to separate from navbar */}
      <div style={{ height: "120px" }}></div>

      <section
        className={`relative min-h-[60vh] bg-gradient-to-br ${theme.gradient}`}
      >
        {/* Split Layout Container */}
        <div
          className="max-w-7xl mx-auto min-h-[60vh]"
          style={{ paddingLeft: "60px", paddingRight: "60px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[60vh] items-center py-12">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <Badge variant={theme.badgeVariant}>
                  {breadcrumbT("clients")}
                </Badge>
                <span className="text-gray-400">→</span>
                <span className="text-gray-600 text-sm">
                  {breadcrumbT("care")}
                </span>
                <span className="text-gray-400">→</span>
                <Badge variant="outline" className={theme.outlineBorder}>
                  {breadcrumbT(breadcrumbKey)}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("title")}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("description")}
              </p>

              <div>
                <Button
                  size="xl"
                  className={`bg-gradient-to-r ${theme.buttonGradient} text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl`}
                  onClick={() => {
                    // Navigate to registration page
                    window.location.href = "/aanmelden";
                  }}
                >
                  {t("cta")}
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-80 lg:h-96">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={altText || `${category} therapy session`}
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                    priority
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${theme.fallbackGradient} rounded-2xl shadow-xl flex items-center justify-center`}
                  >
                    {/* Fallback design with calming elements */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      {/* Therapy session silhouettes */}
                      <div
                        className={`absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r ${theme.silhouetteColors[0]} rounded-full opacity-60 animate-pulse`}
                      ></div>
                      <div
                        className={`absolute top-1/2 left-1/3 w-16 h-32 bg-gradient-to-b ${theme.silhouetteColors[1]} rounded-lg opacity-40`}
                      ></div>
                      <div
                        className={`absolute bottom-1/3 right-1/4 w-20 h-28 bg-gradient-to-b ${theme.silhouetteColors[2]} rounded-lg opacity-40`}
                      ></div>

                      {/* Floating calming particles */}
                      <div
                        className={`absolute top-1/4 right-1/3 w-2 h-2 ${theme.particleColors[0]} rounded-full animate-bounce delay-100 opacity-60`}
                      ></div>
                      <div
                        className={`absolute top-1/2 left-1/4 w-1.5 h-1.5 ${theme.particleColors[1]} rounded-full animate-pulse delay-300 opacity-60`}
                      ></div>
                      <div
                        className={`absolute top-3/4 right-1/2 w-3 h-3 ${theme.particleColors[2]} rounded-full animate-bounce delay-500 opacity-60`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZorgHero;
