import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/seo";

async function FooterLogo() {
  const svg = await readFile(
    path.join(process.cwd(), "public/images/nav-logo.svg"),
    "utf8",
  );

  return (
    <div
      aria-hidden
      className="h-12 w-auto sm:h-14 [&_svg]:h-full [&_svg]:w-auto [&_path]:fill-white [&_rect]:fill-white [&_path[fill='white']]:fill-primary [&_rect[fill='white']]:fill-primary"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export async function Footer() {
  return (
    <footer className="bg-primary px-5 py-10 text-white sm:px-8 lg:px-16 lg:py-12 xl:px-20">
      <div className="mx-auto grid max-w-[90rem] items-center gap-8 lg:grid-cols-3 lg:gap-10">
        <Link
          href="/"
          aria-label="TMF Tubos Mexicanos Flexibles"
          className="justify-self-center lg:justify-self-start"
        >
          <FooterLogo />
        </Link>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm">Síguenos en redes sociales</p>
          <ul className="flex items-center gap-5">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <Icon icon={social.icon} className="size-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-sm leading-6 lg:text-right">
          © 2026 TMF México.
          <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
