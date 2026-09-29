import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { electricoCategories } from "@/data/electrico";

export function ProductCategories() {
  return (
    <section
      id="productos"
      className="relative isolate overflow-hidden bg-white px-5 pt-20 pb-12 sm:px-8 md:pb-28 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="subheading text-sm tracking-[0.14em] text-primary">
          Nuestros productos
        </p>
        <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          Soluciones para cada instalación.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
          Un portafolio en constante evolución que integra diferentes tipos de
          tubería flexible, conduit, conectores y accesorios para responder a
          las necesidades de cada instalación.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-[90rem] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200vh] w-[200vw] -translate-x-1/2 bg-primary"
        />

        {electricoCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/electrico/${category.slug}`}
            className="group relative z-10 flex flex-col bg-white"
          >
            <div className="relative aspect-square w-full bg-white">
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                className="object-contain p-5"
                sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="flex items-end justify-between gap-3 px-5 pt-1 pb-6">
              <div>
                <h3 className="heading text-lg tracking-tight text-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-foreground/60">
                  {category.description}
                </p>
              </div>
              <Icon
                icon="mdi:arrow-right"
                className="mb-0.5 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
