// src/components/clienten/voor-wie/WhoWeHelp.tsx
import { useTranslations } from "next-intl";

export function WhoWeHelp() {
  const t = useTranslations("clienten.voor-wie");

  return (
    <div className="max-w-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {t("who_we_help.title")}
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          {t("who_we_help.content")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t("adults.title")}
            </h3>
            <p className="text-gray-600 text-sm">{t("adults.description")}</p>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t("first_time.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("first_time.description")}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t("returning.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("returning.description")}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t("urgent.title")}
            </h3>
            <p className="text-gray-600 text-sm">{t("urgent.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
