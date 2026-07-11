import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { ProductSpotlight } from "./ProductSpotlight";
import { business, dealerBadge, heroPains } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      {/* Background video — drop your file at public/hero.mp4 (and optional
          public/hero-poster.jpg). Falls back to the gradient if absent. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay (semi-transparent so the video shows through) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-specialist/85 to-ink/90" />

      {/* decorative waves */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full opacity-[0.12]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 180 C 300 80, 600 260, 1200 120 L 1200 300 L 0 300 Z" fill="#3897D2" />
        <path d="M0 230 C 300 140, 600 300, 1200 180 L 1200 300 L 0 300 Z" fill="#ffffff" />
      </svg>
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-sm font-medium text-white backdrop-blur">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-navy">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            {dealerBadge}
          </span>

          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
            Water Filtration
            <br />
            &amp; Softening
            <br />
            <span className="text-sky">in Asheville, NC</span>
          </h1>

          <p className="mt-6 font-body text-lg font-medium text-white/90">
            Not sure what's actually in your water?
          </p>
          <p className="mt-2 max-w-xl font-body text-lg text-white/70">
            Get clean, soft water from every tap. We test first, then recommend
            only what your home's water needs — no scare tactics, no
            one-size-fits-all systems.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroPains.map((pain) => (
              <div
                key={pain.label}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky/25 text-white">
                  <Icon name={pain.icon} className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-white/90">{pain.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-lg transition hover:brightness-95"
            >
              Get My Free Water Report →
            </Link>
            <a
              href={business.phoneHref}
              className="rounded-full border-2 border-white/40 px-7 py-3.5 font-body text-base font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Call {business.phone}
            </a>
          </div>
        </div>

        <div className="lg:pl-4">
          <ProductSpotlight />
        </div>
      </div>
    </section>
  );
}
