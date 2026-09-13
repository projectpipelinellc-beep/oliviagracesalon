/**
 * Central site configuration.
 *
 * BUSINESS INFORMATION: all contact fields below are real values supplied
 * by the salon owner. `siteConfig.url` (the production domain) is still a
 * placeholder — update it before launch.
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
    phone: "914-450-3935",
    email: "olivia@oliviagracesalon.com",
    address: "16A Fisher Avenue, Tuckahoe, New York",
    instagramHandle: "oliviagracesalon",
    instagramUrl: "https://www.instagram.com/oliviagracesalon/",
    // TODO: confirm this is the salon's actual Facebook page URL — only
    // the page name ("Olivia Grace Salon") was given, so this slug is
    // inferred to match the Instagram handle. Update if incorrect.
    facebookUrl: "https://www.facebook.com/oliviagracesalon",
    hours: [
      { day: "Sunday", time: "Closed" },
      { day: "Monday", time: "10:00 AM – 4:00 PM" },
      { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
      { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
      { day: "Thursday", time: "10:00 AM – 8:00 PM" },
      { day: "Friday", time: "9:00 AM – 6:00 PM" },
      { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    ],
  },

  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
