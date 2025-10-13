"use client";

import { useTranslations } from "next-intl";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui";

const Services = () => {
  const t = useTranslations("services");

  // Define services structure with translation keys
  const serviceItems = [
    {
      id: "ourCare",
      icon: "🏥",
      colorClass: "service-card-turkuaz",
    },
    {
      id: "digitalPoli",
      icon: "💻",
      colorClass: "service-card-yellow",
    },
    {
      id: "locations",
      icon: "📍",
      colorClass: "service-card-pink",
    },
    {
      id: "careers",
      icon: "👥",
      colorClass: "service-card-orange",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <Card
              key={service.id}
              className={`${service.colorClass} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-white text-xl">
                  {t(`${service.id}.title`)}
                </CardTitle>
                <CardDescription className="text-white/90">
                  {t(`${service.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  onClick={() => {}}
                >
                  {index === 3 ? t("careers.description") : t("moreInfo")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-cyan-600 mb-2">8.1</div>
            <h4 className="font-semibold mb-2">{t("effectiveCare.title")}</h4>
            <p className="text-gray-600">{t("effectiveCare.description")}</p>
          </div>

          <div className="text-center p-6">
            <div className="text-3xl font-bold text-cyan-600 mb-2">💻</div>
            <h4 className="font-semibold mb-2">{t("blendedCare.title")}</h4>
            <p className="text-gray-600">{t("blendedCare.description")}</p>
          </div>

          <div className="text-center p-6">
            <div className="text-3xl font-bold text-cyan-600 mb-2">🔄</div>
            <h4 className="font-semibold mb-2">{t("otherCare.title")}</h4>
            <p className="text-gray-600">{t("otherCare.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
