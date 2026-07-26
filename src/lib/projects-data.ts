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
    image: "/images/projects/living-room-marble-tv-unit.jpg",
    alt: "Living room with marble-finish TV unit and wooden shelving delivered in Kharadi, Pune",
  },
  {
    id: "majestique-tower-kharadi",
    title: "2 BHK Home Interior, Majestique Towers, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/projects/living-room-false-ceiling.jpg",
    alt: "Living room with layered false ceiling, crockery unit and wooden entrance door in Kharadi apartment",
  },
  {
    id: "rohan-abhilasha-lohegaon",
    title: "3 BHK Home Interior, Rohan Abhilasha, Lohegaon",
    service: "interior-design",
    area: "Lohegaon",
    image: "/images/projects/living-room-tv-unit-curtains.jpg",
    alt: "Living room interior with marble TV panel and sheer curtains in Lohegaon home",
  },
  {
    id: "nyati-evita-wagholi",
    title: "3 BHK Home Interior, Nyati Evita, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/bedroom-wardrobes-curtains.jpg",
    alt: "Bedroom wardrobe wall with cove lighting and textured laminate finish in Wagholi flat",
  },
  {
    id: "ivy-state-wagholi",
    title: "3 BHK Home Interior Design, Ivy State, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/living-room-clock-wall.jpg",
    alt: "Living and passage interior with navy feature wall and ceiling detail in Wagholi home",
  },
  {
    id: "nyati-elan-wagholi",
    title: "3 BHK Home Interior, Nyati Elan, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/bedroom-led-ceiling-blue-wall.jpg",
    alt: "Bedroom with LED profile ceiling lighting and royal blue accent wall in Wagholi",
  },
  {
    id: "konark-exotica-wagholi",
    title: "2 BHK Home Interior, Konark Exotica, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/bedroom-green-blinds.jpg",
    alt: "Bedroom with wall panelling, mirror unit and printed roman blinds in Wagholi apartment",
  },
  {
    id: "rohan-mithila-viman",
    title: "False Ceiling & Lighting, Rohan Mithila, Viman Nagar",
    service: "false-ceiling",
    area: "Viman Nagar",
    image: "/images/projects/ceiling-wooden-cove-wallpaper.jpg",
    alt: "Decorative wooden false ceiling with brass light and floral wallpaper in Viman Nagar home",
  },
  {
    id: "citron-wagholi-painting",
    title: "Full Home Painting Service, Citron, Wagholi",
    service: "home-painting",
    area: "Wagholi",
    image: "/images/projects/living-room-blue-accent.jpg",
    alt: "Freshly painted living room with deep blue accent wall and crisp white ceiling in Wagholi",
  },
  {
    id: "yashwant-enchante-kharadi",
    title: "3 BHK Home Interior Design, Yashwant Enchante, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/projects/wardrobe-sliding-dresser.jpg",
    alt: "Sliding wardrobe with dresser unit and pendant light in Kharadi residence",
  },
  {
    id: "gera-world-of-joy-kharadi",
    title: "3 BHK Home Interior Design, Gera World of Joy, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/projects/bedroom-hexagon-headboard.jpg",
    alt: "Master bedroom with upholstered hexagon headboard wall and wood panelling in Kharadi",
  },
  {
    id: "vtp-leonara-kharadi",
    title: "3 BHK Turnkey Interior, VTP Leonara, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/projects/living-room-tv-unit-fluted-panel.jpg",
    alt: "Living room media wall with marble panel, fluted panelling and warm curtains in Kharadi",
  },
  {
    id: "marvel-zephyr-kharadi",
    title: "Modular Kitchen & Home Interior, Marvel Zephyr, Kharadi",
    service: "modular-kitchen",
    area: "Kharadi",
    image: "/images/projects/kitchen-grey-white.jpg",
    alt: "Modular kitchen with granite platform, glossy grey-white cabinets and chimney in Kharadi",
  },
  {
    id: "kalpataru-jade-kharadi",
    title: "3 BHK Full Home Interior, Kalpataru Jade Residences, Kharadi",
    service: "interior-design",
    area: "Kharadi",
    image: "/images/projects/kitchen-platform-crockery.jpg",
    alt: "Kitchen platform with stainless finish and tiled dado in Kharadi apartment",
  },
  {
    id: "amanora-magarpatta",
    title: "3 BHK Interior Refresh, Amanora Neo Towers, Hadapsar",
    service: "interior-design",
    area: "Hadapsar",
    image: "/images/projects/bedroom-wallpaper-geometric.jpg",
    alt: "Bedroom refresh with geometric marble-effect wallpaper and brass trims near Magarpatta",
  },
  {
    id: "mansha-wagholi",
    title: "3 BHK Turnkey Interior, Mansha, Wagholi",
    service: "interior-design",
    area: "Wagholi",
    image: "/images/projects/bedroom-led-ceiling-wardrobe.jpg",
    alt: "Bedroom with recessed ceiling light profile and blue sliding wardrobe in Wagholi home",
  },
  {
    id: "godrej-rivergreens-kharadi",
    title: "Custom Wardrobe & TV Unit, Godrej Rivergreens, Kharadi",
    service: "custom-furniture",
    area: "Kharadi",
    image: "/images/projects/wardrobe-loft-storage.jpg",
    alt: "Custom wardrobe with loft storage and backlit niche in Kharadi home",
  },
  {
    id: "office-interior-kharadi-it",
    title: "Office Interior Design — Open Workspace, Kharadi",
    service: "commercial-interior-design",
    area: "Kharadi",
    image:
      "/images/stock/office-open-workspace.jpg",
    alt: "Modern open-plan office with desks and natural light",
  },
  {
    id: "retail-showroom-viman",
    title: "Shop & Showroom Interior, Viman Nagar",
    service: "commercial-interior-design",
    area: "Viman Nagar",
    image:
      "/images/stock/retail-showroom.jpg",
    alt: "Retail interior with display shelving and warm lighting",
  },
];
