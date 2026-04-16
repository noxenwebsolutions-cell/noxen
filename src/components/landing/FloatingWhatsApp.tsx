import { whatsappHref } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[max(1.1rem,env(safe-area-inset-bottom,0px))] right-[max(1.1rem,env(safe-area-inset-right,0px))] z-[60] grid size-14 place-items-center rounded-2xl border border-white/10 bg-nx-black/90 text-white shadow-[0_0_0_1px_rgba(168,85,247,0.35)_inset,0_12px_40px_-8px_rgba(168,85,247,0.55),0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/16 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.45)_inset,0_16px_50px_-6px_rgba(168,85,247,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-nx-neon)] active:translate-y-0"
      aria-label="Hablar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.42 3 4.04 8.38 4.04 15c0 2.17.57 4.22 1.57 6L3 29l8.17-2.55a11.9 11.9 0 0 0 4.87 1.02h.01C22.67 27.47 28 22.1 28 15c0-6.62-5.38-12-11.96-12Zm0 21.47h-.01c-1.85 0-3.67-.5-5.26-1.44l-.38-.23-5.5 1.71 1.75-5.35-.25-.4a9.45 9.45 0 0 1-1.45-5.06c0-5.22 4.25-9.47 9.5-9.47 5.24 0 9.5 4.25 9.5 9.47 0 5.23-4.26 9.48-9.5 9.48Zm5.3-7.1c-.29-.15-1.72-.85-1.99-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.91 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2-.17-.3-.02-.46.13-.61.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.15.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  );
}
