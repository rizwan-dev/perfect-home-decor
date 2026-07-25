import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: COMPANY.name,
    description: `${COMPANY.name} — home interiors, painting, false ceilings, modular kitchens & wallpaper in Pune.`,
    start_url: "/",
    display: "browser",
    background_color: "#f7f4ef",
    theme_color: "#1c1917",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
