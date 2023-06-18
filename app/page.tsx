import Posts from "./components/VectorPosts/Posts";
import ComplexServicesSection from "./components/sections/ComplexServices";
import FAQSection from "./components/sections/FAQSection";
import Hero from "./components/sections/Hero/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import ValueForValueExplanation from "./components/sections/ValueForValueExplanation";
import VectorRequest from "./components/sections/VectorRequest";

export const revalidate = 10;

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowItWorks />
      <Posts />
      <VectorRequest />
      <ComplexServicesSection />
      <FAQSection />
    </div>
  );
}
