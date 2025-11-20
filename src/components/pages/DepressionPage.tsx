// src/components/pages/DepressionPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsDepression,
  MajorDepression,
  DepressionTypes,
} from "@/components/services/depression";

interface DepressionPageProps {
  heroImage: string;
}

export default function DepressionPage({ heroImage }: DepressionPageProps) {
  return (
    <ZorgPageLayout
      category="depression"
      heroImage={heroImage}
      heroAltText="Depression therapy session"
    >
      {/* Content sections using generic wrapper */}
      <ZorgContentSection>
        <WhatIsDepression />
      </ZorgContentSection>

      <ZorgContentSection>
        <MajorDepression />
      </ZorgContentSection>

      <ZorgContentSection>
        <DepressionTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
