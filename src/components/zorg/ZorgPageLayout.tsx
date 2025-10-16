"use client";

import { ReactNode } from "react";
import ZorgHero from "./ZorgHero";
import ZorgCareSidebar from "./ZorgCareSidebar";
import ZorgTestimonial from "./ZorgTestimonial";
import ZorgTreatmentMethods from "./ZorgTreatmentMethods";

type CategoryType = "anxiety" | "depression" | "adhd" | "trauma" | "burnout";

interface ZorgPageLayoutProps {
  category: CategoryType;
  heroImage?: string;
  heroAltText?: string;
  children: ReactNode; // Content sections for the main area
}

const ZorgPageLayout = ({
  category,
  heroImage,
  heroAltText,
  children,
}: ZorgPageLayoutProps) => {
  return (
    <>
      {/* Hero section with dynamic image */}
      <ZorgHero
        category={category}
        imageUrl={heroImage}
        altText={heroAltText}
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

              {/* Testimonial section */}
              <ZorgTestimonial category={category} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ZorgCareSidebar />
          </div>
        </div>
      </div>

      {/* Treatment methods - full width section */}
      <div style={{ marginTop: "80px", marginBottom: "80px" }}>
        <ZorgTreatmentMethods category={category} />
      </div>
    </>
  );
};

export default ZorgPageLayout;
