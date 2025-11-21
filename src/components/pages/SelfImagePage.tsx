// src/components/pages/SelfImagePage.tsx
import { ZorgPageLayout, ZorgContentSection } from "@/components/care";
import {
  WhatIsZelfbeeld,
  ZelfbeeldTypes,
} from "@/components/services/self_image";

interface SelfImagePageProps {
  heroImage: string;
}

export default function SelfImagePage({ heroImage }: SelfImagePageProps) {
  return (
    <ZorgPageLayout category="zelfbeeld" heroImage={heroImage}>
      <ZorgContentSection id="what-is-zelfbeeld">
        <WhatIsZelfbeeld />
      </ZorgContentSection>

      <ZorgContentSection id="zelfbeeld-types">
        <ZelfbeeldTypes />
      </ZorgContentSection>
    </ZorgPageLayout>
  );
}
