// src/components/pages/ADHDPage.tsx
import {
  ZorgPageLayout,
  ZorgContentSection,
  ZorgTreatmentMethods,
  ZorgTestimonial,
} from "@/components/care";
import { WhatIsADHD, ADHDTypes } from "@/components/services/adhd";

interface ADHDPageProps {
  heroImage: string;
}

export default function ADHDPage({ heroImage }: ADHDPageProps) {
  return (
    <ZorgPageLayout
      category="adhd"
      heroImage={heroImage}
      heroAltText="ADHD assessment and therapy"
    >
      <ZorgContentSection>
        <WhatIsADHD />
      </ZorgContentSection>

      <ZorgContentSection>
        <ADHDTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
