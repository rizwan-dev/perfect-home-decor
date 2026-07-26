import type { ServiceSlug } from "./services-data";

export type ServiceTier = {
  name: string;
  tagline: string;
  points: string[];
  /** Highlight as the most commonly chosen tier. */
  featured?: boolean;
};

export type ServiceDetail = {
  /** Supporting visual beside/below the overview intro. */
  overviewImage: { src: string; alt: string };
  /** Three-tile looks gallery — styles this service delivers. */
  gallery: { src: string; alt: string; caption: string }[];
  /** "What's included" — the concrete scope homeowners are buying. */
  inclusions: { title: string; body: string }[];
  /** Three honest scope tiers — no prices; the free site visit sets the number. */
  tiers: ServiceTier[];
  tiersNote: string;
  /** Material systems we specify — shown as chips. */
  materials: string[];
  /** Practical expectations, stated up front. */
  goodToKnow: string[];
};

export const serviceDetail: Record<ServiceSlug, ServiceDetail> = {
  "home-painting": {
    overviewImage: {
      src: "/images/canva/living-blue-panels.jpg",
      alt: "Living room with painted blue panelled wall and gallery frames — home painting in Pune by Perfect Home Decor",
    },
    gallery: [
      {
        src: "/images/stock/living-green-feature-wall.jpg",
        alt: "Deep green painted feature wall with tan leather sofa — feature wall painting Pune",
        caption: "Deep feature walls",
      },
      {
        src: "/images/stock/bedroom-dark-feature.jpg",
        alt: "Moody charcoal painted bedroom wall — designer wall colours Pune",
        caption: "Moody accents",
      },
      {
        src: "/images/stock/bedroom-white-bright.jpg",
        alt: "Fresh white painted bedroom with clean lines — low-odour home painting Pune",
        caption: "Fresh, breathable whites",
      },
    ],
    inclusions: [
      {
        title: "Interior wall painting",
        body: "Emulsions from budget to luxury lines, applied over proper putty and primer—never straight onto tired old paint.",
      },
      {
        title: "Exterior & weather coats",
        body: "Weatherproof systems for balconies, ducts, and bungalow façades that face Pune’s monsoon head-on.",
      },
      {
        title: "Texture & stencil finishes",
        body: "Rustic, metallic, and stencil accents for feature walls that photograph as well as they live.",
      },
      {
        title: "Wood & metal enamel",
        body: "Doors, window grills, railings, and gates—deglossed, primed, and finished smooth, not sticky.",
      },
      {
        title: "Damp & crack repair first",
        body: "Damp patches traced to their source and treated before any colour goes near the wall.",
      },
      {
        title: "Rental & handover refresh",
        body: "Fast, clean single-coat refreshes with disciplined masking when a tenancy changes or possession nears.",
      },
    ],
    tiers: [
      {
        name: "Refresh",
        tagline: "For well-maintained walls that need new life",
        points: [
          "Spot putty and sanding where needed",
          "One full coat of premium emulsion",
          "Complete masking, covering & cleanup",
        ],
      },
      {
        name: "Repaint",
        tagline: "For paint that is 3–5 years old",
        featured: true,
        points: [
          "Crack filling and putty where walls demand it",
          "Primer plus two finish coats",
          "Minor enamel touch-ups on doors & grills",
          "Room-by-room sequencing for occupied homes",
        ],
      },
      {
        name: "Transform",
        tagline: "For designer finishes and full makeovers",
        points: [
          "At-home colour consultation with large samples",
          "Deep preparation on every surface",
          "Texture, stencil, or luxury-emulsion feature walls",
          "Enamel and polish work coordinated in one schedule",
        ],
      },
    ],
    tiersNote:
      "Every tier is quoted line-wise after a free site inspection—surface preparation is measured on your walls, never guessed from a rate card.",
    materials: [
      "Asian Paints systems",
      "Berger systems",
      "Branded putty & primers",
      "Low-odour emulsions",
      "Weatherproof exterior coats",
    ],
    goodToKnow: [
      "Occupied homes are fine—we sequence room by room and ventilate as we go.",
      "Monsoon jobs are planned around humidity; drying windows are respected, not rushed.",
      "Dark-to-light colour changes usually need an extra coat—we flag it in the quote, not after.",
      "Common-area protection and society work-hour rules are handled by our team, not left to you.",
    ],
  },
  "interior-design": {
    overviewImage: {
      src: "/images/canva/living-indian-classic.jpg",
      alt: "Warm Indian living room with wooden rafter ceiling and cream sofas — home interior design Pune",
    },
    gallery: [
      {
        src: "/images/stock/dining-nook-mirror.jpg",
        alt: "Elegant grey dining nook with round mirror — dining room interior design Pune",
        caption: "Calm, layered greys",
      },
      {
        src: "/images/canva/living-classic-cream.jpg",
        alt: "Classic cream living room with wall mouldings and warm lamps — premium interiors Pune",
        caption: "Timeless classics",
      },
      {
        src: "/images/canva/living-ethnic-jewel.jpg",
        alt: "Ethnic Indian living room with jewel-tone cushions and tapestry wall — traditional interior design Pune",
        caption: "Rooted & colourful",
      },
    ],
    inclusions: [
      {
        title: "Space planning & layouts",
        body: "Furniture layouts, circulation, and storage mapped to your floor plan before a single board is cut.",
      },
      {
        title: "Modular kitchen & wardrobes",
        body: "Factory-built units with hardware chosen for daily use—sized to your walls, not catalogue defaults.",
      },
      {
        title: "False ceilings & lighting",
        body: "Layered ceilings with warm, layered light—ambient, task, and accent planned room by room.",
      },
      {
        title: "Painting & wall finishes",
        body: "Full-home palettes, feature walls, and wallpaper coordinated with woodwork tones.",
      },
      {
        title: "Custom furniture",
        body: "TV units, beds, study corners, and pooja units built to millimetres, finished to the same palette.",
      },
      {
        title: "Electrical & civil coordination",
        body: "Points marked on drawings, minor civil handled in-house, and services routed before finishes close.",
      },
    ],
    tiers: [
      {
        name: "Essentials",
        tagline: "For possession-ready flats that need daily life working",
        points: [
          "Modular kitchen and wardrobes",
          "Full-home painting",
          "Electrical points where you actually need them",
        ],
      },
      {
        name: "Full home",
        tagline: "Every room designed and delivered as one handover",
        featured: true,
        points: [
          "Everything in Essentials",
          "False ceilings and lighting design",
          "Custom TV unit, beds & storage furniture",
          "Soft styling so the home photographs finished",
        ],
      },
      {
        name: "Renovation",
        tagline: "For homes you already live in",
        points: [
          "Phased, room-by-room execution",
          "Dismantling and disposal handled",
          "Dust control and daily cleanup",
          "Design that works around what you keep",
        ],
      },
    ],
    tiersNote:
      "Scopes are mixed and matched all the time—your item-by-item quotation lets you move work between phases without redesigning.",
    materials: [
      "Branded ply & boards",
      "Soft-close hardware",
      "Asian Paints & Berger finishes",
      "Gyproc ceiling systems",
      "Laminates, veneers & PU",
    ],
    goodToKnow: [
      "Drawings and quotation come before any advance for execution—you approve what gets built.",
      "Most 2–3 BHK turnkey homes land between 10–16 weeks once civil work is released.",
      "You can phase the spend: kitchen and wardrobes before move-in, the rest later.",
      "Site updates come on WhatsApp with photos—no chasing five vendors for answers.",
    ],
  },
  "modular-kitchen": {
    overviewImage: {
      src: "/images/stock/kitchen-gold-tap-detail.jpg",
      alt: "Modular kitchen detail with quartz counter and brass tap — modular kitchen Pune",
    },
    gallery: [
      {
        src: "/images/stock/kitchen-charcoal-white.jpg",
        alt: "Charcoal and white modular kitchen with open shelving — modern kitchen design Pune",
        caption: "Two-tone classics",
      },
      {
        src: "/images/canva/kitchen-island-cove.jpg",
        alt: "Indian modular kitchen with island and cove-lit ceiling — island kitchen design Pune",
        caption: "Cove-lit islands",
      },
      {
        src: "/images/canva/kitchen-dark-wood-indian.jpg",
        alt: "Rich dark wood modular kitchen with warm task lighting — modular kitchen Pune",
        caption: "Rich wood classics",
      },
    ],
    inclusions: [
      {
        title: "Layout engineering",
        body: "Parallel, L-shape, or island—planned around your gas point, window, and how many people cook at once.",
      },
      {
        title: "Carcass & shutters",
        body: "Moisture-resistant carcasses with laminate, acrylic, or PU shutters—edges banded, not painted over.",
      },
      {
        title: "Countertops & dado",
        body: "Granite or quartz tops templated after cabinets are true; dado tiles or full-height back panels.",
      },
      {
        title: "Storage systems",
        body: "Tall units, corner solutions, cutlery organisers, and drawer stacks planned down to the masala shelf.",
      },
      {
        title: "Appliance integration",
        body: "Chimney ducting, hob cut-outs, built-in ovens, and water-purifier lines coordinated with brand technicians.",
      },
      {
        title: "Task lighting & power",
        body: "Under-cabinet light on the counter and sockets where appliances actually sit.",
      },
    ],
    tiers: [
      {
        name: "Essential",
        tagline: "A solid, honest kitchen that works hard",
        points: [
          "Laminate shutters, branded hardware",
          "Granite countertop",
          "Standard storage with two drawer stacks",
        ],
      },
      {
        name: "Premium",
        tagline: "The daily-cooking workhorse, upgraded",
        featured: true,
        points: [
          "Acrylic or PU shutters, soft-close everywhere",
          "Tall unit and corner solutions",
          "Quartz countertop option",
          "Under-cabinet task lighting",
        ],
      },
      {
        name: "Signature",
        tagline: "Handleless lines and entertaining space",
        points: [
          "Handleless or island layouts",
          "Premium quartz and full-height dado",
          "Internal organisers throughout",
          "Integrated appliances planned from day one",
        ],
      },
    ],
    tiersNote:
      "Drawers, tall units, and hardware grade move the price more than square footage—your line-wise quote shows exactly which lever costs what.",
    materials: [
      "Moisture-resistant ply",
      "Laminate / acrylic / PU shutters",
      "Soft-close hardware",
      "Granite & quartz tops",
      "Branded chimney & hob coordination",
    ],
    goodToKnow: [
      "Units are built in the factory and installed on site in days, not weeks of carpentry dust.",
      "Templating for stone happens after cabinets are level—that is how joints stay tight.",
      "Keep the old kitchen running until installation week if you are living in the flat.",
      "Hardware and factory modules carry manufacturer warranty terms, documented at handover.",
    ],
  },
  "false-ceiling": {
    overviewImage: {
      src: "/images/canva/living-cove-art.jpg",
      alt: "Living room with layered cove-lit false ceiling and art wall — false ceiling design Pune",
    },
    gallery: [
      {
        src: "/images/canva/bedroom-fluted-panels.jpg",
        alt: "Bedroom with fluted panels and recessed cove ceiling — bedroom false ceiling Pune",
        caption: "Panelled & cove-lit",
      },
      {
        src: "/images/canva/bedroom-wood-cove.jpg",
        alt: "Wooden bedroom wardrobe wall under a warm cove-lit ceiling — cove lighting Pune",
        caption: "Warm bedroom coves",
      },
      {
        src: "/images/stock/living-neutral-bright.jpg",
        alt: "Neutral living room with clean plain ceiling — gypsum ceiling Pune homes",
        caption: "Minimal & bright",
      },
    ],
    inclusions: [
      {
        title: "Gypsum ceilings",
        body: "Clean planes and layered borders for living rooms and bedrooms—framed to spec, no springy boards.",
      },
      {
        title: "POP cornices & curves",
        body: "Custom curves, coves, and cornices where gypsum sheets cannot bend.",
      },
      {
        title: "Cove & profile lighting",
        body: "Warm cove glow, recessed spots, and LED profiles—drivers seated for heat and serviceability.",
      },
      {
        title: "Services integration",
        body: "AC grills, curtain pelmets, fan hooks, and projector points planned before framing begins.",
      },
      {
        title: "Access panels",
        body: "Traps where valves, drivers, and AC serviceability need future reach—no breaking ceilings later.",
      },
      {
        title: "Repairs & partial work",
        body: "Sagging boards, cracks, and water-stained sections repaired and repainted to match.",
      },
    ],
    tiers: [
      {
        name: "Border & cove",
        tagline: "The clean, bright standard for most rooms",
        points: [
          "Peripheral border with cove lighting",
          "Recessed spots where the room needs focus",
          "Fan and fixture points re-routed neatly",
        ],
      },
      {
        name: "Layered design",
        tagline: "Depth and drama for living spaces",
        featured: true,
        points: [
          "Two-level design with mixed profiles",
          "LED strips, spots, and pendant points",
          "Curtain pelmets and AC integration",
        ],
      },
      {
        name: "Statement",
        tagline: "Custom geometry and material accents",
        points: [
          "Wood-and-gypsum combinations",
          "Custom POP curves and rafters",
          "Scene-based lighting with dimming",
        ],
      },
    ],
    tiersNote:
      "Design complexity and lighting points drive ceiling budgets more than area—share room sizes on WhatsApp for a ballpark before the free visit.",
    materials: [
      "Gyproc / Saint-Gobain boards",
      "GI framing sections",
      "POP for curves & cornices",
      "Branded LED profiles & drivers",
    ],
    goodToKnow: [
      "Most residential profiles drop 4–8 inches—we model sightlines so rooms still feel open.",
      "Electrical points are finalised on drawings before boarding, not improvised on site.",
      "Occupied-home retrofits run room by room with dust screens.",
      "Boarding is followed by taping, jointing, and sanding—paint only after planes are true.",
    ],
  },
  "custom-furniture": {
    overviewImage: {
      src: "/images/stock/upholstery-detail-terracotta.jpg",
      alt: "Terracotta upholstered sofa detail — custom furniture and upholstery Pune",
    },
    gallery: [
      {
        src: "/images/stock/shelving-styled.jpg",
        alt: "Wall-mounted wooden shelving unit styled with frames — custom shelving Pune",
        caption: "Floating shelf systems",
      },
      {
        src: "/images/canva/bedroom-panel-mustard.jpg",
        alt: "Bedroom with wooden panelled headboard wall and platform bed — custom bedroom furniture Pune",
        caption: "Panelled bed walls",
      },
      {
        src: "/images/stock/bedroom-calm-glass.jpg",
        alt: "Calm bedroom with glass-door wardrobe — custom wardrobe design Pune",
        caption: "Bedroom built-ins",
      },
    ],
    inclusions: [
      {
        title: "TV & media walls",
        body: "Cable management, equipment ventilation, and soft back-lighting—no wire spaghetti on display.",
      },
      {
        title: "Wardrobes & lofts",
        body: "Sliding or hinged, segmented for office wear, sarees, travel gear, and the loft above.",
      },
      {
        title: "Beds with storage",
        body: "Hydraulic lift-up or drawer storage sized for razais, suitcases, and festival boxes.",
      },
      {
        title: "Study & WFH units",
        body: "Desks with cable paths, task light, and backgrounds that look professional on calls.",
      },
      {
        title: "Crockery & pooja units",
        body: "Glass-front display, closed storage below, and pooja units with the details done respectfully.",
      },
      {
        title: "Entryway & shoe storage",
        body: "Seat-height shoe units, mirrors, and key drops that keep the entrance calm.",
      },
    ],
    tiers: [
      {
        name: "Single piece",
        tagline: "One unit, done properly",
        points: [
          "Site-measured templates",
          "Finish matched to your existing interior",
          "Installed with floor and wall protection",
        ],
      },
      {
        name: "Room set",
        tagline: "Bedroom or living room as one composition",
        featured: true,
        points: [
          "Wardrobe, bed, and side units designed together",
          "One finish palette across the room",
          "Hardware consistent across every unit",
        ],
      },
      {
        name: "Whole-home",
        tagline: "Every built-in, one design language",
        points: [
          "All rooms detailed in one drawing set",
          "Factory production in coordinated batches",
          "Single installation and snag schedule",
        ],
      },
    ],
    tiersNote:
      "Custom work is quoted from drawings—finishes, hardware, and internal fittings are line items you can see and swap.",
    materials: [
      "Branded ply, MDF & HDHMR",
      "Laminates, veneers & PU",
      "Soft-close runners & hinges",
      "Upholstery & back-lighting",
    ],
    goodToKnow: [
      "A TV unit + wardrobe set typically runs 4–7 weeks from drawing sign-off.",
      "MDF vs ply vs HDHMR is chosen per location—wet zones and dry bedrooms need different boards.",
      "We scribe units to walls that are not perfectly straight—Pune walls rarely are.",
      "Existing veneers can be matched by sampling batches on site under your lighting.",
    ],
  },
  "commercial-interior-design": {
    overviewImage: {
      src: "/images/stock/office-plants-lounge.jpg",
      alt: "Modern plant-filled office lounge — office interior design Pune",
    },
    gallery: [
      {
        src: "/images/stock/office-window-desk.jpg",
        alt: "Workstation by a window with city view — office workstation design Pune",
        caption: "Focused workpoints",
      },
      {
        src: "/images/stock/office-team-loft.jpg",
        alt: "Team collaborating in a loft-style office — collaborative office fit-out Pune",
        caption: "Collaboration zones",
      },
      {
        src: "/images/stock/loft-lounge.jpg",
        alt: "Industrial loft lounge with grey sofas — cafe and lounge interiors Pune",
        caption: "Lounge & café moods",
      },
    ],
    inclusions: [
      {
        title: "Office fit-outs",
        body: "Workstations, cabins, meeting rooms, and breakout zones—planned for how your team actually works.",
      },
      {
        title: "Retail & showrooms",
        body: "Display systems, lighting that sells, and circulation that moves customers past what matters.",
      },
      {
        title: "Clinics & studios",
        body: "Reception-to-consult flows, hygiene-friendly finishes, and calm waiting areas.",
      },
      {
        title: "Reception & brand walls",
        body: "Signage integration, feature walls, and materials that make the brand legible at the door.",
      },
      {
        title: "Ceilings, AC & electrical",
        body: "Grid or gypsum ceilings coordinated with AC, fire basics, and data cabling in one drawing set.",
      },
      {
        title: "Furniture & millwork",
        body: "Storage walls, counters, and desking—built to take daily commercial wear.",
      },
    ],
    tiers: [
      {
        name: "Refresh & rebrand",
        tagline: "New identity on existing bones",
        points: [
          "Paint, lighting, and brand-wall upgrades",
          "Weekend or after-hours execution",
          "Minimal downtime for the running business",
        ],
      },
      {
        name: "Full fit-out",
        tagline: "Shell to opening day",
        featured: true,
        points: [
          "Space plan, 3D views, and BOQ",
          "Ceilings, AC, electrical & data coordination",
          "Millwork, furniture, and branding in one schedule",
        ],
      },
      {
        name: "Design + phased build",
        tagline: "For working offices that cannot pause",
        points: [
          "Zone-by-zone execution plan",
          "Team moves choreographed with your managers",
          "Milestone billing aligned to phases",
        ],
      },
    ],
    tiersNote:
      "Commercial quotes are milestone-wise against a signed BOQ—capex approvals get real numbers, and phases can shift without re-pricing everything.",
    materials: [
      "Commercial-grade laminates",
      "Grid & gypsum ceiling systems",
      "High-traffic flooring coordination",
      "Signage-ready surfaces",
    ],
    goodToKnow: [
      "We work backwards from your opening or occupancy date and buffer for approvals.",
      "Landlord conditions and fire-safety basics are aligned before drawings are frozen.",
      "After-hours and weekend slots keep a running business running.",
      "Power, data, and AC loads are planned per seat—not patched after the furniture arrives.",
    ],
  },
};
