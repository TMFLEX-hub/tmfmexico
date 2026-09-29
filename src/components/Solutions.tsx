import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const solutions = [
  {
    href: "/electrico",
    title: "TMF Eléctrico",
    image: "/images/electrico.jpg",
    imageAlt: "Tubería flexible corrugada para instalaciones eléctricas",
    icon: "mdi:lightning-bolt",
    description:
      "Tubería flexible, conectores y accesorios para instalaciones eléctricas seguras, confiables y eficientes.",
    cta: "Conoce TMF Eléctrico",
  },
  {
    href: "/industrial",
    title: "TMF Industrial",
    image: "/images/industrial.jpg",
    imageAlt: "Mangueras metálicas flexibles y ensambles industriales",
    icon: "mdi:factory",
    description:
      "Mangueras metálicas flexibles, ensambles y soluciones especializadas para aplicaciones industriales de alta exigencia.",
    cta: "Conoce TMF Industrial",
  },
];

export function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative isolate overflow-hidden px-5 pt-20 pb-12 sm:px-8 md:pb-28 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="subheading text-sm tracking-[0.14em] text-primary">
          Una misma experiencia en flexibilidad
        </p>
        <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          Soluciones para diferentes industrias y aplicaciones.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
          Nuestro portafolio integra soluciones para instalaciones eléctricas y
          aplicaciones industriales, desarrolladas con el conocimiento técnico y
          la experiencia de más de seis décadas.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200vh] w-[200vw] -translate-x-1/2 bg-primary"
        />

        {solutions.map((solution) => (
          <article key={solution.href} className="relative z-10 flex flex-col bg-white">
            <div className="relative aspect-2/1 w-full bg-white">
              <Image
                src={solution.image}
                alt={solution.imageAlt}
                fill
                className="object-contain p-6"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col px-8 pt-2 pb-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-washed text-primary">
                <Icon icon={solution.icon} className="size-5" />
              </span>
              <h3 className="heading mt-5 text-2xl tracking-tight text-foreground uppercase">
                {solution.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-7 text-foreground/70">
                {solution.description}
              </p>
              <div className="mt-8">
                <Button href={solution.href} variant="inverse">
                  {solution.cta}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
