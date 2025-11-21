// src/components/clienten/shared/ClientContactSection.tsx
import { useTranslations } from "next-intl";

export function ClientContactSection() {
  const t = useTranslations("shared.contact");

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
      <p className="mb-6 text-lg">{t("description")}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
          {t("phone_button")}
        </button>
        <button className="bg-white/20 border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-colors">
          {t("form_button")}
        </button>
      </div>
    </div>
  );
}
