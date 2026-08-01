import { COMPANY } from "./site";
import type { AreaSlug } from "./site";

const COMPANY_NAME = "Perfect Home Decor";

export type PaintingLocationContent = {
  areaLabel: string;
  headline: string;
  subhead: string;
  intro: string[];
  localPaintContext: string;
  neighborhoods: string;
  offerings: string[];
  processSteps: { title: string; body: string }[];
  differentiators: string[];
  localFaq: { q: string; a: string }[];
  metaDescription: string;
  metaKeywords: string[];
};

export const paintingLocationContent: Record<
  AreaSlug,
  PaintingLocationContent
> = {
  kharadi: {
    areaLabel: "Kharadi",
    headline: "Professional home wall painting in Kharadi, Pune",
    subhead:
      "Premium flats and riverside towers deserve crisp lines, low-odour systems, and colour palettes tuned to Kharadi’s glass-heavy daylight—without surprise touch-ups after the first monsoon.",
    intro: [
      "Kharadi’s floor-to-ceiling glazing and open kitchen–living plans change how paint reads from morning to evening. We sample on multiple walls, specify primer and putty depth for your builder’s plaster, and sequence work so balconies and wet zones cure before final coats.",
      "Whether you are refreshing a rental near EON IT Park or moving into a new possession overlooking the river, our teams know society time windows, lift protection, and how to phase painting when you are still living in.",
      `${COMPANY_NAME} delivers measurable BOQs for interior emulsion, enamel trims, ceiling systems, and feature accents—so you compare quotes on line items, not vague “per square foot” numbers.`,
    ],
    localPaintContext:
      "We regularly paint homes and offices near World Trade Center Kharadi, EON Free Zone, Fountain Road riverside societies, Columbia Asia Hospital corridor, and premium towers toward Mundhwa. High-rise stack pressure and wind-driven balcony moisture inform how we seal edges and choose sheen at entries.",
    neighborhoods:
      "Towers and row pockets around EON IT Park, Panchshil, Nyati, Gera, and newer launches along the riverfront and main Kharadi spine.",
    offerings: [
      "Full-home interior repainting with dust containment and furniture protection",
      "Putty, primer, and topcoat systems matched to substrate (new vs resale)",
      "Ceiling mattes, enamel for trims, doors, and metal grills",
      "Feature walls, textured finishes, and stencil accents where briefed",
      "Low-VOC and quick-cycle options for families with children or elders",
      "Post-handover snag touch-ups and batch-matched pots for maintenance",
    ],
    processSteps: [
      {
        title: "Site survey & moisture check",
        body: "We assess plaster age, seepage history, and orientation to sun and rain, then recommend primer cycles—not one-size primer for every wall.",
      },
      {
        title: "Colour & sheen workshop",
        body: "Large swatches on-site, trim versus field decisions, and open-plan continuity so your living–dining–kitchen reads as one story.",
      },
      {
        title: "Protection & phased execution",
        body: "Floors, wardrobes, and AC grills masked; wet areas and exterior-facing rooms sequenced for safe curing in Pune humidity.",
      },
      {
        title: "Finish walk-through & handover pack",
        body: "Raking-light inspection, closed snags, labelled touch-up tins, and care notes for washing timelines.",
      },
    ],
    differentiators: [
      "BOQ lists rooms, approximate areas, system (putty/primer/topcoat), and sheen—no mystery “package” math.",
      "Crews experienced with Kharadi MC norms, noise windows, and service-lift logistics.",
      "Honest guidance on when only painting will not fix plaster issues—and what civil prep must precede colour.",
    ],
    localFaq: [
      {
        q: "How long does a 2 BHK painting take in a Kharadi tower if we live in?",
        a: "Typically a phased week to ten days depending on humidity, furniture volume, and whether bathrooms need extra cure time. We give a day-wise plan before mobilisation.",
      },
      {
        q: "Can you match an existing builder off-white for touch-ups?",
        a: "We sample and match where feasible; if batches differ, we recommend discrete repaint bands (e.g., full wall) to avoid patch flash.",
      },
      {
        q: "Do you handle texture or only flat paint?",
        a: "We execute approved texture, limewash-style systems, and feature treatments where the substrate and lighting plan support them—scoped separately in the BOQ.",
      },
      {
        q: "What if society limits wet work on weekends?",
        a: "We align noisy sanding and roller days with permitted hours and batch quiet tasks for restricted slots—documented in the project schedule.",
      },
    ],
    metaDescription:
      `Home painting in Kharadi, Pune — full surface prep, Asian Paints & Dulux, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site inspection.`,
    metaKeywords: [
      "home painting Kharadi",
      "wall painting Kharadi Pune",
      "house painter Kharadi",
      "interior painting EON IT Park",
      "apartment painting Pune",
      "2 BHK painting cost Kharadi",
    ],
  },
  wagholi: {
    areaLabel: "Wagholi",
    headline: "Home painting & wall finishes in Wagholi, Pune",
    subhead:
      "New possessions along Nagar Road and airport corridor need paint systems that forgive dust, dry evenly in changing humidity, and stay guest-ready through Diwali and monsoon cycles.",
    intro: [
      "Wagholi families often move in while roads and landscaping are still catching up—fine dust finds sills, tracks, and fresh paint if sequencing is naive. We plan masking, negative-pressure habits where useful, and curing gaps that respect real Pune weather, not just datasheet ideals.",
      "From Nyati and Ivy State to quieter lanes toward Kesnand, we have painted compact 2 BHKs and larger formats with the same rule: document substrate, then specify system.",
      `${COMPANY_NAME} is based in Wagholi; same-day callbacks and realistic site visits are part of how we work for neighbours on your corridor.`,
    ],
    localPaintContext:
      "Active projects and painting scopes near Lifeline Hospital, Wagholi chowk, NH753F retail strips, Jubilation Society–class pockets, and new towers along the airport road. We factor long truck routes and lift bookings into schedules so crews are not idle on your clock.",
    neighborhoods:
      "Societies along Nagar Road, internal sectors toward Kesnand, and mid-rise communities in the Wagholi–Lohegaon band.",
    offerings: [
      "Full-home repainting after possession or between tenants",
      "Kids’ rooms with scrubbable sheens and rounded-corner prep",
      "Kitchen–living open zones with hard-wearing finishes near cooking zones",
      "Balcony-facing bedrooms with extra primer discipline where needed",
      "Rental refresh packages with faster cycles and neutral palettes",
      "Ceiling brightening for flats that feel dim on overcast days",
    ],
    processSteps: [
      {
        title: "Walk-through with floor plan",
        body: "Mark furniture stay/move zones, AC and curtain timelines, and any seepage repairs that must precede masking.",
      },
      {
        title: "Transparent BOQ",
        body: "Room-wise quantities, system build-up, and optional upgrades (texture, feature wall) priced separately.",
      },
      {
        title: "Prep that earns the topcoat",
        body: "Crack routing, appropriate putty passes, and sanding discipline—where skipped, expensive paint still fails.",
      },
      {
        title: "Sign-off & care sheet",
        body: "Washing dates, safe cleaners, and who to call if settlement cracks appear after the first heavy rains.",
      },
    ],
    differentiators: [
      "Local studio on Awhalwadi Road—short travel time for revisits and colour checks.",
      "Experience with Wagholi society formats from compact towers to podium parking logistics.",
      "Clear communication when builder plaster needs civil attention before aesthetic coats.",
    ],
    localFaq: [
      {
        q: "Our flat faces the main road—will paint fumes bother neighbours?",
        a: "We favour low-odour systems, close windows strategically during application, and ventilate per product data sheets—society courtesy is part of our method statement.",
      },
      {
        q: "Can you paint only the hall and one bedroom first?",
        a: "Yes—phasing is common. We plan edge stops at logical breaks (corners, doors) so future rooms do not show colour mismatch.",
      },
      {
        q: "Do you supply colour consultation?",
        a: "We bring curated neutrals and accents tuned to Indian light and your flooring; final chips are always validated on your walls.",
      },
      {
        q: "Are trims charged separately?",
        a: "Trims, doors, and grills are line-itemed with enamel or specified systems so you see enamel labour and material distinctly from wall emulsion.",
      },
    ],
    metaDescription:
      `Home painting in Wagholi, Pune — proper prep on new-possession flats, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site inspection.`,
    metaKeywords: [
      "home painting Wagholi",
      "wall painting Wagholi Pune",
      "house painter Wagholi",
      "apartment painting Nagar Road",
      "Nyati Evita painting",
      "painting contractor Wagholi",
    ],
  },
  "viman-nagar": {
    areaLabel: "Viman Nagar",
    headline: "Interior wall painting in Viman Nagar—heritage flats & new towers",
    subhead:
      "Older kota and marble floors, beam quirks, and airport-area light demand careful prep and colours that respect both legacy architecture and modern minimal tastes.",
    intro: [
      "Viman Nagar mixes bungalows, Mhada-era plates, and newer glass towers—each substrate tells a different story. We survey undulations, old oil-bound layers, and damp ingress before promising a three-coat miracle.",
      "Clients near Phoenix Marketcity and Symbiosis often want guest-ready living rooms and calm bedrooms that video-call well; we plan sheen and hue to reduce glare on screens.",
      `${COMPANY_NAME} coordinates painting with curtain vendors and false-ceiling teams when you are upgrading multiple finishes at once.`,
    ],
    localPaintContext:
      "Painting schedules around Sainik Farms lanes, Viman Nagar main road, airport-side towers, and pockets toward Lohegaon connectors. Parking and lobby time slots factor into crew mobilisation.",
    neighborhoods:
      "Leafy bungalow lanes, Mhada clusters, and newer mid-rises toward Lohegaon road.",
    offerings: [
      "Resale flat repainting over varied old substrates",
      "Restoration-style palettes that complement kota, marble, or wood trim",
      "Minimal-luxury neutrals with feature accents for compact layouts",
      "Enamel refresh for aged doors and windows with careful degreasing",
      "Low-dust methodologies for homes with asthma or senior residents",
      "Coordination with wood polish or veneer maintenance timelines",
    ],
    processSteps: [
      {
        title: "Substrate diagnosis",
        body: "Identify chalking paint, oil traces, or damp—each changes the primer strategy.",
      },
      {
        title: "Protection of heritage details",
        body: "Masking that protects inlay floors, skirting profiles, and vintage hardware.",
      },
      {
        title: "Layered application",
        body: "Putty only where earned; breathable build-ups where monsoon breathability matters.",
      },
      {
        title: "Final polish on details",
        body: "Cut lines at trims, registers at switch plates, and ceiling margins inspected under raking light.",
      },
    ],
    differentiators: [
      "Comfort with older Pune stock—not every wall tolerates the same system as a new Kharadi flat.",
      "Discrete crews for premium finishes; shoe covers and corridor protection as default.",
      "Clear handover when structural damp needs waterproofing before cosmetics.",
    ],
    localFaq: [
      {
        q: "Our walls are uneven from old renovations—will paint hide it?",
        a: "Mattes forgive minor waves; obvious undulations need targeted skim or honest conversation about shadowing under downlights.",
      },
      {
        q: "Can you work while we occupy only on weekends?",
        a: "Partial-week scheduling is possible but extends calendar length; we quote both duration and cost implications upfront.",
      },
      {
        q: "Do you remove POP nails and fill picture-hook holes?",
        a: "Standard prep includes minor hole filling; larger repairs are scoped as civil prep lines.",
      },
      {
        q: "Can you match Asian Paints / Berger fan decks?",
        a: "Yes—we work with major brand decks and can machine-match where store support exists.",
      },
    ],
    metaDescription:
      `Home painting in Viman Nagar, Pune — older and new flats, full prep, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site inspection.`,
    metaKeywords: [
      "home painting Viman Nagar",
      "wall painting Viman Nagar Pune",
      "flat painting near Phoenix Marketcity",
      "interior painter Viman Nagar",
      "resale flat painting Pune",
    ],
  },
  lohegaon: {
    areaLabel: "Lohegaon",
    headline: "House painting near Lohegaon airport—fast, neat, flight-path aware",
    subhead:
      "Defence pockets, airport staff housing, and newer towers need predictable schedules, blackout-friendly bedroom colours, and paint that survives frequent travel-and-lock lifestyles.",
    intro: [
      "Lohegaon clients often need tight handovers before postings or festive visits. We propose realistic square-metre plans, crew sizes, and drying buffers that do not pretend humidity does not exist.",
      "Bedrooms facing flight paths benefit from calming, deep-friendly hues paired with curtain stacks you will actually use—we coordinate samples with your textile choices.",
      `${COMPANY_NAME} paints standalone scopes and ties painting into broader interior schedules when kitchens or ceilings are also moving.`,
    ],
    localPaintContext:
      "Work around Pune International Airport fringe, DY Patil Knowledge City, Kendriya Vidyalaya Lohegaon area, Tingre Nagar connectors, and societies along the airport road.",
    neighborhoods:
      "Defence enclaves, mid-rise apartments, and independent floors toward Viman Nagar bridges.",
    offerings: [
      "Quick-turn possession packages with phased room clearing",
      "Bedroom darkening palettes coordinated with blackout hardware",
      "Living areas tuned for OLED wall mounts and evening lighting",
      "Exterior-facing wall prep with extra primer discipline",
      "Trim and grille enamel for weathered metal",
      "Rental makeovers with durable neutrals",
    ],
    processSteps: [
      {
        title: "Timeline workshop",
        body: "Align move-in, cargo lift bookings, and drying windows—especially during monsoon.",
      },
      {
        title: "Scope lock",
        body: "Rooms in/out, ceilings yes/no, bathrooms last or first—documented.",
      },
      {
        title: "Execution with daily photos",
        body: "Useful for clients travelling mid-project.",
      },
      {
        title: "Snag closure",
        body: "Touch-ups before luggage arrives.",
      },
    ],
    differentiators: [
      "Honest duration estimates for travel-heavy households.",
      "Experience with airport-area towers and noise-aware bedroom palettes.",
      "Flexible phasing when only part of the home is vacant.",
    ],
    localFaq: [
      {
        q: "Can you finish in under a week for a 2 BHK?",
        a: "Possible with ideal substrates, clear rooms, and dry weather—we confirm only after site moisture checks.",
      },
      {
        q: "Do you paint exterior balcony ceilings?",
        a: "Yes with exterior-rated systems; scoped separately from interior emulsion.",
      },
      {
        q: "What about AC drips staining fresh paint?",
        a: "We recommend fixing condensate drains first; cosmetic paint alone will repeat failure.",
      },
      {
        q: "Can you work with society security passes?",
        a: "We provide ID lists and insurance documents as most MCs require.",
      },
    ],
    metaDescription:
      `Home painting in Lohegaon, Pune — quick schedules for airport-area homes, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site inspection.`,
    metaKeywords: [
      "home painting Lohegaon",
      "wall painting Lohegaon Pune",
      "painter near Pune airport",
      "flat painting Lohegaon",
      "2 BHK painting Lohegaon",
    ],
  },
  magarpatta: {
    areaLabel: "Magarpatta",
    headline: "Apartment painting in Magarpatta City—township-ready execution",
    subhead:
      "MC paperwork, noise etiquette, and uniform floor plates—we paint Cosmos, Iris, Roystonea-class homes with schedules that respect neighbours and security.",
    intro: [
      "Magarpatta’s planned layout means many flats share similar orientations; we still sample every unit because floor level and furniture change colour perception. Our BOQs reference your tower and typical plate but remain room-measured.",
      "Seasons Mall weekends and Amanora evenings mean many families want homes that feel calm on return—soft bases with intentional accents beat trend-chasing colours that date before the next repaint.",
      `${COMPANY_NAME} files passes, aligns with your MC’s time bands, and keeps corridors protected during material movement.`,
    ],
    localPaintContext:
      "Painting across Magarpatta City main circle, Cosmos and Iris towers, Roystonea and similar clusters, corporate park adjacencies, and villa pockets inside the ring.",
    neighborhoods:
      "Township apartments, duplex villas, and lake-facing formats within Magarpatta boundaries.",
    offerings: [
      "Full-home repainting with MC-compliant scheduling",
      "Open-plan living–dining colour hierarchy design",
      "Feature walls for TV and sofa backdrops",
      "Children’s rooms with scrubbable finishes",
      "Common-area touch-ups for landlords between tenants",
      "Coordination with modular kitchen dates to avoid paint damage during installs",
    ],
    processSteps: [
      {
        title: "MC & access checklist",
        body: "Deposits, IDs, work-hour windows, and lift reservations confirmed before mobilisation date.",
      },
      {
        title: "Measured BOQ by room",
        body: "Reflects actual columns and wardrobes—not only carpet area formulas.",
      },
      {
        title: "Dust-controlled execution",
        body: "Corridor mats, door seals, and daily vacuum habits in shared buildings.",
      },
      {
        title: "Pre-handover joint walk",
        body: "With photos for MC if snags relate to common property interfaces.",
      },
    ],
    differentiators: [
      "Township experience—less trial-and-error on your security process.",
      "Neighbour-aware noise planning for stacked floors.",
      "Integration with larger interior milestones if you bundle services.",
    ],
    localFaq: [
      {
        q: "Does society charge a deposit for painting?",
        a: "Often yes—we guide you on typical paperwork and can provide method statements on request.",
      },
      {
        q: "Can you match the builder’s sample if we do not have the code?",
        a: "We sample from an inconspicuous chip or use closest deck match with your approval.",
      },
      {
        q: "We want one accent wall in every room—is that cost-effective?",
        a: "We price per wall with setup costs explained—sometimes fewer, bolder accents look richer than many small ones.",
      },
      {
        q: "Do you remove AC for painting behind units?",
        a: "Only with HVAC coordination—scoped as separate coordination line if your vendor handles removal.",
      },
    ],
    metaDescription:
      `Home painting in Magarpatta, Pune — township flats, society passes handled, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free inspection.`,
    metaKeywords: [
      "home painting Magarpatta",
      "wall painting Magarpatta Pune",
      "painter Magarpatta City",
      "Cosmos Magarpatta painting",
      "apartment painting Hadapsar",
    ],
  },
  kesnand: {
    areaLabel: "Kesnand",
    headline: "Wall painting for Kesnand & east Pune homes—plots to new towers",
    subhead:
      "High ceilings, garden-facing rooms, and newer shells need volume-accurate quantities, exterior-adjacent discipline, and palettes that suit long east–west sun.",
    intro: [
      "Kesnand’s plotted homes and emerging towers often have taller volumes or mixed civil conditions. We measure heights, not guess litres from carpet area spreadsheets—paint quantities swing sharply when slabs are 3.1 m versus 2.85 m.",
      "Garden and terrace adjacency can pull extra dust and insects onto wet trims; we sequence outer rooms carefully and advise sheen at entries.",
      `${COMPANY_NAME} supports weekend-heavy decision makers with online colour shortlists and documented BOQs so you progress without daily site presence.`,
    ],
    localPaintContext:
      "Projects toward Hadapsar connectors, open plots merging with Wagholi corridors, row-house lanes, and new mid-rise launches east of the core city.",
    neighborhoods:
      "Plotted layouts, row-house schemes, and apartments along connectors toward Wagholi and Hadapsar.",
    offerings: [
      "Shell-to-finish painting coordinated with civil cure times",
      "Volume-correct quotes for high-ceiling living rooms",
      "Exterior façade advice coordinated with interior wood tones",
      "Texture and feature systems for double-height accents where briefed",
      "Durable finishes for homes with pets and outdoor access",
      "Staged painting when only partial possession is available",
    ],
    processSteps: [
      {
        title: "Height & volume survey",
        body: "Laser where needed; litre calculations transparent.",
      },
      {
        title: "Civil readiness gate",
        body: "Moisture checks on new plaster before locking dates.",
      },
      {
        title: "Execution by zone",
        body: "Public rooms first or bedrooms first—your call, our schedule.",
      },
      {
        title: "Documentation for future repaints",
        body: "Codes, sheens, and batch notes stored for your files.",
      },
    ],
    differentiators: [
      "Comfort with non-standard volumes and shell conditions.",
      "Honest exterior-interior palette coordination for plotted homes.",
      "Remote-friendly approvals for busy east Pune commuters.",
    ],
    localFaq: [
      {
        q: "Our ceilings are very high—does cost jump a lot?",
        a: "Surface area drives cost; we show the metre-square math so increases are predictable.",
      },
      {
        q: "Can you paint before wooden flooring goes in?",
        a: "Usually yes and often preferred—sequence reduces masking risk; we coordinate with your flooring vendor’s moisture rules.",
      },
      {
        q: "Do you handle primer for new plaster?",
        a: "Yes—with cure-time discipline; rushing primer on hot plaster invites peeling.",
      },
      {
        q: "Can you suggest colours that hide dust on access roads?",
        a: "We steer toward forgiving mid-tones in entries and use harder sheens where wiping is frequent.",
      },
    ],
    metaDescription:
      `Home painting in Kesnand & east Pune — plots, new towers, tall rooms, 2-year warranty. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site inspection.`,
    metaKeywords: [
      "home painting Kesnand",
      "wall painting east Pune",
      "painter Kesnand Wagholi",
      "new home painting Pune",
      "plotted house painting",
    ],
  },
};
