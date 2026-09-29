import type { Metadata } from "next";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Downloads } from "@/components/Downloads";
import { Header } from "@/components/Header";
import { KeyPoints } from "@/components/KeyPoints";
import { ProductCategories } from "@/components/ProductCategories";

export const metadata: Metadata = {
  title: "TMF Eléctrico | TMF Mexico",
  description:
    "Soluciones flexibles para instalaciones eléctricas. Tubería flexible, conduit, conectores y accesorios fabricados en México.",
};

export default function ElectricoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Header
        eyebrow="TMF Eléctrico"
        title="Soluciones flexibles para instalaciones eléctricas."
        description="Desarrollamos y fabricamos soluciones completas de canalización eléctrica y soportería para instalaciones domésticas, comerciales e industrias, en presentaciones adaptadas a diversos canales de distribución. Nuestro portafolio integra tubería flexible, conduit, conectores y accesorios."
        ctaLabel="Conoce nuestros productos"
        ctaHref="#productos"
        imageSrc="/images/electrico/hero.jpg"
        imageAlt="Tubería conduit flexible metálica TMF"
        imageFit="contain"
        priority
      />
      <ProductCategories />
      <KeyPoints />
      <Downloads />
      <Coverage
        eyebrow="Cobertura TMF"
        title="Encuentra TMF cerca de ti."
        description="Consulta nuestras sucursales y encuentra atención, disponibilidad de producto y soporte para tus necesidades de canalización eléctrica."
        ctaLabel="Encuentra tu sucursal"
        ctaHref="/sucursales"
      />
      <Certifications />
      <Contact />
    </main>
  );
}
