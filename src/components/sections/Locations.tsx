"use client";

import { useTranslations } from "next-intl";
import { locations } from "@/constants";
import { Card, CardContent, CardHeader } from "@/components/ui";

const Locations = () => {
  const t = useTranslations("locations");

  return (
    <section className="section bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">{t("title")}</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {location.name}
                </h3>
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600 mb-4">{location.city}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-2 text-pink-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-medium">{location.phone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
          <p className="text-gray-600 mb-8">{t("cta.description")}</p>
          <button className="custom-btn custom-btn-primary">
            {t("cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
