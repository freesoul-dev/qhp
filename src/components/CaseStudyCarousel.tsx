"use client";

import { useState } from "react";

interface CaseStudyCarouselProps {
  items: string[];
}

export default function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      {/* Main image */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-slate-700">
        <span className="text-xs text-slate-500">{items[activeIndex]}</span>
        {items.length > 1 && (
          <>
            <button
              onClick={() =>
                setActiveIndex((i) => (i - 1 + items.length) % items.length)
              }
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setActiveIndex((i) => (i + 1) % items.length)
              }
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {/* Thumbnail previews */}
      {items.length > 1 && (
        <div className="flex gap-2">
          {items.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveIndex(i)}
              className={`flex aspect-square flex-1 items-center justify-center rounded-md transition-all ${
                i === activeIndex
                  ? "bg-slate-600 ring-2 ring-amber-500"
                  : "bg-slate-700 opacity-60 hover:opacity-100"
              }`}
            >
              <span className="text-[9px] leading-tight text-slate-400">
                {label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
