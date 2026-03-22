import { COMPANY } from "@/lib/site";

export type HomeFaqEntry = {
  /** Stable fragment for deep links & scroll (#faq-…) */
  id: string;
  q: string;
  a: string;
};

export const homeFaqEntries: HomeFaqEntry[] = [
  {
    id: "faq-who-pune",
    q: "Who is Perfect Home Decor and where do you work in Pune?",
    a: `${COMPANY.name} is a Pune interior design and execution team based out of Wagholi, with active projects across Kharadi, Magarpatta, Viman Nagar, Lohegaon, Kesnand, and nearby East Pune micro-markets. We handle residential turnkey scopes as well as commercial interiors such as offices and retail outlets.`,
  },
  {
    id: "faq-scope-services",
    q: "Do you only do full home interiors, or smaller jobs too?",
    a: "We take full 2 BHK / 3 BHK turnkey homes as well as single-scope work—modular kitchen only, false ceiling and lighting, full-home painting, custom wardrobes, or one-room upgrades. Scope is tailored to what you need now.",
  },
  {
    id: "faq-free-consultation",
    q: "Is the first consultation and site visit free?",
    a: "Yes. We offer a free initial consultation and site visit in Pune so we can understand your layout, society constraints, and budget band before we propose a plan or BOQ.",
  },
  {
    id: "faq-site-visit-timing",
    q: "How soon can you visit my flat or site in Kharadi or nearby?",
    a: "Most enquiries receive a same-day phone callback on working days. Site visits in Kharadi, Wagholi, Magarpatta, Viman Nagar, Lohegaon, and surrounding areas are typically scheduled within a few working days, depending on crew availability.",
  },
  {
    id: "faq-2bhk-3bhk-cost",
    q: "How much does interior design cost for a 2 BHK or 3 BHK in Pune?",
    a: "Cost depends on carpet area, civil changes, kitchen size, woodwork extent, and finish grade—not a single rate card. After measurements and design direction, we share a transparent bill of quantities (BOQ) so you can compare line items and phase spends without hidden surprises.",
  },
  {
    id: "faq-drawings-boq",
    q: "Will I get drawings and a clear estimate before paying for execution?",
    a: "Yes. You see layouts, elevations, and key 3D views for sign-off, plus a documented BOQ with finishes called out. Milestone billing is tied to agreed stages so you pay as work progresses, not on vague verbal quotes.",
  },
  {
    id: "faq-timeline-kitchen-home",
    q: "How long does a modular kitchen or full home interior take in Pune?",
    a: "Timelines vary with scope, material lead times, and society working-hour rules. Many modular kitchen projects need several weeks from sign-off; full 2–3 BHK turnkey interiors often fall in the order of a few months once civil release and approvals are clear. We give a schedule with your proposal.",
  },
  {
    id: "faq-society-mc",
    q: "Do you help with society MC approvals, working hours, and lift use?",
    a: "We are used to Pune society norms—noise windows, lift protection, debris handling, and documentation MCs ask for. We align our execution plan with your tower’s rules so the site stays compliant and neighbour-friendly.",
  },
  {
    id: "faq-commercial-spaces",
    q: "Do you design commercial spaces—offices or shops—or only homes?",
    a: "Both. Beyond apartments and villas, we take commercial interior design for offices, showrooms, and retail in Pune—zoning, services coordination, durable finishes, and handover aligned to your opening or move-in date.",
  },
  {
    id: "faq-renters-upgrades",
    q: "Can renters or resale buyers hire you for light upgrades?",
    a: "Yes. Many clients want reversible upgrades—paint, ceiling profiles, loose furniture, or kitchen facelifts that landlords accept. We flag what is fixed vs removable so you know what you can take when you move.",
  },
  {
    id: "faq-carpenter-vs-turnkey",
    q: "What is the difference between hiring a carpenter and a turnkey interior company?",
    a: "A turnkey partner like Perfect Home Decor aligns design, drawings, factory modulars, and site execution under one team—fewer gaps between what you approved and what is built. Carpenters alone may not carry design liability, structured BOQs, or coordinated MEP and finishing trades.",
  },
  {
    id: "faq-warranty-support",
    q: "Do you offer warranty or support after handover?",
    a: "We close with a snag list walkthrough and document hardware and factory warranties where applicable. For service issues within agreed terms, we coordinate rectification so you are not chasing multiple vendors after move-in.",
  },
];

export function homeFaqForSchema(): { q: string; a: string }[] {
  return homeFaqEntries.map(({ q, a }) => ({ q, a }));
}
