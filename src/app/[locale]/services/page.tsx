import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/request";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

// Category overview data
const CARE_CATEGORIES = [
  {
    id: "angst",
    href: "/zorgaanbod/angst",
    icon: "🧠",
    color: "from-blue-100 to-cyan-100",
    hoverColor: "hover:from-blue-200 hover:to-cyan-200",
  },
  {
    id: "adhd",
    href: "/zorgaanbod/adhd",
    icon: "⚡",
    color: "from-orange-100 to-yellow-100",
    hoverColor: "hover:from-orange-200 hover:to-yellow-200",
  },
  {
    id: "depressie",
    href: "/zorgaanbod/depressie",
    icon: "💙",
    color: "from-purple-100 to-indigo-100",
    hoverColor: "hover:from-purple-200 hover:to-indigo-200",
  },
  {
    id: "persoonlijkheidsproblematiek",
    href: "/zorgaanbod/persoonlijkheid",
    icon: "🎭",
    color: "from-pink-100 to-rose-100",
    hoverColor: "hover:from-pink-200 hover:to-rose-200",
  },
  {
    id: "somatiek",
    href: "/zorgaanbod/somatiek",
    icon: "🔗",
    color: "from-green-100 to-emerald-100",
    hoverColor: "hover:from-green-200 hover:to-emerald-200",
  },
  {
    id: "trauma",
    href: "/zorgaanbod/trauma",
    icon: "🛡️",
    color: "from-red-100 to-pink-100",
    hoverColor: "hover:from-red-200 hover:to-pink-200",
  },
] as const;

interface ZorgaanbodOverviewProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ZorgaanbodOverview({
  params,
}: ZorgaanbodOverviewProps) {
  const { locale } = await params;

  // Validate locale
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  // Import messages dynamically
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = messages.services || {};
  const footerT = messages.footer?.services || {};

  console.log(`🎯 Zorgaanbod overview page: /${locale}/zorgaanbod`);

  return (
    <div className="min-h-screen">
      {/* Spacing from navbar */}
      <div style={{ height: "120px" }}></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              ZORGPROGRAMMA&apos;S
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title || "Ons zorgaanbod"}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            {t.description ||
              "We hebben een ruim aanbod van gespecialiseerde zorgprogramma's. Na de intake stellen wij een diagnose waarna samen met jou de beste aanpak gekozen wordt."}
          </p>
        </div>
      </section>

      {/* Care Categories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARE_CATEGORIES.map((category) => {
              // Get translation for this category
              const categoryTitle = footerT[category.id] || category.id;
              const categoryData = messages[category.id];
              const description =
                categoryData?.subtitle || categoryData?.description;

              return (
                <a
                  key={category.id}
                  href={`/${locale}${category.href}`}
                  className={`group block p-8 rounded-2xl bg-gradient-to-br ${category.color} ${category.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                    {categoryTitle}
                  </h3>

                  {/* Description */}
                  {description && (
                    <p className="text-gray-700 mb-6 line-clamp-3 group-hover:text-gray-600">
                      {description.length > 120
                        ? description.substring(0, 120) + "..."
                        : description}
                    </p>
                  )}

                  {/* Read More Link */}
                  <div className="flex items-center text-pink-600 font-semibold group-hover:text-pink-700">
                    <span className="mr-2">
                      {locale === "en" ? "Read more" : "Lees meer"}
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {locale === "en"
              ? "Need help choosing?"
              : "Hulp nodig bij het kiezen?"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {locale === "en"
              ? "Our specialists are happy to help you find the right care program."
              : "Onze specialisten helpen je graag bij het vinden van het juiste zorgprogramma."}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
          >
            {locale === "en" ? "Contact us" : "Contact opnemen"}
          </a>
        </div>
      </section>
    </div>
  );
}

// Generate static params for locales
export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: ZorgaanbodOverviewProps) {
  const { locale } = await params;

  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const siteData = messages.site;
  const servicesData = messages.services;

  const title =
    servicesData?.title || (locale === "en" ? "Our Care" : "Zorgaanbod");
  const description = servicesData?.description || siteData.description;

  return {
    title: `${title} | Zorgportaal`,
    description: description,
    alternates: {
      canonical: `/${locale}/zorgaanbod`,
      languages: {
        nl: `/nl/zorgaanbod`,
        en: `/en/zorgaanbod`,
      },
    },
    openGraph: {
      title: `${title} | Zorgportaal`,
      description: description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}
