import type { Metadata } from "next";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import CompanyInfoBlock from "@/components/CompanyInfoBlock";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import AutoScrollGallery from "@/components/AutoScrollGallery";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio | Quality Home Protection",
  description:
    "See how Quality Home Protection approaches real projects from problem to solution. Browse our case studies and past work gallery.",
};

const problemImages = [
  "/images/portfolio/problem/2.jpeg",
  "/images/portfolio/problem/1.jpeg",
  "/images/portfolio/problem/3.jpeg",
];
const approachImages = [
  "/images/portfolio/approach/3.jpeg",
  "/images/portfolio/approach/2.jpeg",
  "/images/portfolio/approach/1.jpeg",
];
const resultImages = [
  "/images/portfolio/result/2.jpeg",
  "/images/portfolio/result/1.jpeg",
  "/images/portfolio/result/3.jpeg",
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header + Case Study with shared background */}
      <section className="relative w-full overflow-hidden bg-slate-900 px-6 pt-32 pb-20">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Header */}
          <ScrollReveal>
            <h1 className="mb-4 text-4xl font-bold text-white">Portfolio</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mb-10 max-w-2xl leading-relaxed text-slate-300">
              Every project tells a story. We work closely with our clients to
              understand the problem, develop a plan, and deliver a lasting
              solution. Below is a look at how we approach our work — from
              initial assessment to finished result.
            </p>
          </ScrollReveal>

          {/* Case Study — Porch Roof Modernization */}
          <ScrollReveal>
            <h2 className="mb-2 text-2xl font-bold text-white">
              Porch Roof Modernization with Box Gutter Bridging
            </h2>
            <p className="mb-8 text-sm font-medium uppercase tracking-wider text-amber-400">
              Case Study — Pittsburgh, PA
            </p>
          </ScrollReveal>

          {/* The Problem */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
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
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <CaseStudyCarousel
                imagePaths={problemImages}
                alt="Porch roof condition before work"
              />
            </ScrollReveal>
          </div>

          {/* The Approach */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="right" className="md:order-2">
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
                  Replaced rotted planking, soffit, and reinforced the structure
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Bridged existing gutter system with plywood and installed new ice and water shield, and underlayment, and architectural shingles
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  Installed new K style gutters and downspouts to tie into main house drainage
                </li>
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={150} className="md:order-1">
              <CaseStudyCarousel
                imagePaths={approachImages}
                alt="Porch roof modernization in progress"
              />
            </ScrollReveal>
          </div>

          {/* The Result */}
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
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
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <CaseStudyCarousel
                imagePaths={resultImages}
                alt="Finished porch roof and box gutter bridging"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Past Work Gallery */}
      <section className="w-full bg-slate-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-2 text-2xl font-bold text-white">Past Work</h2>
            <p className="mb-8 text-slate-400">
              A collection of projects across roofing, gutters, storm restoration,
              decks, and more.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <AutoScrollGallery count={12} />
          </ScrollReveal>
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
