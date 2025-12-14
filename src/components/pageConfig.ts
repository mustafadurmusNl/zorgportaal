// src/components/pageConfig.ts
import dynamic from "next/dynamic";
import { AboutUsSidebar } from "@/components";
import type { Section } from "@/contexts/UnifiedPageContext";

/**
 * Centralized page configuration
 *
 * Structure: PAGE_CONFIG[section][slug] = Component
 * This provides a consistent pattern for all pages across all sections
 */
export const PAGE_CONFIG = {
  // Zorgaanbod section - care services pages
  zorgaanbod: {
    pages: {
      overview: dynamic(() => import("./pages/ZorgaanbodOverviewPage")),
      angst: dynamic(() => import("./pages/AnxietyPage")),
      depressie: dynamic(() => import("./pages/DepressionPage")),
      adhd: dynamic(() => import("./pages/ADHDPage")),
      trauma: dynamic(() => import("./pages/TraumaPage")),
      somatiek: dynamic(() => import("./pages/SomaticPage")),
      zelfbeeld: dynamic(() => import("./pages/SelfImagePage")),
      persoonlijkheid: dynamic(() => import("./pages/PersonalityPage")),
    },
    layout: "none" as const,
  },

  // Clienten section - client information pages
  clienten: {
    pages: {
      "voor-wie": dynamic(() => import("./pages/ForWhomPage")),
      "intake-behandelplan": dynamic(
        () => import("./pages/IntakeAndTreatmentPage")
      ),
      wachttijden: dynamic(() => import("./pages/WaitingTimesPage")),
      vergoeding: dynamic(() => import("./pages/ReimbursementPage")),
    },
    layout: "none" as const,
  },

  // Over-ons section - about us pages
  "over-ons": {
    pages: {
      locaties: dynamic(() => import("./pages/LocationsPage")),
      team: dynamic(() => import("./pages/TeamPage")),
      kwaliteit: dynamic(() => import("./pages/QualityPage")),
    },
    layout: "sidebar" as const,
    sidebar: AboutUsSidebar,
  },
} as const;

// Type helpers for better type safety
export type ValidSection = keyof typeof PAGE_CONFIG;
export type ValidSlug<S extends ValidSection> =
  keyof (typeof PAGE_CONFIG)[S]["pages"];

// Helper to check if a slug is valid for a section
export function isValidSlug<S extends ValidSection>(
  section: S,
  slug: string
): boolean {
  return slug in PAGE_CONFIG[section].pages;
}

// Get all valid slugs for a section
export function getValidSlugs<S extends ValidSection>(section: S): string[] {
  return Object.keys(PAGE_CONFIG[section].pages);
}
