"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ZorgaanbodSidebar = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const zorgaanbodItems = [
    {
      id: "angst",
      title: "Angst",
      href: "/angst",
      icon: "🧠",
    },
    {
      id: "adhd",
      title: "ADHD",
      href: "/zorgaanbod/adhd",
      icon: "⚡",
    },
    {
      id: "depressie",
      title: "Depressie",
      href: "/zorgaanbod/depressie",
      icon: "💙",
    },
    {
      id: "trauma",
      title: "Trauma & PTSS",
      href: "/zorgaanbod/trauma",
      icon: "🛡️",
    },
    {
      id: "somatiek",
      title: "Somatiek & Psyche",
      href: "/zorgaanbod/somatiek",
      icon: "🔗",
    },
    {
      id: "zelfbeeld",
      title: "Zelfbeeldproblematiek",
      href: "/zorgaanbod/zelfbeeld",
      icon: "🪞",
    },
    {
      id: "persoonlijkheid",
      title: "Persoonlijkheidsproblematiek",
      href: "/zorgaanbod/persoonlijkheid",
      icon: "🎭",
    },
    {
      id: "psycho-oncologie",
      title: "Forta De Vruchtenburg",
      href: "/zorgaanbod/psycho-oncologie",
      icon: "🌱",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t("zorgaanbod")}
      </h3>

      <div className="space-y-2">
        {zorgaanbodItems.map((item) => {
          const isActive = pathname.includes(item.href);

          return (
            <Link
              key={item.id}
              href={`/${locale}${item.href}`}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-pink-50 text-pink-600 border-l-4 border-pink-500"
                  : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium flex-1">{item.title}</span>
              {!isActive && (
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors"
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
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">
            Hulp nodig?
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            Neem contact op voor persoonlijk advies over onze
            zorgprogramma&apos;s.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            Contact opnemen
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
    </div>
  );
};

export default ZorgaanbodSidebar;
