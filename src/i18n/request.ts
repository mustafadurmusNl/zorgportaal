import { getRequestConfig } from "next-intl/server";

// Define supported locales with type safety
const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // More robust locale validation - handle undefined, null, or invalid locales
  let validatedLocale: Locale;

  if (locale && locales.includes(locale as Locale)) {
    validatedLocale = locale as Locale;
  } else {
    // If locale is undefined or invalid, default to Dutch
    validatedLocale = "nl";
  }

  try {
    const messages = (await import(`../../messages/${validatedLocale}.json`))
      .default;
    return {
      messages,
      locale: validatedLocale,
    };
  } catch (error) {
    console.error(
      "❌ Failed to load messages for locale:",
      validatedLocale,
      error
    );
    // Ultimate fallback - load Dutch messages
    const fallbackMessages = (await import(`../../messages/nl.json`)).default;
    return {
      messages: fallbackMessages,
      locale: "nl" as Locale,
    };
  }
});
