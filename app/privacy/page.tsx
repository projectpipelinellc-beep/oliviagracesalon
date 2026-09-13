import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Olivia Grace Salon collects, uses, and protects information submitted through this website.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-taupe/20 py-10 first:pt-0 last:border-b-0">
      <h2 className="font-serif text-2xl text-espresso">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 font-sans text-sm leading-relaxed text-espresso/80 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-ivory">
      <div className="container-editorial max-w-3xl py-20 sm:py-24">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-serif text-4xl text-espresso">Privacy Policy</h1>
        <p className="mt-3 font-sans text-sm text-taupe">
          Effective date: <em>[Owner to add before launch]</em>
        </p>

        <div className="mt-8 border border-gold/40 bg-cream px-5 py-4 font-sans text-sm leading-relaxed text-espresso/80">
          <strong>Starter template notice:</strong> this policy is a plain-language
          starting point, not legal advice. Before launch, {siteConfig.name}&rsquo;s
          owner should review it with a qualified professional and update it to
          reflect the salon&rsquo;s actual tools, data practices, and the laws that
          apply to its location and clientele (for example, state privacy laws or
          GDPR/UK GDPR if applicable).
        </div>

        <div className="mt-6">
          <Section title="Information collected through the contact form">
            <p>
              When you submit the contact form on this site, we collect the
              information you provide: your name, email address, phone number (if
              given), the service you&rsquo;re interested in, and your message.
            </p>
            <p>
              We do not currently use analytics or advertising cookies on this site.
              If that changes, this policy and the cookie preference panel will be
              updated to match, and those cookies will remain off until you consent.
            </p>
          </Section>

          <Section title="How information may be used">
            <p>
              Information submitted through the contact form is used only to respond
              to your inquiry and, if you become a client, to communicate about
              appointments and services. It is not sold, and it is not used for
              advertising.
            </p>
          </Section>

          <Section title="Website analytics and cookies">
            <p>
              This site uses a small set of strictly necessary cookies required for
              basic functionality, such as remembering your cookie preferences. No
              analytics or marketing cookies are active on this site at this time.
            </p>
            <p>
              If analytics or marketing tools are added in the future, they will only
              run after you actively opt in through the cookie preferences panel,
              available at any time via &ldquo;Cookie Preferences&rdquo; in the site
              footer.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              Appointment booking is handled entirely by{" "}
              <a
                href={siteConfig.vagaroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gold"
              >
                Vagaro
              </a>
              , a third-party scheduling platform. When you click &ldquo;Book
              Now,&rdquo; you leave this website and interact directly with Vagaro,
              which has its own privacy policy and terms governing the information
              you provide there. We encourage you to review Vagaro&rsquo;s privacy
              practices separately.
            </p>
            <p>
              If the contact form&rsquo;s email delivery is connected to a
              transactional email provider in the future, that provider will process
              your submission solely to deliver the message to {siteConfig.name}.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              Contact form submissions are retained only as long as reasonably needed
              to respond to your inquiry and for basic business record-keeping.{" "}
              <em>
                [Owner to specify a concrete retention period once a form backend
                and/or mailbox policy is in place.]
              </em>
            </p>
          </Section>

          <Section title="Your choices">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You can decline to submit the contact form and instead reach out
                using the phone number or email listed in the Contact section, once
                added.
              </li>
              <li>
                You can accept, reject, or customize non-essential cookies at any
                time via &ldquo;Cookie Preferences&rdquo; in the footer.
              </li>
              <li>
                You can request that we delete information you&rsquo;ve submitted by
                contacting us using the details below.
              </li>
            </ul>
          </Section>

          <Section title="Contact information">
            <p>
              Questions about this policy can be directed to{" "}
              {siteConfig.contact.email ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline hover:text-gold"
                >
                  {siteConfig.contact.email}
                </a>
              ) : (
                <em>[Owner to add a contact email before launch]</em>
              )}
              .
            </p>
          </Section>
        </div>

        <p className="mt-4 font-sans text-sm">
          <Link href="/" className="underline hover:text-gold">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
