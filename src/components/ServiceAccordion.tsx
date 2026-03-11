"use client";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface SubOffering {
  name: string;
  description: string;
}

interface ServiceItem {
  id: string;
  title: string;
  subOfferings?: SubOffering[];
  description?: string;
}

interface ServiceAccordionProps {
  services: ServiceItem[];
  defaultOpenIndex?: number;
}

function SubOfferingAccordion({ subOfferings }: { subOfferings: SubOffering[] }) {
  const [openSub, setOpenSub] = useState<number | null>(0);

  return (
    <div className="rounded-md border border-slate-600 overflow-hidden">
      {subOfferings.map((sub, i) => {
        const isSubOpen = openSub === i;
        return (
          <div
            key={sub.name}
            className={i > 0 ? "border-t border-slate-600" : ""}
          >
            <button
              onClick={() => setOpenSub(isSubOpen ? null : i)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-left"
            >
              <span className="text-sm font-medium text-amber-400">{sub.name}</span>
              <svg
                className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                  isSubOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isSubOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-3 pb-3 text-sm leading-relaxed text-slate-300">
                  {sub.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServiceAccordion({
  services,
  defaultOpenIndex = 0,
}: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900/80 backdrop-blur">
      {services.map((service, i) => {
        const isOpen = openIndex === i;
        const hasSubs = service.subOfferings && service.subOfferings.length > 0;

        return (
          <div
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 ${i > 0 ? "border-t border-slate-700" : ""}`}
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <svg
                className={`h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4">
                  {hasSubs ? (
                    <div>
                      <div className="mb-4">
                        <ImageCarousel count={4} label={service.title} />
                      </div>
                      <SubOfferingAccordion subOfferings={service.subOfferings!} />
                    </div>
                  ) : (
                    <div>
                      <div className="mb-3">
                        <ImageCarousel count={4} label={service.title} />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
