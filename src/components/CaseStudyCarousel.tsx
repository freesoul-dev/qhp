"use client";

import Image from "next/image";
import { useState } from "react";

interface CaseStudyCarouselProps {
  imagePaths: string[];
  alt?: string;
}

export default function CaseStudyCarousel({
  imagePaths,
  alt = "Case study image",
}: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (imagePaths.length === 0) {
    return null;
  }

  const current = imagePaths[activeIndex];

  return (
    <div className="flex flex-col gap-2">
      {/* Main image */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-700">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-cover"
        />
        {imagePaths.length > 1 && (
          <>
            <button
              onClick={() =>
                setActiveIndex((i) => (i - 1 + imagePaths.length) % imagePaths.length)
              }
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setActiveIndex((i) => (i + 1) % imagePaths.length)
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
      {imagePaths.length > 1 && (
        <div className="flex gap-2">
          {imagePaths.map((path, i) => (
            <button
              key={path}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square flex-1 overflow-hidden rounded-md border border-slate-700 transition-all ${
                i === activeIndex
                  ? "ring-2 ring-amber-500"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={path}
                alt={`${alt} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
