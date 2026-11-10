import { useRef, useState, type ReactNode } from "react";
import { Eyebrow, H2, ImageSlot, Section } from "./ui";
import KeyDates from "./KeyDates";
import Lightbox from "./Lightbox";

type Item = { icon: string; title: string; body: ReactNode; file: string; alt: string; desc: string; fallback?: ReactNode };

const items: Item[] = [
  { icon: "🌱", title: "Every month, mapped out", body: <>What to start, what's ready to pick right now, and this month's to-do list — with the soil and exact sowing depth for every crop. Zero research required.</>, file: "inside-month.webp", alt: "A full monthly planting page from the calendar (March)", desc: "Real month page, e.g. March (3:4)" },
  { icon: "📅", title: "All 365 days, already decided", body: <>Every day of the month on one grid. Colored dots tell you what you can sow, plant or harvest — <em>that exact day</em>.</>, file: "inside-grid.webp", alt: "Close-up of the daily planting grid with colored dots", desc: "Close-up of the day grid with colored dots (3:4)" },
  { icon: "⭕", title: "The dates that make or break your harvest", body: <>The day each planting window opens, circled. Miss it and the crop never catches up. Now you won't.</>, file: "inside-keydates.webp", alt: "Close-up of the circled key planting dates", desc: "Close-up of the circled key dates (3:4)", fallback: <KeyDates /> },
  { icon: "📖", title: "Every answer on one page", body: <>Sowing depth, watering, soil and what grows well side by side. The mistakes that kill most gardens — fixed before you make them.</>, file: "inside-reference.webp", alt: "A reference page showing how deep to sow each seed", desc: "Reference page, e.g. \"How deep to sow\" (3:4)" },
  { icon: "✏️", title: "The gardener's checklist", body: <>Print it. Pin it up. Tick it off. Watch your garden run like clockwork.</>, file: "inside-checklist.webp", alt: "The printed gardener's checklist held on a fridge with a magnet", desc: "Printed checklist on the fridge with a magnet (3:4)" },
];

function ShowCard({ item, onOpen, className = "" }: { item: Item; onOpen: (i: Item) => void; className?: string }) {
  const [ok, setOk] = useState(false);
  const media = (
    <ImageSlot file={item.file} alt={item.alt} ratio="3/4" desc={item.desc} fallback={item.fallback} onStatus={setOk} className="rounded-b-none" />
  );
  return (
    <article className={`card card-lift flex w-full shrink-0 snap-center snap-always flex-col overflow-hidden md:col-span-2 md:w-auto ${className}`}>
      {ok ? (
        <button type="button" onClick={() => onOpen(item)} className="block cursor-zoom-in" aria-label={`Enlarge image: ${item.title}`}>
          {media}
        </button>
      ) : (
        media
      )}
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold leading-snug text-forest">
          <span aria-hidden="true">{item.icon} </span>
          {item.title}
        </h3>
        <p className="mt-2 text-[0.98rem] text-bark">{item.body}</p>
      </div>
    </article>
  );
}

export default function Showcase() {
  const [open, setOpen] = useState<Item | null>(null);
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement | null>(null);
  const step = () => {
    const el = track.current;
    const first = el?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : 1;
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setActive(Math.min(items.length - 1, Math.max(0, Math.round(el.scrollLeft / step()))));
  };
  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * step(), behavior: smooth ? "smooth" : "auto" });
  };
  return (
    <Section bg="linen" labelledBy="look-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>TAKE A LOOK INSIDE</Eyebrow>
        <H2 id="look-title">This Is What "Never Guessing Again" Looks Like.</H2>
        <p className="mt-5 text-lg text-soil">
          No fluff. No 40-minute videos. No digging through seed packets. Just open the page — and the answer is right there.
        </p>
      </div>

      <div
        ref={track}
        onScroll={onScroll}
        className="mt-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-6"
      >
        {items.map((it, i) => (
          <ShowCard
            key={it.file}
            item={it}
            onOpen={setOpen}
            className={i === 3 ? "lg:col-start-2" : i === 4 ? "md:col-start-2 lg:col-start-auto" : ""}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {items.map((it, i) => (
          <button
            key={it.file}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1} / ${items.length}`}
            aria-current={i === active}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span className={`block h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-terracotta" : "w-2.5 bg-sage/50"}`} />
          </button>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-lg italic text-bark">
        Beautifully illustrated, made to live on your fridge or in your shed — not buried in a folder you'll never open.
      </p>

      {open && <Lightbox src={`/images/${open.file}`} alt={open.alt} onClose={() => setOpen(null)} />}
    </Section>
  );
}
