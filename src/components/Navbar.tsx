"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  handleSectionLinkClick,
  sectionHref,
} from "@/lib/scrollToSection";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sucursalesHref = sectionHref("cobertura", pathname);
  const servicioHref = sectionHref("servicio-al-cliente", pathname);
  const contactoHref = sectionHref("contacto", pathname);

  const links = [
    { href: sucursalesHref, label: "Sucursales" },
    { href: servicioHref, label: "Servicio al cliente" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-stretch">
          <Link
            href="/"
            aria-label="TMF Tubos Mexicanos Flexibles"
            className="flex items-center px-5 py-2.5 sm:px-8"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/nav-logo.svg"
              alt="TMF Tubos Mexicanos Flexibles"
              width={230}
              height={81}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          <nav className="ml-auto hidden items-stretch md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-6 text-[15px] text-foreground transition-colors hover:text-primary"
                onClick={(event) => handleSectionLinkClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactoHref}
              className="flex items-center gap-2.5 bg-primary px-8 text-[15px] text-white transition-colors hover:bg-primary/90"
              onClick={(event) => handleSectionLinkClick(event, contactoHref)}
            >
              <Icon icon="mdi:send" className="size-5" aria-hidden />
              Contacto
            </Link>
          </nav>

          <button
            type="button"
            className="ml-auto mr-4 flex items-center text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon icon="gg:menu-right" className="size-8" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <nav
        id="mobile-nav"
        className={`fixed inset-y-0 right-0 z-70 flex w-[min(20rem,86vw)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <p className="subheading text-sm text-primary">Menú</p>
          <button
            type="button"
            className="text-foreground"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <Icon icon="mdi:close" className="size-6" />
          </button>
        </div>

        <div className="flex flex-1 flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-4 text-[15px] text-foreground transition-colors hover:bg-washed hover:text-primary"
              onClick={(event) => {
                handleSectionLinkClick(event, link.href);
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={contactoHref}
          className="flex items-center justify-center gap-2.5 bg-primary px-5 py-4 text-[15px] text-white"
          onClick={(event) => {
            handleSectionLinkClick(event, contactoHref);
            setOpen(false);
          }}
        >
          <Icon icon="mdi:send" className="size-5" aria-hidden />
          Contacto
        </Link>
      </nav>
    </>
  );
}
