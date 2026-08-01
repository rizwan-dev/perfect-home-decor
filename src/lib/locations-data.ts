import { COMPANY } from "./site";
import type { AreaSlug } from "./site";

export type LocationPageContent = {
  areaLabel: string;
  headline: string;
  subhead: string;
  intro: string[];
  landmarks: string;
  neighborhoods: string;
  servicesBlurb: string;
  localFaq: { q: string; a: string }[];
  metaDescription: string;
  /**
   * Deep-dive sections below are optional and currently written only for the
   * two localities we are actively competing in (Kharadi and Wagholi), where
   * competitor pages run 1,600–2,500 words against our 915. Areas without
   * them simply render the shorter page — better a lean, honest page than
   * padded filler written about a neighbourhood we know less well.
   */
  /** Who actually buys here, and what they ask for on the first call. */
  buyerProfile?: { heading: string; body: string }[];
  /** Flat/home formats we are regularly asked to design in this area. */
  homeTypes?: { title: string; body: string }[];
  /** Practical building/society realities the team plans around locally. */
  siteRealities?: string[];
};

export const locationContent: Record<AreaSlug, LocationPageContent> = {
  kharadi: {
    areaLabel: "Kharadi",
    headline: "Home interior design in Kharadi for premium apartments & row homes",
    subhead:
      "World Trade Center proximity, EON IT corridor, and riverside towers—Kharadi homes deserve finishes that match the skyline. Our home interior design and installation service handles rental upgrades and end-user luxury alike.",
    intro: [
      "Kharadi’s mix of compact high-rises and larger river-facing units needs layouts that maximise storage without crowding glazing. We plan services around balconies, dry zones, and the way Pune’s easterly sun moves across your living room.",
      "Whether you are near Panchshil Towers, Nyati Era, or the lanes around Fountain Road, our site teams are used to society norms, lift timings, and material movement—so execution stays predictable.",
      "Kharadi also has a particular kind of buyer pressure: the area attracts polished, high-budget marketing from national firms, and it is easy to end up comparing a per-square-foot headline against a detailed quotation and assuming they measure the same thing. They rarely do. A rate card that excludes hardware grade, surface preparation or electrical points will always look cheaper than an honest line-wise breakdown of the same home. We would rather show you where the money actually goes—usually in storage volume rather than finishes—and let you decide what to keep, drop, or move to a second phase.",
    ],
    landmarks:
      "World Trade Center, EON Free Zone, Reliance Mart Kharadi, Columbia Asia Hospital, Amanora Mall corridor, riverside societies along Fountain Road.",
    neighborhoods:
      "Recently completed in Kalpataru Jade Residences, Gera World of Joy and Majestique Towers, plus homes in Forest County, Yashwant Enchante, VTP Leonara, Marvel Zephyr and Godrej Rivergreens. We work regularly across the towers near EON IT Park and the premium societies toward Mundhwa bridge.",
    servicesBlurb:
      "2 BHK and 3 BHK complete home interior design for flats — modular kitchen, hall, bedrooms and kids' room delivered as one job. Also modular kitchens tuned for compact galley plans, false ceilings with cove lighting for open layouts, painting packages for handover refreshes, and custom TV units for media walls facing city views.",
    localFaq: [
      {
        q: "We have a compact 2 BHK in a Kharadi tower—can you still add storage?",
        a: "Yes. We use depth behind sofas, headboard walls, and kitchen tall units sized to your floor plate. We model clearances for balcony doors and AC ledges common in Kharadi plans.",
      },
      {
        q: "Do you coordinate with society MC for working hours?",
        a: "We align with your society’s time windows, lift reservations, and loading rules, and share method statements when required.",
      },
      {
        q: "Can we phase kitchen first and bedrooms later?",
        a: "Common for families still living in the flat. We sequence dust-heavy work, protect services, and lock milestones per phase.",
      },
      {
        q: "Which societies in Kharadi have you worked in?",
        a: "Recent deliveries include Forest County, Majestique Towers, Gera World of Joy, VTP Leonara, Marvel Zephyr, Kalpataru Jade Residences, Yashwant Enchante, and Godrej Rivergreens. If your tower is nearby, our team likely already knows its lift bookings and move-in rules.",
      },
      {
        q: "What do full interiors for a Kharadi 2 or 3 BHK cost?",
        a: "Woodwork quantity and material grade decide cost more than carpet area alone. After a free site visit you get an item-by-item quotation—many Kharadi clients phase it: kitchen and wardrobes before move-in, living-room woodwork and décor later.",
      },
      {
        q: "What warranty do you give on interiors in Kharadi?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover, not promised verbally. Appliance and hardware manufacturer terms apply on top of that.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry. Brand names go on the quotation so you know exactly what you are paying for.",
      },
      {
        q: "How long does a Kharadi flat interior take?",
        a: "Most 2–3 BHK turnkey homes land between 10–16 weeks once civil work is released. High-rise material movement and society lift windows affect this, which is why we confirm the schedule after seeing your building, not before.",
      },
      {
        q: "Do you subcontract the work to other teams?",
        a: "No. Design, carpentry and painting are handled by our own in-house team, which is why the person who quoted your job is accountable for what actually gets built.",
      },
      {
        q: "Can you also handle only painting or only a false ceiling in Kharadi?",
        a: "Yes—single-scope work is common. See our dedicated pages for wall painting, false ceiling (POP) and modular kitchen work in Kharadi if you do not need a full-home interior yet.",
      },
    ],
    metaDescription:
      `Home interior design in Kharadi, Pune — complete 2 & 3 BHK interiors from ₹4.5 lakh. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site visit near EON & WTC.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Kharadi",
        body: "Most Kharadi enquiries come from two groups: IT professionals and dual-income couples who bought near the EON Free Zone and World Trade Center corridor, and families upgrading into larger river-facing units toward Mundhwa bridge. A third, smaller group are owners fitting out a flat to rent to the same IT crowd — they want durable, neutral interiors that photograph well and survive tenant turnover.",
      },
      {
        heading: "What they ask for first",
        body: "Storage almost always leads the conversation — Kharadi towers give you good glazing and city views but rarely generous floor plates, so wardrobes, kitchen tall units and a TV wall that hides cabling matter more than statement décor. The second most common ask is a work-from-home corner that does not eat a bedroom. Lighting comes up late in the conversation but changes the finished home the most.",
      },
      {
        heading: "Budget expectations",
        body: "Kharadi buyers usually come in having already seen a per-square-foot number from a larger firm and want to know what it actually includes. We quote line-wise instead, so you can see which items carry the cost — typically the woodwork volume, not the finish grade — and drop or phase anything you do not need yet.",
      },
    ],
    homeTypes: [
      {
        title: "Compact 2 BHK tower flats",
        body: "The most common Kharadi brief. Storage planned into wall depth, headboard walls and kitchen tall units so the flat gains capacity without losing floor area or blocking balcony access.",
      },
      {
        title: "3 BHK family homes",
        body: "Full-home scope across kitchen, hall, bedrooms and kids' room delivered on one schedule, with false ceilings and lighting coordinated before finishes close up.",
      },
      {
        title: "River-facing premium units",
        body: "Larger plans near Fountain Road and Mundhwa bridge where sightlines to the glazing drive the layout — we keep the furniture low and the ceiling profiles clean so the view stays the feature.",
      },
      {
        title: "Rental-ready fit-outs",
        body: "Neutral, hard-wearing packages for owners letting to the EON and WTC workforce — easy-clean surfaces, standard hardware and finishes that survive tenant changeovers.",
      },
      {
        title: "Row homes",
        body: "Multi-level plans where staircase storage, utility zoning and a coherent palette across floors matter more than any single room.",
      },
      {
        title: "Renovations of older Kharadi flats",
        body: "Phased, room-by-room execution for families already living in the home, with dust control and services protected between phases.",
      },
    ],
    siteRealities: [
      "High-rise material movement means service-lift bookings and time windows — our supervisors handle the MC coordination rather than leaving it to you.",
      "Many Kharadi societies restrict working hours and weekend work; we plan the schedule against your society's rules before quoting a timeline.",
      "Compact floor plates make balcony-door and AC-ledge clearances tight — we model these before cutting any board, not on site.",
      "Easterly light moves fast across most Kharadi living rooms, so we sample paint and laminate on your walls at two times of day before you approve.",
    ],
  },
  wagholi: {
    areaLabel: "Wagholi",
    headline: "Home interior design & painting in Wagholi—designed for growing neighbourhoods",
    subhead:
      "From new launches along the airport road to quieter lanes toward Kesnand, Wagholi buyers often want warm, durable homes without showroom clichés. Our home interior design and service process runs on disciplined drawings and transparent BOQs.",
    intro: [
      "Wagholi’s rapid development means many families move in while infrastructure still matures—we choose finishes that forgive dust, and lighting plans that keep interiors cheerful on overcast days.",
      "If you are near Lifeline Hospital, Wagholi chowk, or the NH753F corridor, we plan site visits that respect commute realities and batch decisions to save your time.",
      "For most Wagholi clients this is their first home, and the first time they have commissioned interior work of any size. That changes how we quote. A lump-sum number is easy to give and impossible to check, so we break the quotation into line items you can question one by one—and we are explicit about what is genuinely worth spending on now versus what can wait a year without any of it needing to be redone. Kitchen, wardrobes and painting make a flat liveable; false ceilings, feature walls and soft styling almost always can follow later. Being clear about that difference is more useful, to a first-time buyer, than another paragraph about our design philosophy.",
    ],
    landmarks:
      "Lifeline Hospital, Wagholi chowk, schools along Nagar Road, retail on NH753F, connections toward Lohegaon airport.",
    neighborhoods:
      "Recently completed a 3 BHK in Nyati Evita, alongside homes in Nyati Elan, Ivy State, Konark Exotica, Citron and Mansha. We work across the new townships and mid-rise communities along Nagar Road and the internal sectors toward Kesnand.",
    servicesBlurb:
      "2 BHK and 3 BHK complete home interior design for fresh possessions — modular kitchen, hall, bedrooms and kids' room in a single scope. Also budget-smart modular kitchens, kids’ rooms with growth-friendly storage, POP ceilings with neat coves, and full-home painting with low-odour options.",
    localFaq: [
      {
        q: "Our flat faces the road—how do you handle noise and dust?",
        a: "We recommend glazing seals, balcony treatments where possible, and entry vestibules that buffer sound. Finishes are chosen for easier cleaning between housekeeping cycles.",
      },
      {
        q: "Can you match builder-provided tiles in bathrooms?",
        a: "We sample against existing batches and align paint, vanity, and hardware so upgrades feel cohesive.",
      },
      {
        q: "Do you work with under-construction timelines?",
        a: "Yes—we align design milestones with possession dates and lock long-lead items early.",
      },
      {
        q: "Which Wagholi societies have you delivered in?",
        a: "Recent work spans Nyati Evita, Nyati Elan, Ivy State, Konark Exotica, Mansha, and a full-home painting project at Citron—and our own studio is on Awhalwadi Road, so Wagholi sites get the shortest response times of any area we serve.",
      },
      {
        q: "We just got possession in Wagholi—what should we spend on first?",
        a: "Start with what daily life needs: kitchen, wardrobes, and painting before the furniture arrives. Because our quotation is line-wise, you can defer false ceilings and feature walls to a later phase without redoing anything.",
      },
      {
        q: "What warranty do you give on interiors in Wagholi?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover. Hardware and appliance manufacturer terms apply on top of that.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry. Every brand is named on the quotation.",
      },
      {
        q: "How long does a Wagholi flat interior take?",
        a: "Most 2–3 BHK turnkey homes land between 10–16 weeks once civil work is released. Because our studio is on Awhalwadi Road, supervision visits to Wagholi sites are quicker than for any other area we serve.",
      },
      {
        q: "Do you subcontract the work?",
        a: "No—design, carpentry and painting are done by our own in-house team, so the people who quoted your job are the ones accountable for building it.",
      },
      {
        q: "Can you work around an under-construction or newly handed-over building?",
        a: "Yes. We align design milestones to your possession date, lock long-lead items early, and choose finishes that tolerate the dust that comes with a still-developing neighbourhood.",
      },
    ],
    metaDescription:
      `Home interior design in Wagholi, Pune — complete 2 & 3 BHK interiors from ₹4.5 lakh. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site visit, local studio.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Wagholi",
        body: "Wagholi is largely a first-home market. Most enquiries come from young couples and growing families taking possession of their first 2 or 3 BHK, often moving from rented flats closer to the city. They are spending carefully, frequently coordinating with parents on decisions, and want to understand where every rupee goes before committing.",
      },
      {
        heading: "What they ask for first",
        body: "Kitchen and wardrobes, almost without exception — the things that make a new flat liveable on day one. Kids' room storage that will still work in five years comes up often. False ceilings and feature walls are usually wanted but knowingly deferred to a second phase, which is exactly how we structure the quotation.",
      },
      {
        heading: "Budget expectations",
        body: "Wagholi buyers are the most budget-conscious of the areas we serve, and the most poorly served by lump-sum quotes. Our line-wise quotation exists mainly for this situation: you can see the cost of each item, start with essentials before move-in, and add the rest later without redoing any of the earlier work.",
      },
    ],
    homeTypes: [
      {
        title: "Fresh-possession 2 BHK flats",
        body: "The most common Wagholi brief — bare shell to liveable home. Kitchen, wardrobes and full-home painting first, with everything else planned but phased.",
      },
      {
        title: "3 BHK family homes",
        body: "Complete interiors including a kids' room designed with storage that adapts as the child grows, rather than furniture that gets replaced in three years.",
      },
      {
        title: "Phased first-home projects",
        body: "Essentials before move-in, false ceilings and feature walls in a later phase — sequenced so the second phase never means undoing the first.",
      },
      {
        title: "Budget-smart modular kitchens",
        body: "Honest hardware and layout engineering over showroom finishes, sized to the platform and chimney duct the builder actually gave you.",
      },
      {
        title: "Full-home painting for new flats",
        body: "Low-odour options so families can move in sooner, with proper prep and primer rather than a fast coat over builder whitewash.",
      },
      {
        title: "Row houses and larger plots",
        body: "Multi-level homes toward Kesnand where storage planning and a consistent palette across floors matter most.",
      },
    ],
    siteRealities: [
      "Our studio is on Awhalwadi Road in Wagholi, so site visits and supervision here are faster than for any other area we cover.",
      "Wagholi is still developing — road dust is a genuine factor, so we lean toward easy-clean surfaces and finishes that forgive it.",
      "Many buildings are new handovers, which means builder snags surface mid-project; we flag them before starting rather than discovering them at painting stage.",
      "New townships often have strict material-movement and work-hour rules; we handle the society coordination as part of the job.",
      "Road-facing flats along the Nagar Road and NH753F corridor benefit from glazing seals and entry vestibules that buffer noise and dust.",
    ],
  },
  "viman-nagar": {
    areaLabel: "Viman Nagar",
    headline: "Interior designer in Viman Nagar—airport-close homes with refined detailing",
    subhead:
      "Leafy avenues, older bungalows, and modern apartments near the airport—Viman Nagar calls for tailored interiors that respect legacy trees, odd beams, and tight parking logistics.",
    intro: [
      "We regularly work around retrofit challenges: shifted columns, heritage floor patterns, and rental conversions that still need a premium guest-facing living room.",
      "Phoenix Marketcity and Symbiosis hubs mean many clients want home offices that mute street sound and video-call well—lighting and backdrop detailing matter.",
      "Renovation is where most Viman Nagar projects go wrong, and it is rarely a design problem. It is a survey problem. A quote written without opening up an older flat will always look attractive and will always grow later, because dismantling reveals what drawings never showed—rerouted plumbing, packed-out walls, flooring that cannot be lifted cleanly. We would rather spend longer on the survey, carry those lines honestly in the quotation, and give you a number that survives contact with the site than win the job on a figure we already know will move.",
    ],
    landmarks:
      "Phoenix Marketcity, Inorbit, Dhole Patil College, Symbiosis International, Pune Airport, Viman Nagar main road.",
    neighborhoods:
      "Sainik Farms lanes, Mhada pockets, newer towers toward Lohegaon road.",
    servicesBlurb:
      "Renovation-first planning, veneer-forward TV walls, study niches, soft ceiling profiles, and full-home palettes that complement older marble or kota flooring.",
    localFaq: [
      {
        q: "Older Viman Nagar flats have uneven walls—does that add cost?",
        a: "We survey out-of-plumb areas early and include realistic putty depth and packing in the BOQ so surprises are rare.",
      },
      {
        q: "Can you design around rented furniture until we invest?",
        a: "We phase loose furniture and focus on fixed improvements that raise everyday comfort first.",
      },
      {
        q: "Parking is tight—how do deliveries work?",
        a: "We schedule off-peak slots, use society lifts when permitted, and palletise materials to minimise lobby time.",
      },
      {
        q: "How is renovating an older Viman Nagar flat priced differently?",
        a: "Renovation quotes carry lines a new flat never sees—dismantling, debris removal, and surface repair before anything new goes in. We survey first and price those honestly, so the comparison with a fresh-possession quote makes sense. Recent area work includes false ceiling and lighting at Rohan Mithila.",
      },
      {
        q: "What warranty do you give on interiors in Viman Nagar?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover. On renovations we are explicit about what the warranty covers versus pre-existing conditions in an older structure.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry—each named on the quotation.",
      },
      {
        q: "How long does a Viman Nagar renovation take?",
        a: "Fresh-possession flats run 10–16 weeks for a 2–3 BHK. Renovations of older homes take longer and vary more, because dismantling frequently reveals conditions no survey can fully predict. We give a staged plan rather than one optimistic date.",
      },
      {
        q: "Do you subcontract the work?",
        a: "No—design, carpentry and painting are handled by our own in-house team, so the people who quoted your job are the ones accountable for building it.",
      },
      {
        q: "Can you match new work to existing marble or kota flooring?",
        a: "Yes, and it is one of the more common Viman Nagar asks. We sample wood tones and paint against your existing floor under your own lighting before anything is finalised, so new joinery does not fight the original material.",
      },
    ],
    metaDescription:
      `Home interior design in Viman Nagar, Pune — renovations and new flats, 2 & 3 BHK from ₹4.5 lakh. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site visit.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Viman Nagar",
        body: "Viman Nagar splits into two distinct briefs. The first is renovation: families who have lived in an older flat or bungalow floor for years and want it to work like a modern home without moving out of a locality they like. The second is professionals and families near Symbiosis, the schools and the airport who bought into newer towers and want a polished, guest-facing home quickly.",
      },
      {
        heading: "What they ask for first",
        body: "Renovation clients almost always lead with the kitchen and the living room—the two rooms where dated finishes are most visible. Newer-flat clients lead with storage and a home office that reads well on video calls, which the Phoenix Marketcity and Symbiosis corridor makes a genuinely common requirement here.",
      },
      {
        heading: "Budget expectations",
        body: "Renovation buyers are often comparing our quote against a fresh-possession quote they saw elsewhere, and the two are not comparable. Dismantling, debris removal and surface repair are real lines that a new flat never carries. We survey first and price those openly rather than discovering them mid-project.",
      },
    ],
    homeTypes: [
      {
        title: "Older flats needing full renovation",
        body: "The most common Viman Nagar brief. Dismantling, surface repair and services rerouting handled properly before any new finish goes on.",
      },
      {
        title: "Bungalow floors and independent units",
        body: "Legacy structures with odd beams, heritage flooring and generous ceiling heights—designed to keep what is worth keeping rather than stripping it flat.",
      },
      {
        title: "Newer towers toward Lohegaon road",
        body: "Fresh-possession 2 and 3 BHK flats where the brief is storage, lighting and a complete interior delivered on one schedule.",
      },
      {
        title: "Home-office focused interiors",
        body: "Acoustic treatment, task lighting and a backdrop that reads professional on calls—planned into the room rather than added as furniture later.",
      },
      {
        title: "Rental and guest-ready conversions",
        body: "Durable, neutral fit-outs for owners letting to the airport and corporate crowd, with finishes that survive changeovers.",
      },
      {
        title: "Partial and single-room upgrades",
        body: "Kitchen-only or living-room-only work for homes that do not need everything touched—priced line-wise so the scope stays honest.",
      },
    ],
    siteRealities: [
      "Parking and lobby access are genuinely tight in parts of Viman Nagar—we schedule deliveries off-peak and palletise materials to keep lobby time short.",
      "Older walls are frequently out of plumb; we survey them early and carry realistic putty depth and packing in the quotation instead of discovering it at painting stage.",
      "Legacy marble and kota flooring is worth designing around, not over—we sample new wood tones against it before locking finishes.",
      "Retrofits often reveal shifted columns and rerouted services once dismantling starts; we plan access routes for this rather than assuming drawings match reality.",
    ],
  },
  lohegaon: {
    areaLabel: "Lohegaon",
    headline: "Interiors near Lohegaon airport—quiet homes, crisp execution",
    subhead:
      "Defence enclaves, mid-rise apartments, and independent floors—Lohegaon clients want sound-aware layouts and finishes that stay fresh with travel-heavy lifestyles.",
    intro: [
      "We factor flight paths into glazing and bedroom blackout needs, and we plan WFH corners that do not glare on screens when afternoon sun hits.",
      "Proximity to DY Patil Knowledge City and airport staff housing means quick turnarounds matter—we protect timelines with factory-ready modular and staged painting.",
      "The honest constraint in Lohegaon is time, not budget. Clients here regularly have a hard date—a posting, a transfer, a family arriving—and the temptation for any contractor is to say yes to a full turnkey home inside a window that will not hold. We would rather tell you upfront which parts of the scope realistically fit the date and which are better done in a second phase after you have moved in. A home handed over complete and late helps nobody; a kitchen, wardrobes and painting finished on time, with the rest sequenced later, usually does.",
    ],
    landmarks:
      "Pune International Airport, DY Patil Knowledge City, Kendriya Vidyalaya Lohegaon, defence pockets, connectors to Viman Nagar.",
    neighborhoods:
      "Societies along airport road, Lohegaon village edges, newer towers toward Tingre Nagar.",
    servicesBlurb:
      "Bedroom acoustics, blackout drapes coordination, efficient kitchens for compact plans, storage-max wardrobes, and ceilings that conceal services cleanly.",
    localFaq: [
      {
        q: "Can you improve sound sleep near flight routes?",
        a: "We combine glass upgrades where possible, heavy drapes, headboard walls, and AC grills placed to minimise rattle.",
      },
      {
        q: "We need handover in six weeks—is that realistic?",
        a: "For scoped packages—painting plus select furniture—it can be. Broader turnkey work needs a milestone plan; we’ll be honest upfront.",
      },
      {
        q: "Do you handle civil tweaks?",
        a: "Minor tweaks yes; structural changes route through your engineer—we coordinate drawings accordingly.",
      },
      {
        q: "Have you delivered homes in Lohegaon itself?",
        a: "Yes—including a full 3 BHK home interior at Rohan Abhilasha. Lohegaon sits minutes from our Wagholi studio, so site supervision visits happen more often, not less.",
      },
      {
        q: "What warranty do you give on interiors in Lohegaon?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover, which matters more than usual here given how often defence and airline families are posted elsewhere mid-tenure.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry—all named on the quotation.",
      },
      {
        q: "We travel constantly—can decisions be made remotely?",
        a: "Yes, and a good share of our Lohegaon clients work this way. Material samples are photographed under your own lighting, drawings are shared for approval, and weekly site photos come on WhatsApp so you can stay across the project from another city.",
      },
      {
        q: "Do you subcontract the work?",
        a: "No—design, carpentry and painting are done by our own in-house team, which is the main reason we can commit to tighter timelines here without quality slipping.",
      },
      {
        q: "How long does a Lohegaon flat interior take?",
        a: "10–16 weeks for a full 2–3 BHK turnkey home once civil work is released. Scoped packages—painting plus select furniture—can move considerably faster, which is usually the right answer if you have a posting date to work around.",
      },
    ],
    metaDescription:
      `Home interior design in Lohegaon, Pune — 2 & 3 BHK interiors from ₹4.5 lakh, scoped to your move-in date. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free visit.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Lohegaon",
        body: "Lohegaon has a distinctive client mix: defence families in the enclaves, airline and airport staff, and professionals connected to DY Patil Knowledge City. What they share is travel-heavy lives and, frequently, a fixed date—a posting, a transfer, a move-in window—that the project has to respect.",
      },
      {
        heading: "What they ask for first",
        body: "Bedrooms, more often than anywhere else we work. Sleep quality genuinely matters near flight routes, so blackout provision, glazing seals and headboard walls come up in the first conversation rather than as an afterthought. Low-maintenance finishes are the second ask, because homes here are often left closed for stretches.",
      },
      {
        heading: "Budget expectations",
        body: "Timelines drive the budget conversation here more than finish grade does. Clients frequently want to know what can realistically be completed before a move-in date, and which parts are better deferred. We would rather scope honestly to the date than promise a full turnkey home we cannot deliver on time.",
      },
    ],
    homeTypes: [
      {
        title: "Defence enclave homes",
        body: "Practical, durable interiors for families who may be posted on—built to hand over cleanly and hold up without constant upkeep.",
      },
      {
        title: "Mid-rise apartments along airport road",
        body: "Complete 2 and 3 BHK interiors with acoustics and blackout planned into the bedrooms rather than solved later with curtains alone.",
      },
      {
        title: "Independent floors",
        body: "Whole-floor plans where storage, utility zoning and a consistent palette across rooms carry more weight than any single feature.",
      },
      {
        title: "Quick-turnaround packages",
        body: "Painting plus select furniture, scoped to a fixed move-in or posting date, with an honest view of what fits the window.",
      },
      {
        title: "Compact plan optimisation",
        body: "Efficient kitchens and storage-max wardrobes for smaller layouts, sized to the plan you actually have.",
      },
      {
        title: "Work-from-home corners",
        body: "Desk zones planned so afternoon sun does not glare on screens—a specific and recurring problem in west-facing Lohegaon rooms.",
      },
    ],
    siteRealities: [
      "Flight paths are a real design input here—we plan glazing upgrades where possible, heavy drapes, and AC grill placement that avoids rattle.",
      "Lohegaon is minutes from our Wagholi studio, so supervision visits are more frequent than for most areas we serve.",
      "Clients are often travelling or posted elsewhere mid-project, so we run approvals and weekly updates remotely by design, not as an exception.",
      "Postings and transfers mean fixed dates are common; we scope to the date honestly rather than starting work we know will overrun it.",
      "Structural changes route through your engineer—we handle minor civil tweaks in-house and coordinate drawings for anything beyond that.",
    ],
  },
  magarpatta: {
    areaLabel: "Magarpatta",
    headline: "Magarpatta interiors—township discipline, gallery-level finishes",
    subhead:
      "Inside Pune’s planned township, homes are well-lit but often similar in shell—we differentiate with joinery rhythm, texture, and lighting scenes that feel personal, not template.",
    intro: [
      "We know society workflows in Magarpatta: material passes, time slots, and noise etiquette. Our foremen brief teams daily so your neighbours stay comfortable.",
      "Destinations like Seasons Mall and Amanora are minutes away—many clients want entry sequences that feel hotel-calm after busy weekends.",
      "The design problem specific to Magarpatta is repetition. The township is well-planned and the shells are genuinely good, but a few thousand homes share a handful of layouts, and the standard response—identical modular packages sold on a per-square-foot rate—produces flats that look like each other too. Since the layout is the one thing you cannot change, differentiation has to come from joinery proportions, material texture and how the lighting is layered. That is slower to design than picking a package, and it is the reason a Magarpatta home either feels considered or feels catalogue-ordered.",
    ],
    landmarks:
      "Magarpatta City main circle, Seasons Mall, Amanora Town Centre, corporate parks inside the township, Hadapsar GLIDE path.",
    neighborhoods:
      "Apartments across Cosmos, Roystonea, and Iris towers; villas and duplex pockets within the township ring.",
    servicesBlurb:
      "Full interiors, island kitchens where slabs allow, ceiling layers for open plans, feature walls, and bespoke wardrobes sized to Magarpatta’s typical floor plates.",
    localFaq: [
      {
        q: "Society asks for deposits and IDs—do you provide?",
        a: "We furnish vendor passes, insurance summaries, and supervisor IDs as per your MC checklist.",
      },
      {
        q: "Can we keep Scandinavian minimal with Indian storage needs?",
        a: "Yes—minimal looks need smarter volumes. We hide depth behind flush panels and use internal organisers.",
      },
      {
        q: "Do you design home offices for hybrid work?",
        a: "We plan acoustic panels, task lighting, and cable paths so your background reads professional on calls.",
      },
      {
        q: "Do you also cover Amanora and Hadapsar?",
        a: "Yes—Magarpatta, Amanora, and Hadapsar sit on the same daily service loop for us. Recent work includes a 3 BHK interior refresh at Amanora Neo Towers with geometric wallpaper and brass trims.",
      },
      {
        q: "What warranty do you give on interiors in Magarpatta?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover alongside the vendor paperwork your society already requires.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry—each named on the quotation rather than described as 'premium'.",
      },
      {
        q: "How long does a Magarpatta flat interior take?",
        a: "10–16 weeks for a 2–3 BHK turnkey home once civil work is released. Township material-pass windows and lift slots are factored into that number rather than discovered later.",
      },
      {
        q: "Do you subcontract the work?",
        a: "No—design, carpentry and painting are handled by our own in-house team, which also means fewer unfamiliar faces going through your society's gate process.",
      },
      {
        q: "Our tower's layout is identical to hundreds of others—can it still feel personal?",
        a: "That is most of the design brief in Magarpatta. Identical shells respond well to joinery rhythm, texture and lighting scenes rather than layout changes—which is fortunate, because the layout is usually the one thing you cannot alter.",
      },
    ],
    metaDescription:
      `Home interior design in Magarpatta, Pune — township flats and villas, 2 & 3 BHK from ₹4.5 lakh. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site visit.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Magarpatta",
        body: "Township residents, largely: corporate professionals working in the parks inside Magarpatta, hybrid workers who need the home to function as an office several days a week, and families who have been in the township long enough to want their flat to stop looking like every other flat in the tower.",
      },
      {
        heading: "What they ask for first",
        body: "Differentiation. Magarpatta shells are well-built and well-lit but highly repetitive, so the first conversation is usually about how to make an identical layout feel personal. After that it is storage that stays visually quiet, and a home-office setup that reads professional on video calls.",
      },
      {
        heading: "Budget expectations",
        body: "Magarpatta clients tend to be well-researched and comfortable spending on quality, but sceptical of vague 'premium' language—reasonably so. We name brands and grades on the quotation line by line, so 'premium' means something specific you can check rather than a word in a brochure.",
      },
    ],
    homeTypes: [
      {
        title: "Cosmos, Roystonea and Iris tower flats",
        body: "The core Magarpatta brief—complete interiors sized to the township's standard floor plates, which our team has worked with repeatedly.",
      },
      {
        title: "Duplexes and villas in the township ring",
        body: "Multi-level homes where circulation, storage placement and a consistent palette across floors matter more than any single room.",
      },
      {
        title: "Identical-shell differentiation",
        body: "Joinery rhythm, texture and lighting scenes that make a repeated layout feel specific to you—without touching the structure.",
      },
      {
        title: "Hybrid-work homes",
        body: "Acoustic treatment, task lighting and cable management planned into the room, so the office does not look bolted on.",
      },
      {
        title: "Island kitchens where the slab allows",
        body: "Open-plan kitchens engineered against the actual services and slab, not a showroom rendering that ignores both.",
      },
      {
        title: "Interior refreshes",
        body: "Wallpaper, feature walls, lighting and trims for homes that need updating rather than rebuilding—common across the older township towers.",
      },
    ],
    siteRealities: [
      "Magarpatta societies run tight vendor processes—we furnish passes, insurance summaries and supervisor IDs against your MC checklist as standard.",
      "Material passes and lift slots are time-boxed here; our foremen book them and brief teams daily so your neighbours are not the ones absorbing the disruption.",
      "Noise etiquette is enforced more strictly inside the township than in most Pune areas—we sequence dust-heavy and noisy work accordingly.",
      "Because floor plates repeat across towers, we often already have drawings for a layout like yours—which shortens the design stage rather than the quality of it.",
    ],
  },
  kesnand: {
    areaLabel: "Kesnand",
    headline: "Kesnand & east Pune—thoughtful interiors for newer homes",
    subhead:
      "As east Pune opens up with plotted schemes and mid-rise clusters, families want interiors that grow with them—flex rooms, durable finishes, and kitchens ready for festival cooking.",
    intro: [
      "Kesnand’s open plots and newer towers often mean we start from a blank shell—ideal for routing services before slabs get crowded. We mark civil, electrical, and HVAC together.",
      "If you commute toward Wagholi or Hadapsar, we batch decisions on weekends and share 3D updates online to keep momentum.",
      "The advantage of building in an area that is still filling out is that you are rarely inheriting someone else's compromises. On a bare shell, we can put power where the furniture will actually go, run plumbing for the kitchen you want rather than the one the builder assumed, and set ceiling heights against the lighting plan instead of working around a slab that is already closed. Almost none of that is possible—or affordable—once a home is finished. It is the main reason we would rather be brought in during the shell stage in Kesnand than after handover.",
    ],
    landmarks:
      "Kesnand village routes toward Hadapsar, connections to Wagholi, orchards and open plots, emerging residential pockets east of the city.",
    neighborhoods:
      "New plotted layouts, row-house schemes, and apartments along connectors toward Wagholi.",
    servicesBlurb:
      "Shell-to-finish interiors, outdoor-adjacent finishes for garden-facing rooms, modular kitchens with tall storage, POP ceilings, textured paints, and custom beds with lift storage.",
    localFaq: [
      {
        q: "We are on a plotted home with high ceilings—any extra cost?",
        a: "Volume changes material quantities for paint and false ceiling. We measure slab heights early and reflect that in the BOQ.",
      },
      {
        q: "Can you help choose façade colours that suit the lane?",
        a: "We coordinate exterior palettes with interior wood tones so the home feels coherent inside-out.",
      },
      {
        q: "Water supply can be irregular—does that affect work?",
        a: "We sequence curing and cleaning around availability and communicate realistic day plans.",
      },
      {
        q: "What does finishing a bare-shell Kesnand home cost?",
        a: "Shell homes are where line-wise quotations matter most—civil, electrical, ceilings, and finishes each get their own numbers, so you decide what happens now and what waits. The site visit and estimate are free, and Kesnand is ten minutes from our Wagholi studio.",
      },
      {
        q: "What warranty do you give on interiors in Kesnand?",
        a: "5 years on the furniture and cabinetry we build, and 2 years on painting work—both documented at handover. On a bare-shell home this matters more than usual, because almost everything in the house is new work rather than inherited.",
      },
      {
        q: "Which brands and materials do you use?",
        a: "Asian Paints (including Royale Play), Dulux Velvet Touch, Nerolac Impressions and Berger for finishes, Dr. Fixit for waterproofing, and branded ply with soft-close hardware for cabinetry—every brand named on the quotation.",
      },
      {
        q: "How long does finishing a Kesnand home take?",
        a: "A bare shell takes longer than a possession-ready flat because civil, electrical and ceiling work all happen before finishes begin. We give a staged plan by phase rather than a single date, so you can see what is happening when.",
      },
      {
        q: "Do you subcontract the work?",
        a: "No—design, carpentry and painting are done by our own in-house team, which matters more on shell homes where the trades have to hand over to each other cleanly.",
      },
      {
        q: "We are still deciding the layout—can you get involved that early?",
        a: "Ideally, yes. Kesnand is one of the few areas where we are often involved before slabs and services are locked, and that is the cheapest moment to fix a layout problem. Marking civil, electrical and HVAC together at this stage avoids the retrofits that make finished homes expensive to change.",
      },
    ],
    metaDescription:
      `Home interior design in Kesnand & east Pune — plotted homes and new flats from ₹4.5 lakh. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ Google reviews. Free site visit.`,
    buyerProfile: [
      {
        heading: "Who we usually design for in Kesnand",
        body: "Kesnand attracts families buying more space than the same budget would get closer in—plotted homes, row houses and mid-rise flats in newer clusters. Many are first movers into a pocket that is still filling out, and a good number are finishing a bare shell rather than a possession-ready flat.",
      },
      {
        heading: "What they ask for first",
        body: "Kitchens built for real festival-scale cooking, and storage that will still make sense as the family grows. Because homes here are larger, the second recurring ask is flexibility—a room that works as a study now and a bedroom later, rather than being locked to one use on day one.",
      },
      {
        heading: "Budget expectations",
        body: "Shell homes are where a lump-sum quotation is most misleading, because civil, electrical, ceilings and finishes are genuinely separate bodies of work with different timings. Our line-wise quotation lets you sequence them—get the structure and services right first, then finish rooms as budget allows, without redoing anything.",
      },
    ],
    homeTypes: [
      {
        title: "Bare-shell plotted homes",
        body: "The signature Kesnand brief. We mark civil, electrical and HVAC together before slabs get crowded—the cheapest point to get services right.",
      },
      {
        title: "Row houses",
        body: "Multi-level homes where staircase storage, utility zoning and a palette that carries across floors do more work than any feature wall.",
      },
      {
        title: "High-ceiling homes",
        body: "Volume changes paint and false-ceiling quantities materially, so we measure slab heights early and reflect that honestly in the quotation.",
      },
      {
        title: "Garden-facing rooms",
        body: "Finishes chosen for indoor-outdoor edges—durable surfaces near garden doors and palettes that hold up to strong natural light.",
      },
      {
        title: "Apartments along Wagholi connectors",
        body: "Standard 2 and 3 BHK turnkey interiors for the mid-rise clusters filling in between Kesnand and Wagholi.",
      },
      {
        title: "Homes designed to grow",
        body: "Flex rooms and storage planned for a family five years from now, not just the one moving in this month.",
      },
    ],
    siteRealities: [
      "Bare shells let us route services before slabs get crowded—a genuine advantage over retrofitting a finished flat, if we are involved early enough.",
      "Higher ceilings on plotted homes change paint and ceiling quantities, so we measure slab heights before quoting rather than assuming standard flat heights.",
      "Water supply can be irregular in parts of Kesnand; we sequence curing and cleaning around availability and share realistic day plans.",
      "The commute means most clients prefer batched weekend decisions and 3D updates shared online—we plan the approval rhythm around that rather than expecting weekday site visits.",
      "Kesnand is roughly ten minutes from our Wagholi studio, so supervision here is closer than the location suggests.",
    ],
  },
};
