import { Link } from "react-router-dom";
import { comparison } from "../data/site";

function Value({ value, highlighted = false }: { value: string | boolean; highlighted?: boolean }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-specialist text-white" aria-label="Yes">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  }

  if (value === false) {
    return <span className="font-heading text-lg font-bold text-red-400" aria-label="No">×</span>;
  }

  return (
    <span className={`font-body text-xs leading-snug ${highlighted ? "font-semibold text-navy" : "text-ink/60"}`}>
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            How We Compare
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            We Named <span className="bg-gradient-to-r from-specialist to-sky bg-clip-text text-transparent">The Competition</span>
          </h2>
          <p className="mt-4 font-body text-ink/65">
            Vague comparisons are not useful. Here is how our published offer
            stacks up against common alternatives.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
          <table className="w-full min-w-[1050px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="w-[25%] px-5 py-5 text-left font-body text-xs font-semibold text-ink/60">
                  Feature
                </th>
                {comparison.columns.map((column, index) => (
                  <th
                    key={column}
                    className={`w-[15%] px-4 py-4 text-center font-heading text-sm font-semibold ${
                      index === 0 ? "bg-navy text-white" : "text-ink/75"
                    }`}
                  >
                    {index === 0 && <span className="mb-1 block font-body text-[10px] uppercase tracking-wider text-white/70">Our Company</span>}
                    <span className="notranslate" translate="no">{column}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-4 font-body text-sm font-medium text-ink">
                    {row.feature}
                  </td>
                  {row.values.map((value, index) => (
                    <td key={`${row.feature}-${comparison.columns[index]}`} className={`px-4 py-4 text-center ${index === 0 ? "bg-specialist/[0.07]" : ""}`}>
                      <Value value={value} highlighted={index === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-4 max-w-4xl text-center font-body text-xs leading-relaxed text-ink/45">
          Competitor pricing and terms reflect publicly available information as of June 2026 and may vary by location, provider, home, and selected equipment. Verify current terms directly with each provider.
        </p>

        <div className="mt-9 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-sky px-8 py-4 font-body text-base font-semibold text-navy shadow-md transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Get Our Price — No Obligation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
