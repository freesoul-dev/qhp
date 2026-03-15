"use client";

import Image from "next/image";
import { useState } from "react";

interface SubOffering {
  name: string;
  description: string;
}

interface PrimaryServiceSectionProps {
  title: string;
  subOfferings: SubOffering[];
  reverse?: boolean;
  imagePaths?: string[];
}

export default function PrimaryServiceSection({
  title,
  subOfferings,
  reverse = false,
  imagePaths,
}: PrimaryServiceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = subOfferings[activeIndex];
  const images = imagePaths ?? [];
  const hasImages = images.length > 0;
  const mainImage = hasImages
    ? images[activeIndex % images.length]
    : null;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900/80 backdrop-blur">
      <div
        className={`grid gap-6 p-6 md:grid-cols-2 ${reverse ? "md:direction-rtl" : ""}`}
      >
        {/* Text side */}
        <div className={`flex flex-col ${reverse ? "md:order-2" : ""}`}>
          <h3 className="mb-5 text-2xl font-bold text-white">{title}</h3>

          {/* Sub-offering tabs */}
          <div className="mb-5 flex flex-wrap gap-2">
            {subOfferings.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  i === activeIndex
                    ? "bg-amber-500 text-slate-900"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-300">
            {active.description}
          </p>
        </div>

        {/* Image gallery side */}
        <div className={`flex flex-col gap-3 ${reverse ? "md:order-1" : ""}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-700">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={active.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-xs text-slate-500">
                  {active.name} — Image
                </span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(hasImages ? images : subOfferings.map((s) => s.name)).slice(0, 3).map((item, i) => (
              <button
                key={typeof item === "string" ? item : (item as string)}
                onClick={() => setActiveIndex(i)}
                className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all ${
                  i === activeIndex
                    ? "ring-2 ring-amber-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {hasImages ? (
                  <Image
                    src={images[i]}
                    alt={`${title} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] text-slate-500">
                    {subOfferings[i]?.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
