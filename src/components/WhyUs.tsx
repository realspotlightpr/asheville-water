import { pillars } from "../data/site";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Why Homeowners Choose Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            We Sell Clarity and Confidence — Not Just Equipment
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-heading text-sm font-bold text-amber">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-sm text-white/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
