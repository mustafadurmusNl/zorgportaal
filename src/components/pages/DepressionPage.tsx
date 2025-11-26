// src/components/pages/DepressionPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsDepression,
  MajorDepression,
  DepressionTypes,
} from "@/components/services/depression";

export default function DepressionPage() {
  return (
    <ZorgPageLayout category="depression">
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
