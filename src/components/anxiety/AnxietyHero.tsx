"use client";

import { useTranslations } from "next-intl";
import { Button, Badge } from "@/components/ui";
import Image from "next/image";

interface AnxietyHeroProps {
  imageUrl?: string;
}

const AnxietyHero = ({ imageUrl }: AnxietyHeroProps) => {
  const t = useTranslations("angst");
  const breadcrumbT = useTranslations("angst.breadcrumb");

  return (
    <>
      {/* Spacing div to separate from navbar */}
      <div style={{ height: "120px" }}></div>

      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Split Layout Container */}
        <div
          className="max-w-7xl mx-auto min-h-[60vh]"
          style={{ paddingLeft: "60px", paddingRight: "60px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[60vh] items-center py-12">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <Badge variant="anxiety">{breadcrumbT("clients")}</Badge>
                <span className="text-gray-400">→</span>
                <span className="text-gray-600 text-sm">
                  {breadcrumbT("care")}
                </span>
                <span className="text-gray-400">→</span>
                <Badge
                  variant="outline"
                  className="border-cyan-500 text-cyan-600"
                >
                  {breadcrumbT("anxiety")}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("title")}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("description")}
              </p>

              <div>
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    // Navigate to registration page
                    window.location.href = "/aanmelden";
                  }}
                >
                  {t("cta")}
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-80 lg:h-96">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="Anxiety therapy session"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200 rounded-2xl shadow-xl flex items-center justify-center">
                    {/* Fallback design with calming elements */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      {/* Therapy session silhouettes */}
                      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-60 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/3 w-16 h-32 bg-gradient-to-b from-blue-100 to-cyan-100 rounded-lg opacity-40"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-20 h-28 bg-gradient-to-b from-cyan-100 to-blue-100 rounded-lg opacity-40"></div>

                      {/* Floating calming particles */}
                      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-100 opacity-60"></div>
                      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300 opacity-60"></div>
                      <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-blue-200 rounded-full animate-bounce delay-500 opacity-60"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnxietyHero;
