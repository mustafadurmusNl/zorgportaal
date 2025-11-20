"use client";

// src/components/pages/VoorWiePage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";
import { WhoWeHelp, WhenToSeekHelp } from "@/components/clienten/voor-wie";
import {
  ClientTreatmentMethods,
  ClientContactSection,
} from "@/components/clienten/shared";

function VoorWiePage() {
  const t = useTranslations("clienten.voor-wie");

  return (
    <ClientPageLayout title={t("title")} subtitle={t("subtitle")}>
      {/* Page-specific content */}
      <WhoWeHelp />

      <WhenToSeekHelp />

      {/* Shared/Generic components */}
      <ClientTreatmentMethods />

      <ClientContactSection />
    </ClientPageLayout>
  );
}

export default VoorWiePage;
