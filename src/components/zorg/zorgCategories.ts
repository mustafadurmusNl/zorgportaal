// Central category mapping for zorgaanbod pages.
// This file is the single source of truth for category keys, translation keys and
// component entry paths. It does NOT change runtime behavior yet — it's safe to
// expand and later wire into Navbar/Sidebar/CategoryPageRenderer.

export type ZorgCategoryKey =
  | "angst"
  | "depressie"
  | "adhd"
  | "trauma"
  | "somatiek"
  | "zelfbeeld"
  | "persoonlijkheid";

export interface ZorgCategoryMeta {
  // internal key used in routes and translations
  key: ZorgCategoryKey;
  // translation namespace key (messages.*)
  translationKey: string;
  // human-readable slug (used in URLs) — same as key for now
  slug: string;
  // (Optional) relative page import path (string) for reference. Keep in sync with
  // actual pages in `src/components/pages` if you plan to programmatically import.
  pageImportPath?: string;
  icon?: string;
  footerKey?: string; // key used in footer/services or sidebar translations
}

export const ZORG_CATEGORIES: Record<ZorgCategoryKey, ZorgCategoryMeta> = {
  angst: {
    key: "angst",
    translationKey: "angst",
    slug: "angst",
    pageImportPath: "./pages/AnxietyPage",
    icon: "🧠",
    footerKey: "anxiety",
  },
  depressie: {
    key: "depressie",
    translationKey: "depressie",
    slug: "depressie",
    pageImportPath: "./pages/DepressionPage",
    icon: "💙",
    footerKey: "depression",
  },
  adhd: {
    key: "adhd",
    translationKey: "adhd",
    slug: "adhd",
    pageImportPath: "./pages/ADHDPage",
    icon: "⚡",
    footerKey: "adhd",
  },
  trauma: {
    key: "trauma",
    translationKey: "trauma",
    slug: "trauma",
    pageImportPath: "./pages/TraumaPage",
    icon: "🛡️",
    footerKey: "trauma",
  },
  somatiek: {
    key: "somatiek",
    translationKey: "somatiek",
    slug: "somatiek",
    pageImportPath: "./pages/SomatiekPage",
    icon: "🔗",
    footerKey: "psychosomatic",
  },
  zelfbeeld: {
    key: "zelfbeeld",
    translationKey: "zelfbeeld",
    slug: "zelfbeeld",
    pageImportPath: "./pages/ZelfbeeldPage",
    icon: "🪞",
    footerKey: "self_image",
  },
  persoonlijkheid: {
    key: "persoonlijkheid",
    translationKey: "persoonlijkheid",
    slug: "persoonlijkheid",
    pageImportPath: "./pages/PersoonlijkheidPage",
    icon: "🎭",
    footerKey: "personality",
  },
};

export const ZORG_CATEGORY_KEYS = Object.keys(
  ZORG_CATEGORIES
) as ZorgCategoryKey[];
export interface ZorgCategory {
  id: string;
  href: string;
  icon?: string;
  footerKey?: string; // key used in footer/services or sidebar translations
}

// Build the array form from the record so there's a single source of truth.
export const zorgCategories: ZorgCategory[] = Object.values(
  ZORG_CATEGORIES
).map((c) => ({
  id: c.key,
  href: `/zorgaanbod/${c.slug}`,
  icon: c.icon,
  footerKey: c.footerKey,
}));

export default zorgCategories;
