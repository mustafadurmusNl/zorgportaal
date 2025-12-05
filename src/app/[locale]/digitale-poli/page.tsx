import { getMessages } from "next-intl/server";
import type { Locale } from "@/i18n/request";
import type { Metadata } from "next";

// Define supported locales
const LOCALES: Locale[] = ["nl", "en"];

interface DigitalePoliProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function DigitalePoli({ params }: DigitalePoliProps) {
  const { locale } = await params;

  console.log(`🎯 Route: /${locale}/digitale-poli`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <span className="mr-2">💻</span>
              {locale === "nl"
                ? "Innovatieve Zorgverlening"
                : "Innovative Healthcare"}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {locale === "nl" ? "Online Behandeling" : "Online Treatment"}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {locale === "nl"
                ? "Volledige online behandelingen passend bij jouw wensen, hulpvragen en behandeldoelen. Professionele zorg vanuit het comfort van je eigen huis."
                : "Complete online treatments tailored to your needs, questions and treatment goals. Professional care from the comfort of your own home."}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {locale === "nl" ? "Persoonlijk Plan" : "Personal Plan"}
            </h3>
            <p className="text-gray-600">
              {locale === "nl"
                ? "Een volledig op maat gemaakt behandelplan dat aansluit bij jouw specifieke situatie en doelen."
                : "A fully customized treatment plan that matches your specific situation and goals."}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {locale === "nl" ? "Flexibele Tijden" : "Flexible Hours"}
            </h3>
            <p className="text-gray-600">
              {locale === "nl"
                ? "Plan je sessies wanneer het jou uitkomt. Geen reistijd, geen wachtkamers - gewoon directe toegang tot professionele hulp."
                : "Schedule your sessions when it suits you. No travel time, no waiting rooms - just direct access to professional help."}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {locale === "nl" ? "Veilig & Privé" : "Safe & Private"}
            </h3>
            <p className="text-gray-600">
              {locale === "nl"
                ? "Alle sessies vinden plaats via beveiligde videoverbindingen met de hoogste privacy- en veiligheidsnormen."
                : "All sessions take place via secure video connections with the highest privacy and security standards."}
            </p>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === "nl" ? "Hoe werkt het?" : "How does it work?"}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === "nl"
                ? "In 4 eenvoudige stappen naar online behandeling"
                : "4 simple steps to online treatment"}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: locale === "nl" ? "Aanmelden" : "Sign Up",
                desc:
                  locale === "nl"
                    ? "Maak een account aan en vul je intake formulier in"
                    : "Create an account and fill in your intake form",
              },
              {
                step: "2",
                title: locale === "nl" ? "Matching" : "Matching",
                desc:
                  locale === "nl"
                    ? "We koppelen je aan de juiste therapeut voor jouw situatie"
                    : "We match you with the right therapist for your situation",
              },
              {
                step: "3",
                title:
                  locale === "nl" ? "Plan Afspraak" : "Schedule Appointment",
                desc:
                  locale === "nl"
                    ? "Kies een tijd die jou uitkomt voor je eerste online sessie"
                    : "Choose a time that suits you for your first online session",
              },
              {
                step: "4",
                title:
                  locale === "nl" ? "Start Behandeling" : "Start Treatment",
                desc:
                  locale === "nl"
                    ? "Begin je persoonlijke behandeltraject vanuit huis"
                    : "Start your personal treatment journey from home",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locale === "nl"
                ? "Klaar om te beginnen?"
                : "Ready to get started?"}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {locale === "nl"
                ? "Neem vandaag nog contact met ons op en ontdek hoe online behandeling jouw leven kan verbeteren."
                : "Contact us today and discover how online treatment can improve your life."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-300">
                <span className="flex items-center justify-center">
                  <span className="mr-2">📞</span>
                  {locale === "nl" ? "Contact opnemen" : "Get in touch"}
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
                <span className="flex items-center justify-center">
                  <span className="mr-2">ℹ️</span>
                  {locale === "nl" ? "Meer informatie" : "Learn more"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata with i18n support
export async function generateMetadata({
  params,
}: DigitalePoliProps): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "nl"
      ? "Online Behandeling - Groeipunt"
      : "Online Treatment - Groeipunt";
  const description =
    locale === "nl"
      ? "Volledige online behandelingen passend bij jouw wensen en behandeldoelen. Professionele psychologische zorg vanuit het comfort van je eigen huis."
      : "Complete online treatments tailored to your needs and treatment goals. Professional psychological care from the comfort of your own home.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/digitale-poli`,
      languages: {
        nl: `/nl/digitale-poli`,
        en: `/en/digitale-poli`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale,
      alternateLocale: locale === "nl" ? ["en"] : ["nl"],
    },
  };
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}
