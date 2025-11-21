"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import ZorgTreatmentMethods from "./ZorgTreatmentMethods";
import { ClientSidebar } from "@/components/clients/shared";

interface ClientPageLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ClientPageLayout = ({
  title,
  subtitle,
  children,
}: ClientPageLayoutProps) => {
  const t = useTranslations("navigation");

  return (
    <>
      {/* Hero section - custom for client pages */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-semibold">
                  {t("clienten").toUpperCase()}
                </span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-600 uppercase tracking-wide">
                  {title?.replace(/\s+/g, " ").toUpperCase()}
                </span>
              </div>
            </div>

            {/* Text content - centered */}
            <div className="max-w-4xl mx-auto space-y-6">
              {title && (
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content with sidebar - similar to ZorgPageLayout */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ClientSidebar />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="space-y-16">{children}</div>
          </div>
        </div>
      </div>

      {/* Treatment methods section - same as anxiety page */}
      <div style={{ marginTop: "80px", marginBottom: "80px" }}>
        <ZorgTreatmentMethods category="anxiety" />
      </div>
    </>
  );
};

export default ClientPageLayout;
