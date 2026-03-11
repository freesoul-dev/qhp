"use client";

import { useState } from "react";

interface SubOffering {
  name: string;
  description: string;
}

interface PrimaryServiceSectionProps {
  title: string;
  subOfferings: SubOffering[];
  reverse?: boolean;
}

export default function PrimaryServiceSection({
  title,
  subOfferings,
  reverse = false,
}: PrimaryServiceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = subOfferings[activeIndex];

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
          <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-slate-700">
            <span className="text-xs text-slate-500">
              {active.name} — Image
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {subOfferings.slice(0, 3).map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveIndex(i)}
                className={`aspect-[4/3] rounded-md transition-opacity ${
                  i === activeIndex
                    ? "bg-slate-600 ring-2 ring-amber-500"
                    : "bg-slate-700 opacity-60 hover:opacity-100"
                }`}
              >
                <span className="text-[10px] text-slate-500">{sub.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
