import { Link, useParams } from "react-router-dom";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icon";
import { Seo } from "../components/Seo";
import { business, products } from "../data/site";
import { cityProfiles } from "../data/cities";
import { NotFound } from "./NotFound";

const serviceCards = [
  {
    icon: "droplet",
    title: "Whole-Home Filtration",
    body: "Reduce chlorine, chemicals, taste, and odor concerns throughout the home with equipment selected for the source water.",
    link: "/products/complete-home-system",
  },
  {
    icon: "sparkle",
    title: "Water Softening",
    body: "Address hardness and scale with a properly sized softener or conditioning option based on household flow and priorities.",
    link: "/products/single-tank-softener",
  },
  {
    icon: "beaker",
    title: "Reverse Osmosis",
    body: "Improve drinking and cooking water at the kitchen sink with compact point-of-use reverse osmosis systems.",
    link: "/products/7-stage-ro",
  },
  {
    icon: "wind",
    title: "Private-Well Treatment",
    body: "Treat measured iron, sulfur, sediment, manganese, or bacteria concerns with components designed to work in sequence.",
    link: "/products/well-water-system",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 font-body text-sm leading-relaxed text-ink/70">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
      </span>
      {children}
    </li>
  );
}

export function CityPage() {
  const { slug } = useParams();
  const city = cityProfiles.find((profile) => profile.slug === slug);

  if (!city) return <NotFound />;

  const title = `Water Filtration & Softening in ${city.name}, NC | Asheville Water Specialists`;
  const description = `Water filtration, softeners, reverse osmosis, and private-well treatment in ${city.name}, NC. Licensed installation, transparent pricing, and a free personalized water report.`;
  const path = `/service-areas/${city.slug}`;
  const nearbyCities = city.nearby.map((nearbySlug) => cityProfiles.find((profile) => profile.slug === nearbySlug)).filter(Boolean);
  const startingPrice = products.find((product) => product.slug === "complete-home-system")?.price ?? "$2,699";

  const faqs = [
    {
      question: `What water treatment services are available in ${city.name}, NC?`,
      answer: `Asheville Water Specialists provides whole-home filtration, water softening, under-sink reverse osmosis, and private-well treatment in ${city.name}. The right solution depends on the property’s water source, test results, household flow, and priorities.`,
    },
    {
      question: `Do ${city.name} homes need a water softener or a filter?`,
      answer: `A softener and a filter solve different problems. Softeners address hardness minerals and scale; filters target concerns such as chlorine, taste, odor, sediment, or specific contaminants. Testing helps determine whether your home needs one, both, or neither.`,
    },
    {
      question: `Can you treat private-well water near ${city.name}?`,
      answer: `Yes. We serve private-well properties within our service radius. Well treatment is selected around measured conditions such as iron, sulfur, sediment, manganese, bacteria, hardness, and acidity rather than a one-size-fits-all package.`,
    },
    {
      question: `How much does a whole-home water system cost in ${city.name}?`,
      answer: `Our published whole-home systems currently start at ${startingPrice}, with flat-rate product pricing shown on the website. The appropriate equipment and final scope depend on your water, plumbing, flow requirements, and installation conditions.`,
    },
    {
      question: `How do I choose a water filtration company in ${city.name}?`,
      answer: `Look for clear testing, published or transparent pricing, licensed installation, written warranty terms, and a recommendation tied to your home’s actual water. Ask what each component treats and why it is included.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Water Filtration and Softening in ${city.name}, NC`,
      description,
      serviceType: ["Water filtration", "Water softening", "Reverse osmosis", "Private well water treatment"],
      areaServed: { "@type": "City", name: `${city.name}, North Carolina` },
      provider: {
        "@type": ["LocalBusiness", "Plumber"],
        name: business.name,
        telephone: business.phone,
        email: business.email,
        url: "https://asheville-water-specialists-432.netlify.app",
        image: "https://asheville-water-specialists-432.netlify.app/assets/asheville-water-logo.png",
        areaServed: `${city.name}, NC`,
      },
      url: `https://asheville-water-specialists-432.netlify.app${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://asheville-water-specialists-432.netlify.app/" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://asheville-water-specialists-432.netlify.app/service-areas" },
        { "@type": "ListItem", position: 3, name: `${city.name}, NC`, item: `https://asheville-water-specialists-432.netlify.app${path}` },
      ],
    },
  ];

  return (
    <>
      <Seo title={title} description={description} path={path} schema={schema} />

      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-sky/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full bg-specialist/35 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-body text-xs text-white/55">
            <Link to="/" className="hover:text-white">Home</Link><span>/</span>
            <Link to="/service-areas" className="hover:text-white">Service Areas</Link><span>/</span>
            <span className="text-sky">{city.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">{city.county} Service Area</p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Water Filtration &amp; Softening in {city.name}, NC
              </h1>
              <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/75">{city.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="rounded-full bg-amber px-7 py-3.5 font-body text-sm font-semibold text-ink shadow-lg transition hover:-translate-y-0.5 hover:brightness-105">Get My Free Water Report</Link>
                <a href={business.phoneHref} className="rounded-full border-2 border-white/40 px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-white hover:text-navy">Call {business.phone}</a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-sky">At a Glance</p>
              <dl className="mt-5 space-y-5">
                <div><dt className="font-body text-xs text-white/50">Area served</dt><dd className="mt-1 font-heading font-semibold">{city.name} and nearby {city.county}</dd></div>
                <div><dt className="font-body text-xs text-white/50">Water sources supported</dt><dd className="mt-1 font-heading font-semibold">Municipal water and private wells</dd></div>
                <div><dt className="font-body text-xs text-white/50">Core services</dt><dd className="mt-1 font-heading font-semibold">Filtration, softening, RO &amp; well treatment</dd></div>
                <div><dt className="font-body text-xs text-white/50">Installation</dt><dd className="mt-1 font-heading font-semibold">Licensed North Carolina plumber</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">Local Water Treatment</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Water Solutions Built Around Your {city.name} Home</h2>
            <p className="mt-5 font-body text-base leading-8 text-ink/70">{city.summary}</p>
            <p className="mt-5 font-body text-base leading-8 text-ink/70">{city.localContext}</p>
            <p className="mt-5 font-body text-base leading-8 text-ink/70">{city.homeownerNote}</p>
          </article>

          <aside className="rounded-3xl bg-mist p-7 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-navy">What We Evaluate Before Recommending a System</h2>
            <ul className="mt-6 space-y-4">
              <CheckItem>Municipal supply or private-well source</CheckItem>
              <CheckItem>Hardness, scale, staining, taste, odor, and sediment</CheckItem>
              <CheckItem>Household size, bathrooms, and peak flow demand</CheckItem>
              <CheckItem>Existing plumbing and available installation space</CheckItem>
              <CheckItem>Whole-home protection versus drinking-water goals</CheckItem>
              <CheckItem>Maintenance preferences and written warranty coverage</CheckItem>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-mist/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">Services in {city.name}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Treatment for the Water Problem You Actually Have</h2>
            <p className="mt-4 font-body text-ink/65">Each technology has a specific job. We explain what it treats, what it does not treat, and why it belongs in the recommendation.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <Link key={service.title} to={service.link} className="group rounded-2xl border border-sky/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-specialist/10 text-specialist transition group-hover:bg-specialist group-hover:text-white"><Icon name={service.icon} className="h-6 w-6" /></span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/65">{service.body}</p>
                <span className="mt-5 inline-flex font-body text-xs font-semibold text-specialist">Explore options →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">Questions From {city.name} Homeowners</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Water Filtration &amp; Softener FAQs</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-mist bg-white p-6 shadow-sm open:border-sky/30 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-semibold text-navy">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-specialist transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl font-body text-sm leading-7 text-ink/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mist bg-white pb-20 pt-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-sky">Nearby Service Areas</p>
                <h2 className="mt-2 font-heading text-2xl font-bold">Also Serving Communities Near {city.name}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((nearby) => nearby && (
                  <Link key={nearby.slug} to={`/service-areas/${nearby.slug}`} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-sm text-white transition hover:bg-white hover:text-navy">{nearby.name}, NC</Link>
                ))}
                <Link to="/service-areas" className="rounded-full bg-amber px-4 py-2 font-body text-sm font-semibold text-ink">All Service Areas</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading={`Ready for Better Water in ${city.name}?`} sub={`Start with a free personalized water report for your ${city.name} home—no obligation and no high-pressure sales.`} />
    </>
  );
}
