import { whatsappHref } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="nx-wa-fab fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[60] hidden size-16 place-items-center rounded-2xl border border-white/[0.12] bg-[#0a0a0c]/95 text-white backdrop-blur-md transition duration-200 ease-out hover:-translate-y-1 hover:border-white/[0.18] hover:bg-[#111114] active:translate-y-0 active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-nx-neon)] sm:grid"
      aria-label="Hablar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="size-[1.65rem]" fill="currentColor" aria-hidden>
        <path d="M20.5 10.96c0 4.86-4.03 8.8-9 8.8-.93 0-1.83-.14-2.68-.4L4 21l1.78-4.12A8.9 8.9 0 0 1 2.5 10.96C2.5 6.1 6.53 2.16 11.5 2.16s9 3.94 9 8.8ZM7.9 9.05a1.1 1.1 0 0 0-1.05 1.16c0 .24.05.48.14.7.15.4.55 1.34.55 1.34s.95 2.2 3.25 3.86c1.85 1.3 2.6 1.4 3.1 1.18l.95-.44a1.1 1.1 0 0 0 .48-1.48l-.35-.82a.85.85 0 0 0-.98-.48l-1.05.35s-.6.18-1.25-.52c-.58-.62-.95-1.15-.95-1.15l.35-1.05a.85.85 0 0 0-.48-.98l-.82-.35a1.1 1.1 0 0 0-1.35.35Z" />
      </svg>
    </a>
  );
}
