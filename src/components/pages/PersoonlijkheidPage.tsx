// src/components/pages/PersoonlijkheidPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/zorg";
import {
  WhatIsPersoonlijkheid,
  PersoonlijkheidTypes,
} from "@/components/zorgaanbod/personality";

interface PersoonlijkheidPageProps {
  heroImage: string;
}

export default function PersoonlijkheidPage({
  heroImage,
}: PersoonlijkheidPageProps) {
  return (
    <ZorgPageLayout
      category="persoonlijkheid"
      heroImage={heroImage}
      heroAltText="Personality-related care"
    >
      <ZorgContentSection>
        <WhatIsPersoonlijkheid />
      </ZorgContentSection>

      <ZorgContentSection>
        <PersoonlijkheidTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
