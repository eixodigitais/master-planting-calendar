import { H2, ImageSlot, Section } from "./ui";

const bonuses: { title: string; body: string; price: string; file: string; alt: string }[] = [
  { title: "Your Zone, Pre-Set", body: "every date already adjusted to your zone", price: "$17", file: "bonus-1-zone.webp", alt: "Cover of the bonus Your Zone, Pre-Set" },
  { title: "Seed Starting Made Simple", body: "get every seed to sprout", price: "$14", file: "bonus-2-seed.webp", alt: "Cover of the bonus Seed Starting Made Simple" },
  { title: "Raised Bed Blueprints", body: "ready-made bed layouts", price: "$17", file: "bonus-3-beds.webp", alt: "Cover of the bonus Raised Bed Blueprints" },
  { title: "Garden Rescue Guide", body: "spot the problem, fix it fast", price: "$12", file: "bonus-4-rescue.webp", alt: "Cover of the bonus Garden Rescue Guide" },
  { title: "From Garden to Table", body: "store your harvest for months", price: "$14", file: "bonus-5-table.webp", alt: "Cover of the bonus From Garden to Table" },
];

export default function Bonuses() {
  return (
    <Section bg="cream" labelledBy="bonus-title">
      <div className="mx-auto max-w-3xl text-center">
        <H2 id="bonus-title">5 Bonuses With the Complete Plan</H2>
      </div>

      <ul className="mx-auto mt-10 max-w-3xl space-y-3">
        {bonuses.map((b) => (
          <li key={b.file} className="card card-lift flex items-center gap-4 p-3 sm:gap-5 sm:p-4">
            <ImageSlot file={b.file} ratio="1/1" alt={b.alt} desc="" compact sizes="(min-width: 640px) 88px, 72px" className="w-[72px] shrink-0 rounded-[10px] sm:w-[88px]" />
            <p className="min-w-0 flex-1 leading-snug">
              <span aria-hidden="true">🎁 </span>
              <strong className="font-serif text-lg text-forest">{b.title}</strong>
              <span className="text-bark"> — {b.body}</span>
            </p>
            <s className="shrink-0 text-lg font-semibold text-bark" aria-label={`Regular price ${b.price}`}>{b.price}</s>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-3xl rounded-[18px] bg-forest px-6 py-5 text-center text-lg text-cream shadow-warm">
        <strong>Total value: <s className="text-cream/75">$74</s> — free with the Complete Plan</strong>
      </p>
    </Section>
  );
}
