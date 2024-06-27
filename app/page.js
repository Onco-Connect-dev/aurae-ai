import Banner from "@/components/Banner";

import HowWeWork from "@/components/HowWeWork";
import LineGraph from "@/components/LineGraph";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import TransformsHealthMonitoring from "@/components/TransformsHealthMonitoring";
import WhatsNew from "@/components/WhatsNew";
import WhyAuraeAI from "@/components/WhyAuraeAI";
import TabsComponent from "@/components/TabsComponent";

export default function Home() {
  return (
    <main className="flex w-full bg-white flex-col items-center justify-between">
      <Banner />
      <QuickHealthCheck />
      <LineGraph />
      <HowWeWork />
      <TransformsHealthMonitoring />
      <TabsComponent />
      <WhyAuraeAI />
      <WhatsNew /> 
    </main>
  );
}
