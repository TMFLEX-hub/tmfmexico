import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const logos = [
  {
    src: "/images/logo1.png",
    alt: "ISO 9001:2015",
    width: 105,
    height: 96,
  },
  {
    src: "/images/logo8.png",
    alt: "UL E486740",
    width: 80,
    height: 111,
  },
  {
    src: "/images/logo5.png",
    alt: "NMX Norma Mexicana NMX-J-571-ANCE-2006",
    width: 226,
    height: 160,
  },
  {
    src: "/images/logo7.png",
    alt: "NOM Norma Oficial Mexicana NOM-001-SEDE-2012",
    width: 226,
    height: 160,
  },
  {
    src: "/images/logo3.png",
    alt: "NAHAD",
    width: 200,
    height: 39,
  },
  {
    src: "/images/logo2.png",
    alt: "ISO 10380",
    width: 115,
    height: 96,
  },
  {
    src: "/images/logo4.png",
    alt: "EJMA Expansion Joint Manufacturers Association",
    width: 117,
    height: 117,
  },
];

export function Certifications() {
  return (
    <section
      id="certificaciones"
      className="bg-[#D6F2FF] px-5 py-12 sm:px-8 lg:px-16 lg:py-16 xl:px-20"
    >
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-10">
        {logos.map((logo, index) => (
          <li key={logo.src} className="w-full">
            <Reveal
              delay={index * 70}
              className="flex h-16 w-full items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-full w-auto max-w-full object-contain transition-transform duration-500 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
