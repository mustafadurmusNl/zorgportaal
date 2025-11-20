"use client";

// src/components/pages/VergoedingPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/zorg";

function VergoedingPage() {
  const t = useTranslations("clienten.vergoeding");

  return (
    <ClientPageLayout title={t("title")} subtitle={t("subtitle")}>
      {/* Basic insurance */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("basic_insurance.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("basic_insurance.covered.title")}
                </h3>
                <p className="text-gray-600">
                  {t("basic_insurance.covered.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("basic_insurance.sessions.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("basic_insurance.sessions.description")}
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("basic_insurance.referral.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("basic_insurance.referral.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deductible */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("deductible.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("deductible.amount.title")}
                </h3>
                <p className="text-gray-600">
                  {t("deductible.amount.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional insurance */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("additional_insurance.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {t("additional_insurance.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("additional_insurance.psychology.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("additional_insurance.psychology.description")}
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t("additional_insurance.alternative.title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("additional_insurance.alternative.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment process */}
      <div className="max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("payment_process.title")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("payment_process.step1.title")}
                </h3>
                <p className="text-gray-600">
                  {t("payment_process.step1.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("payment_process.step2.title")}
                </h3>
                <p className="text-gray-600">
                  {t("payment_process.step2.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("payment_process.step3.title")}
                </h3>
                <p className="text-gray-600">
                  {t("payment_process.step3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
        <p className="mb-6">{t("contact.description")}</p>
        <button className="bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
          {t("contact.button")}
        </button>
      </div>
    </ClientPageLayout>
  );
}

export default VergoedingPage;
