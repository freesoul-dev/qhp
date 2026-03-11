import Link from "next/link";
import ContactForm from "./ContactForm";

export default function CompanyInfoBlock() {
  return (
    <section className="w-full bg-slate-900 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* About */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">About Us</h2>
          <div className="mb-6 aspect-video w-full rounded-lg bg-slate-700" />
          <p className="leading-relaxed text-slate-300">
            Quality Home Protection LLC has been serving the Pittsburgh area
            with reliable roofing, storm restoration, gutters, decks, and
            general contracting services. We take pride in our craftsmanship
            and commitment to protecting your home.
          </p>
        </div>

        {/* Contact Form + Estimate Link */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Contact Us</h2>
            <ContactForm variant="compact" />
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Need a Detailed Quote?
            </h2>
            <p className="mb-4 text-sm text-slate-400">
              Fill out our full estimate form for a comprehensive quote on your
              project.
            </p>
            <Link
              href="/estimate"
              className="inline-block rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
