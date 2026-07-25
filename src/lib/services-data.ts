export type ServiceSlug =
  | "interior-design"
  | "commercial-interior-design"
  | "modular-kitchen"
  | "home-painting"
  | "false-ceiling"
  | "custom-furniture";

export const SERVICE_SLUGS: ServiceSlug[] = [
  "interior-design",
  "commercial-interior-design",
  "modular-kitchen",
  "home-painting",
  "false-ceiling",
  "custom-furniture",
];

export const servicesMeta: Record<
  ServiceSlug,
  {
    title: string;
    short: string;
    heroImage: string;
    keywords: string[];
  }
> = {
  "interior-design": {
    title: "Home Interior Design",
    short:
      "Complete interiors for 1, 2 & 3 BHK flats and villas—layout, materials, lighting, and execution that feels calm, warm, and unmistakably yours.",
    heroImage: "/images/projects/living-room-false-ceiling.jpg",
    keywords: [
      "interior designer Pune",
      "home interior design",
      "modular interiors",
    ],
  },
  "commercial-interior-design": {
    title: "Commercial Interior Design",
    short:
      "Offices, retail stores, and showrooms in Pune—brand-led layouts, efficient workflows, durable finishes, and on-time handover for working spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=82&auto=format&fit=crop",
    keywords: [
      "office interior design Pune",
      "shop interior Pune",
      "commercial interior designer",
      "retail showroom design",
    ],
  },
  "modular-kitchen": {
    title: "Modular Kitchen",
    short:
      "Ergonomic layouts, premium finishes, and storage planned down to the masala shelf—kitchens built for daily Indian cooking and Pune’s humid monsoons.",
    heroImage: "/images/projects/render-kitchen-dining.jpg",
    keywords: ["modular kitchen Pune", "kitchen interior", "parallel kitchen"],
  },
  "home-painting": {
    title: "Wall Painting",
    short:
      "Low-odour paints, crisp lines, and palettes chosen for Pune’s light—scheduled around the monsoon so walls cure properly and colours stay true.",
    heroImage: "/images/projects/living-room-blue-accent.jpg",
    keywords: ["home painting Pune", "wall painting", "texture paint"],
  },
  "false-ceiling": {
    title: "False Ceiling (POP)",
    short:
      "Layered ceilings, cove lighting, and clean profiles that hide wiring and AC piping—while keeping standard Pune flat heights bright and airy.",
    heroImage: "/images/projects/ceiling-wooden-cove-wallpaper.jpg",
    keywords: ["false ceiling Pune", "POP ceiling", "gypsum ceiling"],
  },
  "custom-furniture": {
    title: "Custom Furniture",
    short:
      "TV units, beds, wardrobes, and storage—measured for your space, finished to match your interior story.",
    heroImage: "/images/projects/wardrobe-loft-storage.jpg",
    keywords: ["custom TV unit Pune", "bed design", "wardrobe design"],
  },
};

export const servicePageCopy: Record<
  ServiceSlug,
  {
    intro: string;
    benefits: { title: string; body: string }[];
    process: { step: string; detail: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  "interior-design": {
    intro:
      "We design homes that feel settled the day you move in—warm neutrals, honest materials, and layouts that respect how Pune families actually live. Most of our clients call us in one of two moments: just after collecting possession of a new flat in Kharadi, Wagholi, or Viman Nagar, or when a home they have lived in for years stops fitting the family it holds. Either way, we coordinate civil touch-ups, electrical planning, and finishing trades so you are not chasing five vendors between office and school runs.",
    benefits: [
      {
        title: "One accountable team",
        body: "Design, drawings, and site execution move together—fewer gaps between what you approved and what gets built.",
      },
      {
        title: "Budget clarity early",
        body: "We break down finishes, woodwork, and loose furniture so you can phase spends without surprises mid-project.",
      },
      {
        title: "Lighting that flatters",
        body: "We plan layers—ambient, task, and accent—so rooms feel spacious even on monsoon-grey afternoons.",
      },
      {
        title: "Durable choices for Pune",
        body: "Humidity-aware materials, easy-clean surfaces, and hardware that stands up to daily use.",
      },
    ],
    process: [
      {
        step: "Discovery at your site",
        detail:
          "We walk the space, note services and beams, and understand routines—work-from-home corners, elders, kids, pets.",
      },
      {
        step: "Concept & 3D views",
        detail:
          "Mood, materials, and furniture layouts come together so you can decide with confidence before work begins.",
      },
      {
        step: "Detailed drawings & BOQ",
        detail:
          "Elevations, electrical points, and a clear bill of quantities align site teams and timelines.",
      },
      {
        step: "Execution & handover",
        detail:
          "Weekly site reviews, snag lists, and a clean handover with care notes for finishes.",
      },
    ],
    faqs: [
      {
        q: "Do you work with partially furnished homes?",
        a: "Yes. We can refresh select rooms, upgrade kitchens, or layer loose furniture and décor around what you already own.",
      },
      {
        q: "How long does a typical Pune apartment take?",
        a: "Timelines depend on scope and approvals, but most turnkey 2–3 BHK interiors land between 10–16 weeks once civil work is released.",
      },
      {
        q: "Can we choose our own brands for appliances?",
        a: "Absolutely. We coordinate sizes, services, and cabinetry cut-outs so installation day is smooth.",
      },
      {
        q: "What does full home interior design cost in Pune?",
        a: "It depends on carpet area, how much woodwork you want, and the material grades you choose—which is why we never quote from a phone call. After a free site visit you get an item-by-item quotation, so you can see exactly where the money goes, trim what you don't need, and phase the rest.",
      },
    ],
  },
  "commercial-interior-design": {
    intro:
      "Commercial spaces have to work hard—first impressions for customers, focus for teams, and durability under daily traffic. We design and execute offices, retail shops, clinics, and experience-led showrooms across Pune: clear zoning, services and AC coordination, lighting that supports your brand, and millwork that survives real use. Whether you are fitting out a Kharadi office floor or a high-street storefront, we align landlord norms, fire basics, and your opening date.",
    benefits: [
      {
        title: "Office & shop, one process",
        body: "Same disciplined BOQs and site rhythm we use on homes—scaled for cabins, open desks, reception, and back-of-house.",
      },
      {
        title: "Brand-forward front of house",
        body: "Feature walls, signage integration, display systems, and lighting that make your identity legible the moment someone walks in.",
      },
      {
        title: "Workflow-aware layouts",
        body: "Circulation, storage, and power/data planning so teams and retail staff are not fighting the floor plan.",
      },
      {
        title: "Hard-wearing finishes",
        body: "Floors, skirting, and high-touch surfaces specified for chairs, trolleys, and Pune’s dust and monsoon cycles.",
      },
    ],
    process: [
      {
        step: "Brief & site survey",
        detail:
          "We map columns, services, landlord conditions, and peak-hour use—sales floor vs studio vs meeting load.",
      },
      {
        step: "Concept & space plan",
        detail:
          "Zoning, furniture intent, and a mood that matches your brand; 3D views for stakeholder sign-off.",
      },
      {
        step: "Working drawings & BOQ",
        detail:
          "Ceiling and services coordination, joinery details, and a milestone-wise bill so capex stays predictable.",
      },
      {
        step: "Build, install & handover",
        detail:
          "Phased execution where needed, snag closure, and handover aligned to your launch or move-in date.",
      },
    ],
    faqs: [
      {
        q: "Do you only do large offices?",
        a: "No—we take compact IT offices, single retail outlets, and shell-to-ready showrooms. Scope drives team size and timeline, not whether we take the job.",
      },
      {
        q: "Can you match our existing brand guidelines?",
        a: "Yes. Share palette, typography, and fixture standards; we translate them into materials, signage zones, and lighting.",
      },
      {
        q: "How does commercial timing differ from homes?",
        a: "We work backward from your opening or occupancy date, buffer for approvals, and sequence civil, MEP, and finishes to avoid idle weeks.",
      },
      {
        q: "How is a commercial fit-out priced?",
        a: "Per-seat or per-square-foot benchmarks are a starting point, but the real drivers are ceiling and AC scope, partition count, and front-of-house finishes. After a site survey you get a milestone-wise quotation, so capex approval and cash flow planning have real numbers behind them.",
      },
    ],
  },
  "modular-kitchen": {
    intro:
      "Kitchens are the busiest room in the house—we design them for flow, ventilation, and storage depth. Most Pune builder kitchens arrive as a bare platform and a chimney duct; we turn that shell into a kitchen that works for daily dal-chawal cooking and Sunday biryani alike. From compact parallel layouts along apartment walls to island-led social kitchens, we engineer carcass strength, soft-close hardware, and quartz or granite tops that tolerate heat, haldi, and spills.",
    benefits: [
      {
        title: "Triangle that fits your plan",
        body: "Sink, hob, and fridge placement respects gas lines, windows, and balcony doors common in Pune layouts.",
      },
      {
        title: "Smarter corner solutions",
        body: "Magic corners, tall units, and drawer stacks keep utensils and groceries reachable.",
      },
      {
        title: "Easy-clean surfaces",
        body: "Backsplashes and finishes chosen for oil splatter, steam, and daily wipe-downs.",
      },
      {
        title: "Lighting under cabinets",
        body: "Task light on countertops so chopping and cooking are strain-free at night.",
      },
    ],
    process: [
      {
        step: "Measure & services check",
        detail:
          "We verify inlet/outlet points, chimney duct routes, and structural limits before locking the layout.",
      },
      {
        step: "Layout sign-off",
        detail:
          "You approve workflow, appliance gaps, and storage math with clear elevations.",
      },
      {
        step: "Factory build & dry fit",
        detail:
          "Carcasses are built to spec, then installed with alignment checks and hardware tuning.",
      },
      {
        step: "Countertop & splashback",
        detail:
          "Stone templating after cabinets are true—clean silicone lines and tested sink connections.",
      },
    ],
    faqs: [
      {
        q: "L-shaped or parallel—which suits small flats?",
        a: "Parallel kitchens often suit long galleries; L-shaped uses corner depth. We recommend after seeing your door swings and ventilation.",
      },
      {
        q: "Do you handle chimney and hob installation?",
        a: "We coordinate with brand technicians and ensure ducting, power, and clearances are correct.",
      },
      {
        q: "Warranty on modular work?",
        a: "Hardware and factory modules carry manufacturer terms; we document handover checks so claims are straightforward.",
      },
      {
        q: "How much does a modular kitchen cost in Pune?",
        a: "The honest answer: it hinges on the layout (parallel, L, or island), the number of drawers versus shutters, and hardware grade—drawers and tall units cost more but earn their keep daily. We measure your kitchen free of charge and give a line-wise quote, so you can start with the essentials and add loft units or accessories later.",
      },
    ],
  },
  "home-painting": {
    intro:
      "Paint transforms light. We prepare surfaces properly—filling undulations, priming for adhesion, and choosing finishes that survive Pune’s mix of summer heat, construction dust, and four months of monsoon damp. Whether it is a fresh coat before Diwali, a full repaint after tenants move out, or first paint on a bare possession flat, we keep edges clean and schedules realistic—so the house smells like a home again, not a work site.",
    benefits: [
      {
        title: "True colour in your room",
        body: "Large sample patches on your walls before full roll-out so undertones read correctly day and night.",
      },
      {
        title: "Low-odour options",
        body: "Families can stay put during many projects when we sequence rooms and ventilate smartly.",
      },
      {
        title: "Texture & feature walls",
        body: "Subtle textures or a single accent wall to add depth without visual noise.",
      },
      {
        title: "Furniture protection",
        body: "Covering, masking, and daily clean-up—handover without splatter surprises.",
      },
    ],
    process: [
      {
        step: "Site assessment",
        detail:
          "Moisture checks, crack mapping, and sheen recommendation per room usage.",
      },
      {
        step: "Shade shortlist",
        detail:
          "Narrow to 3–4 directions based on light, floor tone, and woodwork colours.",
      },
      {
        step: "Prep & primer",
        detail:
          "Sanding, putty, and primer coats—this is where longevity is won.",
      },
      {
        step: "Finish coats & inspection",
        detail:
          "Even rollers, sharp corners, touch-ups, and a walkthrough with you.",
      },
    ],
    faqs: [
      {
        q: "How do you handle monsoon interior painting?",
        a: "We watch humidity, sequence exterior-facing rooms carefully, and extend drying windows when needed.",
      },
      {
        q: "Can you match existing woodwork colour?",
        a: "Yes— we sample trims and panels so walls relate cleanly to doors and wardrobes.",
      },
      {
        q: "Do you supply material or labour only?",
        a: "We can do turnkey supply-and-apply or align with your architect’s specified brands.",
      },
      {
        q: "What does house painting cost per square foot in Pune?",
        a: "Per-square-foot rates you see online usually ignore the part that decides how long paint lasts: surface preparation. A wall that needs crack filling and two primer coats costs more than one that needs a refresh coat—and quoting both the same number is how repaints go wrong. We inspect your walls free, then quote prep and paint separately so you can compare fairly.",
      },
    ],
  },
  "false-ceiling": {
    intro:
      "Ceilings organise light and hide services without shrinking the room visually. In most Pune flats the slab arrives crowded—AC piping, fire sprinklers in newer towers, and wiring that was never meant to be seen. We design POP and gypsum profiles that tuck all of it away: cove LED for the living room, focus spots over dining, acoustic comfort in TV rooms, and access panels where AC servicing or wiring will be needed later.",
    benefits: [
      {
        title: "Layered lighting plans",
        body: "Combine cove glow with narrow profiles so the ceiling feels taller, not busier.",
      },
      {
        title: "Service integration",
        body: "AC grills, curtain pelmets, and projector drops planned before framing begins.",
      },
      {
        title: "Crisp geometry",
        body: "True lines and level planes—shadows reveal sloppy work; we avoid that.",
      },
      {
        title: "Access for maintenance",
        body: "Thoughtful trap details where practical for valves, drivers, and future changes.",
      },
    ],
    process: [
      {
        step: "Mark-out on floor & ceiling",
        detail:
          "Grid and profile transferred from drawings to the slab with services coordinated.",
      },
      {
        step: "Framing & suspension",
        detail:
          "Metal framework and hangers spaced to spec—no springy boards.",
      },
      {
        step: "Boarding & jointing",
        detail:
          "Tape, compound, and sanding for seamless planes before paint.",
      },
      {
        step: "Light install & QA",
        detail:
          "Drivers seated for heat, trims aligned, and dimming tested where specified.",
      },
    ],
    faqs: [
      {
        q: "Will a false ceiling reduce height too much?",
        a: "Most residential profiles drop 4–8 inches depending on services; we model sightlines so rooms still feel open.",
      },
      {
        q: "POP vs gypsum—what do you recommend?",
        a: "Gypsum boards suit most modern flats; POP helps custom curves and cornices. We propose per room and budget.",
      },
      {
        q: "Can you retrofit in occupied homes?",
        a: "Yes, with dust control and phased rooms. We’ll flag furniture moves upfront.",
      },
      {
        q: "What does a false ceiling cost in Pune?",
        a: "Pricing follows the design, not just the area: a plain peripheral border costs less than layered profiles with cove lighting and curves, and material choice (gypsum vs POP) shifts it further. Share your room sizes on WhatsApp for a ballpark, or book a free visit for a firm line-wise quote including lighting points.",
      },
    ],
  },
  "custom-furniture": {
    intro:
      "Built-ins should feel intentional—not kit-furniture stretched to fit. Pune flats rarely have spare square feet, so every unit has to earn its wall: TV units with cable management, beds with lift-up storage for the suitcases and winter razais, wardrobes segmented for office wear, sarees, and school bags. Finishes tie back to your interior palette for a gallery-like calm.",
    benefits: [
      {
        title: "Exact millimetres",
        body: "Templates from site—not assumptions—so panels meet tiles and skirting cleanly.",
      },
      {
        title: "Hardware that lasts",
        body: "Runners, hinges, and handles specified for weight and daily rhythm.",
      },
      {
        title: "Cable-ready media walls",
        body: "Conduits, ventilation for equipment, and soft lighting for screens.",
      },
      {
        title: "Bedroom quiet luxury",
        body: "Upholstered headwalls, reading lights, and bedside power where you need them.",
      },
    ],
    process: [
      {
        step: "Needs workshop",
        detail:
          "We inventory what you store, watch, fold, and charge—then sketch options.",
      },
      {
        step: "Detail drawings",
        detail:
          "Joinery sections, edge profiles, and finish schedules signed off before cutting.",
      },
      {
        step: "Shop drawings & production",
        detail:
          "CNC and hand assembly with interim quality checks.",
      },
      {
        step: "Install & alignment",
        detail:
          "Scribed where walls breathe, levelled on uneven floors, and protected until paint completes.",
      },
    ],
    faqs: [
      {
        q: "MDF, plywood, or HDHMR?",
        a: "We recommend based on moisture exposure, span, and budget—kitchen wet zones differ from dry bedrooms.",
      },
      {
        q: "Can you match existing veneer elsewhere in the flat?",
        a: "Yes, we source batches and sample on site under your lighting.",
      },
      {
        q: "Timeline for a TV unit + wardrobe set?",
        a: "Typically 4–7 weeks from sign-off depending on complexity and site readiness.",
      },
    ],
  },
};
