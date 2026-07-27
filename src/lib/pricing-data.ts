/**
 * Published cost ranges for a complete home interior.
 *
 * Single source of truth: the blog guide, the interior-design service page and
 * every locality landing page read from here, so the figures cannot drift apart
 * between pages — which is exactly the kind of inconsistency a prospect notices
 * and a competitor screenshots.
 *
 * Confirmed with the owner against how the work is actually quoted. Treat these
 * as public commitments: if real jobs regularly land outside a band, widen the
 * band here rather than explaining the gap on a call.
 */
export type PriceBand = {
  /** Home size, as buyers search for it. */
  label: string;
  /** Inclusive range, already formatted for display. */
  range: string;
};

export const COMPLETE_HOME_PRICING: PriceBand[] = [
  { label: "1 BHK", range: "₹2.5–9.5 lakh" },
  { label: "2 BHK", range: "₹4.5–14.5 lakh" },
  { label: "3 BHK", range: "₹6.5–19.5 lakh" },
  { label: "4 BHK / villa", range: "₹19.5–36.5 lakh" },
];

/** What the ranges cover — kept short enough to sit under the table. */
export const PRICING_SCOPE =
  "Complete home interior: modular kitchen, hall, bedrooms and kids’ room, delivered on one schedule.";

/** The single most useful thing to tell someone reading a wide range. */
export const PRICING_NOTE =
  "Where a home lands inside its range depends on how much built-in storage it needs — wardrobes, kitchen units and the TV wall — far more than on finish choices. The final figure comes after a free site visit and measurement, itemised line by line so you can compare it fairly and drop anything you don’t need.";
