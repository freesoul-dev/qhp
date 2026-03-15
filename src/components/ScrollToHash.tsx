"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function findVisibleElement(id: string): Element | null {
  const targets = document.querySelectorAll(`[id="${id}"]`);
  for (const t of targets) {
    if ((t as HTMLElement).offsetParent !== null) return t;
  }
  return targets[0] ?? null;
}

function scrollToId(id: string) {
  const el = findVisibleElement(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y - 96, behavior: "smooth" });
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(() => scrollToId(hash), 300);
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
