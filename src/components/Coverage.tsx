"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

const pins = [
  { name: "Nuevo León", left: "58.7%", top: "45.9%", delay: "0ms" },
  { name: "Jalisco", left: "44.7%", top: "63.9%", delay: "140ms" },
  { name: "Querétaro", left: "53.7%", top: "60.9%", delay: "260ms" },
  { name: "Estado de México", left: "56.7%", top: "72.9%", delay: "380ms" },
  { name: "Yucatán", left: "63.7%", top: "76.9%", delay: "500ms" },
];

export function Coverage({
  eyebrow = "Cobertura y cercanía",
  title = "Cerca de nuestros clientes. Cerca de sus proyectos.",
  description = "Nuestra presencia en México nos permite brindar atención, disponibilidad de producto y soporte para las necesidades de cada proyecto.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cobertura"
      className="bg-washed px-5 py-20 sm:px-8 lg:px-16 lg:py-28 xl:px-20"
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,32rem)_minmax(0,1fr)]">
        <div>
          <Reveal>
            <p className="subheading text-sm tracking-[0.14em] text-primary">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-5 max-w-md text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              {description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={280} variant="scale" className="w-full">
          <div
            id="mapa"
            className="relative mx-auto aspect-795/591 w-full max-w-3xl scroll-mt-24 lg:max-w-none"
          >
            <Image
              src="/images/mapa.svg"
              alt="Mapa de cobertura TMF en México con presencia en Nuevo León, Jalisco, Querétaro, Estado de México y Yucatán"
              fill
              className="object-contain"
            />

            <ul className="pointer-events-none absolute inset-0">
              {pins.map((pin) => (
                <li
                  key={pin.name}
                  className="absolute"
                  style={{ left: pin.left, top: pin.top }}
                >
                  <span
                    className={`absolute top-0 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 ${
                      active ? "animate-pin-pulse" : "opacity-0"
                    }`}
                    style={{ animationDelay: `calc(${pin.delay} + 900ms)` }}
                    aria-hidden
                  />
                  <span
                    className={`absolute bottom-0 left-1/2 ${
                      active ? "animate-pin-drop" : "opacity-0"
                    }`}
                    style={{ animationDelay: pin.delay }}
                  >
                    <Icon
                      icon="mdi:map-marker"
                      className="size-9 text-primary drop-shadow-sm sm:size-10"
                      aria-hidden
                    />
                    <span className="sr-only">{pin.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
