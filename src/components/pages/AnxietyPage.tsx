// src/components/pages/AnxietyPage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/zorg";
import {
  WhatIsAnxiety,
  PanicDisorder,
  AnxietyDisorders,
} from "@/components/zorgaanbod/anxiety";

interface AnxietyPageProps {
  heroImage: string;
}

export default function AnxietyPage({ heroImage }: AnxietyPageProps) {
  return (
    <ZorgPageLayout
      category="anxiety"
      heroImage={heroImage}
      heroAltText="Anxiety therapy session"
    >
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
