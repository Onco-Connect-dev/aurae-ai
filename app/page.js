import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsNew from "@/components/WhatsNew";
import WhyAuraeAI from "@/components/WhyAuraeAI";

export default function Home() {
  return (
    <main className="flex bg-white w-screen flex-col items-center justify-between">
     <Header/>
     <Banner/>
     <WhyAuraeAI/>
     <WhatsNew/>
     <Footer/>
    </main>
  );
}
