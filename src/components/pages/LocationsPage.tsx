// src/components/pages/LocationsPage.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";

interface LocationData {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  type?: "main" | "specialized";
}

const LOCATIONS: LocationData[] = [
  {
    id: "capelle",
    name: "Capelle Schollevaar",
    address: "Sporlaan 20",
    postalCode: "2908 BG",
    city: "Capelle aan den IJssel",
    type: "main",
  },
  {
    id: "gouda-kind",
    name: "Gouda (kind & jeugd)",
    address: "Stationsplein 9G",
    postalCode: "2801 AK",
    city: "Gouda",
    type: "specialized",
  },
  {
    id: "gouda-volwassenen",
    name: "Gouda (volwassenen)",
    address: "Stationsplein 9G",
    postalCode: "2801 AK",
    city: "Gouda",
    type: "main",
  },
  {
    id: "halsteren",
    name: "Halsteren",
    address: "Wouwseweg 1",
    postalCode: "4661 VM",
    city: "Halsteren",
    type: "main",
  },
  {
    id: "hoogvliet",
    name: "Hoogvliet",
    address: "Stelle 34",
    postalCode: "3191 KE",
    city: "Hoogvliet Rotterdam",
    type: "main",
  },
  {
    id: "amsterdam",
    name: "Intercultureel Amsterdam",
    address: "Baden Powellweg 305 M",
    postalCode: "1069 LH",
    city: "Amsterdam",
    type: "specialized",
  },
  {
    id: "rotterdam",
    name: "Intercultureel Rotterdam",
    address: "Zuidplein 12",
    postalCode: "3083 CW",
    city: "Rotterdam",
    type: "specialized",
  },
  {
    id: "tilburg",
    name: "Intercultureel Tilburg",
    address: "Fazantenjachtstraat 28",
    postalCode: "5042 X",
    city: "Tilburg",
    type: "specialized",
  },
  {
    id: "utrecht",
    name: "Intercultureel Utrecht",
    address: "Demkweg 11 DG",
    postalCode: "3555 HW",
    city: "Utrecht",
    type: "specialized",
  },
];

export default function LocationsPage() {
  const t = useTranslations("over-ons.locaties");
  const questionsT = useTranslations("over-ons.questions");
  const locale = useLocale();

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex space-x-2 text-sm">
        <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
          OVER ONS
        </span>
        <span className="text-gray-500">→</span>
        <span className="text-gray-700 font-medium">ONZE LOCATIES</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{t("description")}</p>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS.map((location) => (
          <div
            key={location.id}
            className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-3">
              {location.name}
            </h3>
            <div className="space-y-2 text-gray-700 mb-4">
              <p>{location.address}</p>
              <p className="text-sm">
                {location.postalCode} {location.city}
              </p>
            </div>
            <button className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors">
              Bekijk locatie
              <svg
                className="w-4 h-4 ml-1"
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
            </button>
          </div>
        ))}
      </div>

      {/* Questions Section - Based on attachment image */}
      <div className="bg-pink-500 rounded-2xl p-8 text-white mt-12">
        <div className="flex items-start space-x-6">
          {/* Avatar images placeholder */}
          <div className="flex -space-x-3">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-pink-500 flex items-center justify-center">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <div className="w-16 h-16 bg-white rounded-full border-4 border-pink-500 flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <div className="w-16 h-16 bg-white rounded-full border-4 border-pink-500 flex items-center justify-center">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">{questionsT("title")}</h2>
            <p className="text-pink-100 leading-relaxed">
              {questionsT("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="mailto:info@groeipunt.nl"
                className="inline-flex items-center bg-white text-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors"
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
                info@groeipunt.nl
              </a>

              <a
                href="tel:0104504071"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-500 transition-colors"
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
                010 450 40 71
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-900 mb-2">Over Groeipunt</h4>
          <p className="text-sm text-gray-600">
            Meer informatie over onze organisatie en onze aanpak.
          </p>
          <button className="text-pink-500 text-sm font-medium mt-2 hover:text-pink-600 transition-colors">
            Lees meer →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-900 mb-2">Onze locaties</h4>
          <p className="text-sm text-gray-600">
            Alle vestigingen en contactgegevens op een rijtje.
          </p>
          <button className="text-pink-500 text-sm font-medium mt-2 hover:text-pink-600 transition-colors">
            Bekijk alle locaties →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-900 mb-2">Vacatures</h4>
          <p className="text-sm text-gray-600">
            Werk je graag bij Groeipunt? Bekijk onze openstaande vacatures.
          </p>
          <button className="text-pink-500 text-sm font-medium mt-2 hover:text-pink-600 transition-colors">
            Naar vacatures →
          </button>
        </div>
      </div>
    </div>
  );
}
