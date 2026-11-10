import { Eyebrow, H2, Section } from "./ui";

/** Animation 10 — shield seal with a shine sweeping across every 5s. */
function Shield() {
  return (
    <svg viewBox="0 0 200 230" role="img" aria-label="7-day money-back guarantee seal" className="h-full w-full drop-shadow-[0_10px_20px_rgba(59,47,37,0.18)]">
      <defs>
        <clipPath id="shieldClip">
          <path d="M100 6 L186 36 V 108 C 186 166, 148 206, 100 224 C 52 206, 14 166, 14 108 V 36 Z" />
        </clipPath>
        <linearGradient id="shineGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M100 6 L186 36 V 108 C 186 166, 148 206, 100 224 C 52 206, 14 166, 14 108 V 36 Z" fill="#2F4A34" />
      <path d="M100 20 L172 45 V 108 C 172 158, 140 192, 100 208 C 60 192, 28 158, 28 108 V 45 Z" fill="none" stroke="#D9A441" strokeWidth="3" />
      <text x="100" y="98" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="800" fontSize="58" fill="#D9A441">7</text>
      <text x="100" y="124" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="15" letterSpacing="2" fill="#F7F2E7">-DAY</text>
      <text x="100" y="146" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1.5" fill="#F7F2E7">GUARANTEE</text>
      <path d="M78 166 C 88 160, 112 160, 122 166" stroke="#7C9A6E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M100 172 V 160 M100 164 C 96 156, 90 156, 86 158 C 90 164, 96 165, 100 164 Z M100 162 C 104 154, 110 154, 114 156 C 110 162, 104 163, 100 162 Z" fill="#7C9A6E" stroke="#7C9A6E" strokeWidth="1.5" />
      <g clipPath="url(#shieldClip)">
        <rect className="shine" x="0" y="-20" width="60" height="270" fill="url(#shineGrad)" />
      </g>
    </svg>
  );
}

export default function Guarantee() {
  return (
    <Section bg="cream" labelledBy="guar-title">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[240px_1fr] md:gap-14">
        <div className="mx-auto h-60 w-52 md:h-72 md:w-60">
          <Shield />
        </div>
        <div>
          <Eyebrow>🛡️ THE "TRY IT IN YOUR GARDEN" GUARANTEE</Eyebrow>
          <H2 id="guar-title">Use It for 7 Days. Love It — or Pay Nothing.</H2>
          <p className="mt-5 text-lg">Open the calendar. Find your zone. Flip to this month and see exactly what to do today.</p>
          <p className="mt-4 text-lg">
            If, within 7 days, you don't feel that this is the clearest, most useful planting plan you've ever had, just send us one email. <strong className="text-forest">You'll get every cent back. No questions. No hard feelings.</strong>
          </p>
          <p className="mt-4 text-lg">
            You either get a garden that finally works — or your money back. <strong className="text-forest">The only way to lose is to keep guessing.</strong>
          </p>
        </div>
      </div>
    </Section>
  );
}
