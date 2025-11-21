// src/components/clienten/wachttijden/RegistrationCTA.tsx
import { useTranslations } from "next-intl";

export function RegistrationCTA() {
  const t = useTranslations("clienten.wachttijden.registration_cta");

  return (
    <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          {t("badge")}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 leading-tight">{t("title")}</h3>

      {/* Description */}
      <p className="text-white/90 text-sm mb-6 leading-relaxed">
        {t("description")}
      </p>

      {/* CTA Button */}
      <button className="w-full bg-white text-pink-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
        <span>{t("button")}</span>
        <svg
          className="w-4 h-4"
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
  );
}
