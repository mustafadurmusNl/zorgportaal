// src/components/pages/SelfImagePage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsZelfbeeld,
  ZelfbeeldTypes,
} from "@/components/services/self_image";

export default function SelfImagePage() {
  return (
    <ZorgPageLayout category="zelfbeeld">
      <ZorgContentSection id="what-is-zelfbeeld">
        <WhatIsZelfbeeld />
      </ZorgContentSection>

      <ZorgContentSection id="zelfbeeld-types">
        <ZelfbeeldTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
