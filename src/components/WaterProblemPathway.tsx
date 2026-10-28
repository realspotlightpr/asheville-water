import { Link } from "react-router-dom";
import { Icon } from "./Icon";

const concerns = [
  {
    title: "Scale, spots, or stiff laundry",
    label: "Hard water",
    description: "See how testing and correct sizing determine whether a water softener is the right fit.",
    link: "/water-softener-installation-asheville-nc/",
    icon: "sparkle",
  },
  {
    title: "Chlorine taste or odor",
    label: "City water",
    description: "Compare whole-home carbon filtration and treatment options for municipal water.",
    link: "/whole-home-water-filtration-asheville-nc/",
    icon: "droplet",
  },
  {
    title: "Orange stains or rotten-egg odor",
    label: "Private wells",
    description: "Start with measured iron, sulfur, manganese, pH, and flow—not a preset equipment package.",
    link: "/well-water-treatment-asheville-nc/",
    icon: "wind",
  },
  {
    title: "Cloudy water or visible sediment",
    label: "Filtration",
    description: "Learn which filter stages address sediment and how they fit into a complete treatment plan.",
    link: "/water-filtration-systems-asheville-nc/",
    icon: "beaker",
  },
  {
    title: "Concerns about drinking water",
    label: "Testing + RO",
    description: "Choose useful testing first, then review point-of-use reverse osmosis when the results support it.",
    link: "/resources/topics/contaminants-testing/",
    icon: "shield",
  },
];

export function WaterProblemPathway() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24" aria-labelledby="water-concerns-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-specialist">
              Start with what you notice
            </p>
            <h2 id="water-concerns-title" className="mt-3 max-w-xl font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Find the right path for your water concern
            </h2>
            <p className="mt-5 max-w-lg font-body leading-7 text-ink/65">
              Different problems require different testing and treatment. Choose the closest match to understand the next useful step before comparing equipment.
            </p>
            <Link
              to="/contact"
              className="premium-button mt-7 inline-flex min-h-11 items-center rounded-full bg-amber px-6 py-3 font-body text-sm font-bold text-ink shadow-sm"
            >
              Not sure? Ask a specialist <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="divide-y divide-sky/15 border-y border-sky/15">
            {concerns.map((concern, index) => (
              <Link
                key={concern.title}
                to={concern.link}
                className="group grid gap-4 py-6 transition-colors hover:bg-mist/55 focus-visible:bg-mist/55 sm:grid-cols-[3.25rem_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-specialist/10 text-specialist transition duration-200 group-hover:bg-specialist group-hover:text-white">
                  <Icon name={concern.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-specialist/75">
                    {String(index + 1).padStart(2, "0")} · {concern.label}
                  </span>
                  <span className="mt-1 block font-heading text-lg font-bold text-navy sm:text-xl">{concern.title}</span>
                  <span className="mt-2 block max-w-2xl font-body text-sm leading-6 text-ink/62">{concern.description}</span>
                </span>
                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-sky/25 text-specialist transition group-hover:translate-x-1 group-hover:border-specialist sm:flex" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
