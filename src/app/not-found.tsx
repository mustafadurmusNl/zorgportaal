// Global not-found page - rendered when no route matches
// This is a Server Component so we don't have translation context
export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header without intl context */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/nl" className="text-2xl font-bold text-gray-900">
                Groeipunt
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/nl/zorgaanbod"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Zorgaanbod
                </a>
                <a
                  href="/nl/clienten/voor-wie"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Voor cliënten
                </a>
                <a
                  href="/nl"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main 404 content */}
      <main className="flex-1 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full font-bold text-xl mb-8 shadow-lg">
            404
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Oops, deze pagina is niet gevonden
          </h1>

          {/* Subheading */}
          <h2 className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Waar ben je naar op zoek?
          </h2>

          {/* Navigation suggestions */}
          <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Passende GGZ-zorg? Bekijk ons{" "}
                <a
                  href="/nl/zorgaanbod/angst"
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  zorgaanbod
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Actuele wachttijden? Je vindt ze op de{" "}
                <a
                  href="/nl/clienten/wachttijden"
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  wachttijdenpagina
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Locatiegegevens? Bekijk onze{" "}
                <a
                  href="/#locaties"
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  locaties
                </a>
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Kom je er niet uit? Neem gerust{" "}
              <a
                href="mailto:info@groeipunt.nl"
                className="text-pink-500 hover:text-pink-600 font-medium"
              >
                contact
              </a>{" "}
              met ons op!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="javascript:history.back()"
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-500 text-pink-500 rounded-md font-medium hover:bg-pink-50 transition-colors"
            >
              Ga terug
            </a>

            <a
              href="/nl"
              className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-medium transition-colors"
            >
              Naar homepage
            </a>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; 2025 Groeipunt. Alle rechten voorbehouden.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="mailto:info@groeipunt.nl"
              className="text-pink-500 hover:text-pink-600"
            >
              info@groeipunt.nl
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
