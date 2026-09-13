import PhotoSlot from "./PhotoSlot";
import SectionHeading from "./SectionHeading";

// Add future work photos here (and to /public/images/gallery/) to grow
// this collection — the grid, aspect ratios, and layout already support
// any number of tiles without further redesign.
const galleryImages = [
  { file: "work-01.jpg", alt: "Deep burgundy hair color result, styled in soft waves." },
  { file: "work-02.jpg", alt: "Warm blonde balayage result, styled in loose waves." },
  { file: "work-03.jpg", alt: "Cool-toned blonde balayage result on long hair." },
  { file: "work-04.jpg", alt: "Sunkissed blonde balayage result on straight hair." },
  { file: "work-05.jpg", alt: "Dimensional brunette balayage result, styled in waves." },
  { file: "work-06.jpg", alt: "Soft, dimensional blonde color result on straight hair." },
  { file: "work-07.jpg", alt: "Dimensional blonde balayage result, styled in waves." },
  { file: "work-08.jpg", alt: "Warm dimensional blonde color result, styled in waves." },
];

export default function GalleryPreview() {
  return (
    <section aria-label="Gallery" className="bg-cream">
      <div className="container-editorial py-24 sm:py-28">
        <SectionHeading eyebrow="Portfolio" title="The work" align="center" />
        <p className="mx-auto mt-6 max-w-xl text-center font-sans text-base text-espresso/70">
          A collection of recent colors, cuts, and transformations.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {galleryImages.map((image) => (
            <PhotoSlot
              key={image.file}
              src={`/images/gallery/${image.file}`}
              alt={image.alt}
              filename={`gallery/${image.file}`}
              description="Future work photo"
              aspectClassName="aspect-[3/4]"
              sizes="(min-width: 640px) 25vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
