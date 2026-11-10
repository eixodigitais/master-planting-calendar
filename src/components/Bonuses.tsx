import type { ReactNode } from "react";
import { Eyebrow, H2, ImageSlot, Section } from "./ui";

const bonuses: { title: string; body: ReactNode; price: string; file: string; alt: string; desc: string }[] = [
  { title: "Your Zone, Pre-Set", body: <>Every date already adjusted to your zone — no math, no margin notes, no mistakes. Find your zone, print your page, plant. <em>Covers Zones 3–10.</em></>, price: "$17", file: "bonus-1-zone.webp", alt: "Mockup of the bonus Your Zone, Pre-Set", desc: "Mockup: Your Zone, Pre-Set (1:1)" },
  { title: "Seed Starting Made Simple", body: <>The calendar tells you <em>when</em> to sow indoors. This tells you <em>how</em>: trays, soil, light, warmth and hardening off — so every seed you start actually becomes a plant. <strong>Stop losing seedlings before they ever reach the garden.</strong></>, price: "$14", file: "bonus-2-seed.webp", alt: "Mockup of the bonus Seed Starting Made Simple", desc: "Mockup: Seed Starting Made Simple (1:1)" },
  { title: "Raised Bed Blueprints", body: <>Ready-made layouts for 4×8 and 4×4 beds, for every season, with the right plants already side by side. <strong>Copy the plan, plant the bed, done.</strong> No more wasted space, no more plants fighting each other.</>, price: "$17", file: "bonus-3-beds.webp", alt: "Mockup of the bonus Raised Bed Blueprints", desc: "Mockup: Raised Bed Blueprints (1:1)" },
  { title: "Garden Rescue Guide", body: <>Yellow leaves? Lettuce bolting? Seedlings flopping over? Aphids everywhere? Find the problem, see the cause, fix it fast — <strong>before one bad week wipes out a month of work.</strong></>, price: "$12", file: "bonus-4-rescue.webp", alt: "Mockup of the bonus Garden Rescue Guide", desc: "Mockup: Garden Rescue Guide (1:1)" },
  { title: "From Garden to Table", body: <>What to do with everything you grow. How to store, freeze and dry your harvest so it lasts for months — <strong>and keeps cutting your grocery bill long after the season ends.</strong></>, price: "$14", file: "bonus-5-table.webp", alt: "Mockup of the bonus From Garden to Table", desc: "Mockup: From Garden to Table (1:1)" },
];

export default function Bonuses() {
  return (
    <Section bg="cream" labelledBy="bonus-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>GET THE COMPLETE PLAN AND YOU ALSO GET…</Eyebrow>
        <H2 id="bonus-title">5 Bonuses That Take You From First Seed to Full Pantry</H2>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6">
        {bonuses.map((b, i) => (
          <article key={b.file} className="card card-lift flex items-start gap-4 overflow-hidden p-4 sm:gap-6 sm:p-5">
            <ImageSlot file={b.file} ratio="1/1" alt={b.alt} desc={b.desc} compact className="w-[100px] shrink-0 rounded-[12px] sm:w-[120px]" />
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-[13px] font-extrabold tracking-wider text-soil">🎁 BONUS {i + 1}</span>
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-forest sm:text-2xl">{b.title}</h3>
              <p className="mt-2 text-bark">{b.body}</p>
              <p className="mt-4 flex items-baseline gap-3 text-lg">
                <s className="text-bark" aria-label={`Regular price ${b.price}`}>{b.price}</s>
                <strong className="text-leaf">Included free</strong>
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl rounded-[18px] bg-forest px-6 py-5 text-center text-lg text-cream shadow-warm">
        <strong>Total bonus value: <s className="text-cream/75">$74</s> — yours free with the Complete Plan.</strong>
      </p>
    </Section>
  );
}
