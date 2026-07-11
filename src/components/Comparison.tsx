import { Link } from "react-router-dom";
import { comparison } from "../data/site";

function Check() {
  return (
    <svg className="mx-auto h-5 w-5 text-specialist" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="mx-auto h-5 w-5 text-ink/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function Comparison() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            The Specialist Difference
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            How We're Different
          </h2>
          <p className="mt-4 font-body text-ink/70">
            Most companies start by asking which system you want. We start by
            understanding your water.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[520px] overflow-hidden rounded-2xl bg-white shadow-sm">
            <thead>
              <tr className="border-b border-mist">
                <th className="px-5 py-4 text-left font-body text-xs font-semibold uppercase tracking-wide text-ink/50">
                  What matters
                </th>
                <th className="bg-specialist/5 px-5 py-4 text-center font-heading text-sm font-bold text-specialist">
                  {comparison.columns[0]}
                </th>
                <th className="px-5 py-4 text-center font-heading text-sm font-semibold text-ink/50">
                  {comparison.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature} className="border-b border-mist last:border-0">
                  <td className="px-5 py-4 font-body text-sm text-ink/80">
                    {row.feature}
                  </td>
                  <td className="bg-specialist/5 px-5 py-4 text-center">
                    <Check />
                  </td>
                  <td className="px-5 py-4 text-center">
                    {row.them === "varies" ? (
                      <span className="font-body text-xs font-medium text-ink/40">
                        Varies
                      </span>
                    ) : (
                      <Cross />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center font-body text-xs text-ink/50">
          "Typical Installer" reflects common industry practices, not any
          specific company.
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-md transition hover:brightness-95"
          >
            Get Our Price — No Obligation
          </Link>
        </div>
      </div>
    </section>
  );
}
