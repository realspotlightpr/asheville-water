import { Link } from "react-router-dom";
import { business } from "../data/site";

type CtaBandProps = {
  heading?: string;
  sub?: string;
};

export function CtaBand({
  heading = "Ready to Know What's In Your Water?",
  sub = "Start with a free personalized water report — no obligation, no high-pressure sales.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src="/assets/cta-clean-water-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-specialist/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,35,59,0.25)_100%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur-sm">
          Your Water, Clearly Explained
        </span>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-2xl font-body text-lg text-white/80">{sub}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-lg transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Get My Free Water Report
          </Link>
          <a
            href={business.phoneHref}
            className="rounded-full border-2 border-white/80 bg-navy/20 px-7 py-3.5 font-body text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-specialist"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
