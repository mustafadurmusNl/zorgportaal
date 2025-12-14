// src/components/PageRenderer.tsx
"use client";

import {
  PAGE_CONFIG,
  ValidSection,
  ValidSlug,
  isValidSlug,
} from "./pageConfig";

interface PageRendererProps {
  section: ValidSection;
  slug: string;
}

export default function PageRenderer({ section, slug }: PageRendererProps) {
  const config = PAGE_CONFIG[section];

  // Type-safe component lookup
  const PageComponent = isValidSlug(section, slug)
    ? config.pages[slug as ValidSlug<typeof section>]
    : null;

  // Render page content
  const renderPageContent = () => {
    if (PageComponent) {
      const Component = PageComponent as React.ComponentType;
      return <Component />;
    }

    // Fallback for pages without specific components
    return (
      <div className="min-h-screen">
        {/* Generic hero section for coming soon pages */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Deze pagina is in ontwikkeling
            </p>
            <div className="inline-flex items-center bg-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Binnenkort beschikbaar
            </div>
          </div>
        </div>

        {/* Coming soon content */}
        <div className="max-w-7xl mx-auto py-16 px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              We werken aan deze pagina
            </h2>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600 mb-4">
                Binnenkort vindt u hier uitgebreide informatie.
              </p>
              <p className="text-sm text-gray-500">
                Sectie:{" "}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {section}
                </span>
                {" / "}
                Pagina:{" "}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {slug}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle different layouts
  if (config.layout === "sidebar" && "sidebar" in config && config.sidebar) {
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
