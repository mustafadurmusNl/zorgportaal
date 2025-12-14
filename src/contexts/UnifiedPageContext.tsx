// src/contexts/UnifiedPageContext.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import type { Locale } from "@/i18n/request";

// Clearer section names instead of abstract types
export type Section = "zorgaanbod" | "clienten" | "over-ons";

interface UnifiedPageData {
  section: Section;
  slug: string; // Consistent naming: slug instead of page/category
  locale: Locale;
  messages: Record<string, unknown>;

  // Optional fields
  heroImage?: string; // For zorgaanbod pages
}

interface UnifiedPageContextType extends UnifiedPageData {
  // Simplified helper functions
  getContent: (key?: string) => unknown;
  t: (key: string) => string;
}

const UnifiedPageContext = createContext<UnifiedPageContextType | null>(null);

interface UnifiedPageProviderProps {
  data: UnifiedPageData;
  children: ReactNode;
}

export function UnifiedPageProvider({
  data,
  children,
}: UnifiedPageProviderProps) {
  const { section, slug, locale, messages, heroImage } = data;

  /**
   * Universal content getter - works for all sections
   *
   * For zorgaanbod: messages["zorgaanbod"][slug] - e.g., messages["zorgaanbod"]["angst"]
   * For clienten: messages["clienten"][slug] - e.g., messages["clienten"]["voor-wie"]
   * For over-ons: messages["over-ons"][slug] - e.g., messages["over-ons"]["locaties"]
   *
   * @param key - Optional nested key to access within the page data
   */
  const getContent = (key?: string) => {
    const sectionData = messages[section] as
      | Record<string, unknown>
      | undefined;
    const pageData = sectionData?.[slug] as Record<string, unknown> | undefined;

    if (!key) return pageData;

    // Support nested keys with dot notation (e.g., "sections.what_is_anxiety")
    const keys = key.split(".");
    let value: unknown = pageData;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }

    return value;
  };

  /**
   * Simplified translation helper
   *
   * @param key - Dot-notation key path (e.g., "title" or "sections.hero.title")
   */
  const t = (key: string): string => {
    const value = getContent(key);
    return typeof value === "string" ? value : key;
  };

  const contextValue: UnifiedPageContextType = {
    section,
    slug,
    locale,
    messages,
    heroImage,
    getContent,
    t,
  };

  return (
    <UnifiedPageContext.Provider value={contextValue}>
      {children}
    </UnifiedPageContext.Provider>
  );
}

export function useUnifiedPage() {
  const context = useContext(UnifiedPageContext);
  if (!context) {
    throw new Error("useUnifiedPage must be used within a UnifiedPageProvider");
  }
  return context;
}

// Backward compatibility aliases
export const useZorgaanbod = useUnifiedPage;
export const useClienten = useUnifiedPage;
export const useOverOns = useUnifiedPage;

export type { UnifiedPageData };
