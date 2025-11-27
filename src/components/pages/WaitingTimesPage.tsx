// src/components/pages/WaitingTimesPage.tsx
import { ClientPageLayout } from "@/components/care";

interface WaitingTimesPageProps {
  locale?: string;
  messages?: {
    title?: string;
    subtitle?: string;
    current_times?: {
      title?: string;
    };
    services?: {
      anxiety?: {
        title?: string;
        time?: string;
        description?: string;
        updated?: string;
      };
      depression?: {
        title?: string;
        time?: string;
        description?: string;
        updated?: string;
      };
      trauma?: {
        title?: string;
        time?: string;
        description?: string;
        updated?: string;
      };
      adhd?: {
        title?: string;
        time?: string;
        description?: string;
        updated?: string;
      };
      psycho_oncology?: {
        title?: string;
        time?: string;
        description?: string;
        updated?: string;
      };
    };
    last_update?: string;
    note?: {
      title?: string;
      description?: string;
    };
    process?: {
      title?: string;
      description?: string;
      estimated_duration?: string;
      steps?: {
        registration?: {
          title?: string;
          description?: string;
          duration?: string;
        };
        phone_intake?: {
          title?: string;
          description?: string;
          duration?: string;
        };
        waitlist?: {
          title?: string;
          description?: string;
          duration?: string;
        };
        start_treatment?: {
          title?: string;
          description?: string;
          duration?: string;
        };
      };
    };
    acute_help?: {
      title?: string;
      description?: string;
      urgency_title?: string;
      urgency_items?: {
        suicidal?: string;
        psychosis?: string;
        trauma?: string;
      };
      crisis_note?: string;
    };
    alternatives?: {
      title?: string;
      description?: string;
      online_self_help?: {
        title?: string;
        description?: string;
        wait_time?: string;
      };
      group_therapy?: {
        title?: string;
        description?: string;
        wait_time?: string;
      };
      gp_psychologist?: {
        title?: string;
        description?: string;
        wait_time?: string;
        contact?: string;
      };
      crisis_service?: {
        title?: string;
        description?: string;
        wait_time?: string;
        contact?: string;
      };
    };
    contact_questions?: {
      title?: string;
      description?: string;
      availability?: string;
      phone?: {
        title?: string;
        number?: string;
      };
      email?: {
        title?: string;
        address?: string;
      };
    };
    how_to_reduce?: {
      title?: string;
      tips?: string[];
    };
    factors?: {
      title?: string;
      factor1?: string;
      factor2?: string;
      factor3?: string;
      factor4?: string;
    };
    wait_time?: string;
    contact?: string;
    response_time?: string;
    [key: string]: any;
  };
}

function WaitingTimesPage({ locale, messages }: WaitingTimesPageProps) {
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {messages?.title || "Current Waiting Times"}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {messages?.subtitle ||
                "Overview of current waiting times for our services"}
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
                {messages?.current_times?.title || "Current waiting times"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {messages?.services?.anxiety?.title ||
                        "Anxiety Disorders"}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {messages?.services?.anxiety?.time || "2-3 weeks"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {messages?.services?.anxiety?.description ||
                      "Treatment of panic attacks, phobias and generalized anxiety disorder"}
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      {messages?.last_update || "Last update"}:{" "}
                      {messages?.services?.anxiety?.updated ||
                        "January 15, 2024"}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {messages?.services?.depression?.title || "Depression"}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      {messages?.services?.depression?.time || "3-4 weeks"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {messages?.services?.depression?.description ||
                      "Individual and group treatment for various forms of depression"}
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      {messages?.last_update || "Last update"}:{" "}
                      {messages?.services?.depression?.updated ||
                        "January 15, 2024"}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {messages?.services?.trauma?.title || "Trauma & PTSD"}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {messages?.services?.trauma?.time || "4-6 weeks"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {messages?.services?.trauma?.description ||
                      "EMDR and other trauma-focused treatments"}
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      {messages?.last_update || "Last update"}:{" "}
                      {messages?.services?.trauma?.updated ||
                        "January 15, 2024"}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {messages?.services?.psycho_oncology?.title ||
                        "Psycho-oncology"}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {messages?.services?.psycho_oncology?.time || "1-2 weeks"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {messages?.services?.psycho_oncology?.description ||
                      "Support for cancer and other life-threatening illnesses"}
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">
                      {messages?.last_update || "Last update"}:{" "}
                      {messages?.services?.psycho_oncology?.updated ||
                        "January 15, 2024"}
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
                      {messages?.note?.title || "Please note"}
                    </h3>
                    <p className="mt-2 text-sm text-blue-700">
                      {messages?.note?.description ||
                        "These are average waiting times. Depending on urgency and availability, waiting times may vary."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.process?.title || "From registration to treatment"}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {messages?.process?.description ||
                  "The process from registration to start of treatment consists of several steps."}
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
                        {messages?.process?.steps?.registration?.title ||
                          "Registration"}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {messages?.process?.steps?.registration?.description ||
                          "You register by phone or email. We schedule a telephone intake within 1 week."}
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          {messages?.process?.estimated_duration ||
                            "Estimated duration:"}
                          :
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          {messages?.process?.steps?.registration?.duration ||
                            "1 week"}
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
                        {messages?.process?.steps?.phone_intake?.title ||
                          "Telephone intake"}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {messages?.process?.steps?.phone_intake?.description ||
                          "An experienced therapist conducts a comprehensive telephone conversation to map out your request for help."}
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          {messages?.process?.estimated_duration ||
                            "Estimated duration:"}
                          :
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          {messages?.process?.steps?.phone_intake?.duration ||
                            "Directly after registration"}
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
                        {messages?.process?.steps?.waitlist?.title ||
                          "Waitlist placement"}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {messages?.process?.steps?.waitlist?.description ||
                          "After the telephone intake, you will be placed on the waiting list for the appropriate treatment."}
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600">
                          {messages?.process?.estimated_duration ||
                            "Estimated duration:"}
                          :
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          {messages?.process?.steps?.waitlist?.duration ||
                            "2-4 weeks"}
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
                        {messages?.process?.steps?.start_treatment?.title ||
                          "Start treatment"}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {messages?.process?.steps?.start_treatment
                          ?.description ||
                          "You will be notified when there is space available and can start treatment with your assigned therapist."}
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
                      {messages?.acute_help?.title || "Acute help available"}
                    </h3>
                    <p className="text-red-700 mb-4">
                      {messages?.acute_help?.description ||
                        "For acute suicidal thoughts or other crisis situations, we can often schedule a conversation within 24-48 hours."}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-medium text-red-800">
                        {messages?.acute_help?.urgency_title ||
                          "When is there urgency?"}
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            {messages?.acute_help?.urgency_items?.suicidal ||
                              "Suicidal thoughts with concrete plans"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            {messages?.acute_help?.urgency_items?.psychosis ||
                              "Severe psychosis or loss of reality"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span className="text-red-700 text-sm">
                            {messages?.acute_help?.urgency_items?.trauma ||
                              "Acute traumatic event"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 p-4 bg-red-100 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>
                          {messages?.acute_help?.crisis_note ||
                            "For acute crisis situations: Call 010-450 40 71 immediately or go to the Emergency Department."}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.alternatives?.title || "Alternative options"}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {messages?.alternatives?.description ||
                  "During the waiting period, various alternatives are available for support."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.alternatives?.online_self_help?.title ||
                      "Online self-help"}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {messages?.alternatives?.online_self_help?.description ||
                      "Digital modules for anxiety and depression through our partners."}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.wait_time || "Wait time"}:
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {messages?.alternatives?.online_self_help?.wait_time ||
                          "Immediately available"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.contact || "Contact"}:
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        010-450 40 71
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.alternatives?.group_therapy?.title ||
                      "Group therapy"}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {messages?.alternatives?.group_therapy?.description ||
                      "Group treatments for specific complaints start regularly."}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.wait_time || "Wait time"}:
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {messages?.alternatives?.group_therapy?.wait_time ||
                          "1-2 weeks"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.contact || "Contact"}:
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        010-450 40 71
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.alternatives?.gp_psychologist?.title ||
                      "GP psychologist"}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {messages?.alternatives?.gp_psychologist?.description ||
                      "Short treatments through GP psychology."}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.wait_time || "Wait time"}:
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {messages?.alternatives?.gp_psychologist?.wait_time ||
                          "1 week"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.contact || "Contact"}:
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {messages?.alternatives?.gp_psychologist?.contact ||
                          "Through GP"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {messages?.alternatives?.crisis_service?.title ||
                      "Crisis service"}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {messages?.alternatives?.crisis_service?.description ||
                      "24/7 accessible crisis help for acute situations."}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.wait_time || "Wait time"}:
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {messages?.alternatives?.crisis_service?.wait_time ||
                          "Immediate"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {messages?.contact || "Contact"}:
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {messages?.alternatives?.crisis_service?.contact ||
                          "0800-0113"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.contact_questions?.title ||
                  "Questions about waiting times?"}
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-700 mb-4 leading-relaxed">
                  {messages?.contact_questions?.description ||
                    "Do you have questions about our waiting times or want to know if starting earlier is possible? Please feel free to contact us."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {messages?.contact_questions?.phone?.title || "Phone"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.contact_questions?.phone?.number ||
                        "010-450 40 71"}
                    </p>
                    <p className="text-sm text-blue-600">
                      {messages?.contact_questions?.availability ||
                        "Monday to Friday from 9:00 AM to 5:00 PM"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {messages?.contact_questions?.email?.title || "Email"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.contact_questions?.email?.address ||
                        "info@fortavolwassenen.nl"}
                    </p>
                    <p className="text-sm text-blue-600">
                      {messages?.response_time || "Response within 24 hours"}
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
