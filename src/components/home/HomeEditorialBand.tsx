import Image from "next/image";

const src =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=80";

/** Full-width visual rhythm between content sections (premium editorial feel). */
export function HomeEditorialBand() {
  return (
    <section className="relative w-full" aria-label="Interior design showcase">
      <div className="relative aspect-[21/9] min-h-[200px] w-full sm:aspect-[21/8] sm:min-h-[240px] md:min-h-[320px]">
        <Image
          src={src}
          alt="Spacious open-plan living and dining interior with natural light—residential project style"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20"
          aria-hidden
        />
      </div>
    </section>
  );
}
