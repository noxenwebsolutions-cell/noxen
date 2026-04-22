import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] sm:hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 pb-[max(0.9rem,env(safe-area-inset-bottom,0px))] pt-3">
        <div className="rounded-2xl border border-white/[0.1] bg-nx-black/80 p-2 backdrop-blur-xl shadow-[0_18px_60px_-30px_rgba(0,0,0,0.75)]">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <CtaButton
              href={whatsappHref()}
              variant="primary"
              className="min-h-[3.25rem] w-full justify-center"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp · pedir presupuesto
            </CtaButton>
            <CtaButton
              href="#proyectos"
              variant="secondary"
              className="min-h-[3.25rem] px-4"
            >
              Ver
            </CtaButton>
          </div>
          <p className="mt-2 px-1 text-center text-[11px] font-medium text-nx-muted">
            Respuesta rápida · Precio claro · Entrega en 72h
          </p>
        </div>
      </div>
    </div>
  );
}

