import { getRequestConfig } from "next-intl/server";

// Define supported locales with type safety
const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate locale parameter and provide fallback
  const validatedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "nl"; // Default fallback to Dutch

  return {
    messages: (await import(`../../messages/${validatedLocale}.json`)).default,
    locale: validatedLocale,
  };
});
