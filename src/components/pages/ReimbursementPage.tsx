// src/components/pages/ReimbursementPage.tsx
"use client";

import { ClientPageLayout } from "@/components/care";
import { useTranslations } from "next-intl";

function ReimbursementPage() {
  const t = useTranslations("clienten.vergoeding");

  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Basic Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("basic_insurance.title")}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t("basic_insurance.covered.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("basic_insurance.covered.description")}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t("basic_insurance.sessions.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("basic_insurance.sessions.description")}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t("basic_insurance.referral.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("basic_insurance.referral.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Deductible */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("deductible.title")}
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                  {t("deductible.amount.title")}
                </h3>
                <p className="text-yellow-800">
                  {t("deductible.amount.description")}
                </p>
              </div>
            </div>

            {/* Additional Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("additional_insurance.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("additional_insurance.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("additional_insurance.psychology.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("additional_insurance.psychology.description")}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("additional_insurance.alternative.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("additional_insurance.alternative.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("payment_process.title")}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("payment_process.step1.title")}
                      </h3>
                      <p className="text-gray-700">
                        {t("payment_process.step1.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("payment_process.step2.title")}
                      </h3>
                      <p className="text-gray-700">
                        {t("payment_process.step2.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("payment_process.step3.title")}
                      </h3>
                      <p className="text-gray-700">
                        {t("payment_process.step3.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("contact.title")}
              </h3>
              <p className="text-gray-700 mb-4">{t("contact.description")}</p>
              <a
                href="/nl/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {t("contact.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ClientPageLayout>
  );
}

export default ReimbursementPage;
