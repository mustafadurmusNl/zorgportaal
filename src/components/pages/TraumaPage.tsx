// src/components/pages/TraumaPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import { WhatIsTrauma, TraumaTypes } from "@/components/services/trauma";

export default function TraumaPage() {
  return (
    <ZorgPageLayout category="trauma">
      <ZorgContentSection>
        <WhatIsTrauma />
      </ZorgContentSection>

      <ZorgContentSection>
        <TraumaTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
