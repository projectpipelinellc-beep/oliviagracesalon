"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";

const SERVICES = [
  "Custom Color",
  "Highlights & Dimensional Color",
  "Haircuts",
  "Blowouts & Styling",
  "Treatments",
  "Special-Occasion Styling",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  // Recorded on mount (not during render) so the timing trap below
  // reflects when the form actually became interactive.
  const formStartedAt = useRef<number | null>(null);
  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const consent = formData.get("consent");

    if (name.length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (phone && !PHONE_RE.test(phone)) next.phone = "Please enter a valid phone number.";
    if (message.length < 10) next.message = "Please add a few words about what you're looking for.";
    if (!consent) next.consent = "Please confirm you agree to be contacted.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (String(formData.get("company") || "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    // Simple timing trap: bots that submit instantly are suspicious.
    const elapsed = formStartedAt.current === null ? Infinity : Date.now() - formStartedAt.current;
    if (elapsed < 1500) {
      setStatus("success");
      form.reset();
      return;
    }

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (res.status === 503) {
        setStatus("not-configured");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Honeypot field — hidden from real visitors, visible to bots */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="font-sans text-sm text-espresso">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full border border-taupe/40 bg-ivory px-4 py-3 font-sans text-sm text-espresso outline-none focus:border-gold"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 font-sans text-xs text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="font-sans text-sm text-espresso">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-2 w-full border border-taupe/40 bg-ivory px-4 py-3 font-sans text-sm text-espresso outline-none focus:border-gold"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 font-sans text-xs text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="font-sans text-sm text-espresso">
              Phone <span className="text-taupe">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="mt-2 w-full border border-taupe/40 bg-ivory px-4 py-3 font-sans text-sm text-espresso outline-none focus:border-gold"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 font-sans text-xs text-red-700">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="font-sans text-sm text-espresso">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="mt-2 w-full border border-taupe/40 bg-ivory px-4 py-3 font-sans text-sm text-espresso outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="font-sans text-sm text-espresso">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-2 w-full border border-taupe/40 bg-ivory px-4 py-3 font-sans text-sm text-espresso outline-none focus:border-gold"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 font-sans text-xs text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-1 h-4 w-4 border-taupe/40 accent-gold"
            />
            <label htmlFor="consent" className="font-sans text-sm text-espresso/80">
              I agree to be contacted about my inquiry and have read the{" "}
              <Link href="/privacy" className="underline hover:text-gold">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="mt-1 font-sans text-xs text-red-700">
              {errors.consent}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 inline-flex items-center justify-center bg-espresso px-8 py-3.5 font-sans text-sm tracking-wide text-ivory transition-colors duration-250 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
        </button>

        <div role="status" aria-live="polite" className="font-sans text-sm">
          {status === "success" && (
            <p className="text-espresso">
              Thank you — your inquiry has been sent. We&rsquo;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700">
              Something went wrong sending your message. Please try again, or reach out
              directly using the details on this page.
            </p>
          )}
          {status === "not-configured" && (
            <p className="text-taupe">
              This form isn&rsquo;t connected to an email service yet. Please contact
              the salon directly using the details on this page in the meantime.
            </p>
          )}
        </div>

        <p className="font-sans text-xs leading-relaxed text-taupe">
          Submitting this form sends your information to Olivia Grace Salon so we can
          respond to your inquiry. See the{" "}
          <Link href="/privacy" className="underline hover:text-gold">
            Privacy Policy
          </Link>{" "}
          for details on how it&rsquo;s used.
        </p>
      </form>
    </div>
  );
}
