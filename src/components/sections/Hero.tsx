"use client";

import { useTranslations } from "next-intl";
import { CustomButton } from "@/components/ui";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="hero-section">
      {/* Background Video Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* Animated background that simulates video */}
          <div className="relative w-full h-full bg-gradient-to-l from-cyan-100 via-teal-50 to-transparent">
            {/* Face/Eye effect area */}
            <div className="absolute right-0 top-1/4 w-96 h-96 opacity-30">
              <div className="relative w-full h-full">
                {/* Eye area */}
                <div className="absolute top-1/3 right-1/4 w-24 h-12 bg-gradient-to-r from-blue-200 to-gray-300 rounded-full transform rotate-12 animate-pulse"></div>
                {/* Skin tone areas */}
                <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-bl from-cyan-100 to-teal-100 rounded-bl-full opacity-70"></div>
                <div className="absolute bottom-0 right-12 w-32 h-32 bg-gradient-to-tl from-cyan-50 to-transparent rounded-full opacity-50"></div>
              </div>
            </div>
            {/* Floating particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-3/4 right-1/2 w-3 h-3 bg-cyan-200 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content relative z-10">
        <div className="hero-badge">{t("welcome")}</div>

        <h1 className="hero-title">{t("title")}</h1>

        <p className="hero-subtitle">{t("subtitle")}</p>

        <div className="hero-buttons">
          <CustomButton
            title={t("treatments")}
            btnType="button"
            containerStyles="custom-btn-primary"
            handleClick={() => {}}
          />
          <CustomButton
            title={t("waitingTimes")}
            btnType="button"
            containerStyles="custom-btn-secondary"
            handleClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
