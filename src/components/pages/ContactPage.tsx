// src/components/pages/ContactPage.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

export function ContactPage() {
  const t = useTranslations("contact_page");
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    phone: "",
    appointmentDate: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Breadcrumb */}
          <nav className="flex space-x-2 text-sm">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
              {t("breadcrumb")}
            </span>
          </nav>

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
            <p className="text-lg text-gray-600">
              {t("office_hours.description")}{" "}
              <span className="font-semibold text-pink-500">
                {t("office_hours.phone")}
              </span>{" "}
              {t("office_hours.or_email")}{" "}
              <a
                href="mailto:info@groeipunt.nl"
                className="font-semibold text-pink-500 hover:text-pink-600"
              >
                info@groeipunt.nl
              </a>
              .
            </p>
          </div>

          {/* Appointment Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {t("appointment.title")}
            </h2>

            <p className="text-gray-700">
              {t("appointment.description_1")}{" "}
              <span className="font-semibold">
                {t("appointment.hours_required")}
              </span>{" "}
              {t("appointment.description_2")}{" "}
              <span className="font-semibold text-pink-500">
                {t("office_hours.phone")}
              </span>{" "}
              {t("appointment.or_email")}{" "}
              <a
                href="mailto:info@groeipunt.nl"
                className="font-semibold text-pink-500 hover:text-pink-600"
              >
                info@groeipunt.nl
              </a>
              .
            </p>

            <p className="text-gray-700">
              {t("appointment.email_requirements")}
            </p>

            <p className="text-gray-700">
              {t("appointment.careful_scheduling")}
            </p>

            {/* Emergency Contact Warning */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-500 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    {t("appointment.warning.title")}
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    {t("appointment.warning.description")}{" "}
                    <span className="font-semibold">
                      {t("appointment.warning.link")}
                    </span>{" "}
                    {t("appointment.warning.info")}.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                {t("appointment.emergency")}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Info Card */}
          <div className="bg-pink-500 rounded-2xl p-6 text-white">
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {t("sidebar.question_title")}
                </h3>
                <h4 className="font-semibold mb-3">
                  {t("sidebar.contact_info.title")}
                </h4>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <p>{t("sidebar.contact_info.office_hours")}</p>
              <p>{t("sidebar.contact_info.lunch_break")}</p>
              <p>{t("sidebar.contact_info.emergency")}</p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href="tel:0104504071"
                className="flex items-center bg-white text-pink-500 px-4 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-3"
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
                010 - 450 40 71
              </a>

              <a
                href="mailto:info@groeipunt.nl"
                className="flex items-center border-2 border-white text-white px-4 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-3"
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
                info@groeipunt.nl
              </a>
            </div>
          </div>

          {/* Locations Card */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {t("sidebar.locations.title")}
                </h3>
              </div>
            </div>

            <p className="text-purple-100 text-sm mb-4">
              {t("sidebar.locations.description")}
            </p>

            <a
              href={`/${locale}/over-ons/locaties`}
              className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors text-sm"
            >
              {t("sidebar.locations.button")}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
