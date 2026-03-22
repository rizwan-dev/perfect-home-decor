import type { AreaSlug } from "./site";

const BRAND = "Perfect Home Decor";

export type FalseCeilingLocationContent = {
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

export const falseCeilingLocationContent: Record<
  AreaSlug,
  FalseCeilingLocationContent
> = {
  kharadi: {
    areaLabel: "Kharadi",
    headline: "False ceiling & POP contractors in Kharadi, Pune",
    subhead:
      "Cove lighting, gypsum bulkheads, and AC grill integration for glass-heavy towers—drawings before boarding, inspection hatches you can find later, and schedules that respect EON–WTC society norms.",
    intro: [
      "Kharadi’s open kitchen–living plates and floor-to-ceiling glazing demand ceiling plans that coordinate pendants, fans, and downlight positions before the first channel is cut. We produce reflected ceiling plans (RCPs) so electricians, HVAC, and carpenters share one grid—not three conflicting sketches.",
      "Riverside and high-floor stacks add wind noise and curtain stack depth variables; bulkheads for blackout drapes must be frozen with pelmet dimensions early or pendants clash with fabric.",
      `${BRAND} executes false ceilings as standalone scopes and as part of full interiors near World Trade Center, EON IT Park, and Fountain Road corridors.`,
    ],
    localContext:
      "Typical sites include towers around EON Free Zone, Panchshil and Nyati clusters, Gera riverside formats, and newer launches toward Mundhwa bridge. Lift bookings, service-lift dimensions, and MC noise windows shape how we phase framing, boarding, and jointing.",
    neighborhoods:
      "Premium high-rises and row pockets along the IT corridor, riverside societies, and mid-rise communities feeding Kharadi main road.",
    offerings: [
      "Gypsum on metal frame—level planes, coves, and bulkheads for services",
      "POP details and repairs where seamless curves or heritage cornices are specified",
      "Cove LED with driver locations planned for replacement access",
      "AC supply/return coordination, inspection panels, and condensate routing notes",
      "Reflected ceiling plans and sections for contractor alignment",
      "Integration with modular kitchen bulkheads and wardrobe tall units",
    ],
    processSteps: [
      {
        title: "Slab survey & services map",
        body: "Laser levels, photograph MEP above slab, mark conflicts with furniture plans and curtain stacks.",
      },
      {
        title: "RCP sign-off",
        body: "Grid, downlight centres, cove profiles, and bulkhead heights frozen with you before material order.",
      },
      {
        title: "Framing & boarding",
        body: "MC-aligned hours; corridor protection; moisture-rated boards near wet adjacencies where needed.",
      },
      {
        title: "Jointing, primer, and handover",
        body: "Snag under raking light; mark driver and inspection locations on a simple as-built note.",
      },
    ],
    differentiators: [
      "Experience with Kharadi MC paperwork, deposits, and supervisor ID norms.",
      "Honest height-loss math—you see net ceiling before we board.",
      "Coordination with modular kitchen vendors so bulkhead datums match shutter lines.",
    ],
    localFaq: [
      {
        q: "How much height will I lose with a cove and fan?",
        a: "Usually roughly 4–8 inches depending on services; we model fan downrod and pendant stacks on paper before you commit.",
      },
      {
        q: "Can you hide all AC ducts in the ceiling?",
        a: "Often yes, within slab-to-finish budget; tight plates may need bulkheads or exposed grills—we show both options with implications.",
      },
      {
        q: "Gypsum or POP—which do you recommend?",
        a: "Gypsum suits crisp modern planes and speed; POP suits some curves and artisanal details. We recommend per room geometry and maintenance access.",
      },
      {
        q: "Do you handle only ceiling or full electrical too?",
        a: "We coordinate; electrical is often quoted with our MEP partners or your electrician per drawing set—we avoid ambiguous overlaps.",
      },
    ],
    metaDescription:
      "False ceiling & POP in Kharadi, Pune—cove lighting, gypsum, AC grills, RCPs. Perfect Home Decor. Free site visit near EON & WTC.",
    metaKeywords: [
      "false ceiling Kharadi",
      "POP ceiling Kharadi Pune",
      "gypsum ceiling Kharadi",
      "cove lighting Kharadi",
      "ceiling contractor EON IT Park",
    ],
  },
  wagholi: {
    areaLabel: "Wagholi",
    headline: "False ceiling & POP work in Wagholi, Pune",
    subhead:
      "New possessions along Nagar Road need ceilings that hide services cleanly, survive monsoon humidity in jointing cycles, and align with kitchen bulkheads from day one.",
    intro: [
      "Wagholi buyers often take possession while dust and road work still peak—ceiling jointing needs realistic curing windows, not rushed skim before the first AC monsoon cycle.",
      "We plan bulkheads for kitchen chimneys, living coves, and bedroom fan positions against actual furniture layouts so you are not lowering pendants after sofas arrive.",
      `${BRAND} is Wagholi-based; quick revisits for level checks and lighting mock-ups are practical for neighbours on your corridor.`,
    ],
    localContext:
      "Active work near Lifeline Hospital, Wagholi chowk, NH753F retail, Jubilation Society–class pockets, and towers toward the airport road. Truck timing and lift slots factor into how we batch heavy gypsum bundles.",
    neighborhoods:
      "Nagar Road townships, internal sectors toward Kesnand, and mid-rise communities in the Wagholi–Lohegaon band.",
    offerings: [
      "Living–dining coves with dimmable LED scenes",
      "Kitchen bulkheads aligned to modular carcass heights",
      "Bedroom ceilings with fan centres verified against bed position",
      "Balcony sliders and curtain pelmet coordination",
      "Simple RCP packages for electricians on smaller scopes",
      "Post-handover crack repairs where settlement movement appears",
    ],
    processSteps: [
      {
        title: "Layout lock with furniture",
        body: "Tape or CAD check fan and pendant versus sofa and bed—especially in compact 2 BHK plates.",
      },
      {
        title: "Services freeze",
        body: "Electrical conduit, AC drain slopes, and camera conduits before framing closes.",
      },
      {
        title: "Boarding & humidity-aware jointing",
        body: "Cure times respected; ventilation aligned to product data sheets.",
      },
      {
        title: "Paint-ready handover",
        body: "Primer scope clear for your painter or our paint team.",
      },
    ],
    differentiators: [
      "Local studio presence for Wagholi and immediate surrounds.",
      "Monsoon-realistic schedules—not fantasy three-day miracles on complex coves.",
      "Single point coordination when kitchen and ceiling are both ours.",
    ],
    localFaq: [
      {
        q: "Can we do only the hall and passage first?",
        a: "Yes—logical breaks at door frames reduce visible joint lines later if phased well.",
      },
      {
        q: "Will false ceiling reduce my room feeling small?",
        a: "Profile choice matters; shallow coves and light colours often feel taller than bare slabs with ugly services.",
      },
      {
        q: "Who buys the LED strips?",
        a: "We specify; you can supply premium lines or we bundle—documented in BOQ.",
      },
      {
        q: "Society asks for method statements—do you provide?",
        a: "Yes, with typical Wagholi MC expectations in mind.",
      },
    ],
    metaDescription:
      "False ceiling & POP Wagholi, Pune—coves, bulkheads, gypsum, lighting. Perfect Home Decor. Local team, free consultation.",
    metaKeywords: [
      "false ceiling Wagholi",
      "POP ceiling Wagholi Pune",
      "gypsum ceiling Wagholi",
      "cove lighting Wagholi",
      "ceiling contractor Nagar Road",
    ],
  },
  "viman-nagar": {
    areaLabel: "Viman Nagar",
    headline: "False ceiling & POP in Viman Nagar—retrofits & new towers",
    subhead:
      "Beam drops, odd slabs, and mixed-era flats need site-first framing—not catalogue grids. We detail around columns, heritage cornices, and tight parking logistics.",
    intro: [
      "Older Viman Nagar stock often hides shifted beams and out-of-level slabs; laser surveys decide packing versus honest level lines. We discuss shadow lines with you before gypsum hides problems you will see at night with downlights.",
      "Newer towers near the airport still need AC grill and blackout coordination for flight-path bedrooms.",
      `${BRAND} coordinates ceilings with painting and curtain vendors when you refresh multiple layers at once.`,
    ],
    localContext:
      "Work around Phoenix Marketcity, Inorbit, Symbiosis hubs, airport-side towers, Sainik Farms lanes, and Mhada pockets with retrofit quirks.",
    neighborhoods:
      "Bungalow lanes, older apartments, and newer builds toward Lohegaon road.",
    offerings: [
      "Retrofit ceiling profiles that respect existing cornices where retained",
      "Soft coves for older living rooms with kota or marble floors",
      "Study and bedroom ceilings tuned for video-call lighting",
      "Careful protection of heritage floors during scaffold and material moves",
      "Coordination with wood polish and paint sequences",
      "Targeted repairs to older POP without full strip where safe",
    ],
    processSteps: [
      {
        title: "Structural reality check",
        body: "Slab level map, beam positions, and service routes photographed.",
      },
      {
        title: "Profile workshop",
        body: "Cove depth, bulkhead widths, and sightlines from entry and sofa.",
      },
      {
        title: "Phased install",
        body: "Neighbour-aware hours in dense floors; dust control at stairwells.",
      },
      {
        title: "Light test night",
        body: "Downlights on before paint sign-off where possible to catch undulations.",
      },
    ],
    differentiators: [
      "Comfort with uneven substrates and honest conversations about limits.",
      "Discrete crews and corridor discipline for premium buildings.",
      "Integration with your interior palette, not generic white boxes.",
    ],
    localFaq: [
      {
        q: "Our slab is very uneven—can gypsum fix it?",
        a: "Gypsum can level visually within limits; extreme dips may need packing or civil prep—priced separately.",
      },
      {
        q: "Can you match an older cornice style?",
        a: "Often with POP or hybrid details—photos and samples guide feasibility.",
      },
      {
        q: "Parking is tight—how do materials arrive?",
        a: "We batch sizes to lift constraints and society rules you share with us.",
      },
      {
        q: "Do you add sound insulation?",
        a: "Where height budget allows, we discuss acoustic pads—expectations must stay realistic for apartment stacks.",
      },
    ],
    metaDescription:
      "False ceiling Viman Nagar, Pune—POP, gypsum, coves, retrofits. Perfect Home Decor. Airport-area experience. Book a visit.",
    metaKeywords: [
      "false ceiling Viman Nagar",
      "POP ceiling Viman Nagar Pune",
      "gypsum ceiling near Phoenix Marketcity",
      "ceiling renovation Viman Nagar",
    ],
  },
  lohegaon: {
    areaLabel: "Lohegaon",
    headline: "False ceiling near Lohegaon airport—quiet profiles, fast coordination",
    subhead:
      "Defence pockets and airport-adjacent towers benefit from blackout-friendly bedroom ceilings, crisp living coves, and schedules aligned to posting-driven move-ins.",
    intro: [
      "Clients often need predictable handover windows before travel or festive hosting. We quote crew days and drying buffers honestly—especially when monsoon humidity stretches joint curing.",
      "Bedrooms facing flight paths pair with heavy drapes; pelmet depths and AC returns must be drawn before cove profiles are fixed.",
      `${BRAND} links ceiling scope with painting and modular dates so fresh paint is not damaged by late bulkhead changes.`,
    ],
    localContext:
      "Sites around Pune airport fringe, DY Patil Knowledge City, Kendriya Vidyalaya Lohegaon area, Tingre Nagar connectors, and societies along airport road.",
    neighborhoods:
      "Defence enclaves, mid-rise apartments, and independent floors toward Viman Nagar.",
    offerings: [
      "Bedroom ceilings with fan and downlight grids for reading and sleep modes",
      "Living coves with separate dining task circuits",
      "Balcony door pelmets and slider stack coordination",
      "Quick-turn packages where substrate and services are ready",
      "Inspection hatches for service valves above wet areas",
      "Coordination with rental makeovers between tenants",
    ],
    processSteps: [
      {
        title: "Timeline alignment",
        body: "Move-in dates, lift access, and noisy-trade windows mapped upfront.",
      },
      {
        title: "MEP snapshot",
        body: "Photo and mark conduit, duct, and drain paths before cover.",
      },
      {
        title: "Install & cure",
        body: "Humidity-aware jointing; fans only when safe per vendor advice.",
      },
      {
        title: "Snag + as-built sketch",
        body: "Simple drawing of access panels for your file.",
      },
    ],
    differentiators: [
      "Realistic schedules for families with travel pressure.",
      "Airport-area experience with bedroom blackout stacks.",
      "Clear split between our ceiling scope and electrician ownership.",
    ],
    localFaq: [
      {
        q: "Can you finish ceilings in a week?",
        a: "Small scopes sometimes; complex coves and monsoon humidity need more—confirmed after survey.",
      },
      {
        q: "Do you install fans and lights?",
        a: "We cut and reinforce; your electrician usually terminates—coordinated on drawing.",
      },
      {
        q: "What if the builder AC grill position is wrong?",
        a: "We flag before boarding; moving grills may need HVAC vendor—better now than after paint.",
      },
      {
        q: "Can you work weekends only?",
        a: "Possible where MC allows; longer calendar and cost implications explained upfront.",
      },
    ],
    metaDescription:
      "False ceiling Lohegaon, Pune—POP, gypsum, coves, bedroom blackout stacks. Perfect Home Decor. Free site visit.",
    metaKeywords: [
      "false ceiling Lohegaon",
      "POP ceiling Lohegaon Pune",
      "gypsum ceiling near airport Pune",
      "ceiling contractor Lohegaon",
    ],
  },
  magarpatta: {
    areaLabel: "Magarpatta",
    headline: "False ceiling in Magarpatta City—township-ready gypsum & POP",
    subhead:
      "Cosmos-to-Iris floor plates deserve datum-aligned bulkheads, MC-friendly schedules, and RCPs that match how Magarpatta families actually use open plans.",
    intro: [
      "Township MCs expect passes, IDs, and disciplined corridor protection. We brief teams daily on noise etiquette because stacked floors amplify vibration and dust complaints.",
      "Many Magarpatta living rooms share one visual field with dining—we design ceiling layers so zones feel defined without chopping height arbitrarily.",
      `${BRAND} files typical paperwork patterns and coordinates with modular kitchen vendors serving the township ring.`,
    ],
    localContext:
      "Work across Magarpatta main circle, Cosmos, Iris, Roystonea, lake-facing towers, villas inside the ring, and corporate-park-adjacent blocks.",
    neighborhoods:
      "Township apartments, duplex villas, and premium clusters within Magarpatta boundaries.",
    offerings: [
      "Open-plan cove and bulkhead compositions",
      "Island kitchen bulkheads where slabs and services allow",
      "Children’s room ceilings with starfield or simple profiles per brief",
      "Common-area touch-ups for landlords between tenants",
      "Drawing packages for electrician bidding",
      "Post-snag crack repairs after first monsoon if movement appears",
    ],
    processSteps: [
      {
        title: "MC checklist",
        body: "Deposits, work hours, lift rules—confirmed before mobilisation date.",
      },
      {
        title: "Template-aware design",
        body: "We reference typical plate constraints—not generic mall ceiling photos.",
      },
      {
        title: "Protected execution",
        body: "Lift mats, corridor runners, and daily cleanup photos if you are remote.",
      },
      {
        title: "Joint walk",
        body: "With snag list before paint handoff to next trade.",
      },
    ],
    differentiators: [
      "Township execution muscle—less guessing at your security desk.",
      "Neighbour-aware phasing on stacked floors.",
      "Integration with kitchen and wardrobe milestones when bundled.",
    ],
    localFaq: [
      {
        q: "Does society need NOC for false ceiling?",
        a: "Often yes for structural or common-area interfaces—we guide based on your tower’s latest circular.",
      },
      {
        q: "Can you match showroom photos exactly?",
        a: "We translate inspiration to your slab height, services, and furniture plan—some Instagram details are not structurally possible.",
      },
      {
        q: "Who patches if cracks appear later?",
        a: "Minor settlement cracks get fair warranty terms; structural issues need engineer input—scoped honestly.",
      },
      {
        q: "Do you provide 3D ceiling views?",
        a: "On larger scopes yes; simpler flats may use RCP and sections only.",
      },
    ],
    metaDescription:
      "False ceiling Magarpatta City—gypsum, POP, coves, MC-ready. Perfect Home Decor. Free consultation Hadapsar township.",
    metaKeywords: [
      "false ceiling Magarpatta",
      "POP ceiling Magarpatta Pune",
      "gypsum ceiling Cosmos Magarpatta",
      "cove lighting Magarpatta City",
    ],
  },
  kesnand: {
    areaLabel: "Kesnand",
    headline: "False ceiling for Kesnand & east Pune—plots, tall volumes & shells",
    subhead:
      "High slabs, garden-facing rooms, and fresh shells need volume-correct lighting grids and early MEP coordination before concrete gets crowded with conduit regrets.",
    intro: [
      "Plotted and row homes often carry taller living volumes—downlight counts and cove lengths scale non-linearly with area; we metre-square the ceiling, not guess from carpet area alone.",
      "Shell-stage projects benefit from marking fan, projector, and speaker positions before first fix electrical is closed.",
      `${BRAND} supports weekend decision-makers with documented RCPs so east Pune commuters can approve remotely with confidence.`,
    ],
    localContext:
      "Projects toward Hadapsar connectors, Wagholi merge corridors, new plotted layouts, and mid-rise launches east of the core.",
    neighborhoods:
      "Plots, row houses, and apartments along connectors toward Wagholi and Hadapsar.",
    offerings: [
      "Double-height or tall living ceiling strategies",
      "Shell-stage conduit and cove pre-planning with your electrician",
      "Exterior-adjacent bulkheads with moisture-rated boards where needed",
      "Terrace door stack and pelmet coordination",
      "Staged ceiling installs when partial possession applies",
      "Farmer-light friendly scenes for large glass facing gardens",
    ],
    processSteps: [
      {
        title: "Volume survey",
        body: "Heights, stair voids, and beam maps drive quantities and profiles.",
      },
      {
        title: "First-fix alignment",
        body: "Conduit and AC routes signed with MEP before bulkheads board.",
      },
      {
        title: "Install",
        body: "Scaffold or ladder plans safe for high rooms.",
      },
      {
        title: "Light aiming",
        body: "Adjust trims where art and furniture anchors demand.",
      },
    ],
    differentiators: [
      "Non-standard volumes are normal for us—not exceptions.",
      "Early coordination saves chopping finished ceiling later.",
      "Transparent BOQs tied to measured ceiling area.",
    ],
    localFaq: [
      {
        q: "Our living is double-height—does cost double?",
        a: "Surface area and access drive cost—often more than single-height but not blindly 2×; we show the math.",
      },
      {
        q: "Can you design for a future chandelier?",
        a: "Yes—structural backing and junction box locations specified early.",
      },
      {
        q: "Shell only—when should you enter?",
        a: "After wet-area waterproofing tests where ceilings interface bathrooms; before expensive paint elsewhere.",
      },
      {
        q: "Do you handle exterior soffits?",
        a: "With rated boards and details scoped separately from interior gypsum.",
      },
    ],
    metaDescription:
      "False ceiling Kesnand & east Pune—tall rooms, plots, gypsum POP. Perfect Home Decor. Site visit & RCP support.",
    metaKeywords: [
      "false ceiling Kesnand",
      "POP ceiling east Pune",
      "gypsum ceiling plotted house",
      "high ceiling false ceiling Pune",
    ],
  },
};
