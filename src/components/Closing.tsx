import { CtaButton, LeafBranch } from "./ui";

export default function Closing() {
  return (
    <section aria-label="The only difference is the calendar" className="paper relative overflow-hidden bg-forest text-cream">
      <LeafBranch className="absolute -left-4 top-0 h-36 w-28 opacity-60 sm:h-48 sm:w-36" tone="#7C9A6E" />
      <LeafBranch flip className="absolute -right-4 top-0 h-36 w-28 opacity-60 sm:h-48 sm:w-36" tone="#B9CFAB" />
      <div className="relative z-[1] mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:py-24 md:pt-28">
        <p className="mx-auto max-w-3xl text-center font-serif text-3xl leading-snug sm:text-5xl">
          Same backyard. Same soil. Same seeds.
          <br />
          <strong className="font-extrabold text-gold">The only difference is the calendar.</strong>
        </p>

        <div className="mt-10 flex flex-col items-center">
          <CtaButton className="w-full sm:w-auto">YES, I WANT MY PLANTING CALENDAR →</CtaButton>
        </div>
      </div>
    </section>
  );
}
