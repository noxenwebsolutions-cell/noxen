import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function Pricing() {
  return (
    <section id="oferta" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-120px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.18),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
            Oferta de entrada
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Una landing con acabado premium, sin precio de agencia grande.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            Para empezar fuerte: una página enfocada, bien diseñada y lista para captar
            contactos. Si luego quieres escalar, se apoya en una base sólida.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-nx-panel/55 p-[1px] shadow-[0_34px_120px_-55px_rgba(168,85,247,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-[-120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.14),transparent_70%)] blur-2xl" />
              <div className="absolute -right-28 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),transparent_72%)] blur-2xl" />
            </div>

            <div className="relative rounded-[27px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-nx-soft">Landing page</p>
                  <div className="mt-2 flex items-end gap-3">
                    <p className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                      250€
                    </p>
                    <p className="pb-2 text-sm font-medium text-nx-muted">entrada clara</p>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-nx-muted">
                    Precio orientativo para una landing enfocada. Si el alcance cambia, lo
                    cerramos con prioridades y cifras, sin sorpresas.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-soft">
                  Entrega rápida
                </div>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Diseño moderno alineado a tu marca",
                  "Responsive impecable, mobile first",
                  "Copy estructurado para conversión",
                  "WhatsApp / formulario / redes",
                  "Optimización básica de rendimiento",
                  "1 ronda de ajustes incluida",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-nx-black/40 px-4 py-3 text-sm text-nx-soft"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-nx-neon/30 to-nx-fuchsia/15 text-[11px] font-extrabold text-white ring-1 ring-white/10">
                      ✓
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-nx-muted">¿Dudas de alcance? Pregunta sin compromiso.</p>
                <CtaButton
                  href={whatsappHref()}
                  variant="primary"
                  className="w-full sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir propuesta
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
