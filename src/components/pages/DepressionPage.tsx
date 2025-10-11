// src/components/pages/DepressionPage.tsx
import {
  DepressionHero,
  WhatIsDepression,
  MajorDepression,
  DepressionTypes,
  DepressionTreatmentMethods,
  DepressionTestimonial,
  DepressionCareSidebar,
} from "@/components/depression";

interface DepressionPageProps {
  heroImage: string;
}

export default function DepressionPage({ heroImage }: DepressionPageProps) {
  return (
    <>
      {/* Hero section with dynamic image */}
      <DepressionHero imageUrl={heroImage} />

      {/* Main content with sidebar */}
      <div
        className="max-w-7xl mx-auto py-16"
        style={{ marginTop: "80px", paddingLeft: "60px", paddingRight: "60px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="mb-32">
              <WhatIsDepression />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <MajorDepression />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <DepressionTypes />
            </div>

            <div className="mb-32" style={{ marginBottom: "80px" }}>
              <DepressionTestimonial />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <DepressionCareSidebar />
          </div>
        </div>
      </div>

      {/* Treatment methods - full width section */}
      <div style={{ marginTop: "80px", marginBottom: "80px" }}>
        <DepressionTreatmentMethods />
      </div>
    </>
  );
}
