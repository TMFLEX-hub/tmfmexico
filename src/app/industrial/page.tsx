import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "TMF Industrial",
  description:
    "Mangueras metálicas flexibles, ensambles y soluciones especializadas TMF para aplicaciones industriales de alta exigencia. Fabricado en México.",
  path: "/industrial",
});

export default function IndustrialPage() {
  return <PageHeading title="TMF Industrial" />;
}
