import type { CSSProperties } from "react";
import { InView } from "./ui";

/** Animation 4 — a mini calendar where a gold circle draws around a key date. */
export default function KeyDates() {
  const days = Array.from({ length: 35 }, (_, i) => i - 2); // starts on a Wednesday
  const dots: Record<number, string> = { 3: "#7C9A6E", 6: "#C8643B", 9: "#7C9A6E", 14: "#D9A441", 15: "#7C9A6E", 21: "#C8643B", 24: "#4F7A3A", 28: "#7C9A6E" };
  const KEY = 14;
  return (
    <InView className="keydates h-full w-full bg-[#FBF8F1]" threshold={0.4}>
      <svg viewBox="0 0 240 320" role="img" aria-label="A mini monthly calendar with a key planting date circled in gold" className="h-full w-full">
        <rect x="0" y="0" width="240" height="320" fill="#FBF8F1" />
        <text x="120" y="46" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="700" fontSize="24" fill="#2F4A34">March</text>
        <line x1="40" y1="60" x2="200" y2="60" stroke="#7C9A6E" strokeWidth="1.5" opacity=".5" />
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <text key={i} x={30 + i * 30} y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6B5B4B" fontFamily="Nunito Sans, sans-serif">{d}</text>
        ))}
        {days.map((d, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const x = 30 + col * 30;
          const y = 116 + row * 38;
          if (d < 1 || d > 31) return null;
          return (
            <g key={i}>
              <text x={x} y={y} textAnchor="middle" fontSize="13" fontWeight={d === KEY ? 800 : 600} fill={d === KEY ? "#2F4A34" : "#3B2F25"} fontFamily="Nunito Sans, sans-serif">{d}</text>
              {dots[d] && <circle className="dot" cx={x} cy={y + 11} r="3" fill={dots[d]} style={{ "--d": `${0.2 + (d % 9) * 0.07}s` } as CSSProperties} />}
              {d === KEY && (
                <path
                  className="circle"
                  pathLength={1}
                  d={`M${x + 13} ${y - 14} C ${x + 22} ${y - 4}, ${x + 16} ${y + 14}, ${x} ${y + 14} C ${x - 16} ${y + 14}, ${x - 19} ${y - 2}, ${x - 12} ${y - 12} C ${x - 6} ${y - 19}, ${x + 8} ${y - 20}, ${x + 16} ${y - 10}`}
                  fill="none"
                  stroke="#D9A441"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}
            </g>
          );
        })}
        <g transform="translate(40 300)" fontFamily="Nunito Sans, sans-serif" fontSize="10" fill="#6B5B4B">
          <circle cx="0" cy="-3" r="3" fill="#7C9A6E" /><text x="7" y="0">sow</text>
          <circle cx="50" cy="-3" r="3" fill="#C8643B" /><text x="57" y="0">plant</text>
          <circle cx="108" cy="-3" r="3" fill="#4F7A3A" /><text x="115" y="0">harvest</text>
        </g>
      </svg>
    </InView>
  );
}
