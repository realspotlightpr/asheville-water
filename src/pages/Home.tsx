import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { WhyUs } from "../components/WhyUs";
import { Products } from "../components/Products";
import { Comparison } from "../components/Comparison";
import { WaterSourceTabs } from "../components/WaterSourceTabs";
import { WaterHealth } from "../components/WaterHealth";
import { Features } from "../components/Features";
import { Journey } from "../components/Journey";
import { Stats } from "../components/Stats";
import { ServiceArea } from "../components/ServiceArea";
import { CtaBand } from "../components/CtaBand";
import { ProductSpotlight } from "../components/ProductSpotlight";
import { Link } from "react-router-dom";

const serviceGuides = [
  ["Water Filtration", "/water-filtration-systems-asheville-nc/", "Compare city and well-water filtration around testing, flow, and the job each treatment stage performs."],
  ["Water Softeners", "/water-softener-installation-asheville-nc/", "Understand hardness testing, sizing, installation, regeneration, salt, and maintenance."],
  ["Whole-Home Filtration", "/whole-home-water-filtration-asheville-nc/", "Plan treatment for every tap without creating unnecessary pressure loss or upkeep."],
  ["Well-Water Treatment", "/well-water-treatment-asheville-nc/", "Start with source protection and laboratory results for iron, odor, sediment, pH, and bacteria."],
  ["Reverse Osmosis", "/reverse-osmosis-installation-asheville-nc/", "Review feed-water conditions, certified claims, installation, performance, and filter service."],
  ["Water Testing", "/resources/topics/contaminants-testing/", "Choose useful tests, qualified laboratories, correct samples, and evidence-based next steps."],
];

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductSpotlight />
      <WhyUs />
      <Products limit={3} showViewAll heading="Popular Systems" consultationOnly />
      <Comparison />
      <WaterSourceTabs />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-specialist">Start with the right question</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">Asheville Water Treatment Service Guides</h2>
            <p className="mt-4 font-body leading-7 text-ink/65">Understand the testing, design, installation, and maintenance behind each option before choosing equipment.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGuides.map(([title, path, description]) => (
              <Link key={path} to={path} className="rounded-2xl border border-mist p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-md">
                <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-ink/65">{description}</p>
                <span className="mt-5 block font-body text-sm font-semibold text-specialist">Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WaterHealth />
      <Features />
      <Journey />
      <Stats />
      <ServiceArea />
      <CtaBand />
    </>
  );
}
