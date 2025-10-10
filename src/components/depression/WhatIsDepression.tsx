"use client";

import { useTranslations } from "next-intl";

const WhatIsDepression = () => {
  const t = useTranslations("depressie.sections.what_is_depression");

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
        </div>
      </div>
    </section>
  );
};

export default WhatIsDepression;
