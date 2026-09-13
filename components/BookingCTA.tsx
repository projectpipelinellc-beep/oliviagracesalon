import BookNowLink from "./BookNowLink";

export default function BookingCTA() {
  return (
    <section aria-label="Book an appointment" className="bg-espresso">
      <div className="container-editorial flex flex-col items-center gap-6 py-20 text-center sm:py-24">
        <h2 className="text-3xl leading-tight text-ivory sm:text-4xl">
          Ready for your next look?
        </h2>
        <span aria-hidden="true" className="h-px w-16 bg-gold" />
        <p className="max-w-md font-sans text-base text-ivory/75">
          Explore available services and reserve your appointment online.
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <BookNowLink className="inline-flex items-center justify-center bg-gold px-8 py-3.5 font-sans text-sm tracking-wide text-espresso transition-colors duration-250 hover:bg-ivory" />
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-ivory/40 px-8 py-3.5 font-sans text-sm tracking-wide text-ivory transition-colors duration-250 hover:border-gold hover:text-gold"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}
