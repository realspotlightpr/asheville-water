import { Link } from "react-router-dom";
import { business, heroBadge } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <img
        src="/assets/hero-running-water.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width="1920"
        height="1080"
        fetchPriority="high"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-navy/80 to-ink/75" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-1.5 font-body text-sm font-medium text-white backdrop-blur">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-navy">✓</span>
            {heroBadge}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.04] text-white sm:text-5xl lg:text-[3.45rem]">
            #1 Top-Rated Water Filtration &amp; Treatment Experts{" "}
            <span className="text-sky">in Asheville, NC</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Asheville Water Specialists helps Western North Carolina homeowners enjoy cleaner,
            better-tasting water with professional whole-home water filtration, reverse osmosis
            drinking water systems, water softeners, carbon filtration, well water treatment,
            and city water treatment solutions. We provide honest recommendations and dependable
            installation designed around your home&apos;s water quality needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border-2 border-sky px-5 py-2.5 font-body text-sm font-semibold text-white">
              ✓ Whole-Home Water Filtration
            </span>
            <span className="rounded-full border-2 border-sky px-5 py-2.5 font-body text-sm font-semibold text-white">
              ✓ Reverse Osmosis Drinking Water
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-lg transition hover:brightness-95">
              Learn About Your Water →
            </Link>
            <a href={business.phoneHref} className="rounded-full border-2 border-white/50 px-7 py-3.5 font-body text-base font-semibold text-white transition hover:bg-white hover:text-navy">
              Call <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>
          <p className="mt-5 max-w-xl font-body text-sm leading-6 text-white/75">
            Have a quick question? Use the chat button in the lower corner to speak with our team.
          </p>
        </div>
      </div>
    </section>
  );
}
