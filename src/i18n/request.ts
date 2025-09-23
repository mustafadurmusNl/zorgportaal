import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const availableLocales = ["nl", "en"];
  const validLocale =
    locale && availableLocales.includes(locale) ? locale : "nl";

  return {
    messages: (await import(`../../messages/${validLocale}.json`)).default,
    locale: validLocale,
  };
});
