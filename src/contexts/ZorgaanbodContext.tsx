// src/contexts/ZorgaanbodContext.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import type { Locale } from "@/i18n/request";

interface ZorgaanbodData {
  category: string;
  locale: Locale;
  heroImage: string;
  messages: any;
}

interface ZorgaanbodContextType extends ZorgaanbodData {
  getCategoryData: (key?: string) => any;
  t: (key: string) => string;
}

const ZorgaanbodContext = createContext<ZorgaanbodContextType | null>(null);

interface ZorgaanbodProviderProps {
  data: ZorgaanbodData;
  children: ReactNode;
}

export function ZorgaanbodProvider({
  data,
  children,
}: ZorgaanbodProviderProps) {
  const { category, locale, heroImage, messages } = data;

  // Helper function to get category-specific data
  const getCategoryData = (key?: string) => {
    const categoryData = messages[category];
    return key ? categoryData?.[key] : categoryData;
  };

  // Translation helper for category-specific strings
  const t = (key: string) => {
    const keys = key.split(".");
    let value = messages[category];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const contextValue: ZorgaanbodContextType = {
    category,
    locale,
    heroImage,
    messages,
    getCategoryData,
    t,
  };

  return (
    <ZorgaanbodContext.Provider value={contextValue}>
      {children}
    </ZorgaanbodContext.Provider>
  );
}

export function useZorgaanbod() {
  const context = useContext(ZorgaanbodContext);
  if (!context) {
    throw new Error("useZorgaanbod must be used within a ZorgaanbodProvider");
  }
  return context;
}

export type { ZorgaanbodData };
