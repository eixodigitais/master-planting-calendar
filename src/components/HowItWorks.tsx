import { CtaButton, Eyebrow, H2, InView, Section } from "./ui";

const steps = [
  { t: "Find your zone", b: "Look up your USDA zone, set the calendar once, and every date in the book is right for your backyard. One minute — and you never do it again." },
  { t: "Open this month", b: "Flip to the current month. What to start, what to transplant, what to harvest and what to do this week — all on one page." },
  { t: "Do what today says", b: "Check today's date on the grid. Sow, plant or pick — then get back to your coffee. No research. No guessing. No \"I think it's time.\"" },
];

export default function HowItWorks() {
  return (
    <Section bg="cream" labelledBy="how-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>SO SIMPLE IT FEELS LIKE CHEATING</Eyebrow>
        <H2 id="how-title">3 Steps. 1 Minute a Day. A Garden That Finally Works.</H2>
      </div>

      <InView className="relative mt-12" threshold={0.25}>
        {/* dotted connecting line — horizontal on desktop, vertical on mobile */}
        <svg aria-hidden="true" className="dotgrow-h absolute left-0 top-[44px] hidden h-4 w-full md:block" viewBox="0 0 1000 16" preserveAspectRatio="none">
          <path d="M170 8 H 830" stroke="#C8643B" strokeWidth="3" strokeDasharray="2 12" fill="none" strokeLinecap="round" />
        </svg>
        <svg aria-hidden="true" className="dotgrow-v absolute left-[31px] top-10 h-[calc(100%-80px)] w-4 md:hidden" viewBox="0 0 16 1000" preserveAspectRatio="none">
          <path d="M8 0 V 1000" stroke="#C8643B" strokeWidth="3" strokeDasharray="2 14" fill="none" strokeLinecap="round" />
        </svg>
        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="flex gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative z-[1] flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full border-2 border-dashed border-terracotta/50 bg-cream font-serif text-5xl font-extrabold text-terracotta md:h-[104px] md:w-[104px] md:text-6xl">
                {i + 1}
              </span>
              <div className="card p-5 md:mt-4">
                <h3 className="font-serif text-xl font-bold text-forest">{s.t}</h3>
                <p className="mt-2 text-bark">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </InView>

      <p className="mx-auto mt-12 max-w-3xl text-center text-lg">
        <strong className="text-forest">That's it.</strong> No apps to learn, no videos to sit through, no notes to keep. Just a clear plan that tells you what to do — <em>before</em> it's too late to do it.
      </p>
      <div className="mt-8 flex justify-center">
        <CtaButton className="w-full sm:w-auto">YES, I WANT MY PLANTING CALENDAR →</CtaButton>
      </div>
    </Section>
  );
}
