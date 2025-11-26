// src/components/pages/PersoonlijkheidPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsPersoonlijkheid,
  PersoonlijkheidTypes,
} from "@/components/services/personality";

export default function PersoonlijkheidPage() {
  return (
    <ZorgPageLayout category="persoonlijkheid">
      <ZorgContentSection>
        <WhatIsPersoonlijkheid />
      </ZorgContentSection>

      <ZorgContentSection>
        <PersoonlijkheidTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
