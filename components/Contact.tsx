import { siteConfig } from "@/lib/site-config";
import SectionHeading from "./SectionHeading";

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-b border-taupe/20 py-4 first:pt-0">
      <p className="eyebrow mb-1">{label}</p>
      {href ? (
        <a href={href} className="font-sans text-base text-espresso hover:text-gold">
          {value}
        </a>
      ) : (
        <p className="font-sans text-base text-espresso">{value}</p>
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
            <ContactRow label="Phone" value={contact.phone} href={`tel:+1${contact.phone.replace(/\D/g, "")}`} />
            <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactRow label="Salon Address" value={contact.address} />
            <ContactRow
              label="Instagram"
              value={`@${contact.instagramHandle}`}
              href={contact.instagramUrl}
            />
            <ContactRow label="Facebook" value="Olivia Grace Salon" href={contact.facebookUrl} />
          </div>

          <div>
            <p className="eyebrow mb-1">Business Hours</p>
            <dl className="mt-3">
              {contact.hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between border-b border-taupe/20 py-3 first:pt-0 last:border-b-0"
                >
                  <dt className="font-sans text-base text-espresso">{day}</dt>
                  <dd
                    className={`font-sans text-base ${
                      time === "Closed" ? "italic text-taupe" : "text-espresso/80"
                    }`}
                  >
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
