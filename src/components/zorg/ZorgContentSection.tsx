"use client";

import { ReactNode } from "react";

interface ZorgContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const ZorgContentSection = ({
  title,
  children,
  className = "",
}: ZorgContentSectionProps) => {
  return (
    <section
      className={`bg-white rounded-xl p-16 shadow-lg border border-gray-100 ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
          {title}
        </h2>
      )}
      <div className="max-w-none">{children}</div>
    </section>
  );
};

export default ZorgContentSection;
