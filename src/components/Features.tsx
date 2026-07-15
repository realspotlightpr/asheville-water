import { Icon } from "./Icon";
import { features } from "../data/site";

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          What's Included
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          The <span className="notranslate" translate="no">Asheville Water Specialists</span> Standard
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-mist bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/15 text-specialist">
              <Icon name={feature.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
              {feature.title}
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
