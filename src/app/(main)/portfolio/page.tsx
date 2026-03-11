import type { Metadata } from "next";
import SectionDivider from "@/components/SectionDivider";
import CompanyInfoBlock from "@/components/CompanyInfoBlock";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import AutoScrollGallery from "@/components/AutoScrollGallery";

export const metadata: Metadata = {
  title: "Portfolio | Quality Home Protection",
  description:
    "See how Quality Home Protection approaches real projects — from problem to solution. Browse our case studies and past work gallery.",
};

const problemImages = ["Before — Overview", "Gutter detail", "Roof damage"];
const approachImages = ["During — Tearoff", "Gutter bridging", "Fascia repair"];
const resultImages = ["After — Finished", "Gutter closeup", "Final detail"];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="w-full bg-slate-900 px-6 pt-32 pb-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-4xl font-bold text-white">Portfolio</h1>
          <p className="max-w-2xl leading-relaxed text-slate-300">
            Every project tells a story. We work closely with our clients to
            understand the problem, develop a plan, and deliver a lasting
            solution. Below is a look at how we approach our work — from
            initial assessment to finished result.
          </p>
        </div>
      </section>

      {/* Case Study — Porch Roof Modernization */}
      <section className="w-full bg-slate-900 px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Porch Roof Modernization with Box Gutter Bridging
          </h2>
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-amber-400">
            Case Study — Pittsburgh, PA
          </p>

          {/* The Problem */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                The Problem
              </h3>
              <p className="leading-relaxed text-slate-300">
                The homeowner had an aging porch roof with deteriorating
                shingles, rotting fascia, and a failing box gutter system that
                was allowing water to pool and seep into the structure. Years of
                patching had created a patchwork of mismatched materials, and the
                existing gutter bridging was no longer directing water away from
                the foundation effectively.
              </p>
            </div>
            <CaseStudyCarousel items={problemImages} />
          </div>

          {/* The Approach */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="md:order-2">
              <h3 className="mb-3 text-lg font-semibold text-white">
                The Approach
              </h3>
              <p className="mb-4 leading-relaxed text-slate-300">
                After a thorough inspection, we developed a plan to modernize
                the porch roof while addressing the root cause of the water
                management issues. The key was bridging the box gutters —
                creating a seamless connection between the existing house gutter
                system and the porch structure to ensure proper drainage.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Stripped the old roof down to the deck for a full assessment
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Replaced rotted fascia boards and reinforced the structure
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Custom-fabricated box gutter bridging to tie into the main house drainage
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Installed new architectural shingles with ice &amp; water shield underlayment
                </li>
              </ul>
            </div>
            <div className="md:order-1">
              <CaseStudyCarousel items={approachImages} />
            </div>
          </div>

          {/* The Result */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                The Result
              </h3>
              <p className="leading-relaxed text-slate-300">
                The finished porch roof is clean, modern, and — most importantly
                — built to handle Pittsburgh&apos;s rain and snowfall. The new
                box gutter bridging creates a unified drainage system that
                channels water away from the structure, and the homeowner now has
                a porch roof that matches the rest of the house with decades of
                protection ahead.
              </p>
            </div>
            <CaseStudyCarousel items={resultImages} />
          </div>
        </div>
      </section>

      {/* Past Work Gallery */}
      <section className="w-full bg-slate-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-bold text-white">Past Work</h2>
          <p className="mb-8 text-slate-400">
            A collection of projects across roofing, gutters, storm restoration,
            decks, and more.
          </p>
          <AutoScrollGallery count={12} />
        </div>
      </section>

      <SectionDivider
        heading="Ready to Get Started?"
        cta="Request Your Free Estimate"
      />

      <CompanyInfoBlock />
    </>
  );
}
