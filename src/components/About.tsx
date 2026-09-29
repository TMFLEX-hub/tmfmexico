"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";

const values = [
  { icon: "mdi:medal-outline", label: "Calidad" },
  { icon: "mdi:file-certificate-outline", label: "Experiencia" },
  { icon: "mdi:cog-outline", label: "Ingeniería" },
  { icon: "mdi:factory", label: "Manufactura" },
  { icon: "mdi:arrow-expand-vertical", label: "Flexibilidad" },
];

export function About() {
  const figureRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const figure = figureRef.current;
    const media = mediaRef.current;
    if (!figure || !media) {
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = figure.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const offset = (progress - 0.5) * 80;
      media.style.transform = `translate3d(0, ${offset}px, 0) scale(1.16)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden bg-primary"
    >
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <clipPath id="about-slat-mask" clipPathUnits="objectBoundingBox">
            <path d="M0 0H0.21535V0.4975H0Z M0.22108 0H0.41696V0.4975H0.22108Z M0.42383 0H0.6197V1H0.42383Z M0.62658 0H0.82245V1H0.62658Z M0.82932 0.5H1V1H0.82932Z" />
          </clipPath>
        </defs>
      </svg>

      <figure
        ref={figureRef}
        className="pointer-events-none relative mx-[8%] mt-2 aspect-4/5 sm:aspect-4/3 md:mt-10 lg:absolute lg:top-10 lg:right-[6%] lg:left-[8%] lg:mx-0 lg:mt-0 lg:aspect-873/400"
        style={{
          clipPath: "url(#about-slat-mask)",
          WebkitClipPath: "url(#about-slat-mask)",
        }}
      >
        <div
          ref={mediaRef}
          className="absolute inset-[-18%] will-change-transform"
        >
          <Image
            src="/images/about.jpg"
            alt="Instalación eléctrica con tubería flexible TMF"
            fill
            className="object-cover object-top-left"
            sizes="90vw"
          />
        </div>
      </figure>

      <div className="relative z-10 mx-auto flex max-w-[90rem] flex-col px-5 pt-4 pb-16 sm:px-8 lg:min-h-[46rem] lg:justify-end lg:px-16 lg:pt-96 xl:px-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-10">
          <div className="max-w-lg text-white">
            <p className="subheading text-sm tracking-[0.14em] text-white">
              Sobre TMF
            </p>
            <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Más de seis décadas de experiencia, ingeniería y manufactura.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Desde 1957, TMF diseña y fabrica en México soluciones de tubería
              flexible para aplicaciones eléctricas e industriales. Nuestra
              experiencia, capacidad de manufactura e ingeniería nos permite
              desarrollar productos estandarizados y soluciones adaptadas a
              requerimientos específicos.
            </p>
          </div>

          <ul className="grid w-full grid-cols-2 gap-6 text-white sm:grid-cols-3 lg:min-w-0 lg:flex-1 lg:grid-cols-5 lg:gap-3">
            {values.map((value) => (
              <li
                key={value.label}
                className="flex min-w-0 flex-col items-center gap-3 text-center"
              >
                <Icon
                  icon={value.icon}
                  className="size-8 text-white [&_path]:fill-white"
                />
                <span className="heading text-[clamp(0.95rem,1.15vw,1.125rem)] text-white">
                  {value.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
