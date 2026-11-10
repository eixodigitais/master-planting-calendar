import { CheckIcon, CtaButton, ImageSlot, InView, LeafBranch } from "./ui";
import Sprout from "./Sprout";

const bullets = [
  <>Open the month. Know what to plant <em>today</em>. Done.</>,
  <>Never lose another harvest to bad timing or a late frost</>,
  <>Keep your beds producing from early spring to deep winter</>,
  <>Cut your grocery bill with every month you harvest</>,
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="paper relative overflow-hidden bg-cream pt-14">
      <LeafBranch className="absolute -left-4 top-14 h-32 w-24 opacity-70 sm:h-44 sm:w-32" />
      <LeafBranch flip className="absolute -right-4 top-14 h-32 w-24 opacity-70 sm:h-44 sm:w-32" tone="#4F7A3A" />

      <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div>
          <Sprout className="mx-auto mb-2 h-28 w-28 sm:h-32 sm:w-32 lg:mx-0 lg:-ml-3" />
          <p className="eyebrow text-sage-dark text-center lg:text-left">FOR BACKYARD GARDENERS IN USDA ZONES 3–10</p>
          <h1 id="hero-title" className="text-center font-serif text-[2.35rem] font-extrabold leading-[1.08] text-forest sm:text-5xl lg:text-left lg:text-[3.6rem]">
            Your Seeds Didn't Fail. Your Timing Did.
          </h1>
          <p className="mt-5 text-[1.06rem] text-soil">
            Every season you plant by guesswork, you're burying money in the dirt — wasted seeds, dead seedlings, and months of work wiped out by one late sowing or one surprise frost.
          </p>
          <p className="mt-4 text-[1.06rem] text-soil">
            <strong className="text-forest">The Master Planting Calendar ends the guessing for good.</strong> It tells you exactly what to sow, plant and harvest — every single day of the year — set to your USDA zone.
          </p>

          <div className="mt-7 lg:hidden">
            <ImageSlot
              file="hero-mockup.webp"
              ratio="4/3"
              eager
              alt="The Master Planting Calendar printed and open to a month, with a phone showing the cover, on a wooden table with seedlings"
              desc="Printed book open to a month + phone showing the cover, on a wooden table with seedlings (4:3)"
              className="shadow-warmlg"
            />
          </div>

          <InView as="ul" className="mt-7 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 font-semibold text-soil">
                <CheckIcon index={i} className="mt-0.5 h-6 w-6" />
                <span>{b}</span>
              </li>
            ))}
          </InView>

          <div className="mt-8 flex flex-col items-center lg:items-start">
            <CtaButton pulse className="w-full sm:w-auto">YES, I WANT MY PLANTING CALENDAR →</CtaButton>
            <p className="mt-3 text-center text-sm text-bark">
              Delivered instantly · Print it or use it on your phone · Set to your zone
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <ImageSlot
            file="hero-mockup.webp"
            ratio="4/3"
            eager
            alt="The Master Planting Calendar printed and open to a month, with a phone showing the cover, on a wooden table with seedlings"
            desc="Printed book open to a month + phone showing the cover, on a wooden table with seedlings (4:3)"
            className="shadow-warmlg"
          />
        </div>
      </div>
    </section>
  );
}
