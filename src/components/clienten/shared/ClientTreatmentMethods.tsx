// src/components/clienten/shared/ClientTreatmentMethods.tsx
import { useTranslations } from "next-intl";

export function ClientTreatmentMethods() {
  const t = useTranslations("shared.treatment-methods");

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {t("individual.title")}
          </h3>
          <p className="text-white/90">{t("individual.description")}</p>
        </div>

        <div className="text-center">
          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">{t("group.title")}</h3>
          <p className="text-white/90">{t("group.description")}</p>
        </div>

        <div className="text-center">
          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">{t("online.title")}</h3>
          <p className="text-white/90">{t("online.description")}</p>
        </div>
      </div>
    </div>
  );
}
