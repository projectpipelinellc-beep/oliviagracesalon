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

The hero portrait, the color-pour photo, and eight real work/portfolio
photos are in place. One photo is still missing — the tools flat-lay for
the Services section — and renders a labeled on-brand placeholder instead
of a stock photo until it's added. See
[`public/images/README.md`](./public/images/README.md) for the exact
filename and where it's used — drop the real file into `public/images/`
and it'll appear automatically, no code changes needed.

## Before launch: business information still needed

No business details were invented anywhere in this site. The following
real information must be added before launch:

1. **Phone, email, address, business hours, Instagram** — edit the
   placeholders in [`lib/site-config.ts`](./lib/site-config.ts)
   (`siteConfig.contact`). Each one currently renders a clearly labeled
   "to be added" placeholder in the Contact section.
2. **Production domain** — update `siteConfig.url` in the same file once a
   domain is chosen (used for metadata, Open Graph tags, and the sitemap).
3. **Contact form email delivery** — the form at `/api/contact` validates
   and is ready to send, but no email provider is connected yet. Set the
   `RESEND_API_KEY` and `CONTACT_TO_EMAIL` environment variables (or swap in
   a different provider in `app/api/contact/route.ts`) to activate it. Until
   then, submissions show an honest "not connected yet" message rather than
   silently disappearing.
4. **The Services flat-lay photo** — see above.
5. **Privacy Policy specifics** — `/privacy` is a complete, plain-language
   starter policy, not legal advice. It's flagged inline with a "starter
   template notice" and specific `[Owner to add ...]` placeholders (an
   effective date, a retention period, a contact email) that should be
   filled in and reviewed by a qualified professional before launch,
   especially regarding whichever email/analytics/marketing tools end up in
   use and the privacy laws that apply to the salon's location.
6. **Cookie categories** — Analytics and Marketing cookie toggles are
   present but intentionally disabled, because no analytics or marketing
   tool is installed. If one is added later, flip the matching flag in
   `lib/cookie-consent.ts` (`availableTools`) and only load that script
   behind its consent category.

## Tech notes

- **Framework**: Next.js 16 (App Router) + TypeScript + Tailwind CSS.
- **Fonts**: Cormorant Garamond (serif, headings) + Inter (sans, body), both
  self-hosted at build time via `next/font/google` — no runtime requests to
  Google Fonts, and nothing to gate behind cookie consent.
- **Images**: `next/image` throughout for optimization (AVIF/WebP,
  responsive `sizes`), fixed aspect ratios to prevent layout shift, and
  descriptive `alt` text. `components/PhotoSlot.tsx` gracefully falls back
  to a labeled placeholder if a referenced image file is missing.
- **Cookie consent**: `components/CookieConsent.tsx` blocks optional
  categories until the visitor chooses, persists the choice in
  `localStorage`, and can be reopened anytime via "Cookie Preferences" in
  the footer.
- **Deployment**: designed for Vercel with no special configuration beyond
  the environment variables above.
