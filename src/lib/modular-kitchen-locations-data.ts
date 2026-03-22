import type { AreaSlug } from "./site";

const BRAND = "Perfect Home Decor";

export type ModularKitchenLocationContent = {
  areaLabel: string;
  headline: string;
  subhead: string;
  intro: string[];
  localContext: string;
  neighborhoods: string;
  offerings: string[];
  processSteps: { title: string; body: string }[];
  differentiators: string[];
  localFaq: { q: string; a: string }[];
  metaDescription: string;
  metaKeywords: string[];
};

export const modularKitchenLocationContent: Record<
  AreaSlug,
  ModularKitchenLocationContent
> = {
  kharadi: {
    areaLabel: "Kharadi",
    headline: "Modular kitchen design & installation in Kharadi, Pune",
    subhead:
      "Parallel and L-shaped plans for IT-corridor towers—chimney ducts, hob power, tall units, and factory drawings that match your slab before shutters are ordered.",
    intro: [
      "Kharadi kitchens often sit beside entries or passages; door swings, fridge arcs, and dishwasher plumbing need to be on the plan before you fall for catalogue islands. We model hot, wet, and dry zones against your actual floor plate—not a generic render.",
      "Riverside and high-rise societies expect lift bookings, floor protection, and MC-friendly installation slots. Our BOQs split factory carcass, site scribe, hardware series, and appliances rough-in so comparisons stay honest.",
      `${BRAND} delivers modular kitchens turnkey near EON, WTC, and Fountain Road with site supervisors used to Kharadi’s pace.`,
    ],
    localContext:
      "Frequent societies include Panchshil, Nyati, Gera, and newer towers along the main spine and Mundhwa connectors. External chimney runs, gas line termination points, and RO power are validated early so bulkheads and false ceilings align with bulk storage.",
    neighborhoods:
      "EON IT Park belt, riverside premium towers, and mid-rise formats feeding Kharadi’s commercial core.",
    offerings: [
      "Layout workshop: parallel, L, U, and island feasibility studies",
      "Elevations, tall unit, and internal accessory drawings with BOQ",
      "Chimney duct routing coordination with ceiling and façade",
      "Quartz / granite counter templating after carcass fix",
      "Soft-close hardware series named in writing",
      "Post-install adjustment visit and care documentation",
    ],
    processSteps: [
      {
        title: "Measure & services audit",
        body: "Gas, plumbing, electrical, and structural limits marked on plan.",
      },
      {
        title: "Design freeze & shop drawings",
        body: "You sign elevations; factory gets dimensions with tolerances.",
      },
      {
        title: "Factory & logistics",
        body: "Production slots aligned to possession and society lift rules.",
      },
      {
        title: "Install, counter, snag",
        body: "Silicone, alignment, and hardware tuning before handover checklist.",
      },
    ],
    differentiators: [
      "Experience with compact galley plans common in Kharadi 2 BHKs.",
      "Clear appliance rough-in pack for your dealer or ours.",
      "Coordination with our false-ceiling team when both scopes are ours.",
    ],
    localFaq: [
      {
        q: "Parallel or L-shape for a 7 ft wide kitchen?",
        a: "Often parallel if the passage allows clear fridge swing; we tape it on site before you commit.",
      },
      {
        q: "Can you match a catalogue photo exactly?",
        a: "We translate inspiration to your services and columns—some renders assume walls you do not have.",
      },
      {
        q: "Do you supply appliances?",
        a: "We coordinate dimensions; appliances can be yours or bundled—documented per line item.",
      },
      {
        q: "How long from sign-off to install?",
        a: "Factory-dependent—typically several weeks; we give a range after design freeze.",
      },
    ],
    metaDescription:
      "Modular kitchen Kharadi, Pune—design, install, chimney, BOQ. Perfect Home Decor. Free consult near EON & WTC.",
    metaKeywords: [
      "modular kitchen Kharadi",
      "kitchen interior Kharadi Pune",
      "parallel kitchen Kharadi",
      "modular kitchen EON IT Park",
      "kitchen designer Kharadi",
    ],
  },
  wagholi: {
    areaLabel: "Wagholi",
    headline: "Modular kitchens in Wagholi—new homes, honest BOQs",
    subhead:
      "Fresh possessions along Nagar Road need kitchens that handle dust during move-in, monsoon humidity at edges, and realistic chimney runs in compact plates.",
    intro: [
      "Wagholi buyers often juggle builder delays and early cooking needs—we sequence civil release, kitchen rough-in, and modular install so you are not living on a hotplate longer than necessary.",
      "Dust from nearby construction finds gasket gaps; we specify seal quality and installation discipline, especially near balconies and dry yards.",
      `${BRAND} is based in Wagholi; walk-throughs and factory drawing reviews are easy to schedule for local towers.`,
    ],
    localContext:
      "Work across Nyati, Ivy State, Konark, Mansha, Citron-class societies, Lifeline Hospital corridor, and new launches toward the airport road. Lift timings and parking distances affect how we batch module deliveries.",
    neighborhoods:
      "Nagar Road townships, sectors toward Kesnand, and mid-rise clusters in the Wagholi–Lohegaon band.",
    offerings: [
      "Budget-to-premium laminate, acrylic, and veneer shutter options",
      "Tall units, pantry pull-outs, and corner optimisers where depth allows",
      "Sink, tap, and plumbing coordination with your plumber or ours",
      "Bulkhead notes for false ceiling and chimney interface",
      "Rental-grade durable internals where investors specify",
      "Warranty and hardware adjustment guidance at handover",
    ],
    processSteps: [
      {
        title: "Site truth on paper",
        body: "Columns, beams, and drain stacks reflected in plan—not ignored until install day.",
      },
      {
        title: "Internal layout sign-off",
        body: "Drawer versus shelf choices frozen with ergonomics for primary cook height.",
      },
      {
        title: "Manufacturing & delivery slot",
        body: "Aligned with society notices and your flooring cure state.",
      },
      {
        title: "Install & counter day",
        body: "Protect adjacent rooms; template stone only after level check.",
      },
    ],
    differentiators: [
      "Local studio—short path for revisits and snag closure.",
      "Monsoon-aware sealing and curing patience.",
      "Transparent extras list before mobilisation.",
    ],
    localFaq: [
      {
        q: "Can we phase hob first and shutters later?",
        a: "Possible but usually costlier; we explain trade-offs before you split scope.",
      },
      {
        q: "Builder provided sink—can you use it?",
        a: "If quality and size fit carcass design—validated at drawing stage.",
      },
      {
        q: "Do you handle gas connection?",
        a: "We leave compliant access; licensed gas vendor handles connection per norms.",
      },
      {
        q: "What about termite treatment?",
        a: "Specified in BOQ where required; coordinated before carcass fix.",
      },
    ],
    metaDescription:
      "Modular kitchen Wagholi, Pune—design & install, chimney, storage. Perfect Home Decor. Local team, free site visit.",
    metaKeywords: [
      "modular kitchen Wagholi",
      "kitchen interior Wagholi Pune",
      "parallel kitchen Wagholi",
      "modular kitchen Nagar Road",
      "kitchen designer Wagholi",
    ],
  },
  "viman-nagar": {
    areaLabel: "Viman Nagar",
    headline: "Modular kitchen renovation in Viman Nagar—retrofit expertise",
    subhead:
      "Older slabs, odd columns, and tight service shafts need kitchens measured twice—especially when you are keeping kota floors or heritage skirting.",
    intro: [
      "Retrofit kitchens compete with existing door architraves, window heights, and sometimes shifted columns. We field-measure with laser tools and photograph services before promising a factory date.",
      "Clients near Symbiosis and Phoenix often want breakfast counters that double as WFH ledges—we plan depth, knee space, and socket heights accordingly.",
      `${BRAND} coordinates demolition sequence, debris routes, and neighbour-aware hours typical of older Viman Nagar stacks.`,
    ],
    localContext:
      "Kitchens in Sainik Farms lanes, Mhada pockets, airport-side towers, and mixed-era apartments along main Viman Nagar roads.",
    neighborhoods:
      "Bungalow plots, older walk-up formats, and newer towers toward Lohegaon.",
    offerings: [
      "Strip-out and civil interface planning with your contractor",
      "Custom depth carcasses for out-of-square walls",
      "Veneer and laminate palettes that respect older flooring tones",
      "Appliance upgrades with new carcass cut-outs",
      "Lighting under wall cabinets coordinated with ceiling team",
      "Soft-close retrofits on partial replacements where feasible",
    ],
    processSteps: [
      {
        title: "Retrofit survey",
        body: "Photos, levels, and asbestos-free demolition assumptions clarified.",
      },
      {
        title: "Design with constraints",
        body: "Columns become features or corner carcasses—your call with pros/cons.",
      },
      {
        title: "Phased demolition & install",
        body: "Temporary sink strategies discussed if you stay in during work.",
      },
      {
        title: "Stone, hardware, snag",
        body: "Counter edges, splashback, and alignment closed with checklist.",
      },
    ],
    differentiators: [
      "Comfort with uneven walls and honest packing quotes.",
      "Parking and carry-up logistics planned for dense lanes.",
      "Palette discipline so new kitchen respects older home character.",
    ],
    localFaq: [
      {
        q: "Can we keep existing floor tiles?",
        a: "Usually yes—with edge protection discipline during heavy carcass moves.",
      },
      {
        q: "Our ceiling is low—can we still have tall units?",
        a: "We model lintel and beam intrusions; sometimes reduced height tall units solve it.",
      },
      {
        q: "Do you refurbish only shutters?",
        a: "Selective refacing possible if carcasses are sound—survey decides.",
      },
      {
        q: "Timeline if civil changes pipes?",
        a: "Civil first, then remeasure—factory clock starts after frozen dimensions.",
      },
    ],
    metaDescription:
      "Modular kitchen Viman Nagar, Pune—retrofit & new, parallel L kitchen. Perfect Home Decor. Consultation near Phoenix & airport.",
    metaKeywords: [
      "modular kitchen Viman Nagar",
      "kitchen renovation Viman Nagar Pune",
      "kitchen interior Viman Nagar",
      "parallel kitchen Pune airport area",
    ],
  },
  lohegaon: {
    areaLabel: "Lohegaon",
    headline: "Modular kitchens near Lohegaon—compact plans, clear timelines",
    subhead:
      "Airport-adjacent homes often need predictable install windows between travel—drawings frozen early, factory slots booked honestly, and snag lists closed before you lock up.",
    intro: [
      "We respect posting calendars and festive hosting deadlines. Kitchen scope is broken into dependencies—electrical, plumbing, plaster, ceiling bulkhead—so you see what drives the date.",
      "Noise and working-hour rules in defence-heavy pockets are baked into schedules, not ignored until security stops work.",
      `${BRAND} aligns kitchen delivery with painting and ceiling programmes when you bundle scopes.`,
    ],
    localContext:
      "Kitchens in airport fringe towers, DY Patil Knowledge City proximity, Kendriya Vidyalaya belt, Tingre connectors, and Lohegaon village edges.",
    neighborhoods:
      "Defence housing, mid-rise apartments, and independent floors toward Viman Nagar.",
    offerings: [
      "Compact parallel kitchens with maximum drawer depth",
      "Fridge wall and microwave stack planning for narrow plates",
      "Chimney duct shortest-path planning with society façade rules",
      "Quick-quote packages for standard 2 BHK templates where applicable",
      "Rental kitchen refreshes with durable laminates",
      "Handover documentation for warranty and adjustment",
    ],
    processSteps: [
      {
        title: "Dependency map",
        body: "What must finish before factory measure—shared Gantt-style clarity.",
      },
      {
        title: "Signed drawings",
        body: "Elevations and electrical points approved before production.",
      },
      {
        title: "Install window",
        body: "Booked around your travel and MC permissions.",
      },
      {
        title: "Counter & QA",
        body: "Water test, hinge tune, and cleaning before sign-off.",
      },
    ],
    differentiators: [
      "Travel-aware scheduling—not generic factory promises.",
      "Experience with compact plates near airport corridor.",
      "Single coordinator when ceiling and kitchen are both ours.",
    ],
    localFaq: [
      {
        q: "Can install happen in three days?",
        a: "Carcass-only sometimes; stone templating adds days—scoped clearly.",
      },
      {
        q: "Do you provide chimney?",
        a: "We coordinate cut-outs and ducts; chimney supply can be bundled or yours.",
      },
      {
        q: "What if slab is still curing?",
        a: "We delay rather than shim blindly—moisture risks hinge and carcass life.",
      },
      {
        q: "Can you match my living room veneer?",
        a: "Yes with sample approvals and batch notes for factory.",
      },
    ],
    metaDescription:
      "Modular kitchen Lohegaon, Pune—design, install, storage. Perfect Home Decor. Timeline-smart for airport-area homes.",
    metaKeywords: [
      "modular kitchen Lohegaon",
      "kitchen interior Lohegaon Pune",
      "parallel kitchen Lohegaon",
      "kitchen designer near airport Pune",
    ],
  },
  magarpatta: {
    areaLabel: "Magarpatta",
    headline: "Modular kitchens in Magarpatta City—township-ready installs",
    subhead:
      "Cosmos-to-Roystonea plates benefit from template-aware design, MC passes, and bulkheads that align with false ceilings your society sees every day in neighbour audits.",
    intro: [
      "Township MCs watch debris, lift damage, and time slots. Our site leads carry passes, protect common corridors, and batch noisy cutting to permitted windows.",
      "Open plans in Magarpatta often merge kitchen sightlines with dining—we treat shutter colours and bulkhead heights as part of the whole room, not an isolated box.",
      `${BRAND} files typical Magarpatta paperwork patterns and coordinates with ceiling vendors serving your tower.`,
    ],
    localContext:
      "Kitchens across Cosmos, Iris, Roystonea, lake-facing towers, villas inside the ring, and blocks near corporate parks within Magarpatta City.",
    neighborhoods:
      "Township apartments, duplex homes, and premium clusters along internal boulevards.",
    offerings: [
      "Island and peninsula layouts where slab services allow",
      "Glass shutter accents for open-plan visibility control",
      "Pantry and appliance wall compositions for entertainers",
      "BOQs aligned to typical Magarpatta plate depths",
      "Post-handover hinge service within warranty terms",
      "Landlord packages for between-tenant refreshes",
    ],
    processSteps: [
      {
        title: "MC & access",
        body: "Deposits, IDs, work hours—cleared before site start.",
      },
      {
        title: "Design & MEP sync",
        body: "Electrical diversity for oven, hob, chimney, dishwasher as briefed.",
      },
      {
        title: "Factory production",
        body: "Lead times communicated with buffer for township lift queues.",
      },
      {
        title: "Install & stone",
        body: "Society-friendly debris handling; counter template after level check.",
      },
    ],
    differentiators: [
      "Township execution experience—fewer surprises at security.",
      "Neighbour-aware cutting and cleanup discipline.",
      "Integration with our ceiling and paint teams when bundled.",
    ],
    localFaq: [
      {
        q: "Society wants insurance copies—do you provide?",
        a: "Yes as part of standard MC onboarding.",
      },
      {
        q: "Can we match a neighbour’s kitchen colour?",
        a: "We can approximate with new batch disclaimers—exact batch match is rare years later.",
      },
      {
        q: "Island possible in my 3 BHK?",
        a: "If services and circulation allow—validated on plan, not assumption.",
      },
      {
        q: "Who fixes if a hinge squeaks in month three?",
        a: "Warranty-covered adjustments per terms; abuse or water damage excluded.",
      },
    ],
    metaDescription:
      "Modular kitchen Magarpatta City—design & install, island, parallel. Perfect Home Decor. Township-ready BOQs.",
    metaKeywords: [
      "modular kitchen Magarpatta",
      "kitchen interior Magarpatta Pune",
      "Cosmos kitchen design",
      "Magarpatta City modular kitchen",
    ],
  },
  kesnand: {
    areaLabel: "Kesnand",
    headline: "Modular kitchens for Kesnand & east Pune—shells to full installs",
    subhead:
      "Plots and new towers often start from blank shells—ideal for routing services before crowded slabs, with kitchens planned alongside garden-facing glazing and tall living volumes.",
    intro: [
      "Early kitchen planning saves chasing gas and water lines after civil closes. We mark rough-in heights for RO, dishwasher, and chimney before first-fix ends.",
      "Row homes may have longer service runs—duct and plumbing slopes matter for monsoon performance, not only straight-line aesthetics.",
      `${BRAND} supports remote approvals with 3D and PDF sign-offs when you commute toward Hadapsar or Wagholi.`,
    ],
    localContext:
      "Kitchens in plotted layouts, row villas, and new mid-rises along connectors toward Wagholi and Hadapsar from Kesnand.",
    neighborhoods:
      "Emerging residential pockets, orchard-edge plots, and apartment towers on east Pune spines.",
    offerings: [
      "Shell-stage electrical and plumbing coordination drawings",
      "Outdoor-adjacent kitchens with durable edges near garden doors",
      "Large format storage for festival cooking and joint families",
      "Quartz and granite options with edge profiles named in BOQ",
      "Phased install when only partial home is ready",
      "Exterior kitchenette or service yard coordination where briefed",
    ],
    processSteps: [
      {
        title: "Shell coordination",
        body: "Rough-in workshop with civil and MEP before slab gets busy.",
      },
      {
        title: "Design freeze",
        body: "Layouts locked to actual column grid and window positions.",
      },
      {
        title: "Manufacturing",
        body: "Lead times tied to possession reality, not brochure optimism.",
      },
      {
        title: "Install & integration",
        body: "Ceiling bulkhead, paint protection, and stone completion sequenced.",
      },
    ],
    differentiators: [
      "Early involvement when shells are still open—fewer regrets.",
      "Volume-aware storage for large kitchens in plotted homes.",
      "Honest conversation when duct runs need façade compromises.",
    ],
    localFaq: [
      {
        q: "We only have civil done—when do you measure?",
        a: "After plaster tolerance check and level grid—premature measure risks rework.",
      },
      {
        q: "Can kitchen open to the garden?",
        a: "Yes with insect screens, threshold details, and durable shutter choices.",
      },
      {
        q: "Do you design pantry rooms?",
        a: "Walk-in and walk-through pantries scoped with lighting and ventilation.",
      },
      {
        q: "Gas pipeline long run—issues?",
        a: "We flag with licensed vendor early; layout may adjust for compliance.",
      },
    ],
    metaDescription:
      "Modular kitchen Kesnand & east Pune—new homes, plots, parallel L kitchen. Perfect Home Decor. Free consultation.",
    metaKeywords: [
      "modular kitchen Kesnand",
      "kitchen interior east Pune",
      "plotted house kitchen design",
      "modular kitchen Wagholi Kesnand",
    ],
  },
};
