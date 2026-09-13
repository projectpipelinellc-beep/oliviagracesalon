import SectionHeading from "./SectionHeading";

// Empty, ready-to-fill gallery slots. Drop future work photos into
// /public/images/gallery/ and reference them here — the grid, aspect
// ratios, and layout are already in place so no redesign is needed.
const GALLERY_SLOT_COUNT = 6;

export default function GalleryPreview() {
  return (
    <section aria-label="Gallery" className="bg-cream">
      <div className="container-editorial py-24 sm:py-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="The work"
          align="center"
        />
        <p className="mx-auto mt-6 max-w-xl text-center font-sans text-base text-espresso/70">
          A collection of recent colors, cuts, and transformations.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {Array.from({ length: GALLERY_SLOT_COUNT }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-square flex-col items-center justify-center gap-2 border border-dashed border-taupe/30 bg-ivory/60"
            >
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-taupe">
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
