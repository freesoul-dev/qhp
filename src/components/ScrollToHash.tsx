"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SCROLL_OFFSET = 96; // matches scroll-mt-24 (6rem)

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y - SCROLL_OFFSET, behavior: "smooth" });
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(() => scrollToId(hash), 150);
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
