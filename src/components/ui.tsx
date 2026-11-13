import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import { IMAGES } from "../images";

/* ---------- helpers ---------- */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function scrollToPlans(e?: React.MouseEvent) {
  e?.preventDefault();
  const el = document.getElementById("plans");
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

/** Fires once when the element enters the viewport. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Wrapper that adds `is-visible` once in view (drives CSS animations). */
export function InView({
  as: Tag = "div",
  className = "",
  threshold = 0.2,
  children,
  style,
  id,
}: {
  as?: ElementType;
  className?: string;
  threshold?: number;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  return (
    <Tag ref={ref} id={id} style={style} className={`${className} ${inView ? "is-visible" : ""}`}>
      {children}
    </Tag>
  );
}

/* ---------- section shell ---------- */
export function Section({
  id,
  bg = "cream",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  bg?: "cream" | "linen" | "forest";
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const bgClass =
    bg === "cream" ? "bg-cream text-soil" : bg === "linen" ? "bg-linen text-soil" : "bg-forest text-cream";
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative paper ${bgClass} ${className}`}>
      <InView className="reveal relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24" threshold={0.05}>
        {children}
      </InView>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`eyebrow ${dark ? "text-sage-light" : "text-sage-dark"} ${className}`}>{children}</p>;
}

export function H2({ id, children, dark = false, className = "" }: { id?: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2
      id={id}
      className={`font-serif font-bold text-[1.85rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${dark ? "text-cream" : "text-forest"} ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------- buttons ---------- */
export function CtaButton({
  children,
  pulse = false,
  className = "",
}: {
  children: ReactNode;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <a href="#plans" onClick={scrollToPlans} className={`btn-cta ${pulse ? "pulse" : ""} ${className}`}>
      {children}
    </a>
  );
}

/* ---------- icons ---------- */
export function CheckIcon({ index = 0, className = "", color = "#4F7A3A" }: { index?: number; className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`draw-check shrink-0 ${className}`}
      style={{ "--d": `${index * 0.18}s` } as CSSProperties}
    >
      <circle cx="12" cy="12" r="11" fill={color} opacity="0.14" />
      <path d="M6.5 12.5l3.6 3.6 7.4-8" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
    </svg>
  );
}

export function XIcon({ index = 0, className = "" }: { index?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`shake-x shrink-0 ${className}`}
      style={{ "--d": `${index * 0.2}s` } as CSSProperties}
    >
      <circle cx="12" cy="12" r="11" fill="#B6452C" opacity="0.13" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#B6452C" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- swaying leaf branch (animation 2) ---------- */
export function LeafBranch({ className = "", flip = false, tone = "#7C9A6E" }: { className?: string; flip?: boolean; tone?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g className="sway" style={{ transformOrigin: "10px 0px" }}>
        <path d="M10 0 C 30 40, 40 80, 70 150" fill="none" stroke={tone} strokeWidth="3" strokeLinecap="round" />
        <path d="M22 30 C 45 22, 62 32, 66 46 C 46 50, 30 44, 22 30 Z" fill={tone} opacity="0.85" />
        <path d="M30 62 C 10 58, 0 70, 2 84 C 20 86, 30 76, 30 62 Z" fill={tone} opacity="0.7" />
        <path d="M44 92 C 70 86, 88 98, 92 112 C 70 116, 52 108, 44 92 Z" fill={tone} opacity="0.85" />
        <path d="M54 120 C 36 118, 26 130, 28 144 C 46 146, 56 134, 54 120 Z" fill={tone} opacity="0.65" />
      </g>
    </svg>
  );
}

/* ---------- image slot with visible placeholder ---------- */
export function ImageSlot({
  file,
  alt,
  ratio,
  desc,
  eager = false,
  className = "",
  fallback,
  onStatus,
  compact = false,
  sizes,
}: {
  file: string;
  alt: string;
  ratio: string; // e.g. "4/3"
  desc: string;
  eager?: boolean;
  className?: string;
  fallback?: ReactNode;
  onStatus?: (ok: boolean) => void;
  compact?: boolean;
  sizes?: string;
}) {
  const info = IMAGES[file];
  const [status, setStatus] = useState<"loading" | "ok" | "error">(info ? "loading" : "error");
  const imgRef = useRef<HTMLImageElement | null>(null);
  const done = (ok: boolean) => {
    setStatus(ok ? "ok" : "error");
    onStatus?.(ok);
  };
  // The page is prerendered, so the image may finish loading before React hydrates
  // and attaches onLoad/onError. Read its state once after mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) done(img.naturalWidth > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const visible = status === "ok" || (eager && status !== "error");
  return (
    <div className={`relative overflow-hidden rounded-[16px] ${className}`} style={{ aspectRatio: ratio }}>
      {status !== "ok" &&
        (fallback && status === "error" ? (
          <div className="absolute inset-0">{fallback}</div>
        ) : !eager ? (
          <div className={`placeholder absolute inset-0 flex flex-col items-center justify-center gap-1 text-center ${compact ? "p-1.5" : "p-4"}`}>
            <span className={`font-bold text-forest ${compact ? "break-all text-[10px] leading-tight" : "text-[12px]"}`}>{file}</span>
            {!compact && <span className="text-[11px] leading-snug text-bark">{desc}</span>}
          </div>
        ) : null)}
      {info && (
        <img
          ref={imgRef}
          src={info.src}
          srcSet={info.srcSet}
          sizes={sizes}
          width={info.width}
          height={info.height}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          {...{ fetchpriority: eager ? "high" : "low" }}
          onLoad={() => done(true)}
          onError={() => done(false)}
          className={`absolute inset-0 h-full w-full object-cover ${eager ? "" : "transition-opacity duration-500"} ${visible ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

/* ---------- vine divider that draws as you scroll (animation 3) ---------- */
export function VineDivider({ from, to }: { from: string; to: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the divider enters the bottom, 1 when it reaches ~45% from top
      const prog = (vh - r.top) / (vh * 0.55);
      setP(Math.max(0, Math.min(1, prog)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const leaves = [
    [90, 30, -30], [210, 50, 30], [340, 28, -25], [470, 52, 35], [600, 30, -30],
    [730, 50, 30], [860, 28, -25], [990, 52, 35], [1110, 32, -30],
  ];
  return (
    <div aria-hidden="true" className="relative -my-px" style={{ background: from }}>
      <svg ref={ref} viewBox="0 0 1200 80" preserveAspectRatio="none" className="block h-[56px] w-full sm:h-[72px]">
        <path d="M0 40 C 150 80, 300 0, 450 40 S 750 80, 900 40 S 1100 10, 1200 40 L1200 80 L0 80 Z" fill={to} />
        <path
          d="M0 40 C 60 20, 120 60, 180 40 S 300 20, 360 40 S 480 60, 540 40 S 660 20, 720 40 S 840 60, 900 40 S 1020 20, 1080 40 S 1170 50, 1200 40"
          fill="none"
          stroke="#7C9A6E"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset={1 - p}
        />
        {leaves.map(([x, y, rot], i) => {
          const visible = p >= x / 1200;
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
              <path
                d="M0 0 C 6 -8, 16 -8, 20 0 C 16 8, 6 8, 0 0 Z"
                fill="#7C9A6E"
                style={{
                  opacity: visible ? 0.9 : 0,
                  transform: visible ? "scale(1)" : "scale(0.2)",
                  transition: "opacity .4s ease, transform .4s ease",
                  transformBox: "fill-box",
                  transformOrigin: "left center",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
