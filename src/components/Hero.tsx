import { Link } from "react-router-dom";
import { HighLevelForm } from "./HighLevelForm";
import { business, heroBadge } from "../data/site";
import { SmsConsentDisclosure } from "./SmsConsentDisclosure";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-navy/80 to-ink/75" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:py-16">
        <div className="lg:pt-12">
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
              Book a Free Consultation →
            </Link>
            <a href={business.phoneHref} className="rounded-full border-2 border-white/50 px-7 py-3.5 font-body text-base font-semibold text-white transition hover:bg-white hover:text-navy">
              Call <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-white/80 bg-[#0d1f50]/95 p-4 shadow-2xl backdrop-blur sm:p-7">
            <p className="text-center font-heading text-2xl font-medium leading-tight text-white">
              Request a <span className="font-bold underline decoration-2 underline-offset-4">FREE</span>
              <br />
              Consultation Today!
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl bg-white">
              <HighLevelForm placement="hero" />
            </div>
            <div className="mx-auto mt-4 max-w-md text-center">
              <SmsConsentDisclosure dark />
            </div>
            <img
              src="/hero-form-logos.png"
              alt="Google 5.0 rating, Facebook 5.0 rating, and BBB Rated A Trusted"
              className="mx-auto mt-5 h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
