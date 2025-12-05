"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const AanmeldenPage = () => {
  const t = useTranslations("aanmelden");
  const params = useParams();
  const locale = params.locale as string;

  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  });

  const toggleSection = (sectionNumber: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionNumber]: !prev[sectionNumber],
    }));
  };

  return (
    <>
      {/* Spacing div to separate from navbar */}
      <div style={{ height: "120px" }}></div>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {locale === "nl" ? "AANMELDEN" : "REGISTER"}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {locale === "nl"
                    ? "Aanmeldinformatie"
                    : "Registration Information"}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {locale === "nl"
                    ? "Je kunt je bij Forta Volwassenen aanmelden voor behandeling op verwijzing van je huisarts, bedrijfsarts of medisch specialist. Heb je vragen over de aanmeldprocedure? Neem dan gerust contact met ons op."
                    : "You can register with Forta Adults for treatment on referral from your GP, company doctor or medical specialist. Do you have questions about the registration procedure? Please feel free to contact us."}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {locale === "nl"
                    ? "Aanmelden voor behandeling bij Forta Volwassenen kan op verwijzing van je huisarts of andere behandelaar. Hieronder lees je hoe dat werkt."
                    : "Registration for treatment at Forta Adults is possible on referral from your GP or other healthcare provider. Below you can read how this works."}
                </p>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-4">
                {/* Section 1 - Aanmelden */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-pink-600 font-bold text-lg mr-4">
                        1.
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {locale === "nl" ? "Aanmelden" : "Registration"}
                      </h3>
                    </div>
                    {openSections[1] ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {openSections[1] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 text-gray-700 space-y-4">
                        <p>
                          {locale === "nl"
                            ? "Om je aan te melden voor een behandeling heb je een verwijsbrief van je verwijzer nodig. Zonder verwijsbrief kunnen wij de aanmelding niet in behandeling nemen."
                            : "To register for treatment you need a referral letter from your referrer. Without a referral letter we cannot process the registration."}
                        </p>
                        <p>
                          {locale === "nl" ? (
                            <>
                              Voor overige informatie en/of vragen kun je ons
                              bellen via{" "}
                              <a
                                href="tel:010-4504071"
                                className="text-pink-600 font-semibold hover:text-pink-700"
                              >
                                (010 - 450 40 71)
                              </a>
                              , mailen via{" "}
                              <a
                                href="mailto:info@forta.nl"
                                className="text-pink-600 font-semibold hover:text-pink-700"
                              >
                                info@forta.nl
                              </a>{" "}
                              of gebruik maken van het contactformulier, je
                              wordt dan binnen 2 werkdagen door een van onze
                              secretaresses teruggebeld.
                            </>
                          ) : (
                            <>
                              For additional information and/or questions you
                              can call us at{" "}
                              <a
                                href="tel:010-4504071"
                                className="text-pink-600 font-semibold hover:text-pink-700"
                              >
                                (010 - 450 40 71)
                              </a>
                              , email us at{" "}
                              <a
                                href="mailto:info@forta.nl"
                                className="text-pink-600 font-semibold hover:text-pink-700"
                              >
                                info@forta.nl
                              </a>{" "}
                              or use the contact form, you will then be called
                              back by one of our secretaries within 2 working
                              days.
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 2 - Intakegesprek plannen */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <button
                    onClick={() => toggleSection(2)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-pink-600 font-bold text-lg mr-4">
                        2.
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {locale === "nl"
                          ? "Intakegesprek plannen"
                          : "Schedule intake interview"}
                      </h3>
                    </div>
                    {openSections[2] ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {openSections[2] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 text-gray-700 space-y-4">
                        <p>
                          {locale === "nl"
                            ? "Zodra wij intake afspraken kunnen gaan inplannen, nemen wij telefonisch contact met je op. Houd rekening met de wachttijden, deze kunnen per locatie verschillen ("
                            : "As soon as we can schedule intake appointments, we will contact you by phone. Please take into account the waiting times, these can vary per location ("}
                          <a
                            href="#"
                            className="text-pink-600 font-semibold hover:text-pink-700"
                            onClick={(e) => {
                              e.preventDefault();
                              // Navigate to waiting times page
                              window.location.href = `/${locale}/wachttijden`;
                            }}
                          >
                            {locale === "nl"
                              ? "bekijk hier onze wachttijden"
                              : "view our waiting times here"}
                          </a>
                          {locale === "nl" ? ")." : ")."}
                        </p>
                        <p>
                          {locale === "nl"
                            ? "Bij de digitale poli verlopen de intakegesprekken en alle behandelingen online via beeldbellen."
                            : "At the digital clinic, intake interviews and all treatments take place online via video calling."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 3 - Intakegesprek */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <button
                    onClick={() => toggleSection(3)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-pink-600 font-bold text-lg mr-4">
                        3.
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {locale === "nl" ? "Intakegesprek" : "Intake interview"}
                      </h3>
                    </div>
                    {openSections[3] ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {openSections[3] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 text-gray-700">
                        <p>
                          {locale === "nl"
                            ? "Tijdens het intakegesprek bespreken we je hulpvraag en kijken we samen naar de beste behandeling voor jouw situatie."
                            : "During the intake interview we discuss your request for help and together we look at the best treatment for your situation."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Questions or Help Card */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === "nl"
                      ? "Vragen of hulp nodig?"
                      : "Questions or need help?"}
                  </h3>
                  <p className="text-pink-100 mb-6 leading-relaxed">
                    {locale === "nl"
                      ? "Voor consultatie kunt u contact opnemen met ons centraal secretariaat. Zij brengen u in contact met de juiste zorgprofessional."
                      : "For consultation you can contact our central secretariat. They will put you in contact with the right healthcare professional."}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-full p-3 mr-4">
                        <EnvelopeIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <a
                          href="mailto:info@forta.nl"
                          className="text-white font-semibold hover:text-pink-100 transition-colors"
                        >
                          info@forta.nl
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-full p-3 mr-4">
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <a
                          href="tel:010-4504071"
                          className="text-white font-semibold hover:text-pink-100 transition-colors"
                        >
                          010 - 450 40 71
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Referrers Card */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === "nl" ? "Voor verwijzers" : "For referrers"}
                  </h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    {locale === "nl"
                      ? "Ben je huisarts, bedrijfsarts of medisch specialist en wil je een cliënt verwijzen naar Forta Volwassenen? Bekijk de..."
                      : "Are you a GP, company doctor or medical specialist and would you like to refer a client to Forta Adults? Check the..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AanmeldenPage;
