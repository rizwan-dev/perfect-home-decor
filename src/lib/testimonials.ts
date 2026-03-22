export type Testimonial = {
  id: string;
  name: string;
  area: string;
  text: string;
  role: string;
  /** Short label for the type of work (SEO + scanability). */
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "full-home-kharadi",
    name: "Priya & Arjun M.",
    area: "Kharadi",
    service: "Full home interior",
    role: "3 BHK turnkey, new possession",
    text: "From layout to final styling, one team handled civil touch-ups, modular kitchen, wardrobes, and paint. The BOQ matched what we signed off—no surprise ‘extras’ a week before handover.",
  },
  {
    id: "painting-wagholi",
    name: "Rahul T.",
    area: "Wagholi",
    service: "Wall painting",
    role: "Full flat repaint before move-in",
    text: "We needed the whole 2 BHK painted on a tight window before the packers arrived. They sequenced rooms, used low-odour products, and the edges along skirting and wardrobes are razor clean.",
  },
  {
    id: "kitchen-magarpatta",
    name: "Kavita N.",
    area: "Magarpatta",
    service: "Modular kitchen",
    role: "Parallel kitchen upgrade only",
    text: "We kept the rest of the flat as-is and only redid the kitchen. Ducting for the chimney, quartz top, and corner carcass depth were thought through—we are not losing storage to pipe columns anymore.",
  },
  {
    id: "ceiling-viman",
    name: "Amit K.",
    area: "Viman Nagar",
    service: "False ceiling & lighting",
    role: "Living–dining cove & spots",
    text: "The ceiling hides all the wiring for our lights and AC grills but the room still feels tall. Dimming works as promised—no buzz or patchy corners.",
  },
  {
    id: "wardrobe-lohegaon",
    name: "Sneha D.",
    area: "Lohegaon",
    service: "Custom furniture",
    role: "Master wardrobe + TV wall",
    text: "Odd beams in our resale flat made off-the-shelf wardrobes impossible. They templated on site and the TV unit finally has a proper cable chase—no spaghetti behind the console.",
  },
  {
    id: "commercial-kharadi",
    name: "Neha S.",
    area: "Kharadi",
    service: "Commercial interior",
    role: "Small office + reception",
    text: "We fitted out a compact IT office with open desks, a meeting nook, and a presentable reception. Landlord approvals and working-hour limits were respected—we opened on the date we announced to the team.",
  },
  {
    id: "turnkey-wagholi",
    name: "Vikram P.",
    area: "Wagholi",
    service: "Full home interior",
    role: "2 BHK, society handover",
    text: "Society MC forms and lift protection were sorted without us running pillar to post. Snag list was closed properly before we shifted—kids’ rooms were dust-free enough to sleep in the same night.",
  },
  {
    id: "duplex-magarpatta",
    name: "Rohit & Meera S.",
    area: "Magarpatta",
    service: "Full home interior",
    role: "Duplex, township",
    text: "Scale of a duplex can get messy fast; here milestones were clear. The staircase wall treatment and double-height ceiling lighting were coordinated so we were not redoing paint after electrical tweaks.",
  },
];
