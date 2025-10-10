// src/components/CategoryPageRenderer.tsx
import dynamic from "next/dynamic";

// Dynamic component imports - only load when needed
const CATEGORY_COMPONENTS = {
  angst: dynamic(() => import("@/components/pages/AngstPage")),
  // Future pages will be added here when they're created:
  // depressie: dynamic(() => import('@/components/pages/DepressiePage')),
  // adhd: dynamic(() => import('@/components/pages/ADHDPage')),
  // trauma: dynamic(() => import('@/components/pages/TraumaPage')),
  // burnout: dynamic(() => import('@/components/pages/BurnoutPage')),
};

interface CategoryPageRendererProps {
  category: string;
  heroImage: string | null;
}

export default function CategoryPageRenderer({
  category,
  heroImage,
}: CategoryPageRendererProps) {
  // Check if specific page component exists
  const CategoryPage =
    CATEGORY_COMPONENTS[category as keyof typeof CATEGORY_COMPONENTS];

  // If specific page exists, render it
  if (CategoryPage) {
    return <CategoryPage heroImage={heroImage} />;
  }

  // Simple fallback: Coming Soon page for categories without specific components
  return (
    <div className="min-h-screen">
      {/* Generic hero section for coming soon pages */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)} Treatment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional {category} treatment and support services
          </p>
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
              We&apos;re working hard to bring you comprehensive information
              about {category} treatment and support.
            </p>
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                {category}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
