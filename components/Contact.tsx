import { siteConfig } from "@/lib/site-config";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string | null;
  href?: string;
}) {
  const isPlaceholder = !value;
  const display = value ?? `${label} — to be added`;

  return (
    <div className="border-b border-taupe/20 py-4 first:pt-0">
      <p className="eyebrow mb-1">{label}</p>
      {isPlaceholder ? (
        <p className="font-sans text-base italic text-taupe">{display}</p>
      ) : href ? (
        <a
          href={href}
          className="font-sans text-base text-espresso hover:text-gold"
        >
          {display}
        </a>
      ) : (
        <p className="font-sans text-base text-espresso">{display}</p>
      )}
    </div>
  );
}

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" aria-label="Contact" className="bg-ivory">
      <div className="container-editorial py-24 sm:py-28">
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <ContactRow
              label="Phone"
              value={contact.phone}
              href={contact.phone ? `tel:${contact.phone}` : undefined}
            />
            <ContactRow
              label="Email"
              value={contact.email}
              href={contact.email ? `mailto:${contact.email}` : undefined}
            />
            <ContactRow label="Salon Address" value={contact.address} />
            <ContactRow label="Business Hours" value={contact.hours} />
            <ContactRow
              label="Instagram"
              value={contact.instagram}
              href={contact.instagram ?? undefined}
            />

            <p className="mt-8 font-sans text-xs leading-relaxed text-taupe">
              Details above marked &ldquo;to be added&rdquo; are placeholders — no
              contact information has been invented. The salon owner should replace
              them in <code className="font-mono">lib/site-config.ts</code> before
              launch.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
