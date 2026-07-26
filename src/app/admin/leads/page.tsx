import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { isLeadStoreConfigured, listLeads } from "@/lib/leads-store";

export const metadata: Metadata = {
  title: { absolute: "Leads — Perfect Home Decor admin" },
  robots: { index: false, follow: false, nocache: true },
};

// Never prerender: this must read the database on every request, and a cached
// copy of customer contact details is not something we want sitting on a CDN.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const IST = "Asia/Kolkata";

function formatWhen(iso: string): { date: string; time: string } {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: IST,
    }),
    time: d.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: IST,
    }),
  };
}

/** Digits only, with India's country code, for tel:/wa.me links. */
function toWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return digits;
  return digits;
}

function titleise(value: string): string {
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function AdminLeadsPage() {
  const configured = isLeadStoreConfigured();
  const leads = configured ? await listLeads() : [];

  const today = new Date().toLocaleDateString("en-CA", { timeZone: IST });
  const todayCount = leads.filter(
    (l) =>
      new Date(l.createdAt).toLocaleDateString("en-CA", { timeZone: IST }) ===
      today,
  ).length;
  const unemailed = leads.filter((l) => !l.emailSent).length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="border-b border-stone-200 pb-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-wood-dark">
          {COMPANY.name} · Admin
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
          Enquiries
        </h1>
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Total
            </dt>
            <dd className="mt-1 font-display text-2xl text-charcoal">
              {leads.length}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Today
            </dt>
            <dd className="mt-1 font-display text-2xl text-charcoal">
              {todayCount}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Not emailed
            </dt>
            <dd
              className={`mt-1 font-display text-2xl ${
                unemailed > 0 ? "text-amber-700" : "text-charcoal"
              }`}
            >
              {unemailed}
            </dd>
          </div>
        </dl>
      </header>

      {!configured ? (
        <p className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950">
          <span className="font-semibold">Storage is not configured.</span> Set{" "}
          <code className="rounded bg-amber-100 px-1">DATABASE_URL</code> in
          your environment and redeploy. Enquiries are still being emailed in
          the meantime.
        </p>
      ) : leads.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-600">
          No enquiries stored yet. Submit the contact form once and refresh this
          page.
        </p>
      ) : (
        <>
          {/* Desktop: dense table. */}
          <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-stone-200 bg-white lg:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50/80 text-left">
                  {["When", "Name", "Phone", "Service", "Area", "Message", ""].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-stone-500"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => {
                  const when = formatWhen(l.createdAt);
                  return (
                    <tr
                      key={l.id}
                      className="border-b border-stone-100 align-top last:border-0 hover:bg-cream/40"
                    >
                      <td className="whitespace-nowrap px-4 py-3 text-stone-600">
                        {when.date}
                        <span className="block text-xs text-stone-400">
                          {when.time}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-charcoal">
                        {l.name}
                        {!l.emailSent ? (
                          <span
                            className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-800"
                            title="Stored, but the notification email did not go out"
                          >
                            no email
                          </span>
                        ) : null}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a
                          href={`tel:${l.phone.replace(/\s/g, "")}`}
                          className="font-medium text-wood-dark hover:underline"
                        >
                          {l.phone}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-stone-600">
                        {l.service ? titleise(l.service) : "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-stone-600">
                        {l.area || "—"}
                      </td>
                      <td className="max-w-md px-4 py-3 text-stone-600">
                        {l.message || (
                          <span className="text-stone-400">—</span>
                        )}
                        {l.source ? (
                          <span className="mt-1 block text-xs text-stone-400">
                            via {l.source}
                          </span>
                        ) : null}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a
                          href={`https://wa.me/${toWhatsApp(l.phone)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-charcoal px-3 py-1.5 text-xs font-semibold text-cream transition hover:bg-wood-dark"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: one card per enquiry — this gets read on a phone. */}
          <ul className="mt-8 space-y-3 lg:hidden">
            {leads.map((l) => {
              const when = formatWhen(l.createdAt);
              return (
                <li
                  key={l.id}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-charcoal">{l.name}</p>
                      <p className="mt-0.5 text-xs text-stone-500">
                        {when.date} · {when.time}
                      </p>
                    </div>
                    {!l.emailSent ? (
                      <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-800">
                        no email
                      </span>
                    ) : null}
                  </div>
                  <dl className="mt-3 space-y-1 text-sm text-stone-600">
                    {l.service ? (
                      <div className="flex gap-2">
                        <dt className="text-stone-400">Service</dt>
                        <dd>{titleise(l.service)}</dd>
                      </div>
                    ) : null}
                    {l.area ? (
                      <div className="flex gap-2">
                        <dt className="text-stone-400">Area</dt>
                        <dd>{l.area}</dd>
                      </div>
                    ) : null}
                  </dl>
                  {l.message ? (
                    <p className="mt-3 rounded-xl bg-stone-50 px-3 py-2 text-sm leading-relaxed text-stone-700">
                      {l.message}
                    </p>
                  ) : null}
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`tel:${l.phone.replace(/\s/g, "")}`}
                      className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-semibold text-charcoal"
                    >
                      Call {l.phone}
                    </a>
                    <a
                      href={`https://wa.me/${toWhatsApp(l.phone)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream"
                    >
                      WhatsApp
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p className="mt-8 text-xs text-stone-400">
        Showing the {leads.length === 500 ? "most recent 500" : "full"} list,
        newest first. Times are IST.
      </p>
    </div>
  );
}
