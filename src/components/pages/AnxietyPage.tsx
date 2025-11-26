// src/components/pages/AnxietyPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsAnxiety,
  PanicDisorder,
  AnxietyDisorders,
} from "@/components/services/anxiety";

export default function AnxietyPage() {
  return (
    <ZorgPageLayout category="anxiety">
      {/* Content sections using generic wrapper */}
      <ZorgContentSection>
        <WhatIsAnxiety />
      </ZorgContentSection>

      <ZorgContentSection>
        <PanicDisorder />
      </ZorgContentSection>

      <ZorgContentSection>
        <AnxietyDisorders />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
