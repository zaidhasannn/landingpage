import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ExploreCity from "./components/ExploreCity";
import DiagonalSection from "./components/DiagonalSection";
import ReframeSection from "./components/ReframeSection";
import IntelligenceSection from "./components/IntelligenceSection";
import CommunicateSection from "./components/CommunicateSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CommunicateSection/>
      <IntelligenceSection/>
      
      <ReframeSection/>
      <ExploreCity/>
      
      <DiagonalSection/>
      <Footer/>
    </>
  );
}
