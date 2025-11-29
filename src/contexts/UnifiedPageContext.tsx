// src/contexts/UnifiedPageContext.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import type { Locale } from "@/i18n/request";

export type PageType = "category" | "client" | "about";

interface UnifiedPageData {
  pageType: PageType;
  page: string;
  locale: Locale;
  messages: Record<string, unknown>;

  // Optional fields for specific page types
  heroImage?: string; // For category pages (zorgaanbod)
  category?: string; // For category pages (zorgaanbod)
}

interface UnifiedPageContextType extends UnifiedPageData {
  // Helper functions
  getCategoryData: (key?: string) => unknown;
  getPageData: (section: string, key?: string) => unknown;
  t: (key: string, section?: string) => string;
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
  const { pageType, page, locale, messages, heroImage, category } = data;

  // Helper function to get category-specific data (for zorgaanbod)
  const getCategoryData = (key?: string) => {
    if (pageType !== "category" || !category) return undefined;

    const categoryData = messages[category] as
      | Record<string, unknown>
      | undefined;
    return key ? categoryData?.[key] : categoryData;
  };

  // Helper function to get page-specific data (for client/about pages)
  const getPageData = (section: string, key?: string) => {
    const sectionData = messages[section] as
      | Record<string, unknown>
      | undefined;
    const pageData = sectionData?.[page] as Record<string, unknown> | undefined;
    return key ? pageData?.[key] : pageData;
  };

  // Universal translation helper
  const t = (key: string, section?: string) => {
    const keys = key.split(".");
    let value: unknown;

    if (pageType === "category" && category) {
      // For category pages, use category as base
      value = messages[category];
    } else if (section) {
      // For client/about pages with section specified
      value = messages[section];
    } else {
      // Fallback to direct message access
      value = messages;
    }

    // Navigate through the key path
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const contextValue: UnifiedPageContextType = {
    pageType,
    page,
    locale,
    messages,
    heroImage,
    category,
    getCategoryData,
    getPageData,
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

// Backward compatibility - alias for existing zorgaanbod usage
export const useZorgaanbod = useUnifiedPage;

export type { UnifiedPageData };
