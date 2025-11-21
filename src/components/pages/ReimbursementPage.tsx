// src/components/pages/ReimbursementPage.tsx
import { useTranslations } from "next-intl";
import { ClientPageLayout } from "@/components/care";

function ReimbursementPage() {
  const t = useTranslations("global");
  
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Vergoeding
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Informatie over verzekeringen en vergoedingen voor psychologische hulp
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Basic Insurance Coverage */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Basisverzekering
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Psychologische hulp wordt vergoed vanuit de basisverzekering. De meeste behandelingen zijn gedekt onder de Zorgverzekeringswet.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Individuele psychotherapie
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Groepstherapie
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    Diagnostiek
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    EMDR behandeling
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aanvullende verzekering
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Een aanvullende verzekering kan extra voordelen bieden zoals kortere wachttijden of vergoeding van alternatieve behandelmethoden.
                </p>
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-yellow-400 text-xl">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Let op
                      </h3>
                      <p className="mt-2 text-sm text-yellow-700">
                        Controleer altijd bij uw verzekeraar welke behandelingen gedekt zijn onder uw aanvullende polis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deductible */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eigen risico
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Psychologische hulp valt onder het eigen risico. Dit betekent dat u eerst uw eigen risico moet opgebruiken voordat de verzekering volledig vergoedt.
                </p>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Berekening eigen risico
                  </h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>
                      <strong>Kosten per sessie:</strong> €90-120
                    </p>
                    <p>
                      <strong>Eigen risico 2024:</strong> €385
                    </p>
                    <p>
                      <strong>Aantal sessies eigen risico:</strong> 3-4 sessies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps for Reimbursement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vergoeding aanvragen
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Behandeling starten
                    </h3>
                    <p className="text-gray-700">Plan een intake gesprek bij een van onze therapeuten.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Factuur ontvangen
                    </h3>
                    <p className="text-gray-700">U ontvangt een factuur na elke behandelsessie.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <span className="text-blue-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Declareren bij verzekeraar
                    </h3>
                    <p className="text-gray-700">Stuur de factuur naar uw zorgverzekeraar voor vergoeding.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vragen over vergoeding?
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Heeft u vragen over de vergoeding of uw verzekering? Neem contact met ons op.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Telefoon
                    </h3>
                    <p className="text-blue-600 font-medium">010-450 40 71</p>
                    <p className="text-sm text-gray-600">Ma-vr 8:00-17:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      E-mail
                    </h3>
                    <p className="text-blue-600 font-medium">info@zorgportaal.nl</p>
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

export default ReimbursementPage;
