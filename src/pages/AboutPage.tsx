import { PageHeader } from "../components/PageHeader";
import { About } from "../components/About";
import { WhyUs } from "../components/WhyUs";
import { CtaBand } from "../components/CtaBand";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Locally Owned. Personally Installed."
        subtitle="We help Western North Carolina homeowners understand exactly what's in their water before recommending the right solution."
      />
      <About />
      <WhyUs />
      <CtaBand />
    </>
  );
}
