import type { ServiceSlug } from "./services-data";

export type ProjectItem = {
  id: string;
  title: string;
  service: ServiceSlug;
  area: string;
  image: string;
  alt: string;
};

/**
 * Projects delivered in or right next to a locality — Magarpatta and Hadapsar
 * are one service loop, so their landing pages share proof.
 */
export function projectsNearArea(areaLabel: string): ProjectItem[] {
  const neighbours: Record<string, string[]> = {
    Magarpatta: ["Magarpatta", "Hadapsar"],
    Hadapsar: ["Hadapsar", "Magarpatta"],
    Kesnand: ["Kesnand", "Wagholi"],
  };
  const match = neighbours[areaLabel] ?? [areaLabel];
  return projects.filter((p) => match.includes(p.area));
}

export const projects: ProjectItem[] = [
  {
    id: "forest-county-kharadi",
    title: "3 BHK Home Interior Design, Forest County, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-living-warm-sofa.jpg",
    alt: "Warm neutral living room with sofa and layered lighting — 3 BHK interior in Forest County, Kharadi",
  },
  {
    id: "majestique-tower-kharadi",
    title: "2 BHK Home Interior, Majestique Towers, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-living-open-plan.jpg",
    alt: "Open-plan living and dining interior in a compact 2 BHK, Majestique Towers, Kharadi",
  },
  {
    id: "rohan-abhilasha-lohegaon",
    title: "3 BHK Home Interior, Rohan Abhilasha, Lohegaon",
    service: "interior-design",
    area: "Lohegaon",
    image: "/images/stock/orig-living-warm-lit.jpg",
    alt: "Living and dining zone with warm layered lighting — 3 BHK interior, Rohan Abhilasha, Lohegaon",
  },
  {
    id: "nyati-evita-wagholi",
    title: "3 BHK Home Interior, Nyati Evita, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/stock/orig-wardrobe-glass.jpg",
    alt: "Wardrobe wall with glass and wood finishes — 3 BHK home interior, Nyati Evita, Wagholi",
  },
  {
    id: "ivy-state-wagholi",
    title: "3 BHK Home Interior Design, Ivy State, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/stock/orig-dining-ceiling.jpg",
    alt: "Living and dining interior with ceiling detail — 3 BHK, Ivy State, Wagholi",
  },
  {
    id: "nyati-elan-wagholi",
    title: "3 BHK Home Interior, Nyati Elan, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/real-led-ceiling-panelling.jpg",
    alt: "Delivered LED-strip false ceiling with cove lighting and panelled wall — 3 BHK, Nyati Elan, Wagholi",
  },
  {
    id: "konark-exotica-wagholi",
    title: "2 BHK Home Interior, Konark Exotica, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/real-marble-tv-unit-ceiling.jpg",
    alt: "Delivered living room with LED profile ceiling and marble TV unit — 2 BHK, Konark Exotica, Wagholi",
  },
  {
    id: "rohan-mithila-viman",
    title: "False Ceiling & Lighting, Rohan Mithila, Viman Nagar",
    service: "false-ceiling",
    area: "Viman Nagar",
    image: "/images/canva/bedroom-geometric-ceiling.jpg",
    alt: "Bedroom with geometric layered false ceiling and cove lighting — Rohan Mithila, Viman Nagar",
  },
  {
    id: "citron-wagholi-painting",
    title: "Full Home Painting Service, Citron, Wagholi",
    service: "home-painting",
    area: "Wagholi",
    image: "/images/stock/orig-painted-walls.jpg",
    alt: "Freshly painted interior walls with clean edges — full home painting, Citron, Wagholi",
  },
  {
    id: "yashwant-enchante-kharadi",
    title: "3 BHK Home Interior Design, Yashwant Enchante, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-hallway-open.jpg",
    alt: "Hallway and open-plan residential interior — 3 BHK, Yashwant Enchante, Kharadi",
  },
  {
    id: "gera-world-of-joy-kharadi",
    title: "3 BHK Home Interior Design, Gera World of Joy, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-bedroom-feature.jpg",
    alt: "Master bedroom with feature wall and fitted wardrobe — 3 BHK, Gera World of Joy, Kharadi",
  },
  {
    id: "vtp-leonara-kharadi",
    title: "3 BHK Turnkey Interior, VTP Leonara, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-living-media-wall.jpg",
    alt: "Living room with media wall and storage — 3 BHK turnkey, VTP Leonara, Kharadi",
  },
  {
    id: "marvel-zephyr-kharadi",
    title: "Modular Kitchen & Home Interior, Marvel Zephyr, Kharadi",
    service: "modular-kitchen",
    area: "Kharadi",
    image: "/images/stock/orig-kitchen-dark-wood.jpg",
    alt: "Modular kitchen with wood and dark cabinetry — Marvel Zephyr, Kharadi",
  },
  {
    id: "kalpataru-jade-kharadi",
    title: "3 BHK Full Home Interior, Kalpataru Jade Residences, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-kitchen-bright.jpg",
    alt: "Bright kitchen with breakfast counter — 3 BHK full home interior, Kalpataru Jade Residences, Kharadi",
  },
  {
    id: "amanora-magarpatta",
    title: "3 BHK Interior Refresh, Amanora Neo Towers, Hadapsar",
    service: "interior-design",
    area: "Hadapsar",
    image: "/images/stock/orig-kitchen-white.jpg",
    alt: "White modular kitchen and storage wall — 3 BHK interior refresh, Amanora Neo Towers, Hadapsar",
  },
  {
    id: "mansha-wagholi",
    title: "3 BHK Turnkey Interior, Mansha, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/real-geometric-wall-panel.jpg",
    alt: "Delivered geometric wall panelling with brass pendant lights — 3 BHK turnkey, Mansha, Wagholi",
  },
  {
    id: "godrej-rivergreens-kharadi",
    title: "Custom Wardrobe & TV Unit, Godrej Rivergreens, Kharadi",
    service: "custom-furniture",
    area: "Kharadi",
    image: "/images/stock/orig-furniture-shelving.jpg",
    alt: "Custom shelving and built-in storage with warm accents — Godrej Rivergreens, Kharadi",
  },
  {
    id: "office-interior-kharadi-it",
    title: "Office Interior Design — Open Workspace, Kharadi",
    service: "commercial-interior-design",
    area: "Kharadi",
    image: "/images/stock/orig-office-open.jpg",
    alt: "Modern open-plan office with desks and natural light — office interior, Kharadi",
  },
  {
    id: "retail-showroom-viman",
    title: "Shop & Showroom Interior, Viman Nagar",
    service: "commercial-interior-design",
    area: "Viman Nagar",
    image: "/images/stock/orig-retail-showroom.jpg",
    alt: "Retail interior with display shelving and warm lighting — showroom, Viman Nagar",
  },
];
