import { business } from "../data/site";
import { HighLevelForm } from "./HighLevelForm";

export function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-xl bg-navy shadow-xl">
        <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[0.55fr_1.45fr] lg:items-start lg:p-10">
          <div className="lg:sticky lg:top-28">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              Free Consultation
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white">
              Get Your Free Consultation
            </h2>
            <p className="mt-4 font-body text-sm leading-6 text-white/70">
              No obligation and no high-pressure sales—just clear next steps based on your home and water concerns. Prefer to talk first?
            </p>
            <a href={business.phoneHref} className="mt-5 inline-block font-heading text-lg font-bold text-amber">
              <span className="notranslate" translate="no">{business.phone}</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-lg bg-white p-2">
            <HighLevelForm placement="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
