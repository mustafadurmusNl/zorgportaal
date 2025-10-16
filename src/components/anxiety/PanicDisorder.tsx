"use client";

import { ZorgSimpleContentSection } from "@/components/zorg";
import { useTranslations } from "next-intl";

const PanicDisorder = () => {
  const t = useTranslations("angst.sections.panic_disorder");

  return (
    <ZorgSimpleContentSection translationNamespace="angst.sections.panic_disorder">
      {/* Anxiety-specific symptoms section */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-gray-900 mb-2">
          {t("symptoms_title")}
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>{t("symptoms.faster_heartbeat")}</li>
          <li>{t("symptoms.hyperventilation")}</li>
          <li>{t("symptoms.restlessness")}</li>
          <li>{t("symptoms.dizziness")}</li>
          <li>{t("symptoms.trembling")}</li>
          <li>{t("symptoms.loss_of_control")}</li>
        </ul>
      </div>
    </ZorgSimpleContentSection>
  );
};

export default PanicDisorder;
