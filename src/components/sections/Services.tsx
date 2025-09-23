"use client";

import { useTranslations } from "next-intl";
import { CustomButton } from "@/components/ui";

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
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">{t("title")}</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="services-grid">
          {serviceItems.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${service.colorClass}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="service-card-title">{t(`${service.id}.title`)}</h3>
              <p className="service-card-description">
                {t(`${service.id}.description`)}
              </p>

              <div className="mt-auto">
                <CustomButton
                  title={index === 3 ? t("careers.description") : t("moreInfo")}
                  btnType="button"
                  containerStyles="custom-btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
                  handleClick={() => {}}
                />
              </div>
            </div>
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
