 "use client";

import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface ServiceCardProps {
  title: string;
  description: string;
  imagePaths?: string[];
}

export default function ServiceCard({
  title,
  description,
  imagePaths,
}: ServiceCardProps) {
  const hasImages = imagePaths && imagePaths.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage =
    hasImages && imagePaths ? imagePaths[activeIndex % imagePaths.length] : null;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-900/80 backdrop-blur">
      <div className="p-4">
        {currentImage ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-700">
            <Image
              src={currentImage}
              alt={title}
              fill
              className="object-cover"
            />
            {imagePaths && imagePaths.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveIndex((i) =>
                      (i - 1 + imagePaths.length) % imagePaths.length,
                    )
                  }
                  className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-xs text-white transition-colors hover:bg-black/60"
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((i) => (i + 1) % imagePaths.length)
                  }
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-xs text-white transition-colors hover:bg-black/60"
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              </>
            )}
          </div>
        ) : (
          <ImageCarousel count={4} label={title} />
        )}
      </div>
      <div className="px-4 pb-4">
        <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
        <p className="text-xs leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
