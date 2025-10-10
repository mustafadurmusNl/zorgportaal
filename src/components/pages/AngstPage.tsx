// src/components/pages/AngstPage.tsx
import {
  AngstHero,
  WhatIsAnxiety,
  PanicDisorder,
  AnxietyDisorders,
  TreatmentMethods,
  Testimonial,
  ZorgaanbodSidebar,
} from "@/components/angst";

interface AngstPageProps {
  heroImage: string | null;
}

export default function AngstPage({ heroImage }: AngstPageProps) {
  return (
    <>
      {/* Hero section with dynamic image */}
      <AngstHero imageUrl={heroImage || undefined} />

      {/* Main content with sidebar */}
      <div
        className="max-w-7xl mx-auto py-16"
        style={{ marginTop: "80px", paddingLeft: "60px", paddingRight: "60px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="mb-32">
              <WhatIsAnxiety />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <PanicDisorder />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <AnxietyDisorders />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <Testimonial />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ZorgaanbodSidebar />
          </div>
        </div>
      </div>

      {/* Treatment methods - full width section */}
      <div style={{ marginTop: "80px", marginBottom: "80px" }}>
        <TreatmentMethods />
      </div>
    </>
  );
}
