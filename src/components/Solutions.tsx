import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

const solutions = [
  {
    href: "/electrico",
    title: "TMF Eléctrico",
    image: "/images/electrico.png",
    imageAlt: "Tubería flexible corrugada para instalaciones eléctricas",
    icon: "mdi:lightning-bolt",
    description:
      "Tubería flexible, conectores y accesorios para instalaciones eléctricas seguras, confiables y eficientes.",
    cta: "Conoce TMF Eléctrico",
  },
  {
    href: "/industrial",
    title: "TMF Industrial",
    image: "/images/industrial.png",
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
        <Reveal>
          <p className="subheading text-sm tracking-[0.14em] text-primary">
            Una misma experiencia en flexibilidad
          </p>
        </Reveal>
        <Reveal delay={180}>
          <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Soluciones para diferentes industrias y aplicaciones.
          </h2>
        </Reveal>
        <Reveal delay={360}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            Nuestro portafolio integra soluciones para instalaciones eléctricas
            y aplicaciones industriales, desarrolladas con el conocimiento
            técnico y la experiencia de más de seis décadas.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200vh] w-[200vw] -translate-x-1/2 bg-primary"
        />

        {solutions.map((solution, index) => (
          <Link
            key={solution.href}
            href={solution.href}
            className="group relative z-10 flex h-full flex-col bg-white transition-shadow duration-700 hover:shadow-[0_24px_50px_-28px_rgba(0,157,228,0.55)]"
          >
            <Reveal delay={index * 160} className="relative aspect-2/1 w-full overflow-hidden bg-white">
              <Image
                src={solution.image}
                alt={solution.imageAlt}
                fill
                className="object-cover p-6 transition-transform duration-1000 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
            <div className="flex flex-1 flex-col px-8 pt-2 pb-8">
              <Reveal delay={80 + index * 160}>
                <span className="flex size-11 items-center justify-center rounded-full bg-washed text-primary transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  <Icon icon={solution.icon} className="size-5" />
                </span>
              </Reveal>
              <Reveal delay={180 + index * 160}>
                <h3 className="heading mt-5 text-2xl tracking-tight text-foreground uppercase">
                  {solution.title}
                </h3>
              </Reveal>
              <Reveal delay={320 + index * 160}>
                <p className="mt-3 max-w-md text-base leading-7 text-foreground/70">
                  {solution.description}
                </p>
              </Reveal>
              <Reveal delay={460 + index * 160} className="mt-auto pt-8">
                <Button as="span" variant="inverse">
                  {solution.cta}
                </Button>
              </Reveal>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
