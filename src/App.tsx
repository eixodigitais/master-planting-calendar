import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Pain from "./components/Pain";
import Shift from "./components/Shift";
import Zone from "./components/Zone";
import Inside from "./components/Inside";
import HowItWorks from "./components/HowItWorks";
import Transformation from "./components/Transformation";
import Bonuses from "./components/Bonuses";
import Plans from "./components/Plans";
import Guarantee from "./components/Guarantee";
import Faq from "./components/Faq";
import Closing from "./components/Closing";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import { VineDivider } from "./components/ui";

const CREAM = "#F7F2E7";
const LINEN = "#EFE7D6";
const FOREST = "#2F4A34";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VineDivider from={CREAM} to={LINEN} />
        <Showcase />
        <VineDivider from={LINEN} to={CREAM} />
        <Pain />
        <VineDivider from={CREAM} to={LINEN} />
        <Shift />
        <VineDivider from={LINEN} to={CREAM} />
        <Zone />
        <VineDivider from={CREAM} to={LINEN} />
        <Inside />
        <VineDivider from={LINEN} to={CREAM} />
        <HowItWorks />
        <VineDivider from={CREAM} to={FOREST} />
        <Transformation />
        <VineDivider from={FOREST} to={CREAM} />
        <Bonuses />
        <VineDivider from={CREAM} to={LINEN} />
        <Plans />
        <VineDivider from={LINEN} to={CREAM} />
        <Guarantee />
        <VineDivider from={CREAM} to={LINEN} />
        <Faq />
        <VineDivider from={LINEN} to={FOREST} />
        <Closing />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
