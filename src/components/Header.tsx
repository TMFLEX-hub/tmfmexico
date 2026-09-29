import Image from "next/image";
import { Button } from "@/components/Button";

type HeaderProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  priority?: boolean;
};

export function Header({
  eyebrow = "TMF México",
  title = "Más de seis décadas haciendo flexible cada instalación.",
  description = "Diseñamos y fabricamos en México soluciones de tubería flexible para aplicaciones eléctricas e industriales, combinando experiencia, ingeniería y capacidad de manufactura.",
  ctaLabel = "Conoce nuestras soluciones",
  ctaHref = "#soluciones",
  imageSrc = "/images/header.jpg",
  imageAlt = "Tubería flexible TMF con conexiones industriales",
  imageFit = "cover",
  priority = false,
}: HeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-16 xl:px-20">
          <p className="subheading text-sm tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
          <h1 className="heading mt-4 max-w-xl text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="relative mt-10 w-fit">
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200vh] w-[200vw] -translate-x-1/2 bg-washed"
            />
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>

        <div className="relative z-10 min-h-72 w-full bg-white lg:min-h-[36rem]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className={
              imageFit === "contain"
                ? "object-contain object-center p-8 lg:p-12"
                : "object-cover object-center"
            }
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
