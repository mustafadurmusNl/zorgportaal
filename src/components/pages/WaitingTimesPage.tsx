// src/components/pages/WaitingTimesPage.tsx
"use client";

import { ClientPageLayout } from "@/components/care";
import { useTranslations } from "next-intl";

function WaitingTimesPage() {
  const t = useTranslations("clienten.wachttijden");

  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-20">
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

      {/* Current Waiting Times */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("current_times.title")}
            </h2>

            <div className="space-y-6 mb-12">
              {/* Intake */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("current_times.intake.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("current_times.intake.description")}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {t("current_times.intake.time")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Treatment */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("current_times.treatment.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("current_times.treatment.description")}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      {t("current_times.treatment.time")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgent */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t("current_times.urgent.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("current_times.urgent.description")}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                      {t("current_times.urgent.time")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h3 className="font-semibold text-blue-900 mb-2">
                {t("note.title")}
              </h3>
              <p className="text-blue-800">{t("note.description")}</p>
            </div>

            {/* Factors affecting waiting times */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("factors.title")}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{t("factors.factor1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{t("factors.factor2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{t("factors.factor3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{t("factors.factor4")}</span>
                </li>
              </ul>
            </div>

            {/* While waiting */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("while_waiting.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("while_waiting.description")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">
                    {t("while_waiting.tip1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">
                    {t("while_waiting.tip2")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">
                    {t("while_waiting.tip3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">
                    {t("while_waiting.tip4")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Urgent Contact CTA */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                {t("urgent_contact.title")}
              </h3>
              <p className="text-red-800 mb-4">
                {t("urgent_contact.description")}
              </p>
              <a
                href="/nl/contact"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                {t("urgent_contact.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ClientPageLayout>
  );
}

export default WaitingTimesPage;
