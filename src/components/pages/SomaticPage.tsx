// src/components/pages/SomaticPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import { WhatIsSomatiek, SomatiekTypes } from "@/components/services/somatic";

export default function SomaticPage() {
  return (
    <ZorgPageLayout category="somatiek">
      <ZorgContentSection>
        <WhatIsSomatiek />
      </ZorgContentSection>

      <ZorgContentSection>
        <SomatiekTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
