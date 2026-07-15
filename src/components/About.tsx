export function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-sky/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gradient-to-br from-sky/35 to-specialist/10" />
          <img
            src="/assets/doug-makenna-founders.webp"
            alt="Doug and Makenna, founders of Asheville Water Specialists"
            className="relative aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-2xl"
            width="1200"
            height="1600"
            loading="eager"
            decoding="async"
            translate="no"
          />
          <figcaption className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8 sm:right-8">
            <p className="font-heading text-sm font-bold text-navy">A local family serving Western North Carolina</p>
            <p className="mt-1 font-body text-xs text-ink/60">Education first. Thoughtful recommendations. No pressure.</p>
          </figcaption>
        </figure>

        <div className="pt-8 lg:pt-0">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Meet the Founders
          </p>
          <h2 className="notranslate mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl" translate="no">
            Doug &amp; Makenna
          </h2>

          <div className="mt-7 space-y-6 font-body text-[15px] leading-7 text-ink/70">
            <div className="rounded-2xl border border-mist bg-slate-50/80 p-5 sm:p-6">
              <h3 className="notranslate font-heading text-base font-bold text-navy" translate="no">Doug</h3>
              <p className="mt-2">
                Doug brings years of hands-on home service experience, having built businesses from the ground up and spent countless hours sitting across kitchen tables from homeowners—listening first, educating second, and only then recommending the right solution. That philosophy has never changed. Long before entering the water filtration industry, Doug was passionate about helping people improve their health. As a lifelong health and wellness advocate, athlete, and former detox specialist, he understands that what we put into our bodies matters. Discovering the profound impact that clean water has on overall health made water filtration a natural extension of that lifelong mission.
              </p>
            </div>

            <div className="rounded-2xl border border-mist bg-slate-50/80 p-5 sm:p-6">
              <h3 className="notranslate font-heading text-base font-bold text-navy" translate="no">Makenna</h3>
              <p className="mt-2">
                Makenna has also dedicated much of her life to studying natural health, traditional healing arts, herbalism and supporting new mothers and growing families. Her passion lies in creating change that supports thriving LIFE, and that truly starts at home with the health of the family. She believes that clean water is one of the simplest yet most important investments a family can make today for their long-term health and peace of mind.
              </p>
            </div>
          </div>

          <blockquote className="mt-7 border-l-4 border-amber pl-5 font-body text-base leading-7 text-navy">
            When you call <span className="notranslate" translate="no">Asheville Water Specialists</span>, you're not getting a faceless corporation or a high-pressure sales pitch. You're working with a local family that genuinely cares about the water your family drinks, cooks with, and bathes in every day. Clean water is one of the foundations of a healthy home, and helping families across Western North Carolina build that foundation is exactly why <span className="notranslate" translate="no">Asheville Water Specialists</span> exists.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
