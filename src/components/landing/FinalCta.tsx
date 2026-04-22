import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";
import { SocialProfileLinks } from "./SocialProfileLinks";

export function FinalCta() {
  return (
    <section id="contacto" className="relative scroll-mt-28 overflow-hidden pb-32 pt-6 sm:pb-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-nx-panel/90 via-nx-ink/85 to-nx-black shadow-[0_32px_100px_-48px_rgba(168,85,247,0.45)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.32),transparent_70%)] blur-2xl" />
            <div className="absolute -right-28 bottom-[-160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.14),transparent_72%)] blur-2xl" />
            <div className="nx-grid absolute inset-0 opacity-35" />
          </div>

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
                Siguiente paso
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-[2.55rem] text-balance">
                Si tu negocio no transmite confianza online, estás perdiendo clientes.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-nx-soft sm:text-lg text-balance">
                Te hago una web moderna, clara y pensada para que te contacten por WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Pocos proyectos/mes", "Entrega en 72h", "Precio cerrado"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-nx-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/[0.1] bg-nx-card/80 p-6 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.5)]">
                <p className="text-sm font-semibold text-white">Dime tu negocio y tu meta</p>
                <p className="mt-2 text-sm leading-relaxed text-nx-muted">
                  Trabajo con pocos proyectos al mes para entregar rápido y bien. Si encaja, te
                  digo el plan y el precio cerrado antes de empezar.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CtaButton
                    href={whatsappHref()}
                    variant="primary"
                    className="w-full sm:min-h-[52px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hablar por WhatsApp
                  </CtaButton>
                  <CtaButton href="#ejemplos" variant="secondary" className="w-full sm:min-h-[48px]">
                    Ver ejemplos
                  </CtaButton>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                    Redes
                  </p>
                  <SocialProfileLinks variant="compact" className="mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
