import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { COMPANY, SITE_URL } from "@/lib/site";
import { OG_IMAGE, ogImages } from "@/lib/og-image";
import { projects } from "@/lib/projects-data";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Interior design projects in Pune",
  description: `Browse featured deliveries in Kharadi, Lohegaon, Magarpatta & more—full homes, kitchens, ceilings, painting, and custom furniture by ${COMPANY.name}.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    url: `${SITE_URL}/projects`,
    title: `Projects | ${COMPANY.name}`,
    images: ogImages(
      OG_IMAGE.interiors,
      `Completed interior projects by ${COMPANY.name} across Pune`,
    ),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Interior design projects in Pune — ${COMPANY.name}`,
          numberOfItems: projects.length,
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            image: p.image.startsWith("/") ? `${SITE_URL}${p.image}` : p.image,
          })),
        }}
      />
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Deliveries across Pune’s premium societies"
            description="From Forest County and Gera World of Joy to VTP Leonara and Marvel Zephyr—filter by discipline to see how we execute kitchens, ceilings, paint, furniture, and full-home turnkey scopes."
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ProjectsGrid projects={projects} />
      </section>
      <CTASection />
    </>
  );
}
