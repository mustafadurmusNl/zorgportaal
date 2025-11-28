// src/components/pageConfig.ts
import dynamic from "next/dynamic";
import { AboutUsSidebar } from "@/components";

// Simple page configuration
export const PAGE_CONFIG = {
  // Category pages (zorgaanbod/[category])
  category: {
    components: {
      angst: dynamic(() => import("./pages/AnxietyPage")),
      depressie: dynamic(() => import("./pages/DepressionPage")),
      adhd: dynamic(() => import("./pages/ADHDPage")),
      trauma: dynamic(() => import("./pages/TraumaPage")),
      somatiek: dynamic(() => import("./pages/SomaticPage")),
      zelfbeeld: dynamic(() => import("./pages/SelfImagePage")),
      persoonlijkheid: dynamic(() => import("./pages/PersonalityPage")),
    },
    layout: "none",
    fallback: {
      title: (page: string) =>
        `${page.charAt(0).toUpperCase() + page.slice(1)} Treatment`,
      subtitle: (page: string) =>
        `Professional ${page} treatment and support services`,
    },
  },

  // Client pages (voor-klanten/[page])
  client: {
    components: {
      "voor-wie": dynamic(() => import("./pages/ForWhomPage")),
      "intake-behandelplan": dynamic(
        () => import("./pages/IntakeAndTreatmentPage")
      ),
      wachttijden: dynamic(() => import("./pages/WaitingTimesPage")),
      vergoeding: dynamic(() => import("./pages/ReimbursementPage")),
    },
    layout: "none",
    fallback: {
      title: (page: string) =>
        page
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      subtitle: () => "Information for clients",
    },
  },

  // About us pages (over-ons/[page])
  about: {
    components: {
      locaties: dynamic(() => import("./pages/LocationsPage")),
      team: dynamic(() => import("./pages/TeamPage")),
      kwaliteit: dynamic(() => import("./pages/QualityPage")),
    },
    layout: "sidebar",
    sidebar: AboutUsSidebar,
    fallback: {
      title: (page: string) => page.charAt(0).toUpperCase() + page.slice(1),
      subtitle: () => "About our practice",
    },
  },
} as const;

export type PageType = keyof typeof PAGE_CONFIG;
export type PageName<T extends PageType> =
  keyof (typeof PAGE_CONFIG)[T]["components"];
