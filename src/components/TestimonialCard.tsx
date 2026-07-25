type Props = {
  name: string;
  area: string;
  text: string;
  role: string;
  /** e.g. Full home interior, Wall painting — shown as a small label. */
  service?: string;
  /** Visual star row (trust signal; matches strong Google ratings). */
  showStars?: boolean;
};

export function TestimonialCard({
  name,
  area,
  text,
  role,
  service,
  showStars = false,
}: Props) {
  return (
    <figure className="relative flex h-full flex-col rounded-3xl border border-stone-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(28,25,23,0.22)]">
      <span
        className="pointer-events-none absolute right-5 top-2 select-none font-display text-6xl leading-none text-stone-100"
        aria-hidden
      >
        ”
      </span>
      {service ? (
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-wood-dark">
          {service}
        </p>
      ) : null}
      {showStars ? (
        <p
          className="mb-3 text-sm tracking-[0.15em] text-amber-600"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </p>
      ) : null}
      <blockquote className="flex-1 text-sm leading-relaxed text-stone-700">
        “{text}”
      </blockquote>
      <figcaption className="mt-6 border-t border-stone-100 pt-4">
        <p className="font-semibold text-charcoal">{name}</p>
        <p className="text-xs text-stone-500">
          {role} · {area}
        </p>
      </figcaption>
    </figure>
  );
}
