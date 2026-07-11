import { stats } from "../data/site";

export function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-4xl font-extrabold text-amber sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 font-body text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
