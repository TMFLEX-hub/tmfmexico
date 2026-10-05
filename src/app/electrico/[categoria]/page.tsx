import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { electricoCategories } from "@/data/electrico";
import { buildPageMetadata, getSiteUrl } from "@/lib/seo";

type Props = PageProps<"/electrico/[categoria]">;

export async function generateStaticParams() {
  return electricoCategories.map((category) => ({
    categoria: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = electricoCategories.find((item) => item.slug === categoria);

  if (!category) {
    return { title: "TMF Eléctrico", robots: { index: false } };
  }

  return buildPageMetadata({
    title: `${category.title} | TMF Eléctrico`,
    description: category.seoDescription,
    path: `/electrico/${category.slug}`,
    image: category.image,
    imageAlt: category.imageAlt,
    absoluteTitle: true,
  });
}

export default async function ElectricoCategoryPage({ params }: Props) {
  const { categoria } = await params;
  const category = electricoCategories.find((item) => item.slug === categoria);

  if (!category) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/electrico/${category.slug}`;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.title,
          description: category.seoDescription,
          url,
          image: `${siteUrl}${category.image}`,
          isPartOf: {
            "@type": "CollectionPage",
            name: "TMF Eléctrico",
            url: `${siteUrl}/electrico`,
          },
          about: {
            "@type": "Product",
            name: `${category.title} TMF Eléctrico`,
            description: category.seoDescription,
            image: `${siteUrl}${category.image}`,
            brand: {
              "@type": "Brand",
              name: "TMF",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Tubos Mexicanos Flexibles",
            },
          },
        }}
      />
      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-20">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal instant>
              <p className="subheading text-sm tracking-[0.14em] text-primary">
                TMF Eléctrico
              </p>
            </Reveal>
            <Reveal instant delay={180}>
              <h1 className="heading mt-4 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                {category.title}
              </h1>
            </Reveal>
            <Reveal instant delay={360}>
              <p className="mt-6 max-w-lg text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                {category.description} Consulta el catálogo para ver el
                portafolio completo de esta categoría, o habla con nuestro
                equipo para encontrar la solución adecuada a tu instalación.
              </p>
            </Reveal>
            <Reveal instant delay={540} className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/docs/catalogo-electrico.pdf"
                icon="mdi:download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar catálogo
              </Button>
            </Reveal>
          </div>

          <Reveal
            instant
            delay={220}
            variant="scale"
            className="relative aspect-square w-full bg-washed"
          >
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              className="object-contain p-8"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
