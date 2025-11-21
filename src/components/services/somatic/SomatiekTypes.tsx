"use client";

import { useTranslations } from "next-intl";

const SomatiekTypes = () => {
  const t = useTranslations("somatiek.sections.types");
  
  const somatiekTypes = [
    {
      key: "pain",
      title: t("pain.title"),
      description: t("pain.description"),
      color: "bg-red-50 border-red-200"
    },
    {
      key: "fatigue",
      title: t("fatigue.title"),
      description: t("fatigue.description"),
      color: "bg-orange-50 border-orange-200"
    },
    {
      key: "functional_symptoms",
      title: t("functional_symptoms.title"),
      description: t("functional_symptoms.description"),
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <div className="max-w-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {t("title")}
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {t("subtitle")}
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          {t("content")}
        </p>
        <div className="grid gap-6 mt-8">
          {somatiekTypes.map((type) => (
            <div key={type.key} className={`rounded-lg border p-6 ${type.color}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {type.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomatiekTypes;
