import { HighLevelForm } from "./HighLevelForm";
import { business, heroBadge } from "../data/site";
import { SmsConsentDisclosure } from "./SmsConsentDisclosure";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12 lg:py-16">
        <div className="max-w-3xl lg:sticky lg:top-28 lg:pt-12">
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
            <a href="#hero-consultation" className="premium-button rounded-full bg-amber px-7 py-3.5 font-body text-sm font-bold text-ink shadow-[0_14px_35px_rgba(242,169,59,0.2)] sm:text-base">
              Get a Free Consultation <span aria-hidden="true">→</span>
            </a>
            <a href={business.phoneHref} className="premium-button rounded-full border border-white/35 bg-white/[0.06] px-7 py-3.5 font-body text-sm font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-navy sm:text-base">
              Call <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>
        </div>

        <div id="hero-consultation" className="scroll-mt-28 rounded-[1.75rem] border border-white/15 bg-navy/88 p-3 shadow-[0_30px_80px_rgba(4,14,29,0.48)] backdrop-blur-xl sm:p-6">
          <div className="px-2 pb-5 text-center sm:px-4">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">Start with your water concerns</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">Request Your Free Consultation</h2>
            <p className="mx-auto mt-2 max-w-lg font-body text-sm leading-6 text-white/70">Tell us what you’re noticing. We’ll help you identify a practical next step—without pressure.</p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <HighLevelForm placement="hero" />
          </div>
          <div className="mx-auto mt-4 max-w-lg px-2 text-center sm:px-4">
            <SmsConsentDisclosure dark />
          </div>
        </div>
      </div>
    </section>
  );
}
