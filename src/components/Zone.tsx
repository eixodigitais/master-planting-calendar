import type { CSSProperties } from "react";
import { H2, InView, Section } from "./ui";

const rows = [
  ["Zone 3", "4 weeks later", "Northern Minnesota, North Dakota", "Short season — favor fast varieties"],
  ["Zone 4", "3 weeks later", "Much of Wisconsin, Vermont, Maine", "Start more crops indoors"],
  ["Zone 5", "2 weeks later", "Much of Iowa, Michigan, Colorado", "Protect early transplants"],
  ["Zone 6", "No change", "Much of Ohio, Pennsylvania, Kansas", "The calendar's baseline"],
  ["Zone 7", "2 weeks earlier", "Much of Virginia, Tennessee, Oklahoma", "Longer fall — add a second sowing"],
  ["Zone 8", "3 weeks earlier", "Much of Georgia, North Texas, the Pacific Northwest", "Summer heat pauses leafy greens"],
  ["Zone 9", "4 weeks earlier", "Central Florida, Houston, California's Central Valley", "Grow cool crops through winter"],
  ["Zone 10", "5 weeks earlier", "South Florida, coastal Southern California", "Your main season is fall to spring"],
];
const heads = ["Your zone", "Shift every date", "Where you'll find it (examples)", "What changes for you"];

export default function Zone() {
  return (
    <Section bg="cream" labelledBy="zone-title">
      <div className="mx-auto max-w-3xl text-center">
        <H2 id="zone-title">Works Where You Live — USDA Zones 3–10</H2>
      </div>

      {/* desktop table */}
      <InView className="mt-10 hidden overflow-hidden rounded-[18px] bg-[#FBF8F1] shadow-warm md:block" threshold={0.15}>
        <table className="w-full text-left text-[0.98rem]">
          <thead className="bg-forest text-cream">
            <tr>{heads.map((h) => <th key={h} scope="col" className="px-5 py-4 font-bold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const base = r[0] === "Zone 6";
              return (
                <tr key={r[0]} className={`zone-row border-t border-soil/10 ${base ? "bg-gold/25" : ""}`} style={{ "--d": `${i * 0.09}s` } as CSSProperties}>
                  <th scope="row" className={`px-5 py-3.5 font-serif text-lg ${base ? "font-extrabold text-forest" : "font-bold text-forest"}`}>{r[0]}</th>
                  <td className={`px-5 py-3.5 ${base ? "font-extrabold" : "font-semibold"}`}>{r[1]}</td>
                  <td className="px-5 py-3.5 text-bark">{r[2]}</td>
                  <td className={`px-5 py-3.5 ${base ? "font-extrabold text-forest" : ""}`}>{r[3]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </InView>

      {/* mobile cards */}
      <InView as="ul" className="mt-10 space-y-3 md:hidden" threshold={0.05}>
        {rows.map((r, i) => {
          const base = r[0] === "Zone 6";
          return (
            <li key={r[0]} className={`zone-row rounded-[14px] p-4 shadow-warm ${base ? "bg-gold/25 ring-2 ring-gold" : "bg-[#FBF8F1]"}`} style={{ "--d": `${i * 0.08}s` } as CSSProperties}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-xl font-bold text-forest">{r[0]}</span>
                <span className={`text-right ${base ? "font-extrabold" : "font-semibold"}`}>{r[1]}</span>
              </div>
              <p className="mt-1 text-sm text-bark">{r[2]}</p>
              <p className={`mt-1 ${base ? "font-extrabold text-forest" : ""}`}>{r[3]}</p>
            </li>
          );
        })}
      </InView>

      <p className="mt-8 text-center text-lg">
        Don't know your zone? Enter your ZIP code on the{" "}
        <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noopener noreferrer" className="font-bold text-clay underline decoration-2 underline-offset-2 hover:text-forest">
          official USDA map
        </a>{" "}
        — it takes 10 seconds.
      </p>
    </Section>
  );
}
