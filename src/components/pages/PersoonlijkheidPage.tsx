// src/components/pages/PersoonlijkheidPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsPersoonlijkheid,
  PersoonlijkheidTypes,
} from "@/components/services/personality";

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
