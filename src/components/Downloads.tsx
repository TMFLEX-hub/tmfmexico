import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function Downloads() {
  return (
    <section
      id="descargables"
      className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28 xl:px-20"
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <Reveal>
            <p className="subheading text-sm tracking-[0.14em] text-primary">
              Información técnica
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              La información que necesitas, a tu alcance.
            </h2>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              Consulta catálogos, fichas técnicas y documentación para conocer
              las características, aplicaciones y especificaciones de nuestras
              soluciones de canalización eléctrica.
            </p>
          </Reveal>
          <Reveal delay={540} className="mt-10">
            <Button
              href="/docs/catalogo-electrico.pdf"
              icon="mdi:download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar
            </Button>
          </Reveal>
        </div>

        <Reveal delay={220} variant="scale">
          <div className="relative aspect-4/3 w-full bg-washed">
            <Image
              src="/images/electrico/generales-v2.jpg"
              alt="Herramientas y soluciones para canalización eléctrica TMF"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
