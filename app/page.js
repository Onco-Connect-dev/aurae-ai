import Banner from "@/components/Banner";

import HowWeWork from "@/components/HowWeWork";
import LineGraph from "@/components/LineGraph";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import TransformsHealthMonitoring from "@/components/TransformsHealthMonitoring";
import WhatsNew from "@/components/WhatsNew";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyAuraeAI from "@/components/WhyAuraeAI";

export default function Home() {
  return (
    <main className="flex w-screen overflow-x-hidden bg-white flex-col items-center justify-between">
      <Banner />
      <QuickHealthCheck />
      <LineGraph />
      <HowWeWork />

      <TransformsHealthMonitoring />
      <WhoWeWorkWith />
      <WhyAuraeAI />
      <WhatsNew />
    </main>
  );
}
