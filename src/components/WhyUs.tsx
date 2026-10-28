import { pillars } from "../data/site";

export function WhyUs() {
  return (
    <section id="why-us" className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <img
        src="/assets/asheville-water-specialists-family.webp"
        alt=""
        className="water-parallax absolute inset-0 -z-20 h-full w-full object-cover object-[52%_42%] opacity-35 sm:object-[center_38%]"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        data-water-parallax
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(20,35,59,0.98)_0%,rgba(20,35,59,0.93)_48%,rgba(15,75,145,0.86)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_38%,rgba(56,151,210,0.25),transparent_34%)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Why Homeowners Choose Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            The right treatment starts with a water test — not a sales pitch.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-white/18 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="border-l border-white/18 pl-5 backdrop-blur-[2px]"
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
