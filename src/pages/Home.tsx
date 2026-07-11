import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { WhyUs } from "../components/WhyUs";
import { Products } from "../components/Products";
import { Comparison } from "../components/Comparison";
import { WaterSourceTabs } from "../components/WaterSourceTabs";
import { Features } from "../components/Features";
import { Journey } from "../components/Journey";
import { Stats } from "../components/Stats";
import { ServiceArea } from "../components/ServiceArea";
import { CtaBand } from "../components/CtaBand";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyUs />
      <Products limit={3} showViewAll heading="Popular Systems" />
      <Comparison />
      <WaterSourceTabs />
      <Features />
      <Journey />
      <Stats />
      <ServiceArea />
      <CtaBand />
    </>
  );
}
