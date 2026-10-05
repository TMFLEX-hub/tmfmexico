"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollHash = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        scrollToSection(id);
      }
    };

    const frame = requestAnimationFrame(scrollHash);
    const timer = window.setTimeout(scrollHash, 120);
    window.addEventListener("hashchange", scrollHash);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollHash);
    };
  }, [pathname]);

  return null;
}
