import Image from "next/image";
import PrimaryServiceSection from "@/components/PrimaryServiceSection";
import ServiceCard from "@/components/ServiceCard";
import SectionDivider from "@/components/SectionDivider";
import CompanyInfoBlock from "@/components/CompanyInfoBlock";
import ContactForm from "@/components/ContactForm";
import Reviews from "@/components/Reviews";

const primaryServices = [
  {
    id: "roofing",
    title: "Roofing Services",
    subOfferings: [
      {
        name: "Shingle Roofing",
        description:
          "Our most popular option — we install and replace asphalt shingle roofs from leading manufacturers. Durable, affordable, and available in a wide range of styles to match your home.",
      },
      {
        name: "Metal Roofing",
        description:
          "Long-lasting metal roofing systems that stand up to Pittsburgh's harshest weather. Energy-efficient, low-maintenance, and built to last 50+ years.",
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
        name: "Insurance Claims",
        description:
          "We work directly with your insurance company to streamline the claims process. Our documentation and expertise help ensure you receive fair coverage.",
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
    subOfferings: [
      {
        name: "Gutter Installation",
        description:
          "Custom-fitted seamless box gutter systems designed to handle heavy rainfall. Precision-measured and installed for maximum water flow and durability.",
      },
      {
        name: "Gutter Repair",
        description:
          "Leaking, sagging, or overflowing gutters? We repair and reseal box gutter systems to restore proper drainage and prevent foundation damage.",
      },
      {
        name: "Gutter Guards",
        description:
          "Keep leaves and debris out with professionally installed gutter guards. Reduce maintenance and prevent clogs that lead to water damage.",
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
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    description:
      "Reliable contracting services for renovations, additions, siding, and structural repairs throughout the Pittsburgh area.",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Professional landscaping to complement your home's curb appeal — grading, retaining walls, drainage solutions, and more.",
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
            <Image
              src="/logo.png"
              alt="Quality Home Protection"
              width={140}
              height={140}
              priority
              className="mb-6"
            />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Quality Home Protection
            </h1>
            <p className="mb-2 text-xl font-medium text-amber-400">
              Built to Last. Backed by Trust.
            </p>
            <p className="max-w-md text-slate-300">
              Pittsburgh&apos;s trusted experts in roofing, storm restoration,
              gutters, and home improvement. We protect what matters most — your
              home and your family.
            </p>
          </div>

          {/* Right — Contact form */}
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
        </div>
      </section>

      {/* Offerings summary divider */}
      <SectionDivider
        subtitle="Roofing services, storm restoration, gutters, and other contracting services — all from one trusted team."
      />

      {/* Primary Services */}
      <section className="w-full bg-slate-900 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          {primaryServices.map((svc, i) => (
            <div key={svc.id} id={svc.id} className="scroll-mt-24">
              <PrimaryServiceSection
                title={svc.title}
                subOfferings={svc.subOfferings}
                reverse={i % 2 === 1}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Services */}
      <section className="w-full bg-slate-900 px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {secondaryServices.map((svc) => (
            <div key={svc.id} id={svc.id} className="scroll-mt-24">
              <ServiceCard
                title={svc.title}
                description={svc.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <Reviews />

      {/* Short divider */}
      <SectionDivider
        heading="Ready to Get Started?"
        cta="Request Your Free Estimate"
      />

      {/* Company Info */}
      <div id="about" className="scroll-mt-24">
        <CompanyInfoBlock />
      </div>
    </>
  );
}
