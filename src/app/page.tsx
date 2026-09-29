import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Header } from "@/components/Header";
import { Solutions } from "@/components/Solutions";

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
