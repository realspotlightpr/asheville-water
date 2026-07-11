import { business } from "../data/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Service Area
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Proudly Serving Western North Carolina
          </h2>
          <p className="mt-4 font-body text-ink/70">
            We install within a {business.serviceRadius}, covering city and
            well-water homes alike across the region.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {business.serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-sky/40 bg-sky/10 px-4 py-2 font-body text-sm font-medium text-navy"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
