import { useRef, useState, type ReactNode } from "react";
import { H2, ImageSlot, Section } from "./ui";
import KeyDates from "./KeyDates";
import { IMAGES } from "../images";
import Lightbox from "./Lightbox";

type Item = { icon: string; title: string; body: ReactNode; file: string; alt: string; desc: string; fallback?: ReactNode };

const items: Item[] = [
  { icon: "🌱", title: "Every month mapped out", body: <>what to start, pick and do</>, file: "inside-month.webp", alt: "A full monthly planting page from the calendar", desc: "Month page (3:4)" },
  { icon: "📅", title: "All 365 days decided", body: <>colored dots show what to do each day</>, file: "inside-grid.webp", alt: "Close-up of the daily planting grid with colored dots", desc: "Day grid (3:4)" },
  { icon: "⭕", title: "Key dates circled", body: <>never miss a planting window</>, file: "inside-keydates.webp", alt: "Close-up of the circled key planting dates", desc: "Key dates (3:4)", fallback: <KeyDates /> },
  { icon: "📖", title: "Every answer on one page", body: <>depth, soil, watering</>, file: "inside-reference.webp", alt: "A reference page showing how deep to sow each seed", desc: "Reference page (3:4)" },
  { icon: "✏️", title: "Printable checklist", body: <>pin it up, tick it off</>, file: "inside-checklist.webp", alt: "The printed gardener's checklist held on a fridge with a magnet", desc: "Checklist (3:4)" },
]

function ShowCard({ item, onOpen, className = "" }: { item: Item; onOpen: (i: Item) => void; className?: string }) {
  const [ok, setOk] = useState(false);
  const media = (
    <ImageSlot file={item.file} alt={item.alt} ratio="3/4" desc={item.desc} fallback={item.fallback} onStatus={setOk} sizes="(min-width: 768px) 352px, calc(100vw - 32px)" className="rounded-b-none" />
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
        <p className="mt-1 text-[0.98rem] text-bark">{item.body}</p>
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
        <H2 id="look-title">Open Any Month. The Answer Is Right There.</H2>
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

      {open && <Lightbox src={IMAGES[open.file]?.src ?? ""} alt={open.alt} onClose={() => setOpen(null)} />}
    </Section>
  );
}
