// src/components/pages/SomatiekPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/zorg";
import { WhatIsSomatiek, SomatiekTypes } from "@/components/zorgaanbod/somatic";

interface SomatiekPageProps {
  heroImage: string;
}

export default function SomatiekPage({ heroImage }: SomatiekPageProps) {
  return (
    <ZorgPageLayout
      category="somatiek"
      heroImage={heroImage}
      heroAltText="Somatic & Psych-related care"
    >
      <ZorgContentSection>
        <WhatIsSomatiek />
      </ZorgContentSection>

      <ZorgContentSection>
        <SomatiekTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
