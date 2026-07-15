import { business } from "../data/site";
import { HighLevelForm } from "./HighLevelForm";

function InfoIcon({ type }: { type: "phone" | "email" | "area" }) {
  const paths = {
    phone: <path d="M6.6 3.5l2.2 4.2-1.7 1.7a15.8 15.8 0 007.5 7.5l1.7-1.7 4.2 2.2-.9 3.1c-.3 1-1.2 1.6-2.2 1.5C9.3 21.2 2.8 14.7 2 6.6c-.1-1 .5-1.9 1.5-2.2l3.1-.9z" />,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    area: <><path d="M12 21s-6-5.7-6-10a6 6 0 1112 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></>,
  };

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-specialist/10 text-specialist">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[type]}
      </svg>
    </span>
  );
}

export function HomeContact() {
  return (
    <section id="home-contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">Contact Us</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Get Your <span className="text-specialist">Free Water Report</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-ink/65">
            Tell us a little about your home and water. We’ll explain your options clearly—no pressure and no obligation.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="space-y-6">
              <a href={business.phoneHref} className="group flex items-start gap-4">
                <InfoIcon type="phone" />
                <span>
                  <span className="block font-heading text-sm font-semibold text-navy">Phone</span>
                  <span className="notranslate mt-1 block font-body text-sm text-ink/65 group-hover:text-specialist" translate="no">{business.phone}</span>
                </span>
              </a>

              <a href={`mailto:${business.email}`} className="group flex items-start gap-4">
                <InfoIcon type="email" />
                <span>
                  <span className="block font-heading text-sm font-semibold text-navy">Email</span>
                  <span className="notranslate mt-1 block break-all font-body text-sm text-ink/65 group-hover:text-specialist" translate="no">{business.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <InfoIcon type="area" />
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">Service Area</p>
                  <p className="mt-1 font-body text-sm text-ink/65">{business.serviceRadius}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-heading text-sm font-semibold text-navy">Communities We Serve</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {business.serviceAreas.map((area) => (
                  <span key={area} className="rounded-full border border-sky/20 bg-white px-3 py-1.5 font-body text-xs text-ink/65 shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-specialist p-6 text-white shadow-lg">
              <p className="font-heading text-lg font-semibold">Prefer to talk first?</p>
              <p className="mt-2 font-body text-sm text-white/70">Call and tell us what you’re noticing. We’ll help you identify the right next step.</p>
              <a href={business.phoneHref} className="mt-5 inline-flex items-center gap-2 font-heading text-base font-bold text-amber hover:underline">
                <span className="notranslate" translate="no">{business.phone}</span> <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <p className="font-heading text-lg font-bold text-navy">Request Your Free Report</p>
                <p className="mt-1 font-body text-xs text-ink/50">Secure form powered by GoHighLevel</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-emerald-800">Live Form</span>
            </div>

            <div className="min-h-[608px] overflow-hidden rounded-2xl bg-white">
              <HighLevelForm placement="home" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
