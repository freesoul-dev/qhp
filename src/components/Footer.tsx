import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 px-6 py-12 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Quality Home Protection LLC
          </h3>
          <p className="text-sm leading-relaxed">
            Trusted roofing and home improvement services in the Pittsburgh, PA
            area.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-amber-400">Home</Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition-colors hover:text-amber-400">Portfolio</Link>
            </li>
            <li>
              <Link href="/estimate" className="transition-colors hover:text-amber-400">Free Estimate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:412-641-0642" className="transition-colors hover:text-amber-400">
                +1 (412) 641-0642
              </a>
            </li>
            <li>
              <a href="mailto:admin@qualityhome.co" className="transition-colors hover:text-amber-400">
                admin@qualityhome.co
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-xs">
        &copy; {new Date().getFullYear()} Quality Home Protection LLC. All
        rights reserved.
      </div>
    </footer>
  );
}
