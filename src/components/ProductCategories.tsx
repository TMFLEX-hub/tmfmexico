import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { electricoCategories } from "@/data/electrico";

export function ProductCategories() {
  return (
    <section
      id="productos"
      className="relative isolate overflow-hidden bg-white px-5 pt-20 pb-12 sm:px-8 md:pb-28 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="subheading text-sm tracking-[0.14em] text-primary">
            Nuestros productos
          </p>
        </Reveal>
        <Reveal delay={180}>
          <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Soluciones para cada instalación.
          </h2>
        </Reveal>
        <Reveal delay={360}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            Un portafolio en constante evolución que integra diferentes tipos de
            tubería flexible, conduit, conectores y accesorios para responder a
            las necesidades de cada instalación.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-[90rem] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200vh] w-[200vw] -translate-x-1/2 bg-primary"
        />

        {electricoCategories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/electrico/${category.slug}`}
            className="group relative z-10 flex h-full flex-col bg-white transition-shadow duration-700 hover:shadow-[0_24px_50px_-28px_rgba(0,157,228,0.55)]"
          >
            <Reveal
              delay={index * 120}
              className="relative aspect-square w-full overflow-hidden bg-white"
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                className="object-contain p-5 transition-transform duration-1000 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
            <div className="mt-auto flex items-end justify-between gap-3 px-5 pt-1 pb-6">
              <div>
                <Reveal delay={80 + index * 120}>
                  <h3 className="heading text-lg tracking-tight text-foreground">
                    {category.title}
                  </h3>
                </Reveal>
                <Reveal delay={180 + index * 120}>
                  <p className="mt-1 text-sm leading-6 text-foreground/60">
                    {category.description}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={220 + index * 120}>
                <Icon
                  icon="mdi:arrow-right"
                  aria-hidden
                  className="mb-0.5 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </Reveal>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
