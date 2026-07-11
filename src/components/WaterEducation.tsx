const topics = [
  {
    title: "City Water",
    body: "Municipal treatment handles bacteria, but chlorine byproducts, disinfection residue, and taste/odor issues are common even on well-treated supplies. Two homes on the same street can test differently depending on plumbing age and distance from treatment.",
  },
  {
    title: "Well Water",
    body: "Private wells are unregulated and untested by default. Common concerns include iron staining, sulfur ('rotten egg') odor, manganese, sediment, bacteria, hardness, and acidity — each requiring a different treatment approach.",
  },
  {
    title: "PFAS & Emerging Contaminants",
    body: "Growing public concern about PFAS ('forever chemicals') and other emerging contaminants is one of the biggest reasons homeowners are testing their water for the first time.",
  },
  {
    title: "Aging Plumbing & Fixtures",
    body: "Hard water and chlorine byproducts accelerate wear on pipes, water heaters, and appliances over time — often well before a homeowner notices a problem at the tap.",
  },
];

export function WaterEducation() {
  return (
    <section id="water-quality" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Water Quality 101
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Every Home's Water Is Different
          </h2>
          <p className="mt-4 font-body text-ink/70">
            We don't publish generic contamination numbers because they don't
            apply to your home. That's why every recommendation starts with a
            personalized water report — not a canned sales pitch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-navy">
                {topic.title}
              </h3>
              <p className="mt-3 font-body text-sm text-ink/70">{topic.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
