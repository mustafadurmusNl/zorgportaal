// src/components/pages/IntakeAndTreatmentPage.tsx
"use client";

import { ClientPageLayout } from "@/components/care";
import { useTranslations } from "next-intl";

function IntakeAndTreatmentPage() {
  const t = useTranslations("clienten.intake-behandelplan");

  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-16 sm:py-20">
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

      {/* Process Steps */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("process.title")}
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              {t("process.content")}
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("process.step1.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("process.step1.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("process.step2.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("process.step2.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("process.step3.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("process.step3.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("process.step4.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("process.step4.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("what_to_expect.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {t("what_to_expect.content")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("what_to_expect.intake.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("what_to_expect.intake.description")}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("what_to_expect.plan.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("what_to_expect.plan.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientPageLayout>
  );
}

export default IntakeAndTreatmentPage;
