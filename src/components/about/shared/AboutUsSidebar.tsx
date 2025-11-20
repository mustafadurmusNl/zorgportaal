// src/components/over-ons/shared/AboutUsSidebar.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ABOUT_PAGES = [
  {
    id: "locaties",
    href: "/over-ons/locaties",
    icon: "📍",
    translationKey: "locaties",
  },
  {
    id: "team",
    href: "/over-ons/team",
    icon: "👨‍⚕️",
    translationKey: "team",
  },
  {
    id: "kwaliteit",
    href: "/over-ons/kwaliteit",
    icon: "⭐",
    translationKey: "kwaliteit",
  },
];

export function AboutUsSidebar() {
  const t = useTranslations("navigation");
  const sidebarT = useTranslations("sidebar");
  const locale = useLocale();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-100 sticky top-24 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-full"
      }`}
    >
      {/* Header with collapse button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!isCollapsed && (
          <h3 className="text-lg font-semibold text-pink-600">
            {t("over-ons")}
          </h3>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation items */}
      <div className="p-4">
        <div className="space-y-2">
          {ABOUT_PAGES.map((item) => {
            const isActive = pathname.includes(item.href);
            const linkHref = `/${locale}${item.href}`;

            return (
              <Link
                key={item.id}
                href={linkHref}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-pink-50 text-pink-600 border-l-4 border-pink-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
                }`}
                title={isCollapsed ? t(item.translationKey) : undefined}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="text-sm font-medium flex-1">
                      {t(item.translationKey)}
                    </span>
                    {!isActive && (
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                    {isActive && (
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </div>

        {/* Help section - always show when expanded */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">
                {sidebarT("help_needed")}
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Vragen over onze organisatie? We vertellen je graag meer.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center text-xs font-medium text-pink-600 hover:text-pink-700 transition-colors"
              >
                {sidebarT("contact_button")}
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
