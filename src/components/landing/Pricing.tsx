import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function Pricing() {
  return (
    <section id="oferta" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-120px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.18),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
            Precio claro
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            Desde <span className="text-nx-neon">250€</span> · landing lista en 72h
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            Ideal para validar rápido con una web seria.{" "}
            <span className="font-semibold text-nx-soft">Precio cerrado antes de empezar</span> ·
            sin sorpresas.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl sm:mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-nx-panel/55 p-px shadow-[0_24px_80px_-40px_rgba(168,85,247,0.4)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-[-120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.14),transparent_70%)] blur-2xl" />
              <div className="absolute -right-28 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),transparent_72%)] blur-2xl" />
            </div>

            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                    Inversión de entrada
                  </p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <p className="font-display text-5xl font-bold leading-none text-white sm:text-6xl">
                      250€
                    </p>
                    <p className="text-sm font-medium text-nx-soft">landing enfocada a contactos</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-nx-muted">
                    Precio cerrado antes de empezar. Si el alcance cambia, se ajusta antes de
                    arrancar y por escrito.
                  </p>
                </div>
                <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-soft">
                  Entrega en 72h
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Estructura + diseño con jerarquía de conversión",
                  "CTA fuerte a WhatsApp (y contacto alternativo)",
                  "Mobile‑first real (iPhone primero)",
                  "Carga rápida (sensación premium)",
                  "Copy directo: menos ruido, más acción",
                  "1 ronda de ajustes incluida",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-nx-black/40 px-4 py-3 text-sm text-nx-soft"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-nx-neon/30 to-nx-fuchsia/15 text-[11px] font-semibold text-white ring-1 ring-white/[0.1]">
                      ✓
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-nx-muted">
                  ¿No sabes si te encaja? Escríbeme y te digo en 2 minutos si es para ti.
                </p>
                <CtaButton
                  href={whatsappHref()}
                  variant="primary"
                  className="w-full sm:w-auto sm:min-h-[48px]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar por WhatsApp
                </CtaButton>
              </div>

              <div className="mt-4">
                <CtaButton
                  href={whatsappHref()}
                  variant="ghost"
                  className="w-full min-h-0 justify-center py-3 text-sm font-semibold text-nx-neon hover:bg-white/[0.04] hover:text-white sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quiero mi web (precio claro)
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
