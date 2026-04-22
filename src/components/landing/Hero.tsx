import Image from "next/image";
import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

function HeroMonolith() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0">
      <div
        className="pointer-events-none absolute -inset-24 bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_72%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-28 bg-[radial-gradient(closest-side,rgba(232,121,249,0.1),transparent_74%)] blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="absolute left-1/2 top-1/2 size-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(192,132,252,0.18),transparent_62%)] opacity-80 blur-md" />

        <div className="relative mx-auto flex max-w-[420px] flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-px shadow-[0_24px_80px_-40px_rgba(168,85,247,0.35)] nx-animate-rise">
            <div className="relative rounded-2xl bg-nx-black px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-9">
              <div className="nx-sheen pointer-events-none absolute inset-0 opacity-50" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative mx-auto w-[min(72vw,300px)]">
                <Image
                  src="/noxen-logo.png"
                  alt="Noxen — Web Solutions"
                  width={640}
                  height={640}
                  className="w-full object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.28)]"
                  priority
                />
              </div>

              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-nx-card px-4 py-3.5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-neon/90">
                    Objetivo
                  </p>
                  <p className="mt-1.5 font-display text-sm font-semibold text-white">
                    Más contactos
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-nx-card px-4 py-3.5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-fuchsia/90">
                    Entrega
                  </p>
                  <p className="mt-1.5 font-display text-sm font-semibold text-white">
                    Online en 72h
                  </p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-xl border border-white/[0.08] bg-nx-card/80 px-3 py-1.5 text-xs font-medium text-nx-soft">
                  WhatsApp visible
                </span>
                <span className="rounded-xl border border-white/[0.08] bg-nx-card/80 px-3 py-1.5 text-xs font-medium text-nx-soft">
                  Móvil primero
                </span>
                <span className="rounded-xl border border-white/[0.08] bg-nx-card/80 px-3 py-1.5 text-xs font-medium text-nx-soft">
                  Carga rápida
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-center text-xs font-medium leading-relaxed text-nx-muted">
            Dark premium, móvil impecable y CTA sin fricción.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-[5.35rem] sm:pb-28 sm:pt-28 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="nx-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-44 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.22),transparent_72%)] blur-2xl" />
        <div className="absolute top-40 right-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.1),transparent_72%)] blur-2xl" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent opacity-40 sm:left-6 lg:left-[max(0px,calc(50%-36rem)))]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-nx-muted">
                Web Solutions · negocios locales
              </p>
            </div>

            <h1 className="mt-7 font-display text-[2.05rem] font-bold leading-[1.05] text-white sm:mt-8 sm:text-5xl lg:text-6xl text-balance">
              Si tu web no transmite{" "}
              <span className="text-nx-neon drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
                confianza
              </span>{" "}
              en móvil, pierdes clientes.
            </h1>

            <p className="mt-5 max-w-md text-[0.98rem] font-normal leading-relaxed text-nx-muted sm:text-[1.05rem]">
              Te diseño una landing{" "}
              <span className="font-medium text-nx-soft">clara, rápida y dark premium</span> para
              que te escriban por WhatsApp (y no se vayan).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Respuesta rápida", tone: "text-nx-soft" },
                { label: "Precio claro", tone: "text-nx-soft" },
                { label: "Entrega en 72h", tone: "text-nx-soft" },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium ${item.tone}`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-3">
              <div className="flex w-full flex-col gap-2 sm:w-auto">
                <CtaButton
                  href={whatsappHref()}
                  variant="primary"
                  className="w-full min-h-[3.35rem] px-7 sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar por WhatsApp
                </CtaButton>
                <p className="text-center text-[13px] font-medium text-nx-muted sm:text-left">
                  Te digo si encaja y el precio cerrado.
                </p>
              </div>
              <CtaButton
                href="#proyectos"
                variant="secondary"
                className="w-full min-h-[3.35rem] sm:w-auto sm:min-h-[3.25rem]"
              >
                Ver proyectos reales
              </CtaButton>
            </div>

            <div className="mt-5">
              <CtaButton
                href={whatsappHref()}
                variant="ghost"
                className="min-h-0 justify-start px-0 py-2 text-sm font-medium text-nx-neon hover:bg-transparent hover:text-nx-soft sm:py-0"
              >
                Quiero mi web →
              </CtaButton>
            </div>

            <div className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-nx-card/90 px-4 py-3.5 text-sm leading-relaxed text-nx-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                  Enfoque
                </p>
                <p className="mt-1.5 font-medium text-white">Conversión en móvil</p>
                <p className="mt-1 text-nx-muted">
                  Jerarquía, copy y CTA para que el usuario actúe.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-nx-card/90 px-4 py-3.5 text-sm leading-relaxed text-nx-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                  Capacidad
                </p>
                <p className="mt-1.5 font-medium text-white">Pocos proyectos/mes</p>
                <p className="mt-1 text-nx-muted">Para entregar rápido y con nivel.</p>
              </div>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/[0.08] pt-8">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-nx-muted">
                  Entrega
                </dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-white">72h</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-nx-muted">
                  Meta
                </dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-white">
                  Mensajes
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-nx-muted">
                  Foco
                </dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-white">Local</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6">
            <HeroMonolith />
          </div>
        </div>
      </div>
    </section>
  );
}
