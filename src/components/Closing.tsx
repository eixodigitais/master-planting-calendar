import { CtaButton, Eyebrow, H2, LeafBranch } from "./ui";

export default function Closing() {
  return (
    <section aria-labelledby="close-title" className="paper relative overflow-hidden bg-forest text-cream">
      <LeafBranch className="absolute -left-4 top-0 h-36 w-28 opacity-60 sm:h-48 sm:w-36" tone="#7C9A6E" />
      <LeafBranch flip className="absolute -right-4 top-0 h-36 w-28 opacity-60 sm:h-48 sm:w-36" tone="#B9CFAB" />
      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow dark>THE CHOICE IS SIMPLE</Eyebrow>
          <H2 id="close-title" dark>Next Season, You Can Guess Again. Or You Can Know.</H2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-[18px] border border-cream/20 bg-cream/5 p-6 opacity-70">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#F7F2E7" opacity=".15" /><path d="M8 8l8 8M16 8l-8 8" stroke="#F7F2E7" strokeWidth="2.4" strokeLinecap="round" /></svg>
              <strong className="font-serif text-xl">Option one:</strong>
            </div>
            <p className="mt-3 text-lg">keep doing what you've been doing. Open ten tabs. Trust the seed packet. Plant "around now" — and hope this year turns out differently.</p>
          </div>
          <div className="rounded-[18px] border-2 border-gold bg-cream/10 p-6 shadow-warmlg">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#D9A441" /><path d="M6.5 12.5l3.6 3.6 7.4-8" fill="none" stroke="#2F4A34" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <strong className="font-serif text-xl text-gold">Option two:</strong>
            </div>
            <p className="mt-3 text-lg">open the calendar, find your zone, and know exactly what to plant, every single day of the year. Harvest something every month. Eat what you grow. Spend less at the store. And finally have the garden you've been working so hard for.</p>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-2xl leading-snug sm:text-4xl">
          Same backyard. Same soil. Same seeds.
          <br />
          <strong className="font-extrabold text-gold">The only difference is the calendar.</strong>
        </p>

        <div className="mt-10 flex flex-col items-center">
          <CtaButton className="w-full sm:w-auto">YES, I WANT MY PLANTING CALENDAR →</CtaButton>
          <p className="mt-3 text-center text-sm text-cream/85">Delivered instantly · Lifetime access + all future updates · 7-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
}
