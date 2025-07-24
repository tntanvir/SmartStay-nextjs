import ExploreCities from "./Components/ExploreCities";
import FAQSection from "./Components/FAQSection";
import Hero from "./Components/Hero";
import PopulerRoom from "./Components/PopulerRoom";
import Reviews from "./Components/Reviews";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PopulerRoom />

      <ExploreCities />
      <FAQSection />
      <Reviews />


    </div>
  );
}
