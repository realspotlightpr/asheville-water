import { journey } from "../data/site";
import { Icon } from "./Icon";

const stepIcons = ["beaker", "sparkle", "wind", "tag", "badge", "refresh"];
const stepLabels = ["Discover", "Understand", "Talk", "Choose", "Install", "Support"];

export function Journey() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-specialist/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            From Free Report to Clean Water — Start to Finish
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-ink/65">
            A clear, pressure-free path built around your home and your water.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-gradient-to-r from-sky/20 via-specialist/50 to-sky/20 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map((step, i) => (
              <article
                key={step}
                className="group relative flex min-h-52 flex-col rounded-2xl border border-sky/15 bg-white p-5 shadow-[0_12px_40px_rgba(15,75,145,0.08)] transition duration-300 hover:-translate-y-2 hover:border-sky/40 hover:shadow-[0_18px_50px_rgba(15,75,145,0.16)]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-specialist to-sky text-white shadow-lg shadow-specialist/20 transition group-hover:rotate-3 group-hover:scale-105">
                    <Icon name={stepIcons[i]} className="h-7 w-7" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-mist transition group-hover:text-sky/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-specialist">
                  {stepLabels[i]}
                </p>
                <h3 className="mt-2 font-heading text-sm font-semibold leading-snug text-navy">
                  {step}
                </h3>

                {i < journey.length - 1 && (
                  <span className="absolute -right-3 top-10 z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-sky/20 bg-white text-xs text-specialist shadow-sm lg:flex" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-sky/15 bg-mist/60 px-5 py-2.5 font-body text-xs text-ink/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            One clear point of contact from report through follow-up
          </div>
        </div>
      </div>
    </section>
  );
}
