import type { ReactNode } from "react";

function MockChrome({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-nx-card/90 shadow-inner">
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="size-2 rounded-full bg-white/10" />
        <div className="ml-2 flex-1 truncate rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-nx-muted">
          tu-negocio.es
        </div>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

const examples = [
  {
    label: "Fitness",
    title: "Centro deportivo",
    outcome: "Más pruebas y altas",
    mock: (
      <MockChrome>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-sm font-semibold text-white">
              Prueba gratuita
            </p>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[9px] font-semibold text-nx-soft ring-1 ring-white/10">
              24h
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-nx-muted">
            Horarios claros · Planes · Opiniones reales
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <p className="text-[9px] text-nx-muted">Clases</p>
              <p className="mt-1 font-display text-xs font-bold text-white">HIIT</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <p className="text-[9px] text-nx-muted">Ubicación</p>
              <p className="mt-1 font-display text-xs font-bold text-white">Centro</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <p className="text-[9px] text-nx-muted">Valor</p>
              <p className="mt-1 font-display text-xs font-bold text-white">Desde 39€</p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-nx-neon/25 via-nx-violet/25 to-nx-fuchsia/15 px-3 py-2 text-center text-[11px] font-semibold text-white ring-1 ring-white/10">
            Reservar prueba por WhatsApp
          </div>
        </div>
      </MockChrome>
    ),
  },
  {
    label: "Clínica",
    title: "Estética médica",
    outcome: "Más reservas de tratamiento",
    mock: (
      <MockChrome>
        <div className="space-y-3">
          <p className="font-display text-sm font-semibold text-white">
            Primera visita guiada
          </p>
          <div className="space-y-2">
            {["Facial", "Corporal", "Medicina estética"].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5"
              >
                <span className="text-[11px] text-nx-soft">{t}</span>
                <span className="text-[10px] font-semibold text-nx-neon">Info</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-nx-panel/60 px-2 py-2">
            <div>
              <p className="text-[9px] text-nx-muted">Próxima cita</p>
              <p className="text-[11px] font-semibold text-white">Hoy 17:30</p>
            </div>
            <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[10px] font-bold text-white ring-1 ring-white/10">
              Reservar
            </span>
          </div>
        </div>
      </MockChrome>
    ),
  },
  {
    label: "Restaurante",
    title: "Alta cocina local",
    outcome: "Más reservas y pedidos",
    mock: (
      <MockChrome>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-display text-sm font-semibold text-white">
                Menú de temporada
              </p>
              <p className="mt-1 text-[10px] text-nx-muted">Carta corta · vinos · chef</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-semibold text-nx-soft">
              4.9 ★
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-2">
              <p className="text-[9px] text-nx-muted">Entrante</p>
              <p className="mt-1 text-[11px] font-semibold text-white">Tartar</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-2">
              <p className="text-[9px] text-nx-muted">Principal</p>
              <p className="mt-1 text-[11px] font-semibold text-white">Brasa</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] py-2 text-center text-[10px] font-semibold text-white">
              Reservar mesa
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] py-2 text-center text-[10px] font-semibold text-white">
              Pedir a domicilio
            </div>
          </div>
        </div>
      </MockChrome>
    ),
  },
] as const;

export function ExampleSites() {
  return (
    <section
      id="ejemplos"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-gradient-to-b from-nx-black to-nx-ink py-20 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.14),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
            Prueba visual
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            Ejemplos de webs que convierten
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            No son plantillas genéricas: son estructuras reales de negocio, con jerarquía,
            CTA claros y un look oscuro premium que se entiende en segundos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {examples.map((ex) => (
            <article
              key={ex.title}
              className="nx-card-surface group relative overflow-hidden p-5 sm:p-6"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                    {ex.label}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {ex.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-nx-soft">{ex.outcome}</p>
                </div>
                <span className="shrink-0 rounded-lg border border-white/10 bg-nx-black/60 px-2 py-1 text-[10px] font-semibold text-nx-neon ring-1 ring-white/5">
                  Demo
                </span>
              </div>
              <div className="relative mt-5">{ex.mock}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
