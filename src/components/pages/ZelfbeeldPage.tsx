// src/components/pages/ZelfbeeldPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/zorg";
import { WhatIsZelfbeeld, ZelfbeeldTypes } from "@/components/zelfbeeld";

interface ZelfbeeldPageProps {
  heroImage: string;
}

export default function ZelfbeeldPage({ heroImage }: ZelfbeeldPageProps) {
  return (
    <ZorgPageLayout
      category="zelfbeeld"
      heroImage={heroImage}
      heroAltText="Zelfbeeld & Zelfwaardering"
    >
      <ZorgContentSection>
        <WhatIsZelfbeeld />
      </ZorgContentSection>

      <ZorgContentSection>
        <ZelfbeeldTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
