"use client";

import { useTranslations } from "next-intl";

const WhatIsSomatiek = () => {
  const t = useTranslations("somatiek.sections.what_is_somatiek");
  
  return (
    <div className="max-w-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {t("title")}
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          {t("content")}
        </p>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-teal-800 mb-4">
            Kenmerken van somatische klachten
          </h3>
          <ul className="space-y-2 text-teal-700">
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 mt-1">•</span>
              Fysieke symptomen zonder volledige medische verklaring
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 mt-1">•</span>
              Vaak samenhang met stress of emotionele factoren
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 mt-1">•</span>
              Kunnen het dagelijks functioneren beïnvloeden
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 mt-1">•</span>
              Behandeling richt zich op zowel fysieke als psychische aspecten
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIsSomatiek;
