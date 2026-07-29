import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

const services = [
  { id: "whole-home-filtration", title: "Whole-Home Water Filtration Services", body: "Custom whole-home filtration designed around your water source, household, plumbing, and water-quality goals." },
  { id: "reverse-osmosis", title: "Reverse Osmosis Drinking Water Systems", body: "Professionally installed under-sink reverse osmosis for cleaner, better-tasting drinking and cooking water." },
  { id: "well-water-treatment", title: "Well Water Treatment Systems", body: "Treatment for private-well concerns including iron, sulfur odor, manganese, sediment, hardness, and bacteria." },
  { id: "water-softeners", title: "Water Softener Systems", body: "Right-sized softening solutions that reduce mineral scale and help protect fixtures, plumbing, and appliances." },
  { id: "carbon-filtration", title: "Carbon Filtration Systems", body: "Whole-home carbon filtration for chlorine, chemical tastes and odors, and better water throughout your home." },
  { id: "city-water-treatment", title: "City Water Treatment Systems", body: "Targeted filtration and softening for Asheville-area municipal water, based on your home and priorities." },
];

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Water Treatment Services"
        title="Cleaner Water Solutions for Asheville & Western NC"
        subtitle="From whole-home filtration to drinking-water reverse osmosis, we recommend a system only after understanding your home, water source, and goals."
      />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article id={service.id} key={service.id} className="scroll-mt-32 rounded-2xl border border-mist bg-white p-7 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-navy">{service.title}</h2>
              <p className="mt-4 font-body text-sm leading-6 text-ink/70">{service.body}</p>
              <Link to="/contact" className="mt-6 inline-flex font-body text-sm font-bold text-specialist hover:underline">
                Get a Free Consultation →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
