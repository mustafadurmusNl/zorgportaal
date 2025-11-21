// src/components/pages/IntakeAndTreatmentPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function IntakeAndTreatmentPage() {
  const t = useTranslations("global");
  
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Intake & Behandelplan
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Alles wat u moet weten over de eerste stappen in uw behandeling
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* What is Intake */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wat is een intake?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Een intake is het eerste officiële gesprek tussen u en uw therapeut. Dit gesprek vormt de basis voor uw hele behandeling.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Doel van de intake
                  </h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      Uw klachten en hulpvraag in kaart brengen
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      Uw voorgeschiedenis bespreken
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      Verwachtingen en doelen vaststellen
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      Behandelplan opstellen
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intake Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Het intake proces
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Het intake proces bestaat uit verschillende onderdelen die samen een compleet beeld geven van uw situatie.
              </p>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                        <span className="text-indigo-600 font-semibold">1</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Voorbereiding
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Voor het intake gesprek krijgt u vragenlijsten toegestuurd die u thuis kunt invullen. Deze helpen ons om uw situatie beter te begrijpen.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">Duur:</span>
                        <span className="ml-2 text-sm text-indigo-600">30-60 minuten voorbereiding thuis</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-5 top-12 w-px h-12 bg-gray-200"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                        <span className="text-indigo-600 font-semibold">2</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Het gesprek
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Het intake gesprek vindt plaats op onze praktijk of via videobellen. We bespreken uw klachten, geschiedenis en verwachtingen uitgebreid.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">Duur:</span>
                        <span className="ml-2 text-sm text-indigo-600">60-90 minuten</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-5 top-12 w-px h-12 bg-gray-200"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                        <span className="text-indigo-600 font-semibold">3</span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Analyse en plan
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Na het gesprek analyseert uw therapeut alle informatie en stelt een behandelplan op dat wordt afgestemd op uw specifieke situatie.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">Duur:</span>
                        <span className="ml-2 text-sm text-indigo-600">1-2 dagen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Plan */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Behandelplan opstellen
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Op basis van de intake wordt een persoonlijk behandelplan opgesteld dat aansluit bij uw unieke situatie en doelen.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  Wat staat er in een behandelplan?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Doelen</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Korte termijn doelen</li>
                      <li>• Lange termijn doelen</li>
                      <li>• Meetbare resultaten</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Methodiek</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Behandelmethoden</li>
                      <li>• Frequentie sessies</li>
                      <li>• Geschatte duur</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🎯 Doelgerichte aanpak
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Elk behandelplan is uniek en gericht op uw specifieke klachten en persoonlijke doelen.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🔄 Flexibel en aanpasbaar
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Het behandelplan wordt tijdens de behandeling regelmatig geëvalueerd en zo nodig aangepast.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wat kunt u verwachten?
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Voor de intake
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bevestiging van afspraak per e-mail</li>
                    <li>• Vragenlijsten ter voorbereiding</li>
                    <li>• Informatie over wat u kunt verwachten</li>
                    <li>• Mogelijkheid om vragen te stellen</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tijdens de intake
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vertrouwelijk en veilig gesprek</li>
                    <li>• Ruimte voor al uw vragen en zorgen</li>
                    <li>• Professionele en empathische begeleiding</li>
                    <li>• Duidelijke uitleg over vervolgstappen</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Na de intake
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Behandelplan binnen 3 werkdagen</li>
                    <li>• Planning van vervolgafspraken</li>
                    <li>• Informatie over verzekering en kosten</li>
                    <li>• Contact met vragen altijd mogelijk</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tips voor voorbereiding
              </h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-3">
                      🤔 Denk na over
                    </h3>
                    <ul className="space-y-2 text-sm text-yellow-700">
                      <li>• Wanneer klachten zijn begonnen</li>
                      <li>• Wat trigger situaties zijn</li>
                      <li>• Eerdere behandelingen</li>
                      <li>• Uw belangrijkste doelen</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-3">
                      📝 Breng mee
                    </h3>
                    <ul className="space-y-2 text-sm text-yellow-700">
                      <li>• Ingevulde vragenlijsten</li>
                      <li>• Lijst huidige medicatie</li>
                      <li>• Eerdere rapportages (indien van toepassing)</li>
                      <li>• Verzekeringsgegevens</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Veelgestelde vragen
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hoe lang duurt een intake?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Een intake gesprek duurt meestal tussen de 60-90 minuten. We nemen de tijd die nodig is om uw situatie goed in kaart te brengen.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kan ik iemand meenemen naar de intake?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Ja, u kunt een vertrouwenspersoon meenemen als u dat prettig vindt. Bespreek dit vooraf met ons zodat we hiermee rekening kunnen houden.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Wat als ik zenuwachtig ben voor het gesprek?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Het is heel normaal om zenuwachtig te zijn. Onze therapeuten hebben veel ervaring met het op hun gemak stellen van cliënten. U bepaalt zelf het tempo van het gesprek.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Worden mijn gegevens vertrouwelijk behandeld?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Ja, alle informatie die u deelt wordt strikt vertrouwelijk behandeld volgens de beroepscode voor psychologen en de AVG wetgeving.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intake inplannen?
              </h2>
              <div className="bg-indigo-50 rounded-lg p-6">
                <p className="text-indigo-700 mb-4 leading-relaxed">
                  Bent u klaar om de eerste stap te zetten? Neem contact met ons op om een intake gesprek in te plannen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      Telefoon
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      010-450 40 71
                    </p>
                    <p className="text-sm text-indigo-600">
                      Ma-vr 8:00-17:00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      E-mail
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      intake@zorgportaal.nl
                    </p>
                    <p className="text-sm text-indigo-600">
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

export default IntakeAndTreatmentPage;