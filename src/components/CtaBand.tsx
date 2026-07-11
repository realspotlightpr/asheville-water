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
    <section className="bg-specialist">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-2xl font-body text-white/80">{sub}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-md transition hover:brightness-95"
          >
            Get My Free Water Report
          </Link>
          <a
            href={business.phoneHref}
            className="rounded-full border-2 border-white px-7 py-3.5 font-body text-base font-semibold text-white transition hover:bg-white hover:text-specialist"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
