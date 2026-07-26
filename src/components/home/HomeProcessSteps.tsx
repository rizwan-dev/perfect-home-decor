const steps = [
  {
    step: "01",
    title: "Free site visit",
    body: "We visit your flat—Kharadi to Kesnand—measure every wall, and listen to how your family actually uses each room.",
  },
  {
    step: "02",
    title: "Design & quote",
    body: "Layouts, 3D views, and material palettes with an item-by-item quotation—signed off before work starts, so what you see is what gets built.",
  },
  {
    step: "03",
    title: "Detail & produce",
    body: "Working drawings with electrical and plumbing marked before boarding, and modular units built in the factory—checked before they reach your society gate.",
  },
  {
    step: "04",
    title: "Build & hand over",
    body: "Supervised execution, floors protected, a shared snag list we actually close—and a final walkthrough when the home is truly ready to live in.",
  },
] as const;

export function HomeProcessSteps() {
  return (
    <section className="border-y border-stone-200 bg-stone-50/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
          Our process
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
          From first call to handover—one team, clear stages
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          The same structured journey you expect from the national interior
          brands—with direct access to the designers and site leads who know
          Pune’s societies, monsoon calendar, and Diwali deadlines.
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-24px_rgba(28,25,23,0.22)]"
            >
              <span className="font-display text-3xl italic text-wood/75 transition-colors duration-300 group-hover:text-wood">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-xl text-charcoal">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
