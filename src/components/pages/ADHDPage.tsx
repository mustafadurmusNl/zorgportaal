// src/components/pages/ADHDPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import { WhatIsADHD, ADHDTypes } from "@/components/services/adhd";

export default function ADHDPage() {
  return (
    <ZorgPageLayout category="adhd">
      <ZorgContentSection>
        <WhatIsADHD />
      </ZorgContentSection>

      <ZorgContentSection>
        <ADHDTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
