import BookNowLink from "./BookNowLink";
import PhotoSlot from "./PhotoSlot";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Custom Color",
    description:
      "A color plan built around your natural base, your goals, and how much upkeep feels right for you.",
  },
  {
    title: "Highlights & Dimensional Color",
    description:
      "Foils, balayage, and hand-painted technique layered to create movement and depth.",
  },
  {
    title: "Haircuts",
    description:
      "Precision cutting shaped to your hair's texture and how you actually wear it day to day.",
  },
  {
    title: "Weft Extensions",
    description:
      "Sewn-in weft extensions added and blended for natural-looking length and fullness, matched to your color and texture.",
  },
  {
    title: "Blowouts & Styling",
    description:
      "Polished, long-lasting finishes for everyday shine or a specific look you have in mind.",
  },
  {
    title: "Treatments",
    description:
      "Restorative services designed to support hair health alongside your color and styling.",
  },
  {
    title: "Special-Occasion Styling",
    description:
      "Refined updos and styling for weddings, events, and photography.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-cream">
      <div className="container-editorial py-24 sm:py-28">
        <SectionHeading eyebrow="Services" title="What we offer" />

        <div className="mt-14">
          <PhotoSlot
            src="/images/BBPhoto-140.JPEG"
            alt="Flat-lay of professional styling brushes, shears, combs, clips, and black-and-cream checkerboard foils arranged on a work surface."
            filename="BBPhoto-140.JPEG"
            description="Flat-lay of the salon's professional tools — brushes, shears, combs, clips, and foils."
            aspectClassName="aspect-[3/2]"
            sizes="100vw"
          />
        </div>

        <ol className="mt-14 lg:mx-auto lg:max-w-3xl">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="flex gap-6 border-b border-taupe/20 py-6 first:pt-0 last:border-b-0"
            >
              <span className="font-serif text-lg text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl text-espresso">{service.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/70 sm:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <BookNowLink className="inline-flex items-center justify-center border border-gold px-8 py-3.5 font-sans text-sm tracking-wide text-espresso transition-colors duration-250 hover:bg-gold hover:text-ivory">
            View Services &amp; Book
          </BookNowLink>
        </div>
      </div>
    </section>
  );
}
