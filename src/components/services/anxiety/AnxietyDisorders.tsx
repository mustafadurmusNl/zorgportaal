"use client";

import { useTranslations } from "next-intl";

const AnxietyDisorders = () => {
  const t = useTranslations("angst.sections.disorders");
  
  const disorders = [
    {
      key: "agoraphobia",
      title: t("agoraphobia.title"),
      description: t("agoraphobia.description")
    },
    {
      key: "health_anxiety",
      title: t("health_anxiety.title"),
      description: t("health_anxiety.description")
    },
    {
      key: "ocd",
      title: t("ocd.title"),
      description: t("ocd.description")
    },
    {
      key: "social_anxiety",
      title: t("social_anxiety.title"),
      description: t("social_anxiety.description")
    },
    {
      key: "generalized_anxiety",
      title: t("generalized_anxiety.title"),
      description: t("generalized_anxiety.description")
    },
    {
      key: "specific_phobias",
      title: t("specific_phobias.title"),
      description: t("specific_phobias.description")
    }
  ];

  return (
    <div className="max-w-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Wat voor angststoornissen zijn er?
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          Er zijn verschillende soorten angststoornissen, elk met hun eigen kenmerken en symptomen.
        </p>
        <div className="grid gap-6">
          {disorders.map((disorder) => (
            <div key={disorder.key} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {disorder.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {disorder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnxietyDisorders;
