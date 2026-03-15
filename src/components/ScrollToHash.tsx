"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function scrollToSectionById(id: string) {
  window.dispatchEvent(
    new CustomEvent("open-accordion-section", { detail: { id } }),
  );
  // 400ms lets the accordion expand (300ms transition) before we measure position
  setTimeout(() => {
    const targets = document.querySelectorAll<HTMLElement>(`[id="${id}"]`);
    let el: HTMLElement | null = null;
    for (const t of targets) {
      if (t.offsetParent !== null) {
        el = t;
        break;
      }
    }
    if (!el && targets.length) el = targets[0];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 20, behavior: "smooth" });
    }
  }, 400);
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const id = requestAnimationFrame(() => {
      scrollToSectionById(hash);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
