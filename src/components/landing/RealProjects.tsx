import Link from "next/link";

const projects = [
  {
    name: "Trainr",
    description:
      "Aplicación enfocada en entrenamiento y nutrición personalizada, con una experiencia moderna y centrada en el usuario.",
    href: "https://www.trytrainr.com/",
  },
] as const;

export function RealProjects() {
  return (
    <section
      id="proyectos"
      className="relative scroll-mt-28 border-t border-white/[0.06] bg-gradient-to-b from-nx-ink to-nx-black py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[420px] w-[520px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
            Credibilidad
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Proyectos reales
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            Ejemplos de webs enfocadas a resultados reales: producto publicado, con decisión
            de diseño y una experiencia que se nota al usarla.
          </p>
        </div>

        <div className="mt-14 max-w-2xl">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_60px_-44px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.035] hover:shadow-[0_28px_90px_-42px_rgba(168,85,247,0.32)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_72%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                  Caso publicado
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-nx-muted sm:text-base">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:border-white/18 hover:bg-white/[0.07] hover:shadow-[0_14px_40px_-24px_rgba(168,85,247,0.35)] sm:w-auto sm:px-6"
                >
                  Ver proyecto
                  <span aria-hidden className="text-nx-neon">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
