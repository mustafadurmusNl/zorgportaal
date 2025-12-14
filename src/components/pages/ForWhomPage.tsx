// src/components/pages/ForWhomPage.tsx
"use client";

import { ClientPageLayout } from "@/components/care";
import { useTranslations } from "next-intl";

function ForWhomPage() {
  const t = useTranslations("clienten.voor-wie");

  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20">
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
            {/* Age Groups */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("who_we_help.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👨‍💼</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t("adults.title")}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t("adults.description")}
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Individuele en groepsbehandeling
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Ervaren therapeuten
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Bewezen effectieve methoden
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👥</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t("first_time.title")}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t("first_time.description")}
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Laagdrempelige hulp
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Duidelijke uitleg van het proces
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Persoonlijke begeleiding
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("when_to_seek_help.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("when_to_seek_help.content")}
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {t("when_to_seek_help.symptom_1")}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {t("when_to_seek_help.symptom_2")}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {t("when_to_seek_help.symptom_3")}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {t("when_to_seek_help.symptom_4")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("contact.title")}
                </h2>
                <p className="text-gray-700 mb-6">{t("contact.description")}</p>
                <a
                  href="/nl/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {t("contact.button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientPageLayout>
  );
}

export default ForWhomPage;
