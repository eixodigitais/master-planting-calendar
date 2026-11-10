// Hotmart UTM tracking — same behavior as Hotmart's standard UTM script:
// if the page URL has query params, they are appended to every pay.hotmart.com
// link, plus sck=utm_source|utm_medium|utm_campaign|utm_term|utm_content.
const prefixHotmart = ["pay.hotmart.com"];

function getParamsHotmart(): string {
  const href = window.top?.location.href ?? window.location.href;
  const r = new URL(href);
  const a = r.searchParams.get("utm_source"),
    n = r.searchParams.get("utm_medium"),
    o = r.searchParams.get("utm_campaign"),
    m = r.searchParams.get("utm_term"),
    c = r.searchParams.get("utm_content");
  return href.indexOf("?") !== -1 ? `&sck=${a}|${n}|${o}|${m}|${c}` : "";
}

export function withUtm(url: string): string {
  if (typeof window === "undefined") return url;
  try {
    const t = new URLSearchParams(window.location.search).toString();
    if (!t) return url;
    if (!prefixHotmart.some((p) => url.indexOf(p) !== -1)) return url;
    return url + (url.indexOf("?") === -1 ? "?" : "&") + t + getParamsHotmart();
  } catch {
    return url;
  }
}

// Meta Pixel InitiateCheckout on checkout buttons.
type Fbq = (...args: unknown[]) => void;

export function trackCheckout(e: React.MouseEvent<HTMLAnchorElement>, plan: string, price: string) {
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq !== "function") return;
  const value = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  fbq("track", "InitiateCheckout", { value, currency: "USD", content_name: plan, num_items: 1 });
  // Same-tab click: wait a moment so the event is sent before leaving the page.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  const href = e.currentTarget.href;
  e.preventDefault();
  window.setTimeout(() => {
    window.location.href = href;
  }, 300);
}
