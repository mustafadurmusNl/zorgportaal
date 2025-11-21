// src/components/AboutUsPageRenderer.tsx
"use client";

import {
  AboutUsSidebar,
  LocationsPage,
  TeamPage,
  QualityPage,
} from "@/components";

interface AboutUsPageRendererProps {
  page: string;
}

export function AboutUsPageRenderer({ page }: AboutUsPageRendererProps) {
  const renderPageContent = () => {
    switch (page) {
      case "locaties":
        return <LocationsPage />;
      case "team":
        return <TeamPage />;
      case "kwaliteit":
        return <QualityPage />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Page not found: {page}
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AboutUsSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">{renderPageContent()}</div>
      </div>
    </div>
  );
}
