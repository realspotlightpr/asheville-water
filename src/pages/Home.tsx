import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { WhyUs } from "../components/WhyUs";
import { Products } from "../components/Products";
import { Comparison } from "../components/Comparison";
import { WaterSourceTabs } from "../components/WaterSourceTabs";
import { WaterHealth } from "../components/WaterHealth";
import { Features } from "../components/Features";
import { Journey } from "../components/Journey";
import { ServiceArea } from "../components/ServiceArea";
import { HomeContact } from "../components/HomeContact";
import { ProductSpotlight } from "../components/ProductSpotlight";
import { SectionReveal } from "../components/ScrollMotion";
import { WaterProblemPathway } from "../components/WaterProblemPathway";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SectionReveal><ProductSpotlight /></SectionReveal>
      <SectionReveal><WhyUs /></SectionReveal>
      <SectionReveal><Products limit={3} showViewAll heading="Popular Systems" consultationOnly /></SectionReveal>
      <Comparison />
      <SectionReveal><WaterSourceTabs /></SectionReveal>
      <SectionReveal><WaterProblemPathway /></SectionReveal>
      <SectionReveal><WaterHealth /></SectionReveal>
      <SectionReveal><Features /></SectionReveal>
      <SectionReveal><Journey /></SectionReveal>
      <SectionReveal><ServiceArea /></SectionReveal>
      <SectionReveal><HomeContact /></SectionReveal>
    </>
  );
}
