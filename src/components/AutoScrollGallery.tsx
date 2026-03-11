"use client";

import { useState, useEffect, useCallback } from "react";

interface AutoScrollGalleryProps {
  count: number;
  intervalMs?: number;
}

export default function AutoScrollGallery({
  count,
  intervalMs = 3000,
}: AutoScrollGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [paused, next, intervalMs]);

  return (
    <div
      className="flex flex-col gap-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main display */}
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-slate-700">
        <span className="text-sm text-slate-500">
          Photo {activeIndex + 1} / {count}
        </span>
        <button
          onClick={() => setActiveIndex((i) => (i - 1 + count) % count)}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg text-white transition-colors hover:bg-black/60"
          aria-label="Previous photo"
        >
          &#8249;
        </button>
        <button
          onClick={() => setActiveIndex((i) => (i + 1) % count)}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg text-white transition-colors hover:bg-black/60"
          aria-label="Next photo"
        >
          &#8250;
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex aspect-square w-16 shrink-0 items-center justify-center rounded-md transition-all ${
              i === activeIndex
                ? "bg-slate-600 ring-2 ring-amber-500"
                : "bg-slate-700 opacity-50 hover:opacity-100"
            }`}
          >
            <span className="text-[10px] text-slate-400">{i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
