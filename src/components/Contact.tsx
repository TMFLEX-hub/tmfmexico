"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/Button";

const fieldClass =
  "mt-2 h-12 w-full rounded-none border border-foreground/15 bg-white px-5 text-foreground outline-none transition-colors focus:border-primary";

export function Contact() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="contacto"
      className="border-t border-primary bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28 xl:px-20"
    >
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
        <div>
          <p className="subheading text-sm tracking-[0.14em] text-primary">
            Contáctanos
          </p>
          <h2 className="heading mt-4 max-w-md text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            De una necesidad a una solución.
          </h2>

          <form className="mt-10 flex flex-col gap-5" onSubmit={onSubmit}>
            <label className="text-sm text-foreground">
              Nombre completo
              <input
                type="text"
                name="nombre"
                autoComplete="name"
                required
                className={fieldClass}
              />
            </label>

            <label className="text-sm text-foreground">
              Nombre empresa
              <input
                type="text"
                name="empresa"
                autoComplete="organization"
                className={fieldClass}
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-foreground">
                Correo electrónico
                <input
                  type="email"
                  name="correo"
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="text-sm text-foreground">
                Teléfono
                <input
                  type="tel"
                  name="telefono"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </label>
            </div>

            <div className="mt-3">
              <Button type="submit">Contáctanos</Button>
            </div>
          </form>
        </div>

        <div>
          <p className="subheading text-sm tracking-[0.14em] text-primary">
            Soporte TMF
          </p>
          <h2 className="heading mt-4 max-w-lg text-2xl leading-[1.2] tracking-tight text-foreground sm:text-[1.75rem] lg:text-[2rem]">
            Más que fabricar productos, desarrollamos soluciones.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            Nuestro equipo está listo para ayudarte a encontrar la solución
            adecuada, desde productos de línea hasta requerimientos y
            aplicaciones especializadas.
          </p>
          <div className="mt-10">
            <Button href="/servicio-al-cliente" variant="inverse">
              Habla con nuestro equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
