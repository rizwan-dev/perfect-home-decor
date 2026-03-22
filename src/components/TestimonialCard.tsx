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
    <figure className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
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
