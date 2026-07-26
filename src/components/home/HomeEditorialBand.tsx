import Image from "next/image";

const src = "/images/stock/home-interior-hallway-open-plan-pune.webp";

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
          className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            <div className="h-px w-12 bg-cream/50" aria-hidden />
            <p className="mt-4 max-w-xl font-display text-xl italic leading-snug text-cream sm:text-2xl">
              “Detail is the difference—finishes chosen to age well in Pune
              homes.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
