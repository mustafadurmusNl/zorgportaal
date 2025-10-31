"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface TypeCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  icon: string;
}

const TypeCard = ({
  title,
  description,
  isOpen,
  onToggle,
  icon,
}: TypeCardProps) => (
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

const TraumaTypes = () => {
  const t = useTranslations("trauma.sections.types");
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (key: string) => {
    setOpenCard(openCard === key ? null : key);
  };

  const types = [
    {
      key: "ptsd",
      title: t("ptsd.title"),
      description: t("ptsd.description"),
      icon: "🧾",
    },
    {
      key: "acute",
      title: t("acute.title"),
      description: t("acute.description"),
      icon: "⚠️",
    },
    {
      key: "complex",
      title: t("complex.title"),
      description: t("complex.description"),
      icon: "🔗",
    },
  ];

  return (
    <div className="max-w-none">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      <div className="space-y-4">
        {types.map((type) => (
          <TypeCard
            key={type.key}
            title={type.title}
            description={type.description}
            icon={type.icon}
            isOpen={openCard === type.key}
            onToggle={() => toggleCard(type.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default TraumaTypes;
