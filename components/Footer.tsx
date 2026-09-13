"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { OPEN_PREFERENCES_EVENT } from "@/lib/cookie-consent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-taupe/20 bg-espresso text-ivory">
      <div className="container-editorial grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs font-sans text-sm text-ivory/70">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col gap-3">
          <p className="eyebrow text-ivory/50">Navigate</p>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-ivory/80 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow text-ivory/50">Book &amp; Contact</p>
          <a
            href={siteConfig.vagaroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-ivory/80 hover:text-gold"
          >
            Book Now
          </a>
          <Link href="/#contact" className="font-sans text-sm text-ivory/80 hover:text-gold">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="eyebrow text-ivory/50">Policies</p>
          <Link href="/privacy" className="font-sans text-sm text-ivory/80 hover:text-gold">
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT))
            }
            className="text-left font-sans text-sm text-ivory/80 hover:text-gold"
          >
            Cookie Preferences
          </button>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-editorial flex flex-col gap-2 py-6 font-sans text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
