import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { electricoReasons } from "@/data/electrico";

const iconMotion: Record<(typeof electricoReasons)[number]["motion"], string> =
  {
    float: "animate-icon-float",
    wiggle: "animate-icon-wiggle",
    pulse: "animate-icon-pulse",
    stretch: "animate-icon-stretch",
    spin: "animate-icon-spin",
  };

export function KeyPoints() {
  return (
    <section
      id="por-que-tmf-electrico"
      className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28 xl:px-20"
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="subheading text-sm tracking-[0.14em] text-primary">
              ¿Por qué TMF Eléctrico?
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="heading mt-4 text-3xl leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Experiencia e ingeniería detrás de cada solución.
            </h2>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              Cada aplicación tiene necesidades diferentes. Por eso
              desarrollamos soluciones considerando desempeño, instalación,
              cumplimiento, tipo de aplicación y costo.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {electricoReasons.map((reason, index) => (
            <li key={reason.title}>
              <Reveal
                delay={index * 140}
                variant="scale"
                className="flex size-16 items-center justify-center rounded-full bg-washed text-primary"
              >
                <Icon
                  icon={reason.icon}
                  className={`size-8 ${iconMotion[reason.motion]}`}
                  style={{ animationDelay: `${index * 180}ms` }}
                />
              </Reveal>
              <Reveal delay={80 + index * 140}>
                <h3 className="heading mt-5 text-xl tracking-tight text-foreground">
                  {reason.title}
                </h3>
              </Reveal>
              <Reveal delay={180 + index * 140}>
                <p className="mt-3 max-w-md text-base leading-7 text-foreground/70">
                  {reason.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
