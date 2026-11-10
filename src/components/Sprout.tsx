import { InView } from "./ui";

/** Animation 1 — a seed opens in the soil, a stem draws up and two leaves unfold. */
export default function Sprout({ className = "" }: { className?: string }) {
  return (
    <InView className={`sprout ${className}`} threshold={0.3}>
      <svg viewBox="0 0 200 200" role="img" aria-label="A seed sprouting from the soil" className="h-full w-full">
        {/* soil */}
        <ellipse cx="100" cy="168" rx="86" ry="18" fill="#6B5B4B" opacity="0.18" />
        <path d="M18 160 C 50 150, 80 156, 100 152 S 160 150, 182 160 L182 176 C 140 186, 60 186, 18 176 Z" fill="#8A6A4F" opacity="0.85" />
        <circle cx="48" cy="166" r="2.2" fill="#3B2F25" opacity="0.4" />
        <circle cx="140" cy="170" r="2" fill="#3B2F25" opacity="0.4" />
        <circle cx="120" cy="163" r="1.6" fill="#3B2F25" opacity="0.35" />
        {/* seed halves */}
        <g transform="translate(100 156)">
          <path className="seed-split seed-l" d="M0 0 C -10 0, -12 -8, -6 -13 C -3 -15, 0 -14, 0 -12 Z" fill="#C89A5E" />
          <path className="seed-split seed-r" d="M0 0 C 10 0, 12 -8, 6 -13 C 3 -15, 0 -14, 0 -12 Z" fill="#B88A4E" />
        </g>
        {/* stem */}
        <path className="draw s-stem" pathLength={1} d="M100 152 C 100 130, 96 112, 100 84" fill="none" stroke="#4F7A3A" strokeWidth="5" strokeLinecap="round" />
        {/* leaves */}
        <g className="leaves">
          <path className="fill-in" d="M100 90 C 84 66, 56 62, 38 70 C 50 92, 78 100, 100 90 Z" fill="#7C9A6E" />
          <path className="fill-in" d="M100 86 C 112 58, 142 50, 164 58 C 154 84, 126 96, 100 86 Z" fill="#4F7A3A" />
          <path className="draw s-leaf-l" pathLength={1} d="M100 90 C 84 66, 56 62, 38 70 C 50 92, 78 100, 100 90 Z" fill="none" stroke="#2F4A34" strokeWidth="2.5" strokeLinejoin="round" />
          <path className="draw s-leaf-r" pathLength={1} d="M100 86 C 112 58, 142 50, 164 58 C 154 84, 126 96, 100 86 Z" fill="none" stroke="#2F4A34" strokeWidth="2.5" strokeLinejoin="round" />
          <path className="fill-in" d="M98 88 C 80 80, 62 74, 46 72" fill="none" stroke="#2F4A34" strokeWidth="1.4" opacity=".5" />
          <path className="fill-in" d="M102 84 C 120 74, 140 64, 158 60" fill="none" stroke="#F7F2E7" strokeWidth="1.4" opacity=".5" />
        </g>
      </svg>
    </InView>
  );
}
