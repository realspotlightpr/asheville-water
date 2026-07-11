import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "../components/ContactForm";
import { business } from "../data/site";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get Your Free Water Report"
        subtitle="No obligation, no high-pressure sales — just answers about what's coming out of your tap."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={business.phoneHref}
            className="rounded-2xl border border-mist bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-specialist">
              Call
            </p>
            <p className="mt-2 font-heading text-lg font-bold text-navy">
              {business.phone}
            </p>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="rounded-2xl border border-mist bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-specialist">
              Email
            </p>
            <p className="mt-2 font-heading text-base font-bold text-navy break-words">
              {business.email}
            </p>
          </a>
          <div className="rounded-2xl border border-mist bg-white p-6 text-center shadow-sm">
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-specialist">
              Service Area
            </p>
            <p className="mt-2 font-heading text-base font-bold text-navy">
              {business.serviceRadius}
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
