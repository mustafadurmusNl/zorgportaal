// src/components/pages/TraumaPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import { WhatIsTrauma, TraumaTypes } from "@/components/services/trauma";

interface TraumaPageProps {
  heroImage: string;
}

export default function TraumaPage({ heroImage }: TraumaPageProps) {
  return (
    <ZorgPageLayout
      category="trauma"
      heroImage={heroImage}
      heroAltText="Trauma & PTSD treatment"
    >
      <ZorgContentSection>
        <WhatIsTrauma />
      </ZorgContentSection>

      <ZorgContentSection>
        <TraumaTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
