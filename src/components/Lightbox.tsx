import { useEffect, useRef } from "react";

export default function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const btn = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    btn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose]);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-soil/85 p-4"
    >
      <button
        ref={btn}
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-2xl font-bold text-forest"
      >
        ×
      </button>
      <img src={src} alt={alt} className="max-h-[88vh] max-w-full rounded-[16px] shadow-warmlg" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
