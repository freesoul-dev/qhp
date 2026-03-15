"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { scrollToSectionById } from "./ScrollToHash";

const offerings = [
  { label: "Roofing Services", id: "roofing" },
  { label: "Storm Restoration", id: "storm-restoration" },
  { label: "Box Gutters", id: "box-gutters" },
  { label: "Decks", id: "decks" },
  { label: "General Contracting", id: "general-contracting" },
  { label: "Landscaping", id: "landscaping" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setDropdownOpen(false);

    if (pathname === "/") {
      // Small delay so the mobile menu unmounts before we measure scroll position
      setTimeout(() => scrollToSectionById(id), 100);
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Quality Home Protection" width={100} height={100} />
          <span className="text-lg font-bold tracking-tight text-white">
            Quality Home Protection
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-400"
          >
            Home
          </Link>

          {/* Offerings dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-200 transition-colors hover:text-amber-400"
            >
              Offerings
              <svg
                className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-lg border border-slate-700 bg-slate-900/95 py-2 shadow-xl backdrop-blur">
                {offerings.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full px-4 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-amber-400"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-400"
          >
            Portfolio
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-400"
          >
            About
          </Link>

          <Link
            href="/estimate"
            className="rounded-md bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-900/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-200 transition-colors hover:text-amber-400">
              Home
            </Link>

            {/* Mobile offerings - expanded list */}
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Offerings
              </span>
              <div className="flex flex-col gap-2 pl-2">
                {offerings.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm text-slate-300 transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-200 transition-colors hover:text-amber-400">
              Portfolio
            </Link>

            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-200 transition-colors hover:text-amber-400">
              About
            </Link>

            <Link
              href="/estimate"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-md bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
