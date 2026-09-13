import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

// Only fields we can actually verify are included; unknown fields
// (address, phone, hours) are intentionally omitted rather than invented.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/Facetune_25-08-2026-17-01-47.jpeg`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
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
