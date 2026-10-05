import type { Metadata } from "next";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Header } from "@/components/Header";
import { Solutions } from "@/components/Solutions";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.homeTitle,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header priority />
      <Solutions />
      <About />
      <Coverage />
      <Certifications />
      <Contact />
    </main>
  );
}
