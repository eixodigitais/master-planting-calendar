import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Pain from "./components/Pain";
import Zone from "./components/Zone";
import Inside from "./components/Inside";
import Transformation from "./components/Transformation";
import Bonuses from "./components/Bonuses";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import Closing from "./components/Closing";
import Footer from "./components/Footer";
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
        <Inside />
        <VineDivider from={LINEN} to={CREAM} />
        <Zone />
        <VineDivider from={CREAM} to={FOREST} />
        <Transformation />
        <VineDivider from={FOREST} to={CREAM} />
        <Bonuses />
        <VineDivider from={CREAM} to={LINEN} />
        <Plans />
        <VineDivider from={LINEN} to={CREAM} />
        <Faq />
        <VineDivider from={CREAM} to={FOREST} />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
