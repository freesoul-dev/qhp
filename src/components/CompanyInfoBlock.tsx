import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function CompanyInfoBlock() {
  return (
    <section className="w-full bg-slate-900 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* About */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">About Us</h2>
          {/* <div className="relative mb-6 aspect-square w-xs">
            <Image src="/logo.png" alt="About Us" fill className="object-contain w-full h-full" />
          </div> */}
          <p className="leading-relaxed text-slate-300">
            We are a Pittsburgh-based exterior home improvement company that believes every homeowner deserves top-quality 
            roofing, siding, and gutters—without breaking the bank. While others cut corners or charge premium prices, 
            we deliver expert craftsmanship at honest, modest rates. 
            We know Pittsburgh's weather is tough on homes, which is why we use proven materials and skilled 
            installation to protect your biggest investment for years to come.
            <br />
            <br />
            We pride ourselves on
            quality workmanship from local crews,
            transparent pricing, with no surprises,
            deep understanding of Pittsburgh's climate challenges,
            and a commitment to doing it right the first time.
            <br />
            <br />
            We are open <b className="text-amber-400">7 days a week</b>, <b className="text-amber-400">8am-6pm</b>. Give us a call at <a href="tel:412-641-0642" className="text-amber-400">+1 (412) 641-0642</a>, email us at <a href="mailto:admin@qualityhome.co" className="text-amber-400">admin@qualityhome.co</a>, or fill out the contact form to schedule a free consultation.
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
