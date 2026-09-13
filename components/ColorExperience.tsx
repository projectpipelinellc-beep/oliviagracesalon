import PhotoSlot from "./PhotoSlot";

export default function ColorExperience() {
  return (
    <section aria-label="The color experience" className="bg-ivory">
      <div className="container-editorial grid items-center gap-14 py-24 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:col-start-1">
          <PhotoSlot
            src="/images/BBPhoto-137.JPEG"
            alt="Close-up of hair color being poured into a glass mixing bowl."
            filename="BBPhoto-137.JPEG"
            description="Hair color being poured and mixed — the color experience."
            aspectClassName="aspect-[4/3]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <span aria-hidden="true" className="mb-6 block h-px w-10 bg-gold" />
          <p className="eyebrow mb-4">Color</p>
          <h2 className="text-3xl leading-tight text-espresso sm:text-4xl">
            Color created with intention
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-espresso/75">
            From subtle dimension to a complete transformation, every color service is
            approached with precision, care, and a plan tailored to your hair.
          </p>
        </div>
      </div>
    </section>
  );
}
