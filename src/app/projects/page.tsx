import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { COMPANY, SITE_URL } from "@/lib/site";
import { projects } from "@/lib/projects-data";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Interior design projects in Pune",
  description: `Browse featured deliveries in Kharadi, Lohegaon, Magarpatta & more—full homes, kitchens, ceilings, painting, and custom furniture by ${COMPANY.name}.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    url: `${SITE_URL}/projects`,
    title: `Projects | ${COMPANY.name}`,
  },
};

export default function ProjectsPage() {
  return (
    <>
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
