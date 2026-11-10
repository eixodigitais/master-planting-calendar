import { scrollToPlans } from "./ui";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-1.5 whitespace-nowrap font-serif text-[15px] font-bold text-forest sm:gap-2 sm:text-lg">
          <svg viewBox="0 0 24 24" className="hidden h-5 w-5 min-[400px]:block" aria-hidden="true">
            <path d="M12 21V11" stroke="#4F7A3A" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 12C12 7 8 5 4 5c0 4 3 7 8 7Z" fill="#7C9A6E" />
            <path d="M12 14c0-4 3-6 8-6 0 4-3 6-8 6Z" fill="#4F7A3A" />
          </svg>
          Master Planting Calendar
        </a>
        <a href="#plans" onClick={scrollToPlans} className="btn-small px-3 text-[13px] sm:px-4 sm:text-sm">
          Get the Calendar
        </a>
      </div>
    </header>
  );
}
