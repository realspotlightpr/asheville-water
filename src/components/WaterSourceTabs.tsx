import { useState } from "react";
import { waterSources } from "../data/site";

export function WaterSourceTabs() {
  const [active, setActive] = useState(0);
  const source = waterSources[active];

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          Signs You Might Have a Water Problem
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          What's Your Water Source?
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Choose your water source">
        {waterSources.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setActive(i)}
            id={`water-source-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="water-source-panel"
            className={`min-h-11 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition ${
              i === active
                ? "bg-specialist text-white shadow-sm"
                : "bg-mist text-ink/70 hover:bg-sky/15"
            }`}
          >
            {s.key}
          </button>
        ))}
      </div>

      <div
        key={source.key}
        id="water-source-panel"
        role="tabpanel"
        aria-labelledby={`water-source-tab-${active}`}
        className="tab-panel-enter mt-8 grid gap-8 rounded-3xl border border-sky/10 bg-mist p-8 sm:p-10 lg:grid-cols-2"
      >
        <div>
          <h3 className="font-heading text-2xl font-bold text-navy">
            {source.heading}
          </h3>
          <p className="mt-4 font-body text-ink/70">{source.intro}</p>
        </div>
        <ul className="divide-y divide-sky/15 border-y border-sky/15">
          {source.signs.map((sign) => (
            <li
              key={sign}
              className="flex items-start gap-3 py-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky/15 text-specialist">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="font-body text-sm text-ink/80">{sign}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
