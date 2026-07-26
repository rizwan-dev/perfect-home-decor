import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Room-led browsing: people shop interiors by room, not by service name. */
const rooms = [
  {
    label: "Living room",
    href: "/services/interior-design",
    src: "/images/stock/coffered-ceiling-living-room-pune.webp",
    alt: "Living room interior design with coffered ceiling and built-in shelving in Pune",
  },
  {
    label: "Modular kitchen",
    href: "/services/modular-kitchen",
    src: "/images/canva/modular-kitchen-grey-wood-pendant-lights-pune.webp",
    alt: "Modular kitchen design with grey base units and brass pendant lights in Pune",
  },
  {
    label: "Bedroom",
    href: "/services/interior-design",
    src: "/images/stock/bedroom-soft-neutral-interior-pune.webp",
    alt: "Soft neutral bedroom interior with fitted wardrobe and warm lighting in Pune",
  },
  {
    label: "Wardrobe",
    href: "/services/custom-furniture",
    src: "/images/stock/wardrobe-design-glass-wood-pune.webp",
    alt: "Wardrobe design with glass and wood finishes in a Pune home",
  },
  {
    label: "False ceiling",
    href: "/services/false-ceiling",
    src: "/images/stock/living-room-contemporary-ceiling-pune.webp",
    alt: "Contemporary living room with layered false ceiling and recessed lighting in Pune",
  },
  {
    label: "TV & media wall",
    href: "/services/custom-furniture",
    src: "/images/stock/tv-media-wall-unit-design-pune.webp",
    alt: "TV media wall unit with storage and accent lighting in a Pune living room",
  },
  {
    label: "Kids' room",
    href: "/services/interior-design",
    src: "/images/canva/colourful-kids-room-interior-pune.webp",
    alt: "Colourful kids room interior with study desk and storage in Pune",
  },
  {
    label: "Wall painting",
    href: "/services/home-painting",
    src: "/images/canva/blue-panelled-living-room-painting-pune.webp",
    alt: "Living room with painted blue panelled feature wall in Pune",
  },
] as const;

export function HomeInspiration() {
  return (
    <section className="border-t border-stone-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inspiration"
          title="Inspiration for your home interiors"
          description="Browse by room to see the finishes, storage and lighting we build for Pune homes—then bring the one closest to your taste to your free site visit."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {rooms.map((room, i) => (
            <Reveal key={room.label} delay={(i % 4) * 70}>
              <Link
                href={room.href}
                className="group relative block overflow-hidden rounded-2xl bg-stone-100"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
                  <span className="font-display text-base text-cream sm:text-lg">
                    {room.label}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cream/40 text-xs text-cream transition duration-300 group-hover:translate-x-0.5 group-hover:border-cream group-hover:bg-cream group-hover:text-charcoal"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
