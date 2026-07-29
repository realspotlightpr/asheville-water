import { Link } from "react-router-dom";
import { HighLevelForm } from "./HighLevelForm";
import { business, heroBadge } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-specialist/88 to-ink/95" />
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full opacity-[0.12]" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 180 C 300 80, 600 260, 1200 120 L 1200 300 L 0 300 Z" fill="#3897D2" />
        <path d="M0 230 C 300 140, 600 300, 1200 180 L 1200 300 L 0 300 Z" fill="#ffffff" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-7 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-5 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white backdrop-blur">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-navy">✓</span>
            {heroBadge}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            #1 Top-Rated Water Filtration &amp; Treatment Experts{" "}
            <span className="text-sky">in Asheville, NC</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/80">
            Asheville Water Specialists helps Western North Carolina homeowners enjoy cleaner,
            better-tasting water with professional whole-home water filtration, reverse osmosis
            drinking water systems, water softeners, carbon filtration, well water treatment,
            and city water treatment solutions. We provide honest recommendations and dependable
            installation designed around your home&apos;s water quality needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-lg transition hover:brightness-95">
              Book a Free Consultation →
            </Link>
            <a href={business.phoneHref} className="rounded-full border-2 border-white/40 px-7 py-3.5 font-body text-base font-semibold text-white transition hover:bg-white hover:text-navy">
              Call <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>
        </div>

        <div className="lg:-ml-2 lg:pt-1">
          <div className="rounded-3xl border border-white/20 bg-navy/90 p-6 shadow-2xl backdrop-blur sm:p-8">
            <p className="text-center font-heading text-xl font-bold text-white">
              Request a <span className="text-amber">FREE</span><br />Consultation Today!
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl bg-white">
              <HighLevelForm placement="hero" />
            </div>
            <p className="mt-4 text-center font-body text-xs font-semibold uppercase tracking-[0.13em] text-white/60">
              Licensed · Local · Trusted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
