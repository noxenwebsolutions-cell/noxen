import Image from "next/image";
import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

function HeroMonolith() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0">
      <div
        className="pointer-events-none absolute -inset-24 bg-[radial-gradient(closest-side,rgba(124,58,237,0.22),transparent_72%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-28 bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_74%)] blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="absolute left-1/2 top-1/2 size-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(192,132,252,0.22),transparent_62%)] opacity-80 blur-md" />

        <div className="relative mx-auto flex max-w-[420px] flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1px] shadow-[0_40px_120px_-55px_rgba(168,85,247,0.75)] nx-animate-rise">
            <div className="relative rounded-[27px] bg-nx-black px-6 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-9">
              <div className="nx-sheen pointer-events-none absolute inset-0 opacity-60" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative mx-auto w-[min(72vw,320px)]">
                <Image
                  src="/noxen-logo.png"
                  alt="Noxen — Web Solutions"
                  width={640}
                  height={640}
                  className="w-full object-contain drop-shadow-[0_0_55px_rgba(168,85,247,0.35)]"
                  priority
                />
              </div>

              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-neon/90">
                    Enfoque
                  </p>
                  <p className="mt-1 font-display text-sm font-extrabold text-white">
                    Conversión real
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-fuchsia/90">
                    Ritmo
                  </p>
                  <p className="mt-1 font-display text-sm font-extrabold text-white">
                    Online en 72h
                  </p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-white/10 bg-nx-panel/60 px-3 py-1 text-xs text-nx-soft">
                  Mobile first
                </span>
                <span className="rounded-full border border-white/10 bg-nx-panel/60 px-3 py-1 text-xs text-nx-soft">
                  Diseño afilado
                </span>
                <span className="rounded-full border border-white/10 bg-nx-panel/60 px-3 py-1 text-xs text-nx-soft">
                  Carga limpia
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-nx-muted">
            Identidad visual alineada con tu marca: oscuro, violeta neón y acabado premium.
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
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="nx-grid absolute inset-0 opacity-70" />
        <div className="absolute -top-44 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.28),transparent_72%)] blur-2xl" />
        <div className="absolute top-40 right-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_72%)] blur-2xl" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent opacity-40 sm:left-6 lg:left-[max(0px,calc(50%-36rem)))]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/35" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nx-muted">
                Web Solutions · negocios locales
              </p>
            </div>

            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] text-balance">
              Páginas web que{" "}
              <span className="bg-gradient-to-r from-white via-nx-neon to-nx-fuchsia bg-clip-text text-transparent">
                generan clientes
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-nx-muted sm:text-xl text-balance">
              Landing pages modernas para negocios locales, listas en{" "}
              <span className="font-semibold text-nx-soft">3 días</span>. Menos postureo,
              más claridad: diseño serio, mensaje directo y un móvil que vende por ti.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton
                href={whatsappHref()}
                variant="primary"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                Pedir propuesta
              </CtaButton>
              <CtaButton href="#proceso" variant="secondary" className="w-full sm:w-auto">
                Ver cómo trabajamos
              </CtaButton>
            </div>

            <dl className="mt-11 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-9">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                  Entrega
                </dt>
                <dd className="mt-1 font-display text-lg font-extrabold text-white">72h</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                  Objetivo
                </dt>
                <dd className="mt-1 font-display text-lg font-extrabold text-white">
                  Contactos
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
                  Alcance
                </dt>
                <dd className="mt-1 font-display text-lg font-extrabold text-white">Local</dd>
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
