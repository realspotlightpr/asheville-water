import { Link } from "react-router-dom";
import { business, heroBadge } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100svh-5.5rem)] overflow-hidden bg-navy sm:min-h-[680px] lg:min-h-[720px]">
      <img
        src="/assets/hero-running-water.webp"
        alt=""
        className="hero-media absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-center"
        width="1920"
        height="1080"
        fetchPriority="high"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(56,151,210,0.08),transparent_34%),linear-gradient(90deg,rgba(8,23,43,0.96)_0%,rgba(20,35,59,0.88)_43%,rgba(20,35,59,0.5)_72%,rgba(8,23,43,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/55 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-7xl items-center px-4 py-14 sm:min-h-[680px] sm:px-6 lg:min-h-[720px] lg:py-20">
        <div className="max-w-3xl">
          <span className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 font-body text-xs font-semibold text-white/90 shadow-sm backdrop-blur-md sm:text-sm">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-navy">✓</span>
            {heroBadge}
          </span>

          <h1 className="hero-enter hero-enter-2 mt-5 max-w-[17ch] font-heading text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-[3.5rem]">
            #1 Top-Rated Water Filtration &amp; Treatment Experts{" "}
            <span className="text-sky">in Asheville, NC</span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-5 max-w-xl font-body text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Cleaner, better-tasting water designed around your home, your water source, and your goals—with honest recommendations and licensed installation across Western North Carolina.
          </p>

          <div className="hero-enter hero-enter-4 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-xs font-semibold text-white/72 sm:text-sm">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky" />Test-led recommendations</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky" />NC-licensed installation</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky" />No-pressure guidance</span>
          </div>

          <div className="hero-enter hero-enter-5 mt-7 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/contact" className="premium-button rounded-full bg-amber px-7 py-3.5 font-body text-sm font-bold text-ink shadow-[0_14px_35px_rgba(242,169,59,0.2)] sm:text-base">
              Get a Free Consultation <span aria-hidden="true">→</span>
            </Link>
            <a href={business.phoneHref} className="premium-button rounded-full border border-white/35 bg-white/[0.06] px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-navy sm:text-base">
              Call <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
