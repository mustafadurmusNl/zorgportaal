// src/components/pages/ReimbursementPage.tsx
import { ClientPageLayout } from "@/components/care";

interface ReimbursementPageProps {
  locale?: string;
  messages?: {
    title?: string;
    subtitle?: string;
    basic_insurance?: {
      title?: string;
      description?: string;
      covered_treatments?: {
        individual?: string;
        group?: string;
        diagnostics?: string;
        emdr?: string;
      };
    };
    additional_insurance?: {
      title?: string;
      description?: string;
      note?: {
        title?: string;
        description?: string;
      };
    };
    deductible?: {
      title?: string;
      description?: string;
      calculation?: {
        title?: string;
        cost_per_session?: string;
        deductible_2024?: string;
        sessions_deductible?: string;
      };
    };
    reimbursement_steps?: {
      title?: string;
      steps?: {
        start_treatment?: {
          title?: string;
          description?: string;
        };
        receive_invoice?: {
          title?: string;
          description?: string;
        };
        claim_insurance?: {
          title?: string;
          description?: string;
        };
      };
    };
    contact_questions?: {
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
      };
    };
    [key: string]: any;
  };
}

function ReimbursementPage({ locale, messages }: ReimbursementPageProps) {
  return (
    <ClientPageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {messages?.title || "Reimbursement"}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {messages?.subtitle ||
                "Information about insurance coverage and reimbursement"}
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
                {messages?.basic_insurance?.title || "Basic insurance"}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {messages?.basic_insurance?.description ||
                    "Psychological help is reimbursed from basic insurance. Most treatments are covered under the Health Insurance Act."}
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    {messages?.basic_insurance?.covered_treatments
                      ?.individual || "Individual psychotherapy"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    {messages?.basic_insurance?.covered_treatments?.group ||
                      "Group therapy"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    {messages?.basic_insurance?.covered_treatments
                      ?.diagnostics || "Diagnostics"}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    {messages?.basic_insurance?.covered_treatments?.emdr ||
                      "EMDR treatment"}
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.additional_insurance?.title ||
                  "Additional insurance"}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {messages?.additional_insurance?.description ||
                    "Additional insurance can provide extra benefits such as shorter waiting times or reimbursement of alternative treatment methods."}
                </p>
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-yellow-400 text-xl">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        {messages?.additional_insurance?.note?.title ||
                          "Please note"}
                      </h3>
                      <p className="mt-2 text-sm text-yellow-700">
                        {messages?.additional_insurance?.note?.description ||
                          "Always check with your insurer which treatments are covered under your additional policy."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deductible */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.deductible?.title || "Deductible"}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {messages?.deductible?.description ||
                    "Psychological help falls under the deductible. This means you must first use up your deductible before the insurance fully reimburses."}
                </p>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    {messages?.deductible?.calculation?.title ||
                      "Deductible calculation"}
                  </h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>
                      <strong>
                        {messages?.deductible?.calculation?.cost_per_session ||
                          "Cost per session: €90-120"}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        {messages?.deductible?.calculation?.deductible_2024 ||
                          "Deductible 2024: €385"}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        {messages?.deductible?.calculation
                          ?.sessions_deductible ||
                          "Number of sessions deductible: 3-4 sessions"}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps for Reimbursement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.reimbursement_steps?.title ||
                  "Request reimbursement"}
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
                      {messages?.reimbursement_steps?.steps?.start_treatment
                        ?.title || "Start treatment"}
                    </h3>
                    <p className="text-gray-700">
                      {messages?.reimbursement_steps?.steps?.start_treatment
                        ?.description ||
                        "Schedule an intake conversation with one of our therapists."}
                    </p>
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
                      {messages?.reimbursement_steps?.steps?.receive_invoice
                        ?.title || "Receive invoice"}
                    </h3>
                    <p className="text-gray-700">
                      {messages?.reimbursement_steps?.steps?.receive_invoice
                        ?.description ||
                        "You will receive an invoice after each treatment session."}
                    </p>
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
                      {messages?.reimbursement_steps?.steps?.claim_insurance
                        ?.title || "Claim with insurer"}
                    </h3>
                    <p className="text-gray-700">
                      {messages?.reimbursement_steps?.steps?.claim_insurance
                        ?.description ||
                        "Send the invoice to your health insurer for reimbursement."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {messages?.contact_questions?.title ||
                  "Questions about reimbursement?"}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  {messages?.contact_questions?.description ||
                    "Do you have questions about reimbursement or your insurance? Please contact us."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {messages?.contact_questions?.phone?.title || "Phone"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.contact_questions?.phone?.number ||
                        "010-450 40 71"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {messages?.contact_questions?.phone?.hours ||
                        "Mon-Fri 8:00 AM-5:00 PM"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {messages?.contact_questions?.email?.title || "Email"}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {messages?.contact_questions?.email?.address ||
                        "info@zorgportaal.nl"}
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

export default ReimbursementPage;
