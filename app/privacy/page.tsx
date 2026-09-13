import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Olivia Grace Salon's website handles cookies, third-party services, and visitor information.",
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
          <Section title="Information collected on this website">
            <p>
              This site does not have a contact form and does not collect personal
              information through any on-site submission. The Contact section simply
              displays {siteConfig.name}&rsquo;s phone number, email address, street
              address, business hours, and Instagram handle so visitors can reach out
              directly through whichever channel they prefer.
            </p>
            <p>
              If you call, email, or message the salon directly using those details,
              that conversation is handled through the phone carrier, email provider,
              or Instagram itself — not collected or stored by this website.
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
              Similarly, the Instagram link on this site takes you to Instagram
              itself, which has its own separate privacy practices.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              Because this website itself doesn&rsquo;t collect contact-form
              submissions, there is no such data for the website to retain. Your
              cookie preference (if you&rsquo;ve set one) is kept in your browser
              until you change it or clear your browser&rsquo;s site data.
            </p>
          </Section>

          <Section title="Your choices">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You can accept, reject, or customize non-essential cookies at any
                time via &ldquo;Cookie Preferences&rdquo; in the footer.
              </li>
              <li>
                You can choose whether and how to contact the salon directly — by
                phone, email, Instagram, or through Vagaro — using the details in the
                Contact section.
              </li>
            </ul>
          </Section>

          <Section title="Contact information">
            <p>
              Questions about this policy can be directed to{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline hover:text-gold"
              >
                {siteConfig.contact.email}
              </a>
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
