// src/components/pages/ForWhomPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function ForWhomPage() {
  const t = useTranslations("global");
  
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Voor wie
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Ontdek of onze zorg passend is voor uw situatie
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Age Groups */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Voor welke leeftijdsgroepen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👨‍💼</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Volwassenen (18+)
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Wij bieden specialistische zorg voor alle volwassenen vanaf 18 jaar met verschillende psychische klachten.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Individuele en groepsbehandeling
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Ervaren therapeuten
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Wetenschappelijk onderbouwde methoden
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👥</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Eerstelijnsbehandeling
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ook als dit de eerste keer is dat je psychologische hulp zoekt, begeleiden we je graag door het proces.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Laagdrempelige hulp
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Duidelijke uitleg over het proces
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Persoonlijke begeleiding
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Veel voorkomende klachten
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Wij behandelen een breed scala aan psychische klachten bij volwassenen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Angst en stemmingsstoornissen
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Angststoornissen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Depressie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Paniekaanvallen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Fobieën</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Trauma en stress
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">PTSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Acute stress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Complex trauma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Rouwverwerking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Treatment Approaches */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Onze behandelapproach
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Cognitieve gedragstherapie (CGT)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Bewezen effectieve methode waarbij we samen kijken naar gedachten, gevoelens en gedrag.
                  </p>
                  <div>
                    <span className="text-sm font-medium text-blue-800">Effectief voor:</span>
                    <span className="ml-2 text-sm text-blue-600">Angst, Depressie, PTSS</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    EMDR
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Gespecialiseerde traumatherapie voor de verwerking van traumatische herinneringen.
                  </p>
                  <div>
                    <span className="text-sm font-medium text-green-800">Effectief voor:</span>
                    <span className="ml-2 text-sm text-green-600">Trauma, PTSS, Fobieën</span>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wanneer hulp zoeken?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Deze signalen kunnen aangeven dat het tijd is voor professionele hulp
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      Je ervaart langdurig psychische klachten die je dagelijks functioneren beïnvloeden
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      Je hebt moeite om je gevoelens en gedachten te reguleren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      Je sociale relaties of werk worden negatief beïnvloed door je klachten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      Zelfhulp en ondersteuning van naasten zijn niet meer voldoende
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What We Don't Treat */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wat behandelen wij niet
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Voor bepaalde klachten verwijzen wij door naar gespecialiseerde instellingen.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-red-700">Acute suïcidaliteit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-red-700">Psychoses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-red-700">Ernstige verslavingsproblematiek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-red-700">Persoonlijkheidsstoornissen die intensieve behandeling vereisen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Alternatief</h3>
                <p className="text-blue-700 text-sm">
                  We helpen je graag bij het vinden van de juiste zorg elders.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hoe te beginnen
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  Een behandeling starten is eenvoudig. Neem contact op en we bespreken de mogelijkheden.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefoon</h3>
                    <p className="text-blue-600 font-medium">010 - 450 40 71</p>
                    <p className="text-sm text-gray-600">Ma-vr 8:00-17:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-blue-600 font-medium">info@zorgportaal.nl</p>
                    <p className="text-sm text-gray-600">Reactie binnen 24 uur</p>
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

export default ForWhomPage;