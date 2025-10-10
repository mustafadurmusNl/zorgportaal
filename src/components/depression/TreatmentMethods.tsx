"use client";

import { useTranslations } from "next-intl";
import { CustomButton } from "@/components/ui";

const TreatmentMethods = () => {
  const t = useTranslations("depressie.sections.treatments");

  const treatments = [
    {
      name: "Cognitieve gedragstherapie",
      description: "Evidence-based therapie voor depressie",
      icon: "🧠",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Beeldende Therapie",
      description: "Creatieve verwerking van emoties",
      icon: "🎨",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "Interpersoonlijke therapie",
      description: "Focus op relaties en communicatie",
      icon: "👥",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mindfulness-Based Cognitive Therapy",
      description: "Mindfulness gecombineerd met cognitieve therapie",
      icon: "🧘",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Therapieland",
      description: "Online therapeutische modules",
      icon: "💻",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Activatietherapie",
      description: "Gedragsactivatie voor depressie",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "EMDR",
      description: "Eye Movement Desensitization and Reprocessing",
      icon: "👁️",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Schematherapie",
      description: "Behandeling van onderliggende patronen",
      icon: "🔄",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Psychomotorische therapie",
      description: "Lichaamsgerichte therapie",
      icon: "🤸",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div
        className="max-w-7xl mx-auto"
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        {/* Main layout: Left content, Right treatments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title, Description, Button */}
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {t("title")}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {t("description")}
            </p>

            <CustomButton
              title={t("view_all")}
              btnType="button"
              containerStyles="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              handleClick={() => {
                window.location.href = "/behandelingen";
              }}
            />
          </div>

          {/* Right side - Treatment pills in grid */}
          <div className="grid grid-cols-2 gap-4">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${treatment.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`}
                ></div>

                <div className="relative z-10 flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${treatment.color} rounded-xl text-white text-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {treatment.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-800 transition-colors duration-300 truncate">
                      {treatment.name}
                    </h3>
                    {index === 0 && (
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {treatment.description}
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentMethods;
