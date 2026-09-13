"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import BookNowLink from "./BookNowLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-250 ${
        scrolled
          ? "border-taupe/20 bg-ivory/95 backdrop-blur"
          : "border-transparent bg-ivory"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link
          href="/#home"
          className="font-serif text-xl tracking-wide text-espresso sm:text-2xl"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm tracking-wide text-espresso/80 transition-colors duration-250 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookNowLink className="border border-gold px-6 py-2.5 font-sans text-sm tracking-wide text-espresso transition-colors duration-250 hover:bg-gold hover:text-ivory" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M1 1L21 15M21 1L1 15"
                stroke="#211D19"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="0" y1="1" x2="22" y2="1" stroke="#211D19" strokeWidth="1.5" />
                <line x1="0" y1="8" x2="22" y2="8" stroke="#211D19" strokeWidth="1.5" />
                <line x1="0" y1="15" x2="22" y2="15" stroke="#211D19" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-taupe/20 bg-ivory lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile primary" className="container-editorial flex flex-col gap-1 py-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-taupe/10 py-4 font-serif text-xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
            <BookNowLink className="mt-6 border border-gold px-6 py-3 text-center font-sans text-sm tracking-wide text-espresso transition-colors duration-250 hover:bg-gold hover:text-ivory" />
          </nav>
        </div>
      )}
    </header>
  );
}
