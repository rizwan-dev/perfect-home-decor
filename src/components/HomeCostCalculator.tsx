"use client";

import { useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import {
  COMPLETE_HOME_PRICING,
  PRICING_NOTE,
  PRICING_SCOPE,
} from "@/lib/pricing-data";

const ROOMS = [
  "Modular kitchen",
  "Living room",
  "Bedroom",
  "Dining area",
  "Puja unit",
  "Foyer / entrance",
  "Balcony",
  "Wardrobe / storage",
] as const;

type Step = 1 | 2 | 3 | 4;

type Tier = { name: string; tagline: string };

const cardBase =
  "rounded-2xl border p-5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-dark/40";
const cardInactive =
  "border-stone-200 bg-white hover:border-wood/40 hover:shadow-sm";
const cardActive =
  "border-wood-dark bg-cream/60 shadow-[0_10px_24px_-16px_rgba(74,59,50,0.4)]";

export function HomeCostCalculator({ tiers }: { tiers: Tier[] }) {
  const [step, setStep] = useState<Step>(1);
  const [bhk, setBhk] = useState<string | null>(null);
  const [rooms, setRooms] = useState<Record<string, number>>({});
  const [tier, setTier] = useState<string | null>(null);

  const band = COMPLETE_HOME_PRICING.find((b) => b.label === bhk);
  const roomEntries = Object.entries(rooms).filter(([, qty]) => qty > 0);
  const totalRooms = roomEntries.reduce((sum, [, qty]) => sum + qty, 0);

  function setRoomQty(room: string, qty: number) {
    setRooms((prev) => ({ ...prev, [room]: Math.max(0, qty) }));
  }

  function reset() {
    setStep(1);
    setBhk(null);
    setRooms({});
    setTier(null);
  }

  const roomsSummary = roomEntries.map(([room, qty]) => `${room} ×${qty}`).join(", ");

  const summaryMessage =
    bhk && tier
      ? `Cost calculator: ${bhk} home, ${tier} scope. Spaces: ${
          roomEntries.length ? roomsSummary : "not specified yet"
        }.`
      : "";

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_24px_50px_-32px_rgba(28,25,23,0.2)] sm:p-8">
      <div className="flex items-center gap-2" aria-hidden>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              n <= step ? "bg-wood-dark" : "bg-stone-200"
            }`}
          />
        ))}
      </div>

      {step === 1 ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Step 1 of 3
          </p>
          <h3 className="mt-2 font-display text-2xl text-charcoal">
            What&apos;s your home size?
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COMPLETE_HOME_PRICING.map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => {
                  setBhk(b.label);
                  setStep(2);
                }}
                className={`${cardBase} ${bhk === b.label ? cardActive : cardInactive}`}
              >
                <span className="block font-display text-lg text-charcoal">
                  {b.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Step 2 of 3
          </p>
          <h3 className="mt-2 font-display text-2xl text-charcoal">
            Which spaces need work?
          </h3>
          <p className="mt-2 text-sm text-stone-500">
            Set a count for each—this just helps us prepare for your site
            visit.
          </p>
          <ul className="mt-6 divide-y divide-stone-100 rounded-2xl border border-stone-200">
            {ROOMS.map((room) => {
              const qty = rooms[room] ?? 0;
              return (
                <li
                  key={room}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <span className="text-sm font-medium text-charcoal">
                    {room}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setRoomQty(room, qty - 1)}
                      disabled={qty === 0}
                      aria-label={`Remove one ${room}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-charcoal transition hover:border-wood-dark disabled:opacity-30"
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-sm font-semibold text-charcoal">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setRoomQty(room, qty + 1)}
                      aria-label={`Add one ${room}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-charcoal transition hover:border-wood-dark"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-stone-500">
            <span className="font-semibold text-charcoal">
              Selected: {totalRooms} {totalRooms === 1 ? "space" : "spaces"}
            </span>
            {roomEntries.length ? ` — ${roomsSummary}` : null}
          </p>
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-wood-dark"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Step 3 of 3
          </p>
          <h3 className="mt-2 font-display text-2xl text-charcoal">
            Choose your scope
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {tiers.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => {
                  setTier(t.name);
                  setStep(4);
                }}
                className={`${cardBase} ${tier === t.name ? cardActive : cardInactive}`}
              >
                <span className="block font-display text-lg text-charcoal">
                  {t.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-stone-500">
                  {t.tagline}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark"
            >
              Back
            </button>
          </div>
        </div>
      ) : null}

      {step === 4 && band ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wood-dark">
            Your estimate
          </p>
          <p className="mt-3 font-display text-4xl text-charcoal">
            {band.range}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            for a {band.label} home ({tier}). {PRICING_SCOPE}
          </p>
          <p className="mt-4 rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-600">
            {PRICING_NOTE}
          </p>
          {roomEntries.length ? (
            <p className="mt-4 text-sm text-stone-500">
              <span className="font-semibold text-charcoal">
                Spaces you picked ({totalRooms}):
              </span>{" "}
              {roomsSummary}
            </p>
          ) : null}

          <div className="mt-8 border-t border-stone-200 pt-8">
            <p className="font-display text-lg text-charcoal">
              Get the exact number for your home
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Share your name and phone—we&apos;ll follow up with a free site
              visit and an item-by-item quote.
            </p>
            <LeadForm
              className="mt-6"
              variant="flush"
              source="cost-calculator"
              defaultService="Full home interiors"
              defaultMessage={summaryMessage}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-6 text-sm font-semibold text-wood-dark underline underline-offset-2"
          >
            Start over
          </button>
        </div>
      ) : null}
    </div>
  );
}
