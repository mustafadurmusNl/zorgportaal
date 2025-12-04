// src/components/pages/ZorgaanbodOverviewPage.tsx
"use client";

import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui";

interface ZorgaanbodOverviewPageProps {
  locale?: string;
  messages?: Record<string, unknown>;
}

const ZorgaanbodOverviewPage = ({ locale }: ZorgaanbodOverviewPageProps) => {
  const router = useRouter();
  const params = useParams();
  const currentLocale = locale || (params.locale as string) || "nl";

  const categories = [
    {
      key: "angst",
      title: currentLocale === "nl" ? "Angst" : "Anxiety",
      description:
        currentLocale === "nl"
          ? "Behandeling voor verschillende vormen van angst en paniekklachten"
          : "Treatment for various forms of anxiety and panic disorders",
      href: `/${currentLocale}/zorgaanbod/angst`,
      icon: "🧠",
      color: "from-blue-500 to-indigo-600",
    },
    {
      key: "depressie",
      title: currentLocale === "nl" ? "Depressie" : "Depression",
      description:
        currentLocale === "nl"
          ? "Professionele hulp bij depressieve klachten en stemmingsstoornissen"
          : "Professional help for depression and mood disorders",
      href: `/${currentLocale}/zorgaanbod/depressie`,
      icon: "☀️",
      color: "from-orange-500 to-red-500",
    },
    {
      key: "adhd",
      title: "ADHD",
      description:
        currentLocale === "nl"
          ? "Diagnostiek en behandeling van ADHD bij volwassenen"
          : "Diagnosis and treatment of ADHD in adults",
      href: `/${currentLocale}/zorgaanbod/adhd`,
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      key: "trauma",
      title: currentLocale === "nl" ? "Trauma" : "Trauma",
      description:
        currentLocale === "nl"
          ? "Traumabehandeling met EMDR en andere evidence-based therapieën"
          : "Trauma treatment with EMDR and other evidence-based therapies",
      href: `/${currentLocale}/zorgaanbod/trauma`,
      icon: "🌱",
      color: "from-green-500 to-teal-600",
    },
    {
      key: "somatiek",
      title: currentLocale === "nl" ? "Somatiek" : "Somatic Issues",
      description:
        currentLocale === "nl"
          ? "Hulp bij lichamelijke klachten zonder medische oorzaak"
          : "Help with physical complaints without medical cause",
      href: `/${currentLocale}/zorgaanbod/somatiek`,
      icon: "💆",
      color: "from-purple-500 to-pink-600",
    },
    {
      key: "zelfbeeld",
      title: currentLocale === "nl" ? "Zelfbeeld" : "Self-Image",
      description:
        currentLocale === "nl"
          ? "Verbeteren van zelfvertrouwen en een positief zelfbeeld"
          : "Improving self-confidence and positive self-image",
      href: `/${currentLocale}/zorgaanbod/zelfbeeld`,
      icon: "✨",
      color: "from-pink-500 to-rose-500",
    },
    {
      key: "persoonlijkheid",
      title: currentLocale === "nl" ? "Persoonlijkheid" : "Personality",
      description:
        currentLocale === "nl"
          ? "Behandeling van persoonlijkheidsproblematiek en gedragspatronen"
          : "Treatment of personality issues and behavioral patterns",
      href: `/${currentLocale}/zorgaanbod/persoonlijkheid`,
      icon: "🎭",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="mr-2">🏥</span>
              {currentLocale === "nl"
                ? "Professionele Zorgverlening"
                : "Professional Healthcare"}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {currentLocale === "nl" ? "Ons Zorgaanbod" : "Our Care Services"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentLocale === "nl"
                ? "Ontdek onze uitgebreide behandelmogelijkheden voor mentale gezondheid. Professionele begeleiding door ervaren psychologen en therapeuten."
                : "Discover our comprehensive mental health treatment options. Professional guidance by experienced psychologists and therapists."}
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.key}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Card Content */}
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Button
                  variant="healthcare-outline"
                  onClick={() => router.push(category.href)}
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    {currentLocale === "nl" ? "Meer informatie" : "Learn more"}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-600">
                {currentLocale === "nl" ? "Jaar ervaring" : "Years experience"}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600">
                {currentLocale === "nl"
                  ? "Behandelde cliënten"
                  : "Treated clients"}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-gray-600">
                {currentLocale === "nl" ? "Specialisaties" : "Specializations"}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600">
                {currentLocale === "nl" ? "Tevredenheid" : "Satisfaction"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {currentLocale === "nl"
                  ? "Klaar om de eerste stap te zetten?"
                  : "Ready to take the first step?"}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {currentLocale === "nl"
                  ? "Neem contact met ons op voor een vrijblijvend gesprek. Samen kijken we naar de beste behandeling voor uw situatie."
                  : "Contact us for a no-obligation consultation. Together we'll look at the best treatment for your situation."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={() => router.push(`/${currentLocale}/contact`)}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 shadow-lg"
                >
                  <span className="flex items-center">
                    <span className="mr-2">📞</span>
                    {currentLocale === "nl"
                      ? "Contact opnemen"
                      : "Get in touch"}
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() =>
                    router.push(`/${currentLocale}/clienten/wachttijden`)
                  }
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4"
                >
                  <span className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    {currentLocale === "nl"
                      ? "Wachttijden bekijken"
                      : "View waiting times"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZorgaanbodOverviewPage;
