// src/lib/i18n-utils.ts
import type { Locale } from "@/i18n/request";

/**
 * Centralized message loader to eliminate duplicate locale-based JSON imports
 */
export async function getMessages(locale: string): Promise<any> {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.warn(
      `Failed to load messages for locale: ${locale}, falling back to Dutch`
    );
    const fallbackMessages = await import(`../../messages/nl.json`);
    return fallbackMessages.default;
  }
}

/**
 * Get page-specific metadata with fallback support
 */
export function getPageMetadata(
  messages: any,
  section: string,
  pageKey: string,
  locale: Locale,
  fallbackTitles?: Record<string, { nl: string; en: string }>
) {
  const pageData = messages[section]?.[pageKey];
  const siteData = messages.site;

  const title = pageData?.title || fallbackTitles?.[pageKey]?.[locale];
  const description = pageData?.subtitle || pageData?.description;

  return {
    title: title ? `${title} | Zorgportaal` : "Zorgportaal",
    description: description || siteData?.description || "",
    pageData,
    siteData,
  };
}

/**
 * Category mapping between Dutch URLs and English components
 * This will be removed after we align folder structure with Dutch names
 */
export const CATEGORY_MAPPING: Record<string, string> = {
  angst: "anxiety",
  depressie: "depression",
  adhd: "adhd",
  trauma: "trauma",
  somatiek: "somatic",
  zelfbeeld: "self-image",
  persoonlijkheid: "personality",
};

/**
 * Valid categories for zorgaanbod
 */
export const VALID_CATEGORIES = [
  "angst",
  "depressie",
  "adhd",
  "trauma",
  "somatiek",
  "zelfbeeld",
  "persoonlijkheid",
] as const;

export type ValidCategory = (typeof VALID_CATEGORIES)[number];
