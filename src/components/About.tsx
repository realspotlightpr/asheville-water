export function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:items-center">
        <div className="lg:col-span-1">
          <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-specialist text-white shadow-lg">
            <span className="font-heading text-5xl font-bold">DB</span>
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Meet the Founder
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Local Expertise. Honest Recommendations.
          </h2>
          <p className="mt-4 font-body text-ink/70">
            I'm Doug, founder of Asheville Water Specialists. One of the
            biggest misconceptions is that if you're on city water, you don't
            need filtration — but every water source is different. That's why
            every recommendation we make starts with understanding your
            home's water, not selling equipment.
          </p>
          <p className="mt-4 font-body text-ink/70">
            Every system is installed by a licensed North Carolina plumber and
            backed by real warranties — lifetime valve, multi-year media, no
            fine print.
          </p>
        </div>
      </div>
    </section>
  );
}
