import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-wood-dark">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl text-charcoal">
        This page moved—or never existed.
      </h1>
      <p className="mt-4 text-sm text-stone-600">
        Head back home or tell us what you are trying to find—we love a good
        floor plan hunt.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex justify-center rounded-full bg-charcoal px-8 py-3 text-sm font-semibold text-cream"
      >
        Back to homepage
      </Link>
    </div>
  );
}
