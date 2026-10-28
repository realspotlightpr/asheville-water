import { Icon } from "./Icon";
import { features, stats } from "../data/site";

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          What's Included
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          What you get before, during, and after installation
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

      <div className="mt-12 overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,var(--color-navy),var(--color-specialist))] px-6 py-8 shadow-[0_22px_60px_rgba(20,35,59,0.14)] sm:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${index % 2 === 1 ? "border-l border-white/15" : ""} lg:border-l lg:first:border-l-0`}
            >
              <p className="font-heading text-3xl font-extrabold text-amber sm:text-4xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-2 max-w-40 font-body text-xs leading-5 text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
