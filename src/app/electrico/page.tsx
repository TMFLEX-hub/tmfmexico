import type { Metadata } from "next";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Downloads } from "@/components/Downloads";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { ProductCategories } from "@/components/ProductCategories";
import { electricoCategories } from "@/data/electrico";
import { buildPageMetadata, getSiteUrl } from "@/lib/seo";

const title = "TMF Eléctrico";
const description =
  "Soluciones flexibles para instalaciones eléctricas. Tubería flexible, conduit, conectores, soportes y cajas fabricados en México bajo normas NOM, NMX y UL.";
const image = "/images/electrico/hero-v3.jpg";
const imageAlt =
  "Instalación eléctrica con tubería flexible y cajas de conexión TMF en un edificio comercial";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/electrico",
  image,
  imageAlt,
});

export default function ElectricoPage() {
  const siteUrl = getSiteUrl();

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url: `${siteUrl}/electrico`,
          isPartOf: {
            "@type": "WebSite",
            name: "TMF México",
            url: siteUrl,
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: electricoCategories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category.title,
              url: `${siteUrl}/electrico/${category.slug}`,
            })),
          },
        }}
      />
      <Header
        eyebrow="TMF Eléctrico"
        title="Soluciones flexibles para instalaciones eléctricas."
        description="Desarrollamos y fabricamos soluciones completas de canalización eléctrica y soportería para instalaciones domésticas, comerciales e industrias, en presentaciones adaptadas a diversos canales de distribución. Nuestro portafolio integra tubería flexible, conduit, conectores y accesorios."
        ctaLabel="Conoce nuestros productos"
        ctaHref="#productos"
        imageSrc={image}
        imageAlt={imageAlt}
        imageFit="cover"
        priority
      />
      <ProductCategories />
      <KeyPoints />
      <Downloads />
      <Coverage
        eyebrow="Cobertura TMF"
        title="Encuentra TMF cerca de ti."
        description="Consulta nuestras sucursales y encuentra atención, disponibilidad de producto y soporte para tus necesidades de canalización eléctrica."
      />
      <Certifications />
      <Contact />
    </main>
  );
}
