// src/components/pages/TeamPage.tsx
"use client";

import { useTranslations } from "next-intl";

const TEAM_CATEGORIES = [
  {
    id: "psychologen",
    title: "Psychologen",
    icon: "🧠",
    description:
      "Gespecialiseerd in diagnostiek en behandeling van psychische klachten.",
    count: "15+",
  },
  {
    id: "psychiaters",
    title: "Psychiaters",
    icon: "👨‍⚕️",
    description: "Medisch specialisten voor complexe psychiatrische zorg.",
    count: "8+",
  },
  {
    id: "vaktherapeuten",
    title: "Vaktherapeuten",
    icon: "🎨",
    description: "Creatieve therapieën zoals muziek-, kunst- en dramatherapie.",
    count: "12+",
  },
  {
    id: "orthopedagogen",
    title: "Orthopedagogen",
    icon: "📚",
    description:
      "Specialisten in gedragsproblemen en ontwikkelingsstoornissen.",
    count: "6+",
  },
];

export default function TeamPage() {
  const t = useTranslations("over-ons.team");

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex space-x-2 text-sm">
        <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
          OVER ONS
        </span>
        <span className="text-gray-500">→</span>
        <span className="text-gray-700 font-medium">ONS TEAM</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{t("description")}</p>
      </div>

      {/* Team Stats */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-pink-100">Professionals</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-pink-100">Jaar ervaring</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">9</div>
            <div className="text-pink-100">Locaties</div>
          </div>
        </div>
      </div>

      {/* Team Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{category.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <span className="text-sm font-semibold text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Onze kernwaarden
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              1
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Vakkundigheid</h4>
            <p className="text-sm text-gray-600">
              Hoogopgeleide professionals met continue scholing en
              certificering.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              2
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Empathie</h4>
            <p className="text-sm text-gray-600">
              Warme, persoonlijke benadering met begrip voor ieders situatie.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              3
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Samenwerking</h4>
            <p className="text-sm text-gray-600">
              Multidisciplinaire teams die nauw samenwerken voor optimale zorg.
            </p>
          </div>
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Wil je onderdeel worden van ons team?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We zijn altijd op zoek naar gemotiveerde professionals die onze missie
          delen. Bekijk onze actuele vacatures en ontdek de mogelijkheden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Bekijk vacatures
          </button>
          <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Open sollicitatie
          </button>
        </div>
      </div>
    </div>
  );
}
