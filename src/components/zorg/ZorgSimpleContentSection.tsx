"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface ZorgSimpleContentSectionProps {
  translationNamespace: string;
  children?: ReactNode;
  className?: string;
}

const ZorgSimpleContentSection = ({
  translationNamespace,
  children,
  className = "",
}: ZorgSimpleContentSectionProps) => {
  const t = useTranslations(translationNamespace);

  return (
    <div className={`max-w-none ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {t("title")}
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg">{t("content")}</p>
        {children}
      </div>
    </div>
  );
};

export default ZorgSimpleContentSection;
