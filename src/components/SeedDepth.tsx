import { InView } from "./ui";

/** Animation 5 — soil cross-section, a seed falls and stops at the right depth. */
export default function SeedDepth({ className = "" }: { className?: string }) {
  return (
    <InView className={`seeddepth ${className}`} threshold={0.4}>
      <svg viewBox="0 0 220 200" role="img" aria-label="Soil cross-section: a seed resting at a depth of two to three times its width" className="h-full w-full">
        <rect x="0" y="0" width="220" height="60" fill="#EAF0E3" rx="12" />
        <path d="M0 60 C 40 54, 80 64, 110 58 S 180 54, 220 60 L220 200 L0 200 Z" fill="#9C7A5B" />
        <path d="M0 100 C 50 94, 100 106, 150 98 S 200 96, 220 100 L220 200 L0 200 Z" fill="#7E6047" />
        <path d="M0 150 C 60 144, 120 156, 220 148 L220 200 L0 200 Z" fill="#5E4735" />
        <g fill="#3B2F25" opacity=".35">
          <circle cx="30" cy="80" r="2" /><circle cx="170" cy="76" r="1.6" /><circle cx="60" cy="125" r="2.2" />
          <circle cx="190" cy="130" r="1.8" /><circle cx="120" cy="170" r="2.4" /><circle cx="40" cy="178" r="1.6" />
        </g>
        {/* seed resting at y ≈ 86 */}
        <g className="seed">
          <ellipse cx="110" cy="86" rx="9" ry="6" fill="#E8C98E" stroke="#3B2F25" strokeWidth="1.5" />
        </g>
        {/* ruler */}
        <g className="ruler">
          <line x1="138" y1="59" x2="138" y2="86" stroke="#D9A441" strokeWidth="2.5" />
          <line x1="132" y1="59" x2="144" y2="59" stroke="#D9A441" strokeWidth="2.5" />
          <line x1="132" y1="86" x2="144" y2="86" stroke="#D9A441" strokeWidth="2.5" />
          <line x1="101" y1="96" x2="119" y2="96" stroke="#F7F2E7" strokeWidth="1.5" />
          <line x1="101" y1="93" x2="101" y2="99" stroke="#F7F2E7" strokeWidth="1.5" />
          <line x1="119" y1="93" x2="119" y2="99" stroke="#F7F2E7" strokeWidth="1.5" />
          <rect x="148" y="62" width="66" height="22" rx="6" fill="#F7F2E7" />
          <text x="181" y="77" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#3B2F25" fontFamily="Nunito Sans, sans-serif">2–3× the</text>
          <rect x="148" y="86" width="66" height="22" rx="6" fill="#F7F2E7" />
          <text x="181" y="101" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#3B2F25" fontFamily="Nunito Sans, sans-serif">seed's width</text>
        </g>
      </svg>
    </InView>
  );
}
