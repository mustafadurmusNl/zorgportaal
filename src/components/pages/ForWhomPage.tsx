// src/components/pages/ForWhomPage.tsx
import { ClientPageLayout } from "@/components/care";

interface ForWhomPageProps {
  locale?: string;
  messages?: {
    title?: string;
    subtitle?: string;
    who_we_help?: {
      title?: string;
      content?: string;
    };
    adults?: {
      title?: string;
      description?: string;
    };
    first_time?: {
      title?: string;
      description?: string;
    };
    common_issues?: {
      title?: string;
      description?: string;
      anxiety_mood?: {
        title?: string;
        items?: string[];
      };
      trauma_stress?: {
        title?: string;
        items?: string[];
      };
    };
    treatment_approach?: {
      title?: string;
      cbt?: {
        title?: string;
        description?: string;
        effective_for?: string;
      };
      emdr?: {
        title?: string;
        description?: string;
        effective_for?: string;
      };
    };
    when_to_seek_help?: {
      title?: string;
      content?: string;
      symptom_1?: string;
      symptom_2?: string;
      symptom_3?: string;
      symptom_4?: string;
    };
    not_treated?: {
      title?: string;
      description?: string;
      items?: string[];
      alternative?: {
        title?: string;
        description?: string;
      };
    };
    getting_started?: {
      title?: string;
      description?: string;
      phone?: {
        title?: string;
        number?: string;
        hours?: string;
      };
      email?: {
        title?: string;
        address?: string;
        response?: string;
      };
    };
  };
}

function ForWhomPage({ locale, messages }: ForWhomPageProps) {
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {messages?.title || "Who we are here for"}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {messages?.subtitle ||
                "Our care is for everyone who needs professional psychological help."}
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
                {messages?.who_we_help?.title || "Who we help"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👨‍💼</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {messages?.adults?.title || "Adults (18+)"}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {messages?.adults?.description ||
                      "Professional treatment for all adults with mental health concerns."}
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Individual and group treatment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Experienced therapists
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Evidence-based methods
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👥</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {messages?.first_time?.title || "First time seeking help"}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {messages?.first_time?.description ||
                      "Even if this is your first time seeking help, we are happy to guide you."}
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Low-threshold help
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Clear explanation of the process
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✓</span>
                      Personal guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.common_issues?.title || "Common complaints"}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {messages?.common_issues?.description ||
                  "We treat a wide range of psychological complaints in adults."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {messages?.common_issues?.anxiety_mood?.title ||
                      "Anxiety and mood disorders"}
                  </h3>
                  <ul className="space-y-3">
                    {(
                      messages?.common_issues?.anxiety_mood?.items || [
                        "Anxiety disorders",
                        "Depression",
                        "Panic attacks",
                        "Phobias",
                      ]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {messages?.common_issues?.trauma_stress?.title ||
                      "Trauma and stress"}
                  </h3>
                  <ul className="space-y-3">
                    {(
                      messages?.common_issues?.trauma_stress?.items || [
                        "PTSD",
                        "Acute stress",
                        "Complex trauma",
                        "Grief processing",
                      ]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Treatment Approaches */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.treatment_approach?.title ||
                  "Our treatment approach"}
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.treatment_approach?.cbt?.title ||
                      "Cognitive behavioral therapy (CBT)"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {messages?.treatment_approach?.cbt?.description ||
                      "Proven effective method where we look at thoughts, feelings and behavior together."}
                  </p>
                  <div>
                    <span className="text-sm font-medium text-blue-800">
                      Effective for:
                    </span>
                    <span className="ml-2 text-sm text-blue-600">
                      {messages?.treatment_approach?.cbt?.effective_for ||
                        "Anxiety, Depression, PTSD"}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.treatment_approach?.emdr?.title || "EMDR"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {messages?.treatment_approach?.emdr?.description ||
                      "Specialized trauma therapy for processing traumatic memories."}
                  </p>
                  <div>
                    <span className="text-sm font-medium text-green-800">
                      Effective for:
                    </span>
                    <span className="ml-2 text-sm text-green-600">
                      {messages?.treatment_approach?.emdr?.effective_for ||
                        "Trauma, PTSD, Phobias"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.when_to_seek_help?.title || "When to seek help"}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {messages?.when_to_seek_help?.content ||
                  "Not sure if professional help is needed? These signals may indicate it's time to reach out."}
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {messages?.when_to_seek_help?.symptom_1 ||
                        "You experience persistent concerns that affect daily functioning"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {messages?.when_to_seek_help?.symptom_2 ||
                        "You have difficulty regulating your emotions and thoughts"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {messages?.when_to_seek_help?.symptom_3 ||
                        "Your social relationships or work are negatively affected"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⚡</span>
                    <span className="text-gray-700">
                      {messages?.when_to_seek_help?.symptom_4 ||
                        "Self-help and support from loved ones are no longer sufficient"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What We Don't Treat */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.not_treated?.title || "What we do not treat"}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {messages?.not_treated?.description ||
                  "For certain complaints we refer to specialized institutions."}
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <ul className="space-y-3">
                  {(
                    messages?.not_treated?.items || [
                      "Acute suicidality",
                      "Psychoses",
                      "Serious addiction problems",
                      "Personality disorders requiring intensive treatment",
                    ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">•</span>
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {messages?.not_treated?.alternative?.title || "Alternative"}
                </h3>
                <p className="text-blue-700 text-sm">
                  {messages?.not_treated?.alternative?.description ||
                    "We are happy to help you find the right care elsewhere."}
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.getting_started?.title || "How to get started"}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  {messages?.getting_started?.description ||
                    "Starting treatment is simple. Contact us and we will discuss the possibilities."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {messages?.getting_started?.phone?.title || "Phone"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.getting_started?.phone?.number ||
                        "010 - 450 40 71"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {messages?.getting_started?.phone?.hours ||
                        "Mon-Fri 8:00-17:00"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {messages?.getting_started?.email?.title || "Email"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.getting_started?.email?.address ||
                        "info@zorgportaal.nl"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {messages?.getting_started?.email?.response ||
                        "Response within 24 hours"}
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

export default ForWhomPage;
