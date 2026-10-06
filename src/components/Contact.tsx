"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

const fieldClass =
  "mt-2 h-12 w-full rounded-none border border-foreground/15 bg-white px-5 text-foreground outline-none transition-colors focus:border-primary";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          empresa: data.get("empresa"),
          correo: data.get("correo"),
          telefono: data.get("telefono"),
        }),
      });

      if (!response.ok) {
        throw new Error("send failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const closeModal = () => setStatus("idle");

  useEffect(() => {
    if (status !== "sent") {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStatus("idle");
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [status]);

  return (
    <section
      id="contacto"
      className="border-t border-primary bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28 xl:px-20"
    >
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
        <div>
          <Reveal>
            <p className="subheading text-sm tracking-[0.14em] text-primary">
              Contáctanos
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="heading mt-4 max-w-md text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              De una necesidad a una solución.
            </h2>
          </Reveal>

          <Reveal delay={360}>
            <form className="mt-10 flex flex-col gap-5" onSubmit={onSubmit}>
              <label htmlFor="nombre" className="text-sm text-foreground">
                Nombre completo
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
              </label>

              <label htmlFor="empresa" className="text-sm text-foreground">
                Nombre empresa
                <input
                  id="empresa"
                  type="text"
                  name="empresa"
                  autoComplete="organization"
                  className={fieldClass}
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="correo" className="text-sm text-foreground">
                  Correo electrónico
                  <input
                    id="correo"
                    type="email"
                    name="correo"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </label>
                <label htmlFor="telefono" className="text-sm text-foreground">
                  Teléfono
                  <input
                    id="telefono"
                    type="tel"
                    name="telefono"
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </label>
              </div>

              <div className="mt-3">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="disabled:pointer-events-none disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Contáctanos"}
                </Button>
              </div>

              {status === "error" ? (
                <p className="text-sm text-foreground/70" role="alert">
                  No se pudo enviar. Intenta de nuevo.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>

        <div id="servicio-al-cliente" className="scroll-mt-24">
          <Reveal delay={80}>
            <p className="subheading text-sm tracking-[0.14em] text-primary">
              Soporte TMF
            </p>
          </Reveal>
          <Reveal delay={260}>
            <h2 className="heading mt-4 max-w-lg text-2xl leading-[1.2] tracking-tight text-foreground sm:text-[1.75rem] lg:text-[2rem]">
              Más que fabricar productos, desarrollamos soluciones.
            </h2>
          </Reveal>
          <Reveal delay={440}>
            <p className="mt-5 max-w-md text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              Nuestro equipo está listo para ayudarte a encontrar la solución
              adecuada, desde productos de línea hasta requerimientos y
              aplicaciones especializadas.
            </p>
          </Reveal>
        </div>
      </div>

      {status === "sent" ? (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/40 px-5"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contacto-exito-titulo"
            className="w-full max-w-md bg-white px-8 py-12 text-center shadow-[0_24px_50px_-28px_rgba(0,157,228,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-washed text-primary">
              <Icon icon="mdi:check" className="size-8" aria-hidden />
            </span>
            <h3
              id="contacto-exito-titulo"
              className="heading mt-6 text-2xl tracking-tight text-foreground"
            >
              Mensaje enviado
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-foreground/70">
              Pronto nos pondremos en contacto.
            </p>
            <div className="mt-8 flex justify-center">
              <Button type="button" onClick={closeModal}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
