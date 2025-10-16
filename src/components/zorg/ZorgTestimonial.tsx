"use client";

import { useTranslations } from "next-intl";

// Theme colors for different categories
const TESTIMONIAL_THEMES = {
  anxiety: {
    background: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  depression: {
    background: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  adhd: {
    background: "bg-green-50",
    iconColor: "text-green-500",
  },
  trauma: {
    background: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  burnout: {
    background: "bg-red-50",
    iconColor: "text-red-500",
  },
} as const;

type CategoryType = keyof typeof TESTIMONIAL_THEMES;

// Category to translation key mapping
const CATEGORY_TO_TRANSLATION_KEY = {
  anxiety: "angst",
  depression: "depressie",
  adhd: "adhd",
  trauma: "trauma",
  burnout: "burnout",
} as const;

interface ZorgTestimonialProps {
  category: CategoryType;
}

const ZorgTestimonial = ({ category }: ZorgTestimonialProps) => {
  const translationKey = CATEGORY_TO_TRANSLATION_KEY[category];
  const t = useTranslations(`${translationKey}.sections.testimonial`);
  const theme = TESTIMONIAL_THEMES[category];

  return (
    <section className="bg-white rounded-xl p-16 shadow-lg border border-gray-100">
      <div className="max-w-none">
        <div className={`${theme.background} rounded-2xl p-8 md:p-12`}>
          <div className="text-center">
            <div className="mb-6">
              <svg
                className={`w-12 h-12 ${theme.iconColor} mx-auto`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-6">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>

            <div className="text-sm text-gray-600">
              <span className="font-medium">{t("source")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZorgTestimonial;
