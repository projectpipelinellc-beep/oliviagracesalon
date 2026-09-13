/**
 * Central site configuration.
 *
 * IMPORTANT — BUSINESS INFORMATION:
 * Every field marked `null` below is a real value the salon owner must
 * supply before launch. Nothing has been invented or guessed. Search the
 * codebase for `siteConfig.contact` to find every place a value is
 * rendered — each one already falls back to a clearly labeled placeholder
 * in the UI when the value is missing.
 */

export const siteConfig = {
  name: "Olivia Grace Salon",
  shortName: "Olivia Grace",
  initials: "OG",
  tagline: "Beautiful hair, thoughtfully created.",
  description:
    "Personalized color, dimensional transformations, and polished styling designed around you.",
  url: "https://oliviagracesalon.com", // TODO: replace with the production domain before launch
  vagaroUrl: "https://www.vagaro.com/oliviagracesalon",

  contact: {
    // TODO (before launch): add the salon's real phone number.
    phone: null as string | null,
    // TODO (before launch): add the salon's real contact email address.
    email: null as string | null,
    // TODO (before launch): add the salon's real street address.
    address: null as string | null,
    // TODO (before launch): add the salon's real business hours.
    hours: null as string | null,
    // TODO (before launch): add the salon's real Instagram handle/URL.
    instagram: null as string | null,
  },

  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
