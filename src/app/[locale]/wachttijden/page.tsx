"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const WachttijdenPage = () => {
  const t = useTranslations("wachttijden");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      {/* Spacing div to separate from navbar */}
      <div style={{ height: "120px" }}></div>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {locale === "nl" ? "ACTUELE INFORMATIE" : "CURRENT INFORMATION"}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === "nl" ? "Wachttijden" : "Waiting Times"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === "nl"
                ? "Hieronder vindt u de actuele wachttijden voor onze verschillende locaties en behandelprogramma's."
                : "Below you will find the current waiting times for our various locations and treatment programs."}
            </p>
          </div>

          {/* Waiting times cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === "nl" ? "Angst behandeling" : "Anxiety treatment"}
              </h3>
              <div className="text-2xl font-bold text-cyan-600 mb-2">
                2-3 weken
              </div>
              <p className="text-gray-600 text-sm">
                {locale === "nl"
                  ? "Voor intake afspraak"
                  : "For intake appointment"}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === "nl"
                  ? "Depressie behandeling"
                  : "Depression treatment"}
              </h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                3-4 weken
              </div>
              <p className="text-gray-600 text-sm">
                {locale === "nl"
                  ? "Voor intake afspraak"
                  : "For intake appointment"}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === "nl" ? "ADHD diagnostiek" : "ADHD diagnostics"}
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-2">
                6-8 weken
              </div>
              <p className="text-gray-600 text-sm">
                {locale === "nl"
                  ? "Voor intake afspraak"
                  : "For intake appointment"}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === "nl" ? "Trauma behandeling" : "Trauma treatment"}
              </h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">
                4-6 weken
              </div>
              <p className="text-gray-600 text-sm">
                {locale === "nl"
                  ? "Voor intake afspraak"
                  : "For intake appointment"}
              </p>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="text-blue-800">
              <strong>{locale === "nl" ? "Let op: " : "Note: "}</strong>
              {locale === "nl"
                ? "Wachttijden kunnen per locatie en therapeut verschillen. We houden u altijd op de hoogte van de actuele wachttijd bij uw aanmelding."
                : "Waiting times may vary per location and therapist. We always keep you informed of the current waiting time when you register."}
            </p>
          </div>

          {/* Contact info */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              {locale === "nl"
                ? "Vragen over wachttijden? Neem contact met ons op:"
                : "Questions about waiting times? Contact us:"}
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="tel:010-4504071"
                className="text-cyan-600 font-semibold hover:text-cyan-700"
              >
                010 - 450 40 71
              </a>
              <a
                href="mailto:info@forta.nl"
                className="text-cyan-600 font-semibold hover:text-cyan-700"
              >
                info@forta.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WachttijdenPage;
