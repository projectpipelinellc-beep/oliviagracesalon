# Olivia Grace Salon

A production-ready marketing site for Olivia Grace Salon, built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Photography

All three supplied photographs (hero portrait, tools flat-lay, color pour)
and eight real work/portfolio photos are in place — no placeholders left.
See [`public/images/README.md`](./public/images/README.md) for details, and
for how to add more portfolio photos to the gallery later.

## Before launch: business information still needed

Phone, email, address, business hours, and Instagram are all filled in with
real values in [`lib/site-config.ts`](./lib/site-config.ts)
(`siteConfig.contact`). The only remaining placeholder:

1. **Production domain** — update `siteConfig.url` in the same file once a
   domain is chosen (used for metadata, Open Graph tags, and the sitemap).
2. **Privacy Policy specifics** — `/privacy` is a complete, plain-language
   starter policy, not legal advice. It's flagged inline with a "starter
   template notice" and an `[Owner to add before launch]` effective date
   placeholder; it should be reviewed by a qualified professional before
   launch, particularly regarding the privacy laws that apply to the
   salon's location.
3. **Cookie categories** — Analytics and Marketing cookie toggles are
   present but intentionally disabled, because no analytics or marketing
   tool is installed. If one is added later, flip the matching flag in
   `lib/cookie-consent.ts` (`availableTools`) and only load that script
   behind its consent category.

Booking happens entirely through Vagaro (every "Book Now" link), so there is
no on-site contact form — the Contact section is informational only (phone,
email, address, hours, Instagram).

## Tech notes

- **Framework**: Next.js 16 (App Router) + TypeScript + Tailwind CSS.
- **Fonts**: Cormorant Garamond (serif, main headings) + Bodoni Moda italic
  (section subheadings) + Inter (sans, body), all self-hosted at build time
  via `next/font/google` — no runtime requests to Google Fonts, and nothing
  to gate behind cookie consent.
- **Images**: `next/image` throughout for optimization (AVIF/WebP,
  responsive `sizes`), fixed aspect ratios to prevent layout shift, and
  descriptive `alt` text. `components/PhotoSlot.tsx` gracefully falls back
  to a labeled placeholder if a referenced image file is missing.
- **Cookie consent**: `components/CookieConsent.tsx` blocks optional
  categories until the visitor chooses, persists the choice in
  `localStorage`, and can be reopened anytime via "Cookie Preferences" in
  the footer.
- **Deployment**: designed for Vercel with no special configuration beyond
  the environment variable above.
