import Image from "next/image";
import PrimaryServiceSection from "@/components/PrimaryServiceSection";
import ServiceCard from "@/components/ServiceCard";
import SectionDivider from "@/components/SectionDivider";
import CompanyInfoBlock from "@/components/CompanyInfoBlock";
import ContactForm from "@/components/ContactForm";
import Reviews from "@/components/Reviews";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceAccordion from "@/components/ServiceAccordion";

const primaryServices = [
  {
    id: "roofing",
    title: "Roofing Services",
    imagePaths: [
      "/images/main/shingles.jpeg",
      "/images/main/fascia.jpeg",
      // "/images/main/gutterguards.jpeg",
      "/images/main/chimney.jpeg",
      "/images/main/flatroof.jpeg",
      "/images/main/roofrepair.jpeg",
      "/images/main/inspect.jpeg",
    ],
    subOfferings: [
      {
        name: "Shingle Roofing",
        description:
          "Our most popular option — we install and replace asphalt shingle roofs from leading manufacturers. Durable, affordable, and available in a wide range of styles to match your home.",
      },
      {
        name: "Gutters",
        description:
          "Custom-fitted seamless gutter systems designed to handle heavy rainfall. Precision-measured and installed for maximum water flow and durability.",
      },
      // {
      //   name: "Gutter Guards",
      //   description:
      //     "Keep leaves and debris out with professionally installed gutter guards. Reduce maintenance and prevent clogs that lead to water damage.",
      // },
      {
        name: "Chimney Repairs",
        description:
          "We repair and restore damaged chimney crowns, flashings, and bricks. Prevent leaks and structural deterioration with our restoration services.",
      },
      {
        name: "Flat Roofs",
        description:
          "Commercial and residential flat roof installation and repair. We work with TPO, EPDM, and modified bitumen systems for watertight, long-term protection.",
      },
      {
        name: "Roof Repairs",
        description:
          "From missing shingles to storm damage and leaks, our team diagnoses and repairs issues quickly to prevent further damage to your home.",
      },
      {
        name: "Inspections",
        description:
          "Comprehensive roof inspections for homebuyers, insurance claims, or routine maintenance. We provide detailed reports and honest assessments.",
      },
    ],
  },
  {
    id: "storm-restoration",
    title: "Storm Restoration",
    imagePaths: [
      "/images/main/wind.jpeg",
      "/images/main/hail.jpeg",
      "/images/main/tarping.jpeg",
      "/images/main/resto2.jpeg",
      "/images/main/resto2.jpeg",
    ],
    subOfferings: [
      {
        name: "Wind Damage",
        description:
          "High winds can tear off shingles, damage flashing, and compromise your roof's integrity. We assess and repair wind damage to restore full protection.",
      },
      {
        name: "Hail Damage",
        description:
          "Hail can cause hidden damage that leads to leaks over time. Our trained inspectors identify all impact points and restore your roof to pre-storm condition.",
      },
      {
        name: "Emergency Tarping",
        description:
          "When storms leave your home exposed, we provide rapid emergency tarping services to prevent water intrusion until permanent repairs can be made.",
      },
      {
        name: "Full Restoration",
        description:
          "Complete storm damage restoration from roof to siding to gutters. We manage the entire project so you have a single point of contact throughout.",
      },
    ],
  },
  {
    id: "box-gutters",
    title: "Box Gutters",
    imagePaths: [
      "/images/main/bridging.jpeg",
      "/images/main/gutters.jpeg",
      "/images/main/gutterrepair.jpeg",
      "/images/main/downspout.jpeg",
      "/images/main/boxgutters.jpeg",
    ],
    subOfferings: [
      {
        name: "Box Gutter Bridging",
        description:
          "We bridge box gutters to the main house gutter system to ensure proper drainage and prevent water from pooling around your foundation. Bridging Box Gutters involves covering over the compromised box gutter system with new plywood or planking to create a new roof surface.",
      },
      {
        name: "Gutter Installation",
        description:
          "Custom fitted box gutter systems designed to handle heavy rainfall. Installed for maximum water flow and durability.",
      },
      {
        name: "Gutter Repair",
        description:
          "Leaking, sagging, or overflowing gutters? We repair and reseal box gutter systems to restore proper drainage and prevent foundation damage.",
      },
      {
        name: "Downspouts",
        description:
          "Properly sized and positioned downspouts are essential for directing water away from your foundation. We install, replace, and reroute as needed.",
      },
      {
        name: "Custom Fabrication",
        description:
          "For historic homes and unique architectures, we custom-fabricate box gutters on-site to match existing profiles and maintain your home's character.",
      },
    ],
  },
];

const secondaryServices = [
  {
    id: "decks",
    title: "Decks",
    description:
      "Custom deck construction and restoration to extend your living space. From pressure-treated wood to composite decking, built to last.",
    imagePaths: [
      "/images/main/decks/1.jpeg",
      "/images/main/decks/2.jpeg",
      "/images/main/decks/3.jpeg",
      "/images/main/decks/4.jpeg",
    ],
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    description:
      "Reliable contracting services for renovations, additions, siding, and structural repairs throughout the Pittsburgh area. Including doors, windows, painting, and siding and more.",
    imagePaths: [
      "/images/main/general/1.JPG",
      "/images/main/general/2.JPEG",
      "/images/main/general/3.jpeg",
      "/images/main/general/4.JPG",
    ],
  },
  {
    id: "landscaping",
    title: "Structural Landscaping",
    description:
      "Professional landscaping to complement your home's curb appeal — grading, retaining walls, drainage solutions, and more.",
    imagePaths: [
      "/images/main/scaping/3.jpeg",
      "/images/main/scaping/4.jpeg",
      "/images/main/scaping/1.jpeg",
      "/images/main/scaping/2.jpeg",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="relative min-h-screen overflow-hidden px-6 py-32">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:min-h-[70vh]">
          {/* Left — Branding */}
          <div>
            {/* <ScrollReveal>
              <Image
                src="/logo.png"
                alt="Quality Home Protection"
                width={300}
                height={300}
                priority
                className="mb-6"
              />
            </ScrollReveal> */}
            <ScrollReveal delay={100}>
              <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Quality Home Protection
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mb-2 text-xl font-medium text-amber-400">
                Precision, Quality, Care.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="max-w-md text-slate-300">
                Pittsburgh&apos;s trusted craftsmen in roofing, storm restoration,
                gutters, and home improvement. We protect what matters most — your
                home and your family.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal direction="right" delay={200}>
            <div className="w-full max-w-md lg:ml-auto">
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6 backdrop-blur">
                <h2 className="mb-1 text-lg font-bold text-white">
                  Get in Touch
                </h2>
                <p className="mb-4 text-sm text-slate-400">
                  Leave your info and we&apos;ll follow up.
                </p>
                <ContactForm variant="full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings summary divider */}
      <SectionDivider
        heading="Our Services, Your Care."
        subtitle="We work closely with all of our clients to determine the best solutions for their roofing, gutters, and general contracting needs."
      />

      {/* All Offerings — with background image */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/roof.jpeg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Primary Services */}
        <div className="relative z-10 px-6 py-16">
          {/* Desktop */}
          <div className="mx-auto hidden max-w-5xl flex-col gap-10 md:flex">
            {primaryServices.map((svc, i) => (
              <ScrollReveal
                key={svc.id}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div id={svc.id} className="scroll-mt-24">
                  <PrimaryServiceSection
                    title={svc.title}
                    subOfferings={svc.subOfferings}
                    reverse={i % 2 === 1}
                    imagePaths={svc.imagePaths}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Mobile accordion */}
          <div className="mx-auto max-w-5xl md:hidden">
            <ServiceAccordion services={primaryServices} defaultOpenIndex={0} />
          </div>
        </div>

        {/* Secondary Services */}
        <div className="relative z-10 px-6 pb-16">
          {/* Desktop */}
          <div className="mx-auto hidden max-w-5xl gap-6 sm:grid-cols-3 md:grid">
            {secondaryServices.map((svc, i) => (
              <ScrollReveal key={svc.id} delay={i * 100}>
                <div id={svc.id} className="scroll-mt-24">
                  <ServiceCard
                    title={svc.title}
                    description={svc.description}
                    imagePaths={svc.imagePaths}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Mobile accordion */}
          <div className="mx-auto max-w-5xl md:hidden">
            <ServiceAccordion services={secondaryServices} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <Reviews />

      {/* Short divider */}
      <SectionDivider
        heading="Care, You Can Count On."
        subtitle="View our Case Studies to see how we approach real projects from problem to solution."
        cta="View Case Studies"
        href="/portfolio"
      />

      {/* Company Info */}
        <div id="about" className="scroll-mt-24">
          <CompanyInfoBlock />
        </div>
    </>
  );
}
