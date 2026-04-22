import Link from "next/link";

const projects = [
  {
    name: "Trainr",
    description:
      "Aplicación enfocada en entrenamiento y nutrición personalizada, con una experiencia moderna y centrada en el usuario.",
    href: "https://www.trytrainr.com/",
  },
] as const;

function TrainrPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(closest-side,rgba(168,85,247,0.2),transparent_72%)] blur-xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#12121a] to-nx-black p-2 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-nx-card px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-cyan-500/20 text-xs font-semibold text-emerald-200/90 ring-1 ring-white/10">
              T
            </span>
            <div>
              <p className="text-[11px] font-semibold text-white">Trainr</p>
              <p className="text-[10px] font-medium text-nx-muted">Hoy · entreno</p>
            </div>
          </div>
          <span className="rounded-lg bg-white/[0.06] px-2 py-1 text-[10px] font-medium text-nx-soft ring-1 ring-white/[0.06]">
            72%
          </span>
        </div>
        <div className="mt-3 space-y-2 rounded-xl border border-white/[0.06] bg-nx-card-hover/40 p-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-nx-muted">
            <span>Semana</span>
            <span className="text-nx-neon">4/5 sesiones</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400/80 to-cyan-400/70" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="rounded-lg border border-white/[0.06] bg-nx-black/50 px-2 py-2 text-center">
              <p className="text-[9px] text-nx-muted">Pasos</p>
              <p className="mt-0.5 font-display text-sm font-semibold text-white">8.2k</p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-nx-black/50 px-2 py-2 text-center">
              <p className="text-[9px] text-nx-muted">Kcal</p>
              <p className="mt-0.5 font-display text-sm font-semibold text-white">420</p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-nx-black/50 px-2 py-2 text-center">
              <p className="text-[9px] text-nx-muted">Sueño</p>
              <p className="mt-0.5 font-display text-sm font-semibold text-white">7h</p>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-white/[0.08] bg-gradient-to-r from-nx-neon/15 via-transparent to-nx-violet/10 px-3 py-2.5 text-center text-[11px] font-medium text-nx-soft ring-1 ring-white/[0.04]">
          Nutrición y plan alineados a tu objetivo
        </div>
      </div>
    </div>
  );
}

export function RealProjects() {
  return (
    <section
      id="proyectos"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-nx-ink to-nx-black py-20 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[420px] w-[520px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.1),transparent_70%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
            Caso real
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            Proyecto publicado
          </h2>
          <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-nx-muted sm:text-lg text-balance">
            Menos promesas, más evidencia: un caso real con experiencia cuidada y diseño con
            intención.
          </p>
        </div>

        <div className="mt-16">
          {projects.map((p) => (
            <article
              key={p.name}
              className="nx-card-surface group relative overflow-hidden p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_min(320px,40%)] lg:items-center lg:gap-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.1),transparent_72%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                  Caso publicado
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm font-normal leading-relaxed text-nx-muted sm:text-base">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["UI premium", "Lectura rápida", "Decisiones de producto"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-nx-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_-12px_rgba(0,0,0,0.45)] transition duration-200 hover:border-white/[0.18] hover:bg-white/[0.08] hover:shadow-[0_8px_32px_-8px_rgba(168,85,247,0.15)] active:scale-[0.98] sm:w-auto sm:px-6"
                >
                  Ver proyecto
                  <span aria-hidden className="text-nx-neon">
                    ↗
                  </span>
                </Link>
              </div>
              <div className="relative mt-10 lg:mt-0">
                <TrainrPreview />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
