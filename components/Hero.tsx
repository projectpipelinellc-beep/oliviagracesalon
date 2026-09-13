import { siteConfig } from "@/lib/site-config";
import BookNowLink from "./BookNowLink";
import PhotoSlot from "./PhotoSlot";

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="bg-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-8 lg:order-1 lg:px-16 lg:py-24 xl:px-20">
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <p className="eyebrow mb-6">{siteConfig.name}</p>
            <h1 className="text-4xl leading-[1.1] text-espresso sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <div className="rule-gold my-7" />
            <p className="font-sans text-base leading-relaxed text-espresso/75 sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <BookNowLink className="inline-flex items-center justify-center bg-espresso px-8 py-3.5 text-center font-sans text-sm tracking-wide text-ivory transition-colors duration-250 hover:bg-gold" />
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-espresso/30 px-8 py-3.5 text-center font-sans text-sm tracking-wide text-espresso transition-colors duration-250 hover:border-gold hover:text-gold"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <PhotoSlot
            src="/images/Facetune_25-08-2026-17-01-47.jpeg"
            alt="Stylist from Olivia Grace Salon standing full-length in a black blazer and skirt, holding a round brush and a pair of shears."
            filename="Facetune_25-08-2026-17-01-47.jpeg"
            description="Full-body portrait of the stylist holding scissors and a round brush — primary hero image."
            priority
            aspectClassName="aspect-[2/3]"
            objectPosition="top center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
