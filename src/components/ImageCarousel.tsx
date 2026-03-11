"use client";

import { useState } from "react";

interface ImageCarouselProps {
  count?: number;
  label?: string;
}

export default function ImageCarousel({
  count = 4,
  label = "Project",
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + count) % count);
  const next = () => setActiveIndex((i) => (i + 1) % count);

  return (
    <div className="flex flex-col gap-2">
      {/* Main image */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-slate-700">
        <span className="text-xs text-slate-500">
          {label} {activeIndex + 1}/{count}
        </span>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-sm text-white transition-colors hover:bg-black/60"
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-sm text-white transition-colors hover:bg-black/60"
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>

      {/* Thumbnail dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-4 bg-amber-500" : "w-1.5 bg-slate-600"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
