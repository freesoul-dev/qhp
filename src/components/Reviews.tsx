const testimonials = [
  {
    name: "Michael R.",
    location: "Mt. Lebanon, PA",
    text: "Quality Home Protection replaced our entire roof after a bad hailstorm. They handled the insurance claim, showed up on time, and the finished product looks incredible. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Squirrel Hill, PA",
    text: "We had a failing box gutter system that two other companies couldn't figure out. QHP diagnosed the issue on the first visit and had it fixed within a week. Professional from start to finish.",
    rating: 5,
  },
  {
    name: "James & Linda K.",
    location: "Dormont, PA",
    text: "They built us a beautiful new deck and handled some siding repairs at the same time. The crew was respectful, clean, and the pricing was fair. We've already recommended them to our neighbors.",
    rating: 5,
  }
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="w-full bg-slate-800 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
          What Our Clients Say
        </h2>
        <p className="mb-12 text-center text-slate-400">
          Real feedback from Pittsburgh homeowners we&apos;ve worked with.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-lg border border-slate-700 bg-slate-900 p-6"
            >
              <Stars count={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-slate-700 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
