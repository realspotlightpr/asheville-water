import { useState, type FormEvent } from "react";
import { business } from "../data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder only — no backend wired up yet. Replace with a real
    // submission handler (CRM webhook, email service, etc.) before launch.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-navy shadow-xl">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              Free Water Report
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white">
              Get Your Free Personalized Water Report
            </h2>
            <p className="mt-4 font-body text-sm text-white/70">
              No obligation, no high-pressure sales — just answers about
              what's coming out of your tap. Prefer to talk first?
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 inline-block font-heading text-lg font-bold text-amber"
            >
              {business.phone}
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <p className="font-heading text-lg font-semibold text-navy">
                  Thanks! We'll be in touch shortly.
                </p>
                <p className="mt-2 font-body text-sm text-ink/60">
                  (Placeholder confirmation — connect this form to your CRM
                  or lead-routing tool before launch.)
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="font-body text-xs font-semibold text-ink/70">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-body text-sm text-ink outline-none focus:border-specialist"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-body text-xs font-semibold text-ink/70">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-body text-sm text-ink outline-none focus:border-specialist"
                      placeholder="(828) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-ink/70">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-body text-sm text-ink outline-none focus:border-specialist"
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-ink/70">
                    Address / City
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-body text-sm text-ink outline-none focus:border-specialist"
                    placeholder="123 Main St, Asheville, NC"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-ink/70">
                    City Water or Well?
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-mist px-3 py-2 font-body text-sm text-ink outline-none focus:border-specialist">
                    <option>City water</option>
                    <option>Private well</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-amber px-6 py-3 font-body text-sm font-semibold text-ink transition hover:brightness-95"
                >
                  Request My Free Water Report
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
