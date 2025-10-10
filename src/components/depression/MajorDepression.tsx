"use client";

import { useTranslations } from "next-intl";

const MajorDepression = () => {
  const t = useTranslations("depressie.sections.major_depression");

  return (
    <section className="bg-white rounded-xl p-16 shadow-lg border border-gray-100">
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("title")}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("content")}
          </p>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("symptoms_title")}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t("symptoms.persistent_sadness")}</li>
              <li>{t("symptoms.loss_of_interest")}</li>
              <li>{t("symptoms.worthlessness")}</li>
              <li>{t("symptoms.concentration_problems")}</li>
              <li>{t("symptoms.appetite_changes")}</li>
              <li>{t("symptoms.death_thoughts")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorDepression;
