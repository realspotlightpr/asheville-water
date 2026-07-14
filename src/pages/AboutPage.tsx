import { PageHeader } from "../components/PageHeader";
import { About } from "../components/About";
import { WhyUs } from "../components/WhyUs";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Asheville Water Specialists",
  description:
    "Meet Doug and Makenna, the local founders of Asheville Water Specialists serving homeowners across Western North Carolina.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Asheville Water Specialists",
    image:
      "https://asheville-water-specialists-432.netlify.app/assets/doug-makenna-founders.webp",
    telephone: "+1-828-903-8433",
    areaServed: "Western North Carolina",
    founder: [
      { "@type": "Person", name: "Doug" },
      { "@type": "Person", name: "Makenna" },
    ],
  },
};

export function AboutPage() {
  return (
    <>
      <Seo
        title="Meet Doug & Makenna | Asheville Water Specialists"
        description="Meet Doug and Makenna, the local family behind Asheville Water Specialists and their education-first approach to cleaner water across Western North Carolina."
        path="/about"
        schema={aboutSchema}
      />
      <PageHeader
        eyebrow="About Us"
        title="Local Knowledge. Family Values."
        subtitle="We help Western North Carolina homeowners understand exactly what's in their water before recommending the right solution."
      />
      <About />
      <WhyUs />
      <CtaBand />
    </>
  );
}
