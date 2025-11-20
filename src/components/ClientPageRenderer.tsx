// src/components/ClientPageRenderer.tsx
import dynamic from "next/dynamic";

// Static dynamic imports for client pages
const CLIENT_PAGE_COMPONENTS: Record<string, any> = {
  "voor-wie": dynamic(() => import("@/components/pages/VoorWiePage")),
  "intake-behandelplan": dynamic(
    () => import("@/components/pages/IntakeBehandelplanPage")
  ),
  wachttijden: dynamic(() => import("@/components/pages/WachttijdenPage")),
  vergoeding: dynamic(() => import("@/components/pages/VergoedingPage")),
};

interface ClientPageRendererProps {
  page: string;
}

export default function ClientPageRenderer({ page }: ClientPageRendererProps) {
  // Check if specific page component exists
  const ClientPage =
    CLIENT_PAGE_COMPONENTS[page as keyof typeof CLIENT_PAGE_COMPONENTS];

  // If specific page exists, render it
  if (ClientPage) {
    return <ClientPage />;
  }

  // Simple fallback: Coming Soon page for pages without specific components
  return (
    <div className="min-h-screen">
      {/* Generic hero section for coming soon pages */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {page
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h1>
          <p className="text-xl text-gray-600 mb-8">Information for clients</p>
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
              about our services for clients.
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
}
