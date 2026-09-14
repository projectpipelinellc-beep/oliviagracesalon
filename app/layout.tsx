import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

// A higher-contrast display serif used for section subheadings only —
// the main hero headline stays in Cormorant Garamond above.
const subheading = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-subheading",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Personalized Hair Color & Styling`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Olivia Grace Salon offers personalized hair color, dimensional transformations, haircuts, and polished styling. Book your appointment online.",
  openGraph: {
    title: `${siteConfig.name} | Personalized Hair Color & Styling`,
    description:
      "Personalized color, dimensional transformations, and polished styling designed around you.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: ["/images/Facetune_25-08-2026-17-01-47.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Personalized Hair Color & Styling`,
    description:
      "Personalized color, dimensional transformations, and polished styling designed around you.",
    images: ["/images/Facetune_25-08-2026-17-01-47.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// Only verified information is included here — nothing invented.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/Facetune_25-08-2026-17-01-47.jpeg`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "16A Fisher Avenue",
    addressLocality: "Tuckahoe",
    addressRegion: "NY",
    postalCode: "10707",
  },
  sameAs: [siteConfig.contact.instagramUrl, siteConfig.contact.facebookUrl],
  openingHoursSpecification: siteConfig.contact.hours
    .filter((h) => h.time !== "Closed")
    .map(({ day, time }) => {
      const [opens, closes] = time.split(/\s*[–-]\s*/);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: to24Hour(opens),
        closes: to24Hour(closes),
      };
    }),
};

function to24Hour(time: string): string {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return time;
  let [, hourStr, minute, meridiem] = match;
  let hour = parseInt(hourStr, 10) % 12;
  if (meridiem.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${subheading.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
