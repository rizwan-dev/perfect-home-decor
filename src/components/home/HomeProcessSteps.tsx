const steps = [
  {
    step: "01",
    title: "Discover",
    body: "We visit your home in Pune, capture measurements, and align on budget, timeline, and how you use each room.",
  },
  {
    step: "02",
    title: "Design",
    body: "Layouts, 3D views, and material palettes—signed off before we mobilise so visuals match what gets built.",
  },
  {
    step: "03",
    title: "Detail & produce",
    body: "Working drawings, services coordination, and factory-ready modular—quality checks at every handoff.",
  },
  {
    step: "04",
    title: "Build & hand over",
    body: "Site supervision, snag lists, and a walkthrough when finishes are protected and ready to live in.",
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
          The same structured journey you expect from national interior
          brands—paired with direct access to designers and site leads who
          know Pune societies and monsoon schedules.
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <span className="font-display text-3xl text-stone-200">
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
