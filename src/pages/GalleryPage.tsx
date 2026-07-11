import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

const placeholders = [
  "Whole-home softener install",
  "Dual-tank city water system",
  "Under-sink reverse osmosis",
  "Well water iron & sulfur system",
  "Before & after water test",
  "Licensed plumber at work",
  "Garage utility install",
  "RO faucet at the kitchen sink",
  "Salt-free conditioner setup",
];

export function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our Work Around Western North Carolina"
        subtitle="Clean, professional installations by a licensed North Carolina plumber."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-8 rounded-xl border border-amber/40 bg-amber/10 px-5 py-4 text-center font-body text-sm text-ink/70">
          Photo gallery coming soon — real install photos will replace these
          placeholders as jobs are completed.
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((label, i) => (
            <div
              key={label}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-specialist to-sky text-white shadow-sm"
            >
              <svg
                viewBox="0 0 64 40"
                className="h-10 w-auto opacity-40"
                aria-hidden="true"
              >
                <path
                  d="M4 16 C 14 4, 24 4, 34 12 C 44 20, 54 20, 60 10"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 28 C 14 16, 24 16, 34 24 C 44 32, 54 32, 60 22"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute bottom-4 left-4 right-4 font-body text-sm font-medium text-white/90">
                {i + 1}. {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
