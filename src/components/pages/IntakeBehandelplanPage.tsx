"use client";

// src/components/pages/IntakeBehandelplanPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function IntakeBehandelplanPage() {
  const t = useTranslations("clienten.intake-behandelplan");

  return (
    <ClientPageLayout title={t("title")} subtitle={t("subtitle")}>
      {/* Process overview */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("process.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {t("process.content")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("process.step1.title")}
                </h3>
                <p className="text-gray-600">
                  {t("process.step1.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("process.step2.title")}
                </h3>
                <p className="text-gray-600">
                  {t("process.step2.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("process.step3.title")}
                </h3>
                <p className="text-gray-600">
                  {t("process.step3.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("process.step4.title")}
                </h3>
                <p className="text-gray-600">
                  {t("process.step4.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What to expect */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("what_to_expect.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {t("what_to_expect.content")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("what_to_expect.intake.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("what_to_expect.intake.description")}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("what_to_expect.plan.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("what_to_expect.plan.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation tips */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("preparation.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {t("preparation.content")}
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("preparation.tips_title")}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                {t("preparation.tip1")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                {t("preparation.tip2")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                {t("preparation.tip3")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                {t("preparation.tip4")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ClientPageLayout>
  );
}

export default IntakeBehandelplanPage;
