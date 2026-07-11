import { journey } from "../data/site";

export function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          How It Works
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          From Free Report to Clean Water — Start to Finish
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {journey.map((step, i) => (
          <div
            key={step}
            className="flex items-start gap-4 rounded-xl border border-mist bg-mist/40 p-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-specialist font-heading text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="font-body text-sm font-medium text-ink pt-1.5">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
