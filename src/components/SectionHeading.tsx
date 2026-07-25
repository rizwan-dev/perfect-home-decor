type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level — pages without another h1 should promote their lead SectionHeading. */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-2 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
