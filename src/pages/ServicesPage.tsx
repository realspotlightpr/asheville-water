import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { business } from "../data/site";
import { organizationSchema, siteUrl } from "../data/seo";

const services = [
  {
    id: "whole-home-filtration",
    title: "Whole-Home Water Filtration Services",
    searchLabel: "Whole-home water filtration in Asheville, NC",
    body: "Custom filtration for city or well water, selected around your water test, household demand, plumbing, and concerns such as chlorine, sediment, odors, or unwanted tastes.",
    outcomes: ["Cleaner water at every tap", "Treatment sized for your household", "Professional installation and startup"],
  },
  {
    id: "reverse-osmosis",
    title: "Reverse Osmosis Drinking Water Systems",
    searchLabel: "Reverse osmosis system installation",
    body: "Professionally installed under-sink reverse osmosis systems provide cleaner, better-tasting water for drinking, cooking, coffee, and ice without relying on bottled water.",
    outcomes: ["High-quality drinking water", "Compact under-sink installation", "Clear filter-maintenance guidance"],
  },
  {
    id: "well-water-treatment",
    title: "Well Water Treatment Systems",
    searchLabel: "Well water treatment in Western North Carolina",
    body: "Private-well treatment planned around testing and site conditions, including solutions for iron staining, sulfur odor, manganese, sediment, hardness, acidity, and microbial concerns.",
    outcomes: ["Treatment based on test results", "Solutions for common WNC well issues", "Proper flow-rate and equipment sizing"],
  },
  {
    id: "water-softeners",
    title: "Water Softener Systems",
    searchLabel: "Water softener installation in Asheville",
    body: "Right-sized water softeners reduce hardness minerals that create scale, soap residue, spotting, and buildup in fixtures, plumbing, water heaters, and household appliances.",
    outcomes: ["Less scale and spotting", "Better soap and detergent performance", "Protection for plumbing and appliances"],
  },
  {
    id: "carbon-filtration",
    title: "Carbon Filtration Systems",
    searchLabel: "Whole-home carbon water filtration",
    body: "Whole-home activated-carbon filtration reduces chlorine and many taste or odor concerns in municipal water, improving water used for bathing, washing, drinking, and cooking.",
    outcomes: ["Reduced chlorine taste and odor", "Improved water throughout the home", "Low-maintenance treatment options"],
  },
  {
    id: "city-water-treatment",
    title: "City Water Treatment Systems",
    searchLabel: "City water filtration and softening",
    body: "Targeted filtration and softening for Asheville-area municipal water, designed around your home’s hardness, chlorine exposure, plumbing, family size, and water-quality priorities.",
    outcomes: ["Options for chlorine and hardness", "No one-size-fits-all packages", "Straightforward system recommendations"],
  },
];

const faqs = [
  {
    question: "What water treatment system does my Asheville home need?",
    answer: "The right system depends on whether you have city or well water, your test results, household water demand, plumbing, and the problems you want to solve. Asheville Water Specialists evaluates those factors before recommending equipment.",
  },
  {
    question: "Do you test the water before recommending a system?",
    answer: "Yes. Testing and a conversation about your home come before the recommendation. Well-water concerns may require additional laboratory testing when bacteria or specific contaminants are suspected.",
  },
  {
    question: "Can one system treat both hard water and chlorine?",
    answer: "Yes, some whole-home configurations combine softening and carbon filtration. Whether a combined or separate system is better depends on water conditions, flow requirements, available space, and maintenance preferences.",
  },
  {
    question: "Do you install reverse osmosis systems?",
    answer: "Yes. We install under-sink reverse osmosis drinking-water systems and explain filter replacement, operation, and ongoing maintenance.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Asheville and communities across Western North Carolina, including Hendersonville, Weaverville, Arden, Fletcher, Black Mountain, Candler, Canton, Brevard, Waynesville, and Mills River.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Water Filtration and Treatment Services",
  url: `${siteUrl}/services`,
  provider: {
    "@type": "LocalBusiness",
    name: business.name,
    telephone: "+1-828-903-8433",
    url: siteUrl,
  },
  areaServed: organizationSchema.areaServed,
  serviceType: services.map((service) => service.title),
  description: "Whole-home water filtration, water softener, reverse osmosis, well-water treatment, carbon filtration, and city-water treatment services in Asheville and Western North Carolina.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Water Filtration Services in Asheville, NC | Asheville Water Specialists"
        description="Whole-home filtration, water softeners, reverse osmosis, carbon filtration, and well-water treatment in Asheville and Western NC. Book a free consultation."
        path="/services"
        schema={[serviceSchema, faqSchema]}
      />
      <PageHeader
        eyebrow="Water Treatment Services"
        title="Water Filtration & Treatment Services in Asheville, NC"
        subtitle="Get cleaner, better-tasting water with a system selected for your water source, household, and goals—not a one-size-fits-all sales package."
      />

      <section className="border-b border-mist bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-navy">Start with your water—not a piece of equipment</h2>
            <p className="mt-3 max-w-3xl font-body leading-7 text-ink/70">
              Asheville homes can have very different water concerns depending on the source,
              neighborhood, plumbing, and household demand. We listen, test, explain the results,
              and recommend only the treatment that addresses your priorities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="rounded-full bg-amber px-6 py-3 font-body text-sm font-bold text-ink shadow transition hover:brightness-95">
              Get a Free Consultation
            </Link>
            <a href={business.phoneHref} className="rounded-full border-2 border-specialist px-6 py-3 font-body text-sm font-bold text-specialist transition hover:bg-specialist hover:text-white">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-7 md:grid-cols-2">
            {services.map((service) => (
              <article id={service.id} key={service.id} className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-specialist">{service.searchLabel}</p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-navy">{service.title}</h2>
                <p className="mt-4 font-body text-sm leading-6 text-ink/70">{service.body}</p>
                <ul className="mt-5 space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2 font-body text-sm text-ink/75">
                      <span className="font-bold text-specialist" aria-hidden="true">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-7 inline-flex rounded-full bg-navy px-5 py-2.5 font-body text-sm font-bold text-white transition hover:bg-specialist">
                  Request a Free Consultation →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-specialist">What to expect</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy">A clear path to better water</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Tell us what you notice", "Share your water source, concerns, household details, and what better water would mean for your family."],
              ["02", "Test and evaluate", "We assess the water and installation conditions so the recommendation is tied to evidence—not guesswork."],
              ["03", "Review clear options", "You receive a straightforward explanation, professional installation plan, and free consultation without pressure."],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-2xl bg-mist p-7">
                <span className="font-heading text-3xl font-extrabold text-specialist/30">{number}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 font-body text-sm leading-6 text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-specialist">Common questions</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy">Water treatment service FAQs</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-heading text-base font-bold text-navy">
                  {faq.question}
                  <span className="float-right text-specialist group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 font-body text-sm leading-6 text-ink/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
