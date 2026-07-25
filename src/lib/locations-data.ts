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
};

export const locationContent: Record<AreaSlug, LocationPageContent> = {
  kharadi: {
    areaLabel: "Kharadi",
    headline: "Interior designer in Kharadi for premium apartments & row homes",
    subhead:
      "World Trade Center proximity, EON IT corridor, and riverside towers—Kharadi homes deserve finishes that match the skyline. We design calm, contemporary interiors that handle rental upgrades and end-user luxury alike.",
    intro: [
      "Kharadi’s mix of compact high-rises and larger river-facing units needs layouts that maximise storage without crowding glazing. We plan services around balconies, dry zones, and the way Pune’s easterly sun moves across your living room.",
      "Whether you are near Panchshil Towers, Nyati Era, or the lanes around Fountain Road, our site teams are used to society norms, lift timings, and material movement—so execution stays predictable.",
    ],
    landmarks:
      "World Trade Center, EON Free Zone, Reliance Mart Kharadi, Columbia Asia Hospital, Amanora Mall corridor, riverside societies along Fountain Road.",
    neighborhoods:
      "Towers near EON IT Park, Panchshil, Nyati, and premium societies toward Mundhwa bridge.",
    servicesBlurb:
      "Full home interiors, modular kitchens tuned for compact galley plans, false ceilings with cove lighting for open layouts, painting packages for handover refreshes, and custom TV units for media walls facing city views.",
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
    ],
    metaDescription:
      "Premium interior design in Kharadi, Pune—modular kitchens, false ceilings, painting, and custom furniture. Local site experience near EON & WTC. Book a free consultation.",
  },
  wagholi: {
    areaLabel: "Wagholi",
    headline: "Home interiors & painting in Wagholi—designed for growing neighbourhoods",
    subhead:
      "From new launches along the airport road to quieter lanes toward Kesnand, Wagholi buyers often want warm, durable homes without showroom clichés. We bring disciplined drawings and transparent BOQs.",
    intro: [
      "Wagholi’s rapid development means many families move in while infrastructure still matures—we choose finishes that forgive dust, and lighting plans that keep interiors cheerful on overcast days.",
      "If you are near Lifeline Hospital, Wagholi chowk, or the NH753F corridor, we plan site visits that respect commute realities and batch decisions to save your time.",
    ],
    landmarks:
      "Lifeline Hospital, Wagholi chowk, schools along Nagar Road, retail on NH753F, connections toward Lohegaon airport.",
    neighborhoods:
      "New townships and mid-rise communities along Nagar Road and internal sectors toward Kesnand.",
    servicesBlurb:
      "Turnkey interiors for fresh possessions, budget-smart modular kitchens, kids’ rooms with growth-friendly storage, POP ceilings with neat coves, and full-home painting with low-odour options.",
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
    ],
    metaDescription:
      "Interior designer & home painting in Wagholi, Pune. Modular kitchens, false ceilings, custom furniture. Practical finishes for new apartments. Free site visit.",
  },
  "viman-nagar": {
    areaLabel: "Viman Nagar",
    headline: "Interior designer in Viman Nagar—airport-close homes with refined detailing",
    subhead:
      "Leafy avenues, older bungalows, and modern apartments near the airport—Viman Nagar calls for tailored interiors that respect legacy trees, odd beams, and tight parking logistics.",
    intro: [
      "We regularly work around retrofit challenges: shifted columns, heritage floor patterns, and rental conversions that still need a premium guest-facing living room.",
      "Phoenix Marketcity and Symbiosis hubs mean many clients want home offices that mute street sound and video-call well—lighting and backdrop detailing matter.",
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
    ],
    metaDescription:
      "Interior design in Viman Nagar, Pune—renovations, modular kitchens, false ceilings, painting. Airport-area experience. Book a consultation.",
  },
  lohegaon: {
    areaLabel: "Lohegaon",
    headline: "Interiors near Lohegaon airport—quiet homes, crisp execution",
    subhead:
      "Defence enclaves, mid-rise apartments, and independent floors—Lohegaon clients want sound-aware layouts and finishes that stay fresh with travel-heavy lifestyles.",
    intro: [
      "We factor flight paths into glazing and bedroom blackout needs, and we plan WFH corners that do not glare on screens when afternoon sun hits.",
      "Proximity to DY Patil Knowledge City and airport staff housing means quick turnarounds matter—we protect timelines with factory-ready modular and staged painting.",
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
    ],
    metaDescription:
      "Interior designer in Lohegaon, Pune—kitchens, ceilings, painting, custom furniture. Airport-area homes. Call for a free consultation.",
  },
  magarpatta: {
    areaLabel: "Magarpatta",
    headline: "Magarpatta interiors—township discipline, gallery-level finishes",
    subhead:
      "Inside Pune’s planned township, homes are well-lit but often similar in shell—we differentiate with joinery rhythm, texture, and lighting scenes that feel personal, not template.",
    intro: [
      "We know society workflows in Magarpatta: material passes, time slots, and noise etiquette. Our foremen brief teams daily so your neighbours stay comfortable.",
      "Destinations like Seasons Mall and Amanora are minutes away—many clients want entry sequences that feel hotel-calm after busy weekends.",
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
    ],
    metaDescription:
      "Interior designer in Magarpatta, Pune—premium modular kitchens, false ceilings, painting, custom furniture. Township-ready execution. Free consult.",
  },
  kesnand: {
    areaLabel: "Kesnand",
    headline: "Kesnand & east Pune—thoughtful interiors for newer homes",
    subhead:
      "As east Pune opens up with plotted schemes and mid-rise clusters, families want interiors that grow with them—flex rooms, durable finishes, and kitchens ready for festival cooking.",
    intro: [
      "Kesnand’s open plots and newer towers often mean we start from a blank shell—ideal for routing services before slabs get crowded. We mark civil, electrical, and HVAC together.",
      "If you commute toward Wagholi or Hadapsar, we batch decisions on weekends and share 3D updates online to keep momentum.",
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
    ],
    metaDescription:
      "Interior design in Kesnand & east Pune—modular kitchen, false ceiling, painting, custom furniture. New homes & plots. Book a free consultation.",
  },
};
