"use client";

// src/components/pages/WachttijdenPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function WachttijdenPage() {
  const t = useTranslations("clienten.wachttijden");

  return (
    <ClientPageLayout title={t("title")} subtitle={t("subtitle")}>
      {/* Current waiting times */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("current_times.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("current_times.intake.title")}
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-2">
                {t("current_times.intake.time")}
              </div>
              <p className="text-gray-600 text-sm">
                {t("current_times.intake.description")}
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("current_times.treatment.title")}
              </h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">
                {t("current_times.treatment.time")}
              </div>
              <p className="text-gray-600 text-sm">
                {t("current_times.treatment.description")}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("current_times.urgent.title")}
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {t("current_times.urgent.time")}
              </div>
              <p className="text-gray-600 text-sm">
                {t("current_times.urgent.description")}
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>{t("note.title")}:</strong> {t("note.description")}
            </p>
          </div>
        </div>
      </div>

      {/* What affects waiting times */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("factors.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-cyan-100 text-cyan-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1">
                •
              </div>
              <p className="text-gray-600">{t("factors.factor1")}</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-cyan-100 text-cyan-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1">
                •
              </div>
              <p className="text-gray-600">{t("factors.factor2")}</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-cyan-100 text-cyan-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1">
                •
              </div>
              <p className="text-gray-600">{t("factors.factor3")}</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-cyan-100 text-cyan-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1">
                •
              </div>
              <p className="text-gray-600">{t("factors.factor4")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* While you wait */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("while_waiting.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {t("while_waiting.description")}
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                {t("while_waiting.tip1")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                {t("while_waiting.tip2")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                {t("while_waiting.tip3")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                {t("while_waiting.tip4")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact for urgent needs */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-red-800 mb-4">
          {t("urgent_contact.title")}
        </h2>
        <p className="text-red-700 mb-4">{t("urgent_contact.description")}</p>
        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors">
          {t("urgent_contact.button")}
        </button>
      </div>
    </ClientPageLayout>
  );
}

export default WachttijdenPage;
