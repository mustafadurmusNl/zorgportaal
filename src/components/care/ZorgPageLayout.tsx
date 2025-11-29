"use client";

import { ReactNode } from "react";
import { useUnifiedPage } from "@/contexts/UnifiedPageContext";
import ZorgHero from "./ZorgHero";
import ZorgCareSidebar from "./ZorgCareSidebar";
import ZorgTestimonial from "./ZorgTestimonial";
import ZorgTreatmentMethods from "./ZorgTreatmentMethods";

// CategoryType: includes all supported Zorg categories
type CategoryType =
  | "anxiety"
  | "depression"
  | "adhd"
  | "trauma"
  | "burnout"
  | "somatiek"
  | "zelfbeeld"
  | "persoonlijkheid"
  | "client";

interface ZorgPageLayoutProps {
  category: CategoryType;
  children: ReactNode; // Content sections for the main area
  hideTestimonials?: boolean;
  hideTreatmentMethods?: boolean;
}

const ZorgPageLayout = ({
  category,
  children,
  hideTestimonials = false,
  hideTreatmentMethods = false,
}: ZorgPageLayoutProps) => {
  // Get hero image from context
  const { heroImage } = useUnifiedPage();

  // For client pages, we want to hide treatment methods and testimonials
  const isClientPage = category === "client";
  const shouldShowTestimonials = !hideTestimonials && !isClientPage;
  const shouldShowTreatmentMethods = !hideTreatmentMethods && !isClientPage;

  return (
    <>
      {/* Hero section with dynamic image */}
      <ZorgHero
        category={isClientPage ? "anxiety" : category} // Fallback for client pages
        imageUrl={heroImage}
        altText={`${category} treatment hero image`}
      />

      {/* Main content with sidebar */}
      <div
        className="max-w-7xl mx-auto py-16"
        style={{ marginTop: "80px", paddingLeft: "60px", paddingRight: "60px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="space-y-32">
              {children}

              {/* Testimonial section - only for care pages */}
              {shouldShowTestimonials && (
                <ZorgTestimonial
                  category={category as Exclude<CategoryType, "client">}
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ZorgCareSidebar />
          </div>
        </div>
      </div>

      {/* Treatment methods - only for care pages */}
      {shouldShowTreatmentMethods && (
        <div style={{ marginTop: "80px", marginBottom: "80px" }}>
          <ZorgTreatmentMethods
            category={category as Exclude<CategoryType, "client">}
          />
        </div>
      )}
    </>
  );
};

export default ZorgPageLayout;
