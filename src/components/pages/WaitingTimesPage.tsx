// src/components/pages/WaitingTimesPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function WaitingTimesPage() {
  const t = useTranslations("global");
  
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Wachttijden
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Actuele wachttijden voor onze verschillende zorgprogramma's
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Current Waiting Times */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Huidige wachttijden
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Angststoornissen
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      2-3 weken
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Behandeling van paniekaanvallen, fobieën en gegeneraliseerde angststoornis
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      Laatste update: 15 januari 2024
                    </span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Depressie
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      3-4 weken
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Behandeling van unipolare en bipolaire stemmingsstoornissen
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      Laatste update: 15 januari 2024
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Trauma en PTSS
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      2-3 weken
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    EMDR en andere traumabehandelingen
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      Laatste update: 15 januari 2024
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Psycho-oncologie
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      1-2 weken
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Begeleiding bij kanker en andere levensbedreigende ziekten
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      Laatste update: 15 januari 2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="text-blue-400 text-xl">ℹ️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Let op
                    </h3>
                    <p className="mt-2 text-sm text-blue-700">
                      Dit zijn gemiddelde wachttijden. Afhankelijk van urgentie en beschikbaarheid kunnen wachttijden afwijken.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Van aanmelding tot behandeling
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Het proces van aanmelding tot start van de behandeling bestaat uit verschillende stappen.
              </p>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Aanmelding
                      </h3>
                      <p className="text-gray-700 mb-3">
                        U meldt zich aan via telefoon of e-mail. We plannen binnen 1 week een telefonische intake.
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          Geschatte duur:
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          1 week
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-5 top-12 w-px h-12 bg-gray-200"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <span className="text-blue-600 font-semibold">2</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Telefonische intake
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Een ervaren therapeut voert een uitgebreid telefonisch gesprek om uw hulpvraag in kaart te brengen.
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          Geschatte duur:
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          Direct na aanmelding
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-5 top-12 w-px h-12 bg-gray-200"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Wachtlijst plaatsing
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Na de telefonische intake wordt u op de wachtlijst geplaatst voor de juiste behandeling.
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          Geschatte duur:
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          2-4 weken
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-5 top-12 w-px h-12 bg-gray-200"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <span className="text-blue-600 font-semibold">4</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Start behandeling
                      </h3>
                      <p className="text-gray-700 mb-3">
                        U krijgt bericht wanneer er plek is en kunt starten met de behandeling bij uw toegewezen therapeut.
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          Geschatte duur:
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          Direct na oproep
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Cases */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Spoedeisende gevallen
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="text-red-400 text-2xl">🚨</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-red-800 mb-4">
                      Acute hulp beschikbaar
                    </h3>
                    <p className="text-red-700 mb-4">
                      Bij acute suïcidale gedachten of andere crisissituaties kunnen we vaak binnen 24-48 uur een gesprek inplannen.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-medium text-red-800">
                        Wanneer is er sprake van urgentie?
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            Suïcidale gedachten met concrete plannen
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            Ernstige psychose of realiteitsverlies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            Acute traumatische gebeurtenis
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 p-4 bg-red-100 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Bij acute crisissituaties:</strong> Bel direct 010-450 40 71 of ga naar de Spoedeisende Hulp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alternatieve opties
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tijdens de wachttijd zijn er verschillende alternatieven beschikbaar voor ondersteuning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Online zelfhulp
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Digitale modules voor angst en depressie via onze partners.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wachttijd:</span>
                      <span className="text-sm font-medium text-blue-600">Direct beschikbaar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Contact:</span>
                      <span className="text-sm font-medium text-gray-900">010-450 40 71</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Groepstherapie
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Groepsbehandelingen voor specifieke klachten starten regelmatig.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wachttijd:</span>
                      <span className="text-sm font-medium text-blue-600">1-2 weken</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Contact:</span>
                      <span className="text-sm font-medium text-gray-900">010-450 40 71</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Huisartspsycholoog
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Korte behandelingen via de huisartspsychologie.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wachttijd:</span>
                      <span className="text-sm font-medium text-blue-600">1 week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Contact:</span>
                      <span className="text-sm font-medium text-gray-900">Via huisarts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Crisisdienst
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    24/7 bereikbare crisishulp voor acute situaties.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wachttijd:</span>
                      <span className="text-sm font-medium text-blue-600">Direct</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Contact:</span>
                      <span className="text-sm font-medium text-gray-900">0800-0113</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vragen over wachttijden?
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-700 mb-4 leading-relaxed">
                  Heeft u vragen over onze wachttijden of wilt u weten of eerder starten mogelijk is? Neem gerust contact met ons op.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Telefoon
                    </h3>
                    <p className="text-blue-600 font-medium">
                      010-450 40 71
                    </p>
                    <p className="text-sm text-blue-600">
                      Ma-vr 8:00-17:00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      E-mail
                    </h3>
                    <p className="text-blue-600 font-medium">
                      info@zorgportaal.nl
                    </p>
                    <p className="text-sm text-blue-600">
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientPageLayout>
  );
}

export default WaitingTimesPage;