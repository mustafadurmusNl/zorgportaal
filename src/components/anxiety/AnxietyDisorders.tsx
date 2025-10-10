"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface DisorderCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  icon: string;
}

const DisorderCard = ({
  title,
  description,
  isOpen,
  onToggle,
  icon,
}: DisorderCardProps) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div
        className={`transform transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="p-6 pt-0 border-t border-gray-100">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const AnxietyDisorders = () => {
  const t = useTranslations("angst.sections.disorders");
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (key: string) => {
    setOpenCard(openCard === key ? null : key);
  };

  const disorders = [
    {
      key: "agoraphobia",
      title: t("agoraphobia.title"),
      description: t("agoraphobia.description"),
      icon: "🏢",
    },
    {
      key: "health_anxiety",
      title: t("health_anxiety.title"),
      description: t("health_anxiety.description"),
      icon: "🩺",
    },
    {
      key: "ocd",
      title: t("ocd.title"),
      description: t("ocd.description"),
      icon: "🔄",
    },
    {
      key: "social_anxiety",
      title: t("social_anxiety.title"),
      description: t("social_anxiety.description"),
      icon: "👥",
    },
    {
      key: "generalized_anxiety",
      title: t("generalized_anxiety.title"),
      description: t("generalized_anxiety.description"),
      icon: "🧠",
    },
    {
      key: "specific_phobias",
      title: t("specific_phobias.title"),
      description: t("specific_phobias.description"),
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-white rounded-xl p-16 shadow-lg border border-gray-100">
      <div className="max-w-none">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Klik op een angststoornis om meer informatie te lezen
          </p>
        </div>

        <div className="space-y-4">
          {disorders.map((disorder) => (
            <DisorderCard
              key={disorder.key}
              title={disorder.title}
              description={disorder.description}
              icon={disorder.icon}
              isOpen={openCard === disorder.key}
              onToggle={() => toggleCard(disorder.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnxietyDisorders;
