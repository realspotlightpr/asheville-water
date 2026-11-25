import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { ContactForm } from "../components/ContactForm";
import { business } from "../data/site";
import page from "../data/ashevilleFiltration.json";

const [city, well, installation, cost, consultation] = page.sections;
const textLink = "inline-flex min-h-11 items-center font-semibold text-specialist underline underline-offset-4";
const schema = {
  "@context": "https://schema.org", "@type": "Service", name: page.heading,
  serviceType: "Whole-home water filtration installation", areaServed: "Asheville, NC",
  provider: { "@type": "LocalBusiness", name: "Asheville Water Specialists", url: "https://avlwaterspecialists.com/" },
};

export function AshevilleFiltration() {
  return <>
    <Seo {...page} schema={schema} />
    <header className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_1fr]">
        <div className="self-center px-6 py-12 sm:px-10 lg:py-20">
          <p className="font-body text-sm font-semibold text-sky">Asheville Water Specialists</p>
          <h1 className="mt-4 max-w-[17ch] text-balance font-heading text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">{page.heading}</h1>
          <p className="mt-5 max-w-lg text-lg leading-7 text-white/90">{page.intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className="rounded-full bg-amber px-6 py-3.5 font-semibold text-ink hover:brightness-105" href="#contact">Get my free consultation</a>
            <a className="inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4" href={business.phoneHref}>Call {business.phone}</a>
          </div>
        </div>
        <figure className="relative isolate overflow-hidden">
          <img src={page.image} alt={page.caption} fetchPriority="high" className="h-64 w-full object-cover object-center sm:h-80 lg:absolute lg:inset-0 lg:h-full" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-navy/85 px-6 py-3 text-sm text-white">Whole-home well system installed in Western North Carolina</figcaption>
        </figure>
      </div>
    </header>
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Where does your water come from?</h2>
      <div className="mt-8 grid gap-9 md:grid-cols-2 md:gap-14">
        {[city, well].map(section => <div key={section.heading} className="border-t-2 border-specialist pt-5">
          <h3 className="font-heading text-2xl font-semibold text-navy">{section.heading}</h3>
          {section.paragraphs.map(p => <p key={p} className="mt-3 leading-7 text-ink/80">{p}</p>)}
          <Link to={section.links[0].href} className={textLink}>{section.links[0].label} →</Link>
        </div>)}
      </div>
    </section>
    <section className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-7 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <h2 className="max-w-xs font-heading text-3xl font-bold text-navy sm:text-4xl">{installation.heading}</h2>
        <div>{installation.paragraphs.map(p => <p key={p} className="mb-3 leading-7 text-ink/80">{p}</p>)}<Link to="/gallery/" className={textLink}>See more local installations →</Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-6 pt-14">
      <h2 className="mb-5 font-heading text-3xl font-bold text-navy">Planning your installation</h2>
      {[cost, consultation].map(section => <details key={section.heading} className="border-b border-navy/20 py-1">
        <summary className="cursor-pointer py-4 font-heading text-lg font-semibold text-navy">{section.heading}</summary>
        <p className="pb-5 leading-7 text-ink/80">{section.paragraphs[0]}</p>
      </details>)}
    </section>
    <ContactForm />
  </>;
}
