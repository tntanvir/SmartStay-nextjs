import Brand from "./Components/Brand";
import ExploreCities from "./Components/ExploreCities";
import FAQSection from "./Components/FAQSection";
import Hero from "./Components/Hero";
import MostRecentRoom from "./Components/MostRecentRoom";
import PopulerRoom from "./Components/PopulerRoom";
import Reviews from "./Components/Reviews";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MostRecentRoom />
      <PopulerRoom />

      <ExploreCities />
      <FAQSection />
      <Reviews />
      <Brand />


    </div>
  );
}


