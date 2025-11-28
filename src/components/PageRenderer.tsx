// src/components/PageRenderer.tsx
"use client";

import { PAGE_CONFIG, PageType, PageName } from "./pageConfig";

interface PageRendererProps {
  pageType: PageType;
  page: string;
  locale?: string;
  messages?: Record<string, unknown>;
}

export default function PageRenderer({
  pageType,
  page,
  locale,
  messages,
}: PageRendererProps) {
  const config = PAGE_CONFIG[pageType];
  const PageComponent = config.components[page as PageName<typeof pageType>];

  // Render page content
  const renderPageContent = () => {
    if (PageComponent) {
      // Type assertion to handle dynamic import
      const Component = PageComponent as React.ComponentType<{
        locale?: string;
        messages?: Record<string, unknown>;
      }>;
      return <Component locale={locale} messages={messages} />;
    }

    // Fallback for pages without specific components
    const title = config.fallback.title(page);
    const subtitle = config.fallback.subtitle(page);

    return (
      <div className="min-h-screen">
        {/* Generic hero section for coming soon pages */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
            <div className="inline-flex items-center bg-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Coming soon content */}
        <div className="max-w-7xl mx-auto py-16 px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              This page is under development
            </h2>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600 mb-4">
                We&apos;re working hard to bring you comprehensive information.
              </p>
              <p className="text-sm text-gray-500">
                Page:{" "}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {page}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle different layouts
  if (config.layout === "sidebar" && config.sidebar) {
    const SidebarComponent = config.sidebar;
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SidebarComponent />
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">{renderPageContent()}</div>
        </div>
      </div>
    );
  }

  // Default: no layout wrapper
  return renderPageContent();
}
