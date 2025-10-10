"use client";

import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("depressie.sections.testimonial");

  return (
    <section className="bg-white rounded-xl p-16 shadow-lg border border-gray-100">
      <div className="max-w-none">
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-12 h-12 text-purple-500 mx-auto"
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

export default Testimonial;
