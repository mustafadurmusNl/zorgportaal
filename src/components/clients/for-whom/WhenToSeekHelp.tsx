// src/components/clienten/voor-wie/WhenToSeekHelp.tsx
import { useTranslations } from "next-intl";

export function WhenToSeekHelp() {
  const t = useTranslations("clienten.voor-wie");

  return (
    <div className="max-w-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {t("when_to_seek_help.title")}
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {t("when_to_seek_help.content")}
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              {t("when_to_seek_help.symptom_1")}
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              {t("when_to_seek_help.symptom_2")}
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              {t("when_to_seek_help.symptom_3")}
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3">•</span>
              {t("when_to_seek_help.symptom_4")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
