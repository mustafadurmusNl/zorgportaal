// src/components/pages/SomaticPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import { WhatIsSomatiek, SomatiekTypes } from "@/components/services/somatic";

interface SomaticPageProps {
  heroImage: string;
}

export default function SomaticPage({ heroImage }: SomaticPageProps) {
  return (
    <ZorgPageLayout category="somatiek" heroImage={heroImage}>
      <ZorgContentSection id="what-is-somatiek">
        <WhatIsSomatiek />
      </ZorgContentSection>

      <ZorgContentSection id="somatiek-types">
        <SomatiekTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
