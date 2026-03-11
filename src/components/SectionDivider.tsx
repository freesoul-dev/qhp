import Link from "next/link";

interface SectionDividerProps {
  heading?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
  compact?: boolean;
}

export default function SectionDivider({
  heading,
  subtitle,
  cta,
  href = "/estimate",
  compact = false,
}: SectionDividerProps) {
  return (
    <section
      className={`w-full bg-slate-800 px-6 text-center ${compact ? "py-10" : "py-16"}`}
    >
      <div className="mx-auto max-w-2xl">
        {heading && (
          <h2
            className={`font-bold text-white ${compact ? "text-xl" : "mb-4 text-2xl sm:text-3xl"}`}
          >
            {heading}
          </h2>
        )}
        {subtitle && (
          <p
            className={`text-slate-300 ${heading ? "mt-3" : ""} ${cta ? "mb-6" : ""}`}
          >
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={href}
            className="inline-block rounded-md bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
