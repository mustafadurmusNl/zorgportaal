// src/components/pages/QualityPage.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";

function QualityPage() {
  const t = useTranslations("over-ons.kwaliteit");
  const locale = useLocale();

  const SATISFACTION_SCORES = [
    {
      category: t("satisfaction.categories.rapportcijfer"),
      score: 8.4,
      max: 10,
    },
    { category: t("satisfaction.categories.bejegening"), score: 4.8, max: 5 },
    { category: t("satisfaction.categories.informatie"), score: 4.5, max: 5 },
    {
      category: t("satisfaction.categories.samen_beslissen"),
      score: 4.7,
      max: 5,
    },
    { category: t("satisfaction.categories.uitvoering"), score: 4.4, max: 5 },
  ];

  const HKZ_BENEFITS = [
    t("hkz.benefits.0"),
    t("hkz.benefits.1"),
    t("hkz.benefits.2"),
    t("hkz.benefits.3"),
  ];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex space-x-2 text-sm">
        <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
          {locale === "nl" ? "OVER ONS" : "ABOUT US"}
        </span>
        <span className="text-gray-500">→</span>
        <span className="text-gray-700 font-medium">
          {locale === "nl" ? "KWALITEIT" : "QUALITY"}
        </span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="text-lg text-gray-600 max-w-4xl">{t("intro")}</p>
      </div>

      {/* Tevredenheid Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("satisfaction.title")}
        </h2>

        {/* Client Satisfaction 2024 */}
        <div className="bg-white border border-gray-100 rounded-xl p-8">
          <h3
            className="text-xl font-bold text-center mb-6"
            style={{ color: "#e91e63" }}
          >
            {t("satisfaction.table_title")}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {SATISFACTION_SCORES.map((item, index) => (
                    <th
                      key={index}
                      className="text-left py-3 px-4 font-semibold text-gray-900"
                    >
                      {item.category}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  {SATISFACTION_SCORES.map((item, index) => (
                    <td key={index} className="py-4 px-4">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "#e91e63" }}
                      >
                        {item.score}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="text-gray-400 text-sm">
                  {SATISFACTION_SCORES.map((item, index) => (
                    <td key={index} className="py-2 px-4">
                      {t("satisfaction.max_score")} {item.max}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-right mt-4 text-gray-400 text-sm">
            CQi Akwa GGZ v5.1
          </div>
        </div>
      </div>

      {/* Keurmerk Basis GGZ */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("keurmerk.title")}
        </h2>
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
          <p className="text-gray-700 leading-relaxed mb-6">
            {t("keurmerk.description")}
          </p>
        </div>
      </div>

      {/* HKZ Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">{t("hkz.title")}</h2>

        <div className="bg-white space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {t("hkz.description")}
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              {t("hkz.subtitle")}
            </h3>
            <ul className="space-y-3">
              {HKZ_BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Kwaliteitsstatuut Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("statuut.title")}
        </h2>

        <div className="bg-white p-6 border border-gray-100 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
            {t("statuut.description")}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">{t("contact.title")}</h3>
          <p className="text-pink-100 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="mailto:info@groeipunt.nl"
              className="bg-white text-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t("contact.email")}
            </a>
            <a
              href="tel:0104504071"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-500 transition-colors inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {t("contact.phone")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityPage;
