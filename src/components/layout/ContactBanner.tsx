// src/components/layout/ContactBanner.tsx
"use client";

import { useTranslations } from "next-intl";

export function ContactBanner() {
  const t = useTranslations("footer.contact_banner");

  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left section - Title and description */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-1">{t("title")}</h3>
            <p className="text-white/90 text-sm">{t("description")}</p>
          </div>

          {/* Right section - Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            {/* Email */}
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a
                href="mailto:info@groeipunt.nl"
                className="font-medium hover:text-white/80 transition-colors"
              >
                {t("email")}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-medium">{t("phone")}</div>
                <div className="text-xs text-white/80">{t("hours")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
