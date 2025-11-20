// src/components/pages/ZelfbeeldPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsZelfbeeld,
  ZelfbeeldTypes,
} from "@/components/services/self_image";

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
